'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import {
  actionOrder,
  auditEvents,
  comparisons,
  coverage,
  faqs,
  fieldChips,
  invoice10479Lines,
  invoice10482Changes,
  invoice10482Line,
  invoice10482Snapshot,
  item214Change,
  pains,
  printEvents,
  roles,
  stories,
  summaryAll,
  summaryRows,
  timeline10482,
  type AuditAction,
  type AuditEvent,
} from './data';
import {
  ActionBadge,
  DeletedCard,
  HeaderSnapshot,
  ItemsTable,
  WhatChangedTable,
  Window,
} from './mockups';

const DEMO_URL = '/request-demo';
const CONTACT_URL = '/contact';

function IconList() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M3 4.5h12M3 9h12M3 13.5h8" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function IconPen() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M11 3.5l3.5 3.5L6.5 15H3v-3.5L11 3.5z" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M4 9.5l3.2 3.2L14 5.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function useHeroPhases(count: number) {
  const [phases, setPhases] = useState<number[]>(() => Array(count).fill(3));

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    setPhases(Array(count).fill(0));
    const timers: number[] = [];
    for (let i = 0; i < count; i += 1) {
      timers.push(window.setTimeout(() => {
        setPhases((current) => current.map((value, index) => (index === i ? 1 : value)));
      }, i * 70));
      timers.push(window.setTimeout(() => {
        setPhases((current) => current.map((value, index) => (index === i ? 2 : value)));
      }, i * 70 + 180));
      timers.push(window.setTimeout(() => {
        setPhases((current) => current.map((value, index) => (index === i ? 3 : value)));
      }, i * 70 + 360));
    }
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [count]);

  return phases;
}

function truncate(text: string) {
  if (text.length <= 160) return text;
  return `${text.slice(0, 160).trimEnd()}…`;
}

type Filter = { type: string | null; action: AuditAction | null; key: string | null };

function chipLabel(filter: Filter) {
  if (filter.type && filter.action) return `${filter.type} · ${filter.action}`;
  return filter.type ?? filter.action;
}

export default function AuditLogPage() {
  const [filter, setFilter] = useState<Filter>({ type: null, action: null, key: null });
  const [openId, setOpenId] = useState<string | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const drawerTitleId = useId();
  const heroPhases = useHeroPhases(5);

  useEffect(() => {
    const header = document.querySelector('header');
    const apply = () => {
      const height = header?.getBoundingClientRect().height ?? 0;
      document.documentElement.style.setProperty('--audit-sticky-top', `${height}px`);
    };
    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const nodes = document.querySelectorAll('.audit-log .section:not(#top)');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!openId) return;
    const root = drawerRef.current;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusable = () => Array.from(root?.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])') ?? [])
      .filter((el) => !el.hasAttribute('disabled'));
    focusable()[0]?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpenId(null);
        return;
      }
      if (event.key !== 'Tab' || !root) return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
      triggerRef.current?.focus();
    };
  }, [openId]);

  const visibleEvents = auditEvents.filter((event) => {
    if (filter.type && event.type !== filter.type) return false;
    if (filter.action && event.action !== filter.action) return false;
    return true;
  });
  const activeChip = chipLabel(filter);
  const openEvent = auditEvents.find((event) => event.id === openId) ?? null;

  function openRow(event: AuditEvent, trigger: HTMLElement) {
    triggerRef.current = trigger;
    setOpenId(event.id);
  }

  return (
    <div className="audit-log" data-theme="light">
      <main>
        <section className="section hero" id="top">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow"><span className="hallmark">Audit log</span></p>
              <h1>Every gram, every rate, every edit. On the record.</h1>
              <p className="lede" style={{ marginBlockStart: 18 }}>
                Easy Jewelry records who added, edited, deleted or printed your invoices, bills, fixings, vouchers and items, and shows exactly what changed: old value in red, new value in green.
              </p>
              <div className="cta-row">
                <Link href={DEMO_URL} className="btn btn-primary">Book a demo</Link>
                <a href="#how" className="btn btn-secondary">See an edit, line by line</a>
              </div>
              <ul className="proofs">
                <li className="proof"><IconList /> 15 record types tracked</li>
                <li className="proof"><IconPen /> Added, edited, deleted and printed</li>
                <li className="proof"><IconCheck /> Nothing extra for your staff to do</li>
              </ul>
            </div>
            <Window title="Invoice #10482 · Edited">
              <div className="meta-line">
                <ActionBadge action="Edited" />
                <span>sara.k · 12/Oct/2026 16:42 · Main Branch</span>
                <span className="fake-actions" aria-hidden="true">
                  <span className="fake-btn">Open invoice</span>
                  <span className="fake-btn">Invoice history</span>
                </span>
              </div>
              <WhatChangedTable
                rows={invoice10482Changes}
                caption="Sample: changes to Invoice 10482"
                phases={heroPhases}
                limit={5}
              />
            </Window>
          </div>
        </section>

        <section className="section band" id="problem">
          <div className="wrap">
            <h2>Questions every jewelry owner has asked</h2>
              <p className="prose" style={{ marginBlockStart: 16 }}>
                In jewelry, a small edit is never small. It’s weighed in grams and multiplied by the gold rate.
              </p>
              <div className="cards two" style={{ marginBlockStart: 28 }}>
                {pains.map((pain) => (
                  <article key={pain.question} className="card">
                    <h3>“{pain.question}”</h3>
                    <p>{pain.body}</p>
                  </article>
                ))}
              </div>
              <p className="closing">Without a record, every one of these turns into a guess.</p>
          </div>
        </section>

        <section className="section" id="how">
          <div className="wrap">
            <h2>How it works</h2>
            <div className="steps" style={{ marginBlockStart: 32 }}>
              <article className="step">
                <span className="step-no">1</span>
                <h3>Your team works as usual.</h3>
                <p>Invoices, bills, fixings and vouchers are saved, edited, deleted and printed exactly as today. No extra clicks.</p>
              </article>
              <article className="step">
                <span className="step-no">2</span>
                <h3>Every change is captured.</h3>
                <p>Easy Jewelry stores who did it, when, at which branch, and a full copy of the record before and after.</p>
              </article>
              <article className="step">
                <span className="step-no">3</span>
                <h3>You see exactly what changed.</h3>
                <p>Open the Audit Log, pick a day, and read every change in plain words, old value in red, new value in green.</p>
              </article>
            </div>
            <div style={{ marginBlockStart: 40 }}>
              <Window title="Invoice #10482 · Edited">
                <div className="meta-line">
                  <ActionBadge action="Edited" />
                  <span>sara.k · 12/Oct/2026 16:42 · Main Branch</span>
                </div>
                <WhatChangedTable rows={invoice10482Changes} caption="Sample: every field changed on Invoice 10482" />
                <div style={{ marginBlockStart: 18 }}>
                  <ItemsTable lines={[invoice10482Line]} caption="Sample: item line changed on Invoice 10482" />
                </div>
                <div style={{ marginBlockStart: 18 }}>
                  <HeaderSnapshot rows={invoice10482Snapshot} />
                </div>
              </Window>
              <p className="caption">One edit, field by field, line by line.</p>
            </div>
          </div>
        </section>

        <section className="section band" id="features">
          <div className="wrap">
            <article className="feature-block split">
              <div className="split-copy">
                <h2>Before and after, for every field</h2>
                <p className="prose" style={{ marginBlockStart: 14 }}>
                  Rates, weights, purity, making, VAT, totals, payments, memo. Every field that changed is listed with its old and new value, so you never compare two printouts by hand again.
                </p>
              </div>
              <Window title="Invoice #10482 · Edited">
                <WhatChangedTable rows={invoice10482Changes} caption="Sample: old and new values on Invoice 10482" />
              </Window>
            </article>

            <article className="feature-block split reverse">
              <div className="split-copy">
                <h2>Line by line, down to the barcode</h2>
                <p className="prose" style={{ marginBlockStart: 14 }}>
                  See which item line was added, removed or changed, with its barcode, quantity, purity, gross and pure weight, and making. A changed line shows the old value above the new one.
                </p>
              </div>
              <Window title="Invoice #10479 · Edited">
                <div className="meta-line">
                  <ActionBadge action="Edited" />
                  <span>omar.b · 12/Oct/2026 13:52 · Second Branch</span>
                </div>
                <ItemsTable lines={invoice10479Lines} caption="Sample: item lines on Invoice 10479" />
              </Window>
            </article>

            <article className="feature-block split">
              <div className="split-copy">
                <h2>Deleted never means gone</h2>
                <p className="prose" style={{ marginBlockStart: 14 }}>
                  When an invoice, bill, return, voucher or fixing is deleted, the log keeps a full copy of it: customer, every item, every payment, the total, and who deleted it.
                </p>
              </div>
              <DeletedCard />
            </article>

            <article className="feature-block split reverse">
              <div className="split-copy">
                <h2>Every print counts</h2>
                <p className="prose" style={{ marginBlockStart: 14 }}>
                  Invoices, bills, returns and payment and receipt vouchers record every print. Three prints of one invoice on one afternoon is a question worth asking.
                </p>
              </div>
              <Window title="Audit Log">
                <div className="window-scroll">
                  <table className="print-table">
                    <caption className="sr-only">Sample: three prints of Invoice 10466</caption>
                    <thead>
                      <tr>
                        <th scope="col">Date changed</th>
                        <th scope="col">User</th>
                        <th scope="col">Action</th>
                        <th scope="col">Event</th>
                      </tr>
                    </thead>
                    <tbody>
                      {printEvents.map((row) => (
                        <tr key={row.when}>
                          <td className="num">{row.when}</td>
                          <td>{row.user}</td>
                          <td><ActionBadge action={row.action} /></td>
                          <td>{row.event}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Window>
            </article>

            <article className="feature-block">
              <h2>Your whole business on one screen</h2>
              <p className="prose" style={{ marginBlockStart: 14 }}>
                The company-wide Audit Log opens on today. A summary shows how many records were added, edited, deleted and printed, by type. Click any number to see exactly those events. Filter by date, user, type or action, or search by name, reference or change.
              </p>
              <div style={{ marginBlockStart: 24 }}>
                <Window title="Audit Log">
                  <div className="filters" aria-hidden="true">
                    <span className="filter-pill">Date changed <strong>Today</strong></span>
                    <span className="filter-pill">User <strong>All users</strong></span>
                    <span className="filter-pill">Event type <strong>All</strong></span>
                    <span className="filter-pill">Action <strong>All</strong></span>
                    <span className="filter-pill">Search</span>
                  </div>
                  <p style={{ fontSize: 14, marginBlockEnd: 8 }}>Summary — Today: 12/Oct/2026</p>
                  <div className="window-scroll">
                    <table className="summary-table">
                      <caption className="sr-only">Sample summary for 12 October 2026. Choose a count to filter the list below.</caption>
                      <thead>
                        <tr>
                          <th scope="col">Event type</th>
                          {actionOrder.map((action) => <th key={action} scope="col">{action}</th>)}
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {summaryRows.map((row) => (
                          <tr key={row.type}>
                            <th scope="row">
                              <button
                                type="button"
                                className={filter.key === `${row.type}|name` ? 'type-btn is-active' : 'type-btn'}
                                aria-pressed={filter.key === `${row.type}|name`}
                                onClick={() => setFilter({ type: row.type, action: null, key: `${row.type}|name` })}
                              >
                                {row.type}
                              </button>
                            </th>
                            {actionOrder.map((action) => {
                              const value = action === 'Added' ? row.added : action === 'Edited' ? row.edited : action === 'Deleted' ? row.deleted : row.printed;
                              const key = `${row.type}|${action}`;
                              return (
                                <td key={action}>
                                  {value == null ? null : (
                                    <button
                                      type="button"
                                      className={filter.key === key ? 'count is-active' : 'count'}
                                      aria-pressed={filter.key === key}
                                      onClick={() => setFilter({ type: row.type, action, key })}
                                    >
                                      {value}
                                    </button>
                                  )}
                                </td>
                              );
                            })}
                            <td>
                              <button
                                type="button"
                                className={filter.key === `${row.type}|total` ? 'count is-active' : 'count'}
                                aria-pressed={filter.key === `${row.type}|total`}
                                onClick={() => setFilter({ type: row.type, action: null, key: `${row.type}|total` })}
                              >
                                {row.total}
                              </button>
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <th scope="row">All</th>
                          {actionOrder.map((action) => {
                            const value = action === 'Added' ? summaryAll.added : action === 'Edited' ? summaryAll.edited : action === 'Deleted' ? summaryAll.deleted : summaryAll.printed;
                            const key = `All|${action}`;
                            return (
                              <td key={action}>
                                <button
                                  type="button"
                                  className={filter.key === key ? 'count is-active' : 'count'}
                                  aria-pressed={filter.key === key}
                                  onClick={() => setFilter({ type: null, action, key })}
                                >
                                  {value}
                                </button>
                              </td>
                            );
                          })}
                          <td>
                            <button
                              type="button"
                              className="count"
                              onClick={() => setFilter({ type: null, action: null, key: null })}
                            >
                              {summaryAll.total}
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {activeChip ? (
                    <p className="filter-chip">
                      {activeChip}
                      <button type="button" className="clear-btn" aria-label="Clear filter" onClick={() => setFilter({ type: null, action: null, key: null })}>✕</button>
                    </p>
                  ) : null}
                  <div className="window-scroll" style={{ marginBlockStart: 8 }}>
                    <table className="events-table">
                      <caption className="sr-only">Sample audit events for 12 October 2026</caption>
                      <thead>
                        <tr>
                          <th scope="col">Date changed</th>
                          <th scope="col">User</th>
                          <th scope="col">Action</th>
                          <th scope="col">Event</th>
                          <th scope="col">Name</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Branch</th>
                          <th scope="col">What changed</th>
                        </tr>
                      </thead>
                      <tbody>
                        {visibleEvents.map((event) => (
                          <tr
                            key={event.id}
                            className="event-row"
                            tabIndex={0}
                            aria-label={`Open details for ${event.event}`}
                            onClick={(clickEvent) => openRow(event, clickEvent.currentTarget)}
                            onKeyDown={(keyEvent) => {
                              if (keyEvent.key === 'Enter' || keyEvent.key === ' ') {
                                keyEvent.preventDefault();
                                openRow(event, keyEvent.currentTarget);
                              }
                            }}
                          >
                            <td className="num">{event.when}</td>
                            <td>{event.user}</td>
                            <td><ActionBadge action={event.action} /></td>
                            <td>{event.event}</td>
                            <td>{event.name}</td>
                            <td className="num">{event.amount}</td>
                            <td>{event.branch}</td>
                            <td className="summary-cell" title={event.summary}>{truncate(event.summary)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="caption">Showing {visibleEvents.length} of 162 events</p>
                </Window>
              </div>
            </article>

            <article className="feature-block split">
              <div className="split-copy">
                <h2>Every record has its own history</h2>
                <p className="prose" style={{ marginBlockStart: 14 }}>
                  A Log button on every invoice, bill, fixing and voucher list opens that record’s full timeline: when it was added, every edit, every print, and the delete if there was one.
                </p>
              </div>
              <Window title="Invoice #10482">
                <ol className="timeline">
                  {timeline10482.map((entry) => (
                    <li key={entry.when + entry.action}>
                      <div className="rail"><span className="dot" /></div>
                      <div className="entry">
                        <div><time className="num">{entry.when}</time> <span className="who">· {entry.user}</span></div>
                        <div style={{ marginBlock: 6 }}><ActionBadge action={entry.action} /></div>
                        <p className="logline">{entry.summary}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Window>
            </article>

            <div className="strip">
              <article className="strip-item"><strong>Admins only</strong><span>Only admins can open the log.</span></article>
              <article className="strip-item"><strong>Branch-aware</strong><span>Branch admins see their own branch.</span></article>
              <article className="strip-item"><strong>Export</strong><span>Excel, CSV, PDF or print, for your accountant.</span></article>
              <article className="strip-item"><strong>No noise</strong><span>Saving without a change records nothing.</span></article>
            </div>
          </div>
        </section>

        <section className="section" id="coverage">
          <div className="wrap">
            <h2>What the Audit Log covers</h2>
            <p className="prose" style={{ marginBlockStart: 16 }}>
              Sales, purchases, returns, metal, cash, bank, items and opening balances. Fifteen record types, each with the actions that apply to it.
            </p>
            <div className="window-scroll" style={{ marginBlockStart: 28 }}>
              <table className="coverage-table">
                <caption className="sr-only">Record types covered by the Audit Log and the actions saved for each</caption>
                <thead>
                  <tr>
                    <th scope="col">Record type</th>
                    {actionOrder.map((action) => <th key={action} scope="col">{action}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {coverage.map((row) => (
                    <tr key={row.name}>
                      <th scope="row">{row.name}</th>
                      {actionOrder.map((action) => (
                        <td key={action}>{row.actions.includes(action) ? <ActionBadge action={action} /> : null}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 style={{ marginBlockStart: 28 }}>Tracked in jewelry terms</h3>
            <ul className="chips">
              {fieldChips.map((chip) => <li key={chip} className="chip-quiet">{chip}</li>)}
            </ul>
          </div>
        </section>

        <section className="section band" id="stories">
          <div className="wrap">
            <h2>What it looks like on a real day</h2>
            <div className="cards two" style={{ marginBlockStart: 28 }}>
              {stories.map((story) => (
                <article key={story.title} className="story">
                  <h3>{story.title}</h3>
                  <p>{story.body}</p>
                  <p className="logline">{story.log}</p>
                </article>
              ))}
            </div>
            <p className="caption">Illustrative examples.</p>
          </div>
        </section>

        <section className="section" id="roles">
          <div className="wrap">
            <h2>Built for everyone who answers for the numbers</h2>
            <div className="cards five" style={{ marginBlockStart: 28 }}>
              {roles.map((role) => (
                <article key={role.title} className="role">
                  <h3>{role.title}</h3>
                  <p>{role.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section band" id="compare">
          <div className="wrap">
            <h2>Before the Audit Log, and after</h2>
            <div className="window-scroll" style={{ marginBlockStart: 28 }}>
              <table className="compare-table">
                <caption className="sr-only">Working without an audit log compared with Easy Jewelry Audit Log</caption>
                <thead>
                  <tr>
                    <th scope="col">Without an audit log</th>
                    <th scope="col">With Easy Jewelry Audit Log</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map(([without, withLog]) => (
                    <tr key={without}>
                      <td>{without}</td>
                      <td>{withLog}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="wrap" style={{ maxWidth: 800 }}>
            <h2>FAQ</h2>
            <div style={{ marginBlockStart: 20 }}>
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  style={{ borderBlockEnd: '1px solid var(--line)' }}
                  onToggle={(event) => {
                    const el = event.currentTarget;
                    if (!el.open) return;
                    el.parentElement?.querySelectorAll('details').forEach((other) => {
                      if (other !== el) other.open = false;
                    });
                  }}
                >
                  <summary style={{ display: 'flex', alignItems: 'center', minHeight: 52, cursor: 'pointer', fontWeight: 600 }}>
                    {faq.question}
                  </summary>
                  <p className="prose" style={{ paddingBlockEnd: 16 }}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section band" id="demo">
          <div className="wrap demo-panel">
            <span className="hallmark hallmark-lg">Audit log</span>
            <h2>See your own day on the record.</h2>
            <p className="prose">
              We’ll walk you through the Audit Log with an invoice edit, a delete and a reprint, so you know exactly what you’ll see every morning.
            </p>
            <Link href={DEMO_URL} className="btn btn-primary">Book a demo</Link>
            <a href={CONTACT_URL}>Or talk to us</a>
          </div>
        </section>
      </main>

      {openEvent ? (
        <>
          <button type="button" className="drawer-backdrop" aria-label="Close details" onClick={() => setOpenId(null)} />
          <div
            ref={drawerRef}
            className="drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby={drawerTitleId}
          >
            <div className="drawer-head">
              <h2 id={drawerTitleId} style={{ fontSize: 22 }}>{openEvent.event}</h2>
              <button type="button" className="drawer-close" onClick={() => setOpenId(null)}>Close</button>
            </div>
            <div className="drawer-body">
              <div className="meta-line">
                <ActionBadge action={openEvent.action} />
                <span>{openEvent.user} · {openEvent.when} · {openEvent.branch}</span>
              </div>
              {openEvent.detail === 'invoice-10482' ? (
                <>
                  <WhatChangedTable rows={invoice10482Changes} caption="Changes to Invoice 10482" />
                  <div style={{ marginBlockStart: 16 }}>
                    <ItemsTable lines={[invoice10482Line]} caption="Item line on Invoice 10482" />
                  </div>
                </>
              ) : null}
              {openEvent.detail === 'invoice-10475' ? <DeletedCard /> : null}
              {openEvent.detail === 'item-214' ? (
                <WhatChangedTable rows={[item214Change]} caption="Change to Item 214" />
              ) : null}
              {openEvent.detail === 'summary' ? <p className="logline">{openEvent.summary}</p> : null}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
