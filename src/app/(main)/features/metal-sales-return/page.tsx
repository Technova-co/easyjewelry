import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function MetalSalesReturnPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Jewelry Sales Return Management"
              description="Process customer returns with complete metal detail. Every return is recorded with purity, gross weight, pure weight, VAT, and the exchange rate at the time of the transaction."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                Returns are an unavoidable part of any jewelry business. A customer brings back a piece, the metal goes back into stock, and the financial records need to reflect the reversal accurately. In jewelry, this is more complex than simply crediting a price back to a customer. The gross weight and pure weight of the returned metal need to be re-entered into inventory. The VAT on the original sale needs to be reversed correctly. If the return is being processed at a different gold rate from the original sale, the exchange rate at the time of return needs to be recorded. EasyJewelry's Metal Sales Return module handles every one of these requirements in a single, structured return document.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                The return screen in EasyJewelry mirrors the sales invoice screen in its level of detail. Every returned item is entered with its full metal profile: item, description, purity, quantity, gross weight, pure weight, unit making, total making, subtotal, VAT, and line total. The totals section shows the full return summary including total gross weight, total pure weight, subtotal, VAT, rounding, and the credit amount due to the customer. The current gold rate per ounce and the exchange rate are both visible at the top of the screen, ensuring the return is processed at the correct rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How a jewelry return works */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">How a jewelry sales return works in EasyJewelry</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              The return process is structured to ensure every financial and metal accounting implication of the return is handled correctly from the moment it is entered.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Enter the return details',
                  desc: 'A new sales return is created with an auto-generated return number and an optional reference. The date, customer, and currency are selected. The current gold rate and exchange rate are displayed at the top of the screen and are recorded against the return at the time of processing.',
                },
                {
                  step: '02',
                  title: 'Add the returned items',
                  desc: 'Each returned item is added to the return document with its full metal profile. Item, description, purity, quantity, gross weight, pure weight, unit making charge, total making charge, subtotal, VAT, and line total are all entered. The system calculates totals automatically as items are added.',
                },
                {
                  step: '03',
                  title: 'Confirm and process',
                  desc: 'The return summary shows total quantity, total gross weight, total pure weight, subtotal, VAT, rounding, and the credit total. Once confirmed, the returned metal goes back into inventory, the customer account is credited, and the return appears in the daily report and all relevant financial reports.',
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

      {/* Fixed vs unfixed returns */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">
              Fixed and unfixed returns for jewelry businesses
            </Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Just as metal sales can be fixed price or rate-based, returns in EasyJewelry support both types so the return is processed at the correct pricing basis.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Fixed returns
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  A fixed return is used when the item was originally sold at a fixed price and the return credit is based on that same agreed price. The credit amount is predetermined and does not fluctuate with the current gold rate. This is the standard approach for retail jewelry returns where the customer receives back what they paid.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  Fixed returns are straightforward to process. The item is entered, the fixed price is applied, and the credit is calculated. The metal goes back into stock at its original values and the customer account is credited with the return amount.
                </p>
              </div>

              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Unfixed returns
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  An unfixed return is used when the credit amount is calculated based on the current gold or silver rate at the time of the return rather than the original sale price. This is common in wholesale metal trading where both parties agree that the return value is determined by the market rate on the day the metal comes back.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  EasyJewelry displays the current rate per ounce and the exchange rate at the top of the return screen. When an unfixed return is processed, the pure weight of the returned metal is multiplied by the current rate to calculate the credit value. The rate is recorded on the return document so there is a clear record of the basis on which the return was valued.
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
                  Why jewelry returns need a dedicated module
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    In generic retail software, a return is simply a negative sale. The system reverses the line items and credits the customer. For non-jewelry products, this is adequate. For jewelry, it misses almost everything that matters.
                  </p>
                  <p>
                    When a gold piece is returned to a jewelry store, the gross weight and pure weight of that metal needs to go back into the metal balance correctly. If the return is being valued at today's rate rather than the original sale price, the financial credit needs to reflect the current rate, not the historic one. The VAT reversal needs to be calculated on the correct taxable base. The exchange rate at the time of return needs to be recorded if the transaction is in a foreign currency.
                  </p>
                  <p>
                    None of this can be handled by a simple credit note in generic software. EasyJewelry's Metal Sales Return module captures every one of these details because it is built on the same metal accounting foundation as the original sales invoice. A return in EasyJewelry is as detailed and as accurate as the original sale.
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
                      desc: 'Process customer returns quickly and accurately. The returned piece goes back into stock with the correct metal values and the customer receives an accurate credit on their account.',
                    },
                    {
                      type: 'Gold and Silver Wholesalers',
                      desc: 'Handle trade returns with unfixed pricing. The return is valued at the current gold rate, recorded with the rate used, and the metal balance updated accordingly.',
                    },
                    {
                      type: 'Multi-Branch Jewelry Stores',
                      desc: 'Returns can be processed at any branch. Each return is tagged to the branch where it was processed, keeping branch-level inventory and financial records accurate.',
                    },
                    {
                      type: 'Accountants and Finance Managers',
                      desc: 'Every return appears in the daily report, the sales return report, and the relevant financial accounts. VAT reversals are calculated and recorded correctly for clean tax reporting.',
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
                'Auto-generated sales return number',
                'Optional sales return reference',
                'Fixed and unfixed return types',
                'Customer selection per return',
                'Multi-currency return support',
                'Exchange rate recorded at time of return',
                'Live gold rate displayed on return screen',
                'Item, description and purity per line',
                'Gross weight and pure weight per line',
                'Unit making and total making per line',
                'VAT calculation per line and return total',
                'Rounding adjustment on return total',
                'Total gross weight and pure weight summary',
                'Customer account credit on return',
                'Metal returned to inventory automatically',
                'Return appears in daily report',
                'View and manage all past returns',
                'Branch-level return tracking',
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
                  q: 'Does the returned metal go back into my inventory automatically?',
                  a: 'Yes. When a sales return is confirmed in EasyJewelry, the gross weight and pure weight of the returned items are added back to your metal inventory automatically. Your stock levels and metal balance are updated without any manual adjustment.',
                },
                {
                  q: 'What is the difference between a fixed and unfixed return?',
                  a: 'A fixed return credits the customer at a predetermined price regardless of the current gold rate. An unfixed return calculates the credit based on the current market rate at the time of the return. Both options are available from the same return screen.',
                },
                {
                  q: 'Is VAT reversed correctly on a jewelry return?',
                  a: 'Yes. VAT is calculated on each line item of the return based on the taxable status of the item. The return document shows the VAT amount being reversed, which is used for tax reporting and reconciliation.',
                },
                {
                  q: 'Can I process a return in a different currency from the original sale?',
                  a: 'Yes. The return screen allows currency selection and displays the current exchange rate. The return is processed in the selected currency and the exchange rate at the time of the return is recorded on the document.',
                },
                {
                  q: 'Where do returns appear in my reports?',
                  a: 'Sales returns appear in the daily report under the Sales Returns section, in the sales return history, and in the relevant financial accounts. They are tracked separately from sales so your gross sales figures are never inflated by returns.',
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
              Handle every jewelry return accurately and completely
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              Returns in a jewelry business are not just customer service events. They are metal accounting transactions that affect inventory, financial balances, VAT records, and customer accounts simultaneously. EasyJewelry's Metal Sales Return module handles all of these implications in one structured process, so every return is recorded correctly, every credit is accurate, and your metal balance always reflects the true position of your jewelry inventory.
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