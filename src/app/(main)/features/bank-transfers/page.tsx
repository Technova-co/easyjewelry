import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function BankTransfersPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Internal Bank Transfers"
              description="Record every movement of funds between your internal accounts. From cash on hand to your bank, from one bank account to another, every internal transfer is documented and reflected in your balances immediately."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                A jewelry business typically operates with multiple internal cash and bank accounts simultaneously. There is the cash on hand at the counter, the store petty cash, a credit card settlement account, and one or more bank accounts — often across different banks and branches. Money moves between these accounts constantly. End-of-day cash gets deposited into the bank. Petty cash gets topped up from the main account. A payment received into one bank needs to be moved to another for operational reasons. EasyJewelry's Bank Transfers module is where every one of these internal fund movements is recorded, keeping every account balance in your jewelry store management software accurate at all times.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                Looking at the screenshot above, you can see the From Bank dropdown showing every internal account configured in EasyJewelry — cash on hand, credit card, petty cash, named individual accounts, and actual bank accounts like Rak Bank Main Branch — each showing its current balance and the branch it belongs to. You select the account funds are moving from, select the account they are going to, enter the amount, add an optional memo, and save. Both account balances update immediately in your jewelry ERP software and the transfer appears in the daily report under Bank Transfers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What accounts you can transfer between */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">
              What accounts you can transfer between
            </Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              EasyJewelry gives you a complete picture of every internal account in your jewelry business. Every account is available in the From and To dropdowns on the bank transfer screen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Cash on hand',
                  desc: 'The physical cash sitting in your store at any point in time. When cash from the counter gets deposited into the bank, a bank transfer from Cash to your bank account records the movement and reduces the cash on hand balance accordingly in your jewelry store software.',
                },
                {
                  title: 'Petty cash',
                  desc: 'A separate petty cash balance for small day-to-day expenses. When the petty cash needs to be replenished, a transfer from the main cash or bank account tops it up. Every replenishment is documented with a transfer record.',
                },
                {
                  title: 'Credit card settlement account',
                  desc: 'Card payments collected at your jewelry POS settle into a credit card account before they are transferred to your main bank. Recording this movement keeps your card settlement balance clean and your bank balance accurate.',
                },
                {
                  title: 'Named personal or business accounts',
                  desc: 'As seen in the screenshot, EasyJewelry supports named accounts such as individual accounts linked to specific people or purposes within the business. These appear in the transfer dropdown alongside standard bank accounts.',
                },
                {
                  title: 'Bank accounts',
                  desc: 'All your actual bank accounts are available in the transfer screen, each showing its current balance and the branch it belongs to. Moving funds between accounts at different banks, or between accounts at the same bank, is recorded with the full transfer detail.',
                },
                {
                  title: 'Branch-specific accounts',
                  desc: 'Each account in EasyJewelry is associated with a branch. The dropdown shows both the account name and the branch it belongs to, making it clear exactly which location each account relates to when you are managing funds across multiple jewelry store branches.',
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
                  Why internal transfers need to be recorded in jewelry software
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    One of the most common reasons for inaccurate cash and bank balances in a jewelry store management software is unrecorded internal transfers. Money moves from the till to the bank. Cash is moved between locations. A payment received in one account is moved to another for disbursement. When these movements are not recorded, the accounts in your jewelry ERP software show balances that do not match reality, and reconciliation at month end becomes a painful exercise in tracing unrecorded movements.
                  </p>
                  <p>
                    EasyJewelry's Bank Transfers module makes recording these movements fast enough that staff will always do it rather than skip it. A transfer takes less than a minute to enter. The result is that every account balance in your jewelry inventory system reflects the actual position of your funds at all times, without any guesswork or manual reconciliation needed.
                  </p>
                  <p>
                    The memo field on each transfer is useful for adding context — noting that a transfer is a daily cash deposit, a petty cash top-up, or a specific payment disbursement. This context makes the bank transfer history useful not just for accounting but for operational review and audit purposes.
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
                      desc: 'Record daily cash deposits from the counter to the bank. Keep petty cash topped up with a proper transfer record. Every internal fund movement is documented in your jewelry store software.',
                    },
                    {
                      type: 'Gold and Silver Wholesalers',
                      desc: 'Move large amounts between bank accounts as part of trade settlements. Every transfer is documented with the from account, to account, amount, and date for full financial traceability.',
                    },
                    {
                      type: 'Multi-Branch Jewelry Businesses',
                      desc: 'Manage funds across multiple branch accounts. Each transfer shows the branch associated with both the sending and receiving account, keeping inter-branch fund movements clearly documented.',
                    },
                    {
                      type: 'Accountants and Finance Managers',
                      desc: 'Bank transfers appear in the daily report and in the full transfer history. Every internal fund movement has a reference number, date, memo, and both account names for clean bank reconciliation.',
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
                'Auto-generated transfer reference number',
                'Transfer date',
                'From bank or cash account selection',
                'To bank or cash account selection',
                'Current balance shown per account in dropdown',
                'Branch shown per account in dropdown',
                'Amount entry',
                'Optional memo per transfer',
                'Both account balances update on save',
                'Transfer appears in daily report',
                'Full transfer history with search and filter',
                'Export transfers to CSV, Excel and PDF',
                'Print transfer records',
                'Branch-level transfer tracking',
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
                  q: 'Do both account balances update when a transfer is saved?',
                  a: 'Yes. The From account balance decreases and the To account balance increases immediately when the transfer is saved in EasyJewelry. Both changes are reflected instantly in your jewelry store software.',
                },
                {
                  q: 'Can I transfer from cash on hand to a bank account?',
                  a: 'Yes. Cash on hand is available in the From dropdown alongside all your bank accounts. Moving cash from the counter to the bank is one of the most common uses of the Bank Transfers module in jewelry retail.',
                },
                {
                  q: 'Can I see the current balance of each account before making a transfer?',
                  a: 'Yes. The account dropdown shows the current balance and branch for every account, so you can see exactly how much is in each account before deciding the transfer amount.',
                },
                {
                  q: 'Where do bank transfers appear in my reports?',
                  a: 'Bank transfers appear in the Bank Transfer section of the daily report and in the full transfer history. Each transfer has a reference number, date, from account, to account, amount, and memo for complete audit documentation.',
                },
                {
                  q: 'Can I transfer between accounts at different branches?',
                  a: 'Yes. The account dropdown shows accounts from all branches. You can transfer between accounts at the same branch or between accounts belonging to different branch locations.',
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
              Keep every account balance accurate with every fund movement recorded
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              Accurate financial reporting in a jewelry business depends on every internal fund movement being recorded, not just customer payments and vendor settlements. EasyJewelry's Bank Transfers module closes the gap by giving every cash deposit, account top-up, and inter-bank transfer its own properly documented record. Your cash and bank balances in your jewelry ERP software always reflect reality, and your daily report always shows the complete picture of every movement in and out of every account.
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