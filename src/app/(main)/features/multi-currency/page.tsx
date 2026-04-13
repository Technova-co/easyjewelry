import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function MultiCurrencyPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Multi-Currency Support"
              description="Sell and buy in any currency. Set your exchange rates, designate a primary currency, and let EasyJewelry handle the rest across every transaction."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                Jewelry is a global trade. Gold prices are denominated in US dollars. Buyers and sellers operate across borders. Vendors invoice in their local currency. Customers pay in whatever they carry. For a jewelry business operating in the real world, single-currency software is a daily frustration. EasyJewelry's multi-currency system lets you add as many currencies as your business needs, set the exchange rate for each one, designate a primary currency, and transact freely across all of them.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                From the screenshot above you can see how simple the setup is. You add a currency by its abbreviation, set the exchange rate against your primary currency, and save. The currency is immediately available across your entire system — in invoices, purchase bills, loan records, layaway plans, and financial reports. The primary currency flag means all your reporting and balances are consolidated in one base currency regardless of what currency individual transactions were made in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">How multi-currency works in EasyJewelry</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              The currency system is designed to be simple to manage and powerful in practice.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Add your currencies',
                  desc: 'Enter the currency abbreviation such as USD, GBP, AED, or SAR and set the exchange rate against your primary currency. Add as many currencies as your business trades in.',
                },
                {
                  step: '02',
                  title: 'Set your primary currency',
                  desc: 'One currency is designated as primary. This is the base currency your reports, balances, and financial summaries are calculated in. All other currencies are converted against it.',
                },
                {
                  step: '03',
                  title: 'Transact in any currency',
                  desc: 'Once currencies are set up, every transaction in EasyJewelry can be made in any of your configured currencies. Invoices, purchases, loans, layaways, and payments all support multi-currency.',
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
                  Why multi-currency matters for jewelry businesses
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    The jewelry trade has always been international. Gold is priced in US dollars on world markets. A jewelry store in the UAE might buy from a manufacturer in India, sell to a customer from Europe, and receive payment in three different currencies in the same day. A wholesale trader might invoice domestic clients in AED while issuing export invoices in USD.
                  </p>
                  <p>
                    Without multi-currency support, businesses are forced to do mental conversions, maintain separate records for different currencies, or accept inaccuracies in their financial reporting. All of these approaches create risk. Exchange rate errors accumulate over time. Balances become unreliable. Reconciliation at month end becomes a significant manual exercise.
                  </p>
                  <p>
                    EasyJewelry solves this by letting you manage exchange rates centrally and apply them consistently across every transaction. When the rate changes, you update it in one place and it flows through to all new transactions automatically. Your primary currency reports always reflect accurate converted values.
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
                      type: 'Jewelry Retailers in Tourist Areas',
                      desc: 'Serve international customers in their own currency. Issue invoices in USD, EUR, or GBP without manual conversion or separate records.',
                    },
                    {
                      type: 'Gold and Silver Wholesalers',
                      desc: 'Buy raw metal priced in USD while invoicing domestic trade customers in local currency. Both are tracked accurately in EasyJewelry.',
                    },
                    {
                      type: 'Jewelry Exporters',
                      desc: 'Issue export invoices in the buyer currency while keeping your books in your home currency. Exchange rates are applied consistently to every transaction.',
                    },
                    {
                      type: 'Multi-Country Operations',
                      desc: 'If your business operates across countries with different currencies, each branch can transact in the local currency while reporting rolls up to a single primary currency.',
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
                'Add unlimited currencies',
                'Set exchange rate per currency',
                'Designate a primary currency',
                'Multi-currency sales invoices',
                'Multi-currency purchase bills',
                'Multi-currency loan records',
                'Multi-currency layaway plans',
                'Multi-currency payment recording',
                'Consolidated reports in primary currency',
                'Update exchange rates at any time',
                'Export currency data to CSV, Excel and PDF',
                'Currency abbreviation support for all major currencies',
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
                  q: 'How many currencies can I add?',
                  a: 'There is no limit. You can add as many currencies as your business trades in.',
                },
                {
                  q: 'Can I change exchange rates after they are set?',
                  a: 'Yes. You can update the exchange rate for any currency at any time. The updated rate applies to all new transactions going forward.',
                },
                {
                  q: 'What is the primary currency used for?',
                  a: 'The primary currency is the base currency for your financial reports and consolidated balances. All other currencies are converted to the primary currency for reporting purposes.',
                },
                {
                  q: 'Can I issue invoices in a currency different from my primary currency?',
                  a: 'Yes. Every invoice, purchase bill, loan, and layaway can be created in any currency you have configured. The system records the transaction in that currency and converts it to primary currency for reporting.',
                },
                {
                  q: 'Does multi-currency work across all branches?',
                  a: 'Yes. Currencies are configured at the account level and are available across all your branches. Each branch can transact in any configured currency.',
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
              Trade in any currency your business needs
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              The jewelry trade does not stop at borders and neither should your software. EasyJewelry's multi-currency support means you can serve international customers, trade with overseas suppliers, and run operations across multiple countries without any of the complexity that usually comes with it. Add your currencies, set your rates, and trade freely.
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