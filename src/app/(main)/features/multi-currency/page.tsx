'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Globe2, ReceiptText, ShieldCheck, Store, TrendingUp, Users } from 'lucide-react';
import './multi-currency.css';

const faqs = [
  {
    question: 'How many currencies can I add?',
    answer:
      'You can add the currencies your jewelry business uses and select them when creating sales and purchase transactions.',
  },
  {
    question: 'Can I choose one base currency for reports?',
    answer:
      'Yes. Set your primary base currency and use it as the consistent reference point for business reporting.',
  },
  {
    question: 'Can I use different currencies for invoices and purchases?',
    answer:
      'Yes. Multi-currency support lets your team record invoices and purchases in the currency used for each transaction.',
  },
  {
    question: 'Who benefits most from multi-currency jewelry software?',
    answer:
      'Jewelry retailers, gold and silver wholesalers, and exporters benefit when they buy, sell, or report across international markets.',
  },
];

const currencies = {
  USD: { symbol: '$', rate: 1, locale: 'en-US', label: 'US Dollar' },
  GBP: { symbol: '£', rate: 0.76, locale: 'en-GB', label: 'British Pound' },
  EUR: { symbol: '€', rate: 0.86, locale: 'de-DE', label: 'Euro' },
  AED: { symbol: 'AED ', rate: 3.67, locale: 'en-AE', label: 'UAE Dirham' },
} as const;

type CurrencyCode = keyof typeof currencies;

const steps = [
  ['01', 'Add your currencies', 'Create the currency list your business needs—from USD and GBP to EUR, AED, and beyond.'],
  ['02', 'Set your reporting base', 'Choose one primary currency as the consistent reference for business reporting.'],
  ['03', 'Transact in the right currency', 'Create invoices and purchases using the currency that matches each customer or supplier.'],
] as const;

const audiences = [
  [Store, 'Jewelry retailers', 'Serve international customers and record sales in their preferred currency.'],
  [TrendingUp, 'Gold & silver wholesalers', 'Keep purchases and wholesale invoices aligned with each trading market.'],
  [Globe2, 'Jewelry exporters', 'Support cross-border transactions while reporting from one defined base currency.'],
] as const;

const values = [
  [ReceiptText, 'Consistent transactions', 'Record every sale and purchase in the currency actually used.'],
  [ShieldCheck, 'Clear reporting', 'Keep a defined base currency at the center of your reporting workflow.'],
  [Users, 'Confident teams', 'Give staff a straightforward way to handle domestic and international customers.'],
] as const;

function CurrencyPreview() {
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  const selected = currencies[currency];
  const value = 2840 * selected.rate;
  const format = (amount: number) =>
    `${selected.symbol}${new Intl.NumberFormat(selected.locale, { maximumFractionDigits: 2, minimumFractionDigits: 2 }).format(amount)}`;

  return (
    <div className="relative mx-auto w-full max-w-xl" aria-label="Interactive currency invoice preview">
      <div className="absolute -inset-5 border border-primary/20" aria-hidden="true" />
      <div className="relative border border-border bg-background p-5 shadow-elevated sm:p-7">
        <div className="flex items-start justify-between border-b border-border pb-5">
          <div>
            <p className="eyebrow">Sales invoice</p>
            <p className="mt-1 text-lg font-bold">INV-2048</p>
          </div>
          <span className="rounded-md bg-success-soft px-3 py-1 text-xs font-semibold text-success">Ready</span>
        </div>
        <div className="py-5">
          <p className="mb-3 text-xs font-semibold uppercase text-muted-foreground">Invoice currency</p>
          <div className="grid grid-cols-4 gap-2">
            {(Object.keys(currencies) as CurrencyCode[]).map((code) => (
              <button
                key={code}
                type="button"
                className="mc-btn mc-btn-currency"
                data-active={currency === code}
                aria-pressed={currency === code}
                onClick={() => setCurrency(code)}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4 border-y border-border py-5 text-sm">
          <div className="flex justify-between gap-4">
            <span className="text-muted-foreground">18K Diamond Halo Ring</span>
            <span className="font-semibold">{format(value)}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-muted-foreground">Currency</span>
            <span>{selected.label}</span>
          </div>
        </div>
        <div className="flex items-end justify-between pt-5">
          <span className="text-sm text-muted-foreground">Invoice total</span>
          <span className="text-3xl font-bold tabular-nums">{format(value)}</span>
        </div>
      </div>
    </div>
  );
}

function Faq({ question, answer, initiallyOpen }: { question: string; answer: string; initiallyOpen: boolean }) {
  const [open, setOpen] = useState(initiallyOpen);

  return (
    <div className="border-b border-border">
      <button
        type="button"
        className="mc-btn mc-btn-ghost"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {question}
        <ChevronDown className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} size={19} />
      </button>
      {open && <p className="max-w-2xl pb-6 pr-10 leading-7 text-muted-foreground">{answer}</p>}
    </div>
  );
}

export default function MultiCurrencyPage() {
  return (
    <div className="multi-currency min-h-screen overflow-hidden bg-background">
      <main>
        <section className="hero-grid border-b border-border">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-20">
            <div className="max-w-2xl">
              <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase text-primary">
                <span className="h-px w-8 bg-primary" /> Multi-currency support
              </div>
              <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
                Jewelry software that speaks every currency.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
                Buy and sell jewelry across global markets while keeping one clear base currency for consistent reporting.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/request-demo" className="mc-btn mc-btn-primary">
                  Request a demo <ArrowRight size={17} />
                </Link>
                <a href="#how-it-works" className="mc-btn mc-btn-outline">
                  See how it works
                </a>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
                {['Retail', 'Wholesale', 'Exports'].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check size={15} className="text-primary" /> {item}
                  </span>
                ))}
              </div>
            </div>
            <CurrencyPreview />
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-28 bg-foreground py-20 text-background lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
              <div>
                <p className="eyebrow text-primary">One connected workflow</p>
                <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Three steps to trade without borders.</h2>
                <p className="mt-6 max-w-md leading-7 text-background/65">
                  Give every international transaction the right currency without losing sight of the numbers that run your business.
                </p>
              </div>
              <ol className="divide-y divide-background/15 border-y border-background/15">
                {steps.map(([number, title, body]) => (
                  <li key={number} className="grid gap-4 py-7 sm:grid-cols-[4rem_1fr]">
                    <span className="text-sm font-bold text-primary">{number}</span>
                    <div>
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <p className="mt-2 max-w-xl leading-7 text-background/60">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src="/images/home/easyjewelry.png"
                  alt="EasyJewelry on phone, laptop, and tablet, with balances shown in UAE dirham"
                  width={1600}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-contain p-6"
                />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between bg-foreground/90 px-5 py-4 text-background backdrop-blur">
                  <span className="text-sm font-medium">From local counter to global market</span>
                  <Globe2 className="text-primary" size={21} aria-hidden="true" />
                </div>
              </div>
              <div>
                <p className="eyebrow">Why multi-currency matters</p>
                <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Made for the way jewelry moves.</h2>
                <p className="mt-6 leading-7 text-muted-foreground">
                  Jewelry businesses buy materials, move inventory, and serve clients across borders. EasyJewelry keeps those transactions organized without forcing every sale into one currency.
                </p>
                <div className="mt-8 space-y-6">
                  {audiences.map(([Icon, title, text]) => (
                    <div key={title} className="grid grid-cols-[3rem_1fr] gap-4">
                      <span className="grid size-11 place-items-center rounded-md bg-primary-soft text-primary">
                        <Icon size={20} />
                      </span>
                      <div>
                        <h3 className="font-semibold">{title}</h3>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-muted/55 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl">
              <p className="eyebrow">Business clarity</p>
              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Global flexibility. One source of truth.</h2>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
              {values.map(([Icon, title, text]) => (
                <article key={title} className="bg-background p-8">
                  <Icon className="text-primary" size={28} />
                  <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <p className="eyebrow">Frequently asked questions</p>
              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">The details, made clear.</h2>
            </div>
            <div className="border-t border-border">
              {faqs.map((faq, index) => (
                <Faq key={faq.question} {...faq} initiallyOpen={index === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-16 text-primary-foreground">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase">Ready to go global?</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
                Trade in every currency your jewelry business needs.
              </h2>
            </div>
            <Link href="/request-demo" className="mc-btn mc-btn-inverse">
              Request Demo <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
