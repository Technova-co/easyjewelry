import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function CurrencyTransactionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Currency Transactions"
              description="Record payments and receipts against customer and vendor accounts in any currency and through any payment method. Cash, cheque, credit card, Zelle, and bank wire all handled in one place."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                Every jewelry business receives and makes payments constantly. A customer pays off an outstanding balance. A vendor receives payment for a purchase bill. A trade partner sends a wire transfer. A walk-in customer pays by card. Each of these currency movements needs to be recorded against the right party account in your jewelry store management software, with the payment method, bank, amount, and any relevant reference documented accurately. EasyJewelry's Currency Transactions module is where all of this happens, giving you a single place to record every cash payment and receipt across all your customer and vendor accounts.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                The transaction screen is clean and purpose-built for the jewelry trade. You select the transaction type, the party, and the currency. The payment method dropdown gives you Cash, Credit and Debit Card, Zelle, Cheque, and Bank Wire as options. For cheque payments, the cheque date and cheque number are captured. For bank payments, the bank account is selected. The amount is entered and the transaction is saved against the party account. The balance updates immediately in your jewelry ERP software and the transaction appears in the daily report under the received or paid section depending on the direction of the payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment methods */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">Payment methods supported</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              EasyJewelry supports every payment method that jewelry businesses encounter in daily operations, covering both retail counter payments and trade settlements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Cash',
                  desc: 'The most common payment method in jewelry retail. Cash receipts and payments are recorded against the party account and update your store cash balance in EasyJewelry immediately. Every cash transaction is visible in the daily report.',
                },
                {
                  title: 'Credit and Debit Card',
                  desc: 'Card payments from retail customers are recorded as currency transactions against the customer account. The bank account the card payment settles into is selected at the time of recording, keeping your bank reconciliation accurate in your jewelry store software.',
                },
                {
                  title: 'Zelle',
                  desc: 'Zelle payments are increasingly common for jewelry trade settlements in the US market. EasyJewelry supports Zelle as a standalone payment method, allowing you to record Zelle receipts and payments with the transaction reference and bank account clearly documented.',
                },
                {
                  title: 'Cheque',
                  desc: 'Cheque payments are recorded with the cheque date and cheque number in addition to the standard transaction fields. This is essential for jewelry businesses that deal in post-dated cheques from trade customers, where the cheque date determines when the payment is expected to clear.',
                },
                {
                  title: 'Bank Wire',
                  desc: 'Bank wire transfers are common for large jewelry trade settlements. The bank account the wire is received into or sent from is selected on the transaction, linking the payment directly to the correct bank balance in your jewelry ERP software.',
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
                  Why currency transactions matter for jewelry businesses
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    In a jewelry business, customer and vendor balances accumulate quickly. A retail customer buys on credit and makes partial payments over several visits. A wholesale trade customer has a running account with outstanding invoices and periodic settlements. A vendor delivers stock regularly and receives payment in batches. Without a dedicated currency transaction module in your jewelry store management software, tracking these balances means manual ledger entries, spreadsheets, or relying on memory.
                  </p>
                  <p>
                    EasyJewelry's Currency Transactions module gives every payment and receipt its own properly documented record. The party account is updated instantly on saving. The daily report shows every payment received and every payment made that day. The party transaction history shows the complete payment record for any customer or vendor at any time.
                  </p>
                  <p>
                    For jewelry businesses operating in the US market, the inclusion of Zelle as a payment method reflects how trade payments actually happen in this industry. Large jewelry transactions frequently settle via Zelle rather than traditional bank wire, and EasyJewelry's jewelry store software accommodates this natively without workarounds.
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
                      desc: 'Record every customer payment at the counter — cash, card, or cheque — against the customer account. Outstanding balances are always accurate and visible in your jewelry inventory system.',
                    },
                    {
                      type: 'Gold and Silver Wholesalers',
                      desc: 'Record trade customer payments and vendor settlements across all payment methods. Wire transfers, cheques, and Zelle payments all post to the correct party account and bank balance.',
                    },
                    {
                      type: 'Multi-Branch Jewelry Businesses',
                      desc: 'Currency transactions are recorded at branch level. Each branch manages its own receipts and payments, with consolidated account balances visible to management across all locations.',
                    },
                    {
                      type: 'Accountants and Finance Managers',
                      desc: 'Every payment and receipt is documented with method, bank, amount, and reference. The daily report and party account histories provide all the data needed for bank reconciliation and financial reporting.',
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
                'Pay and Receive transaction types',
                'Party and customer selection',
                'Multi-currency support',
                'Cash payment method',
                'Credit and Debit Card payment method',
                'Zelle payment method',
                'Cheque payment with date and number',
                'Bank Wire payment method',
                'Bank account selection per transaction',
                'Amount entry with currency',
                'Optional transaction reference and memo',
                'Auto-generated transaction number',
                'Party account update on save',
                'Transaction appears in daily report',
                'Full currency transaction history',
                'Branch-level transaction tracking',
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
                  q: 'Does the party account update automatically when a transaction is saved?',
                  a: 'Yes. The party account balance in EasyJewelry updates immediately when a currency transaction is saved. A received payment reduces the customer outstanding balance. A paid transaction reduces the vendor payable balance.',
                },
                {
                  q: 'Can I record cheque payments with a future date?',
                  a: 'Yes. The cheque date field on the currency transaction allows you to record the date on the cheque, which may be a future date for post-dated cheques. This is a common practice in jewelry trade settlements and EasyJewelry handles it correctly.',
                },
                {
                  q: 'Where do currency transactions appear in my reports?',
                  a: 'Received payments appear in the Received section of the daily report. Paid transactions appear in the Paid section. Both are also visible in the party account transaction history and in the relevant financial reports in your jewelry ERP software.',
                },
                {
                  q: 'Can I record a payment in a foreign currency?',
                  a: 'Yes. The currency field on the transaction supports any currency configured in your EasyJewelry account. Multi-currency payments are recorded at the exchange rate set for that currency.',
                },
                {
                  q: 'Is Zelle supported as a payment method?',
                  a: 'Yes. Zelle is available as a standalone payment method in EasyJewelry, alongside Cash, Credit and Debit Card, Cheque, and Bank Wire. This reflects how payments actually work in the US jewelry market.',
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
              Every payment your jewelry business makes or receives, properly recorded
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              Accurate party accounts depend on every payment being recorded correctly, every time. EasyJewelry's Currency Transactions module makes this fast and consistent regardless of how the payment was made. Cash at the counter, a wire from a trade customer, a post-dated cheque from a vendor, or a Zelle transfer — every method is supported, every transaction updates the right account, and every payment is visible in your daily report and party history.
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