import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function MetalPurchaseReturnPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Metal Purchase Return"
              description="Return purchased metal to vendors with complete documentation. Full karat, gross weight, pure weight, VAT reversal, and live rate recording handled automatically."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                Returning purchased metal to a vendor is a routine part of running a jewelry business. A consignment arrives with the wrong karat. A piece purchased from a supplier does not meet the quality expected. Raw metal bought from a trade vendor needs to be sent back due to a pricing dispute. In every one of these cases, the return needs to be documented with the same level of metal detail as the original purchase — item, purity, gross weight, pure weight, making charges, VAT, and the gold rate at the time of the return. EasyJewelry's Metal Purchase Return module handles all of this in a single structured document that mirrors the original purchase bill in precision and detail.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                The purchase return screen in EasyJewelry carries the same fields as a purchase bill. Item, description, purity, quantity, gross weight, pure weight, unit making, subtotal making, subtotal, VAT, and total are all captured per line item. The live gold rate per ounce and the exchange rate at the time of the return are both visible at the top of the screen and recorded on the document. The return supports both fixed and unfixed pricing, so whether the return is being valued at the original purchase price or at the current market rate, EasyJewelry handles it correctly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed vs unfixed */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">Fixed and unfixed purchase returns</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Just as metal purchases support both fixed and rate-based pricing, purchase returns in EasyJewelry support both return types to ensure the vendor credit is calculated on the correct basis.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Fixed purchase return
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  A fixed return is used when the original purchase was made at a fixed agreed price and the vendor credit is based on that same price. The return amount is predetermined and does not change with the current gold or silver market rate. This is common for retail jewelry returns to manufacturers where the original invoice price is used as the basis for the credit.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  Fixed purchase returns are straightforward to process in EasyJewelry. The item and its metal details are entered, the fixed price is applied, and the vendor credit is calculated automatically. The vendor account balance in your jewelry ERP software updates immediately on saving the return.
                </p>
              </div>

              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Unfixed purchase return
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  An unfixed return is used when the vendor credit is calculated based on the current live gold or silver rate at the time of the return rather than the original purchase price. This is standard practice in wholesale gold and silver trading where both parties agree that metal returned is valued at the market rate on the day it is sent back.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  EasyJewelry displays the current rate per ounce and exchange rate at the top of the return screen. For unfixed returns, the pure weight of the returned metal is multiplied by the current rate to arrive at the vendor credit. Both the rate used and the exchange rate are recorded on the return document, providing a clear and auditable record of how the credit was calculated.
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
                  Why purchase returns need proper documentation in jewelry
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    In generic business software, a purchase return is simply a reversal of a purchase order. The quantity goes back, the vendor balance adjusts, and the transaction is recorded. For jewelry businesses using a gold sales software or jewelry ERP system, a purchase return is far more involved.
                  </p>
                  <p>
                    When metal is returned to a vendor, your pure metal balance decreases by the pure weight of the returned items. Your gross stock decreases by the gross weight. If the original purchase was taxable, the VAT on that purchase needs to be reversed correctly. If the return is being processed at a different rate from the original purchase, the financial difference needs to be captured. All of this needs to happen simultaneously and accurately.
                  </p>
                  <p>
                    EasyJewelry's Metal Purchase Return module handles every one of these implications automatically. There is no separate metal accounting adjustment to make, no manual VAT correction, and no separate vendor account entry. Everything flows from the return document, keeping your jewelry inventory system and financial records accurate without any additional steps.
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
                      desc: 'Return pieces to manufacturers or suppliers that do not meet quality standards. The return is documented with full metal detail and the vendor balance adjusts automatically in your jewelry store management software.',
                    },
                    {
                      type: 'Gold and Silver Wholesalers',
                      desc: 'Process unfixed returns to trade vendors at the current market rate. The live gold rate is captured on the return document, giving both parties a transparent and auditable record of the transaction.',
                    },
                    {
                      type: 'Jewelry Importers',
                      desc: 'Return consignment stock that fails quality checks or does not match specifications. Multi-currency support means returns to international vendors are handled in the correct currency with the exchange rate recorded.',
                    },
                    {
                      type: 'Accountants and Finance Managers',
                      desc: 'Purchase returns appear in the daily report and all relevant financial accounts with VAT reversals calculated correctly, making month-end reconciliation straightforward.',
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
                'Auto-generated purchase return number',
                'Optional purchase return reference',
                'Fixed and unfixed return types',
                'Vendor and supplier selection',
                'Multi-currency return support',
                'Exchange rate recorded at time of return',
                'Live gold rate displayed on return screen',
                'Item, description and purity per line',
                'Gross weight and pure weight per line',
                'Unit making and subtotal making per line',
                'VAT calculation and reversal per line',
                'Rounding adjustment on return total',
                'Vendor account credit on return',
                'Metal removed from inventory automatically',
                'Return appears in daily report',
                'View and manage all past purchase returns',
                'Branch-level return tracking',
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
                  q: 'Does the returned metal come out of my inventory automatically?',
                  a: 'Yes. When a purchase return is confirmed, the gross weight and pure weight of the returned items are deducted from your metal inventory automatically. Your stock levels and metal balance update without any manual adjustment.',
                },
                {
                  q: 'What is the difference between a fixed and unfixed purchase return?',
                  a: 'A fixed return credits the vendor at the original purchase price regardless of the current gold rate. An unfixed return calculates the credit based on the live market rate at the time of the return. Both options are available from the same return screen in EasyJewelry.',
                },
                {
                  q: 'Is VAT reversed correctly on a purchase return?',
                  a: 'Yes. VAT is calculated on each line item of the return based on the tax treatment of the original purchase. The return document shows the VAT amount being reversed, which feeds directly into your tax reporting.',
                },
                {
                  q: 'Can I process a purchase return in a different currency?',
                  a: 'Yes. The return screen supports multi-currency transactions. The currency and exchange rate at the time of the return are both recorded on the document.',
                },
                {
                  q: 'Where do purchase returns appear in my reports?',
                  a: 'Purchase returns appear in the daily report under the Purchase Returns section, in the purchase return history, and in the relevant vendor accounts. They are tracked separately from purchases so your net purchase figures are always accurate.',
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
              Every vendor return documented and accounted for
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              A purchase return in a jewelry business is not just a logistics event — it is a metal accounting transaction that affects your inventory balance, your vendor account, and your VAT records simultaneously. EasyJewelry's Metal Purchase Return module handles all of these implications in one structured process, keeping your jewelry ERP system accurate and your vendor relationships clearly documented every time metal goes back.
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