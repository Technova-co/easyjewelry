import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function MakingPnlPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Making Profit and Loss by Barcode"
              description="See the exact profit or loss on every sold jewelry piece. Cost in, price out, and net PnL per barcode with full transaction traceability and date range filtering."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                Knowing your total sales figure tells you what came in. Knowing your total purchase cost tells you what went out. But knowing the profit or loss on every individual piece of jewelry you have sold — at the barcode level — tells you which items are actually making you money and which are not. EasyJewelry's Making PnL by Barcode report does exactly this, comparing the cost of every item when it entered your jewelry inventory against the price it sold for, and calculating the net profit or loss per piece with full transaction references linked directly to the source records.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                The report covers every sold barcode-tagged item and shows the complete financial picture for each one. The In Type column shows how the piece entered your inventory — Metal Purchase, Metal Exchange, or Metal Opening. The In ID and Invoice ID link directly to the source transaction records so you can trace exactly where the piece came from and where it went. Cost is what was paid to acquire it. Price is what it sold for. PnL is the difference. A positive PnL means the piece was profitable. A negative PnL means it was sold at a loss. The date range filter lets you run the report for any period, giving you profitability visibility by day, week, month, or any custom range in your jewelry ERP software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What the report shows */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">What the Making PnL report shows per item</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Every column in the report has a specific role in understanding the profitability of each individual jewelry piece sold.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Barcode and Item Code',
                  desc: 'The unique barcode of the piece and the item code that identifies what type of piece it is. Together these give you item-level granularity — not just which category sold profitably but which specific piece.',
                },
                {
                  title: 'In Type',
                  desc: 'How the piece entered your jewelry inventory — Metal Purchase, Metal Exchange, or Metal Opening. This tells you the origin of the piece, which is useful when analyzing whether pieces from certain sources are more or less profitable than others.',
                },
                {
                  title: 'In ID and Invoice ID',
                  desc: 'Clickable references to the source transaction that brought the piece in and the sales invoice it left on. This makes the report fully traceable — you can jump directly to the purchase record or the sales invoice for any piece showing an unexpected profit or loss.',
                },
                {
                  title: 'Quantity and Weights',
                  desc: 'Quantity in pieces, gross weight in grams, and pure weight in grams. The weight columns let you understand the metal content of each piece alongside its financial performance, which is important for making charge analysis in your jewelry management software.',
                },
                {
                  title: 'Cost',
                  desc: 'What the piece cost your business when it entered inventory — the purchase price, exchange value, or opening balance cost. This is the denominator in the profitability calculation and reflects what you actually paid to acquire the metal and the piece.',
                },
                {
                  title: 'Price',
                  desc: 'What the piece sold for on the sales invoice, including the making charge. This is the revenue figure for that specific piece at the time it left your jewelry inventory system.',
                },
                {
                  title: 'PnL',
                  desc: 'Price minus Cost. A positive figure is profit. A negative figure is a loss. The PnL column is the bottom line for every individual piece your jewelry business has sold, calculated automatically from the transaction records in EasyJewelry.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-blue rounded-20 border border-lineColor/50 p-6"
                >
                  <h3 className="text-base font-semibold text-offWhite mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-paragraph leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <Heading as="h2">
                  Why item-level PnL matters for jewelry businesses
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    In most jewelry businesses, profitability is tracked at the total level — total sales minus total cost of goods. This tells you whether the business is profitable overall but it tells you nothing about which items are driving that profit and which are eroding it. A jewelry store that sells 200 pieces a month might have 40 pieces that account for 90 percent of the profit while 160 pieces are breaking even or losing money.
                  </p>
                  <p>
                    The Making PnL by Barcode report in EasyJewelry exposes this at the individual piece level. You can see which item codes are consistently profitable, which In Types produce the best margins, and which specific pieces sold at a loss — and then trace those losses directly back to the purchase or exchange that set the cost basis too high.
                  </p>
                  <p>
                    For jewelry retailers and wholesalers managing making charges as a revenue component, this report is particularly important. Making charges are the profit margin on top of the metal cost in jewelry retail. A piece with a high making charge that sells quickly is your most profitable item type. A piece with a low making charge that sits for months and eventually sells close to cost is a problem. The PnL report quantifies both situations precisely, giving your jewelry inventory management software real analytical power beyond just stock tracking.
                  </p>
                </div>
              </div>

              <div>
                <Heading as="h2">
                  Who benefits most
                </Heading>
                <div className="mt-6 space-y-4">
                  {[
                    {
                      type: 'Jewelry Retailers',
                      desc: 'Understand which pieces and item types are actually profitable. Use the PnL data to inform buying decisions, making charge adjustments, and promotional pricing for slow-moving items.',
                    },
                    {
                      type: 'Gold and Silver Wholesalers',
                      desc: 'Analyze profitability by In Type to see whether pieces from Metal Purchases versus Metal Exchanges generate different margins. Identify which source transactions produce the most profitable inventory.',
                    },
                    {
                      type: 'Business Owners and Finance Managers',
                      desc: 'Run the report for any date range to see profitability by period. Compare month-on-month PnL trends and identify whether margins are improving or declining across your jewelry business.',
                    },
                    {
                      type: 'Multi-Branch Jewelry Businesses',
                      desc: 'Review PnL data per branch to understand which locations are generating the best margins and which need pricing or buying strategy adjustments.',
                    },
                  ].map((item) => (
                    <div
                      key={item.type}
                      className="bg-blue rounded-20 border border-lineColor/50 p-5"
                    >
                      <h3 className="text-sm font-semibold text-offWhite mb-1">
                        {item.type}
                      </h3>
                      <p className="text-sm text-paragraph leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">What is included</Heading>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                'Barcode and item code per piece',
                'In Type — purchase, exchange, or opening',
                'In ID linked to source transaction',
                'Invoice ID linked to sales invoice',
                'Quantity per piece',
                'Gross weight per piece',
                'Pure weight per piece',
                'Cost per piece',
                'Sale price per piece',
                'PnL per piece — profit or loss',
                'Date range filter',
                'Search across all fields',
                'Sortable by any column',
                'Export to CSV, Excel and PDF',
                'Print directly from screen',
                'Branch-level PnL data',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-blue border border-lineColor/50 rounded-xl px-4 py-3"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="8" fill="#b8960c" fillOpacity="0.15" />
                    <path d="M4.5 8L6.5 10L11.5 5.5" stroke="#b8960c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm text-paragraph">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">Common questions</Heading>
            <div className="mt-8 space-y-4">
              {[
                {
                  q: 'How is the cost figure calculated for each piece?',
                  a: 'The cost is pulled from the transaction that brought the piece into your jewelry inventory — the purchase price on the metal purchase bill, the valuation on the exchange record, or the cost set on the opening balance. This is the actual cost basis for that specific barcode.',
                },
                {
                  q: 'How is the price figure calculated?',
                  a: 'The price is the amount the piece sold for on the sales invoice in EasyJewelry, including the making charge applied at the time of sale. The Invoice ID column links directly to that invoice.',
                },
                {
                  q: 'Can I see PnL for a specific time period?',
                  a: 'Yes. The date range filter at the top of the report lets you set a From and To date and filter to show only pieces that sold within that period. This gives you period-specific profitability visibility.',
                },
                {
                  q: 'What does a negative PnL mean?',
                  a: 'A negative PnL means the piece was sold for less than it cost to acquire. This can happen when a piece is discounted below cost, when a return adjustment affects the final price, or when the cost basis was set too high relative to the market rate at the time of sale.',
                },
                {
                  q: 'Can I export this report for a profitability review?',
                  a: 'Yes. The full report exports to CSV, Excel, and PDF with all columns included. It can also be printed directly from the screen, making it suitable for formal management reviews and investor reporting.',
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="bg-blue border border-lineColor/50 rounded-20 p-6"
                >
                  <h3 className="text-sm font-semibold text-offWhite mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-paragraph leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outro + CTA */}
      <section>
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">
              Know the profit on every piece you sell
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              Total revenue and total cost are useful numbers. But the Making PnL by Barcode report gives you something more powerful — the profit or loss on every individual piece your jewelry business has sold, with full traceability back to the source transaction. This is the kind of item-level financial intelligence that separates businesses that know they are profitable from businesses that know exactly why they are profitable and which items are driving that result.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/request-demo"
                className="button-primary inline-flex items-center justify-center px-[22px] py-3 text-white font-medium text-sm leading-normal rounded-[10px]"
              >
                Book a Free Demo
              </Link>
              <Link
                href="/features"
                className="button-secondary inline-flex items-center justify-center px-[22px] py-3 font-medium text-sm leading-normal rounded-[10px]"
              >
                View All Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}