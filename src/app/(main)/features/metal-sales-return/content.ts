export const metalSalesReturnFaqs = [
  {
    question: 'Does the returned metal go back into inventory automatically?',
    answer:
      'Yes. When a sales return is confirmed, the gross weight and pure weight are added back to metal inventory. Stock and the metal balance update without a separate adjustment.',
  },
  {
    question: 'What is the difference between a fixed and an unfixed return?',
    answer:
      'A fixed return credits the customer at an agreed amount, usually what they paid. An unfixed return values the credit from the gold or silver rate at the time the metal comes back. Both are on the same return screen.',
  },
  {
    question: 'Is VAT reversed on a jewelry return?',
    answer:
      'Yes. VAT is calculated on each returned line from the item’s taxable status. The return shows the VAT being reversed, which is what you use for tax reporting.',
  },
  {
    question: 'Can I process a return in a different currency from the original sale?',
    answer:
      'Yes. Choose the currency on the return. The exchange rate at that moment is shown and stored on the document.',
  },
  {
    question: 'Where do returns appear in reports?',
    answer:
      'Sales returns appear in the daily report, in return history, and in the related accounts. They stay separate from sales, so returns do not inflate gross sales.',
  },
] as const;

export const metalSalesReturnIncluded = [
  'Auto-generated sales return number',
  'Optional return reference',
  'Fixed and unfixed returns',
  'Customer on every return',
  'Multi-currency returns',
  'Exchange rate stored at the time of return',
  'Live gold rate on the return screen',
  'Item, description, and purity per line',
  'Gross weight and pure weight per line',
  'Unit making and total making per line',
  'VAT on each line and on the return total',
  'Rounding on the return total',
  'Total gross weight and pure weight',
  'Customer account credit',
  'Returned metal added back to inventory',
  'Returns in the daily report',
  'History of past returns',
  'Branch on every return',
] as const;
