import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function MetalExchangesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Metal Exchange and Gold Conversion"
              description="Record metal leaving your inventory in one form and returning in another. Track gross weight out, pure weight out, gross weight in, and pure weight in for every exchange transaction."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                Metal exchange is one of the most jewelry-specific transactions that exists, and one of the most poorly handled by generic business software. In a jewelry business, metal does not always stay in the same form. A 22 karat gold necklace weighing 99 grams goes out to a refinery and comes back as 24 karat refined gold at a lower gross weight but a higher pure metal content. Old scrap jewelry collected from customers goes out for melting and returns as new raw gold. A batch of 18 karat pieces is sent for recasting and arrives back as 22 karat finished items. In every one of these scenarios, metal leaves your jewelry inventory system at one specification and returns at another, and the difference in gross weight, pure weight, karat, and making charges all need to be recorded accurately.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                EasyJewelry's Metal Exchanges module is built specifically for this. Each exchange record captures the items going out with their type set to From, and the items coming back in with their type set to To. Purity, quantity, gross weight, pure weight, unit making, and total making are recorded for each item on both sides of the exchange. The screen summarises the total gross weight in, total pure weight in, total gross weight out, and total pure weight out, giving you a complete picture of the metal movement and any weight difference between what left and what returned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">How metal exchange works in EasyJewelry</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Every metal exchange is recorded as a two-sided transaction. What goes out and what comes back are both captured in the same exchange document.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  The From side — metal going out
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  Each item leaving your jewelry inventory is added as a From line. You select the item, enter the purity, quantity, gross weight, and pure weight of the metal being sent out. Unit making and total making charges can also be recorded if applicable. The item is removed from your jewelry inventory management software at this specification.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  In the example of a 22 karat gold piece going for melting, the From line would show the item, 22K purity, the gross weight of the piece before melting, and the calculated pure gold content at 22 karat. This is the metal that leaves your stock.
                </p>
              </div>

              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  The To side — metal coming back
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  Each item returning to your jewelry inventory is added as a To line. The same fields are captured — item, purity, quantity, gross weight, and pure weight — but now at the new specification. The metal is added back into your jewelry inventory system at this new form.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  In the melting example, the To line would show the refined output — perhaps 24 karat gold at a lower gross weight but a higher pure metal percentage. The difference between the From pure weight and the To pure weight represents the refining loss or gain, which is visible in the exchange summary totals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real world examples */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">
              Real examples of metal exchange in jewelry businesses
            </Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Metal exchange covers a wide range of transactions that are specific to the jewelry trade. Here are the most common scenarios this module handles.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Melting and refining',
                  desc: 'A jewelry business sends 22 karat scrap or old pieces to a refinery. The metal goes out at 22 karat gross weight and comes back as refined 24 karat gold at a lower gross weight. The exchange records both sides, the weight difference is the refining loss, and your pure gold balance updates to reflect the actual refined return.',
                },
                {
                  title: 'Old gold trade-in',
                  desc: 'A customer brings in old 18 karat jewelry weighing 50 grams. Your store takes it in, records it as a From item in an exchange, and gives out new 22 karat pieces in return recorded as To items. The transaction documents exactly what came in and what went out at the counter, keeping your jewelry inventory system balanced.',
                },
                {
                  title: 'Recasting and reforming',
                  desc: 'A batch of 18 karat pieces is sent to a manufacturer for recasting into a different design at 22 karat. The original pieces leave the inventory as From items. The newly cast pieces return as To items at the new specification. Making charges on the recasting can be recorded per item on the To side.',
                },
                {
                  title: 'Karat conversion',
                  desc: 'Raw gold is sent to an alloy manufacturer at one karat and returned at a different karat after alloying. The From records the metal at its outgoing karat and weight. The To records it at the new karat and the adjusted weight after alloying. The pure gold content is tracked through both sides of the transaction.',
                },
                {
                  title: 'Karigar job work exchange',
                  desc: 'Raw gold is issued to a karigar craftsman for manufacturing. The From records the raw metal sent out. When the karigar returns the finished pieces, the To records each piece at its finished specification with purity, gross weight, and pure weight. The difference between the From pure weight and the To pure weight is the wastage from manufacturing.',
                },
                {
                  title: 'Stone setting exchange',
                  desc: 'Plain gold pieces are sent out for stone setting and return as finished diamond or gemstone-set jewelry. The From records the plain pieces. The To records the set pieces at their new description and making charge. The exchange captures the transformation from plain metal to finished jewelry in your jewelry ERP software.',
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
                  Why metal exchange is a critical feature for jewelry businesses
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    This is the feature that separates a genuine jewelry ERP software from generic inventory management tools. No standard retail or wholesale software has a concept of metal exchange. In generic systems, when metal changes form, you either delete the old stock record and create a new one, or you make manual adjustments that leave no audit trail. Neither approach is acceptable for a professional jewelry business.
                  </p>
                  <p>
                    The consequences of unrecorded metal exchanges accumulate quickly. Your pure gold balance becomes inaccurate because the weight that went out and the weight that came back are different. Your inventory shows items that no longer exist in that form. Financial reports based on inventory value are wrong. When it comes to stock audits, reconciling an inventory that has had unrecorded exchanges is extremely difficult.
                  </p>
                  <p>
                    EasyJewelry's Metal Exchange module solves all of this by treating every transformation of metal as a first-class transaction in your jewelry inventory management software. Every exchange has a reference number, a date, a memo, a full list of what went out and what came back, and a summary of the net weight difference. It is fully auditable, fully traceable, and fully integrated with your metal balance reports.
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
                      type: 'Jewelry Manufacturers',
                      desc: 'Record every karigar job work exchange, recasting, and stone setting operation. Your pure metal balance reflects exactly what you have at each stage of production.',
                    },
                    {
                      type: 'Gold and Silver Wholesalers',
                      desc: 'Track metal going to refineries and returning at a higher karat. Record karat conversions and alloying operations with full weight and purity detail on both sides.',
                    },
                    {
                      type: 'Jewelry Retailers',
                      desc: 'Handle old gold trade-ins at the counter with a proper exchange record. What the customer brings in and what they take away is documented in your jewelry store management software.',
                    },
                    {
                      type: 'Business Owners and Accountants',
                      desc: 'Metal exchange records feed directly into your daily report and metal balance reports. Refining losses, manufacturing wastage, and karat conversion differences are all visible and auditable.',
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
                'Auto-generated exchange number',
                'Optional memo per exchange',
                'From items — metal going out',
                'To items — metal coming back',
                'Item, description and purity per line',
                'Quantity, gross weight and pure weight per line',
                'Unit making and total making per line',
                'Total gross weight in and out summary',
                'Total pure weight in and out summary',
                'Net weight difference visible per exchange',
                'Full exchange history with search and filter',
                'Exchange records in daily report',
                'Metal balance updates on both sides',
                'Branch-level exchange tracking',
                'Audit trail for every metal transformation',
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
                  q: 'What is the difference between a From item and a To item in an exchange?',
                  a: 'A From item is metal leaving your jewelry inventory — going out for melting, refining, recasting, or trade-in. A To item is metal returning to your inventory after the transformation, at its new specification. Both sides are recorded in the same exchange document.',
                },
                {
                  q: 'How does the exchange affect my pure gold balance?',
                  a: 'The pure weight of every From item is deducted from your metal balance. The pure weight of every To item is added back. The difference between the two represents the gain or loss from the exchange, which is visible in the exchange summary and in your metal balance reports.',
                },
                {
                  q: 'Can I record a karigar job work exchange in this module?',
                  a: 'Yes. Raw metal sent to a karigar is recorded as From items. When the karigar returns the finished pieces, they are recorded as To items. The difference between the From pure weight and the To pure weight is the manufacturing wastage, which is tracked automatically.',
                },
                {
                  q: 'Does metal exchange appear in the daily report?',
                  a: 'Yes. All exchange transactions for the day appear in the Exchanges section of the daily report, showing the exchange number, outgoing gross weight, incoming gross weight, outgoing pure weight, and incoming pure weight.',
                },
                {
                  q: 'Can I exchange metal between different karats?',
                  a: 'Yes. This is one of the core use cases for the module. Metal going out at 22 karat and coming back at 24 karat after refining is a standard exchange record in EasyJewelry. Each side of the exchange records the karat and pure weight independently.',
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
              Track every transformation your metal goes through
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              Metal exchange is one of the most nuanced and business-critical transactions in the jewelry trade. When gold leaves your inventory at one karat and returns at another, when pieces go out for recasting and come back as finished goods, when old jewelry is traded in and new pieces go out — every one of these events needs to be documented with the same precision as a sale or purchase. EasyJewelry is one of the very few jewelry ERP systems that treats metal exchange as a proper module with full weight tracking, purity recording, and audit trail on both sides of every transaction.
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