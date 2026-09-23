import Link from 'next/link';
import { Manrope, Sora } from 'next/font/google';
import './cloud-backup.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export default function CloudBackupPage() {
  return (
    <div className={`cloud-backup ${sora.variable} ${manrope.variable} bg-background text-foreground`}>
      <main className="bg-muted px-4 py-10 font-body sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-4">
          <section className="reveal col-span-12 rounded-[8px] border border-border bg-background p-7 sm:p-10 lg:col-span-7">
            <span className="inline-flex rounded-full bg-accent px-3 py-1 font-body text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              Automatic Cloud Backup
            </span>
            <h1 className="mt-5 max-w-[24ch] text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Every sale, invoice, and inventory record—automatically protected.
            </h1>
            <p className="mt-4 max-w-[48ch] font-body leading-7 text-muted-foreground">
              Your jewelry business data is backed up every hour to a secure cloud location. No manual exports, no reminders, no guesswork.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/request-demo" className="cb-btn cb-btn-primary">
                Request Demo
              </Link>
              <a href="#how-it-works" className="cb-btn cb-btn-outline">
                See how it works
              </a>
            </div>
          </section>

          <section className="reveal col-span-12 flex flex-col justify-between rounded-[8px] bg-foreground p-7 text-background [animation-delay:150ms] sm:p-8 lg:col-span-5">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.14em] text-background/50">Backup status</span>
              <span className="flex items-center gap-2 text-xs font-medium">
                <span className="pulse-dot size-2 rounded-full bg-primary" />
                Live
              </span>
            </div>
            <div className="mt-8">
              <div className="font-display text-5xl font-semibold">100%</div>
              <p className="mt-2 text-sm text-background/60">Business data backed up</p>
            </div>
            <div className="mt-8 space-y-3 text-sm">
              <Status label="Backup frequency" value="Every hour" />
              <Status label="Location" value="Secure cloud" />
              <Status label="Manual work" value="None" />
            </div>
          </section>

          <section
            id="how-it-works"
            className="reveal col-span-12 scroll-mt-36 rounded-[8px] border border-border bg-background p-7 [animation-delay:250ms] sm:p-8 lg:col-span-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">How the backup works</p>
            <h2 className="mt-2 font-display text-2xl font-semibold">Set it once. EasyJewelry handles the rest.</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Step number="01" title="Set your frequency">
                Choose hourly or any schedule that suits your store.
              </Step>
              <Step number="02" title="Enter your email">
                Receive backup notifications outside the system.
              </Step>
              <Step number="03" title="Runs automatically">
                Every scheduled backup happens without intervention.
              </Step>
            </div>
          </section>

          <section className="reveal col-span-12 flex flex-col justify-between rounded-[8px] bg-primary p-7 text-primary-foreground [animation-delay:350ms] sm:p-8 lg:col-span-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/70">Why it matters</p>
              <h2 className="mt-4 max-w-[18ch] text-balance font-display text-2xl font-semibold leading-tight">
                One computer should never hold your whole business.
              </h2>
            </div>
            <p className="mt-8 text-sm leading-6 text-primary-foreground/85">
              Fire, theft, crashes, and accidental deletion no longer put weeks of financial records at risk.
            </p>
          </section>

          <section className="reveal col-span-12 rounded-[8px] border border-border bg-background p-7 [animation-delay:350ms] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Who benefits most</p>
            <h2 className="mt-2 font-display text-2xl font-semibold">Protection shaped for jewelry businesses</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Audience title="Single Store Owners">
                Your business history is protected without exports or IT knowledge.
              </Audience>
              <Audience title="Multi-Branch Operations">
                Every branch is backed up centrally, wherever your stores are.
              </Audience>
              <Audience title="Wholesalers and Traders">
                High-volume transactions and account records remain recoverable.
              </Audience>
            </div>
          </section>

          <section className="reveal col-span-12 flex flex-col items-start justify-between gap-6 rounded-[8px] border border-border bg-muted p-7 [animation-delay:350ms] sm:flex-row sm:items-center sm:p-8">
            <div>
              <h2 className="font-display text-2xl font-semibold">Recovery without the panic.</h2>
              <p className="mt-2 max-w-[60ch] text-sm leading-6 text-muted-foreground">
                If a device fails, your business data stays safe and fully recoverable. Download a backup whenever you need it.
              </p>
            </div>
            <Link href="/request-demo" className="cb-btn cb-btn-dark shrink-0">
              See this on your shop
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}

function Status({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-t border-background/10 pt-3">
      <span className="text-background/60">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function Step({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <article className="rounded-[8px] bg-muted p-5">
      <div className="font-display text-3xl font-semibold text-primary">{number}</div>
      <h3 className="mt-3 font-body text-base font-semibold">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">{children}</p>
    </article>
  );
}

function Audience({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="rounded-[8px] border border-border p-5">
      <h3 className="font-body text-base font-semibold">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">{children}</p>
    </article>
  );
}
