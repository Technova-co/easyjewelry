import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function JournalsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Accounting Journal Entries"
              description="Post manual journal entries directly between any two accounts in your jewelry store software. Full double-entry accounting for corrections, adjustments, and transactions that do not fit a standard module."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                Every accounting system needs a journal entry module. No matter how well structured a jewelry ERP software is, there will always be transactions that require a direct debit and credit between two accounts — an opening balance adjustment, a correction to a previously posted entry, an inter-account transfer that does not fit the bank transfer module, a provision, a depreciation entry, or any other accounting event that requires a manual posting. EasyJewelry's Journals module provides exactly this, with a clean double-entry journal entry screen that gives your accountant or finance manager the flexibility to post any transaction directly between any two accounts in your chart of accounts.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                The journal entry screen is simple and precise. A journal number is auto-generated. The date and an optional memo are entered. The currency is selected. The From account — the account being credited — and the To account — the account being debited — are both selected from your full chart of accounts, which includes all bank accounts, cash accounts, expense accounts, and party accounts in your jewelry management software. The amount is entered and the entry is saved. Both accounts update immediately and the journal appears in the daily report and in the account transaction histories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to use journals */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">When journal entries are used in a jewelry business</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Journal entries handle the accounting transactions that fall outside the standard modules in your jewelry ERP software.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Opening balances',
                  desc: 'When setting up EasyJewelry for the first time, opening balances for all accounts — cash, bank, customer receivables, vendor payables, and expense account balances — are posted through journal entries. This establishes the starting financial position in your jewelry store software before day-to-day transactions begin.',
                },
                {
                  title: 'Corrections and adjustments',
                  desc: 'When a transaction has been posted incorrectly to the wrong account, a journal entry reverses the error and posts it to the correct account. This is the standard accounting approach for corrections and keeps your audit trail clean by documenting the adjustment explicitly.',
                },
                {
                  title: 'Depreciation entries',
                  desc: 'Periodic depreciation of fixed assets — display cases, safes, Zebra printers, computers, and store equipment — is posted through journal entries. The asset account is credited and the depreciation expense account is debited, reducing the book value of the asset over time.',
                },
                {
                  title: 'Provisions and accruals',
                  desc: 'Expenses that have been incurred but not yet paid, or income that has been earned but not yet received, are recorded through accrual journal entries. This is standard practice for year-end and month-end accounting in jewelry businesses that prepare formal financial statements.',
                },
                {
                  title: 'Inter-account transfers without cash movement',
                  desc: 'Sometimes a balance needs to move between two accounts in your jewelry management software without an actual cash payment — reallocating a balance from one expense account to another, or moving a party balance between accounts. A journal entry handles this cleanly.',
                },
                {
                  title: 'Writing off bad debts',
                  desc: 'When a customer balance is deemed irrecoverable, the receivable is written off through a journal entry that debits the bad debt expense account and credits the customer account. This keeps your receivables accurate and reflects the financial reality in your jewelry ERP software.',
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
                  Why journal entries matter for jewelry business accounting
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    A jewelry business that takes its financial reporting seriously needs a full double-entry accounting system, not just a cash register. The difference between a jewelry store management software and a genuine jewelry ERP software is whether the financial foundation is built on proper double-entry accounting principles. EasyJewelry is built on double-entry accounting, and the Journals module is where that accounting backbone is most directly visible.
                  </p>
                  <p>
                    Every transaction in EasyJewelry — every sale, every purchase, every payment, every expense — generates accounting entries automatically behind the scenes. The Journals module gives your accountant the ability to make direct entries when those automatic postings need to be supplemented, corrected, or extended with additional accounting treatments.
                  </p>
                  <p>
                    For jewelry businesses that prepare formal financial statements for investors, banks, or regulatory purposes, having a proper journal entry module in your jewelry ERP software is essential. Your auditor or external accountant needs to be able to post year-end adjustments, audit corrections, and statutory entries directly into the system without workarounds.
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
                      type: 'Accountants and Finance Managers',
                      desc: 'Post corrections, accruals, provisions, and adjustments directly in EasyJewelry without workarounds. Every manual entry is documented with a reference number, date, memo, and both account names.',
                    },
                    {
                      type: 'Jewelry Business Owners',
                      desc: 'Set up opening balances when transitioning to EasyJewelry. Post depreciation on store equipment and fixtures. Keep your financial records complete and accurate from day one.',
                    },
                    {
                      type: 'External Auditors',
                      desc: 'Post audit adjustments and year-end entries directly into the jewelry ERP system. Journal entries are fully auditable with reference numbers, dates, and account names on every posting.',
                    },
                    {
                      type: 'Multi-Branch Jewelry Businesses',
                      desc: 'Post inter-branch accounting adjustments and consolidation entries. Journal entries are associated with the branch they are posted from, keeping multi-branch financial records clean and separately auditable.',
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
                'Auto-generated journal reference number',
                'Journal date',
                'Optional memo per journal',
                'Currency selection',
                'From account selection — full chart of accounts',
                'To account selection — full chart of accounts',
                'Bank, cash, expense and party accounts available',
                'Amount entry',
                'Both accounts update on save',
                'Journal appears in daily report',
                'Full journal history with search and filter',
                'Export journals to CSV, Excel and PDF',
                'Branch-level journal tracking',
                'Double-entry accounting on every posting',
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
                  q: 'Can I post a journal entry between any two accounts?',
                  a: 'Yes. The From and To account dropdowns give access to the full chart of accounts in EasyJewelry, including all bank accounts, cash accounts, expense accounts, and party accounts. Any two accounts can be used in a journal entry.',
                },
                {
                  q: 'Do both accounts update when a journal is saved?',
                  a: 'Yes. The From account is credited and the To account is debited when the journal is saved. Both balances update immediately in your jewelry ERP software.',
                },
                {
                  q: 'Where do journals appear in my reports?',
                  a: 'Journals appear in the Journals section of the daily report and in the transaction history of both accounts posted to. Every journal has a reference number, date, memo, and both account names for complete audit traceability.',
                },
                {
                  q: 'Can I post journals in a foreign currency?',
                  a: 'Yes. The currency field supports any currency configured in EasyJewelry. The journal is recorded in the selected currency and the accounts update in that currency.',
                },
                {
                  q: 'Can I use journals to set up opening balances?',
                  a: 'Yes. Opening balances for all accounts when setting up EasyJewelry are posted through journal entries. This is the standard approach for establishing the starting financial position in a new jewelry ERP system.',
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
              Complete double-entry accounting built into your jewelry software
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              EasyJewelry is not a cash register with reports — it is a full double-entry accounting system built specifically for the jewelry trade. The Journals module is where that accounting foundation is most directly accessible, giving your accountant or finance manager the ability to post any manual entry between any two accounts with a full audit trail. From opening balances to year-end adjustments, every accounting requirement your jewelry business has is handled within the same system as your inventory, sales, and operations.
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