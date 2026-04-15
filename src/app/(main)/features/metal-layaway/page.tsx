import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function MetalLayawayPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Jewelry Layaway Management"
              description="Let customers reserve any jewelry piece with a deposit and pay the balance over time. Every layaway is tracked by item, customer, price, and payment status."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                Layaway is one of the most powerful sales tools available to a jewelry retailer. A customer who cannot pay the full price today can reserve the piece they want, pay a deposit, and settle the balance over an agreed period. The item is held for them, the sale is secured, and your business collects revenue that would otherwise have walked out the door. EasyJewelry's layaway management module is built directly into your jewelry store management software, making it simple to enter, track, and settle layaway agreements without any separate paperwork or manual records.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                From the screenshot above you can see how clean the Enter Layaway process is. The date, customer, item selected by barcode scan, and agreed price are all captured in one popup. Once saved, the layaway appears in your active layaway list where you can track payments, view the outstanding balance, and process the final settlement when the customer pays in full. The item is reserved in your jewelry inventory system from the moment the layaway is created, so it cannot be accidentally sold to another customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">How layaway works in EasyJewelry</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              The layaway process in EasyJewelry is designed to be fast at the counter and easy to manage over time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Create the layaway',
                  desc: 'Select the customer, scan the item barcode to identify the piece, enter the agreed price in the correct currency, and save. The layaway is created instantly and the item is reserved in your jewelry inventory management system.',
                },
                {
                  step: '02',
                  title: 'Track payments over time',
                  desc: 'As the customer makes installment payments, each payment is recorded against the layaway. The outstanding balance updates automatically so you always know exactly how much remains to be paid on each active layaway.',
                },
                {
                  step: '03',
                  title: 'Settle and complete the sale',
                  desc: 'When the customer pays the final balance, the layaway is marked as complete. The item moves from reserved to sold, and a final sales invoice is generated through your jewelry billing system with the full transaction history.',
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

      {/* Why it matters */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <Heading as="h2">
                  Why layaway matters for jewelry retailers
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    Jewelry is a high-value purchase. Many customers who want a piece simply cannot pay the full amount in a single transaction. Without a layaway option, those customers leave empty-handed and often do not return. With layaway built into your jewelry point-of-sale system, you convert those customers into confirmed buyers the moment they commit to a deposit.
                  </p>
                  <p>
                    The challenge with layaway in most jewelry stores is that it is managed manually. A notebook entry, a paper receipt stapled to the item tag, a reminder written on a calendar. This creates risk — items get mislaid, payments get forgotten, disputes arise over what was paid. EasyJewelry eliminates all of this by managing every layaway digitally within your jewelry store management software.
                  </p>
                  <p>
                    Every layaway is linked to a specific customer account. Every payment made is recorded with a date and amount. The item is identified by its barcode, which links it back to the full item record including karat, weight, and purity. When the final payment is made, the transition from layaway to completed sale happens within the same jewelry ERP system, with no manual steps required.
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
                      desc: 'Convert more browsers into buyers by offering flexible payment terms at the point of sale. Every layaway is tracked in your jewelry POS software with no paper records needed.',
                    },
                    {
                      type: 'Gold and Diamond Stores',
                      desc: 'High-value pieces like diamond sets and heavy gold jewelry are natural candidates for layaway. Customers who want these pieces but need time to pay are served without losing the sale.',
                    },
                    {
                      type: 'Multi-Branch Jewelry Businesses',
                      desc: 'Layaways created at one branch are visible centrally. Management can see all active layaways across every location, outstanding balances, and payment histories from one screen.',
                    },
                    {
                      type: 'Store Managers',
                      desc: 'View all active layaways, identify overdue payments, and follow up with customers based on accurate data from your jewelry management software rather than manual notes.',
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
                'Create layaway with date, customer and item',
                'Item selection by barcode scan',
                'Agreed price with currency selection',
                'Item reserved in inventory on creation',
                'Installment payment recording',
                'Outstanding balance tracking per layaway',
                'Full payment history per layaway',
                'Multi-currency layaway support',
                'View and manage all active layaways',
                'Final settlement with invoice generation',
                'Branch-level layaway tracking',
                'Customer account linked to each layaway',
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
                  q: 'Is the item reserved when a layaway is created?',
                  a: 'Yes. The moment a layaway is saved in EasyJewelry, the item is marked as reserved in your jewelry inventory system. It cannot be sold to another customer until the layaway is cancelled or completed.',
                },
                {
                  q: 'Can I record multiple payments against a single layaway?',
                  a: 'Yes. Each installment payment is recorded separately against the layaway with the date and amount. The outstanding balance updates with every payment so you always have an accurate picture of what remains.',
                },
                {
                  q: 'Can layaway be used for any item in my jewelry store?',
                  a: 'Yes. Any item in your jewelry inventory that has a barcode tag can be placed on layaway. The barcode is scanned at the time of creating the layaway to identify the exact piece.',
                },
                {
                  q: 'What happens when the layaway is fully paid?',
                  a: 'When the final payment is received, the layaway is settled and a sales invoice is generated through the jewelry billing system. The item moves from reserved to sold and the full transaction history is recorded.',
                },
                {
                  q: 'Can I see all active layaways across all my branches?',
                  a: 'Yes. The layaway management screen shows all active layaways with customer details, item details, total price, amount paid, and outstanding balance. Branch filtering lets you view layaways per location or across all locations.',
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
              Turn every interested customer into a confirmed sale
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              Layaway is one of the simplest and most effective ways to increase sales in a jewelry retail business. When a customer can reserve the piece they want and pay over time, you stop losing sales to affordability and start building a pipeline of confirmed future revenue. EasyJewelry's layaway management is fully integrated into your jewelry store management software, so every reservation is tracked, every payment is recorded, and every settlement converts cleanly into a completed sale.
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