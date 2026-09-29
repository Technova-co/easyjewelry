import Link from 'next/link';
import { Work_Sans } from 'next/font/google';
import { ArrowRight, Check, CircleCheck, KeyRound, LockKeyhole, MapPin, ShieldCheck, Users } from 'lucide-react';
import './user-management.css';
import { userManagementFaqs } from './content';

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
});

const roles = [
  {
    number: '01',
    icon: Users,
    name: 'Salesmen',
    description: "Everything they need to serve customers, process sales, issue invoices, and handle payments. Nothing they don't.",
    scope: 'Sales & customers',
    detail: 'No purchase costs or financial reports',
  },
  {
    number: '02',
    icon: MapPin,
    name: 'Branch Managers',
    description: 'A complete view of their location, from stock levels and daily reports to staff activity and customer accounts.',
    scope: 'Assigned branch',
    detail: 'Focused on their own location',
  },
  {
    number: '03',
    icon: KeyRound,
    name: 'Accountants',
    description: 'Access to journals, accounts, financial records, and reporting, without the ability to change operational data.',
    scope: 'Finance & reporting',
    detail: 'No inventory modifications',
  },
  {
    number: '04',
    icon: ShieldCheck,
    name: 'Owners & Administrators',
    description: 'The full picture across every branch, module, transaction, and report in your jewelry business.',
    scope: 'All branches',
    detail: 'Complete business visibility',
  },
];

const steps = [
  { n: '01', title: 'Create an account', copy: 'Add a name and email, then set a password or generate a secure one automatically.' },
  { n: '02', title: 'Choose a branch', copy: 'Connect each team member to the location where they work, or assign managers to multiple branches.' },
  { n: '03', title: 'Set their role', copy: "Select the access level that fits their responsibilities. They'll see only what they need." },
];

const included = [
  'Unlimited staff accounts',
  'Secure logins for every user',
  'Automatic password generation',
  'Branch-level data isolation',
  'Role-based module access',
  'Multi-branch manager access',
  'Edit roles and details anytime',
  'Deactivate users when needed',
];

export default function UserManagementPage() {
  return (
    <div className={`user-management ${workSans.variable}`}>
      <main>
        <section className="site-container grid gap-10 py-16 md:grid-cols-[.95fr_1.05fr] md:items-center md:gap-16 md:py-24">
          <div>
            <nav aria-label="Breadcrumb" className="section-label inline-flex items-center gap-2">
              <span className="h-px w-6 bg-primary" aria-hidden="true" />
              <ol className="m-0 inline-flex list-none items-center p-0">
                <li>
                  <Link href="/features">Features</Link>
                </li>
                <li className="px-1.5" aria-hidden="true">
                  /
                </li>
                <li aria-current="page">Team access</li>
              </ol>
            </nav>
            <h1 className="display-title mt-7 max-w-[650px] text-[clamp(3.5rem,5.5vw,6.5rem)]">
              The right access for <em className="text-primary">every person.</em>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-ink-soft">
              Bring your whole team into EasyJewelry. Give each person a role, assign their branch, and keep the information that matters in the right hands.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link href="/request-demo" className="um-btn um-btn-brand um-btn-lg">
                Book a Free Demo <ArrowRight size={16} />
              </Link>
              <a href="#how-it-works" className="group inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-semibold text-primary">
                See how it works <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/home/easyjewelry.png"
              width={1200}
              height={912}
              alt="EasyJewelry user management on phone, laptop, and tablet for staff working across branches"
              className="aspect-[1.2] w-full rounded-md bg-gold-soft object-contain p-6"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-md border border-border bg-background/95 p-4 shadow-lg md:bottom-7 md:left-7 md:right-auto md:max-w-[280px]">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-gold-soft text-primary">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold">Your team, your rules</p>
                <p className="mt-0.5 text-xs text-muted-foreground">Clear access at every level</p>
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-mt-28 border-y border-border bg-muted py-16 md:py-22" id="how-it-works">
          <div className="site-container">
            <div className="grid gap-5 md:grid-cols-[1fr_1.2fr] md:items-end">
              <div>
                <span className="section-label">Simple from day one</span>
                <h2 className="display-title mt-4 text-5xl md:text-6xl">A place for everyone on your team.</h2>
              </div>
              <p className="max-w-lg text-sm leading-7 text-muted-foreground md:ml-auto">
                Setting up a new user takes less than a minute. Three clear steps give every team member the access they need from their first login.
              </p>
            </div>
            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {steps.map((step) => (
                <article key={step.n} className="border border-border bg-background p-7 md:min-h-56">
                  <span className="font-display text-4xl text-primary">{step.n}</span>
                  <div className="mt-8 h-px bg-border" />
                  <h3 className="mt-6 text-base font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="site-container py-18 md:py-28">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="section-label">Built around your business</span>
              <h2 className="display-title mt-4 max-w-2xl text-5xl md:text-6xl">
                Four roles. <em className="text-primary">One clear picture.</em>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              {"From the sales floor to the owner's desk, everyone sees what helps them do their best work."}
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {roles.map((role) => (
              <article key={role.name} className="role-card flex min-h-[250px] flex-col justify-between rounded-md border border-border bg-card p-7 md:p-9">
                <div className="flex items-start justify-between">
                  <div className="flex size-11 items-center justify-center rounded-md bg-background text-primary">
                    <role.icon size={21} strokeWidth={1.7} />
                  </div>
                  <span className="font-display text-2xl text-primary">{role.number}</span>
                </div>
                <div className="mt-7">
                  <h3 className="font-display text-[32px] leading-none">{role.name}</h3>
                  <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">{role.description}</p>
                </div>
                <div className="mt-7 flex flex-wrap gap-2 border-t border-border pt-5 text-xs">
                  <span className="rounded-sm bg-background px-3 py-2 font-semibold text-primary">{role.scope}</span>
                  <span className="rounded-sm bg-background px-3 py-2 text-muted-foreground">{role.detail}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-gold-soft py-18 md:py-24">
          <div className="site-container grid gap-12 md:grid-cols-[.85fr_1.15fr] md:gap-20">
            <div>
              <span className="section-label">Control without complication</span>
              <h2 className="display-title mt-4 text-5xl md:text-6xl">
                Keep the valuable things <em className="text-primary">protected.</em>
              </h2>
              <p className="mt-6 text-sm leading-7 text-ink-soft">
                Jewelry businesses handle valuable stock, sensitive financial records, and customer information. Not everyone should see everything.
              </p>
              <p className="mt-4 text-sm leading-7 text-ink-soft">
                With branch and role-based access, sales staff can focus on serving customers while managers and owners keep the visibility they need. Each location stays organized, accountable, and secure.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex flex-col justify-between rounded-md bg-background p-7 sm:row-span-2">
                <LockKeyhole className="text-primary" size={28} strokeWidth={1.5} />
                <div>
                  <h3 className="mt-10 font-display text-3xl">Only what they need</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">Restricted modules stay out of sight for users without permission.</p>
                </div>
              </div>
              <div className="rounded-md bg-background p-7">
                <MapPin className="text-primary" size={26} strokeWidth={1.5} />
                <h3 className="mt-7 font-display text-3xl">Branch by branch</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">Keep teams focused on the data for their assigned locations.</p>
              </div>
              <div className="rounded-md bg-background p-7">
                <CircleCheck className="text-primary" size={26} strokeWidth={1.5} />
                <h3 className="mt-7 font-display text-3xl">Easy to adjust</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">Update access as your people and business grow.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="site-container grid gap-10 py-18 md:grid-cols-[.8fr_1.2fr] md:gap-20 md:py-24">
          <div>
            <span className="section-label">Everything in one place</span>
            <h2 className="display-title mt-4 text-5xl md:text-6xl">Thoughtfully covered, down to the details.</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
              The essentials for bringing your team on board and keeping access current.
            </p>
          </div>
          <div className="grid gap-x-8 sm:grid-cols-2">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3 border-b border-border py-4 text-sm font-medium">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gold-soft text-primary">
                  <Check size={13} strokeWidth={2.5} />
                </span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-muted py-18 md:py-24">
          <div className="site-container grid gap-10 md:grid-cols-[.75fr_1.25fr] md:gap-24">
            <div>
              <span className="section-label">Good to know</span>
              <h2 className="display-title mt-4 text-5xl md:text-6xl">Common questions.</h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">A little more detail about managing your team with EasyJewelry.</p>
            </div>
            <div className="border-t border-border">
              {userManagementFaqs.map(({ question, answer }) => (
                <details key={question} className="faq-item group border-b border-border">
                  <summary className="flex items-center justify-between gap-6 py-6 text-left text-sm font-semibold md:text-base">
                    {question}
                    <span className="faq-plus flex size-7 shrink-0 items-center justify-center rounded-full border border-primary text-xl font-normal text-primary">+</span>
                  </summary>
                  <p className="max-w-xl pb-6 pr-10 text-sm leading-7 text-muted-foreground">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="site-container py-20 text-center md:py-28">
          <span className="section-label">Make room for your whole team</span>
          <h2 className="display-title mx-auto mt-5 max-w-3xl text-5xl md:text-7xl">
            Everyone in the right place. <em className="text-primary">Everything in its place.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-muted-foreground">
            Whether you have one store or many, make it easy for each person to work confidently with the right access.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/request-demo" className="um-btn um-btn-brand um-btn-lg">
              Book a Free Demo <ArrowRight size={16} />
            </Link>
            <Link href="/features" className="um-btn um-btn-outline um-btn-lg">
              View All Features
            </Link>
          </div>
        </section> */}
      </main>
    </div>
  );
}
