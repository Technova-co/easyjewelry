import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function PartiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Customer and Vendor Management with KYC"
              description="Add customers and vendors with complete profiles and built-in KYC compliance fields. Passport, residency status, source of funds, employment, and political connection — all captured in your jewelry store software."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                In the jewelry industry, knowing your customer is not just good business practice — it is a regulatory requirement in many jurisdictions. Anti-money laundering regulations in the US, UAE, UK, and across most major markets require jewelry businesses to collect and retain customer identification and due diligence information, particularly for high-value transactions. EasyJewelry's Parties module is built with this reality in mind. Every customer and vendor in your jewelry management software can be added with a complete KYC profile that captures the information compliance requires, stored digitally and accessible at any time.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                Beyond compliance, the Parties module is the foundation of your customer and vendor relationship management within your jewelry ERP software. Every transaction, every balance, every invoice, every payment, and every order is linked to a party. The party profile brings all of this together — contact details, transaction history, account balance, currency preference, branch assignment, and compliance documentation all in one place. Whether the party is a retail walk-in customer, a wholesale trade partner, or a vendor who supplies your store, EasyJewelry gives them a complete digital profile from the moment they are added.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KYC fields */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">KYC and compliance fields built into every party profile</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              EasyJewelry captures every field that jewelry business compliance programs typically require for customer due diligence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Passport and ID number',
                  desc: 'The government-issued identification number for the customer or vendor. For retail jewelry transactions above reporting thresholds, a copy of the passport or ID is typically required. Recording the document number in EasyJewelry creates a searchable record that can be retrieved for audit or regulatory reporting at any time.',
                },
                {
                  title: 'Nationality',
                  desc: 'The nationality of the party as declared at the time of onboarding. This is a standard KYC field in jewelry compliance programs, particularly in multi-national trading hubs where customer nationality is relevant for transaction monitoring and reporting.',
                },
                {
                  title: 'Place of birth',
                  desc: 'Place of birth is required in enhanced due diligence programs for high-value jewelry customers and for politically exposed persons screening. Recording it in your jewelry store software ensures it is available when compliance reviews require it.',
                },
                {
                  title: 'Residential status',
                  desc: 'Whether the party is a resident, non-resident, or has another residential classification. This affects the level of due diligence required in many jurisdictions and is a standard field in jewelry business AML compliance programs.',
                },
                {
                  title: 'Source of funds and wealth',
                  desc: 'The declared source of the funds being used for jewelry purchases. This is one of the most important KYC fields for high-value jewelry transactions. EasyJewelry captures this against the party record so it is documented from the first transaction and available for any subsequent compliance review.',
                },
                {
                  title: 'Political connection',
                  desc: 'Whether the party is a politically exposed person or has connections to politically exposed persons. This is a mandatory screening field for AML compliance in the jewelry trade. Recording it in your jewelry ERP software ensures PEP status is flagged and documented for every relevant customer.',
                },
                {
                  title: 'Employment status and details',
                  desc: 'The employment status and employer details of the customer. This supports the source of funds documentation and provides context for the level of purchasing activity expected from the customer, which is relevant for transaction monitoring.',
                },
                {
                  title: 'Birthday',
                  desc: 'Date of birth for identity verification and for customer relationship purposes. In jewelry retail, knowing customer birthdays enables personalized outreach for anniversary and birthday jewelry purchases.',
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

      {/* Party types and core fields */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">Party types and core profile fields</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Beyond KYC, every party profile in EasyJewelry captures the operational information your jewelry business needs to transact with them correctly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Party type',
                  desc: 'Each party is classified as Retail, Wholesale, or another type relevant to how your jewelry business transacts with them. The party type affects pricing, invoice format, and the level of account detail maintained against their profile.',
                },
                {
                  title: 'Contact and communication',
                  desc: 'Contact number with country code selection and email address are captured for every party. These are used for invoice delivery, payment reminders, and order status communications within your jewelry store management software.',
                },
                {
                  title: 'Currency preference',
                  desc: 'The preferred transaction currency for this party. When a party always transacts in USD, setting their currency preference means every invoice and payment for that party defaults to USD without manual selection each time.',
                },
                {
                  title: 'TRN — Tax Registration Number',
                  desc: 'The tax registration number for businesses and trade customers. This is required on B2B invoices in VAT-registered jurisdictions and is captured at the party level so it populates automatically on every invoice raised against that party.',
                },
                {
                  title: 'Branch assignment',
                  desc: 'The branch this party is associated with. In a multi-branch jewelry business, assigning customers and vendors to branches keeps account management clean and ensures each branch team manages their own party relationships.',
                },
                {
                  title: 'Address',
                  desc: 'The physical or registered address of the party. Required for formal invoice documentation, particularly for trade and wholesale customers where a registered business address appears on the invoice.',
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
                  Why KYC compliance matters specifically for jewelry businesses
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    The jewelry industry is one of the sectors most heavily scrutinized under anti-money laundering regulations globally. High-value portable assets, cash-intensive transactions, and international trade make jewelry businesses a focus for financial regulators in the US, EU, UAE, and most major markets. Jewelry businesses in the US are subject to Bank Secrecy Act reporting requirements for cash transactions above specific thresholds. In the UAE, CBUAE regulations require jewelry dealers to conduct customer due diligence on high-value transactions.
                  </p>
                  <p>
                    For a jewelry business using generic store management software, compliance is typically handled through separate paper forms or spreadsheets that have no connection to the transaction records. This creates a compliance gap where the KYC documentation exists in one place and the transaction history exists in another, making it difficult to demonstrate proper due diligence in the event of a regulatory review.
                  </p>
                  <p>
                    EasyJewelry solves this by building KYC fields directly into the party record in your jewelry ERP software. The customer profile that holds the KYC information is the same profile that every invoice, payment, and transaction is linked to. When a regulator asks for the due diligence documentation for a specific customer alongside their transaction history, both are in the same system and can be produced together.
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
                      desc: 'Collect and store customer KYC information against the same profile that holds their purchase history and account balance. Compliance documentation and transaction records are always in one place.',
                    },
                    {
                      type: 'Gold and Silver Wholesalers',
                      desc: 'Maintain compliant vendor and trade customer profiles with full due diligence documentation. Source of funds and political connection fields are particularly important for wholesale gold trading operations.',
                    },
                    {
                      type: 'High-Value Jewelry Businesses',
                      desc: 'Businesses dealing in high-value diamonds, certified pieces, and luxury jewelry face the highest compliance scrutiny. EasyJewelry captures every field needed for enhanced due diligence at the party level.',
                    },
                    {
                      type: 'Compliance Officers and Business Owners',
                      desc: 'All KYC fields are stored digitally against the party record and are searchable and exportable. Producing documentation for regulatory review or internal audit is straightforward from within your jewelry store software.',
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
                'Party name and type — Retail or Wholesale',
                'Contact number with country code',
                'Email address',
                'Currency preference per party',
                'Tax Registration Number (TRN)',
                'Branch assignment',
                'Address',
                'Place of birth',
                'Date of birth',
                'Passport and ID number',
                'Nationality',
                'Residential status',
                'Source of funds and wealth',
                'Political connection flag',
                'Employment status and details',
                'Description and notes field',
                'Full transaction history per party',
                'Account balance per party',
                'View and manage all parties',
                'Export party list to CSV, Excel and PDF',
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
                  q: 'Are KYC fields mandatory when adding a party?',
                  a: 'KYC fields in EasyJewelry can be completed at the time of adding the party or updated later. For new customers where due diligence is required before a high-value transaction, the fields can be completed before the first invoice is raised.',
                },
                {
                  q: 'Can I search parties by passport number or ID?',
                  a: 'Yes. The party search in EasyJewelry allows you to search across all party fields including the passport and ID number. This makes it easy to look up a customer by their identification document.',
                },
                {
                  q: 'What does the political connection field capture?',
                  a: 'The political connection field records whether a customer or vendor is a politically exposed person or has close associations with politically exposed persons. This is a required screening field under AML regulations in most jurisdictions where jewelry businesses operate.',
                },
                {
                  q: 'Can I export party KYC data for regulatory reporting?',
                  a: 'Yes. The party list including all profile fields can be exported to CSV, Excel, or PDF from the View Parties screen. This supports regulatory reporting, internal compliance audits, and external review requirements.',
                },
                {
                  q: 'Can the same party be used across multiple branches?',
                  a: 'Yes. Parties in EasyJewelry are available across all branches. A trade customer who transacts with multiple locations has one party profile with a consolidated transaction history and balance across all branches.',
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
              Build compliant customer and vendor profiles from day one
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              In the jewelry trade, compliance is not optional and customer relationships are everything. EasyJewelry's Parties module gives you both in one place. Every customer and vendor has a complete profile with the KYC fields your compliance program requires and the operational details your business needs to serve them well. Transaction history, account balances, invoice records, and due diligence documentation all live in the same party profile in your jewelry ERP software, making both customer service and regulatory compliance straightforward every day.
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