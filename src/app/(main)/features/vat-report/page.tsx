import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function VatReportPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="VAT Report"
              description="A complete VAT breakdown across every transaction type in your jewelry business. Sales, purchases, returns, and expenses all summarized in one report with date range filtering and drill-down to every underlying transaction."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                VAT compliance is a serious obligation for jewelry businesses operating in VAT-registered jurisdictions. Filing accurately requires knowing exactly how much VAT was collected on sales, how much was paid on purchases and expenses, and what the net VAT position is for any given period. EasyJewelry's VAT Report compiles all of this automatically from the transaction records in your jewelry ERP software, presenting a clean summary broken down by transaction type with date range filtering and the ability to drill into every individual transaction behind each figure.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                From the screenshot above you can see the seven VAT categories the report covers — VAT on Sales, VAT on Sales Return, VAT on Purchase, VAT on Purchase Return, VAT on Expense, VAT Paid, and VAT Received — each with its total amount and a View button that opens the detailed transaction list behind that figure. The date range filter lets you run the report for any period, making it straightforward to prepare your quarterly or monthly VAT filing from the data already captured in your jewelry store management software without any manual calculations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VAT categories */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">What the VAT Report covers</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Every VAT-relevant transaction type in your jewelry business is captured in a separate category, giving you a clear picture of your output tax, input tax, and net VAT position.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'VAT on Sales',
                  desc: 'The total output VAT collected on all jewelry sales invoices within the selected date range. This is the VAT you have charged to customers on taxable jewelry sales and is the primary output tax figure for your VAT filing. In the screenshot this shows 94,881.77 AED — the total VAT collected on all sales for the period.',
                },
                {
                  title: 'VAT on Sales Return',
                  desc: 'The VAT amount reversed on customer returns within the period. When a customer returns a piece and the VAT on the original sale is credited back, this figure captures the total VAT reversed through all sales returns. This reduces your net output tax obligation.',
                },
                {
                  title: 'VAT on Purchase',
                  desc: 'The total input VAT paid on jewelry purchases from suppliers and vendors. This is the VAT you have been charged on taxable purchases and is the primary input tax figure you can offset against your output tax in your VAT return.',
                },
                {
                  title: 'VAT on Purchase Return',
                  desc: 'The VAT amount reversed on items returned to suppliers within the period. When a purchase return is processed in EasyJewelry, the VAT on the original purchase is reversed and captured here, reducing your input tax recovery for the period.',
                },
                {
                  title: 'VAT on Expense',
                  desc: 'The total VAT paid on business expenses recorded through the Cheques module — rent, utilities, government fees, and other operating costs that carry VAT. This input tax on expenses is also recoverable against your output tax in most VAT regimes.',
                },
                {
                  title: 'VAT Paid and VAT Received',
                  desc: 'Direct VAT payments made to the tax authority and VAT refunds received from the tax authority. These are recorded when you make your periodic VAT payment or receive a refund, completing the full VAT accounting picture in your jewelry store software.',
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

      {/* Drill down */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">
              Drill into every transaction behind each VAT figure
            </Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Every row in the VAT Report has a View button that opens the full list of individual transactions behind that figure. This is what makes the report useful for both filing and audit purposes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Transaction-level detail',
                  desc: 'Clicking View on any VAT category opens every individual invoice, bill, return, or expense that contributed to that total. Each transaction shows its date, reference, party, and VAT amount so you can verify the components of any VAT figure.',
                },
                {
                  title: 'Traceable to source documents',
                  desc: 'Every transaction in the drill-down links back to the original document in EasyJewelry — the sales invoice, the purchase bill, the return record, or the expense entry. If a figure needs investigation, the source document is one click away.',
                },
                {
                  title: 'Export per category',
                  desc: 'The detail view for each VAT category can be exported to CSV, Excel, or PDF. This lets you share specific VAT breakdowns with your accountant or tax advisor without exporting your entire financial records.',
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
                  Why VAT reporting matters for jewelry businesses
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    Jewelry businesses in VAT jurisdictions face a specific compliance challenge. Sales are high-value, transaction volumes can be significant, and the VAT treatment of different products varies — standard-rated manufactured jewelry, potentially zero-rated or exempt bullion, and tax-free raw metal purchases all need to be treated correctly and reported accurately.
                  </p>
                  <p>
                    EasyJewelry captures VAT at the transaction level throughout the system. Every sales invoice calculates VAT per line item based on the taxable status set on each item in your jewelry inventory management software. Every purchase bill applies the correct tax treatment — standard, tax-free, or exempt — as set at the time of purchase. Every expense records its VAT component. By the time you open the VAT Report, all of this is already compiled and ready.
                  </p>
                  <p>
                    For jewelry businesses using generic accounting software or spreadsheets for VAT, the filing process typically involves exporting data, running calculations, and manually building the return. In EasyJewelry, the VAT Report is generated automatically from transaction data already in the system. Set the date range, run the report, and the figures are ready for your filing.
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
                      type: 'VAT-Registered Jewelry Retailers',
                      desc: 'Generate your quarterly or monthly VAT summary in minutes. Output tax on sales, input tax on purchases and expenses, all compiled automatically from your jewelry store software transaction records.',
                    },
                    {
                      type: 'Gold and Silver Wholesalers',
                      desc: 'Handle the mixed VAT treatment of your transactions correctly — taxable jewelry sales, tax-free bullion purchases, and VAT on expenses all tracked separately and reported in the right category.',
                    },
                    {
                      type: 'Accountants and Tax Advisors',
                      desc: 'Access the VAT Report with date range filtering and drill down to individual transactions for any figure that needs verification. Export the detail for review without needing access to the full system.',
                    },
                    {
                      type: 'Multi-Branch Jewelry Businesses',
                      desc: 'VAT data is compiled across all branches. The report gives you the consolidated VAT position for your entire jewelry operation, which is essential for businesses filing a single VAT return covering multiple locations.',
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
                'VAT on Sales total',
                'VAT on Sales Return total',
                'VAT on Purchase total',
                'VAT on Purchase Return total',
                'VAT on Expense total',
                'VAT Paid total',
                'VAT Received total',
                'Net VAT position total',
                'Date range filter',
                'Transaction type filter',
                'Drill-down to individual transactions per category',
                'Export each category to CSV, Excel and PDF',
                'Print VAT report',
                'Branch-level VAT data',
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
                  q: 'Does the VAT Report cover all transaction types?',
                  a: 'Yes. The report covers VAT on sales, sales returns, purchases, purchase returns, and expenses — all seven VAT-relevant transaction types in EasyJewelry. Every VAT amount captured across the system flows into the relevant category automatically.',
                },
                {
                  q: 'Can I run the report for a specific filing period?',
                  a: 'Yes. The date range filter lets you set an exact From and To date to match your VAT filing period — monthly, quarterly, or any other period your tax authority requires.',
                },
                {
                  q: 'Can I see the individual transactions behind any VAT total?',
                  a: 'Yes. Every category has a View button that opens the full transaction detail behind that total. Each transaction shows its date, reference, party, and VAT amount.',
                },
                {
                  q: 'How does EasyJewelry handle tax-free purchases for raw metal?',
                  a: 'Purchases marked as tax-free in the Metal Purchases module do not contribute to the VAT on Purchase total. Only taxable purchases appear in that figure, keeping your input tax recovery accurate.',
                },
                {
                  q: 'Can I export the VAT Report for my accountant?',
                  a: 'Yes. The full report and each category drill-down can be exported to CSV, Excel, or PDF. You can share the complete VAT summary or individual category breakdowns depending on what your accountant or tax advisor needs.',
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
              VAT filing made simple for jewelry businesses
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              VAT compliance does not have to be a manual exercise at the end of every quarter. EasyJewelry captures VAT on every transaction throughout the year — every sale, every purchase, every return, every expense — and compiles it into a ready-to-use VAT Report the moment you need it. Set your date range, review the figures, drill into anything that needs verification, and your filing data is ready. No spreadsheets, no manual calculations, no reconciliation work.
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