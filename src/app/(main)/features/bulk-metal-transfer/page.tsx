import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function BulkMetalTransferPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Bulk Jewelry Stock Transfer"
              description="Scan multiple barcode-tagged jewelry pieces and move them all to a destination branch in one transaction. Fast, accurate, and fully tracked in your jewelry inventory system."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                Moving stock between branches one piece at a time works for individual transfers. But when a shipment of twenty pieces needs to move from your main location to a branch, or when you are redistributing a collection across multiple stores, scanning each piece individually and creating separate transfer records for each one is not practical. EasyJewelry's Multiple Transfer Metal feature solves this by letting you scan as many barcode-tagged jewelry items as needed and transfer them all to a destination branch in a single transaction.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                The process is simple. You select the destination branch, then scan each item barcode one by one. Each scanned piece is added to the transfer list automatically. When all items are scanned, you save the transfer and every piece moves from its current branch to the selected destination simultaneously. The inventory at the sending branch decreases for each item and the receiving branch inventory increases, all in one operation. The full transfer record is stored in your jewelry store management software with every item, its metal details, and both branch locations documented.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">How bulk transfer works</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              The multiple transfer process is designed for speed at the counter or in the stockroom.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Select the destination branch',
                  desc: 'Choose the branch you are sending stock to from your list of configured locations in EasyJewelry. The system already knows which branch each item currently belongs to from its barcode record, so only the destination needs to be selected.',
                },
                {
                  step: '02',
                  title: 'Scan each item barcode',
                  desc: 'Use a Zebra barcode scanner or any compatible scanner to scan each jewelry piece being transferred. Each scan adds the item to the transfer list with its full details pulled automatically from your jewelry inventory management software — item name, karat, purity, gross weight, and pure weight.',
                },
                {
                  step: '03',
                  title: 'Save and transfer all at once',
                  desc: 'Once all items are scanned, save the transfer. Every piece moves from its current branch to the destination branch in one operation. Inventory levels update at both locations immediately and the transfer record is stored with the full item list and metal detail for every piece.',
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

      {/* Why barcode only */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">
              Why bulk transfer is designed for barcode-tagged items
            </Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              The multiple transfer feature works exclusively with barcode-tagged jewelry pieces, and there is a specific reason for this.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Each piece has a unique identity
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  When a jewelry piece is purchased and tagged through EasyJewelry's Metal Purchases module, a barcode label is generated that encodes the item code for that specific piece. This barcode is the unique identifier that links the physical piece to its complete record in your jewelry ERP software — karat, purity, gross weight, pure weight, purchase price, vendor, and branch location.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  Because each tagged piece has a known location in the system, the bulk transfer only needs a destination. The system already knows where every scanned item currently is. You just tell it where it is going. This is what makes the process fast — no manual data entry, no weight re-entry, no purity lookup. Scan and go.
                </p>
              </div>

              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Full traceability from purchase to transfer to sale
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  Every barcode-tagged piece in EasyJewelry has a complete history. Where it was purchased, what was paid for it, which branch it was originally assigned to, every transfer it has been through, and ultimately which customer it was sold to. The bulk transfer record adds another entry to that history, showing the date, the destination branch, and which transfer batch it was part of.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  For jewelry businesses that deal in high-value pieces, certified diamonds, or hallmarked gold, this level of item-level traceability is not just convenient — it is essential. Knowing the complete journey of any piece in your jewelry inventory system, from the moment it entered your business to the moment it left, is a standard requirement for professional jewelry retail and wholesale operations.
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
                  Why multi-branch jewelry businesses need bulk transfer
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    A jewelry business with multiple branches is constantly moving stock. Seasonal collections rotate between stores. Fast-selling items get restocked from the main location. A customer at one branch wants a piece that is currently at another. New shipments arrive centrally and need to be distributed.
                  </p>
                  <p>
                    Without a bulk transfer tool in your jewelry store management software, every movement requires a separate record. Twenty pieces moving to a branch means twenty individual transfers. Each one takes time, creates room for error, and adds to the administrative burden on staff who are also trying to serve customers.
                  </p>
                  <p>
                    EasyJewelry's bulk transfer turns a twenty-piece branch restock into a two-minute operation. Scan each piece, select the destination, save. The inventory in your jewelry inventory management software updates instantly across both locations, and a single transfer record documents the entire movement with every item included.
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
                      type: 'Multi-Branch Jewelry Retailers',
                      desc: 'Restock branches from your main location quickly. Scan the pieces being sent, select the destination branch, and the jewelry inventory system updates both locations in one save.',
                    },
                    {
                      type: 'Gold and Diamond Wholesalers',
                      desc: 'Distribute tagged inventory across trading locations without creating separate transfer records for each piece. One scan per item, one save for the whole batch.',
                    },
                    {
                      type: 'Inventory and Stock Managers',
                      desc: 'Manage branch restocking and seasonal rotation efficiently. The bulk transfer record gives you a complete list of every piece that moved, with all metal details, in a single document.',
                    },
                    {
                      type: 'Operations Teams',
                      desc: 'Reduce the time spent on inter-branch stock movements. What used to require multiple individual transfers in your jewelry ERP system now takes a single scan-and-save operation.',
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
                'Multiple barcode-tagged items in one transfer',
                'Barcode scan to add each item',
                'Destination branch selection',
                'Auto item detail population from barcode',
                'Karat and purity per item from system record',
                'Gross weight and pure weight per item',
                'Inventory update at both branches on save',
                'Single transfer record for entire batch',
                'Full item list with metal detail per transfer',
                'Transfer date and destination branch recorded',
                'Complete transfer history per branch',
                'Item-level traceability from purchase to transfer',
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
                  q: 'Can I transfer items from different branches in the same bulk transfer?',
                  a: 'The system reads each item current branch from its barcode record. Items from different source branches can be included in the same bulk transfer as long as they are all going to the same destination branch.',
                },
                {
                  q: 'Does the bulk transfer work with any barcode scanner?',
                  a: 'Yes. Any compatible barcode scanner works with EasyJewelry, including Zebra handheld scanners which are the recommended hardware for jewelry businesses. As long as the scanner can read the barcode label generated by EasyJewelry, it will work with the bulk transfer screen.',
                },
                {
                  q: 'What happens if I scan an item that does not belong to any branch?',
                  a: 'EasyJewelry will flag the item as unrecognised. Only barcode-tagged items that have been purchased and recorded through the Metal Purchases module in your jewelry inventory system can be included in a bulk transfer.',
                },
                {
                  q: 'Is there a limit on how many items I can include in one bulk transfer?',
                  a: 'No. You can scan as many items as needed in a single bulk transfer transaction. The transfer record will include every item with its full metal detail.',
                },
                {
                  q: 'Can I see which bulk transfer a specific item was part of?',
                  a: 'Yes. Because every item is tracked by its barcode through EasyJewelry, you can view the complete history of any piece including every transfer it has been part of, the date, and the destination branch.',
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
              Move your entire jewelry collection between branches in minutes
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              For multi-branch jewelry businesses, the ability to move stock quickly and accurately between locations is not a luxury — it is a daily operational requirement. EasyJewelry's bulk transfer feature makes inter-branch stock movement as fast as scanning a barcode, with every item fully documented and every branch inventory instantly updated. Your jewelry store management software stays accurate across all locations without any additional effort from your team.
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