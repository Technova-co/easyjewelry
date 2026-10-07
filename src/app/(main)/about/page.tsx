import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import Heading from '@/components/ui/heading';
import { researchItems } from '@/data/aboutData';
import { aboutFaqs } from './content';
import './about.css';

const work = [
  {
    title: 'Inventory',
    href: '/features/metal-items',
    body: 'Karat, weight, and tags for every piece, from the safe to the showcase.',
  },
  {
    title: 'Billing',
    href: '/features/metal-sales',
    body: 'Retail and wholesale invoices with making charges, VAT, and the gold rate.',
  },
  {
    title: 'Finance',
    href: '/features/balance-sheet',
    body: 'Metal and currency balances, so the books match what is in stock.',
  },
  {
    title: 'Online store',
    href: '/features/shopify-integration',
    body: 'Selected inventory and prices shared with Shopify from the same system.',
  },
];

const audiences = [
  { title: 'Retailers', body: 'One counter or many branches, with stock, sales, and staff in one place.' },
  { title: 'Wholesalers', body: 'Weight, purity, and trade invoices for gold and silver sold in bulk.' },
  { title: 'Manufacturers', body: 'Metal moving through the workshop, then out to the stores that sell it.' },
];

const ceoImage = {
  src: '/images/about/farhad-sayed.jpg',
  alt: 'Farhad Sayed, founder and CEO of Technova',
};

const demoButton =
  'button-primary inline-flex min-h-11 items-center justify-center px-[22px] py-3 text-center text-sm font-medium leading-normal tracking-[0.1px] text-white rounded-[10px] relative z-1 overflow-hidden';

const secondaryButton =
  'button-secondary inline-flex min-h-11 items-center justify-center px-[22px] py-3 text-sm font-medium leading-normal rounded-[10px]';

export default function AboutPage() {
  return (
    <div className="about-page bg-secondary font-dmSans text-foreground">
      <main>
        <section>
          <div className="container">
            <div className="border-container section-spacing-lg">
              <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
                <div>
                  <nav aria-label="Breadcrumb">
                    <ol className="flex flex-wrap items-center gap-2 text-sm">
                      <li>
                        <Link href="/" className="text-gold">Home</Link>
                      </li>
                      <li aria-hidden="true" className="text-muted-foreground">/</li>
                      <li aria-current="page">About</li>
                    </ol>
                  </nav>
                  <Heading as="h1" size="large" gradient={false} className="mt-6 max-w-[11em] text-foreground">
                    About EasyJewelry
                    <span className="mt-2 block font-instrument text-[0.92em] font-normal italic leading-[1.05] text-gold">built only for jewelry.</span>
                  </Heading>
                  <p className="mt-5 max-w-[38rem] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                    Our mission is to simplify how a jewelry business runs. EasyJewelry handles inventory, billing, finance, and the online store, so owners can spend their time with customers and on the work of growing the shop.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link href="/request-demo" className={demoButton}>
                      Request Demo
                    </Link>
                    <a href="#clients" className="group inline-flex min-h-11 items-center text-sm font-medium text-offWhite">
                      <span className="text-underline">See who uses it</span>
                    </a>
                  </div>
                </div>

                <figure className="border border-lineColor bg-secondary shadow-[0_24px_60px_-36px_rgba(13,13,13,0.35)]">
                  <blockquote className="px-6 py-7 sm:px-8 sm:py-9">
                    <p className="font-instrument text-[1.65rem] font-normal italic leading-[1.25] text-foreground sm:text-[1.85rem]">
                      EasyJewelry was built from the ground up for jewelry businesses. We understood that generic software was never going to cut it for an industry as unique as yours.
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center gap-4 border-t border-lineColor bg-panel px-6 py-4 sm:px-8">
                    <Image
                      src={ceoImage.src}
                      alt={ceoImage.alt}
                      width={320}
                      height={320}
                      className="size-16 shrink-0 rounded-full object-cover sm:size-20"
                    />
                    <div>
                      <p className="font-urbanist font-semibold text-foreground">Farhad Sayed</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">Founder and CEO, Technova</p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-lineColor" aria-labelledby="work-title">
          <div className="container">
            <div className="border-container section-spacing-lg">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
                <div>
                  <Heading as="h2" id="work-title" gradient={false} className="max-w-[10em] text-foreground">
                    One system for the work of the shop.
                  </Heading>
                  <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
                    The same record follows a piece from the day it comes in to the day it is sold, invoiced, or listed online.
                  </p>
                </div>
                <div className="divide-y divide-lineColor border-y border-lineColor">
                  {work.map((item) => (
                    <article key={item.title} className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                      <h3 className="font-urbanist text-lg font-semibold text-foreground">
                        <Link href={item.href} className="group text-offWhite">
                          <span className="text-underline">{item.title}</span>
                        </Link>
                      </h3>
                      <p className="text-base leading-7 text-muted-foreground">{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-panel" aria-labelledby="who-title">
          <div className="container">
            <div className="border-container section-spacing-lg">
              <Heading as="h2" id="who-title" gradient={false} className="max-w-[12em] text-foreground">
                For the way jewelry businesses actually work.
              </Heading>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                A single counter and a business with several locations use the same software. The setup follows the work, not the other way around.
              </p>
              <div className="mt-10 grid border border-lineColor bg-secondary md:grid-cols-3">
                {audiences.map((item, index) => (
                  <article key={item.title} className={`p-6 sm:p-7 ${index < audiences.length - 1 ? 'border-b border-lineColor md:border-b-0 md:border-r' : ''}`}>
                    <h3 className="font-urbanist text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-muted-foreground">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="scroll-mt-32 border-t border-lineColor" aria-labelledby="clients-title">
          <div className="container">
            <div className="border-container section-spacing-lg">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
                <div>
                  <Heading as="h2" id="clients-title" gradient={false} className="max-w-[8em] text-foreground">
                    Businesses already on it.
                  </Heading>
                  <p className="mt-4 max-w-sm text-base leading-7 text-muted-foreground">
                    Wholesalers, multi-branch retailers, and manufacturers use EasyJewelry in their own cities.
                  </p>
                </div>
                <ul className="grid gap-px bg-lineColor sm:grid-cols-2 lg:grid-cols-3">
                  {researchItems.map((client) => (
                    <li
                      key={client.id}
                      className="flex min-h-40 flex-col justify-between bg-secondary p-5"
                    >
                      <Image
                        src={client.logo}
                        alt={`${client.title} logo`}
                        width={140}
                        height={56}
                        className="h-12 w-auto max-w-[9rem] object-contain object-left"
                      />
                      <div className="mt-6">
                        <p className="font-urbanist text-sm font-semibold text-foreground">{client.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{client.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-32 border-t border-lineColor bg-panel" aria-labelledby="faq-title">
          <div className="container">
            <div className="border-container section-spacing-lg">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
                <div>
                  <Heading as="h2" id="faq-title" gradient={false} className="max-w-[8em] text-foreground">
                    Common questions.
                  </Heading>
                </div>
                <div className="border-t border-lineColor">
                  {aboutFaqs.map((faq) => (
                    <details key={faq.question} className="border-b border-lineColor">
                      <summary className="flex min-h-11 items-center justify-between gap-6 py-5 text-left font-urbanist text-base font-semibold text-foreground">
                        {faq.question}
                        <ChevronDown className="faq-chevron size-4 shrink-0 text-gold" aria-hidden="true" />
                      </summary>
                      <p className="max-w-2xl pb-5 pr-8 text-base leading-7 text-muted-foreground">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-lineColor" aria-labelledby="close-title">
          <div className="container">
            <div className="border-container section-spacing-lg">
              <Heading as="h2" id="close-title" gradient={false} className="max-w-[14em] text-foreground">
                See it on your own shop.
              </Heading>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                We will walk through the software, answer questions, and leave you with a trial you can try on your own.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/request-demo" className={demoButton}>
                  Request Demo
                </Link>
                <Link href="/contact" className={secondaryButton}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
