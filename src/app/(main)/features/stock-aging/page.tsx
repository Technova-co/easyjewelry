import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function StockAgingPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Stock Aging Report"
              description="Know exactly how long every piece in your jewelry inventory has been unsold. Barcode, item code, gross weight, pure weight, and age in days for every item currently in stock."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                Dead stock is one of the most expensive problems a jewelry business can have. A piece that sits in a display case for 146 days has tied up its purchase cost in unsold inventory for almost five months. Multiply that across hundreds of pieces and the financial impact becomes significant — capital locked in slow-moving stock that could be deployed in faster-turning items, promotions, or new purchases. EasyJewelry's Stock Aging report gives you complete visibility over exactly this problem, showing every barcode-tagged item currently in your jewelry inventory alongside the number of days it has been sitting there.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                The report is straightforward and powerful. Every unsold barcode-tagged item appears as a row with its barcode number, item code, gross weight in grams, pure weight in grams, and age in days. The age figure is calculated automatically from the date the item entered your jewelry inventory management system to today. You can sort by age to immediately see your oldest stock, identify which item codes are consistently slow-moving, and make informed decisions about promotions, price adjustments, or returns to suppliers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What the report shows */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">What the Stock Aging report shows</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Every column in the Stock Aging report has a specific purpose for managing slow-moving jewelry inventory.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Barcode',
                  desc: 'The unique barcode number of the piece. You can scan any barcode from this report to pull up the full item record in your jewelry inventory system, including where it was purchased, what was paid for it, and where it is currently located.',
                },
                {
                  title: 'Item Code',
                  desc: 'The item definition code that identifies what type of piece this is — the karat, category, and item classification. Grouping by item code in the report lets you see which types of items are consistently aging across all your stock.',
                },
                {
                  title: 'Gross Weight',
                  desc: 'The total physical weight of the piece in grams. For aging stock decisions, gross weight tells you the size of the piece you are dealing with. Heavy pieces that are aging represent more capital tied up than lighter pieces.',
                },
                {
                  title: 'Pure Weight',
                  desc: 'The pure metal content of the piece calculated from its gross weight and purity. This is the figure that tells you the actual metal value of aging stock at the current gold rate, which is useful for calculating the financial exposure of your slow-moving inventory.',
                },
                {
                  title: 'Age in Days',
                  desc: 'The number of days since this piece entered your jewelry inventory management software. This is calculated automatically from the item entry date to today. Sorting by age immediately shows you your oldest pieces at the top of the report.',
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

      {/* How to use it */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">How jewelry businesses use the Stock Aging report</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              The Stock Aging report is most valuable when reviewed regularly as part of your inventory management routine.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Identify slow-moving items for promotion',
                  desc: 'Filter the report to show items older than 90 days. These are the pieces that need attention — a price reduction, a featured display position, or inclusion in a promotional campaign. The report gives you the data to make this decision objectively rather than relying on impression or memory.',
                },
                {
                  title: 'Calculate dead stock financial exposure',
                  desc: 'Use the pure weight column alongside the current gold rate to calculate the metal value of all aging stock. This gives you a clear picture of how much capital is tied up in slow-moving inventory and informs decisions about clearance pricing or supplier returns.',
                },
                {
                  title: 'Return old stock to suppliers',
                  desc: 'Items that have been in stock for an extended period and are not selling can often be returned to the manufacturer or supplier. The Stock Aging report gives you the specific barcode and weight detail you need to raise a purchase return in EasyJewelry for those pieces.',
                },
                {
                  title: 'Inform buying decisions',
                  desc: 'If a specific item code consistently appears in the aging report, it is a signal that you are buying too much of that type. Use the aging data to adjust your purchasing decisions and avoid restocking items that historically sit unsold for long periods in your jewelry inventory system.',
                },
                {
                  title: 'Branch-level aging analysis',
                  desc: 'Stock that is aging at one branch might sell quickly at another. The barcode detail in the aging report gives you the specific pieces to consider for inter-branch transfers, potentially moving slow stock from a location where it is not selling to one where it might.',
                },
                {
                  title: 'Export for management review',
                  desc: 'Export the full aging report to Excel, CSV, or PDF for sharing with branch managers, buying teams, or business partners. The report can be printed directly from the screen and includes all weight detail needed for a formal inventory review meeting.',
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
                  Why stock aging is a critical metric for jewelry businesses
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    Jewelry inventory is expensive to hold. Unlike most retail products, jewelry does not expire or go out of fashion quickly, which makes it easy to overlook aging stock until the problem becomes severe. A piece that entered the store six months ago is still sitting in the display looking presentable — but it represents six months of tied-up capital that is earning nothing.
                  </p>
                  <p>
                    Generic inventory management software shows you what you have in stock. EasyJewelry's jewelry inventory management system shows you what you have in stock and how long it has been there, at the individual barcode level with full weight detail. This is the difference between knowing your inventory and understanding it.
                  </p>
                  <p>
                    For jewelry businesses that report to investors, banks, or partners, the Stock Aging report is also a key financial health indicator. A business with a high proportion of inventory aged over 90 days has a working capital problem that needs to be addressed. EasyJewelry makes this visible so it can be managed proactively rather than discovered during an annual audit.
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
                      desc: 'Identify display pieces that have been sitting too long and take action before they become a significant capital problem. Use the aging data to drive promotional decisions and buying strategy.',
                    },
                    {
                      type: 'Gold and Diamond Wholesalers',
                      desc: 'Track high-value tagged inventory that has not moved. The pure weight column tells you the exact metal value of aging stock at today\'s rate, informing clearance pricing and supplier return decisions.',
                    },
                    {
                      type: 'Multi-Branch Jewelry Businesses',
                      desc: 'Compare aging profiles across branches. Stock that is aging at one location might sell quickly at another, and the barcode detail in the report makes inter-branch transfer decisions straightforward.',
                    },
                    {
                      type: 'Business Owners and Buyers',
                      desc: 'Use the aging report as a buying performance metric. Item codes that consistently appear in the aging report are items you are over-buying. Adjust purchasing decisions based on real aging data from your jewelry ERP software.',
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
                'Barcode per item',
                'Item code per item',
                'Gross weight per item',
                'Pure weight per item',
                'Age in days per item',
                'Auto-calculated age from entry date',
                'Sortable by any column',
                'Search across all fields',
                'Export to CSV, Excel and PDF',
                'Print directly from screen',
                'Branch-level aging data',
                'All available barcode-tagged items included',
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
                  q: 'How is the age in days calculated?',
                  a: 'The age is calculated from the date the item entered your jewelry inventory management software — through a purchase, exchange, or transfer — to today. It updates automatically every day without any manual input.',
                },
                {
                  q: 'Does the report show items from all branches?',
                  a: 'The report shows available items for the branch you are currently viewing. Multi-branch businesses can review aging data per branch to compare slow-moving stock across locations.',
                },
                {
                  q: 'Can I filter by age to find items older than a specific number of days?',
                  a: 'You can sort by the Age column to bring the oldest items to the top. The search function also allows filtering across all fields in the report.',
                },
                {
                  q: 'Can I export the report for a management meeting?',
                  a: 'Yes. The Stock Aging report exports to CSV, Excel, and PDF and can be printed directly from the screen. All columns including barcode, item code, weights, and age are included in the export.',
                },
                {
                  q: 'Does the report only show barcode-tagged items?',
                  a: 'Yes. The Stock Aging report covers barcode-tagged items that are currently marked as available in your jewelry inventory system. Non-barcodeable wholesale stock managed by weight is not included as it does not have individual item records.',
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
              Stop guessing which stock is sitting too long
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              Every day a piece of jewelry sits unsold in your store, it costs you money. EasyJewelry's Stock Aging report makes the invisible visible — showing you exactly which pieces have been in your jewelry inventory the longest, how much metal they represent, and giving you the data to act on it. Whether you run one store or ten branches, knowing your aging profile is one of the most valuable insights your jewelry store management software can give you.
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