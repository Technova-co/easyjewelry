import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function DailyReportPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              outlineButtonText="Reports"
              title="Daily Report"
              description="Everything that happened in your jewelry business today — on one screen."
            />

            {/* Intro */}
            <div className="mt-10 md:mt-14 max-w-3xl">
              <p className="text-offWhite/80 leading-relaxed">
                At the end of every trading day, a jewelry business owner needs to know one thing: exactly what happened. How much was sold, how much was purchased, what payments came in, what went out, which items were returned, and what the metal balance looks like. EasyJewelry's Daily Report gives you all of that — filtered by date, across all your branches — in a single, clean screen.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                Unlike generic business reports, EasyJewelry's Daily Report is built around how jewelry businesses actually operate. It doesn't just show you revenue and expenses — it shows you gross weight sold, pure weight purchased, metal exchanges, cheques received, and bank transfers made. Every number that matters to a jewelry trader is right there, without digging through multiple screens or running multiple reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">
              What the Daily Report covers
            </Heading>
            <p className="text-offWhite/80 mt-4 mb-10 max-w-2xl">
              Every section of the Daily Report is specific to jewelry business operations. Here is exactly what you see when you open it:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Sales',
                  desc: 'Every sales invoice for the day — invoice number, customer name, gross weight sold, items sold, total amount and outstanding balance. At a glance you know exactly how much gold or silver moved out of your store and how much money came in.',
                },
                {
                  title: 'Received Payments',
                  desc: 'All payments received from customers that day — transaction reference, payment method, bank and amount. Whether it was cash, cheque or bank transfer, it all appears here.',
                },
                {
                  title: 'Purchases',
                  desc: 'Every purchase bill raised that day — supplier name, gross weight purchased, items and total amount. Know exactly how much stock came into your store and what you paid for it.',
                },
                {
                  title: 'Paid Payments',
                  desc: 'All outgoing payments made to vendors and suppliers — transaction reference, method, bank and amount. Your full day of outflows in one place.',
                },
                {
                  title: 'Sales Returns',
                  desc: 'Any items returned by customers that day — sales return number, customer, gross weight returned and amount credited. Returns are tracked separately so they never get confused with your sales totals.',
                },
                {
                  title: 'Purchase Returns',
                  desc: 'Items returned to suppliers that day — purchase return number, supplier, gross weight and amount. Keep your purchase records clean even when returns happen.',
                },
                {
                  title: 'Cheques',
                  desc: 'All cheques issued or received that day — cheque number, bank, memo and amount. Essential for jewelry businesses that deal heavily in post-dated and trade cheques.',
                },
                {
                  title: 'Journals',
                  desc: 'Any manual journal entries for the day — journal number, from account, to account, memo and amount. Full double-entry accounting visibility in the daily view.',
                },
                {
                  title: 'Bank Transfers',
                  desc: 'All bank-to-bank transfers that day — transfer number, from bank, to bank, amount and memo. Track internal fund movements without losing them in the noise.',
                },
                {
                  title: 'Exchanges',
                  desc: 'Gold and silver exchanges processed that day — exchange number, outgoing gross weight, incoming gross weight, outgoing pure weight and incoming pure weight. Unique to jewelry businesses and fully tracked.',
                },
                {
                  title: 'Metal Transactions',
                  desc: 'All raw metal movements for the day — transaction type, party, reference, item, gross weight and pure weight. Know exactly how much metal moved and where it went.',
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
                  Why daily reporting matters for jewelry businesses
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    In most retail businesses, a daily report means total sales and total expenses. In jewelry, it is far more complex. A single day might involve gold sold by weight at a live rate, silver purchased in bulk, a customer returning an item, a cheque received from a trade customer, metal sent for job work, and an exchange of old gold against new — all on the same day.
                  </p>
                  <p>
                    Without a purpose-built daily report, you are left reconciling all of this manually at the end of the day — cross-referencing invoices, payment slips, exchange receipts and metal transfer notes one by one. This is where errors creep in, where discrepancies go unnoticed, and where the end-of-day close becomes a stressful hour-long exercise instead of a two-minute check.
                  </p>
                  <p>
                    EasyJewelry's Daily Report pulls everything together automatically. Filter by date, review each section, and close your day knowing every transaction is accounted for — sales, purchases, payments, returns, cheques, exchanges and metal movements included.
                  </p>
                </div>
              </div>

              <div>
                <Heading as="h2">
                  Who benefits from the Daily Report
                </Heading>
                <div className="mt-6 space-y-4">
                  {[
                    {
                      type: 'Store Owners',
                      desc: 'Review the full day without being on the floor. See total sales, payments received, and outstanding balances from anywhere.',
                    },
                    {
                      type: 'Managers',
                      desc: 'Reconcile the day before close. Catch any missing payments, unrecorded returns or discrepancies before they carry over.',
                    },
                    {
                      type: 'Accountants',
                      desc: 'Use the daily report as the source of truth for bookkeeping. Every transaction type is listed with references, making reconciliation straightforward.',
                    },
                    {
                      type: 'Multi-Branch Owners',
                      desc: 'Filter the report by branch to see exactly what happened at each location on any given day.',
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

      {/* Feature checklist */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">Daily Report — full feature list</Heading>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                'Filter by any date',
                'Sales with gross weight and balance',
                'Payments received with method and bank',
                'Purchases with gross weight and amount',
                'Outgoing payments with method and bank',
                'Sales returns tracking',
                'Purchase returns tracking',
                'Cheques issued and received',
                'Manual journal entries',
                'Bank-to-bank transfer tracking',
                'Gold and silver exchange records',
                'Metal transactions by type and weight',
                'Multi-branch filtering',
                'Export and print ready',
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
            <Heading as="h2">Frequently asked questions</Heading>
            <div className="mt-8 space-y-4 max-w-3xl">
              {[
                {
                  q: 'Can I view the Daily Report for a past date?',
                  a: 'Yes. Use the date filter to pull the Daily Report for any date in your history. All transactions are stored and accessible at any time.',
                },
                {
                  q: 'Does the Daily Report work across multiple branches?',
                  a: 'Yes. You can filter the Daily Report by branch to see exactly what happened at each location on any given day.',
                },
                {
                  q: 'Does it show metal weight or just monetary amounts?',
                  a: 'Both. Every relevant section shows gross weight and pure weight alongside monetary amounts — so you always know the metal position as well as the financial position.',
                },
                {
                  q: 'Can I export or print the Daily Report?',
                  a: 'Yes. The Daily Report can be exported and printed directly from the screen.',
                },
                {
                  q: 'Does it include exchanges and metal transactions?',
                  a: 'Yes. Exchanges — where old gold comes in and new gold goes out — and all raw metal transactions are included in the Daily Report, which is unique to EasyJewelry compared to generic business software.',
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
            <div className="max-w-3xl">
              <Heading as="h2">
                Close every day with complete confidence
              </Heading>
              <p className="text-offWhite/80 mt-4 leading-relaxed">
                The Daily Report is one of those features that jewelry business owners wonder how they ever managed without. When every transaction type — sales, purchases, payments, returns, cheques, exchanges, and metal movements — is in one place, the end of day stops being a chore and becomes a 60-second review. Whether you run one store or ten branches, EasyJewelry gives you the full picture every single day.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/request-demo" className="button-primary inline-flex items-center justify-center px-[22px] py-3 text-white font-medium text-sm leading-normal rounded-[10px]">
                  Book a Free Demo
                </Link>
                <Link href="/features" className="button-secondary inline-flex items-center justify-center px-[22px] py-3 font-medium text-sm leading-normal rounded-[10px]">
                  View All Features
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}