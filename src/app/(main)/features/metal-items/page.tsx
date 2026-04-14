import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function MetalItemsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Jewelry Item Management"
              description="Define every item in your jewelry inventory with full metal detail. Karat, purity, item code, barcode, RFID, and tax settings all configured in one place."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                Every piece of jewelry in your store is unique. A gold necklace is not just a necklace — it is a 22 karat piece with a specific gross weight, a pure gold content, a making charge, a tax classification, and an item code that identifies it across your entire system. Generic inventory software treats it like any other product on a shelf. EasyJewelry treats it the way a jewelry business actually needs it to be treated, with every metal attribute recorded, every purity level tracked, and every item ready for barcode tagging or RFID integration from the moment it is added.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                The Add Item screen in EasyJewelry captures everything that matters about a jewelry item at the point of creation. Karat is selected from a predefined list covering 9K, 14K, 18K, 22K, and 24K. Standard purity and actual purity are recorded separately, which is essential for accurate gross and pure weight calculations across all transactions. The item code links the physical tag to the system record. Taxable and barcodeable flags are set here once, and they apply automatically across every sale, purchase, and stock count that item appears in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Item setup fields */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">What you define for each item</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Every field in the item setup has a specific purpose in the context of jewelry inventory management. Here is what each one does and why it matters.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Karat',
                  desc: 'Select the karat of the item from 9K, 14K, 18K, 22K, or 24K. This is the fundamental attribute that drives all pure weight calculations across sales invoices, purchase bills, stock reports, and metal balance tracking. Every transaction involving this item will reference its karat for accurate metal accounting.',
                },
                {
                  title: 'Item Code',
                  desc: 'A unique identifier for the item that connects the physical tag to the digital record in your jewelry management software. The item code is what gets printed on barcode tags and scanned at the point of sale, during stock counts, and on purchase receipts. It must be unique across your inventory.',
                },
                {
                  title: 'Description',
                  desc: 'A free text field for the full item description. This appears on invoices and reports. For a jewelry retail business, this typically includes the item type, design name, stone details, and any other relevant attributes the customer or buyer needs to see on a formal document.',
                },
                {
                  title: 'Standard Purity',
                  desc: 'The declared purity of the metal as per the karat standard. For 22 karat gold this would typically be 916 parts per thousand. Standard purity is used as the reference value for calculating what the pure gold content of an item should be based on its gross weight.',
                },
                {
                  title: 'Actual Purity',
                  desc: 'The tested or certified purity of the specific item, which may differ slightly from the standard. For jewelry businesses dealing in certified or hallmarked pieces, recording the actual purity ensures your metal balance calculations reflect the true gold or silver content of your inventory rather than an estimate.',
                },
                {
                  title: 'Taxable',
                  desc: 'Sets whether this item attracts tax on sale. In jewelry businesses operating under VAT or GST regimes, some items are taxable while others, particularly certain bullion products, may be exempt. Setting this at the item level means tax is applied correctly and automatically on every invoice without manual calculation.',
                },
                {
                  title: 'Barcodeable',
                  desc: 'Flags whether this item can receive a barcode tag. Items marked as barcodeable can be printed with a barcode label from EasyJewelry and scanned at the point of sale, during stock audits, and on transfers between branches. Items marked as non-barcodeable, which is common for bulk metal sold by weight at wholesale, are handled without tags.',
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

      {/* Barcode and RFID */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">
              Barcode tagging and RFID for jewelry inventory
            </Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              EasyJewelry integrates with Zebra barcode printers and scanners as well as RFID hardware, giving jewelry retailers and wholesalers a complete physical tagging solution built directly into their inventory management workflow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Barcode tagging with Zebra printers
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  Once an item is added and marked as barcodeable, EasyJewelry generates a barcode label that can be printed directly to a Zebra label printer. The printed tag carries the item code which is the link between the physical piece and its full record in your jewelry software — karat, purity, description, price, and all associated transaction history.
                </p>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  At the point of sale, a Zebra barcode scanner reads the tag and instantly pulls up the item in the sales invoice screen. No manual entry, no errors, no delays. The same scan works during stock counts, inter-branch transfers, and purchase receipts. Every time the tag is scanned, EasyJewelry records the event against the item's history.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  For jewelry retailers with large showrooms and high item counts, barcode tagging transforms the speed and accuracy of daily operations. A stock count that used to take hours can be completed in minutes when every piece has a scannable tag.
                </p>
              </div>

              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  RFID integration for high-volume jewelry businesses
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  For jewelry businesses that need even faster inventory management, EasyJewelry supports RFID tagging and scanning. RFID tags can be read without line of sight and multiple tags can be scanned simultaneously, making it possible to count an entire display case or a full shelf of inventory in seconds rather than scanning each piece individually.
                </p>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  RFID is particularly valuable for high-end jewelry retailers, large wholesale operations, and any business that conducts frequent stock audits. The RFID tag carries the same item code as the barcode, linking directly to the full item record in EasyJewelry. Every scan is logged, creating a complete audit trail of when each piece was counted, moved, or sold.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  EasyJewelry's RFID integration works with compatible Zebra RFID scanners, allowing businesses to use the same hardware ecosystem for both barcode and RFID operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retailers vs Wholesalers */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">
              How item management differs for retailers and wholesalers
            </Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              EasyJewelry's item management is built to serve both retail and wholesale jewelry operations, with specific features for each.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  For jewelry retailers
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  Retail jewelry businesses deal in individual pieces with distinct identities. Each ring, necklace, bracelet, and earring set is a unique item with its own karat, weight, design, and price. Barcode tagging is the standard approach for retail because every piece can be individually tagged and scanned.
                </p>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  When a retail customer selects a piece, the salesman scans the barcode tag and the item is instantly added to the sales invoice with all its details pre-populated. Making charges, tax, and karat-based pricing are all applied automatically based on the item record. There is no manual data entry and no risk of entering the wrong karat or weight.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  RFID tagging is increasingly popular for retail showrooms with large inventory, where regular stock audits are needed to ensure every piece on display is accounted for. A quick RFID scan of the entire display confirms the count in seconds.
                </p>
              </div>

              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  For jewelry wholesalers
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  Wholesale jewelry businesses often deal in bulk metal sold by weight rather than individual tagged pieces. For these transactions, items can be set as non-barcodeable. A wholesale gold bar, a bulk lot of chain sold by the gram, or raw metal sold to a manufacturer does not need a physical tag because the transaction is weight-based, not piece-based.
                </p>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  Non-barcodeable items in EasyJewelry are still fully tracked by karat, standard purity, and actual purity. All the metal accounting features apply exactly as they do for tagged retail items. The difference is simply that the item does not expect a physical tag to be scanned at the point of sale or during stock counts.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  This flexibility means a business that operates as both a retailer and a wholesaler can manage both types of inventory in the same system, with the same item catalogue, without any workarounds or separate software.
                </p>
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
                'Karat selection per item (9K, 14K, 18K, 22K, 24K)',
                'Unique item code per item',
                'Full item description field',
                'Standard purity per item',
                'Actual purity per item',
                'Taxable flag per item',
                'Barcodeable flag per item',
                'Non-barcodeable support for wholesale items',
                'Barcode label printing via Zebra printers',
                'Barcode scanning via Zebra scanners',
                'RFID tag support',
                'RFID scanning for bulk stock counts',
                'Item code links physical tag to system record',
                'Automatic karat-based pure weight calculation',
                'Item history and transaction trail',
                'Export item list to CSV, Excel and PDF',
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
                  q: 'What is the difference between standard purity and actual purity?',
                  a: 'Standard purity is the theoretical purity of a metal at a given karat, for example 916 for 22 karat gold. Actual purity is the tested or certified purity of the specific piece, which may be slightly different. Recording both gives you accurate pure weight calculations based on the real metal content of each item.',
                },
                {
                  q: 'Can I use both barcodes and RFID in the same jewelry store?',
                  a: 'Yes. You can tag some items with barcodes and others with RFID tags depending on your operational needs. Both systems link to the same item record in EasyJewelry through the item code.',
                },
                {
                  q: 'Which Zebra printers and scanners are compatible?',
                  a: 'EasyJewelry integrates with the Zebra range of barcode label printers and handheld barcode scanners, as well as Zebra RFID scanning hardware. Contact our team for specific model recommendations based on your store setup.',
                },
                {
                  q: 'What does non-barcodeable mean for wholesale items?',
                  a: 'Non-barcodeable items are items that are sold by weight rather than as individually tagged pieces. They are fully tracked in EasyJewelry by karat, purity, and weight, but they do not require a physical barcode tag and are not expected to be scanned at the point of sale.',
                },
                {
                  q: 'Can the same item appear in both retail and wholesale transactions?',
                  a: 'Yes. An item defined in EasyJewelry can be sold through a retail invoice or a wholesale metal sales invoice depending on the transaction type. The item record is shared across both, with the karat and purity attributes applying consistently.',
                },
                {
                  q: 'How does the item code connect to my physical tags?',
                  a: 'When you print a barcode label for an item, the barcode encodes the item code from EasyJewelry. When that barcode is scanned, EasyJewelry reads the item code and instantly retrieves the full item record. This is the link between your physical jewelry pieces and your digital inventory.',
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
              Every item in your jewelry inventory, perfectly defined
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              The quality of your inventory management in a jewelry business depends entirely on the quality of your item records. When every piece is defined with the right karat, the right purity, the right item code, and the right tax classification, every downstream process — sales, purchases, stock counts, and financial reports — works correctly and automatically. EasyJewelry's item management gives you that foundation, with barcode and RFID tagging via Zebra hardware to bridge the gap between your physical inventory and your digital records.
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