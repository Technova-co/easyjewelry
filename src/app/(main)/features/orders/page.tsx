import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function OrdersPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Custom Jewelry Order Tracking"
              description="Track every custom order from the moment it is placed to the moment it is ready. Order details, deposit payments, status updates, attachments, and full order history all managed in your jewelry store software."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                Custom orders are a significant part of most jewelry businesses. A customer wants six bangles in 21 karat gold at a fixed price. A trade partner places an order for a batch of pieces to be made. A retail customer wants a ring resized and engraved with a specific design. Each of these orders has a customer, a set of specifications, a price, a deposit, and a production timeline that needs to be tracked from start to finish. EasyJewelry's Orders module gives your team a dedicated place to manage every custom jewelry order, with status tracking that tells everyone in the business exactly where each order is in the production process.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                Looking at the screenshots above you can see both sides of the module. The Enter Order screen captures the order date, the customer, the full order details in a free-text field, and the deposit payment with method and bank. The View Orders screen shows every order with its date, order ID, customer name and contact, details, the salesman who created it, the branch, the current status, and any attachments. The status dropdown shows the complete workflow: Received, Require Further Details, In Process, Shipped, and Ready. Every order moves through these stages and the current status is always visible at a glance in your jewelry ERP software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Order lifecycle */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">The custom order lifecycle in EasyJewelry</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Every custom jewelry order moves through a defined set of stages from the moment it is placed to the moment the customer collects it.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  status: 'Received',
                  desc: 'The order has been taken from the customer. All details have been entered in EasyJewelry, the deposit has been recorded, and the order is in the queue waiting to begin production. The customer and salesman both have a record of what was agreed.',
                },
                {
                  status: 'Require Further Details',
                  desc: 'The order cannot proceed without additional information from the customer. This might be a design reference, a size confirmation, a stone specification, or any other detail that needs to be clarified before manufacturing can begin. The status flags the order for follow-up.',
                },
                {
                  status: 'In Process',
                  desc: 'Production has started. The order is with the karigar, in the workshop, or at an external manufacturer. Anyone in the business who looks up this order can see it is currently being made and not yet ready for collection.',
                },
                {
                  status: 'Shipped',
                  desc: 'The finished order has been dispatched to the customer or to another branch for collection. This status is particularly useful for wholesale orders where the pieces are being delivered to a trade customer at their location.',
                },
                {
                  status: 'Ready',
                  desc: 'The order is complete and ready for the customer to collect. Staff at the counter can see at a glance which orders are ready, allowing them to contact customers and confirm collection without searching through production records.',
                },
              ].map((item) => (
                <div
                  key={item.status}
                  className="bg-blue rounded-20 border border-lineColor/50 p-6"
                >
                  <div className="text-primary text-sm font-semibold mb-3">
                    {item.status}
                  </div>
                  <p className="text-sm text-paragraph leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real example */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">
              What a real custom order looks like in EasyJewelry
            </Heading>
            <p className="text-offWhite/80 mt-4 mb-8">
              From the View Orders screenshot, you can see exactly how order details are recorded in practice.
            </p>

            <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
              <p className="text-sm text-paragraph leading-relaxed mb-4">
                Order 2 from 15 Feb 2026 for SAYD JAFFAR KARIMI shows the following in the details field:
              </p>
              <p className="text-sm text-offWhite/80 leading-relaxed italic mb-4">
                "Order of 6 Pcs bangles total weight 58g Purity 21K Price fixed as 33,769.00 Dhs and Received 2,000 as down payment"
              </p>
              <p className="text-sm text-paragraph leading-relaxed mb-4">
                This single order record captures the quantity, item type, total weight, karat, fixed price, and the deposit received — all in the details field. The salesman who created it, the branch it belongs to, and the current status are all visible in the same row. Anyone in the business can open the Orders screen and immediately understand exactly what was agreed with this customer, what was paid, and what still needs to happen.
              </p>
              <p className="text-sm text-paragraph leading-relaxed">
                Order 1 shows simply "Lock to make" — a brief internal note indicating a piece is being locked or set. This flexibility in the details field means every type of custom jewelry order can be captured in a way that makes sense for your specific business, whether it is a detailed specification or a quick internal instruction.
              </p>
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
                  Why custom order tracking matters for jewelry businesses
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    Custom orders in a jewelry business create a specific operational challenge. The order is promised to a customer, a deposit is collected, production begins, and then life gets busy. Without a proper tracking system in your jewelry store management software, orders get forgotten, details get lost, customers call asking for updates that nobody can provide, and pieces sit completed in the back without anyone knowing they are ready.
                  </p>
                  <p>
                    EasyJewelry's Orders module solves this by making every custom order visible to every relevant person in the business at all times. The salesman who took the order can check its status. The manager can see which orders are overdue. Counter staff can see which orders are ready for collection and call the customer without searching through notebooks or asking around the store.
                  </p>
                  <p>
                    The attachment capability is particularly valuable for custom orders involving specific designs, reference images, or customer-provided specifications. A photo of the design the customer wants, a sketch from the karigar, or a reference image from a catalogue can all be attached to the order record, keeping everything in one place in your jewelry inventory system.
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
                      desc: 'Track every custom and repair order from received to ready. Staff always know which orders are waiting, which are in production, and which are ready for customer collection.',
                    },
                    {
                      type: 'Gold and Silver Wholesalers',
                      desc: 'Manage bulk production orders from trade customers with full specification details, deposit records, and status tracking from order receipt through to shipment.',
                    },
                    {
                      type: 'Jewelry Manufacturers',
                      desc: 'Track manufacturing orders through each production stage. The In Process and Ready statuses give your production team clear visibility of what needs to be made and what is complete.',
                    },
                    {
                      type: 'Multi-Branch Jewelry Businesses',
                      desc: 'Orders are associated with the branch and salesman that created them. Management can view all orders across every branch and filter by status, branch, or date.',
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
                'Auto-generated order number',
                'Order date and customer selection',
                'Free-text order details field',
                'Deposit payment with method and bank',
                'Total payment tracking per order',
                'Order status — Received',
                'Order status — Require Further Details',
                'Order status — In Process',
                'Order status — Shipped',
                'Order status — Ready',
                'Salesman and creator tracking per order',
                'Branch-level order management',
                'File and image attachments per order',
                'View all orders with search and filter',
                'Export orders to CSV, Excel and PDF',
                'Print order list',
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
                  q: 'Can I record a deposit payment when creating an order?',
                  a: 'Yes. The Enter Order screen includes a payment section where the deposit method, bank, and amount are recorded at the time the order is created. The total payment is tracked against the order throughout its lifecycle.',
                },
                {
                  q: 'Can I attach images or files to a custom order?',
                  a: 'Yes. Each order supports file and image attachments. Design references, customer sketches, and specification documents can all be attached to the order record in EasyJewelry, keeping everything related to that order in one place.',
                },
                {
                  q: 'Can I update the order status as production progresses?',
                  a: 'Yes. The status of any order can be updated at any time from the View Orders screen. Moving an order from In Process to Ready takes a single click, and the updated status is immediately visible to all users with access to the orders module.',
                },
                {
                  q: 'Can I see all custom orders across all branches?',
                  a: 'Yes. The View Orders screen shows all orders across every branch. You can filter by branch, status, date, or search by customer name to find any specific order.',
                },
                {
                  q: 'Is there a limit on what I can write in the order details field?',
                  a: 'No. The order details field is a free-text area that accepts as much information as needed. Full specifications, pricing details, weight requirements, purity, and any other relevant details can all be entered for every custom order.',
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
              Never lose track of a custom order again
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              Custom orders are where jewelry businesses build the strongest customer relationships — and where the most operational mistakes happen when tracking is done manually. EasyJewelry's Orders module gives every custom order a proper home in your jewelry store management software, with a clear status, a full history, a payment record, and the ability to attach any file or image relevant to that order. From the moment the customer places the order to the moment they collect it, everything is visible, everything is tracked, and nothing gets lost.
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