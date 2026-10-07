import Link from 'next/link';
import { ChevronDown, Check } from 'lucide-react';
import Heading from '@/components/ui/heading';
import { metalSalesReturnFaqs, metalSalesReturnIncluded } from './content';
import './metal-sales-return.css';

const steps = [
  {
    title: 'Open the return',
    body: 'The return number is created for you. Add a reference if you need one, then choose the date, customer, and currency. The gold rate and exchange rate on screen are stored with the return.',
  },
  {
    title: 'Add the pieces',
    body: 'Each line keeps item, description, purity, quantity, gross weight, pure weight, making charges, subtotal, VAT, and the line credit. Totals update as you add pieces.',
  },
  {
    title: 'Confirm it',
    body: 'Review quantity, gross weight, pure weight, subtotal, VAT, rounding, and the credit. Confirming puts the metal back in stock, credits the customer, and posts the return to the daily report.',
  },
];

const returnTypes = [
  {
    title: 'Fixed return',
    body: 'The credit follows the agreed price, usually what the customer paid. It does not move with today’s gold rate. The piece goes back to stock at its recorded weights.',
  },
  {
    title: 'Unfixed return',
    body: 'The credit is the pure weight times the gold or silver rate on the day the metal comes back. That rate is saved on the return, which is how wholesale trade returns are usually valued.',
  },
];

const recordFields = [
  ['Return number', 'Created automatically, with an optional reference you can add.'],
  ['Customer and branch', 'Who brought the piece back, and which location processed it.'],
  ['Rates', 'Gold or silver rate per ounce, and the exchange rate, both stored at that moment.'],
  ['Metal lines', 'Purity, quantity, gross weight, pure weight, and making charges.'],
  ['Tax and credit', 'VAT reversed on each line, rounding, and the amount credited to the customer.'],
];

const audiences = [
  { title: 'Jewelry retailers', body: 'Take a piece back at the counter, restore the metal values, and credit the customer for what they paid.' },
  { title: 'Gold and silver wholesalers', body: 'Value a trade return at the rate on the day the metal returns, and keep that rate on the document.' },
  { title: 'Multi-branch stores', body: 'Process the return at the branch that receives it, so that location’s stock and accounts stay accurate.' },
  { title: 'Accountants', body: 'Find every return in the daily report, return history, and the accounts, with VAT reversed for tax reporting.' },
];

const related = [
  { href: '/features/metal-sales', label: 'Metal sales' },
  { href: '/features/metal-purchases', label: 'Metal purchases' },
  { href: '/features/vat-report', label: 'VAT report' },
  { href: '/features/daily-report', label: 'Daily report' },
];

function SampleReturn() {
  return (
    <figure id="sample-return" className="scroll-mt-32 border border-lineColor bg-secondary shadow-[0_24px_60px_-36px_rgba(13,13,13,0.35)]">
      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-lineColor bg-panel px-4 py-3 sm:px-5">
        <span className="font-urbanist text-sm font-semibold text-gold">Sample sales return</span>
        <span className="nums text-sm text-foreground">Gold 2,640.00 / oz</span>
      </figcaption>

      <div className="flex flex-wrap items-end justify-between gap-3 px-4 py-5 sm:px-5">
        <p className="max-w-xs text-sm leading-6 text-muted-foreground">A fixed-price necklace coming back to stock.</p>
        <dl className="grid grid-cols-[4.75rem_auto] gap-x-3 text-sm leading-6">
          <dt className="text-muted-foreground">Return</dt>
          <dd className="nums font-medium text-foreground">SR-214</dd>
          <dt className="text-muted-foreground">Customer</dt>
          <dd className="font-medium text-foreground">Walk-in</dd>
          <dt className="text-muted-foreground">Exchange</dt>
          <dd className="nums font-medium text-foreground">3.6725</dd>
        </dl>
      </div>

      <div className="border-t border-lineColor px-4 py-4 sm:px-5">
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-urbanist font-semibold text-foreground">22K necklace</p>
          <p className="text-sm font-medium text-foreground">Fixed</p>
        </div>
        <p className="nums mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm leading-6 text-foreground">
          <span className="whitespace-nowrap">Gross 18.420 g</span>
          <span className="whitespace-nowrap">Pure 16.885 g</span>
          <span className="whitespace-nowrap">Making 120.00</span>
        </p>
      </div>

      <div className="grid gap-4 border-t border-lineColor bg-panel px-4 py-4 sm:px-5">
        <p className="font-urbanist text-sm font-semibold text-foreground">When you confirm</p>
        <ul className="space-y-2 text-sm leading-6 text-foreground">
          <li>18.420 g gross and 16.885 g pure return to inventory.</li>
          <li>VAT on the line is reversed.</li>
          <li>The credit posts to the customer account.</li>
        </ul>
      </div>

      <dl className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 border-t border-lineColor px-4 py-4 text-sm sm:px-5">
        <dt className="text-muted-foreground">Subtotal</dt>
        <dd className="nums text-right text-foreground">1,842.00</dd>
        <dt className="text-muted-foreground">VAT reversed</dt>
        <dd className="nums text-right text-foreground">92.10</dd>
        <dt className="font-urbanist font-semibold text-foreground">Credit</dt>
        <dd className="nums text-right font-semibold text-foreground">1,934.10</dd>
      </dl>
      <p className="border-t border-lineColor px-4 py-3 text-sm leading-6 text-muted-foreground sm:px-5">
        Illustrative only. Rates, currency, and VAT follow the return you are processing.
      </p>
    </figure>
  );
}

const demoButton =
  'button-primary inline-flex min-h-11 items-center justify-center px-[22px] py-3 text-center text-sm font-medium leading-normal tracking-[0.1px] text-white rounded-[10px] relative z-1 overflow-hidden';

const secondaryButton =
  'button-secondary inline-flex min-h-11 items-center justify-center px-[22px] py-3 text-sm font-medium leading-normal rounded-[10px]';

export default function MetalSalesReturnPage() {
  return (
    <div className="metal-sales-return bg-secondary font-dmSans text-foreground">
      <main>
        <section>
          <div className="container">
            <div className="border-container section-spacing-lg">
              <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 xl:gap-16">
                <div>
                  <nav aria-label="Breadcrumb">
                    <ol className="flex flex-wrap items-center gap-2 text-sm">
                      <li>
                        <Link href="/" className="text-gold">Home</Link>
                      </li>
                      <li aria-hidden="true" className="text-muted-foreground">/</li>
                      <li>
                        <Link href="/features" className="text-gold">Features</Link>
                      </li>
                      <li aria-hidden="true" className="text-muted-foreground">/</li>
                      <li aria-current="page">Sales returns</li>
                    </ol>
                  </nav>

                  <Heading as="h1" size="large" gradient={false} className="mt-6 max-w-[11em] text-foreground">
                    Jewelry sales returns
                    <span className="mt-2 block font-instrument text-[0.92em] font-normal italic leading-[1.05] text-gold">with the metal put back.</span>
                  </Heading>
                  <p className="mt-5 max-w-[38rem] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                    Record a customer return with purity, gross weight, pure weight, making charges, and VAT. Credit the account at a fixed amount or from today’s gold rate, and put the metal back into stock when you confirm.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link href="/request-demo" className={demoButton}>
                      Request Demo
                    </Link>
                    <a href="#how-it-works" className="group inline-flex min-h-11 items-center text-sm font-medium text-offWhite">
                      <span className="text-underline">How a return works</span>
                    </a>
                  </div>
                </div>
                <SampleReturn />
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-32 border-t border-lineColor bg-panel" aria-labelledby="how-title">
          <div className="container">
            <div className="border-container section-spacing-lg">
              <Heading as="h2" id="how-title" gradient={false} className="max-w-[12em] text-foreground">
                Three steps, then the books agree.
              </Heading>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                Stock, the customer balance, VAT, and the daily report all update from the same return.
              </p>
              <ol className="mt-10 grid border border-lineColor bg-secondary md:grid-cols-3" aria-label="How a jewelry sales return is processed">
                {steps.map((step, index) => (
                  <li key={step.title} className={`p-6 sm:p-7 ${index < steps.length - 1 ? 'border-b border-lineColor md:border-b-0 md:border-r' : ''}`}>
                    <span className="font-instrument text-3xl text-gold" aria-hidden="true">0{index + 1}</span>
                    <h3 className="mt-4 font-urbanist text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-muted-foreground">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="return-types" className="scroll-mt-32" aria-labelledby="types-title">
          <div className="container">
            <div className="border-container section-spacing-lg">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
                <div>
                  <Heading as="h2" id="types-title" gradient={false} className="max-w-[10em] text-foreground">
                    Fixed price, or today’s rate.
                  </Heading>
                  <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
                    Match the credit to how the piece was sold. Retail returns usually stay at the original amount. Wholesale metal often comes back at the rate on the day of the return.
                  </p>
                </div>
                <div className="divide-y divide-lineColor border-y border-lineColor">
                  {returnTypes.map((type) => (
                    <article key={type.title} className="py-7">
                      <h3 className="font-urbanist text-xl font-semibold text-foreground">{type.title}</h3>
                      <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">{type.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-lineColor" aria-labelledby="record-title">
          <div className="container">
            <div className="border-container section-spacing-lg">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <Heading as="h2" id="record-title" gradient={false} className="max-w-[12em] text-foreground">
                    What the return keeps.
                  </Heading>
                  <dl className="mt-8 divide-y divide-lineColor border-y border-lineColor">
                    {recordFields.map(([term, detail]) => (
                      <div key={term} className="grid gap-1 py-4 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
                        <dt className="font-urbanist font-semibold text-foreground">{term}</dt>
                        <dd className="text-base leading-7 text-muted-foreground">{detail}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div>
                  <h3 className="font-urbanist text-2xl font-semibold text-foreground sm:text-3xl">A credit note is not enough.</h3>
                  <div className="mt-6 space-y-5 text-base leading-7 text-muted-foreground">
                    <p>
                      A generic return only reverses a price. A gold piece also has to restore gross weight and pure weight. If the credit uses today’s rate, that rate has to be the one on the document, not the rate from the original sale.
                    </p>
                    <p>
                      VAT is reversed on the taxable amount of the return. If the currency is not your base currency, the exchange rate at the time of the return is stored with it.
                    </p>
                    <p>
                      Metal Sales Return uses the same metal fields as the original invoice, so the return is as specific as the sale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-lineColor bg-panel" aria-labelledby="why-title">
          <div className="container">
            <div className="border-container section-spacing-lg">
              <div className="grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
                <div>
                  <Heading as="h2" id="why-title" gradient={false} className="max-w-[9em] text-foreground">
                    Who processes the return.
                  </Heading>
                  <p className="mt-4 max-w-sm text-base leading-7 text-muted-foreground">
                    The counter, the trade desk, the branch, and the accounts all read the same document.
                  </p>
                </div>
                <div className="divide-y divide-lineColor border-y border-lineColor">
                  {audiences.map((audience) => (
                    <article key={audience.title} className="py-5">
                      <h3 className="font-urbanist text-lg font-semibold text-foreground">{audience.title}</h3>
                      <p className="mt-2 text-base leading-7 text-muted-foreground">{audience.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="included-title">
          <div className="container">
            <div className="border-container section-spacing-lg">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
                <div>
                  <Heading as="h2" id="included-title" gradient={false} className="max-w-[8em] text-foreground">
                    What is included.
                  </Heading>
                  <p className="mt-4 max-w-sm text-base leading-7 text-muted-foreground">
                    The metal, the credit, the tax, and the report.
                  </p>
                </div>
                <ul className="grid gap-x-10 sm:grid-cols-2">
                  {metalSalesReturnIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3 border-b border-lineColor py-3.5 text-base text-foreground">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-panel text-gold" aria-hidden="true">
                        <Check size={13} strokeWidth={2.5} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-32 border-t border-lineColor" aria-labelledby="faq-title">
          <div className="container">
            <div className="border-container section-spacing-lg">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
                <div>
                  <Heading as="h2" id="faq-title" gradient={false} className="max-w-[8em] text-foreground">
                    Common questions.
                  </Heading>
                  <p className="mt-4 max-w-sm text-base leading-7 text-muted-foreground">
                    Stock, pricing, VAT, currency, and where the return shows up.
                  </p>
                </div>
                <div className="border-t border-lineColor">
                  {metalSalesReturnFaqs.map((faq) => (
                    <details key={faq.question} className="group border-b border-lineColor">
                      <summary className="flex min-h-11 items-center justify-between gap-6 py-5 text-left font-urbanist text-base font-semibold text-foreground">
                        {faq.question}
                        <ChevronDown className="faq-chevron size-4 shrink-0 text-gold" aria-hidden="true" />
                      </summary>
                      <p className="max-w-2xl pb-5 pr-8 text-base leading-7 text-muted-foreground">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-lineColor" aria-labelledby="close-title">
          <div className="container">
            <div className="border-container section-spacing-lg">
              <Heading as="h2" id="close-title" gradient={false} className="max-w-[14em] text-foreground">
                Every return, with the metal accounted for.
              </Heading>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                A jewelry return changes inventory, the customer balance, and the tax record at the same time. Metal Sales Return writes all three from one document.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/request-demo" className={demoButton}>
                  Request Demo
                </Link>
                <Link href="/features" className={secondaryButton}>
                  View All Features
                </Link>
              </div>
              <nav aria-label="Related features" className="mt-10 border-t border-lineColor pt-6">
                <ul className="flex flex-wrap gap-x-6 gap-y-3">
                  {related.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="group inline-flex min-h-11 items-center text-sm font-medium text-offWhite">
                        <span className="text-underline">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
