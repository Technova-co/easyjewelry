import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function CloudBackupPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Automatic Cloud Backup"
              description="Your jewelry business data is backed up automatically, every hour, to a secure cloud location."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                A jewelry business runs on data. Every invoice, every inventory record, every customer balance, every metal transaction represents real money. Losing any of it to a hardware failure, accidental deletion, or system crash is not just inconvenient — it can set your business back weeks. EasyJewelry eliminates that risk entirely with automatic cloud backup that runs on a schedule you control, without any manual intervention required.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                Unlike desktop software where your data lives on a single computer, EasyJewelry stores and backs up your data in the cloud. Whether your device breaks, gets stolen, or simply stops working, your business data is safe and fully recoverable. You set the backup frequency, provide your email address, and EasyJewelry handles the rest automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">How the backup works</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              The backup system is simple to configure and fully automatic once set up.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Set your backup frequency',
                  desc: 'Use the slider to choose how often your data is backed up. You can set it anywhere from every 1 hour to every 24 hours depending on how active your store is.',
                },
                {
                  step: '02',
                  title: 'Enter your backup email',
                  desc: 'Provide the email address where backup notifications and files should be sent. This gives you a direct copy of your data outside the system.',
                },
                {
                  step: '03',
                  title: 'Backup runs automatically',
                  desc: 'From that point forward, EasyJewelry backs up your data on the schedule you set. You can also trigger a manual backup at any time by clicking Download Backup Now.',
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
                  Why backup matters for jewelry businesses
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    Jewelry businesses deal with high-value inventory and complex financial records. A single day of transactions might include dozens of metal sales invoices, purchase bills, customer payments, karigar job work records, and metal exchange entries. Recreating even one day of this data manually is a significant undertaking. Recreating a week or a month is practically impossible.
                  </p>
                  <p>
                    Most jewelry stores that run on desktop software or spreadsheets have no backup at all. Their entire business history sits on one computer. If that computer fails, the data is gone. EasyJewelry's cloud backup means your data is never in just one place, and it is never dependent on the health of a single device.
                  </p>
                  <p>
                    For multi-branch jewelry businesses, the stakes are even higher. Stock records, inter-branch transfers, consolidated financial reports — all of this accumulates over time and becomes increasingly valuable. Automatic backup protects years of business history without requiring any action from you or your team.
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
                      type: 'Single Store Owners',
                      desc: 'Your entire business history is protected automatically. No IT knowledge required, no manual exports to remember.',
                    },
                    {
                      type: 'Multi-Branch Operations',
                      desc: 'Data from all branches is backed up centrally. One backup covers your entire operation regardless of how many locations you run.',
                    },
                    {
                      type: 'Wholesalers and Traders',
                      desc: 'High-volume metal transactions, vendor accounts, and pure metal balances are all included in the backup. Nothing is left out.',
                    },
                    {
                      type: 'Accountants and Finance Managers',
                      desc: 'Use the download backup feature to keep a local copy of financial records for auditing, tax filing, or external reporting.',
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

      {/* What is backed up */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">What gets backed up</Heading>
            <p className="text-offWhite/80 mt-4 mb-8">
              Every piece of data in your EasyJewelry account is included in the backup.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                'All sales invoices and invoice history',
                'Purchase bills and purchase history',
                'Customer accounts and balances',
                'Vendor accounts and balances',
                'Inventory and stock records',
                'Metal transactions and metal balances',
                'Karigar job work records',
                'Cheques and bank transfers',
                'Exchange records',
                'Loan and layaway records',
                'Scheme records',
                'Financial reports and journals',
                'User accounts and permissions',
                'Branch data and settings',
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
                  q: 'How often is my data backed up?',
                  a: 'You control the frequency using the backup settings slider. You can set it to back up as frequently as every 1 hour or as infrequently as every 24 hours.',
                },
                {
                  q: 'Where is my backup sent?',
                  a: 'Backups are sent to the email address you specify in the backup settings. You can also download a backup manually at any time using the Download Backup Now button.',
                },
                {
                  q: 'What happens if I lose my device?',
                  a: 'Because EasyJewelry is cloud-based, your data is not stored on your device. You can log in from any device and your full business history will be there.',
                },
                {
                  q: 'Can I trigger a manual backup?',
                  a: 'Yes. The Download Backup Now button lets you trigger an immediate backup at any time, independent of your scheduled frequency.',
                },
                {
                  q: 'Is the backup the same for all branches?',
                  a: 'Yes. A single backup covers all your branches. All inventory, financial records, and transaction history across every location is included.',
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
              Your business data is too valuable to leave unprotected
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              Years of invoices, customer records, metal balances, and financial history represent the backbone of your jewelry business. EasyJewelry's automatic backup means that data is always safe, always recoverable, and never dependent on a single device. Set it once and never think about it again.
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