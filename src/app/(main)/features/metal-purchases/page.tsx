import Link from 'next/link';
import { ChevronDown, Check } from 'lucide-react';
import Heading from '@/components/ui/heading';
import { metalPurchaseFaqs, metalPurchaseIncluded } from './content';
import './metal-purchases.css';

const buyBackSteps = [
  {
    title: 'Weigh and record it',
    body: 'Weigh the piece, enter the karat, and record the gross weight. Pure weight is calculated from the gross weight and purity, so the metal value is clear before you agree a price.',
  },
  {
    title: 'Price it at today’s rate',
    body: 'The current gold or silver rate per ounce stays at the top of the purchase screen. The buy-back price applies that rate to the pure weight, so both sides can see the basis of the offer.',
  },
  {
    title: 'Tag it or take it as metal',
    body: 'If the piece will be resold, give it a barcode and an inventory location. If it will be melted, it enters metal stock as pure weight instead of a tagged item.',
  },
];

const tagFields = [
  ['Barcode', 'Scan an existing tag, or let EasyJewelry generate a new one.'],
  ['Item code', 'The item definition from your catalog.'],
  ['Gross weight', 'The weight from the scale, in grams.'],
  ['Tag weight', 'The weight printed on an original tag, when the piece already has one.'],
  ['Remarks', 'Condition, origin, or anything else worth keeping with the piece.'],
  ['Location', 'The showcase, safe, or warehouse spot this piece is assigned to.'],
];

const audiences = [
  { title: 'Jewelry retailers', body: 'Receive pieces from a manufacturer or supplier, record each one, and print tags as the goods arrive. Old gold from the counter uses the same bill.' },
  { title: 'Gold and silver wholesalers', body: 'Buy bulk metal at a fixed amount or the live rate, mark raw bullion tax-free, and update the pure-weight balance from the bill.' },
  { title: 'Old gold buyers', body: 'Keep weight, purity, price, and the person you bought from on every buy-back, so the purchase can be traced later.' },
  { title: 'Multi-branch stores', body: 'Record the purchase at the branch that received the metal. That location’s stock updates, and transfers can move it afterward.' },
];

const related = [
  { href: '/features/metal-sales', label: 'Metal sales' },
  { href: '/features/metal-purchase-return', label: 'Purchase returns' },
  { href: '/features/metal-barcodes', label: 'Barcode inventory' },
  { href: '/features/inventory-locations', label: 'Inventory locations' },
];

function SampleBill() {
  return (
    <figure id="sample-bill" className="scroll-mt-32 border border-lineColor bg-secondary shadow-[0_24px_60px_-36px_rgba(13,13,13,0.35)]">
      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-lineColor bg-panel px-4 py-3 sm:px-5">
        <span className="font-urbanist text-sm font-semibold text-gold">Sample purchase bill</span>
        <span className="nums text-sm text-foreground">Gold 2,640.00 / oz · USD</span>
      </figcaption>

      <div className="flex flex-wrap items-end justify-between gap-3 px-4 py-5 sm:px-5">
        <p className="max-w-xs text-sm leading-6 text-muted-foreground">Old gold bought at the counter, then tagged for resale.</p>
        <dl className="grid grid-cols-[4.25rem_auto] gap-x-3 text-sm leading-6">
          <dt className="text-muted-foreground">Bill</dt>
          <dd className="nums font-medium text-foreground">PB-318</dd>
          <dt className="text-muted-foreground">Party</dt>
          <dd className="font-medium text-foreground">Walk-in customer</dd>
        </dl>
      </div>

      <div className="border-t border-lineColor px-4 py-4 sm:px-5">
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-urbanist font-semibold text-foreground">22K bangle</p>
          <p className="text-sm font-medium text-foreground">Rate</p>
        </div>
        <p className="nums mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm leading-6 text-foreground">
          <span className="whitespace-nowrap">Gross 12.400 g</span>
          <span className="whitespace-nowrap">Pure 11.367 g</span>
          <span className="whitespace-nowrap">Qty 1</span>
        </p>
      </div>

      <div className="border-t border-lineColor bg-panel px-4 py-4 sm:px-5">
        <p className="font-urbanist text-sm font-semibold text-foreground">Piece tag</p>
        <dl className="mt-3 grid grid-cols-[6.5rem_1fr] gap-x-3 gap-y-1 text-sm">
          <dt className="text-muted-foreground">Barcode</dt>
          <dd className="nums font-medium text-foreground">EJ-10482</dd>
          <dt className="text-muted-foreground">Item code</dt>
          <dd className="font-medium text-foreground">BNG-22</dd>
          <dt className="text-muted-foreground">Scale / tag</dt>
          <dd className="nums text-foreground">12.400 g / 12.350 g</dd>
          <dt className="text-muted-foreground">Location</dt>
          <dd className="text-foreground">Showcase A</dd>
        </dl>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">Prints to the Zebra printer when the bill is saved.</p>
      </div>

      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 border-t border-lineColor px-4 py-4 text-sm sm:px-5">
        <dt className="text-muted-foreground">Payment</dt>
        <dd className="text-foreground">Cash</dd>
        <dt className="text-muted-foreground">Balance</dt>
        <dd className="nums text-foreground">0.00</dd>
      </dl>
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

export default function MetalPurchasesPage() {
  return (
    <div className="metal-purchases bg-secondary font-dmSans text-foreground">
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
                      <li aria-current="page">Metal purchases</li>
                    </ol>
                  </nav>

                  <Heading as="h1" size="large" gradient={false} className="mt-6 max-w-[12em] text-foreground">
                    Metal purchases and gold buying
                    <span className="mt-2 block font-instrument text-[0.92em] font-normal italic leading-[1.05] text-gold">from the first gram.</span>
                  </Heading>
                  <p className="mt-5 max-w-[38rem] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                    Record finished jewelry, raw gold, old gold buy-back, and wholesale lots on one purchase bill. Each line keeps karat, gross weight, and pure weight. Barcodeable pieces get a tag that prints to a Zebra printer when you save.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link href="/request-demo" className={demoButton}>
                      Request Demo
                    </Link>
                    <a href="#buy-back" className="group inline-flex min-h-11 items-center text-sm font-medium text-offWhite">
                      <span className="text-underline">How buy-back works</span>
                    </a>
                  </div>
                </div>
                <SampleBill />
              </div>
            </div>
          </div>
        </section>

        <section id="bill-types" className="scroll-mt-32 border-t border-lineColor" aria-labelledby="bill-types-title">
          <div className="container">
            <div className="border-container section-spacing-lg">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
                <div>
                  <Heading as="h2" id="bill-types-title" gradient={false} className="max-w-[10em] text-foreground">
                    Retail pieces and wholesale lots.
                  </Heading>
                  <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
                    The same Metal Purchases module covers a single bangle at the counter and a consignment of gold bought by weight.
                  </p>
                </div>
                <div className="divide-y divide-lineColor border-y border-lineColor">
                  <article className="py-7">
                    <h3 className="font-urbanist text-xl font-semibold text-foreground">Retail purchase bill</h3>
                    <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
                      Use it for individual pieces from a manufacturer, a supplier, or a customer bringing in old gold. Each line keeps the item, description, purity, quantity, gross weight, pure weight, making, subtotal, VAT, and total. Barcodeable pieces then open into a row of their own, so the ring or necklace is documented before it reaches the showcase.
                    </p>
                  </article>
                  <article className="py-7">
                    <h3 className="font-urbanist text-xl font-semibold text-foreground">Wholesale purchase bill</h3>
                    <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
                      Use it for bulk metal from a trade supplier or refinery. Each lot keeps item, purity, quantity, gross weight, and pure weight. Price the lot at a fixed amount or from the rate per ounce on the screen. Record a hedge reference when the purchase is hedged, and mark the bill tax-free when the metal is zero-rated bullion.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="buy-back" className="scroll-mt-32 bg-panel" aria-labelledby="buy-back-title">
          <div className="container">
            <div className="border-container section-spacing-lg">
              <Heading as="h2" id="buy-back-title" gradient={false} className="max-w-[12em] text-foreground">
                Old gold and scrap, bought at the counter.
              </Heading>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                A customer buy-back uses the same purchase bill as any other metal coming in. The customer is the party, and the rate on the screen is the basis of the price.
              </p>
              <ol className="mt-10 grid border border-lineColor bg-secondary md:grid-cols-3" aria-label="How an old gold buy-back is recorded">
                {buyBackSteps.map((step, index) => (
                  <li key={step.title} className={`p-6 sm:p-7 ${index < buyBackSteps.length - 1 ? 'border-b border-lineColor md:border-b-0 md:border-r' : ''}`}>
                    <span className="font-instrument text-3xl text-gold" aria-hidden="true">0{index + 1}</span>
                    <h3 className="mt-4 font-urbanist text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-muted-foreground">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="tags" className="scroll-mt-32" aria-labelledby="tags-title">
          <div className="container">
            <div className="border-container section-spacing-lg">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <Heading as="h2" id="tags-title" gradient={false} className="max-w-[12em] text-foreground">
                    A tag for every piece you can resell.
                  </Heading>
                  <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                    When the bill includes barcodeable items, each piece is entered on its own row before the label is printed.
                  </p>
                  <dl className="mt-8 divide-y divide-lineColor border-y border-lineColor">
                    {tagFields.map(([term, detail]) => (
                      <div key={term} className="grid gap-1 py-4 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                        <dt className="font-urbanist font-semibold text-foreground">{term}</dt>
                        <dd className="text-base leading-7 text-muted-foreground">{detail}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div>
                  <h3 className="font-urbanist text-2xl font-semibold text-foreground sm:text-3xl">Print the label, then trace the piece.</h3>
                  <div className="mt-6 space-y-5 text-base leading-7 text-muted-foreground">
                    <p>
                      Saving the bill generates a barcode label for each piece and sends it to the connected Zebra printer. Attach the label before the piece goes to the display or the stockroom.
                    </p>
                    <p>
                      The barcode links to the item code and the purchase record. A later scan shows who you bought it from, what you paid, when it arrived, where it was placed, and the transactions after that.
                    </p>
                    <p>
                      That origin record matters for high-value pieces, certified stones, and hallmarked items, where you need to show where the piece entered the business.
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
              <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
                <div>
                  <Heading as="h2" id="why-title" gradient={false} className="max-w-[11em] text-foreground">
                    A purchase bill is a metal entry.
                  </Heading>
                  <div className="mt-5 space-y-4 text-base leading-7 text-muted-foreground">
                    <p>
                      Fifty grams of 22 karat gold is not only a supplier invoice. The pure-metal balance rises by about 45.8 grams, the amount owed or the bank balance changes, and a tax-free bullion purchase records no VAT. Those updates happen from the bill.
                    </p>
                    <p>
                      There is no second metal entry, inventory adjustment, or vendor payment to post by hand. The piece tag then keeps the origin attached to the item, so a scan can still show what was paid and where it came from.
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
                    The bill, the metal, the tag, and the printer.
                  </p>
                </div>
                <ul className="grid gap-x-10 sm:grid-cols-2">
                  {metalPurchaseIncluded.map((item) => (
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
                    Barcodes, old gold, metal balance, tax-free bills, and hedges.
                  </p>
                </div>
                <div className="border-t border-lineColor">
                  {metalPurchaseFaqs.map((faq) => (
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
                Every gram that comes in, documented from day one.
              </Heading>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Metal Purchases records what you bought, from whom, at what weight and price, then keeps that origin on the piece through the barcode tag.
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
