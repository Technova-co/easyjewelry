import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function BalanceSheetPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Balance Sheet"
              description="A complete financial snapshot of your jewelry business showing metal balances and currency balances side by side across every account category — partners, stock, parties, banks, liabilities, and VAT."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                A balance sheet tells you where your business stands financially at any given moment. For a jewelry business, that picture is more complex than for most industries because the financial position exists simultaneously in two units — metal weight in grams and currency in your operating denomination. EasyJewelry's Balance Sheet report presents both dimensions side by side for every account category, giving you a complete view of your jewelry business financial position that no generic accounting software can produce with the same level of metal-specific detail.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                The balance sheet shown above demonstrates exactly this. Every row shows both a Metal Balance in grams and a Currency Balance in AED. Metal Stock shows 142,498 grams of pure metal alongside its currency equivalent. Party Balance shows both the metal weight owed or owing across all customer and vendor accounts and the corresponding currency figure. Bank Balance shows cash and bank positions. VAT Liability shows the net VAT position. The total at the bottom gives you the complete financial position of the jewelry business in both units simultaneously — something unique to a purpose-built jewelry ERP software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What the balance sheet covers */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">What the Balance Sheet covers</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              The balance sheet is organized into two sections — Partners and Equities, and Stock and Liabilities — with every category showing both metal and currency positions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Partners and Equities',
                  desc: 'Shows the equity position of each business partner or owner account in both metal grams and currency. In the screenshot, Gold Center B1 shows a metal balance of negative 33,138 grams and a currency balance of negative 323,700 AED — reflecting the net position of that partner account across all transactions. Each partner account has a View button for drilling into the underlying transactions.',
                },
                {
                  title: 'Metal Stock',
                  desc: 'The total pure metal stock currently held across all inventory in your jewelry inventory management software, shown in grams. This figure represents the actual metal value of everything currently in your stock — every barcode-tagged piece, every bulk metal holding, and every raw material, totaled as pure weight.',
                },
                {
                  title: 'Metal Stock Making',
                  desc: 'The total making charge value embedded in your current inventory, shown in currency. This represents the labor and manufacturing value component of your stock — the portion of your inventory value that comes from making charges rather than raw metal cost.',
                },
                {
                  title: 'Party Balance',
                  desc: 'The net balance across all customer and vendor accounts in your jewelry store software, in both metal grams and currency. A negative party balance means more is owed to you than you owe. The combination of metal and currency party balances gives you the true receivables and payables position of your business.',
                },
                {
                  title: 'Bank Balance',
                  desc: 'The combined balance across all bank accounts and cash accounts configured in EasyJewelry. This is the total liquid currency position of your jewelry business at the time the report is generated.',
                },
                {
                  title: 'Liabilities and Assets',
                  desc: 'Current assets, fixed and deposit assets, current liabilities, and long-term liabilities are all captured as separate line items. Each can be drilled into to see the underlying account transactions that make up the balance.',
                },
                {
                  title: 'Loan',
                  desc: 'The total loan balance from your Loan Management module — gold or silver loans given against jewelry collateral, with the outstanding balance shown in both metal and currency.',
                },
                {
                  title: 'VAT Liability',
                  desc: 'The net VAT position of your jewelry business — the difference between VAT collected on sales and VAT paid on purchases and expenses. A negative figure means VAT is owed to the tax authority. This figure ties directly to the VAT Report in EasyJewelry.',
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
                  Why a dual metal and currency balance sheet is unique to jewelry businesses
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    Every standard accounting balance sheet shows financial position in currency only. For most businesses this is sufficient. For a jewelry business, it is incomplete. A jewelry business holds value in two forms simultaneously — the monetary value of cash, receivables, and liabilities, and the metal weight of gold, silver, and other precious metals held in inventory, in transit, and in party accounts.
                  </p>
                  <p>
                    When a customer owes you metal rather than cash, a standard balance sheet does not capture that correctly. When your stock value changes because the gold rate moved, a standard balance sheet does not reflect the metal weight that drives that change. EasyJewelry's balance sheet shows both, giving business owners, investors, and financial partners a complete picture of the jewelry business position that reflects how the business actually operates.
                  </p>
                  <p>
                    For jewelry businesses seeking financing, presenting a balance sheet that shows metal stock at weight alongside currency values is significantly more meaningful to a jeweler-focused lender or investor than a generic balance sheet that only shows monetary figures. The metal weight tells the story of what the business actually holds, independent of daily gold rate fluctuations.
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
                      type: 'Jewelry Business Owners',
                      desc: 'Get the complete financial position of your business in one screen. Metal stock, party balances, bank positions, liabilities, and VAT all visible simultaneously with both metal and currency figures.',
                    },
                    {
                      type: 'Business Partners and Investors',
                      desc: 'Review partner equity positions and the overall financial health of the jewelry business with the dual metal and currency balance sheet that reflects how value is actually held in the business.',
                    },
                    {
                      type: 'Accountants and Finance Teams',
                      desc: 'Use the balance sheet as the starting point for financial statement preparation. Every category can be drilled into for the underlying transaction detail, and the report exports to CSV, Excel, and PDF.',
                    },
                    {
                      type: 'Multi-Branch Jewelry Businesses',
                      desc: 'The balance sheet consolidates across all branches, giving a complete group-level financial position. Partner accounts, metal stock, and party balances across every location are all reflected in the totals.',
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
                'Partners and equities section',
                'Metal stock in grams',
                'Metal stock making in currency',
                'Party balance in metal and currency',
                'Bank and cash balance',
                'Current assets',
                'Fixed and deposit assets',
                'Current liabilities',
                'Long-term liabilities',
                'Loan balance in metal and currency',
                'VAT liability',
                'Total in metal grams and currency',
                'Drill-down to transactions per category',
                'Export to CSV, Excel and PDF',
                'Print balance sheet',
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
                  q: 'Why does the balance sheet show both metal and currency columns?',
                  a: 'Because jewelry businesses hold value in both forms simultaneously. Metal stock, party balances, and partner accounts all have both a metal weight component and a currency value. Showing both gives a complete and accurate picture of the business financial position.',
                },
                {
                  q: 'Can I drill into any category for the underlying transactions?',
                  a: 'Yes. Every row in the balance sheet has a View button that opens the individual account transactions behind that balance. You can verify any figure by reviewing the transactions that produced it.',
                },
                {
                  q: 'Does the balance sheet update in real time?',
                  a: 'Yes. The balance sheet reflects the current state of all accounts in EasyJewelry at the time it is generated. Every transaction posted through the system updates the relevant balance immediately.',
                },
                {
                  q: 'Does the VAT Liability on the balance sheet match the VAT Report?',
                  a: 'Yes. The VAT Liability on the balance sheet ties directly to the net VAT position calculated in the VAT Report. Both figures come from the same underlying transaction data in your jewelry ERP software.',
                },
                {
                  q: 'Can I export the balance sheet for investors or lenders?',
                  a: 'Yes. The balance sheet exports to CSV, Excel, and PDF and can be printed directly from the screen. The dual metal and currency format makes it more informative for jewelry-focused investors and lenders than a standard single-currency balance sheet.',
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
              The complete financial picture of your jewelry business
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              No generic accounting software can produce a balance sheet that shows your metal stock in grams alongside your currency balances. EasyJewelry does, because it is built from the ground up for the jewelry trade where value exists in both forms simultaneously. The balance sheet gives you the complete financial position of your jewelry business — metal and currency, assets and liabilities, partners and stock — all in one place, all updated in real time from your daily transaction records.
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