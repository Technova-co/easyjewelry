import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function SalesReportsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Jewelry Sales Reports"
              description="Analyze your jewelry sales from four different angles. By branch, by salesman, by customer, and by item — each report gives you a different lens on your sales performance with date range filtering and full export capability."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                A single total sales figure tells you how much you sold. Four dedicated sales reports tell you who sold it, where it was sold, who bought it, and what was bought. EasyJewelry's Sales Reports module gives you all four views, each built around how jewelry businesses actually need to analyze performance. Whether you are reviewing branch productivity, evaluating salesman performance, understanding your best customers, or identifying your top-selling items, there is a dedicated report for each question in your jewelry store management software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four reports */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">Four sales reports, four perspectives</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Each report answers a different business question and is designed for a different decision-making context.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Sales Report by Branch
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  Shows total sales broken down by branch location for any selected date range. This is the primary report for multi-branch jewelry businesses that need to compare location performance. Which branch sold the most? Which is trending up? Which needs attention? The branch sales report answers all of these questions with total quantities, gross weights, and sales values per location.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  For business owners managing multiple jewelry store locations, this report is typically the first one reviewed at the start of the week or month. It gives an immediate high-level picture of how the entire operation is performing before drilling into individual branches for more detail.
                </p>
              </div>

              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Sales Report by Salesman
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  Shows total sales attributed to each individual salesman for the selected period. Every sales invoice in EasyJewelry records which salesman processed it, and this report compiles that data into a ranked performance view. Total invoices, total quantities, total gross weight sold, and total revenue per salesman are all visible.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  For jewelry retail managers, the salesman report is the basis for performance reviews, commission calculations, and incentive decisions. For wholesale operations, it shows which sales staff are managing the most active trade accounts. The report covers all branches in the selected period so managers can compare salesman performance across locations in a single view within your jewelry ERP software.
                </p>
              </div>

              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Sales Report by Party
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  Shows total sales attributed to each customer or trade party for the selected period. This is your customer ranking report — who are your top buyers by revenue, by quantity, and by gross weight purchased? Which trade customers are most active? Which retail customers buy regularly and represent long-term value to your jewelry business?
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  For jewelry wholesalers managing trade accounts, the party sales report is essential for understanding account concentration — how much of your revenue depends on your top five customers. For retailers, it identifies your most valuable customers for relationship management, loyalty initiatives, and personalized outreach. The party report in your jewelry store software turns your transaction history into actionable customer intelligence.
                </p>
              </div>

              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Sales Report by Item
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  Shows total sales broken down by item code for the selected period. Which item types are selling the most? Which karats are moving fastest? Which product categories generate the most revenue and the most gross weight sold? The item sales report answers all of these questions with total quantities, weights, and revenue per item code.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  For jewelry buyers and merchandisers, this is the most important report for inventory planning. Items that rank high in the sales report should be restocked proactively. Items that rank low should be reviewed for pricing, display positioning, or discontinuation. Combined with the Stock Aging report, the item sales report gives you a complete picture of what is selling and what is sitting in your jewelry inventory management system.
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
                  Why multi-dimensional sales reporting matters for jewelry businesses
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    A jewelry business generates sales data every day across multiple dimensions simultaneously. A single invoice involves a salesman, a branch, a customer, and one or more items. Generic sales reports in most jewelry store software show you the total. EasyJewelry shows you the total from four different angles, each of which supports a different management decision.
                  </p>
                  <p>
                    Branch performance informs staffing and operational decisions. Salesman performance informs HR, commission, and coaching decisions. Customer analysis informs relationship management and wholesale account strategy. Item analysis informs buying, pricing, and merchandising decisions. These are four fundamentally different business functions, and each needs its own data view to operate effectively.
                  </p>
                  <p>
                    For jewelry businesses that have historically relied on manual sales tallies or basic POS receipts, gaining access to this level of sales intelligence is transformative. Decisions that used to be based on intuition and experience can be made on actual data from your jewelry ERP software, leading to better buying, better staffing, and better customer relationships.
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
                      type: 'Jewelry Retail Managers',
                      desc: 'Use the salesman and item reports to manage daily store performance. Know who is selling, what is selling, and where attention is needed before the day ends.',
                    },
                    {
                      type: 'Multi-Branch Jewelry Owners',
                      desc: 'The branch report gives you an immediate performance comparison across all your locations for any period. Identify which branches are outperforming and which need support.',
                    },
                    {
                      type: 'Wholesale Sales Teams',
                      desc: 'The party report shows which trade accounts are most active and how account revenue is trending. Use it to prioritize customer visits and manage account relationships proactively.',
                    },
                    {
                      type: 'Buyers and Merchandisers',
                      desc: 'The item report is the foundation of smart buying decisions. Know which item codes are driving revenue before placing your next order with manufacturers or suppliers.',
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
                'Sales Report by Branch',
                'Sales Report by Salesman',
                'Sales Report by Party',
                'Sales Report by Item',
                'Date range filter on all reports',
                'Total quantity per dimension',
                'Total gross weight per dimension',
                'Total revenue per dimension',
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
                  q: 'Can I run all four reports for the same date range?',
                  a: 'Yes. Each report has its own date range filter and can be run independently for any period. You can run the branch report and the salesman report for the same month to get both a location view and a staff performance view of the same period.',
                },
                {
                  q: 'Does the salesman report cover all branches?',
                  a: 'Yes. The salesman report compiles sales from all branches, so you can compare staff performance across locations in a single view. If you want to see one branch only you can filter by branch.',
                },
                {
                  q: 'Can I export these reports to share with branch managers?',
                  a: 'Yes. All four reports export to CSV, Excel, and PDF and can be printed directly from the screen. Branch managers can receive their branch performance report without needing access to the full jewelry ERP system.',
                },
                {
                  q: 'Does the item report show gross weight sold per item?',
                  a: 'Yes. The item sales report shows total quantity and gross weight sold per item code alongside the revenue figure, which is important for jewelry businesses that track metal movement as well as monetary sales.',
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
              Understand your jewelry sales from every angle
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              Four reports, four perspectives, one system. EasyJewelry's Sales Reports give every person in your jewelry business the data they need for their specific role — owners reviewing branch performance, managers tracking salesman output, sales teams managing customer accounts, and buyers analyzing which items to restock. All of it is built into your jewelry store management software and ready to run for any date range at any time.
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