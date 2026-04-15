import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function MetalFixingPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Metal Fixing"
              description="Convert a customer or vendor balance between metal weight and currency. When someone owes you gold but wants to settle in cash, or owes you cash but wants to settle in metal, Metal Fixing handles the conversion in your jewelry management software."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                In the gold and silver trade, account balances do not always exist purely in currency. A trade customer might owe you 1,024 grams of 22 karat gold from a previous transaction. A vendor might have a credit in your books recorded in pure metal weight rather than cash. When it comes time to settle, both parties need the flexibility to convert between metal and currency based on the current gold rate. EasyJewelry's Metal Fixing module is built specifically for this — converting a party account balance from metal to currency or from currency to metal, recorded at the current rate, with a full fixing record stored in your jewelry ERP software.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                The fixing screen is straightforward. You select the type — Buy, which means currency converting to metal, or Sell, which means metal converting to currency. You select the party, the currency, and the exchange rate. You enter the pure weight of metal and the equivalent cash amount. At the current rate per ounce shown at the top of the screen, the conversion is calculated and the fixing is saved. The party account updates to reflect the new balance in the chosen unit, and the fixing reference is stored for audit and reporting purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two types */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">Two types of metal fixing</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              EasyJewelry supports both directions of conversion between metal weight and currency, covering every scenario that arises in gold and silver trade businesses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Buy — Currency to Metal
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  A Buy fixing converts a currency balance into a metal weight balance. This is used when a customer or vendor who holds a cash credit in their account wants that credit converted to metal at the current gold rate. The cash amount is entered, the pure weight equivalent at today's rate is calculated, and the party account balance moves from currency to metal.
                </p>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  For example, a trade customer has a credit of 5,000 AED in their account from a previous overpayment. They want that credit converted to gold at today's rate so it can be applied against a future metal purchase. A Buy fixing at the current rate converts the 5,000 AED to its equivalent pure weight and records that as the new balance in the customer account within your jewelry store management software.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  This type of fixing is particularly common in markets where trade customers and vendors prefer to hold balances in metal rather than currency, as metal holds value more predictably against inflation and currency fluctuation.
                </p>
              </div>

              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Sell — Metal to Currency
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  A Sell fixing converts a metal weight balance into a currency amount. This is used when a customer or vendor who owes you metal, or holds a metal credit in their account, wants to convert that metal obligation into a cash equivalent and settle in currency instead.
                </p>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  For example, a vendor owes your business 1,024 grams of 22 karat gold from a previous transaction. At settlement, they want to pay in cash instead of delivering the metal. A Sell fixing converts the pure weight owed at the current gold rate to its currency equivalent. The vendor account balance moves from a metal obligation to a cash payable, which they then settle with a bank transfer or cheque recorded through your jewelry ERP software in the usual way.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  This is one of the most common settlement scenarios in wholesale gold trading, where both metal and currency obligations exist simultaneously and the final settlement method is agreed on the day based on the current market rate.
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
                  Why metal fixing is unique to jewelry and gold trade businesses
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    This is a feature that does not exist in any generic accounting software, any standard ERP system, or any retail management platform. It exists only in software built specifically for the precious metal trade, because the concept of a party account holding a balance in grams of gold rather than in currency simply does not exist outside the jewelry and bullion industry.
                  </p>
                  <p>
                    In the gold trade, especially in wholesale and manufacturing operations, it is completely normal for a customer to owe you metal rather than money. They took delivery of a service or product, and the agreed settlement is a future delivery of gold at a specified weight and karat. When circumstances change and they want to convert that obligation to cash, you need a tool that can perform that conversion at the current market rate and update their account accordingly in your jewelry management software.
                  </p>
                  <p>
                    Without Metal Fixing, businesses handle this through manual journal entries or workarounds that leave no proper audit trail. The conversion is done on a calculator, the result is entered somewhere in the accounts, and the original metal obligation disappears without a proper record of how it was settled. EasyJewelry's Metal Fixing module gives this transaction the same structured, documented treatment as any other transaction in your jewelry ERP system.
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
                      desc: 'Manage trade customer and vendor accounts that carry balances in both metal and currency. Convert between the two at the current market rate when settlement day arrives.',
                    },
                    {
                      type: 'Jewelry Manufacturers',
                      desc: 'Karigar and supplier accounts often carry metal obligations. When a supplier wants to settle a metal balance in cash, Metal Fixing converts it at the current rate and updates the account in your jewelry inventory management software.',
                    },
                    {
                      type: 'Bullion and Precious Metal Traders',
                      desc: 'Party accounts that hold pure weight balances need to be convertible to currency when market conditions make cash settlement preferable. Metal Fixing records the conversion at the exact rate used, creating a clear audit trail.',
                    },
                    {
                      type: 'Accountants and Finance Managers',
                      desc: 'Every fixing is recorded with a reference number, date, party, rate, pure weight, and currency amount. The full fixing history is available for audit, reconciliation, and financial reporting.',
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
                'Buy fixing — currency to metal conversion',
                'Sell fixing — metal to currency conversion',
                'Party and customer selection',
                'Currency and exchange rate per fixing',
                'Pure weight entry',
                'Cash amount entry',
                'Live gold rate per ounce on screen',
                'Auto-generated fixing reference number',
                'Optional fixing reference and memo',
                'Party account balance update on save',
                'Full fixing history with search and filter',
                'Fixing records in financial reports',
                'Multi-currency fixing support',
                'Branch-level fixing tracking',
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
                  q: 'What is the difference between a Buy and Sell fixing?',
                  a: 'A Buy fixing converts a currency balance to a metal weight balance — currency coming in, metal going into the account. A Sell fixing converts a metal weight balance to a currency amount — metal obligation converted to a cash payable. Both are recorded at the current gold rate.',
                },
                {
                  q: 'What rate is used for the conversion?',
                  a: 'The current gold rate per ounce is displayed at the top of the Metal Fixing screen in EasyJewelry. The rate at the time of the fixing is recorded on the document, providing a clear and auditable record of the basis for the conversion.',
                },
                {
                  q: 'Does the party account update automatically after a fixing?',
                  a: 'Yes. When a fixing is saved, the party account balance in EasyJewelry updates immediately to reflect the conversion. A metal obligation becomes a currency payable, or a currency credit becomes a metal balance, depending on the fixing type.',
                },
                {
                  q: 'Can I record a fixing in a foreign currency?',
                  a: 'Yes. The fixing screen supports multi-currency transactions with exchange rate recording. The currency and exchange rate at the time of the fixing are both captured on the document.',
                },
                {
                  q: 'Where do fixings appear in my reports?',
                  a: 'Metal fixings appear in the financial reports and account transaction history for the relevant party. Every fixing has a reference number and date, making it easy to locate and audit any specific conversion.',
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
              Settle metal and currency obligations at the current rate
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              In the gold and silver trade, the line between metal balances and currency balances is crossed regularly. A customer who owes you gold wants to pay cash. A vendor who holds a cash credit wants it converted to metal. EasyJewelry's Metal Fixing module handles these conversions properly — at the current market rate, with a full document record, and with automatic account balance updates. It is one of the features that makes EasyJewelry a genuine jewelry ERP software rather than a generic business tool adapted for the jewelry trade.
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