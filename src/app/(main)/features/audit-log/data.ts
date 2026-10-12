export type AuditAction = 'Added' | 'Edited' | 'Deleted' | 'Printed';

export type Change = {
  field: string;
  before: string;
  after: string;
};

export type LineCell =
  | { kind: 'plain'; value: string }
  | { kind: 'diff'; before: string; after: string };

export type ItemLine = {
  state: 'changed' | 'removed' | 'added' | 'unchanged';
  item: string;
  qty: string;
  purity: string;
  gross: LineCell;
  pure: LineCell;
  making: LineCell;
  total: LineCell;
};

export type SnapshotRow = {
  field: string;
  before: string;
  after: string;
  changed: boolean;
};

export type AuditEvent = {
  id: string;
  when: string;
  user: string;
  action: AuditAction;
  type: string;
  event: string;
  name: string;
  amount: string;
  branch: string;
  summary: string;
  detail: 'invoice-10482' | 'invoice-10475' | 'item-214' | 'summary';
};

const plain = (value: string): LineCell => ({ kind: 'plain', value });
const diff = (before: string, after: string): LineCell => ({ kind: 'diff', before, after });

export const invoice10482Summary =
  'Gold gram rate: 492.4000 -> 486.1500; Gross weight: 24.350 -> 23.850; Pure weight: 22.305 -> 21.847; Making: 365.25 -> 240.00; Subtotal: 11,348.23 -> 10,860.92; VAT: 567.41 -> 543.05; Total: 11,915.64 -> 11,403.97; Bangle 22K [BG30118] - Gross weight: 24.350 -> 23.850; Bangle 22K [BG30118] - Pure weight: 22.305 -> 21.847; Bangle 22K [BG30118] - Making: 365.25 -> 240.00; Bangle 22K [BG30118] - Subtotal: 11,348.23 -> 10,860.92; Bangle 22K [BG30118] - VAT: 567.41 -> 543.05; Bangle 22K [BG30118] - Total: 11,915.64 -> 11,403.97';

export const invoice10482Changes: Change[] = [
  { field: 'Gold gram rate', before: '492.4000', after: '486.1500' },
  { field: 'Gross weight', before: '24.350', after: '23.850' },
  { field: 'Pure weight', before: '22.305', after: '21.847' },
  { field: 'Making', before: '365.25', after: '240.00' },
  { field: 'Subtotal', before: '11,348.23', after: '10,860.92' },
  { field: 'VAT', before: '567.41', after: '543.05' },
  { field: 'Total', before: '11,915.64', after: '11,403.97' },
  { field: 'Bangle 22K [BG30118] - Gross weight', before: '24.350', after: '23.850' },
  { field: 'Bangle 22K [BG30118] - Pure weight', before: '22.305', after: '21.847' },
  { field: 'Bangle 22K [BG30118] - Making', before: '365.25', after: '240.00' },
  { field: 'Bangle 22K [BG30118] - Subtotal', before: '11,348.23', after: '10,860.92' },
  { field: 'Bangle 22K [BG30118] - VAT', before: '567.41', after: '543.05' },
  { field: 'Bangle 22K [BG30118] - Total', before: '11,915.64', after: '11,403.97' },
];

export const invoice10482Snapshot: SnapshotRow[] = [
  { field: 'Date', before: '12/Oct/2026', after: '12/Oct/2026', changed: false },
  { field: 'Reference', before: 'INV-10482', after: 'INV-10482', changed: false },
  { field: 'Customer', before: 'Walk-in customer', after: 'Walk-in customer', changed: false },
  { field: 'Type', before: 'Fix', after: 'Fix', changed: false },
  { field: 'Tax', before: 'Tax', after: 'Tax', changed: false },
  { field: 'Currency', before: 'AED', after: 'AED', changed: false },
  { field: 'Gold gram rate', before: '492.4000', after: '486.1500', changed: true },
  { field: 'Gross weight', before: '24.350', after: '23.850', changed: true },
  { field: 'Pure weight', before: '22.305', after: '21.847', changed: true },
  { field: 'Making', before: '365.25', after: '240.00', changed: true },
  { field: 'Subtotal', before: '11,348.23', after: '10,860.92', changed: true },
  { field: 'VAT', before: '567.41', after: '543.05', changed: true },
  { field: 'Total', before: '11,915.64', after: '11,403.97', changed: true },
  { field: 'Salesman', before: 'sara.k', after: 'sara.k', changed: false },
];

export const invoice10482Line: ItemLine = {
  state: 'changed',
  item: 'Bangle 22K [BG30118]',
  qty: '1',
  purity: '0.916',
  gross: diff('24.350', '23.850'),
  pure: diff('22.305', '21.847'),
  making: diff('365.25', '240.00'),
  total: diff('11,915.64', '11,403.97'),
};

export const invoice10479Lines: ItemLine[] = [
  {
    state: 'changed',
    item: 'Ring 22K [RG20907]',
    qty: '1',
    purity: '0.916',
    gross: diff('6.420', '6.120'),
    pure: diff('5.881', '5.606'),
    making: plain('150.00'),
    total: diff('3,159.50', '3,019.13'),
  },
  {
    state: 'removed',
    item: 'Chain 18K [CH40211]',
    qty: '1',
    purity: '0.750',
    gross: plain('8.120'),
    pure: plain('6.090'),
    making: plain('120.00'),
    total: plain('3,234.68'),
  },
  {
    state: 'added',
    item: 'Chain 18K [CH40212]',
    qty: '1',
    purity: '0.750',
    gross: plain('8.050'),
    pure: plain('6.038'),
    making: plain('120.00'),
    total: plain('3,208.14'),
  },
  {
    state: 'unchanged',
    item: 'Earrings 22K [ER11007]',
    qty: '1',
    purity: '0.916',
    gross: plain('4.200'),
    pure: plain('3.847'),
    making: plain('95.00'),
    total: plain('2,063.48'),
  },
];

export const item214Change: Change = {
  field: 'Actual purity',
  before: '0.875',
  after: '0.860',
};

export const summaryRows: { type: string; added: number | null; edited: number | null; deleted: number | null; printed: number | null; total: number }[] = [
  { type: 'Invoice', added: 38, edited: 6, deleted: 1, printed: 52, total: 97 },
  { type: 'Sales Return Credit Note', added: 2, edited: null, deleted: null, printed: 2, total: 4 },
  { type: 'Bill', added: 4, edited: 1, deleted: null, printed: 4, total: 9 },
  { type: 'Fixing', added: 7, edited: 2, deleted: null, printed: null, total: 9 },
  { type: 'Currency Transaction', added: 21, edited: null, deleted: null, printed: 21, total: 42 },
  { type: 'Item', added: null, edited: 1, deleted: null, printed: null, total: 1 },
];

export const summaryAll = { added: 72, edited: 10, deleted: 1, printed: 79, total: 162 };

export const auditEvents: AuditEvent[] = [
  {
    id: 'print-10466-1730',
    when: '12/Oct/2026 17:30',
    user: 'ahmed',
    action: 'Printed',
    type: 'Invoice',
    event: 'Invoice #10466 / INV-10466',
    name: 'Walk-in customer',
    amount: '7,804.10 AED',
    branch: 'Main Branch',
    summary: 'Invoice printed',
    detail: 'summary',
  },
  {
    id: 'edit-10482',
    when: '12/Oct/2026 16:42',
    user: 'sara.k',
    action: 'Edited',
    type: 'Invoice',
    event: 'Invoice #10482 / INV-10482',
    name: 'Walk-in customer',
    amount: '11,403.97 AED',
    branch: 'Main Branch',
    summary: invoice10482Summary,
    detail: 'invoice-10482',
  },
  {
    id: 'edit-881',
    when: '12/Oct/2026 15:18',
    user: 'purchasing',
    action: 'Edited',
    type: 'Fixing',
    event: 'Fixing #881 / FX-881',
    name: 'Golden Crest Trading (sample)',
    amount: '60,907.05 AED',
    branch: 'Main Branch',
    summary: 'Gold oz rate: 3,982.5000 -> 3,968.0000; Amount: 61,129.62 -> 60,907.05',
    detail: 'summary',
  },
  {
    id: 'edit-10479',
    when: '12/Oct/2026 13:52',
    user: 'omar.b',
    action: 'Edited',
    type: 'Invoice',
    event: 'Invoice #10479 / INV-10479',
    name: 'Walk-in customer',
    amount: '8,290.75 AED',
    branch: 'Second Branch',
    summary: 'Ring 22K [RG20907] - Gross weight: 6.420 -> 6.120; Ring 22K [RG20907] - Pure weight: 5.881 -> 5.606; Line removed: Chain 18K [CH40211] … ; Line added: Chain 18K [CH40212] …',
    detail: 'summary',
  },
  {
    id: 'add-3307',
    when: '12/Oct/2026 14:05',
    user: 'maryam',
    action: 'Added',
    type: 'Bill',
    event: 'Bill #3307 / BL-3307',
    name: 'Golden Crest Trading (sample)',
    amount: '48,915.30 AED',
    branch: 'Main Branch',
    summary: 'Bill added',
    detail: 'summary',
  },
  {
    id: 'add-5521',
    when: '12/Oct/2026 12:40',
    user: 'omar.b',
    action: 'Added',
    type: 'Currency Transaction',
    event: 'Currency Transaction #5521',
    name: 'Walk-in customer',
    amount: '2,000.00 AED',
    branch: 'Second Branch',
    summary: 'Currency transaction added',
    detail: 'summary',
  },
  {
    id: 'print-10466-1104',
    when: '12/Oct/2026 11:04',
    user: 'ahmed',
    action: 'Printed',
    type: 'Invoice',
    event: 'Invoice #10466 / INV-10466',
    name: 'Walk-in customer',
    amount: '7,804.10 AED',
    branch: 'Main Branch',
    summary: 'Invoice printed',
    detail: 'summary',
  },
  {
    id: 'print-10466-1102',
    when: '12/Oct/2026 11:02',
    user: 'ahmed',
    action: 'Printed',
    type: 'Invoice',
    event: 'Invoice #10466 / INV-10466',
    name: 'Walk-in customer',
    amount: '7,804.10 AED',
    branch: 'Main Branch',
    summary: 'Invoice printed',
    detail: 'summary',
  },
  {
    id: 'edit-214',
    when: '12/Oct/2026 10:15',
    user: 'ahmed',
    action: 'Edited',
    type: 'Item',
    event: 'Item #214',
    name: 'Ring 21K',
    amount: 'Actual purity 0.875',
    branch: '—',
    summary: 'Actual purity: 0.875 -> 0.860',
    detail: 'item-214',
  },
  {
    id: 'delete-10475',
    when: '12/Oct/2026 09:31',
    user: 'cashier2',
    action: 'Deleted',
    type: 'Invoice',
    event: 'Invoice #10475 / INV-10475',
    name: 'Walk-in customer',
    amount: '3,250.00 AED',
    branch: 'Main Branch',
    summary: 'Invoice deleted',
    detail: 'invoice-10475',
  },
];

export const printEvents = [
  { when: '12/Oct/2026 17:30', user: 'ahmed', action: 'Printed' as const, event: 'Invoice #10466' },
  { when: '12/Oct/2026 11:04', user: 'ahmed', action: 'Printed' as const, event: 'Invoice #10466' },
  { when: '12/Oct/2026 11:02', user: 'ahmed', action: 'Printed' as const, event: 'Invoice #10466' },
];

export const timeline10482 = [
  { when: '12/Oct/2026 16:42', user: 'sara.k', action: 'Edited' as const, summary: 'Gold gram rate: 492.4000 -> 486.1500; …' },
  { when: '12/Oct/2026 13:20', user: 'sara.k', action: 'Printed' as const, summary: 'Invoice printed' },
  { when: '12/Oct/2026 13:19', user: 'sara.k', action: 'Added' as const, summary: 'Invoice added' },
];

export const coverage: { name: string; actions: AuditAction[] }[] = [
  { name: 'Sales invoices', actions: ['Added', 'Edited', 'Deleted', 'Printed'] },
  { name: 'Sales return credit notes', actions: ['Added', 'Edited', 'Deleted', 'Printed'] },
  { name: 'Purchase bills (metal purchases)', actions: ['Added', 'Edited', 'Deleted', 'Printed'] },
  { name: 'Purchase return debit notes', actions: ['Added', 'Edited', 'Deleted', 'Printed'] },
  { name: 'Metal payment / receipt vouchers', actions: ['Added', 'Edited', 'Deleted', 'Printed'] },
  { name: 'Currency payment / receipt vouchers', actions: ['Added', 'Edited', 'Deleted', 'Printed'] },
  { name: 'Metal exchanges (old gold in / new gold out)', actions: ['Added', 'Edited', 'Deleted'] },
  { name: 'Metal fixings (rate fixing)', actions: ['Added', 'Edited', 'Deleted'] },
  { name: 'Bank transfers', actions: ['Added', 'Edited', 'Deleted'] },
  { name: 'Cheques & expenses', actions: ['Added', 'Edited', 'Deleted'] },
  { name: 'Journals', actions: ['Added', 'Edited', 'Deleted'] },
  { name: 'Metal openings (opening stock)', actions: ['Added', 'Edited', 'Deleted'] },
  { name: 'Items (karat, purity, category, barcode and tax settings)', actions: ['Added', 'Edited', 'Deleted'] },
  { name: 'Party opening balances', actions: ['Edited'] },
  { name: 'Account opening balances', actions: ['Edited'] },
];

export const fieldChips = [
  'Gross weight',
  'Pure weight',
  'Purity',
  'Karat',
  'Making',
  'Unit making',
  'Gold gram rate',
  'Gold oz rate',
  'Metal exchange rate',
  'Exchange rate',
  'Fix / Unfix',
  'Hedge',
  'VAT',
  'Round off',
  'Payments',
  'Barcode',
  'Memo',
  'Salesman',
  'Opening balance',
];

export const pains = [
  {
    question: 'Who changed the gold rate on this invoice after the customer left?',
    body: 'Rates are typed by hand, and a few points lower on a heavy piece is hundreds in margin.',
  },
  {
    question: 'Where did half a gram go?',
    body: 'Gross and pure weights get edited after the sale, and at gold prices half a gram is real money.',
  },
  {
    question: 'Invoice number 10475 is missing. Was it deleted?',
    body: 'A sale is rung up, cash is taken, and the invoice is deleted at closing.',
  },
  {
    question: 'Why is the making charge zero on this bangle?',
    body: 'Making charges are the easiest unofficial discount.',
  },
  {
    question: 'Why does the customer have a second copy of this invoice?',
    body: 'Reprints are used to hand out duplicate receipts or to show an edited version.',
  },
  {
    question: 'Who changed the purity of this item?',
    body: 'Changing an item’s actual purity silently re-values pure weight on everything that uses it.',
  },
];

export const stories = [
  {
    title: 'The 511 dirham discount nobody approved',
    body: 'A bangle sold in the afternoon was edited at 16:42: the gram rate came down, half a gram came off the weight, and the making charge was cut. The total dropped by 511.67 AED. The owner saw it in the next morning’s “Edited” count.',
    log: '16:42 · sara.k · Invoice #10482 · Edited · Gold gram rate: 492.4000 -> 486.1500; Bangle 22K [BG30118] - Gross weight: 24.350 -> 23.850; Total: 11,915.64 -> 11,403.97',
  },
  {
    title: 'The invoice that disappeared before opening time',
    body: 'A 3,250 AED cash sale from the evening before was deleted at 09:31 the next morning, before the owner came in. The log kept the full invoice: the customer, both rings, the cash payment, and the user who deleted it.',
    log: '09:31 · cashier2 · Invoice #10475 · Deleted · Invoice deleted',
  },
  {
    title: 'One item, a quieter purity',
    body: 'Someone changed an item’s actual purity from 0.875 to 0.860. Every pure-weight figure using it moved with it. The item’s history showed who and when.',
    log: '10:15 · ahmed · Item #214 (Ring 21K) · Edited · Actual purity: 0.875 -> 0.860',
  },
  {
    title: 'The fixing everyone remembered differently',
    body: 'The supplier said the fixing was agreed at one ounce rate; the books said another. The fixing’s history showed both versions, and who changed it, two days after it was entered.',
    log: '15:18 · purchasing · Fixing #881 · Edited · Gold oz rate: 3,982.5000 -> 3,968.0000; Amount: 61,129.62 -> 60,907.05',
  },
];

export const roles = [
  { title: 'Owner', body: 'A two-minute daily check of every branch, and a record you can use when a rate, a weight, or a balance is questioned.' },
  { title: 'Branch manager', body: 'Sees their own branch’s activity, and can answer the owner with the event instead of a guess.' },
  { title: 'Accountant', body: 'Knows which invoices, vouchers, journals, and opening balances changed after a period was reconciled, and from what.' },
  { title: 'Auditor', body: 'Gets an exportable, dated history of changes to sales, purchases, returns, and payments.' },
  { title: 'Counter staff', body: 'A fair record. When something is questioned, the log shows who actually did it.' },
];

export const comparisons = [
  ['You notice a missing invoice at month end', 'You see “Deleted 1” in today’s summary'],
  ['“Who changed this?” ends in an argument', 'Name, time, and branch on every change'],
  ['A deleted bill is gone', 'A full copy of it, items and payments included'],
  ['You compare two printouts to find the difference', 'Old value in red, new value in green'],
  ['Reprints are invisible', 'Every print is an event'],
  ['The auditor gets explanations', 'The auditor gets an export'],
];

export const faqs = [
  {
    question: 'What exactly does the Audit Log record?',
    answer: 'Every time someone adds, edits, deletes or prints a covered record, it saves who did it, when, at which branch, the field-by-field changes, and a full copy of the record before and after.',
  },
  {
    question: 'Which records are covered?',
    answer: 'Sales invoices, sales return credit notes, purchase bills, purchase return debit notes, metal and currency payment and receipt vouchers, metal exchanges, metal fixings, bank transfers, cheques and expenses, journals, metal openings, items, and party and account opening balances.',
  },
  {
    question: 'Do my staff need to do anything?',
    answer: 'No. It runs automatically on every save, delete and print. There are no extra clicks and no approvals.',
  },
  {
    question: 'Who can see the Audit Log?',
    answer: 'Only admins. An admin assigned to a branch sees that branch’s events.',
  },
  {
    question: 'Can someone delete or edit an entry in the log?',
    answer: 'No screen in Easy Jewelry can edit or delete an audit entry, and only admins can open the log.',
  },
  {
    question: 'Can I see what a deleted invoice looked like?',
    answer: 'Yes. The log keeps a full copy: the customer, every item line, every payment and the total, as they were when it was deleted.',
  },
  {
    question: 'Can I restore a deleted record from the log?',
    answer: 'The log shows exactly what the record said, so you can re-enter or correct it. It does not restore records automatically.',
  },
  {
    question: 'If someone opens an invoice and saves it without changing anything, is that logged?',
    answer: 'No. Only real changes are recorded, and numbers are compared at your own decimal settings, so rounding never shows up as a change.',
  },
  {
    question: 'What about invoices created before the Audit Log was switched on?',
    answer: 'History starts on the day it’s switched on. Older records appear in the log after their next edit, print or delete.',
  },
  {
    question: 'Can I give the log to my accountant or auditor?',
    answer: 'Yes. Export any filtered view to Excel, CSV or PDF, or print it.',
  },
  {
    question: 'Does it work across branches?',
    answer: 'Yes. The company-wide log shows every branch, with the branch on every event, and you can review one branch at a time.',
  },
];

export const actionOrder: AuditAction[] = ['Added', 'Edited', 'Deleted', 'Printed'];
