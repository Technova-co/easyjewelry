import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function ChartOfAccountsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Chart of Accounts"
              description="Every account in your jewelry business in one place. Bank balances, cash positions, expense totals, salary accounts, VAT, liabilities, and party balances — all visible with current balances and full drill-down to every underlying transaction."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                The chart of accounts is the backbone of the accounting system in any business. In EasyJewelry, it is also the place where every financial account your jewelry business operates is visible in one organized view — from your main bank accounts and petty cash to individual expense categories, salary accounts, VAT liability, fixed assets, and party balances. Every account shows its current balance, and every balance can be drilled into to see the individual transactions that produced it. Date range filtering lets you view account balances for any period, making the chart of accounts a powerful tool for both day-to-day financial management and period-end review in your jewelry store management software.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                Looking at the screenshots above you can see the depth of the account structure that EasyJewelry maintains for a real jewelry business. Bank accounts include cash on hand, petty cash, safe box cash, named individual accounts, and actual bank accounts — each with its current balance. Expense accounts are organized by category — internet, government company expenses, stationery, tools, food, equipment, repairs, credit card fees, making charges, salaries, social and marketing, and telephone. The Federal Tax Authority section shows the VAT balance. Fixed and deposit assets show property deposits and bank fixed deposits. Liabilities show outstanding rent. Party balance shows the net position across all customer and vendor accounts. All of this is built automatically from the transactions recorded daily in your jewelry ERP software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Account categories */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">Account categories in EasyJewelry</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              The chart of accounts organizes every financial account in your jewelry business into logical categories, each reflecting a different aspect of your operation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Bank and Cash Accounts',
                  desc: 'Every cash and bank account in your jewelry business — counter cash, petty cash, safe box, named personal accounts, and all bank accounts across every branch. Each shows its current balance and can be drilled into to see every deposit, withdrawal, and transfer that has moved through that account in your jewelry store software.',
                },
                {
                  title: 'Expense Accounts',
                  desc: 'Every operating expense category your jewelry business uses — internet, utilities, government fees, stationery, tools, equipment and decoration, repairs and soldering, credit card fees, payment platform commissions, making charges, social and marketing, and telephone. Each account shows its cumulative balance for the selected period.',
                },
                {
                  title: 'Salary Accounts',
                  desc: 'Individual salary accounts per staff member, each showing the total salary paid in the selected period. This gives your accountant a clean salary breakdown per employee without needing a separate payroll system alongside your jewelry management software.',
                },
                {
                  title: 'Federal Tax Authority',
                  desc: 'The VAT balance account showing the net VAT liability owed to the tax authority. This figure is the running total of output VAT minus input VAT and expense VAT, and it ties directly to the VAT Report in EasyJewelry.',
                },
                {
                  title: 'Fixed and Deposit Assets',
                  desc: 'Fixed deposit accounts and shop rent deposit tracking. Assets that represent long-term financial commitments — bank fixed deposits and property security deposits — are captured here separately from operating cash and bank accounts.',
                },
                {
                  title: 'Liabilities',
                  desc: 'Outstanding liabilities of the jewelry business — rent payable, outstanding obligations, and any other liability accounts configured in your chart of accounts. Each shows the current balance with drill-down to the underlying transactions.',
                },
                {
                  title: 'Party Balance',
                  desc: 'The net balance across all customer and vendor party accounts in your jewelry inventory system. A single consolidated figure showing what is owed to you and what you owe across your entire customer and supplier base.',
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

      {/* Date range and drill down */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">Date range filtering and transaction drill-down</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              The chart of accounts is not just a snapshot — it is a fully interactive financial report that gives you period-specific balances and complete transaction visibility behind every figure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Filter by any date range',
                  desc: 'Set a From and To date to view account balances for any specific period. Month-to-date, quarter-to-date, year-to-date, or any custom range — the balances update to reflect only the transactions within that period. This makes the chart of accounts useful for both daily review and period-end financial analysis.',
                },
                {
                  title: 'Drill into any account',
                  desc: 'Every account balance has a View button that opens the complete transaction list for that account within the selected date range. Cash account showing an unexpected balance — click View and see every transaction that contributed to it. Expense account higher than expected — click View and see every individual expense posting.',
                },
                {
                  title: 'Export and print',
                  desc: 'The full chart of accounts can be exported to CSV, Excel, or PDF and printed directly from the screen. This makes it straightforward to share the complete account summary with your external accountant, business partners, or bank without requiring them to access the jewelry ERP software directly.',
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
                  Why a complete chart of accounts matters for jewelry businesses
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    Many jewelry businesses operate with a fragmented financial picture — sales recorded in one place, expenses tracked in a spreadsheet, bank balances checked in online banking, and salary payments managed separately. The result is that nobody has a complete view of the financial position of the business at any given time without manually pulling information from multiple sources.
                  </p>
                  <p>
                    EasyJewelry's chart of accounts brings all of this into one place because every transaction entered through the system — every sale, every purchase, every payment, every expense, every bank transfer, every salary payment — automatically posts to the relevant account. The chart of accounts is always current, always complete, and always reflects the real financial position of your jewelry business without any manual updating.
                  </p>
                  <p>
                    For jewelry businesses that prepare formal accounts for tax filing, investor reporting, or bank financing, having a complete and organized chart of accounts in your jewelry ERP software means your accountant has everything they need in one system. No data gathering from multiple sources, no reconciliation between systems, no manual journal entries to bring external records into the accounts.
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
                      desc: 'Get a complete financial overview of your business in one screen. Every bank account, every expense category, every salary, and your net VAT position all visible at a glance with current balances.',
                    },
                    {
                      type: 'Accountants and Finance Teams',
                      desc: 'Use the date range filter to generate period-specific account summaries for month-end, quarter-end, and year-end reporting. Drill into any account for the transaction detail needed for reconciliation or audit.',
                    },
                    {
                      type: 'Multi-Branch Jewelry Businesses',
                      desc: 'The chart of accounts consolidates financial data across all branches. Each account reflects the cumulative activity from every location, giving management a group-level financial view.',
                    },
                    {
                      type: 'External Accountants and Auditors',
                      desc: 'Export the complete chart of accounts with transaction detail for any period. Everything needed for formal account preparation or audit is available from the same jewelry store software without manual data extraction.',
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
                'Bank and cash account balances',
                'Petty cash and safe box accounts',
                'Named individual accounts',
                'All operating expense accounts',
                'Salary accounts per staff member',
                'Federal tax authority VAT balance',
                'Fixed and deposit asset accounts',
                'Liability accounts',
                'Party balance summary',
                'Date range filter',
                'Drill-down to transactions per account',
                'Current balance per account',
                'Export to CSV, Excel and PDF',
                'Print chart of accounts',
                'Search across all accounts',
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
                  q: 'Does the chart of accounts update automatically from transactions?',
                  a: 'Yes. Every transaction entered through EasyJewelry automatically posts to the relevant accounts. The chart of accounts is always current without any manual updating.',
                },
                {
                  q: 'Can I see account balances for a specific period?',
                  a: 'Yes. The date range filter lets you set any From and To date to view balances for that specific period. This makes it easy to generate monthly, quarterly, or annual account summaries.',
                },
                {
                  q: 'Can I add custom expense accounts for my specific business?',
                  a: 'Yes. The chart of accounts in EasyJewelry can be configured with accounts specific to your jewelry business. Custom expense categories, named accounts, and business-specific account structures are all supported.',
                },
                {
                  q: 'Can my external accountant access the chart of accounts?',
                  a: 'Your accountant can be given a user account in EasyJewelry with appropriate access, or you can export the chart of accounts to CSV, Excel, or PDF to share with them. The export includes all account balances and can be drilled down per account before exporting.',
                },
                {
                  q: 'Does it cover accounts across all branches?',
                  a: 'Yes. The chart of accounts consolidates financial data from all branches in EasyJewelry. Every account balance reflects the cumulative activity across all your jewelry store locations.',
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
              Every account in your jewelry business, always up to date
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              The chart of accounts in EasyJewelry is not something you maintain — it maintains itself. Every transaction posted through your jewelry ERP software updates the relevant accounts automatically, so the chart is always current, always complete, and always ready for review. Whether you are checking your cash position at the end of the day, reviewing expense accounts at month end, or preparing financial statements for the year, the chart of accounts gives you the complete financial picture of your jewelry business in one place.
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