import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown } from 'lucide-react';
import './multi-branch.css';

const benefits = [
  { number: '01', title: 'Add unlimited branches', detail: 'From your second store to your twentieth, give each location its own profile and get it up and running in moments.' },
  { number: '02', title: 'One central dashboard', detail: 'See sales, stock, and financial activity across your entire business without switching between accounts.' },
  { number: '03', title: 'Know where every piece is', detail: 'Track inventory by branch, including the weight, purity, and karat of the jewelry at each location.' },
  { number: '04', title: 'Transfer stock with confidence', detail: 'Move stock between branches with a full record. Balances update automatically on both sides.' },
  { number: '05', title: 'Reports for every location', detail: 'View branch-level sales, purchases, and finances, or bring everything together in one consolidated report.' },
  { number: '06', title: 'The right access for your team', detail: 'Assign people to specific branches and control exactly which locations and information they can see.' },
];

const audience = [
  { title: 'Jewelry retailers', detail: 'Keep every counter, collection, and team in sync across your stores.' },
  { title: 'Gold & silver wholesalers', detail: 'Stay on top of metal balances, vendor accounts, and trade invoices at every location.' },
  { title: 'Manufacturers & workshops', detail: 'Follow karigar work and metal movement between workshops with clarity.' },
  { title: 'Owners on the move', detail: "Stay close to every branch, even when you're nowhere near the shop floor." },
];

const included = [
  'Unlimited branch locations',
  'Branch-level inventory tracking',
  'Inter-branch stock transfers',
  'Sales and purchase reports',
  'Consolidated financial reports',
  'Staff access and permissions',
  'Branch metal balances',
  'CSV, Excel, and PDF exports',
];

const faqs = [
  { question: 'Is there a limit on how many branches I can add?', answer: 'No. EasyJewelry supports unlimited branch locations, so you can add as many as your business needs.' },
  { question: 'Can staff at one branch see data from another?', answer: 'Only if you give them permission. Role-based access lets you limit staff to their own branch or give them access to multiple locations.' },
  { question: 'How do stock transfers between branches work?', answer: 'Create a transfer record for the items, weights, and karats being moved. Stock decreases at the sending branch and increases at the receiving branch, with a full audit trail.' },
  { question: 'Can I see a combined report for all branches?', answer: 'Yes. Consolidated reports bring together sales, purchases, and financial information from all your branches in one view.' },
  { question: 'Does this work for wholesalers too?', answer: 'Yes. Metal balances, vendor accounts, and trade invoices are tracked per branch for wholesale businesses as well as retail stores.' },
];

export default function MultiBranchPage() {
  return (
    <div className="multi-branch min-h-screen overflow-x-hidden bg-background text-foreground">
      <main>
        <section className="relative overflow-hidden border-b border-border pt-16 sm:pt-20 lg:pt-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-7 inline-flex items-center gap-3 font-display text-xs font-bold uppercase tracking-[.18em] text-gold-deep">
                <span className="h-px w-6 bg-primary" />
                Built for every branch
                <span className="h-px w-6 bg-primary" />
              </div>
              <h1 className="font-display text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[1.05] text-foreground">
                Multi-Branch
                <br />
                <span className="text-gold-deep">Management</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Run every jewelry store location from one system. One login, one dashboard, complete visibility across all your branches.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link href="/request-demo" className="mb-btn mb-btn-primary">
                  Book a Free Demo
                  <ArrowUpRight aria-hidden="true" />
                </Link>
                <a href="#explore" className="mb-btn mb-btn-outline">
                  Explore the features
                  <ArrowDown aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="relative mx-auto mt-12 max-w-5xl sm:mt-14">
              <img
                src="/images/home/easyjewelry.png"
                alt="EasyJewelry branch and inventory management displayed on a phone, laptop, and tablet"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section id="explore" className="scroll-mt-24 border-b border-border py-18 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-24 lg:px-12">
            <div>
              <span className="font-display text-xs font-bold uppercase tracking-[.18em] text-gold-deep">Connected by design</span>
              <h2 className="mt-5 max-w-md font-display text-4xl font-semibold leading-tight sm:text-5xl">
                More locations.
                <br />
                One clear picture.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-muted-foreground">
              <p>Growing a jewelry business across multiple locations is a significant achievement. But growth brings complexity: stock moves between branches, staff need different levels of access, and sales happen simultaneously at multiple counters.</p>
              <p>EasyJewelry brings every location together in one system. Add a branch, assign your team, allocate stock, and see its sales in your reports—without separate software or a complicated setup.</p>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 lg:flex-row lg:items-end">
              <div>
                <span className="font-display text-xs font-bold uppercase tracking-[.18em] text-gold-deep">The essentials</span>
                <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
                  Everything in its place.
                  <br />
                  Every branch in view.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-muted-foreground">
                All the moving parts of a multi-location jewelry business, working together.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((item) => (
                <article key={item.number} className="group flex min-h-60 flex-col border border-border bg-card p-7 transition-colors hover:border-primary sm:p-8">
                  <span className="font-display text-sm font-semibold text-gold-deep">{item.number} / 06</span>
                  <div className="mt-auto pt-12">
                    <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border py-18 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-24 lg:px-12">
            <div>
              <span className="font-display text-xs font-bold uppercase tracking-[.18em] text-gold-deep">Made for jewelry</span>
              <h2 className="mt-5 max-w-lg font-display text-4xl font-semibold leading-tight sm:text-5xl">
                Not all inventory is created equal.
              </h2>
              <div className="mt-8 h-1 w-15 bg-primary" />
            </div>
            <div className="space-y-5 text-base leading-8 text-muted-foreground">
              <p>In jewelry, moving stock means more than moving quantities. Every transfer carries a specific weight and karat, affecting the pure metal balance at both locations.</p>
              <p>EasyJewelry tracks gross weight, pure weight, and karat in every branch transfer. That means accurate metal balances and financial reports without manual reconciliation—whether you run retail stores, wholesale locations, or workshops.</p>
            </div>
          </div>
        </section>

        <section className="py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <span className="font-display text-xs font-bold uppercase tracking-[.18em] text-gold-deep">For your kind of business</span>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">One system, many ways to grow.</h2>
            <div className="mt-10 grid border-t border-border md:grid-cols-2">
              {audience.map((item, i) => (
                <div
                  key={item.title}
                  className={`border-b border-border py-7 md:py-9 ${i % 2 === 0 ? 'md:pr-12' : 'md:border-l md:pl-12'}`}
                >
                  <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary py-18 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-20 lg:px-12">
            <div>
              <span className="font-display text-xs font-bold uppercase tracking-[.18em] text-gold-deep">Included as standard</span>
              <h2 className="mt-4 max-w-sm font-display text-4xl font-semibold leading-tight sm:text-5xl">
                Every branch, fully supported.
              </h2>
            </div>
            <div className="grid gap-x-8 sm:grid-cols-2">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 border-b border-border py-4 text-sm font-medium">
                  <Check size={18} className="mt-0.5 shrink-0 text-gold-deep" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-18 sm:py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="text-center">
              <span className="font-display text-xs font-bold uppercase tracking-[.18em] text-gold-deep">Good to know</span>
              <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Common questions</h2>
            </div>
            <div className="mt-10 border-t border-border">
              {faqs.map((item) => (
                <details key={item.question} className="group border-b border-border">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-lg font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <ChevronDown className="size-5 shrink-0 text-gold-deep transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="max-w-2xl pb-6 text-sm leading-7 text-muted-foreground">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-foreground py-18 text-primary-foreground sm:py-24">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-9 px-5 sm:px-8 lg:flex-row lg:items-end lg:px-12">
            <div>
              <span className="font-display text-xs font-bold uppercase tracking-[.18em] text-primary">Ready when you are</span>
              <h2 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
                One system for every location you run.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-primary-foreground/75">
                From your first new store to your next twenty, see the whole picture with EasyJewelry.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/request-demo" className="mb-btn mb-btn-primary">
                Book a Free Demo
                <ArrowUpRight aria-hidden="true" />
              </Link>
              <Link href="/features" className="mb-btn mb-btn-outline-light">
                All features
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
