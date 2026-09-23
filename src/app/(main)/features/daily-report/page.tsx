import Link from 'next/link';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import './daily-report.css';

const reportSections = [
  { number: '01', title: 'Sales', body: 'Every sales invoice — customer, gross weight, items, total amount and outstanding balance.' },
  { number: '02', title: 'Received Payments', body: 'Customer payments with transaction reference, payment method, bank and amount.' },
  { number: '03', title: 'Purchases', body: 'Every purchase bill — supplier, gross weight, items and total amount paid.' },
  { number: '04', title: 'Paid Payments', body: 'All outgoing vendor and supplier payments, organized by reference, method and bank.' },
  { number: '05', title: 'Sales Returns', body: 'Returned items, customer details, gross weight and credited amount, tracked separately.' },
  { number: '06', title: 'Purchase Returns', body: 'Items returned to suppliers with return number, gross weight and amount.' },
  { number: '07', title: 'Cheques', body: 'Every cheque issued or received, including cheque number, bank, memo and amount.' },
  { number: '08', title: 'Journals', body: 'Manual journal entries with from and to accounts, memo, reference and amount.' },
  { number: '09', title: 'Bank Transfers', body: 'Internal bank-to-bank movements with source, destination, amount and memo.' },
  { number: '10', title: 'Exchanges', body: 'Gold and silver exchanges with outgoing and incoming gross and pure weights.' },
  { number: '11', title: 'Metal Transactions', body: 'Raw metal movements by transaction type, party, item, gross weight and pure weight.' },
];

const roles = [
  ['Store owners', 'See sales, payments, balances and metal position without being on the floor.'],
  ['Managers', 'Reconcile the day and catch missing payments or returns before close.'],
  ['Accountants', 'Use one referenced source of truth for straightforward bookkeeping.'],
  ['Multi-branch owners', 'Filter by branch to understand each location on any date.'],
];

const capabilities = [
  'Filter by any date',
  'Sales with gross weight and balance',
  'Payments received with method and bank',
  'Purchases with gross weight and amount',
  'Sales and purchase return tracking',
  'Cheques issued and received',
  'Manual journal entries',
  'Bank-to-bank transfer tracking',
  'Gold and silver exchange records',
  'Metal transactions by type and weight',
  'Multi-branch filtering',
  'Export and print ready',
];

const faqs = [
  ['Can I view the Daily Report for a past date?', 'Yes. Use the date filter to pull the report for any date in your history.'],
  ['Does it work across multiple branches?', 'Yes. Filter by branch to see exactly what happened at each location on any given day.'],
  ['Does it show metal weight or just monetary amounts?', 'Both. Relevant sections show gross and pure weight alongside monetary amounts.'],
  ['Can I export or print the Daily Report?', 'Yes. The report can be exported and printed directly from the screen.'],
  ['Does it include exchanges and metal transactions?', 'Yes. Old-gold exchanges and all raw metal transactions are included.'],
];

function sectionTone(index: number) {
  if (index === 1) return 'bg-foreground text-background';
  if (index === 6) return 'bg-primary text-primary-foreground';
  return 'bg-[#f6f6f6] text-foreground';
}

function numberTone(index: number) {
  if (index === 1) return 'text-primary';
  if (index === 6) return 'text-primary-foreground/70';
  return 'text-gold';
}

export default function DailyReportPage() {
  return (
    <div className="daily-report bg-background font-dmSans text-foreground">
      <main>
        <header className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 md:pb-24 md:pt-20">
          <div className="mb-7 flex items-center gap-3">
            <span className="size-3 rounded-full bg-primary" aria-hidden="true" />
            <span className="font-urbanist text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Daily Report
            </span>
          </div>
          <h1 className="max-w-5xl font-instrument text-[2.75rem] leading-[1.32] tracking-normal sm:text-6xl md:text-7xl lg:text-8xl">
            Every transaction, <span className="italic text-gold">in one clear view.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Everything that happened in your jewelry business today — sales, purchases, payments, returns, cheques, exchanges and metal movements — on one screen.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/request-demo"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-8 py-4 font-urbanist font-semibold text-primary-foreground transition-colors hover:bg-gold"
            >
              See this on your shop <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href="#coverage"
              className="inline-flex min-h-11 items-center rounded-full border border-lineColor px-7 py-4 font-urbanist font-semibold text-foreground transition-colors hover:border-foreground"
            >
              How it works
            </a>
          </div>
        </header>

        <section id="coverage" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-14 sm:px-8 md:py-20">
          <div className="mb-10 max-w-3xl">
            <p className="font-urbanist text-xs font-bold uppercase tracking-[0.25em] text-gold">
              What the Daily Report covers
            </p>
            <h2 className="mt-4 font-instrument text-4xl leading-[1.32] tracking-normal md:text-6xl">
              The whole trading day, properly accounted for.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {reportSections.map((item, index) => (
              <article
                key={item.title}
                className={`${index === 0 ? 'md:col-span-2' : ''} ${sectionTone(index)} min-h-56 rounded-3xl p-8 md:p-9`}
              >
                <span className={`${numberTone(index)} font-urbanist text-sm font-bold`}>{item.number}</span>
                <h3 className="mt-4 font-instrument text-3xl leading-tight tracking-normal">{item.title}</h3>
                <p className={`${index === 1 || index === 6 ? 'opacity-75' : 'text-muted-foreground'} mt-3 max-w-md text-base leading-relaxed`}>
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="why" className="scroll-mt-28 border-y border-lineColor bg-[#f6f6f6]">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:py-28">
            <div>
              <p className="font-urbanist text-xs font-bold uppercase tracking-[0.25em] text-gold">
                Why daily reporting matters
              </p>
              <h2 className="mt-5 max-w-xl font-instrument text-4xl leading-[1.32] tracking-normal sm:text-5xl md:text-6xl">
                Jewelry is more complex than ordinary retail.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                A single day might involve gold sold by weight at a live rate, silver purchased in bulk, a return, a trade cheque, job work and an old-gold exchange.
              </p>
              <p>
                EasyJewelry brings it together automatically. Filter by date, review each section, and close your day knowing every transaction is accounted for.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-urbanist text-xs font-bold uppercase tracking-[0.25em] text-gold">
                Made for every role
              </p>
              <h2 className="mt-5 font-instrument text-4xl leading-[1.32] tracking-normal sm:text-5xl">
                One report. Four clear perspectives.
              </h2>
            </div>
            <div className="divide-y divide-lineColor border-y border-lineColor">
              {roles.map(([title, body], index) => (
                <div key={title} className="grid gap-3 py-6 sm:grid-cols-[3rem_11rem_1fr] sm:items-start">
                  <span className="font-instrument text-2xl text-gold">0{index + 1}</span>
                  <h3 className="font-urbanist text-base font-bold tracking-normal">{title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-foreground text-background">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
            <p className="font-urbanist text-xs font-bold uppercase tracking-[0.25em] text-primary">
              At a glance
            </p>
            <h2 className="mt-5 max-w-3xl font-instrument text-4xl leading-[1.32] tracking-normal sm:text-5xl md:text-6xl">
              Everything required to close with confidence.
            </h2>
            <div className="mt-12 grid gap-x-12 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((item) => (
                <div key={item} className="flex gap-3 text-base text-background/75">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto grid max-w-6xl scroll-mt-28 gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] md:py-28">
          <div>
            <p className="font-urbanist text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Frequently asked questions
            </p>
            <h2 className="mt-5 font-instrument text-4xl leading-[1.32] tracking-normal sm:text-5xl">
              The details, made simple.
            </h2>
          </div>
          <div className="divide-y divide-lineColor border-y border-lineColor">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-5 py-6 font-urbanist text-base font-bold text-foreground">
                  {question}
                  <ChevronDown className="faq-chevron size-4 shrink-0 transition-transform" aria-hidden="true" />
                </summary>
                <p className="max-w-2xl pb-6 text-base leading-relaxed text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* <section id="demo" className="mx-auto max-w-6xl scroll-mt-28 px-5 pb-16 sm:px-8 md:pb-28">
          <div className="rounded-[2.5rem] bg-[#f6f6f6] px-7 py-14 text-center md:px-16 md:py-20">
            <p className="font-urbanist text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Close every day with complete confidence
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl font-instrument text-4xl leading-[1.32] tracking-normal sm:text-5xl md:text-6xl">
              Run your jewelry business smarter.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              From inventory to accounting, EasyJewelry takes care of the day-to-day so you can focus on growing your business.
            </p>
            <Link
              href="/request-demo"
              className="mt-9 inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-9 py-4 font-urbanist font-semibold text-background transition-colors hover:bg-primary"
            >
              Request Demo <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </section> */}
      </main>
    </div>
  );
}
