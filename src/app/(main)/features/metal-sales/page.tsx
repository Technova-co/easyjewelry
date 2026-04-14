import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function MetalSalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Metal Sales and Jewelry Invoicing"
              description="Create retail and wholesale jewelry sales invoices with full metal detail, live or fixed gold rate pricing, VAT calculation, and payment collection all in one screen."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                Selling jewelry is not like selling any other product. Every invoice needs to reflect the karat of the metal, the gross weight of the piece, the pure metal content, the making charges applied, and the tax due. If the sale is based on the live gold rate, the price needs to be calculated from today's market price at the time of the transaction. If it is a fixed-price sale, the agreed amount needs to be locked in. EasyJewelry's Metal Sales module handles every one of these scenarios in a single, purpose-built invoicing system designed specifically for gold, silver, and diamond jewelry businesses.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                From the invoice screen shown above, you can see exactly how comprehensive this system is. The invoice captures item, description, purity, quantity, gross weight, pure weight, unit making charges, total making charges, subtotal, VAT, and line total for every item on the invoice. At the bottom, total quantity, total gross weight, total pure weight, subtotal, VAT, rounding, and final total are all calculated automatically. Payment method, bank, and amount are recorded in the same screen before saving. Every detail a jewelry business needs on a professional invoice is there, calculated correctly, without manual effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two types of metal sales */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">Two types of metal sales invoices</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              EasyJewelry supports both retail jewelry sales and wholesale metal sales from the same system, with invoice types designed for how each type of transaction actually works.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Retail jewelry sales invoice
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  The standard retail invoice is designed for jewelry stores selling individual pieces to end customers. Each line item carries the full metal breakdown: item, description, purity, quantity, gross weight, pure weight, unit making charge, total making charge, subtotal, VAT, and total. The invoice is generated instantly and can be printed on a customizable template carrying your store name, logo, and branch details.
                </p>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  For retail sales, items are typically added by scanning the barcode tag attached to the piece. The item code is read by the scanner and all metal details populate automatically from the item record. The salesman only needs to confirm the making charge and currency. The rest is calculated by the system.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  The retail invoice supports both fixed-price selling and rate-based selling. A fixed-price item is sold at the agreed price regardless of the market rate. A rate-based item is priced by applying today's gold rate to the pure weight of the piece, which gives the customer a transparent price tied directly to the market.
                </p>
              </div>

              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Wholesale metal sales invoice
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  The wholesale invoice is designed for gold and silver traders selling bulk metal to other businesses. Wholesale transactions are almost always weight-based rather than piece-based. A trade customer buys a specific gram weight of 22 karat gold, and the price is calculated by applying the current market rate to the pure weight of the metal being sold.
                </p>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  EasyJewelry's wholesale invoice captures all the same metal detail as the retail invoice but is structured for bulk quantities. Multiple items can appear on a single wholesale invoice, each with its own karat, purity, gross weight, pure weight, and making charge. The system totals the gross weight and pure weight across all line items, giving the buyer a complete metal breakdown on a single document.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  Wholesale invoices also support the hedge option, allowing businesses that trade with hedged pricing to record the hedge reference against the invoice. This is a feature unique to precious metal trading operations and is not available in generic invoicing software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed vs rate-based pricing */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">
              Fixed price selling and live gold rate pricing
            </Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              EasyJewelry gives jewelry businesses the flexibility to sell at a fixed agreed price or at a price calculated from the live gold or silver rate, with both options available on the same invoice.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Fixed price selling',
                  desc: 'The item is sold at a predetermined price that does not change with the market rate. This is common for manufactured jewelry sold at retail where the price has been set based on the cost of production plus margin. The invoice records the agreed price and all metal details for the transaction record.',
                },
                {
                  title: 'Live gold rate pricing',
                  desc: 'The price is calculated by taking the pure weight of the item and multiplying it by the current gold or silver rate entered in the system. EasyJewelry displays the current rate per ounce at the top of the invoice screen. The calculated price updates automatically as the rate changes, ensuring every rate-based transaction reflects the accurate market price at the time of sale.',
                },
                {
                  title: 'Fixed and unfixed on the same invoice',
                  desc: 'A single invoice can contain both fixed-price items and rate-based items. A customer buying a fixed-price necklace and a rate-based gold bar in the same transaction gets one invoice that handles both pricing methods correctly. This flexibility is essential for jewelry businesses that sell across different product categories.',
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

      {/* Payment collection */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">Payment collection on every invoice</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              EasyJewelry collects payment at the point of invoicing. Every invoice includes a payment section where the method, bank, and amount are recorded before the invoice is saved, giving you a complete record of both the sale and the settlement in one document.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Multiple payment methods',
                  desc: 'Cash, cheque, bank transfer, and any other payment method your business accepts can be configured and selected on the invoice. The payment method is recorded against the transaction and appears in the daily report under received payments.',
                },
                {
                  title: 'Bank selection',
                  desc: 'When a payment is made by bank transfer or cheque, the bank account it was paid into is selected on the invoice. This keeps your bank reconciliation clean because every payment is already tagged to the correct account.',
                },
                {
                  title: 'Apply credit',
                  desc: 'If a customer has an existing credit balance in EasyJewelry, it can be applied directly against the invoice at the time of sale. The credit is deducted from the total due and the remaining balance is collected as a fresh payment. This is particularly useful for jewelry businesses that frequently deal with part-payment customers.',
                },
                {
                  title: 'Partial payment and outstanding balance',
                  desc: 'Not all jewelry purchases are settled in full at the point of sale. EasyJewelry allows partial payment to be recorded on an invoice, with the outstanding balance carried against the customer account. The customer balance can be settled in a future transaction or tracked as an outstanding receivable.',
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

      {/* Invoice templates */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">
              Customizable jewelry invoice templates
            </Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Every invoice printed from EasyJewelry carries your business identity. Invoice templates are customizable to include your store name, logo, branch address, contact details, and any other information your customers or trade partners need to see on a formal jewelry invoice.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  What appears on a jewelry invoice
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  A professional jewelry invoice from EasyJewelry includes the invoice number, invoice reference, date, customer name, salesman name, and branch name in the header. The line items show full metal detail for every piece sold. The footer shows total quantity, total gross weight, total pure weight, subtotal, VAT, rounding adjustment, and final total. Payment method, bank, and amount received are shown below the totals.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  For wholesale invoices, the current gold rate per ounce is shown on the invoice alongside the pure weight calculations, giving the trade customer full transparency on how the price was arrived at. This level of detail is expected in the precious metal trade and EasyJewelry delivers it as standard.
                </p>
              </div>

              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Print, save and share invoices
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  Every invoice generated in EasyJewelry can be printed immediately from the invoice screen. For jewelry retailers with a receipt printer at the point of sale counter, the invoice prints directly to the connected printer. For businesses that send invoices to trade customers, the invoice can be saved as a PDF and shared by email or messaging app.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  The invoice history in EasyJewelry keeps a complete record of every invoice ever raised. Any past invoice can be reprinted, viewed, or referenced at any time. The view invoices screen shows every invoice with its date, type, customer, items, gross weight, pure weight, making charges, total amount, salesman, branch, and current status, all searchable and filterable.
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
                  Why jewelry invoicing is different from standard retail billing
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    Generic invoicing software treats every product the same way. You enter a name, a quantity, and a price, and the system multiplies them. For jewelry, this approach fails immediately. A gold necklace does not have a fixed price. Its price depends on the weight of the metal, the purity of that metal, the live gold rate at the time of sale, and the making charges agreed with the customer. None of this can be captured in a standard invoicing field.
                  </p>
                  <p>
                    Furthermore, a jewelry invoice needs to show the gross weight and pure weight separately because customers, trade partners, and regulatory bodies all need to understand the metal content of what was sold. A retailer in a country with hallmarking requirements needs to show purity on the invoice. A wholesaler selling to a manufacturer needs to show pure weight so the buyer knows the exact metal content they are receiving.
                  </p>
                  <p>
                    EasyJewelry's Metal Sales invoicing handles all of this automatically. Every field is pre-populated from the item record. Every calculation is performed by the system. Every invoice that comes out is a professional, accurate, and compliant document that reflects the real transaction in full detail.
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
                      desc: 'Issue professional invoices at the point of sale with full metal detail, making charges, VAT, and payment recorded in seconds. Print directly to your counter printer or save as PDF for the customer.',
                    },
                    {
                      type: 'Gold and Silver Wholesalers',
                      desc: 'Create wholesale metal invoices with live rate pricing, pure weight totals, and hedge references for trade customers. Both fixed and unfixed invoices supported in the same system.',
                    },
                    {
                      type: 'Multi-Branch Jewelry Stores',
                      desc: 'Each branch raises invoices under its own name and address. All invoices are visible centrally with branch filtering so management can see the full sales picture across every location.',
                    },
                    {
                      type: 'Jewelry Exporters',
                      desc: 'Issue invoices in any configured currency with full metal detail and pure weight breakdown. All the documentation an international trade customer needs is generated automatically.',
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
                'Retail jewelry sales invoices',
                'Wholesale metal sales invoices',
                'Fixed price selling per line item',
                'Live gold and silver rate pricing',
                'Fixed and unfixed items on same invoice',
                'Item, purity, gross weight and pure weight per line',
                'Unit making and total making charges',
                'VAT calculation per line and invoice total',
                'Rounding adjustment on invoice total',
                'Payment method and bank recording',
                'Apply customer credit against invoice',
                'Partial payment with outstanding balance',
                'Multi-currency invoice support',
                'Customizable invoice templates',
                'Print invoices directly from screen',
                'Save and share invoices as PDF',
                'Full invoice history with search and filter',
                'Salesman and branch tracking per invoice',
                'Hedge reference for wholesale transactions',
                'Live rate per ounce displayed on invoice',
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
                  q: 'Can I have both fixed-price and rate-based items on the same invoice?',
                  a: 'Yes. A single invoice in EasyJewelry can contain line items priced at a fixed amount and line items priced based on the live gold or silver rate. The system handles both pricing methods simultaneously on the same document.',
                },
                {
                  q: 'How does live gold rate pricing work?',
                  a: 'The current gold or silver rate is entered in the EasyJewelry settings and displayed at the top of the invoice screen. When a rate-based item is added to an invoice, the system multiplies the pure weight of the item by the current rate to calculate the metal value. Making charges are added on top to arrive at the selling price.',
                },
                {
                  q: 'What is the difference between the retail and wholesale invoice?',
                  a: 'The retail invoice is for selling individual jewelry pieces to end customers, typically scanned by barcode at the point of sale. The wholesale invoice is for selling bulk metal by weight to trade customers, with rate-based pricing, pure weight totals, and optional hedge references. Both are available from the same Metal Sales module.',
                },
                {
                  q: 'Can I record partial payment on an invoice?',
                  a: 'Yes. If a customer pays part of the invoice amount, you record the amount received and the outstanding balance is carried against the customer account. The balance can be settled in a future transaction.',
                },
                {
                  q: 'Can invoices be printed in different formats for retail and wholesale customers?',
                  a: 'Yes. Invoice templates are customizable. You can set up different templates for retail invoices and wholesale invoices, each carrying the appropriate level of metal detail for the intended recipient.',
                },
                {
                  q: 'Does the invoice show VAT separately?',
                  a: 'Yes. VAT is calculated per line item and shown as a separate column on the invoice. The invoice total shows subtotal, VAT amount, rounding, and final total as separate figures, which is required for businesses operating under VAT or GST.',
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
              Every jewelry sale, invoiced correctly the first time
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              A jewelry invoice is more than a receipt. It is a metal accounting document, a tax record, a customer proof of purchase, and a trade reference all at once. EasyJewelry's Metal Sales invoicing is built to serve every one of these purposes simultaneously, for retail jewelers and wholesale gold traders alike. Whether the sale is a fixed-price retail piece or a bulk weight-based wholesale transaction at today's market rate, EasyJewelry generates the correct invoice, collects the payment, and records the full metal detail without any manual effort from your team.
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