import Link from 'next/link';
import { ChevronDown, Check } from 'lucide-react';
import Heading from '@/components/ui/heading';
import { metalSalesFaqs, metalSalesIncluded } from './content';
import './metal-sales.css';

const lines = [
  { item: '22K necklace', purity: '22K', qty: '1', gross: '18.420', pure: '16.885', making: '120.00', total: '1,842.00', price: 'Fixed' },
  { item: '24K bar', purity: '24K', qty: '1', gross: '10.000', pure: '9.990', making: '0.00', total: '848.20', price: 'Rate' },
];

const priceModes = [
  {
    title: 'Fixed price',
    body: 'The piece sells at an agreed amount. Karat, weight, and making charges still print on the invoice, so the metal record stays complete.',
  },
  {
    title: 'Live gold rate',
    body: 'Pure weight is multiplied by the gold or silver rate on the invoice. The rate per ounce stays visible, so the price follows the market at the time of sale.',
  },
  {
    title: 'Both on one invoice',
    body: 'A fixed-price necklace and a rate-based gold bar can share one document. Each line uses its own pricing method, and the totals still add up.',
  },
];

const paymentSteps = [
  { title: 'Choose the method', body: 'Cash, cheque, bank transfer, or any method you have set up. It is stored with the sale and shows in received payments.' },
  { title: 'Select the bank', body: 'Tag a transfer or cheque to the account that received it, so reconciliation starts from the invoice.' },
  { title: 'Apply credit', body: 'Use an existing customer balance against this invoice, then collect whatever is still due.' },
  { title: 'Keep the balance', body: 'A partial payment leaves the remainder on the customer account for a later receipt.' },
];

const audiences = [
  { title: 'Jewelry retailers', body: 'Scan the tag, confirm the making charge, and print a full metal invoice at the counter.' },
  { title: 'Gold and silver wholesalers', body: 'Sell by weight at the live rate, with pure-weight totals and a hedge reference when you need one.' },
  { title: 'Multi-branch stores', body: 'Each branch invoices under its own name. Management can filter the full sales history by location.' },
  { title: 'Jewelry exporters', body: 'Issue the invoice in the currency of the trade, with purity and pure weight on the document.' },
];

const related = [
  { href: '/features/metal-sales-return', label: 'Jewelry sales returns' },
  { href: '/features/vat-report', label: 'VAT report' },
  { href: '/features/multi-currency', label: 'Multi-currency' },
  { href: '/features/metal-purchases', label: 'Metal purchases' },
];

function SampleInvoice() {
  return (
    <figure id="sample-invoice" className="@container scroll-mt-32 border border-lineColor bg-secondary shadow-[0_24px_60px_-36px_rgba(13,13,13,0.35)]">
      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-lineColor bg-panel px-4 py-3 sm:px-5">
        <span className="font-urbanist text-sm font-semibold text-gold">Sample invoice</span>
        <span className="nums text-sm text-foreground">Gold 2,640.00 / oz · USD</span>
      </figcaption>

      <div className="flex flex-wrap items-end justify-between gap-3 px-4 py-5 sm:px-5">
        <p className="max-w-xs text-sm leading-6 text-muted-foreground">A fixed-price piece and a rate-priced bar on one invoice.</p>
        <dl className="grid grid-cols-[4.25rem_auto] gap-x-3 text-sm leading-6">
          <dt className="text-muted-foreground">Invoice</dt>
          <dd className="nums font-medium text-foreground">INV-1042</dd>
          <dt className="text-muted-foreground">Branch</dt>
          <dd className="font-medium text-foreground">Main showroom</dd>
        </dl>
      </div>

      <ul className="divide-y divide-lineColor border-t border-lineColor" aria-label="Sample invoice lines">
        {lines.map((line) => (
          <li key={line.item} className="px-4 py-4 sm:px-5">
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-urbanist font-semibold text-foreground">{line.item}</p>
              <p className="nums font-semibold text-foreground">{line.total}</p>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{line.purity} · {line.price} · Qty {line.qty}</p>
            <p className="nums mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm leading-6 text-foreground">
              <span className="whitespace-nowrap">Gross {line.gross} g</span>
              <span className="whitespace-nowrap">Pure {line.pure} g</span>
              <span className="whitespace-nowrap">Making {line.making}</span>
            </p>
          </li>
        ))}
      </ul>

      <div className="grid gap-6 border-t border-lineColor px-4 py-5 @min-[26rem]:grid-cols-2 sm:px-5">
        <div>
          <p className="font-urbanist text-sm font-semibold text-foreground">Payment</p>
          <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
            <dt className="text-muted-foreground">Method</dt>
            <dd className="text-foreground">Cash</dd>
            <dt className="text-muted-foreground">Received</dt>
            <dd className="nums text-foreground">2,824.71</dd>
            <dt className="text-muted-foreground">Balance</dt>
            <dd className="nums text-foreground">0.00</dd>
          </dl>
        </div>
        <dl className="grid grid-cols-[1fr_auto] content-start gap-x-6 gap-y-1 text-sm">
          <dt className="text-muted-foreground">Gross</dt>
          <dd className="nums text-right text-foreground">28.420 g</dd>
          <dt className="text-muted-foreground">Pure</dt>
          <dd className="nums text-right text-foreground">26.875 g</dd>
          <dt className="text-muted-foreground">Subtotal</dt>
          <dd className="nums text-right text-foreground">2,690.20</dd>
          <dt className="text-muted-foreground">VAT</dt>
          <dd className="nums text-right text-foreground">134.51</dd>
          <dt className="font-urbanist font-semibold text-foreground">Total</dt>
          <dd className="nums text-right font-semibold text-foreground">2,824.71</dd>
        </dl>
      </div>
      <p className="border-t border-lineColor px-4 py-3 text-sm leading-6 text-muted-foreground sm:px-5">
        Illustrative only. Purity, rate, currency, and VAT follow your item records and settings.
      </p>
    </figure>
  );
}

const demoButton =
  'button-primary inline-flex min-h-11 items-center justify-center px-[22px] py-3 text-center text-sm font-medium leading-normal tracking-[0.1px] text-white rounded-[10px] relative z-1 overflow-hidden';

const secondaryButton =
  'button-secondary inline-flex min-h-11 items-center justify-center px-[22px] py-3 text-sm font-medium leading-normal rounded-[10px]';

export default function MetalSalesPage() {
  return (
    <div className="metal-sales bg-secondary font-dmSans text-foreground">
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
                      <li aria-current="page">Metal sales</li>
                    </ol>
                  </nav>

                  <Heading as="h1" size="large" gradient={false} className="mt-6 max-w-[12em] text-foreground">
                    Metal sales invoices
                    <span className="mt-2 block font-instrument text-[0.92em] font-normal italic leading-[1.05] text-gold">with the metal still in them.</span>
                  </Heading>
                  <p className="mt-5 max-w-[38rem] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                    Create retail and wholesale metal sales invoices on one screen. Each line keeps karat, gross weight, pure weight, and making charges, priced at a fixed amount or from today&apos;s gold rate, with VAT and payment recorded before you save.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link href="/request-demo" className={demoButton}>
                      Request Demo
                    </Link>
                    <a href="#pricing" className="group inline-flex min-h-11 items-center text-sm font-medium text-offWhite">
                      <span className="text-underline">How pricing works</span>
                    </a>
                  </div>
                </div>
                <SampleInvoice />
              </div>
            </div>
          </div>
        </section>

        <section id="invoice-types" className="scroll-mt-32 border-t border-lineColor" aria-labelledby="invoice-types-title">
          <div className="container">
            <div className="border-container section-spacing-lg">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
                <div>
                  <Heading as="h2" id="invoice-types-title" gradient={false} className="max-w-[10em] text-foreground">
                    Retail pieces and wholesale metal.
                  </Heading>
                  <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
                    The same Metal Sales module covers a tagged necklace at the counter and a gram weight of gold sold to another business.
                  </p>
                </div>
                <div className="divide-y divide-lineColor border-y border-lineColor">
                  <article className="py-7">
                    <h3 className="font-urbanist text-xl font-semibold text-foreground">Retail jewelry sales</h3>
                    <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
                      Scan the barcode on the piece and the item, purity, quantity, gross weight, and pure weight fill in from the item record. Confirm the making charge. A fixed-price piece stays at the agreed amount. A rate-based piece uses today&apos;s gold or silver rate on its pure weight.
                    </p>
                  </article>
                  <article className="py-7">
                    <h3 className="font-urbanist text-xl font-semibold text-foreground">Wholesale metal sales</h3>
                    <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
                      Trade sales are sold by weight. Each line keeps its own karat, purity, gross weight, pure weight, and making charge. The invoice totals gross and pure weight across the document. If the price is hedged, record the hedge reference on that wholesale invoice.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-32 bg-panel" aria-labelledby="pricing-title">
          <div className="container">
            <div className="border-container section-spacing-lg">
              <Heading as="h2" id="pricing-title" gradient={false} className="max-w-[14em] text-foreground">
                Fixed price, live rate, or both.
              </Heading>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                Choose the pricing method per line. The current rate per ounce stays at the top of the invoice, and a rate-based total updates when that rate changes.
              </p>
              <div className="mt-10 grid border border-lineColor bg-secondary md:grid-cols-3">
                {priceModes.map((mode, index) => (
                  <article
                    key={mode.title}
                    className={`p-6 sm:p-7 ${index === 1 ? 'border-t-[3px] border-t-primary' : ''} ${index < priceModes.length - 1 ? 'border-b border-lineColor md:border-b-0 md:border-r' : ''}`}
                  >
                    <h3 className="font-urbanist text-xl font-semibold text-foreground">{mode.title}</h3>
                    <p className="mt-3 text-base leading-7 text-muted-foreground">{mode.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="payment" className="scroll-mt-32" aria-labelledby="payment-title">
          <div className="container">
            <div className="border-container section-spacing-lg">
              <Heading as="h2" id="payment-title" gradient={false} className="max-w-[12em] text-foreground">
                Collect the payment on the invoice.
              </Heading>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                Method, bank, and amount are recorded before the invoice is saved, so the sale and the settlement stay on one document.
              </p>
              <ol className="mt-10 grid border-t border-lineColor md:grid-cols-4" aria-label="How payment is recorded">
                {paymentSteps.map((step, index) => (
                  <li key={step.title} className={`border-b border-lineColor py-6 md:border-b-0 md:py-8 ${index < paymentSteps.length - 1 ? 'md:border-r md:pr-6' : ''} ${index > 0 ? 'md:pl-6' : ''}`}>
                    <span className="font-instrument text-3xl text-gold" aria-hidden="true">0{index + 1}</span>
                    <h3 className="mt-4 font-urbanist text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-muted-foreground">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="border-t border-lineColor" aria-labelledby="document-title">
          <div className="container">
            <div className="border-container section-spacing-lg">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <Heading as="h2" id="document-title" gradient={false} className="max-w-[12em] text-foreground">
                    What the printed invoice carries.
                  </Heading>
                  <dl className="mt-8 divide-y divide-lineColor border-y border-lineColor">
                    {[
                      ['Header', 'Invoice number, reference, date, customer, salesman, and branch.'],
                      ['Lines', 'Purity, quantity, gross weight, pure weight, making charges, VAT, and the line total.'],
                      ['Totals', 'Quantity, gross weight, pure weight, subtotal, VAT, rounding, and the final amount.'],
                      ['Settlement', 'Payment method, bank, amount received, and any balance left on the account.'],
                    ].map(([term, detail]) => (
                      <div key={term} className="grid gap-1 py-4 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                        <dt className="font-urbanist font-semibold text-foreground">{term}</dt>
                        <dd className="text-base leading-7 text-muted-foreground">{detail}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
                    Wholesale invoices also show the gold rate per ounce next to the pure-weight math, so a trade customer can see how the price was reached.
                  </p>
                </div>
                <div>
                  <h3 className="font-urbanist text-2xl font-semibold text-foreground sm:text-3xl">Print, save, and find it again.</h3>
                  <div className="mt-6 space-y-5 text-base leading-7 text-muted-foreground">
                    <p>
                      Print straight from the invoice screen to the counter printer, or save a PDF for a trade customer. Templates include your store name, logo, branch address, and contact details.
                    </p>
                    <p>
                      Invoice history keeps every document. Search and filter by date, type, customer, gross weight, pure weight, making charges, total, salesman, branch, and status, then reprint any past invoice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-panel" aria-labelledby="why-title">
          <div className="container">
            <div className="border-container section-spacing-lg">
              <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
                <div>
                  <Heading as="h2" id="why-title" gradient={false} className="max-w-[11em] text-foreground">
                    A jewelry invoice is a metal record.
                  </Heading>
                  <div className="mt-5 space-y-4 text-base leading-7 text-muted-foreground">
                    <p>
                      A standard bill multiplies a name by a quantity. A gold necklace is priced from gross weight, purity, pure weight, the rate at the moment of sale, and the making charge. Hallmarking rules and trade buyers need that metal content on the document.
                    </p>
                    <p>
                      EasyJewelry fills those fields from the item record and calculates the line, the VAT, and the invoice total. The result is a sales invoice, a tax record, and a metal statement in one printout.
                    </p>
                  </div>
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
                    The metal, the tax, the payment, and the printed document.
                  </p>
                </div>
                <ul className="grid gap-x-10 sm:grid-cols-2">
                  {metalSalesIncluded.map((item) => (
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
                    Pricing, wholesale invoices, partial payment, templates, and VAT.
                  </p>
                </div>
                <div className="border-t border-lineColor">
                  {metalSalesFaqs.map((faq) => (
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
                Every jewelry sale, invoiced with the metal accounted for.
              </Heading>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Whether the sale is a fixed-price retail piece or a weight-based wholesale transaction at today&apos;s rate, Metal Sales writes the invoice, collects the payment, and keeps the metal detail on the record.
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
