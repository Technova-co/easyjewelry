import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function MultiBranchPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Multi-Branch Management"
              description="Run every jewelry store location from one system. One login, one dashboard, complete visibility across all your branches."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                Growing a jewelry business across multiple locations is a significant achievement. But with growth comes complexity. Stock moves between branches. Staff at different locations need different levels of access. Sales happen simultaneously at multiple counters. Financial reports need to reflect the whole business, not just one store. EasyJewelry's multi-branch management is built to handle all of this from a single centralized system, without the need for separate software at each location.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                From the screenshot above you can see how straightforward it is to add a new branch. Name, email, landline, mobile, and address. Once added, that branch is immediately live in the system. Staff can be assigned to it, stock can be allocated to it, and sales from that location will appear in your reports instantly. There is no complex setup, no IT involvement, and no delay before a new location is operational in EasyJewelry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you can do */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">What multi-branch management covers</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Every aspect of running multiple jewelry store locations is handled within EasyJewelry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Add unlimited branches',
                  desc: 'There is no cap on the number of locations you can add. Whether you have two stores or twenty, each branch gets its own profile with name, contact details, and address.',
                },
                {
                  title: 'Centralized dashboard',
                  desc: 'View sales, stock, and financial activity across all branches from one screen. You do not need to log in and out of separate accounts for each location.',
                },
                {
                  title: 'Branch-level stock tracking',
                  desc: 'Inventory is tracked per branch. You always know exactly what stock is sitting at each location, what has been transferred, and what needs to be restocked.',
                },
                {
                  title: 'Inter-branch stock transfers',
                  desc: 'Move stock from one branch to another with a full transfer record. The sending branch stock decreases and the receiving branch stock increases automatically.',
                },
                {
                  title: 'Branch-level financial reports',
                  desc: 'Pull sales reports, purchase reports, and financial summaries filtered by individual branch. Understand exactly how each location is performing.',
                },
                {
                  title: 'Consolidated reports',
                  desc: 'See the combined performance of all branches together. Total sales, total purchases, total outstanding balances across your entire jewelry business in one view.',
                },
                {
                  title: 'Branch-level user access',
                  desc: 'Assign staff to specific branches and control exactly what they can see and do. A salesman at Branch 1 only sees Branch 1 data. A manager can see all branches.',
                },
                {
                  title: 'Export and print branch data',
                  desc: 'Branch data can be exported to CSV, Excel, or PDF and printed directly from the system, making it easy to share reports with branch managers or accountants.',
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
                  Why multi-branch management is different for jewelry businesses
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    In generic retail, managing multiple locations mainly means tracking product quantities across stores. In jewelry, it is far more involved. Each branch may have its own gold rate, its own karigar network, its own vendor relationships, and its own mix of retail and wholesale customers. Stock is measured by weight and purity, not just unit count. A transfer between branches is not just moving a box of items — it is moving a specific weight of gold at a specific karat, which affects the pure metal balance at both locations.
                  </p>
                  <p>
                    EasyJewelry handles all of this. When stock moves between branches, the gross weight, pure weight, and karat are all tracked in the transfer record. Branch-level metal balances stay accurate. Financial reports reflect the real position of each location without manual reconciliation.
                  </p>
                  <p>
                    For jewelry wholesalers with multiple trading locations, this level of accuracy is essential. Knowing the pure gold balance at each branch, who owes what at each location, and how much metal is in transit between branches is the difference between a controlled operation and a chaotic one.
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
                      type: 'Jewelry Retailers with Multiple Stores',
                      desc: 'Manage stock, staff, and sales at every retail location without needing separate software or manual consolidation of reports.',
                    },
                    {
                      type: 'Gold and Silver Wholesalers',
                      desc: 'Track pure metal balances, vendor accounts, and trade invoices across all wholesale locations from one system.',
                    },
                    {
                      type: 'Jewelry Manufacturers with Multiple Workshops',
                      desc: 'Assign karigar job work to specific branches, track metal issued and returned per location, and monitor production across workshops.',
                    },
                    {
                      type: 'Business Owners Managing Remotely',
                      desc: 'Because EasyJewelry is fully web-based, you can monitor every branch from anywhere. No need to be physically present to know what is happening at each location.',
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
                'Unlimited branch locations',
                'Add branch with name, email and contact details',
                'Branch-level inventory tracking',
                'Inter-branch stock transfers with full audit',
                'Branch-level sales and purchase reports',
                'Consolidated reports across all branches',
                'Branch-level user access and permissions',
                'Branch filtering on all reports',
                'Export branch data to CSV, Excel and PDF',
                'Print branch reports directly',
                'Branch metal balance tracking',
                'Branch-level karigar and job work records',
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
                  q: 'Is there a limit on how many branches I can add?',
                  a: 'No. EasyJewelry supports unlimited branch locations. You can add as many as your business needs.',
                },
                {
                  q: 'Can staff at one branch see data from another branch?',
                  a: 'Only if you give them permission. Role-based access control lets you restrict each staff member to their own branch or grant access across multiple branches depending on their role.',
                },
                {
                  q: 'How do stock transfers between branches work?',
                  a: 'You create a transfer record specifying the items, weights, and karats being moved. The sending branch stock decreases and the receiving branch stock increases automatically, with a full transfer audit trail.',
                },
                {
                  q: 'Can I see a combined report for all branches?',
                  a: 'Yes. Consolidated reports show the combined sales, purchases, and financial position across all your branches in one view.',
                },
                {
                  q: 'Does multi-branch work for wholesalers as well as retailers?',
                  a: 'Yes. Multi-branch management works for both retail and wholesale operations. Metal balances, vendor accounts, and trade invoices are all tracked per branch for wholesale businesses.',
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
              One system for every location you run
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              Whether you are running two stores or twenty, EasyJewelry gives you complete visibility and control across all of them from one login. No switching between systems, no manual consolidation, no gaps in your data. Every branch is connected, every transaction is tracked, and every report reflects the real position of your entire jewelry business.
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