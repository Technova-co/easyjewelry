import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function PartyStatementPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Customer and Vendor Statement"
              description="The complete transaction history for any customer or vendor. Every sale, purchase, payment, metal transaction, and fixing shown with running metal and currency balances from opening to today."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                In a jewelry business, a customer or vendor relationship is not just a list of invoices. It is a running account that tracks every sale, every purchase, every payment, every metal transaction, every fixing, and every adjustment — and because jewelry trades in both metal and currency, that account has two running balances simultaneously. The Party Statement in EasyJewelry gives you exactly this — a complete chronological transaction history for any customer or vendor, showing gross metal debit and credit, pure metal debit and credit, running gross and pure metal balances, currency debit and credit, and running currency balance for every transaction from opening balance to today.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                Looking at the screenshot above, you can see a real party statement for a wholesale gold customer at Gold Center Branch. The statement starts with the opening balance and shows every transaction in date order — Metal Sales with the specific piece description and weight, Metal Fixings that converted metal balances to currency, Currency Transaction payments in and out, Metal Purchases, and Metal Transaction payments. Each row shows the gross metal debit and credit, the pure metal debit and credit, the running gross and pure metal balance, the currency debit and credit, and the running currency balance. At any point you can see exactly where the account stands in both units. This is the kind of dual-dimension party ledger that is only possible in a purpose-built jewelry ERP software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What the statement shows */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">What the Party Statement shows for every transaction</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Every row in the party statement captures the complete financial impact of that transaction on the party account in both metal and currency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Date and Transaction Type',
                  desc: 'The date of the transaction and its type — Metal Sales, Metal Purchase, Currency Transaction Pay, Currency Transaction Receive, Metal Transaction Pay, Metal Fixing, Layaway, or any other transaction type that affects the party account. The type tells you immediately what kind of event each row represents in the account history.',
                },
                {
                  title: 'ID and Reference',
                  desc: 'The transaction ID and reference field. The ID links to the original transaction document in EasyJewelry — clicking it takes you directly to the invoice, bill, or payment record. The reference field shows notes or descriptions entered at the time of the transaction, such as the item description for a metal sale.',
                },
                {
                  title: 'Gross Metal Debit and Credit',
                  desc: 'The gross weight movement on this transaction — how many grams of gross metal moved into or out of the party account. Debit means metal went out to the party. Credit means metal came in from the party. For metal sales, the gross weight sold is the debit. For metal purchases, the gross weight bought is the credit.',
                },
                {
                  title: 'Pure Metal Debit and Credit',
                  desc: 'The pure metal content equivalent of the transaction. Because different pieces have different purities, the pure weight figure is calculated separately from the gross weight and tracked independently. Both running balances are maintained simultaneously in your jewelry inventory management software.',
                },
                {
                  title: 'Gross and Pure Metal Balance',
                  desc: 'The running cumulative balance in both gross and pure metal weight after each transaction. These figures show exactly where the metal account stands at every point in time. A positive balance means the party owes you metal. A negative balance means you owe the party metal.',
                },
                {
                  title: 'Currency Debit, Credit, and Balance',
                  desc: 'The currency movement on this transaction and the running currency balance. Currency debits are amounts charged to the party. Currency credits are payments received. The running currency balance shows exactly what is owed in monetary terms at every point in the statement history.',
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

      {/* Transaction types */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">
              Transaction types that appear on a party statement
            </Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Every transaction type in EasyJewelry that affects a party account appears automatically on that party's statement. No manual ledger updates required.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { type: 'Metal Sales', desc: 'Every jewelry sale invoice raised against this party, with item description and gross and pure weight.' },
                { type: 'Metal Purchase', desc: 'Every purchase bill raised against this vendor, with weight and cost detail.' },
                { type: 'Metal Sales Return', desc: 'Customer returns credited back to the account with full metal weight reversal.' },
                { type: 'Metal Purchase Return', desc: 'Vendor returns with metal weight and currency credit to the party account.' },
                { type: 'Currency Transaction Pay', desc: 'Cash, cheque, or bank payments made by or to the party.' },
                { type: 'Currency Transaction Receive', desc: 'Payments received from the party against outstanding balances.' },
                { type: 'Metal Transaction Pay', desc: 'Metal delivered to the party as settlement against their account.' },
                { type: 'Metal Transaction Receive', desc: 'Metal received from the party as settlement against their account.' },
                { type: 'Metal Fixing', desc: 'Conversions between metal balance and currency balance at the current rate.' },
                { type: 'Layaway', desc: 'Layaway deposits and installment payments recorded against the party.' },
                { type: 'Metal Exchange', desc: 'Exchange transactions that affected the party metal account balance.' },
                { type: 'Opening Balance', desc: 'The starting position of the account when it was first set up in EasyJewelry.' },
              ].map((item) => (
                <div
                  key={item.type}
                  className="bg-blue rounded-20 border border-lineColor/50 p-4"
                >
                  <h3 className="text-sm font-semibold text-offWhite mb-1">
                    {item.type}
                  </h3>
                  <p className="text-xs text-paragraph leading-relaxed">
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
                  Why dual metal and currency party statements matter in jewelry
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    A standard party statement in generic accounting software shows you invoices, payments, and a running currency balance. For a jewelry business, this is inadequate. A wholesale gold customer might owe you 800 grams of pure gold from previous transactions while simultaneously holding a currency credit from an overpayment. A vendor might have delivered metal against a purchase order while also owing you money from a previous adjustment. The relationship exists in both dimensions at once.
                  </p>
                  <p>
                    EasyJewelry's Party Statement tracks both dimensions simultaneously for every transaction from the opening balance forward. The gross metal balance and pure metal balance columns run alongside the currency balance column, so the complete position of the account is always visible regardless of how complex the transaction history is.
                  </p>
                  <p>
                    For jewelry businesses engaged in active wholesale trade, this dual-dimension statement is the primary tool for managing trade account relationships. Before calling a customer to discuss settlement, you open their statement and see exactly what they owe in metal, what they owe in currency, what has been settled, and what remains outstanding — all from a single screen in your jewelry management software.
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
                      type: 'Jewelry Wholesalers',
                      desc: 'Manage trade customer accounts that run in both metal and currency. The party statement shows the complete dual-balance position for every trade relationship at any point in time.',
                    },
                    {
                      type: 'Jewelry Retailers',
                      desc: 'Review customer purchase history and outstanding balances before a follow-up call or visit. See every sale, every payment, and the current balance at a glance in your jewelry store software.',
                    },
                    {
                      type: 'Accounts Receivable Teams',
                      desc: 'Use the party statement as the primary collection tool. Filter by date range to see the current period activity and outstanding balance, and print or export the statement to share with the customer.',
                    },
                    {
                      type: 'Vendor Management',
                      desc: 'Review vendor account history before making a payment or raising a dispute. See every purchase, every return, every payment made, and the current outstanding balance in both metal and currency.',
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
                'Complete chronological transaction history',
                'Opening balance row',
                'Date and transaction type per row',
                'Transaction ID linked to source document',
                'Reference and description per row',
                'Gross metal debit and credit per row',
                'Pure metal debit and credit per row',
                'Running gross metal balance',
                'Running pure metal balance',
                'Currency debit and credit per row',
                'Running currency balance',
                'Date range filter',
                'Show and hide gross details toggle',
                'Export to CSV, Excel and PDF',
                'Print party statement',
                'Branch label per statement',
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
                  q: 'Can I view the statement for any customer or vendor?',
                  a: 'Yes. The Party Statement is available for every party in EasyJewelry — retail customers, wholesale trade customers, and vendors. Each has their own complete transaction history from the moment they were added to the system.',
                },
                {
                  q: 'Can I filter the statement by date range?',
                  a: 'Yes. The date range filter lets you view transactions for any specific period. The opening balance at the start of the selected period is shown first, followed by all transactions within the range, with a closing balance at the end.',
                },
                {
                  q: 'Can I click on a transaction to see the original document?',
                  a: 'Yes. The transaction ID on each row links directly to the original document in EasyJewelry — the sales invoice, purchase bill, payment record, or other source transaction.',
                },
                {
                  q: 'Can I print or export the statement to share with a customer?',
                  a: 'Yes. The party statement exports to CSV, Excel, and PDF and can be printed directly from the screen. Sharing a statement with a customer or vendor for account reconciliation is a common use of this feature.',
                },
                {
                  q: 'What does the Hide Gross Details toggle do?',
                  a: 'The Hide Gross Details button collapses the gross metal columns to simplify the view when you only need to see the currency balance and pure metal balance. This makes the statement easier to read and share when the gross weight detail is not needed.',
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
              The complete account history for every customer and vendor
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              In the jewelry trade, relationships with customers and vendors are built on trust and transparency. EasyJewelry's Party Statement gives you and your trade partners a complete and accurate record of every transaction between you — in both metal and currency — from the first transaction to today. Whether you are reviewing an account before a settlement call, sharing a statement with a trade customer for reconciliation, or investigating a discrepancy in a vendor account, the party statement in your jewelry ERP software gives you every answer you need in one place.
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