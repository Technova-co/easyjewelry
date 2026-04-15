import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function MetalStocktakingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Jewelry Stock Count and Audit"
              description="Conduct a full physical stock count by scanning barcode tags. EasyJewelry instantly shows you what is found, what is missing, and the exact weight discrepancy in grams of gross weight and pure weight."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                A stock count in a jewelry business is unlike any other retail audit. You are not just counting units — you are reconciling gross weight, pure weight, and karat across hundreds or thousands of individual pieces, each with its own barcode, location, and metal specification. EasyJewelry's Metal Stocktakings module turns what would otherwise be a multi-day manual exercise into a fast, accurate barcode scan operation that gives you found and missing results in real time as you scan.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                From the screenshot above you can see exactly how powerful this module is. As barcodes are scanned, each piece is matched against the inventory record in your jewelry inventory management software and appears in the found list with its barcode, item description, gross weight, and storage location. On the right side of the screen, the items that have not yet been scanned appear in the missing list in red. At the bottom, the summary shows total available quantity, total available gross weight, and total available pure weight on the found side, and total missing quantity, total missing gross weight, and total missing pure weight on the missing side. The moment the scan is complete, you have a precise weight-level reconciliation of your entire jewelry inventory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">How jewelry stock counting works in EasyJewelry</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              The stocktaking process is designed to be fast enough to run during trading hours and accurate enough to satisfy external auditors.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Start a new stocktaking',
                  desc: 'Create a new stocktaking record with an auto-generated reference number and the current date. The stocktaking is associated with your branch automatically, so the system knows exactly which inventory to reconcile the scan against in your jewelry inventory system.',
                },
                {
                  step: '02',
                  title: 'Scan each barcode as you count',
                  desc: 'Use a Zebra barcode scanner or any compatible scanner to scan each jewelry piece as you physically count it. Each scan is matched against the barcode register in EasyJewelry. Matched items appear in the found list immediately with their item description, gross weight, and location.',
                },
                {
                  step: '03',
                  title: 'Review found and missing in real time',
                  desc: 'As you scan, the missing list updates in real time showing every item that is in your jewelry inventory management software but has not yet been scanned. The weight summary at the bottom shows the running total of found and missing gross weight and pure weight throughout the count.',
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

      {/* Found and missing */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">Found and missing — two sides of every stock count</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              The stocktaking result is split into two clear sections that give you an immediate and precise picture of your jewelry inventory position.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Found items
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  Every barcode that is scanned and matched against an available item in your jewelry inventory system appears in the found section. Each row shows the barcode number, item description, gross weight, and the storage location recorded in EasyJewelry. The totals at the bottom show the combined available quantity, available gross weight, and available pure weight of all found items.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  The found section is your confirmation that these specific pieces are physically present, correctly tagged, and in the right location. Any piece in the found list that shows a different location from where it was physically scanned indicates a location discrepancy that can be corrected through the Inventory Locations module.
                </p>
              </div>

              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Missing items
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  Every item in your jewelry inventory management software that is marked as available but has not been scanned during the stocktaking appears in the missing section, highlighted in red. Each row shows the barcode number, item description, gross weight, and last known location. The totals show the combined missing quantity, missing gross weight, and missing pure weight.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  The missing section is where your stocktaking delivers its most critical value. In the screenshot above, you can see 2,206 missing pieces totalling over 33,000 grams of gross weight and over 30,000 grams of pure weight. These are items that the jewelry inventory system expects to be present but were not scanned. Each one needs to be investigated — found in an uncounted area, confirmed as sold without a record, or identified as a genuine loss.
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
                  Why jewelry stock audits are different from standard retail counts
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    In generic retail, a stock count tells you how many units of each product you have. In jewelry, a stock count needs to tell you how many grams of gold at each karat you have. A count that shows 500 pieces means very little without the gross weight and pure weight breakdown, because a missing 100-gram piece has a completely different financial implication from a missing 5-gram piece.
                  </p>
                  <p>
                    EasyJewelry's Metal Stocktakings module reconciles at the weight level, not just the unit level. The missing gross weight and missing pure weight totals give you an immediate financial picture of any discrepancy. At the current gold rate, you can instantly calculate the monetary value of any missing metal identified during the count.
                  </p>
                  <p>
                    For jewelry businesses with insurance requirements, regulatory obligations, or investor reporting, a weight-level stock count conducted through a jewelry ERP system provides the kind of documented audit evidence that a manual count or a generic inventory system cannot produce. Every stocktaking has a reference number, a date, a branch, a complete list of found and missing items, and full weight summaries that can be exported and shared.
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
                      desc: 'Run regular stock counts without closing the store. Scan pieces as you go, see missing items in real time, and have a complete count record stored in your jewelry store management software by the end of the session.',
                    },
                    {
                      type: 'Gold and Diamond Wholesalers',
                      desc: 'Conduct weight-level stock audits that tell you exactly how many grams of pure gold are accounted for and how much is missing. Essential for businesses that report metal positions to investors or partners.',
                    },
                    {
                      type: 'Multi-Branch Jewelry Businesses',
                      desc: 'Each branch runs its own stocktaking independently. The results are stored per branch in your jewelry inventory management software, allowing management to review the audit results for every location from the central dashboard.',
                    },
                    {
                      type: 'Business Owners and Auditors',
                      desc: 'Stocktaking records with full weight summaries and item-level found and missing lists provide the documented audit evidence needed for insurance, financing, or regulatory purposes.',
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
                'Auto-generated stocktaking reference number',
                'Date and branch per stocktaking',
                'Barcode scan to add found items',
                'Real-time found list with item detail',
                'Real-time missing list with item detail',
                'Barcode, description and gross weight per item',
                'Storage location per found item',
                'Total available quantity summary',
                'Total available gross weight summary',
                'Total available pure weight summary',
                'Total missing quantity summary',
                'Total missing gross weight summary',
                'Total missing pure weight summary',
                'Missing items highlighted in red',
                'Full stocktaking history per branch',
                'Export stocktaking results to CSV, Excel and PDF',
                'Print stocktaking report',
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
                  q: 'Can I conduct a stock count without closing my store?',
                  a: 'Yes. The stocktaking process in EasyJewelry does not require you to pause operations. You can scan pieces as you go through the store and the found and missing lists update in real time throughout the count.',
                },
                {
                  q: 'What happens to items that appear in the missing list?',
                  a: 'Missing items are pieces that your jewelry inventory management software expects to be present but were not scanned. Each missing item needs to be investigated — it may be in an area that has not been counted yet, may have been moved without a transfer record, or may represent a genuine discrepancy.',
                },
                {
                  q: 'Does the stock count show weight or just piece count?',
                  a: 'Both. The stocktaking summary shows total quantity, total gross weight, and total pure weight for both found and missing items. This gives you a complete weight-level reconciliation, not just a unit count.',
                },
                {
                  q: 'Can I run a stocktaking for one branch at a time?',
                  a: 'Yes. Each stocktaking is associated with a specific branch. Staff at each location run their own count and the results are stored per branch in EasyJewelry.',
                },
                {
                  q: 'Can I export the stocktaking results?',
                  a: 'Yes. Stocktaking results can be exported to CSV, Excel, or PDF and printed directly from the screen. The export includes the full found and missing item lists with all weight detail, making it suitable for insurance, audit, and management reporting purposes.',
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
              Know exactly what you have and what is missing, down to the gram
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              A jewelry stock count that only tells you how many pieces you have is not enough. You need to know how many grams of pure gold are accounted for and how much is missing. EasyJewelry's Metal Stocktakings module gives you that answer in real time as you scan, with a complete found and missing report at weight level that no generic inventory system can produce. For any jewelry business that takes its metal position seriously, this is one of the most important features in the system.
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