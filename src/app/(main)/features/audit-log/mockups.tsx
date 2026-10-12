import type { ReactNode } from 'react';
import type { AuditAction, Change, ItemLine, LineCell, SnapshotRow } from './data';

export function Badge({ action }: { action: ItemLine['state'] }) {
  const label = action.charAt(0).toUpperCase() + action.slice(1);
  return <span className={`badge badge-${action}`}>{label}</span>;
}

export function ActionBadge({ action }: { action: AuditAction }) {
  return <span className={`badge badge-${action}`}>{action}</span>;
}

export function OldValue({ children, struck = false }: { children: string; struck?: boolean }) {
  return (
    <span className={struck ? 'val val-old is-struck' : 'val val-old'}>
      <span className="sr-only">Before: </span>
      {children}
    </span>
  );
}

export function NewValue({ children }: { children: string }) {
  return (
    <span className="val val-new">
      <span className="sr-only">After: </span>
      {children}
    </span>
  );
}

export function Window({ title, children }: { title: string; children: ReactNode }) {
  return (
    <figure className="window">
      <div className="window-bar">{title}</div>
      <div className="window-body">{children}</div>
    </figure>
  );
}

function Cell({ cell }: { cell: LineCell }) {
  if (cell.kind === 'plain') return <span className="num">{cell.value}</span>;
  return (
    <span className="stack">
      <OldValue>{cell.before}</OldValue>
      <NewValue>{cell.after}</NewValue>
    </span>
  );
}

export function WhatChangedTable({
  rows,
  caption,
  phases,
  limit,
}: {
  rows: Change[];
  caption: string;
  phases?: number[];
  limit?: number;
}) {
  const shown = typeof limit === 'number' ? rows.slice(0, limit) : rows;
  const extra = typeof limit === 'number' ? rows.length - shown.length : 0;
  return (
    <div className="window-scroll">
      <div className="legend" aria-hidden="true">
        <OldValue>old value</OldValue>
        <NewValue>new value</NewValue>
      </div>
      <table className="diff-table">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Field</th>
            <th scope="col">Before</th>
            <th scope="col">After</th>
          </tr>
        </thead>
        <tbody>
          {shown.map((row, index) => {
            const phase = phases ? phases[index] ?? 0 : 3;
            const struck = phase >= 2;
            const showAfter = phase >= 3;
            return (
              <tr key={row.field} className="diff-row" data-phase={phase}>
                <th scope="row">{row.field}</th>
                <td>
                  <span className="cell-label" aria-hidden="true">Before</span>
                  <OldValue struck={struck}>{row.before}</OldValue>
                </td>
                <td>
                  <span className="cell-label" aria-hidden="true">After</span>
                  {showAfter ? <NewValue>{row.after}</NewValue> : null}
                </td>
              </tr>
            );
          })}
          {extra > 0 ? (
            <tr className="more-row">
              <td colSpan={3}>+{extra} more changes</td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}

export function ItemsTable({ lines, caption }: { lines: ItemLine[]; caption: string }) {
  return (
    <div className="window-scroll">
      <table className="items-table">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Change</th>
            <th scope="col">Item</th>
            <th scope="col">Qty</th>
            <th scope="col">Purity</th>
            <th scope="col">G.Weight</th>
            <th scope="col">P.Weight</th>
            <th scope="col">Making</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {lines.map((line) => (
            <tr key={line.item} className={`row-${line.state}`}>
              <td><Badge action={line.state} /></td>
              <th scope="row">{line.item}</th>
              <td className="num">{line.qty}</td>
              <td className="num">{line.purity}</td>
              <td><Cell cell={line.gross} /></td>
              <td><Cell cell={line.pure} /></td>
              <td><Cell cell={line.making} /></td>
              <td><Cell cell={line.total} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function HeaderSnapshot({ rows }: { rows: SnapshotRow[] }) {
  return (
    <div className="window-scroll">
      <table className="snap-table">
        <caption className="sr-only">Sample: header of Invoice 10482 before and after the edit</caption>
        <thead>
          <tr>
            <th scope="col">Field</th>
            <th scope="col">Before</th>
            <th scope="col">After</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.field} className={row.changed ? 'snap-changed' : undefined}>
              <th scope="row">{row.field}</th>
              <td>
                <span className="cell-label" aria-hidden="true">Before</span>
                {row.changed ? <OldValue>{row.before}</OldValue> : <span className="num">{row.before}</span>}
              </td>
              <td>
                <span className="cell-label" aria-hidden="true">After</span>
                {row.changed ? <NewValue>{row.after}</NewValue> : <span className="num">{row.after}</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DeletedCard() {
  return (
    <Window title="Invoice #10475 · Deleted">
      <div className="meta-line">
        <ActionBadge action="Deleted" />
        <span>cashier2 · 12/Oct/2026 09:31 · Main Branch</span>
      </div>
      <div className="deleted-panel">
        <h3>Invoice at the time it was deleted</h3>
        <dl className="kv">
          <dt>Date</dt>
          <dd className="num">11/Oct/2026</dd>
          <dt>Reference</dt>
          <dd className="num">INV-10475</dd>
          <dt>Customer</dt>
          <dd>Walk-in customer</dd>
          <dt>Total</dt>
          <dd className="num">3,250.00 AED</dd>
          <dt>Items</dt>
          <dd>Ring 22K [RG20931], G.Weight 3.110</dd>
          <dt>Items</dt>
          <dd>Ring 22K [RG20944], G.Weight 3.280</dd>
          <dt>Payments</dt>
          <dd>Payment: Cash / Main Cash / 3,250.00</dd>
        </dl>
      </div>
    </Window>
  );
}
