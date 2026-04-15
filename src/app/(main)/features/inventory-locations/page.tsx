import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function InventoryLocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Jewelry Inventory Location Tracking"
              description="Know exactly where every piece in your jewelry store is located at any time. Assign storage locations to barcode-tagged items, move them instantly, and print location tags so your team always knows where to find and return each piece."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                In a jewelry store, knowing that a piece is in stock is only half the answer. The other half is knowing exactly where it is — which display case, which tray, which safe, which stockroom shelf. When a customer asks to see a specific piece and your staff cannot locate it quickly, that is a lost sale opportunity. When a piece comes back from a repair and nobody knows where to put it, it ends up in the wrong place and gets counted as missing at the next stock audit. EasyJewelry's Inventory Locations module solves this by giving every physical storage location in your jewelry business a code, and linking every barcode-tagged item to its exact location within your jewelry inventory management software.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                From the screenshots above you can see two key functions of this module. The Add Location screen lets you create a new location with a code, initial weight, and description. The Change Location screen lets you scan one or more barcode-tagged items and move them to a new location in a single operation, with a full history of every location that item has ever been assigned to accessible via the History button. Location tags can be printed from the system and attached to the physical location, so when a piece is returned to the display after a sale attempt or a customer viewing, your staff knows exactly where it belongs without guessing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">How inventory location tracking works</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              The location system in EasyJewelry is built around three simple operations that together give you complete spatial control over your jewelry inventory.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Create your locations',
                  desc: 'Add every physical storage area in your jewelry store as a location in EasyJewelry. Each location gets a unique code, an optional initial weight, and a description. Locations can represent display cases, safes, stockroom shelves, trays, drawers, or any other storage area your business uses.',
                },
                {
                  step: '02',
                  title: 'Assign items to locations',
                  desc: 'When a barcode-tagged piece is purchased and enters your jewelry inventory system, it is assigned to a location at the point of entry. From that moment, the system knows exactly where that piece is stored. The location is part of the item record and is visible whenever the barcode is scanned.',
                },
                {
                  step: '03',
                  title: 'Change and track locations',
                  desc: 'When a piece moves from one location to another, scan the barcode and select the new location. The change is recorded instantly in your jewelry store management software with a full history of every location the item has been assigned to. Print a location tag for the destination so staff always know where to return the piece.',
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

      {/* Location history */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">
              Complete location history for every item
            </Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Every location change in EasyJewelry is recorded and stored against the item. The History button on the Change Location screen gives you the full trail of every location that item has ever been assigned to, with the date of each change.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Why location history matters in a jewelry store
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  High-value jewelry pieces are handled frequently. Customers pick them up, try them on, put them back. Staff move them between displays for cleaning or rearranging. Pieces go to the back for repair assessments and come back to the floor. Each one of these movements is a moment where a piece can end up in the wrong place.
                </p>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  When a piece cannot be found during a customer request or a stock count, having a location history means you can trace where it was last recorded, when it was moved, and who moved it. This level of traceability is only possible in a purpose-built jewelry inventory management software where every item has a digital identity linked to its physical barcode.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  For high-end jewelry retailers and multi-display showrooms, location history is also useful for understanding how pieces move through the store over time, which locations generate the most customer interest, and how long individual pieces spend in different parts of the store before selling.
                </p>
              </div>

              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Location tags printed from EasyJewelry
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  Every location in EasyJewelry can have a printed tag generated directly from the system and attached to the physical storage area. The tag carries the location code, which matches the record in your jewelry store software.
                </p>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  When a piece is returned to its display after a customer viewing or a staff handling, the location tag on the display tells your team exactly where it belongs. When new stock arrives and is assigned to a location, the barcode on the item and the code on the location tag both correspond to the same record in EasyJewelry.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  This physical-to-digital connection is what makes location tracking practical in a busy retail jewelry environment. The system does not require staff to remember where things go — the printed tags do that work, and the jewelry inventory system keeps the digital record aligned with the physical reality of your store.
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
                  Why location tracking is essential for jewelry retailers
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    A jewelry showroom can hold hundreds or thousands of individual pieces across dozens of display cases, trays, and storage areas. Without a location system in your jewelry store management software, finding a specific piece when a customer asks for it depends entirely on staff memory. When staff change, that knowledge leaves with them.
                  </p>
                  <p>
                    During stock audits, not knowing the expected location of each piece makes the count significantly harder. Without location data, you are scanning every piece in every location to build up the count. With location data in your jewelry inventory system, you count location by location and immediately see if anything is missing from where it should be.
                  </p>
                  <p>
                    The initial weight field on each location is particularly useful for jewelers who use weight-based spot checks. By setting the expected weight for a location — the total weight of all pieces that should be there — a quick scale reading can confirm whether the location contents are complete without scanning every individual piece.
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
                      type: 'Jewelry Retailers with Large Showrooms',
                      desc: 'Assign every piece to a display case or tray location. Staff can find any item instantly by looking up its location in the jewelry inventory system, and location tags on each display confirm where pieces should be returned.',
                    },
                    {
                      type: 'Gold and Diamond Wholesalers',
                      desc: 'Track high-value inventory across safe locations and stockroom areas. The initial weight per location makes spot-checking stock completeness fast and reliable.',
                    },
                    {
                      type: 'Multi-Branch Jewelry Stores',
                      desc: 'Each branch has its own set of locations. When a piece is transferred between branches, its location at the destination branch is recorded on arrival. Location tracking works independently at each branch within your jewelry ERP software.',
                    },
                    {
                      type: 'Stock and Inventory Managers',
                      desc: 'Use location data to conduct faster and more accurate stock counts. Count location by location and use the expected weight to flag any discrepancies before scanning individual barcodes.',
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
                'Add unlimited inventory locations',
                'Location code per location',
                'Initial weight per location',
                'Location description field',
                'Assign items to locations on purchase',
                'Change location by barcode scan',
                'Multiple items location change in one operation',
                'Full location history per item',
                'History date and timestamp per location change',
                'Print location tags from EasyJewelry',
                'View all locations with current contents',
                'Location data in stock audit reports',
                'Branch-level location management',
                'Location visible on item barcode scan',
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
                  q: 'What types of locations can I create in EasyJewelry?',
                  a: 'You can create any type of location that exists in your jewelry store — display cases, trays, drawers, safes, stockroom shelves, counters, or any other storage area. Each location gets a code and description that matches your physical setup.',
                },
                {
                  q: 'Can I move multiple items to a new location at once?',
                  a: 'Yes. The Change Location screen allows you to scan multiple barcode-tagged items and move them all to a new location in a single operation. This is useful when rearranging displays or restocking a section of your showroom.',
                },
                {
                  q: 'What does the location history show?',
                  a: 'The location history for any item shows every location it has ever been assigned to, with the date of each change. This gives you a complete audit trail of where the piece has been stored throughout its time in your jewelry inventory system.',
                },
                {
                  q: 'What is the initial weight field used for on a location?',
                  a: 'The initial weight records the expected total weight of all items that should be in that location. This allows staff to do a quick weight-based spot check of a display tray or safe without scanning every individual piece.',
                },
                {
                  q: 'How do location tags help my staff?',
                  a: 'Printed location tags are attached to each physical storage area and carry the location code from EasyJewelry. When a piece needs to be returned to its location after a customer viewing, the tag tells staff exactly where it goes. This removes the reliance on staff memory and reduces misplaced items.',
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
              Always know where every piece in your store is located
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              In a jewelry business, every piece has real monetary value and every misplaced item costs time, creates stress, and damages customer confidence. EasyJewelry's Inventory Locations module gives your entire team the ability to find any piece instantly, move it with a full digital record, and always know where to put it back. Combined with barcode tagging and Zebra printer integration, it is the physical-to-digital bridge that keeps your jewelry inventory management software aligned with the reality of your showroom floor.
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