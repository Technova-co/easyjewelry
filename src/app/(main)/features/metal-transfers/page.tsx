import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function MetalTransfersPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Metal Transfers Between Branches"
              description="Move gold and silver between your store locations with a full transfer record. Item, purity, gross weight, pure weight, and location all captured per transfer."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                When you run multiple jewelry store locations, stock rarely stays in one place. A piece that is not selling at one branch might sell immediately at another. A customer at Branch 2 wants an item that is currently sitting at Branch 1. A wholesale shipment arrives at the main location and needs to be distributed across all branches. In each of these situations, the metal transfer between locations needs to be recorded with full detail so that both the sending and receiving branch have accurate inventory and metal balance figures. EasyJewelry's Metal Transfers module makes this process fast, precise, and fully auditable within your jewelry store management software.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                The Transfer Metal screen captures everything that matters about the movement. The item is selected by barcode scan. Quantity, gross weight, actual purity, and pure weight are all entered. The From branch and To branch are selected from your configured locations. Once saved, the sending branch inventory decreases and the receiving branch inventory increases automatically, with the transfer record serving as the audit trail for that movement. For businesses that need to move multiple items at once, EasyJewelry also supports multiple item transfers in a single transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">How metal transfers work in EasyJewelry</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Every metal transfer between branches is processed in a few steps and creates a permanent record in your jewelry inventory system.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Select the item and enter metal details',
                  desc: 'Scan the barcode of the item being transferred or select it from your jewelry inventory. Enter the quantity, gross weight, actual purity, and pure weight. These figures ensure the metal balance at both branches is updated with the correct values.',
                },
                {
                  step: '02',
                  title: 'Set the From and To locations',
                  desc: 'Select the branch the item is leaving from and the branch it is going to. All your configured store locations are available in the dropdown. The transfer can be between any two branches in your jewelry management software.',
                },
                {
                  step: '03',
                  title: 'Save and update both branches',
                  desc: 'Once saved, the item leaves the sending branch inventory and arrives at the receiving branch inventory automatically. The transfer record is stored with the date, item details, metal weights, and both branch names for full traceability.',
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

      {/* Single and multiple transfers */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">Single and multiple item transfers</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              EasyJewelry supports both single item transfers and bulk transfers of multiple items in one transaction, covering every scenario a multi-branch jewelry business faces.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Single item transfer
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  The Transfer Metal screen handles one item at a time with full detail. The item is identified by barcode, the metal details are entered, and the From and To branches are selected. This is the standard process for moving individual jewelry pieces between locations, such as sending a specific ring or necklace from one showroom to another to fulfil a customer request.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  Single item transfers are also used when moving raw metal between branches. A bar of gold or a lot of silver chain can be transferred with its gross weight, actual purity, and pure weight recorded, ensuring the metal balance at both branches reflects the movement accurately.
                </p>
              </div>

              <div className="bg-blue rounded-20 border border-lineColor/50 p-6">
                <h3 className="text-base font-semibold text-offWhite mb-3">
                  Multiple item transfer
                </h3>
                <p className="text-sm text-paragraph leading-relaxed mb-4">
                  The Multiple Transfer Metal option allows you to move several items from one branch to another in a single transaction. This is used when restocking a branch from the main location, redistributing seasonal inventory across stores, or sending a consignment of pieces to a branch for an event or sale.
                </p>
                <p className="text-sm text-paragraph leading-relaxed">
                  All items in a multiple transfer are recorded under a single transfer document. Each item has its own metal detail row with quantity, gross weight, actual purity, and pure weight. The total gross weight and total pure weight of the entire transfer are summarised at the bottom, giving a clear picture of the total metal movement between the two branches.
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
                  Why metal transfers need proper tracking in jewelry businesses
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    In a jewelry business, every gram of gold and silver needs to be accounted for at all times. When metal moves between branches without a proper transfer record, the inventory figures at both locations become inaccurate immediately. The sending branch shows stock it no longer has. The receiving branch shows a shortage. Reports become unreliable. Physical counts reveal discrepancies that take hours to investigate and reconcile.
                  </p>
                  <p>
                    For jewelry businesses using a gold sales software or jewelry ERP system, unrecorded inter-branch movements are one of the most common sources of stock discrepancies. EasyJewelry eliminates this by making the transfer process fast enough that staff will always record it rather than skip it. A transfer takes less than a minute to enter, and the result is a clean, accurate inventory record at both branches with a full audit trail.
                  </p>
                  <p>
                    The actual purity field in the transfer record is particularly important for wholesale jewelry operations. When bulk metal moves between locations, knowing the actual tested purity of that metal, not just the theoretical karat standard, ensures the pure metal balance at the receiving branch is calculated correctly. This level of accuracy is what separates a purpose-built jewelry inventory management system from generic stock transfer tools.
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
                      type: 'Multi-Branch Jewelry Retailers',
                      desc: 'Move pieces between showrooms to fulfil customer requests or balance stock across locations. Every transfer is recorded and visible to management from the central dashboard.',
                    },
                    {
                      type: 'Gold and Silver Wholesalers',
                      desc: 'Transfer bulk metal between trading locations with gross weight, actual purity, and pure weight all recorded. Your metal balance at every branch stays accurate regardless of how frequently stock moves.',
                    },
                    {
                      type: 'Jewelry Manufacturers with Multiple Workshops',
                      desc: 'Move raw metal and finished goods between production locations and retail branches with a full transfer audit trail. Know exactly where every gram of metal is at all times.',
                    },
                    {
                      type: 'Store and Inventory Managers',
                      desc: 'View the complete transfer history for any branch or item. Every movement is logged with date, item, weights, and both branch names, making stock reconciliation straightforward.',
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
                'Single item metal transfers',
                'Multiple item transfers in one transaction',
                'Item selection by barcode scan',
                'Quantity per transfer',
                'Gross weight per item',
                'Actual purity per item',
                'Pure weight per item',
                'From branch and To branch selection',
                'Automatic inventory update at both branches',
                'Pure metal balance update at both branches',
                'Full transfer audit trail',
                'View all past transfers with date and details',
                'Branch-level transfer history',
                'Live gold rate displayed on transfer screen',
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
                  q: 'Does the inventory update automatically at both branches when a transfer is saved?',
                  a: 'Yes. The sending branch inventory decreases and the receiving branch inventory increases automatically when a transfer is saved. No manual stock adjustment is needed at either location.',
                },
                {
                  q: 'Can I transfer multiple items between branches in one transaction?',
                  a: 'Yes. The Multiple Transfer Metal option lets you move several items from one branch to another in a single transfer document. Each item has its own metal detail row and the totals are summarised at the bottom.',
                },
                {
                  q: 'Why is actual purity recorded separately from the karat?',
                  a: 'Actual purity is the tested purity of the specific metal being transferred, which may differ slightly from the theoretical karat standard. Recording the actual purity ensures the pure metal balance at the receiving branch is calculated from the real metal content rather than an estimate.',
                },
                {
                  q: 'Can I see a history of all transfers between branches?',
                  a: 'Yes. The View Transfers screen shows every transfer with the date, item, metal details, sending branch, and receiving branch. You can filter by branch, date, or item to find any specific transfer.',
                },
                {
                  q: 'Is the transfer record useful for stock audits?',
                  a: 'Yes. The transfer audit trail is one of the most important tools for stock reconciliation in a multi-branch jewelry business. Every movement of metal between locations is recorded and can be referenced when investigating discrepancies during physical stock counts.',
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
              Every gram that moves between your branches, accounted for
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              In a multi-branch jewelry business, the accuracy of your inventory depends entirely on how well you track metal movements between locations. EasyJewelry's Metal Transfers module makes inter-branch transfers fast to record and impossible to lose track of. Every movement has a date, a full metal breakdown, and a clear record of where it came from and where it went. Your jewelry inventory management system stays accurate at every branch, at all times.
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