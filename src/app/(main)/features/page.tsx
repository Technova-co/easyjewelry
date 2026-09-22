import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    absolute: 'Features | EasyJewelry Jewelry Management Software',
  },
  description:
    'Explore EasyJewelry features for inventory, barcode and RFID, sales, accounting, multi-branch operations, reporting, and Shopify.',
  openGraph: {
    title: 'Features | EasyJewelry',
    description:
      'One calibrated system for jewelry inventory, sales, metal transactions, accounting, and multi-branch operations.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const features = [
  { category: 'Operations', title: 'Daily Report', href: '/features/daily-report', description: 'A complete snapshot of sales, purchases, payments, returns, exchanges, and balances for any selected day.' },
  { category: 'Data', title: 'Automatic Cloud Backup', href: '/features/cloud-backup', description: 'Schedule secure backups at your preferred frequency and receive confirmation by email.' },
  { category: 'Scale', title: 'Multi-Branch Management', href: '/features/multi-branch', description: 'Manage unlimited locations, staff, stock, sales, and finance from one central system.' },
  { category: 'Finance', title: 'Multi-Currency Support', href: '/features/multi-currency', description: 'Set exchange rates and buy, sell, or settle accounts in any currency.' },
  { category: 'Security', title: 'User Access Control', href: '/features/user-management', description: 'Assign staff to branches and control exactly what each person can see and do.' },
  { category: 'Sales', title: 'Metal Sales & Jewelry Invoicing', href: '/features/metal-sales', description: 'Create retail and wholesale invoices with live gold rates, VAT, and payment collection.' },
  { category: 'Purchasing', title: 'Metal Purchases & Gold Buying', href: '/features/metal-purchases', description: 'Buy old gold, purchase from vendors, print tags, and trace every piece to its source.' },
  { category: 'Sales', title: 'Jewelry Sales Returns', href: '/features/metal-sales-return', description: 'Process returns with full metal detail, VAT reversal, and live rate recording.' },
  { category: 'Sales', title: 'Jewelry Layaway Management', href: '/features/metal-layaway', description: 'Reserve pieces with deposits and track every payment, customer, and status.' },
  { category: 'Inventory', title: 'Metal Transfers Between Branches', href: '/features/metal-transfers', description: 'Move gold and silver between stores with instant inventory and balance updates.' },
  { category: 'Inventory', title: 'Bulk Jewelry Stock Transfer', href: '/features/bulk-metal-transfer', description: 'Scan multiple tagged pieces and transfer them to another branch in one transaction.' },
  { category: 'Metal', title: 'Metal Exchange & Gold Conversion', href: '/features/metal-exchanges', description: 'Track weight in, weight out, purity changes, and refining losses in one document.' },
  { category: 'Inventory', title: 'Jewelry Location Tracking', href: '/features/inventory-locations', description: 'Assign every tagged item to a display or storage location and print location tags.' },
  { category: 'Metal', title: 'Metal Fixing', href: '/features/metal-fixing', description: 'Convert balances between metal weight and currency at the current gold rate.' },
  { category: 'Inventory', title: 'Barcode Inventory Register', href: '/features/metal-barcodes', description: 'Review origin, weight, charge, location, availability, and movement history per piece.' },
  { category: 'Inventory', title: 'Stock Count & Audit', href: '/features/metal-stocktakings', description: 'Scan barcodes and see found, missing, gross-weight, and pure-weight discrepancies live.' },
  { category: 'Finance', title: 'Metal Transactions', href: '/features/metal-transactions', description: 'Pay or receive gold and silver against customer and vendor accounts.' },
  { category: 'Finance', title: 'Currency Transactions', href: '/features/currency-transactions', description: 'Record cash, cheque, card, Zelle, and bank-wire payments and receipts.' },
  { category: 'Sales', title: 'Custom Jewelry Orders', href: '/features/orders', description: 'Track specifications, deposits, and production status from received to ready.' },
  { category: 'Finance', title: 'Internal Bank Transfers', href: '/features/bank-transfers', description: 'Document cash-to-bank and account-to-account movements with instant balances.' },
  { category: 'Compliance', title: 'Customer & Vendor KYC', href: '/features/parties', description: 'Capture passport, residency, source-of-funds, and political-connection details.' },
  { category: 'Accounting', title: 'Expense & Cheque Management', href: '/features/cheques', description: 'Record operating expenses paid by cheque against the correct accounts.' },
  { category: 'Accounting', title: 'Journal Entries', href: '/features/journals', description: 'Post double-entry corrections, adjustments, and opening balances.' },
  { category: 'Reporting', title: 'Stock Aging Report', href: '/features/stock-aging', description: 'See age in days, gross weight, and pure weight for every tagged item.' },
  { category: 'Reporting', title: 'Profit & Loss by Barcode', href: '/features/making-pnl', description: 'Trace cost, selling price, and net result for every sold jewelry piece.' },
  { category: 'Reporting', title: 'VAT Report', href: '/features/vat-report', description: 'Review VAT across sales, purchases, returns, and expenses with drill-down detail.' },
  { category: 'Reporting', title: 'Sales & Purchase Reports', href: '/features/sales-report', description: 'Analyze activity by branch, staff member, customer, vendor, or item.' },
  { category: 'Accounting', title: 'Balance Sheet', href: '/features/balance-sheet', description: 'See metal and currency balances across stock, parties, banks, liabilities, and VAT.' },
  { category: 'Accounting', title: 'Chart of Accounts', href: '/features/charts-of-accounts', description: 'Explore every financial account with current balances and transaction drill-down.' },
  { category: 'Accounting', title: 'Customer & Vendor Statements', href: '/features/party-statement', description: 'Review complete transaction histories with running metal and currency balances.' },
  { category: 'Integration', title: 'Shopify Integration', href: '/features/shopify-integration', description: 'Sync selected inventory, prices, and availability between your stores and Shopify.' },
];

export default function FeaturesPage() {
  return (
    <div className="features-index min-h-screen bg-background font-dmSans text-foreground selection:bg-primary selection:text-primary-foreground">
      <main>
        <section className="hero-glow relative overflow-hidden">
          <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-5 pb-16 pt-16 sm:px-6 lg:gap-16 lg:pt-24">
            <div>
                <span className="inline-flex items-center rounded-full border border-gold/20 bg-gold/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-gold-light">Capability Index</span>
                <h1 className="mt-6 max-w-[20ch] font-urbanist text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">The operating system behind a thriving jewelry business.</h1>
                <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-muted-foreground">From the daily counter to the closing books, EasyJewelry holds inventory, sales, layaway, and multi-branch operations in one calibrated, auditable system.</p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href="/request-demo" className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground ring-1 ring-gold-light/50 transition-transform hover:-translate-y-px">Request Demo</Link>
                  <Link href="/watch-video" className="flex items-center gap-2 rounded-md border border-foreground/15 bg-foreground/[0.03] px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:border-gold/40 hover:text-gold-light">
                    <span className="grid size-4 place-items-center rounded-full border border-gold/40 text-[8px]">▶</span>
                    Watch Video
                  </Link>
                </div>
                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-foreground/10 pt-6 text-[13px] text-foreground/45">
                  <span>30+ capabilities</span>
                  <span>Multi-branch & multi-currency</span>
                  <span>Automatic cloud backup</span>
                </div>
            </div>

            <figure className="mx-auto w-full max-w-5xl">
              <Image
                src="/images/features/balance-sheet-demo.webp"
                alt="EasyJewelry company balance sheet showing metal and currency balances"
                width={1024}
                height={525}
                priority
                className="h-auto w-full rounded-xl border border-gold/20 shadow-[0_24px_80px_-32px_rgba(13,13,13,0.28)]"
              />
            </figure>
          </div>
        </section>

        <div className="border-y border-gold/10 bg-panel/40 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-7 gap-y-2 px-5 py-4 text-[13px] text-muted-foreground sm:px-6">
            <span className="text-gold-light">All capabilities</span>
            <span>Inventory</span>
            <span>Sales & Layaway</span>
            <span>Operations</span>
            <span>Accounting</span>
            <span>Integrations</span>
          </div>
        </div>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-gold-light">Core system</p>
              <h2 className="mt-2 max-w-[26ch] font-urbanist text-3xl font-semibold">Every piece, payment, and account in view.</h2>
            </div>
            <span className="hidden text-xs text-foreground/40 sm:block">Built for retail and wholesale</span>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <Link href="/features/metal-items" className="feature-card col-span-12 block p-7 md:col-span-7">
              <span className="feature-label">Inventory</span>
              <h3 className="mt-3 font-urbanist text-2xl font-semibold">Barcode & RFID inventory, counted with confidence.</h3>
              <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">Define every item by karat, purity, and code. Print Zebra tags, scan at point of sale, conduct live stock counts, and trace every movement.</p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <Metric value="RFID" label="tag-ready" />
                <Metric value="Live" label="stock count" />
                <Metric value="1" label="item history" />
              </div>
            </Link>
            <Link href="/features/metal-layaway" className="feature-card col-span-12 block p-7 md:col-span-5 md:row-span-2">
              <span className="feature-label">Sales</span>
              <h3 className="mt-3 font-urbanist text-xl font-semibold">Layaway, tracked to the last payment.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Reserve any piece with a deposit and follow every balance, customer, and status through completion.</p>
              <div className="mt-6 space-y-2">
                <LedgerRow label="Deposit received" value="$1,200" accent />
                <LedgerRow label="Balance due" value="$3,400" />
                <LedgerRow label="Payment status" value="On track" />
              </div>
            </Link>
            <Link href="/features/cloud-backup" className="feature-card col-span-6 block p-6 md:col-span-3">
              <span className="feature-label">Data</span>
              <h3 className="mt-3 font-urbanist text-base font-semibold">Automatic cloud backup</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">Scheduled protection with email confirmation.</p>
            </Link>
            <Link href="/features/metal-fixing" className="feature-card col-span-6 block p-6 md:col-span-4">
              <span className="feature-label">Metal</span>
              <h3 className="mt-3 font-urbanist text-base font-semibold">Fixing & transactions</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">Settle accounts in both metal and cash.</p>
            </Link>
            <Link href="/features/multi-branch" className="feature-card col-span-12 block p-6 md:col-span-5">
              <span className="feature-label">Scale</span>
              <h3 className="mt-3 font-urbanist text-lg font-semibold">Multi-branch & multi-currency</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Unlimited locations, consolidated control, and flexible exchange rates.</p>
            </Link>
          </div>
        </section>

        <section className="border-y border-gold/10 bg-panel/25">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6">
            <div className="mb-8 max-w-2xl">
              <p className="feature-label">Full capability index</p>
              <h2 className="mt-3 font-urbanist text-3xl font-semibold">Bench to books, without blind spots.</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">A connected toolkit for every transaction and every team across your jewelry business.</p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-lg border border-foreground/10 bg-foreground/10 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Link key={feature.title} href={feature.href} className="group block bg-background p-6 transition-colors hover:bg-panel">
                  <div className="flex items-center justify-between">
                    <span className="feature-label">{feature.category}</span>
                    <span className="font-urbanist text-xs text-foreground/25">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mt-4 font-urbanist text-base font-semibold transition-colors group-hover:text-gold-light">{feature.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{feature.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
          <div className="cta-glow relative overflow-hidden rounded-xl border border-gold/25 bg-foreground/[0.05] p-8 backdrop-blur-2xl sm:p-12 lg:p-14">
            <div className="relative max-w-[52ch]">
              <h2 className="font-urbanist text-3xl font-semibold leading-tight sm:text-4xl">See your own inventory, counted and closed, in a live walkthrough.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">See how EasyJewelry fits your branches, currencies, inventory, and reporting workflow.</p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link href="/request-demo" className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground ring-1 ring-gold-light/50 transition-transform hover:-translate-y-px">Request Demo</Link>
                <span className="text-[13px] text-foreground/45">+1 (415) 767-6362 · support@easyjewelry.co</span>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-md bg-background/50 p-3">
      <div className="font-urbanist text-base text-gold-light sm:text-lg">{value}</div>
      <div className="text-[10px] text-foreground/45 sm:text-[11px]">{label}</div>
    </div>
  );
}

function LedgerRow({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-md bg-background/45 px-3 py-2.5 text-xs">
      <span className="text-foreground/60">{label}</span>
      <span className={accent ? 'text-gold-light' : 'text-foreground'}>{value}</span>
    </div>
  );
}
