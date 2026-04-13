import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function UserManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="User Management and Access Control"
              description="Add every member of your team, assign them to a branch, give them a role, and control exactly what they can see and do in your jewelry store software."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                In a jewelry business, not every employee should have access to everything. A salesman on the shop floor needs to process sales and print invoices. A branch manager needs to see stock levels and daily reports. An owner needs full visibility across every branch, every account, and every transaction. Giving everyone the same level of access is a security risk and an operational problem. EasyJewelry's user management system lets you add staff, assign them to specific branches, and give each person exactly the level of access their role requires, nothing more and nothing less.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                From the screenshot above you can see how the Add User process works. Name, email, and password are set up for the user. A branch is selected to assign them to their working location. A role is chosen to define what they can access. Once saved, that user can log in immediately with their credentials and will only see the parts of the jewelry management software their role permits. Passwords can be generated automatically, making onboarding new staff fast and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">How user management works</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Setting up a new user in EasyJewelry takes less than a minute and gives you complete control over their access from day one.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Create the user account',
                  desc: 'Enter the staff member name and email address. Set a password manually or use the Generate Password button to create a secure password automatically.',
                },
                {
                  step: '02',
                  title: 'Assign to a branch',
                  desc: 'Select which branch this user belongs to. A salesman assigned to Branch 1 will only see data from Branch 1. A manager can be assigned across multiple branches.',
                },
                {
                  step: '03',
                  title: 'Select a role',
                  desc: 'Choose the role that matches their position in your jewelry business. The role determines which modules they can access, what they can create, and what they can view.',
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
                  Why access control matters in jewelry store software
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    Jewelry businesses handle high-value inventory, sensitive financial records, and customer account information. Unrestricted staff access to all of this creates real risk. A salesman who can see profit margins might share that information with competitors. A junior staff member who can edit invoices might make unauthorized changes. An employee with access to bank transfer records has visibility over financial data that should be restricted to management.
                  </p>
                  <p>
                    Role-based access control in jewelry store management software solves this by ensuring every person only sees what is necessary for their job. In EasyJewelry, a salesman can process sales, issue invoices, and handle customer payments. They cannot see purchase costs, profit reports, or other branch data. A manager can see their branch fully but cannot access owner-level consolidated reports unless explicitly granted that access.
                  </p>
                  <p>
                    For jewelry businesses with multiple branches, this level of control is essential. Each branch operates with its own team, and keeping that team focused on their location with appropriate access keeps operations clean, accountable, and secure.
                  </p>
                </div>
              </div>

              <div>
                <Heading as="h2">
                  Access levels built for jewelry businesses
                </Heading>
                <div className="mt-6 space-y-4">
                  {[
                    {
                      type: 'Salesmen',
                      desc: 'Process sales, issue invoices, handle payments, and serve customers. No access to reports, purchase costs, or financial summaries.',
                    },
                    {
                      type: 'Branch Managers',
                      desc: 'Full visibility over their assigned branch. Stock levels, daily reports, staff activity, and customer accounts all within their branch.',
                    },
                    {
                      type: 'Accountants',
                      desc: 'Access to financial records, journals, accounts, and reports without the ability to modify inventory or operational data.',
                    },
                    {
                      type: 'Owners and Administrators',
                      desc: 'Full access across all branches, all modules, and all reports. Complete visibility over the entire jewelry business operation.',
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
                'Add unlimited users',
                'Name, email and password per user',
                'Auto password generation',
                'Branch assignment per user',
                'Role assignment per user',
                'Role-based module access control',
                'View and manage all users',
                'Edit user details and roles at any time',
                'Delete or deactivate users',
                'Branch-level data isolation per user',
                'Secure login for every staff member',
                'Multi-branch user access for managers',
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
                  q: 'How many users can I add?',
                  a: 'There is no limit on the number of users. You can add every member of your team across all branches.',
                },
                {
                  q: 'Can a user be assigned to more than one branch?',
                  a: 'Yes. Users can be assigned to multiple branches depending on their role. A manager overseeing several locations can have access to all of them.',
                },
                {
                  q: 'Can I change a user role after they have been created?',
                  a: 'Yes. You can edit any user at any time and change their branch assignment, role, or password.',
                },
                {
                  q: 'What happens if a salesman tries to access a restricted module?',
                  a: 'Restricted modules are not visible to users who do not have access. The salesman will not see reports, purchase costs, or any other data outside their permitted scope.',
                },
                {
                  q: 'Is this suitable for a jewelry business with multiple branches and many staff?',
                  a: 'Yes. The user management system is specifically designed for multi-branch jewelry businesses with large teams. Each staff member is assigned to their branch with the appropriate role, keeping operations clean and secure at every location.',
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
              Give every team member the right access for their role
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              A jewelry business runs on trust, and trust is built when access is controlled. EasyJewelry's user management system means every member of your team has exactly the access they need to do their job, and nothing they should not see. From a single store with two staff to a multi-branch jewelry operation with dozens of employees, every user is managed, every role is defined, and every login is secure.
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