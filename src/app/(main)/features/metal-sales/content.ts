export const metalSalesFaqs = [
  {
    question: 'Can I have both fixed-price and rate-based items on the same invoice?',
    answer:
      'Yes. One invoice can mix line items sold at a fixed amount with line items priced from the live gold or silver rate.',
  },
  {
    question: 'How does live gold rate pricing work?',
    answer:
      'The current gold or silver rate is entered in EasyJewelry and shown on the invoice. For a rate-based item, the pure weight is multiplied by that rate to get the metal value, then making charges are added.',
  },
  {
    question: 'What is the difference between the retail and wholesale invoice?',
    answer:
      'The retail invoice is for individual jewelry pieces, usually added by scanning a barcode tag. The wholesale invoice is for bulk metal sold by weight, with pure-weight totals and an optional hedge reference. Both are part of Metal Sales.',
  },
  {
    question: 'Can I record a partial payment?',
    answer:
      'Yes. Record the amount received and the remaining balance stays on the customer account until a later payment.',
  },
  {
    question: 'Can retail and wholesale invoices use different print layouts?',
    answer:
      'Yes. Templates are customizable, so each layout can carry your store name, logo, and branch, with the metal detail that customer needs.',
  },
  {
    question: 'Does the invoice show VAT separately?',
    answer:
      'Yes. VAT is calculated on each line and shown apart from the subtotal. The total lists subtotal, VAT, rounding, and the final amount.',
  },
] as const;

export const metalSalesIncluded = [
  'Retail jewelry sales invoices',
  'Wholesale metal sales invoices',
  'Fixed price selling per line item',
  'Live gold and silver rate pricing',
  'Fixed and unfixed items on the same invoice',
  'Purity, gross weight, and pure weight per line',
  'Unit making and total making charges',
  'VAT on each line and on the invoice total',
  'Rounding on the invoice total',
  'Payment method and bank on the invoice',
  'Customer credit applied at sale',
  'Partial payment with an outstanding balance',
  'Multi-currency invoices',
  'Customizable invoice templates',
  'Print from the invoice screen',
  'Save and share as PDF',
  'Invoice history with search and filter',
  'Salesman and branch on every invoice',
  'Hedge reference on wholesale transactions',
  'Live rate per ounce on the invoice',
] as const;
