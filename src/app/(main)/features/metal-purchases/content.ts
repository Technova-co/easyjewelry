export const metalPurchaseFaqs = [
  {
    question: 'How does the per-piece barcode entry work for purchased items?',
    answer:
      'When a purchase bill contains barcodeable items, each piece gets its own row. You enter or scan the barcode, then record the item code, gross weight, tag weight, remarks, and inventory location. Saving the bill generates a barcode label for every piece and sends it to the Zebra printer.',
  },
  {
    question: 'Can I buy old gold from customers through Metal Purchases?',
    answer:
      'Yes. Select the customer as the party, enter the piece with its weight and purity, and price the buy-back from the current gold rate. If the piece will be resold, a barcode tag is generated for it on the spot.',
  },
  {
    question: 'What happens to my metal balance when I record a purchase?',
    answer:
      'Inventory increases by the gross weight and pure weight on the bill. Pure weight is calculated from the gross weight and purity. The vendor balance or cash balance updates at the same time, depending on how the purchase was paid.',
  },
  {
    question: 'How does a piece purchased today get traced later?',
    answer:
      'The barcode on the tag links to the item code. Scanning it later shows the purchase record: the vendor or customer, the price paid, the arrival date, the assigned location, and later transactions. The purchase bill stays the origin record for that piece.',
  },
  {
    question: 'Can I mark a purchase as tax-free for raw bullion?',
    answer:
      'Yes. Set the bill to tax-free for raw metal, bullion, and other purchases that are exempt from VAT. That treatment applies to every line on the bill.',
  },
  {
    question: 'Does the wholesale purchase bill support hedged pricing?',
    answer:
      'Yes. On a wholesale purchase made under a hedge, record the hedge reference on the bill next to the rate used.',
  },
] as const;

export const metalPurchaseIncluded = [
  'Retail and wholesale purchase bills',
  'Fixed and rate-based purchase pricing',
  'Tax-free designation for raw metal',
  'Hedge reference for wholesale purchases',
  'Vendor and supplier selection',
  'Multi-currency purchase bills',
  'Exchange rate recorded per bill',
  'Live gold rate on the purchase screen',
  'Purity, gross weight, and pure weight per line',
  'Subtotal making per line',
  'VAT on each line and on the bill total',
  'Rounding on the bill total',
  'Payment method and bank on the bill',
  'Per-piece barcode and item code',
  'Gross weight and tag weight per piece',
  'Remarks per piece',
  'Inventory location per piece',
  'Barcode tag generated when the bill is saved',
  'Direct print to a Zebra label printer',
  'Purchase history with search and filter',
  'Old gold and scrap metal buy-back',
  'Branch-level purchase tracking',
] as const;
