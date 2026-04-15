import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function MetalPurchasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Metal Purchases and Gold Buying"
              description="Record every metal purchase with full detail. Retail buying, wholesale purchasing, old gold buy-back, and vendor bills all handled in one system with barcode tag generation and Zebra printer integration."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                Purchasing metal is as important as selling it in any jewelry business. Whether you are buying finished jewelry from a manufacturer, purchasing raw gold from a supplier, accepting old gold from a customer at the counter, or receiving a bulk wholesale consignment from a trade vendor, every gram of metal that comes into your business needs to be recorded with its full details — karat, gross weight, pure weight, purity, source, and price. EasyJewelry's Metal Purchases module captures all of this in a structured purchase bill, generates barcode tags for every item received, and creates a complete traceability trail from the moment the metal enters your business.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                Looking at the screenshots above, you can see two layers of this process. The main purchase bill screen captures the supplier, pricing basis, tax treatment, currency, and the full line item detail for everything being purchased. The Enter Bill popup is what makes EasyJewelry unique for jewelry businesses — when barcodeable items are being purchased, each individual piece gets its own row with its barcode, item code, gross weight, gross weight from the tag, remarks, and inventory location. Once saved, EasyJewelry generates a barcode tag for each piece that is printed directly to a Zebra label printer. Every tag carries the details of that specific purchase, creating a permanent link between the physical piece and its origin record.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two types of purchases */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">Two types of metal purchase bills</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              EasyJewelry supports both retail jewelry buying and wholesale metal purchasing, each with the right structure for how those transactions work in practice.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Retail purchase bill
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  The retail purchase bill is used when buying individual jewelry pieces, whether from a manufacturer, a supplier, or directly from a customer at the counter in the case of old gold buy-back. Each piece is entered as a line item with its item, description, purity, quantity, gross weight, pure weight, subtotal making, subtotal, VAT, and total.
                </p>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  For barcodeable items, the Enter Bill popup takes the process further. Each piece gets its own row where the barcode is either scanned from an existing tag or generated as new. The item code, gross weight, gross weight from the physical tag, remarks about the piece, and the inventory location it is being assigned to are all entered per piece. This means every individual ring, necklace, or bracelet being purchased is fully documented at the point of entry.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  Once the purchase bill is saved, EasyJewelry generates a unique barcode label for each piece and sends it directly to the connected Zebra printer. The label is attached to the piece, and from that moment the barcode links the physical item to its full purchase history in the system.
                </p>
              </div>

              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Wholesale purchase bill
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  The wholesale purchase bill is used when buying bulk metal by weight from trade suppliers, gold refineries, or other wholesale sources. Wholesale metal is typically sold in lots rather than individual tagged pieces, so the bill captures the item, purity, quantity in grams, gross weight, and pure weight for each lot in the consignment.
                </p>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  Wholesale purchases support both fixed pricing and rate-based pricing. A fixed-price purchase is agreed at a set amount regardless of the market rate. A rate-based purchase is calculated by multiplying the pure weight of the metal by the current gold or silver rate per ounce, which is displayed at the top of the screen at the time of the transaction.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  The hedge option is available on wholesale purchase bills for businesses that trade with hedged pricing arrangements. The bill also supports tax-free designation for bullion and other exempt metal purchases, which is essential for wholesale operations in VAT-registered jurisdictions where raw metal is often zero-rated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Old gold buy-back */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">
              Old gold and scrap metal buy-back
            </Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Buying old gold from customers is one of the most common transactions in a jewelry retail business. EasyJewelry handles this through the Metal Purchases module with the same level of detail as any other purchase.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Weigh and record the old gold',
                  desc: 'The customer brings in old jewelry or scrap gold. The piece is weighed, the karat is tested or estimated, and the gross weight and purity are entered into the purchase bill. Pure weight is calculated automatically from the gross weight and purity, giving you the exact metal value of what is being bought.',
                },
                {
                  title: 'Price it at today\'s rate',
                  desc: 'The buy-back price is calculated by applying the current gold rate to the pure weight of the metal. EasyJewelry displays the current rate per ounce at the top of the purchase screen. The price the customer is offered is calculated transparently based on real market data, giving both parties a clear basis for the transaction.',
                },
                {
                  title: 'Tag it and put it back in stock',
                  desc: 'If the old gold piece is going to be resold as is, it can be tagged with a new barcode label through the Enter Bill popup. The tag records that this piece was purchased as old gold, the weight it was bought at, the price paid, and the location it has been assigned to in your inventory. If it is being melted for raw metal, it enters your metal stock as pure weight.',
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

      {/* Barcode tag generation and Zebra */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">
              Barcode tag generation and Zebra printer integration
            </Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Every barcodeable item purchased through EasyJewelry gets a unique barcode tag generated at the point of purchase and printed directly to a Zebra label printer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Per-piece entry in the Enter Bill popup
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  When a purchase bill contains barcodeable items, EasyJewelry opens the Enter Bill popup for detailed per-piece entry. Each piece gets its own row in the popup with the following fields recorded individually.
                </p>
                <ul className="space-y-2">
                  {[
                    'Barcode — scanned from existing tag or auto-generated as new',
                    'Item code — the item definition from your catalog',
                    'Gross weight in grams — actual scale weight of the piece',
                    'Gross weight from tag — weight declared on the original tag if present',
                    'Remarks — any notes about the condition, origin, or characteristics of the piece',
                    'Inventory location — the specific location within your store or warehouse this piece is being assigned to',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-paragraph">
                      <svg className="mt-1 flex-shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="7" fill="#b8960c" fillOpacity="0.15" />
                        <path d="M3.5 7L5.5 9L10.5 4.5" stroke="#b8960c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Tag printing and full traceability
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  Once the purchase bill is saved, EasyJewelry automatically generates a barcode label for each piece and sends the print job directly to the connected Zebra label printer. The label is attached to the piece immediately, before it goes into the display or stockroom.
                </p>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  The barcode on the label encodes the item code, which links back to the full purchase record in EasyJewelry. At any point in the future, scanning that barcode will show you the complete history of that piece: which vendor it was purchased from, what was paid for it, when it arrived, which location it was assigned to, and every transaction it has been involved in since.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  This level of traceability is particularly valuable for jewelry businesses dealing in high-value pieces, certified gemstones, or hallmarked items where provenance documentation is important. Every piece in your inventory has a verifiable history from the day it entered your business.
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
                  Why metal purchase management matters for jewelry businesses
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    In most retail businesses, purchasing means raising a purchase order and receiving goods. In jewelry, every purchase is also a metal accounting event. When 50 grams of 22 karat gold comes in, your pure metal balance increases by 45.8 grams. Your accounts payable increases by the purchase amount. If the gold came from a vendor on credit, the vendor balance updates. If you paid by bank transfer, your bank balance decreases. If the purchase was tax-free because it was raw bullion, no VAT is recorded. All of these implications need to happen simultaneously and accurately.
                  </p>
                  <p>
                    EasyJewelry's Metal Purchases module handles all of this automatically from a single purchase bill. There is no separate metal accounting entry to make, no separate inventory update to run, and no separate vendor payment to record. Everything flows from the bill.
                  </p>
                  <p>
                    The addition of per-piece barcode tag generation at the point of purchase is what separates EasyJewelry from generic inventory software for jewelry businesses. Knowing that a piece is in stock is one thing. Knowing exactly where it came from, what was paid for it, and being able to verify that at any time by scanning a tag is what gives a jewelry business owner real control over their inventory.
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
                      desc: 'Record every piece purchased from manufacturers or suppliers with full per-piece detail and generate barcode tags immediately upon receipt. Old gold bought from customers is recorded through the same process.',
                    },
                    {
                      type: 'Gold and Silver Wholesalers',
                      desc: 'Record bulk metal purchases at fixed or live rates with tax-free designation for raw metal. Pure weight calculations are automatic and the purchase updates your metal balance immediately.',
                    },
                    {
                      type: 'Old Gold Buyers',
                      desc: 'Record every piece of old gold or scrap metal purchased from customers with the weight, purity, price paid, and origin. Every buy-back is documented and traceable, which is important for regulatory compliance in many jurisdictions.',
                    },
                    {
                      type: 'Multi-Branch Operations',
                      desc: 'Purchases are recorded at branch level. Stock received at one branch updates that branch inventory. Inter-branch transfers can move that stock to other locations if needed.',
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
                'Retail and wholesale purchase bills',
                'Fixed and rate-based purchase pricing',
                'Tax-free designation for raw metal',
                'Hedge reference for wholesale purchases',
                'Vendor and supplier selection',
                'Multi-currency purchase bills',
                'Exchange rate recorded per bill',
                'Live gold rate displayed on purchase screen',
                'Item, purity, gross weight, pure weight per line',
                'Subtotal making per line item',
                'VAT calculation per line and bill total',
                'Rounding adjustment on bill total',
                'Payment method and bank recording',
                'Per-piece entry with barcode and item code',
                'Gross weight and tag weight per piece',
                'Remarks field per piece',
                'Inventory location assignment per piece',
                'Barcode tag generation per piece on save',
                'Direct print to Zebra label printer',
                'Full purchase history with search and filter',
                'Old gold and scrap metal buy-back support',
                'Branch-level purchase tracking',
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
                  q: 'How does the per-piece barcode entry work for purchased items?',
                  a: 'When a purchase bill contains barcodeable items, EasyJewelry opens a per-piece entry screen where each individual piece gets its own row. You enter the barcode, item code, gross weight, tag weight, remarks, and inventory location for each piece. When the bill is saved, a barcode label is generated for every piece and sent to the Zebra printer automatically.',
                },
                {
                  q: 'Can I buy old gold from customers through the Metal Purchases module?',
                  a: 'Yes. Old gold and scrap metal bought from customers is recorded through the same purchase bill process. The customer is selected as the party, the piece is entered with its weight and purity, and the buy-back price is calculated at the current gold rate. If the piece is being resold, a barcode tag is generated for it on the spot.',
                },
                {
                  q: 'What happens to my metal balance when I record a purchase?',
                  a: 'Your metal inventory increases by the gross weight and pure weight of everything on the purchase bill. The pure weight calculation is automatic based on the gross weight and purity entered. Your vendor balance or cash balance is updated simultaneously depending on how the purchase was paid.',
                },
                {
                  q: 'How does a piece purchased today get traced later?',
                  a: 'The barcode tag generated at purchase encodes the item code. Scanning that barcode at any future point shows the full purchase record, including which vendor it came from, what was paid, when it arrived, and every transaction it has been in since. The purchase bill is the permanent origin record for every tagged piece.',
                },
                {
                  q: 'Can I designate a purchase as tax-free for raw bullion?',
                  a: 'Yes. The tax treatment can be set to tax-free on the purchase bill for raw metal, bullion, and other purchases that are exempt from VAT. This is applied at the bill level and affects all line items on that bill.',
                },
                {
                  q: 'Does the wholesale purchase bill support hedged pricing?',
                  a: 'Yes. The hedge option is available on wholesale purchase bills. When a purchase is being made under a hedged pricing arrangement, the hedge reference is recorded on the bill alongside the rate used.',
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
              Every gram that enters your business, documented from day one
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              The metal that comes into your jewelry business is your most valuable asset. Knowing exactly what you bought, from whom, at what price, at what weight, and being able to trace every individual piece through its complete journey from purchase to sale is not a luxury — it is how a professional jewelry business operates. EasyJewelry's Metal Purchases module, combined with per-piece barcode tag generation and Zebra printer integration, gives you that level of control and traceability as a standard part of your daily purchasing workflow.
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