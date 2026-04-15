import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function MetalTransactionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Metal Transactions"
              description="Record metal payments and receipts directly against customer and vendor accounts. Pay out gold or silver to a party, or receive metal from them, with full weight and rate detail captured in your jewelry management software."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                In the gold and silver trade, settling accounts in metal rather than cash is common practice. A vendor is owed payment and you settle by delivering a specific weight of gold. A customer has an outstanding balance and pays it by bringing in silver. A trade partner receives a metal payment against a previous invoice. These transactions are not purchases or sales — they are metal settlements between parties, and they need to be recorded as such in your jewelry ERP software with the correct item, weight, purity, and rate at the time of the transaction.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                EasyJewelry's Metal Transactions module handles exactly this. Each transaction is classified as either Pay — metal going out to a party — or Receive — metal coming in from a party. The item, purity, quantity, gross weight, and pure weight are captured per transaction. The current rate per ounce and the rate per gram are both displayed at the top of the screen alongside the exchange rate, ensuring the monetary equivalent of the metal being transacted is clear and recorded at the correct market values. Every metal transaction is stored against the party account and appears in the relevant financial reports in your jewelry store management software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two types */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">Pay and Receive — two types of metal transaction</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Every metal transaction in EasyJewelry is one of two types, covering both directions of metal movement between your business and a party.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Pay — metal going out to a party
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  A Pay transaction records metal being delivered from your business to a customer or vendor as settlement. The party is selected, the item and metal details are entered, and the transaction is saved. The party account in your jewelry ERP software is credited by the value of the metal delivered at the current rate, reducing their outstanding balance.
                </p>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  This is used when you are settling a payable to a vendor in metal rather than cash, or when a trade customer has purchased metal and you are delivering it against their account. The transaction records the item, purity, gross weight, and pure weight of the metal delivered, along with the rate at which it was valued.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  Pay transactions reduce your metal inventory by the gross weight and pure weight of the items transacted, keeping your metal balance in your jewelry inventory management software accurate after every outbound metal settlement.
                </p>
              </div>

              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Receive — metal coming in from a party
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  A Receive transaction records metal being delivered to your business from a customer or vendor as settlement. The party is selected, the metal details are entered, and the transaction is saved. The party account is debited by the value of the metal received at the current rate, reducing their outstanding receivable balance.
                </p>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  This is used when a customer settles an outstanding balance by delivering metal rather than paying cash, or when a vendor delivers metal against a previous arrangement. The transaction captures the full metal specification — item, purity, quantity, gross weight, and pure weight — along with the rate and exchange rate at the time of receipt.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  Receive transactions increase your metal inventory by the gross weight and pure weight of the items received, updating your metal balance in your jewelry store software immediately on saving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rate detail */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">
              Rate transparency on every metal transaction
            </Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              EasyJewelry displays the current gold rate per ounce, the rate per gram, and the exchange rate at the top of the metal transaction screen. All three are recorded on every transaction document.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Rate per ounce',
                  desc: 'The current international gold or silver price per troy ounce in the primary currency. This is the market reference rate that both parties understand and use as the basis for valuing the metal being transacted.',
                },
                {
                  title: 'Rate per gram',
                  desc: 'The per-gram equivalent of the rate per ounce, displayed directly on the transaction screen. This is the figure most commonly used in day-to-day jewelry trade calculations and is particularly relevant for wholesale metal transactions where quantities are measured in grams.',
                },
                {
                  title: 'Exchange rate',
                  desc: 'When a transaction involves a foreign currency, the exchange rate at the time of the transaction is recorded on the document. This ensures the monetary equivalent of the metal is calculated correctly across currencies and provides a clear record for financial reconciliation.',
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
                  Why metal transactions need their own module in jewelry software
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    In generic accounting software, settling a payable means recording a cash payment. In the gold and silver trade, settling a payable often means delivering a specific weight of metal. These are fundamentally different transactions and they cannot be handled by the same tool.
                  </p>
                  <p>
                    A cash payment reduces your bank balance and credits the vendor account. A metal payment reduces your metal inventory and credits the vendor account. The financial value of the metal needs to be calculated at the current rate, the weight needs to be deducted from your metal balance, the purity needs to be recorded for metal accounting purposes, and the transaction needs to appear in both the party account history and the metal transaction reports in your jewelry inventory system.
                  </p>
                  <p>
                    EasyJewelry's Metal Transactions module handles every one of these requirements as a standard part of the transaction record. There is no manual journal entry required, no separate metal adjustment needed, and no reconciliation work to do after the fact. The transaction records the metal movement and the account impact simultaneously, keeping your jewelry ERP software accurate without any additional steps.
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
                      type: 'Gold and Silver Wholesalers',
                      desc: 'Settle vendor payables and customer receivables in metal at the current rate. Every metal settlement is documented with weight, purity, and rate detail in your jewelry ERP software.',
                    },
                    {
                      type: 'Jewelry Manufacturers',
                      desc: 'Receive metal from customers for manufacturing and record the receipt against their account. Pay metal to karigar suppliers and record the delivery with full weight detail.',
                    },
                    {
                      type: 'Bullion and Precious Metal Traders',
                      desc: 'Record all metal payment and receipt transactions against party accounts at the current rate per gram. The rate and exchange rate are captured on every transaction for full audit traceability.',
                    },
                    {
                      type: 'Accountants and Finance Managers',
                      desc: 'Metal transactions appear in the daily report and all relevant party account histories. The monetary value at the transaction rate is recorded for financial reporting and reconciliation.',
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
                'Pay transaction — metal out to a party',
                'Receive transaction — metal in from a party',
                'Party and customer selection',
                'Item and purity per transaction',
                'Quantity, gross weight and pure weight',
                'Rate per ounce displayed on screen',
                'Rate per gram displayed on screen',
                'Exchange rate per transaction',
                'Multi-currency support',
                'Transaction reference number',
                'Optional transaction reference and memo',
                'Party account update on save',
                'Metal inventory update on save',
                'Transaction appears in daily report',
                'Full metal transaction history',
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
                  q: 'What is the difference between a Pay and Receive metal transaction?',
                  a: 'A Pay transaction records metal leaving your inventory and being delivered to a customer or vendor as settlement. A Receive transaction records metal coming into your inventory from a customer or vendor. Both update the party account and the metal inventory simultaneously.',
                },
                {
                  q: 'Does the metal inventory update when a transaction is saved?',
                  a: 'Yes. A Pay transaction reduces your metal inventory by the gross weight and pure weight of the items transacted. A Receive transaction increases it. Both updates happen automatically when the transaction is saved in EasyJewelry.',
                },
                {
                  q: 'What rate is used to value the metal in a transaction?',
                  a: 'The current rate per ounce and rate per gram are displayed at the top of the transaction screen. These rates are recorded on the transaction document at the time of saving, providing a clear record of the market value used for the settlement.',
                },
                {
                  q: 'Where do metal transactions appear in my reports?',
                  a: 'Metal transactions appear in the Metal Transactions section of the daily report, in the party account transaction history, and in the metal transaction reports. They are visible alongside all other financial activity in your jewelry ERP software.',
                },
                {
                  q: 'Can I record a metal transaction in a foreign currency?',
                  a: 'Yes. The exchange rate field on the transaction screen supports multi-currency metal transactions. The exchange rate at the time of the transaction is recorded on the document for financial reconciliation.',
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
              Settle accounts in metal the way the jewelry trade actually works
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              In the gold and silver trade, paying and receiving in metal is not an exception — it is routine. EasyJewelry's Metal Transactions module gives this type of settlement the same structured, documented treatment as any cash payment in your jewelry store management software. Every gram that moves between your business and a party is recorded with its weight, purity, rate, and monetary equivalent, keeping your metal balance and your party accounts accurate at all times.
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