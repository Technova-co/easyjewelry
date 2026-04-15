import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function MetalBarcodesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Jewelry Barcode Inventory Register"
              description="A complete register of every barcode-tagged item in your jewelry inventory. Where it came from, its weight, making charge, location, branch, availability status, and whether it has left the store."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                Every barcode tag printed through EasyJewelry represents a specific piece of jewelry with a complete digital identity. The Metal Barcodes screen is the master register of every one of those tags across your entire jewelry inventory management system. From the moment a piece enters your business through a purchase or exchange, its barcode record is created here. Every detail about that piece — when it came in, how it came in, what it weighs, what the making charge is, where it is located, which branch it belongs to, and whether it is currently available or has been sold — is visible in a single searchable, filterable table.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                Looking at the screenshot above, you can see the level of detail captured per barcode. The date it came in, the type of transaction that created it, the transaction ID, the barcode number, the item code, gross weight, gross weight from the tag, unit making charge, pure weight, remarks, storage location, branch, and availability status are all visible per row. The Out Date, Out Type, and Out ID columns show when and how the piece left the inventory — whether it was sold, transferred, or exchanged — completing the full lifecycle record of every tagged piece in your jewelry store management software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What the register shows */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">What the barcode register shows for every item</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Every column in the Metal Barcodes register has a specific purpose in the context of jewelry inventory tracking.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'In Date and In Type',
                  desc: 'The date the piece entered your jewelry inventory and the type of transaction that brought it in — Metal Purchase, Metal Exchange, Transfer, or any other inbound transaction type. This is the origin record for every barcode in your system.',
                },
                {
                  title: 'Barcode and Item Code',
                  desc: 'The unique barcode number printed on the physical tag and the item code that links the barcode to the item definition in your jewelry inventory management software. Together these are the digital identity of the physical piece.',
                },
                {
                  title: 'Gross Weight and Tag Weight',
                  desc: 'The actual scale weight of the piece and the weight declared on the original tag if it came in with an existing tag. Both are recorded at the point of entry so any discrepancy between the declared weight and the actual weight is visible and documented.',
                },
                {
                  title: 'Unit Making Charge',
                  desc: 'The making charge per unit applied to this specific piece at the time it entered your inventory. This feeds into the pricing calculation when the piece is added to a sales invoice in your jewelry POS software.',
                },
                {
                  title: 'Pure Weight',
                  desc: 'The pure metal content of the piece calculated from its gross weight and purity. This is the figure used in all metal balance calculations and is the key number for understanding the true metal value of every item in your jewelry inventory system.',
                },
                {
                  title: 'Remarks and Location',
                  desc: 'Any notes entered about the piece at the time of receipt, and the current storage location within your store. The location links to the Inventory Locations module and shows exactly where the piece is physically stored.',
                },
                {
                  title: 'Branch and Availability',
                  desc: 'Which branch the piece currently belongs to, and whether it is currently available for sale. A piece marked YES is in stock and available. A piece with an Out Date has left the inventory and the Out Type and Out ID show how and when it went.',
                },
                {
                  title: 'Out Date, Out Type and Out ID',
                  desc: 'When the piece left your jewelry inventory, what type of transaction it left through — a sale, a transfer, an exchange — and the ID of that outbound transaction. This completes the full lifecycle record from entry to exit for every barcode-tagged piece.',
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

      {/* Print tags */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">
              Print barcode tags directly from the register
            </Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Any barcode in the register can have its tag reprinted directly from the Metal Barcodes screen. This is useful when a tag is damaged, lost, or needs to be replaced without creating a new entry in your jewelry inventory management software.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Select and print',
                  desc: 'Use the checkbox on each row to select one or multiple items from the register. Click Print to send the selected barcode labels directly to your connected Zebra label printer. Each label carries the barcode, item code, and relevant metal details for the piece.',
                },
                {
                  title: 'Reprint without re-entering data',
                  desc: 'Because every piece in the register already has its full detail stored in your jewelry ERP software, reprinting a tag never requires re-entering any data. The label is generated from the existing record and printed in seconds.',
                },
                {
                  title: 'Unavailable items filter',
                  desc: 'The Unavailable Items button filters the register to show only pieces that have left your inventory — sold, transferred, or exchanged. This is useful for auditing outbound stock and confirming that all movements have been properly recorded.',
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
                  Why a complete barcode register matters for jewelry businesses
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    In a jewelry retail or wholesale business, every piece that enters your store has real monetary value. When you have hundreds or thousands of barcode-tagged pieces across multiple branches, knowing the status of each one is not just operationally useful — it is essential for financial accuracy, loss prevention, and regulatory compliance.
                  </p>
                  <p>
                    The Metal Barcodes register in EasyJewelry is effectively a complete asset register for your tagged jewelry inventory. At any point in time, you can see exactly how many pieces are available, what their combined gross weight and pure weight is, where each one is located, and which branch it belongs to. You can also see every piece that has left the inventory and confirm it left through a properly recorded transaction.
                  </p>
                  <p>
                    For jewelry businesses undergoing stock audits, the barcode register is the reference document. You compare the physical count against the register and any piece that is physically present but showing as unavailable, or physically missing but showing as available, indicates a discrepancy that needs investigation. This is far more powerful than a simple item count because every piece has a complete transaction history attached to its barcode.
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
                      desc: 'Use the register as your complete inventory reference. Know the status of every tagged piece at any time, reprint damaged tags instantly, and audit your stock against the register.',
                    },
                    {
                      type: 'Gold and Diamond Wholesalers',
                      desc: 'Track high-value tagged inventory with full entry and exit records. The out type and out ID columns confirm exactly how every piece left the building.',
                    },
                    {
                      type: 'Multi-Branch Jewelry Businesses',
                      desc: 'Filter the barcode register by branch to see the complete tagged inventory at each location. Combined with the location column, you know exactly where every piece is across your entire operation.',
                    },
                    {
                      type: 'Inventory and Loss Prevention Managers',
                      desc: 'The combination of availability status, location, and full in and out transaction records makes the barcode register the most powerful tool for identifying missing, misplaced, or unrecorded inventory movements.',
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
                'Complete register of all barcode-tagged items',
                'In date and in transaction type per item',
                'Barcode number and item code per item',
                'Gross weight and tag weight per item',
                'Unit making charge per item',
                'Pure weight per item',
                'Remarks and storage location per item',
                'Branch per item',
                'Availability status per item',
                'Out date, out type and out ID per item',
                'Filter by availability status',
                'Unavailable items filter',
                'Search across all fields',
                'Print selected barcode tags',
                'Reprint tags without re-entering data',
                'Export to CSV, Excel and PDF',
                'Print full register',
                'Weight range filter with Min and Max',
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
                  q: 'Does the register show both available and sold items?',
                  a: 'Yes. The register shows all barcode-tagged items regardless of status. Available items show YES in the availability column. Items that have left the inventory show their out date, out transaction type, and the ID of the transaction they left through.',
                },
                {
                  q: 'Can I reprint a barcode tag for an item that is still in stock?',
                  a: 'Yes. Select any item from the register using the checkbox and click Print to reprint its barcode label directly to your Zebra printer. No data re-entry is required because all the details are already stored in EasyJewelry.',
                },
                {
                  q: 'Can I filter by weight range?',
                  a: 'Yes. The Min and Max weight filter at the top of the register lets you narrow the view to items within a specific gross weight range. This is useful when looking for items of a particular size or conducting weight-based spot checks.',
                },
                {
                  q: 'What does the Unavailable Items button do?',
                  a: 'It filters the register to show only items that have left your jewelry inventory through a sale, transfer, or exchange. This is useful for confirming that all outbound stock movements have been properly recorded and for auditing the exit history of your inventory.',
                },
                {
                  q: 'Can I export the barcode register?',
                  a: 'Yes. The register can be exported to CSV, Excel, or PDF and printed directly from the screen. This is useful for external audits, insurance documentation, or sharing inventory reports with branch managers or accountants.',
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
              A complete record of every tagged piece in your jewelry business
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              The Metal Barcodes register is the closest thing to a perfect audit trail that a jewelry inventory management system can provide. Every piece that has ever been tagged in your business has a row in this register, with a complete record of how it came in, what it weighs, where it has been, and how it left. For jewelry retailers, wholesalers, and multi-branch operations that take inventory accuracy seriously, this register is one of the most powerful features in EasyJewelry.
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