import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function ChequesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Expense Management and Cheque Payments"
              description="Record every business expense paid by cheque against the correct expense account. Rent, utilities, salaries, government fees, and all other operating costs tracked directly in your jewelry store software."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                Running a jewelry business involves a constant flow of operating expenses. Rent for the showroom. SEWA utility bills. Government employment fees. Internet and communications. Stationery and store supplies. Mixed day-to-day expenses. Each of these needs to be recorded against the correct expense account in your jewelry ERP software so your profit and loss report accurately reflects the true cost of running the business. EasyJewelry's Cheques module is where expense payments made by cheque are entered, allocated to the right account, and posted to the financial records in one operation.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                The cheque entry screen is structured like a proper payment voucher. The cheque number, date, currency, bank account the cheque is drawn from, and the party the cheque is payable to are all captured in the header. The line items below allow you to allocate the payment across one or more expense accounts, each with its own memo and amount. VAT is calculated on the total if applicable. The subtotal, VAT, and total are shown before saving. Once saved, the expense accounts update, the bank balance reduces, and the cheque appears in the daily report under the Cheques section of your jewelry management software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expense accounts */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">Expense accounts in EasyJewelry</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Every expense account in your jewelry business is available in the account dropdown when entering a cheque. Each account tracks its running balance so your expense reports always reflect accurate cumulative figures.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'SEWA and utilities',
                  desc: 'Electricity, water, and utility bills paid to SEWA and other utility providers. Each payment is recorded against the utilities expense account with the cheque number and bank as reference. Your total utility spend is always visible in your expense reports.',
                },
                {
                  title: 'Rent',
                  desc: 'Monthly showroom and office rent payments. Recording rent cheques against the rent expense account keeps your occupancy costs accurately reflected in your jewelry store software profit and loss reports throughout the year.',
                },
                {
                  title: 'Government employment expenses',
                  desc: 'Government fees related to staff employment — visa fees, labor card renewals, work permits, and similar regulatory costs. These are a significant recurring expense for jewelry businesses in the UAE and other markets with formal employment cost structures.',
                },
                {
                  title: 'Internet and communications',
                  desc: 'Monthly internet, phone, and communications expenses. Tracking these against a dedicated account gives you visibility into your communications costs as a separate line in your expense summary.',
                },
                {
                  title: 'Company expenses',
                  desc: 'General company operating expenses that do not fit a specific category. This catch-all account ensures no expense goes unrecorded even when it does not have a dedicated account in your chart of accounts.',
                },
                {
                  title: 'Stationery and supplies',
                  desc: 'Office stationery, barcode label stock, printer supplies, and store consumables. Recording these against a stationery account gives you an accurate picture of your supply costs over time.',
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

      {/* How it works */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">How cheque expense entry works</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              The cheque entry process in EasyJewelry is structured to capture everything needed for proper expense accounting in one screen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Enter the cheque header',
                  desc: 'Enter the cheque number, date, currency, and select the bank account the cheque is drawn from. Select the party the cheque is payable to if applicable. Add an optional memo describing the payment.',
                },
                {
                  step: '02',
                  title: 'Allocate to expense accounts',
                  desc: 'Add one or more line items, each allocated to a specific expense account from your chart of accounts. Each line has its own memo and amount. A single cheque can be split across multiple expense accounts if the payment covers more than one cost category.',
                },
                {
                  step: '03',
                  title: 'Review and save',
                  desc: 'The subtotal, VAT if applicable, and total are calculated automatically. Once saved, the expense accounts update, the bank balance reduces by the cheque amount, and the transaction is recorded in the daily report and your financial accounts in your jewelry ERP software.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-blue rounded-20 border border-lineColor/50 p-6"
                >
                  <div className="text-primary text-sm font-semibold mb-3">
                    {item.step}
                  </div>
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
                  Why proper expense recording matters for jewelry businesses
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    A jewelry business can have strong sales figures but poor profitability if operating expenses are not tracked accurately. Rent, utilities, government fees, and staffing costs are substantial in a retail jewelry operation. Without recording these against the correct expense accounts in your jewelry store management software, your profit and loss report shows a misleadingly high profit that does not reflect the true cost of running the business.
                  </p>
                  <p>
                    The Cheques module ensures every expense payment made by cheque is immediately reflected in the right expense account. Your cumulative rent expense, your year-to-date utility costs, and your total government fee spend are all visible in your expense reports at any time without needing to reconcile bank statements manually.
                  </p>
                  <p>
                    For VAT-registered jewelry businesses, recording expenses with VAT correctly is also important for input tax recovery. The VAT field on the cheque entry ensures the tax component of each expense payment is captured separately and feeds into your VAT reporting correctly through your jewelry ERP software.
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
                      desc: 'Record all showroom operating expenses against the correct accounts. Rent, utilities, and store supplies are tracked separately so your profit and loss report accurately reflects the cost of running your retail operation.',
                    },
                    {
                      type: 'Gold and Silver Wholesalers',
                      desc: 'Track trading floor expenses, government fees, and operational costs against dedicated expense accounts. VAT on eligible expenses is captured correctly for input tax recovery.',
                    },
                    {
                      type: 'Multi-Branch Jewelry Businesses',
                      desc: 'Each branch records its own expenses against the branch bank account. Management can see the expense breakdown per branch and compare operating costs across locations.',
                    },
                    {
                      type: 'Accountants and Finance Managers',
                      desc: 'Cheque expenses are posted directly to the correct accounts in EasyJewelry. Month-end expense reports are accurate without any manual reconciliation, and VAT figures are already separated for tax filing.',
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
                'Auto-generated cheque number',
                'Cheque date',
                'Currency selection',
                'Bank account selection',
                'Party selection',
                'Optional memo',
                'Multiple expense account lines per cheque',
                'Memo per expense line',
                'Amount per expense line',
                'VAT calculation on total',
                'Subtotal, VAT and total summary',
                'Bank balance reduces on save',
                'Expense accounts update on save',
                'Cheque appears in daily report',
                'Full cheque history with search and filter',
                'Export to CSV, Excel and PDF',
                'Branch-level expense tracking',
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
                  q: 'Can I split one cheque across multiple expense accounts?',
                  a: 'Yes. A single cheque entry in EasyJewelry can have multiple line items, each allocated to a different expense account. This is useful when one cheque covers several cost categories at once.',
                },
                {
                  q: 'Does the bank balance update when a cheque is saved?',
                  a: 'Yes. The bank account selected on the cheque entry reduces by the total cheque amount when the entry is saved. The expense accounts increase by the amounts allocated to each line.',
                },
                {
                  q: 'Is VAT captured on expense cheques?',
                  a: 'Yes. The cheque entry screen includes VAT calculation on the total amount. The VAT figure is recorded separately and feeds into your VAT reporting in EasyJewelry.',
                },
                {
                  q: 'Where do cheque expenses appear in my reports?',
                  a: 'Cheque expenses appear in the Cheques section of the daily report and in the relevant expense account histories. They are also reflected in your profit and loss reports through the expense accounts they are posted to.',
                },
                {
                  q: 'Can I record a cheque expense in a foreign currency?',
                  a: 'Yes. The currency field on the cheque entry supports any currency configured in EasyJewelry. The expense is recorded in the selected currency and converted to your primary currency for reporting.',
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
              Every operating expense recorded where it belongs
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              Accurate profit and loss reporting in a jewelry business depends on every expense being recorded against the right account, every time. EasyJewelry's Cheques module makes this straightforward — enter the cheque, allocate to the expense accounts, save. Your financial reports in your jewelry store management software reflect the true cost of running your business, VAT is captured correctly, and your bank balance is always accurate.
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