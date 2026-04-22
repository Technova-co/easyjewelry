import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function PurchaseReportsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Jewelry Purchase Reports"
              description="Analyze your jewelry purchases from four angles. By branch, by purchaser, by vendor, and by item — each report gives you a different view of your buying activity with date range filtering and full export capability."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                Understanding what you are buying is just as important as understanding what you are selling. In a jewelry business, purchasing decisions determine your inventory composition, your metal balance, your vendor relationships, and ultimately your profitability. EasyJewelry's Purchase Reports module gives you four dedicated views of your buying activity — by branch, by purchaser, by vendor party, and by item — each designed to answer a different question about your procurement and help you manage it more effectively through your jewelry inventory management software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four reports */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">Four purchase reports, four perspectives</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Each report answers a specific question about your jewelry purchasing activity and supports a different operational or management decision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Purchase Report by Branch
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  Shows total purchases broken down by branch location for the selected date range. For multi-branch jewelry businesses, this report answers a critical operational question — how much metal and how many pieces is each location buying, and how does that compare to what they are selling?
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  Branch-level purchase data is essential for understanding stock flow across your operation. A branch that is buying significantly more than it is selling is accumulating inventory. A branch buying very little relative to its sales is running down stock and may need restocking. The branch purchase report in your jewelry ERP software makes these patterns visible before they become problems.
                </p>
              </div>

              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Purchase Report by Purchaser
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  Shows total purchases attributed to each individual staff member who created purchase bills in EasyJewelry. Every purchase bill records who entered it, and this report compiles that activity into a purchaser performance view — total bills raised, total quantities, total gross weight purchased, and total spend per person.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  For jewelry businesses where multiple staff members handle purchasing — different buyers for different product categories, or different staff at each branch handling their own procurement — the purchaser report gives management visibility over individual buying activity. It is also useful for old gold buying operations where each counter staff member buys from walk-in customers and their individual purchasing totals need to be tracked separately in your jewelry store management software.
                </p>
              </div>

              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Purchase Report by Party
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  Shows total purchases from each vendor or supplier party for the selected period. This is your vendor ranking report — who are your most active suppliers by spend, by quantity, and by gross weight? Which vendors are you most dependent on? Which new vendors are gaining share of your purchasing?
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  For jewelry businesses managing multiple vendor relationships — manufacturers, bullion suppliers, old gold buyers, and trade vendors — the party purchase report is essential for understanding supply chain concentration. If 80 percent of your purchasing comes from two vendors and one of them has a supply problem, the impact on your business is significant. The report makes this visibility available at any time from your jewelry inventory system.
                </p>
              </div>

              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Purchase Report by Item
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  Shows total purchases broken down by item code for the selected period. Which item types are you buying the most of? Which karats are you procuring most heavily? How does your purchase composition by item type compare to your sales composition?
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  The item purchase report is the buying counterpart to the item sales report. Together they tell you whether your purchasing is aligned with what your customers are actually buying. If you are buying heavily in 18 karat pieces but your sales report shows 22 karat driving the most revenue, there is a buying strategy misalignment that is visible only when you have both reports in your jewelry management software and look at them together.
                </p>
              </div>
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
                  Why purchase reporting matters for jewelry businesses
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    In a jewelry business, purchase decisions directly determine inventory composition and working capital allocation. Buying the wrong items, buying too much from a single vendor, or having one branch accumulate excessive stock while another runs low are all problems that are invisible without proper purchase reporting in your jewelry ERP software.
                  </p>
                  <p>
                    EasyJewelry captures purchasing data at the transaction level throughout the year. Every purchase bill records the branch, the purchaser, the vendor, the items, and the metal weights. The Purchase Reports module compiles this data into four analytical views that give management the ability to review buying performance, vendor dependency, and procurement efficiency across the entire jewelry operation.
                  </p>
                  <p>
                    For jewelry businesses that buy old gold from customers at the counter, the purchaser report is particularly valuable. Each counter staff member who buys old gold is a purchaser, and their individual buying volumes, total spend, and gross weight purchased are all visible in the report. This supports daily reconciliation, commission calculations, and oversight of the buy-back operation within your jewelry store software.
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
                      type: 'Jewelry Business Owners',
                      desc: 'Review branch purchasing to ensure each location is buying in line with its sales. Use vendor reports to monitor supply chain concentration and diversification across your jewelry business.',
                    },
                    {
                      type: 'Buying and Procurement Teams',
                      desc: 'Use the item and vendor reports to make data-driven buying decisions. Align procurement with sales performance and avoid over-buying in categories that are not moving in your jewelry inventory system.',
                    },
                    {
                      type: 'Old Gold and Buy-Back Operations',
                      desc: 'Track individual staff purchasing volumes through the purchaser report. Know exactly how much each counter buyer is purchasing, at what total spend, and at what gross weight on any given day or period.',
                    },
                    {
                      type: 'Multi-Branch Jewelry Businesses',
                      desc: 'Compare purchasing activity across all branch locations. Identify imbalances in stock accumulation before they affect working capital or require emergency inter-branch transfers.',
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
                'Purchase Report by Branch',
                'Purchase Report by Purchaser',
                'Purchase Report by Party',
                'Purchase Report by Item',
                'Date range filter on all reports',
                'Total quantity per dimension',
                'Total gross weight per dimension',
                'Total spend per dimension',
                'Sortable by any column',
                'Search across all fields',
                'Export to CSV, Excel and PDF',
                'Print directly from screen',
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
                  q: 'Does the purchaser report track old gold buying by counter staff?',
                  a: 'Yes. Every purchase bill in EasyJewelry records who created it. Counter staff who buy old gold from customers are tracked as purchasers and their individual buying volumes appear in the purchaser report.',
                },
                {
                  q: 'Can I compare purchase and sales reports for the same period?',
                  a: 'Yes. Both the Purchase Reports and Sales Reports modules support the same date range filtering. Running both for the same period gives you a buy-versus-sell comparison at the branch, item, or party level.',
                },
                {
                  q: 'Does the branch purchase report include all purchase types?',
                  a: 'Yes. Metal purchases, old gold buy-backs, and wholesale purchases all recorded through EasyJewelry are included in the branch purchase totals.',
                },
                {
                  q: 'Can I export the purchase reports to share with my management team?',
                  a: 'Yes. All four reports export to CSV, Excel, and PDF and can be printed directly from the screen, making them easy to share with branch managers, buying teams, or business partners.',
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
              Understand your jewelry buying as clearly as your selling
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              What you buy determines what you can sell. EasyJewelry's Purchase Reports give you four ways to analyze your procurement — by location, by staff, by vendor, and by item — so your buying decisions are always informed by real data from your jewelry inventory management system rather than intuition. Whether you are managing a multi-branch operation, running a buy-back counter, or reviewing vendor relationships, the purchase reports give you the visibility you need.
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