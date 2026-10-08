/**
 * Product catalogue — sizes & prices are sample values (PRD Phase 1).
 * Update pricing here; every product card reads from this file.
 */
export const products = [
  {
    id: 'elubo',
    name: 'Elubo (Yam Flour)',
    nav: 'Elubo (Yam Flour)',
    description:
      'Finely milled 100% white yam flour with a rich, stretchy swallow texture. Sun-dried on raised trays, sieved twice and packed in clean, moisture-controlled conditions.',
    badges: [
      { label: 'High Demand', type: 'demand' },
      { label: 'No Additives', type: 'season' },
    ],
    gradient: 'linear-gradient(140deg, #d4a017 0%, #a97e0d 60%, #7a5a09 100%)',
    icon: 'flour',
    sizes: [
      { label: '1 litre (family cup)', price: 3500 },
      { label: '3 litres', price: 9500 },
      { label: '5 litres (bucket)', price: 15000 },
      { label: '10 litres (bucket)', price: 28500 },
      { label: '25kg bag (bulk)', price: 52000 },
    ],
  },
  {
    id: 'fresh-yam',
    name: 'Fresh Yam',
    nav: 'Fresh Yam',
    description:
      'Hand-selected Puna and puna-club yam tubers straight from Saki and Oje Owode farms. Firm, heavy-for-size tubers with no rot or bruising — graded before dispatch.',
    badges: [
      { label: 'In Season', type: 'season' },
      { label: 'Farm Graded', type: 'stock' },
    ],
    gradient: 'linear-gradient(140deg, #795548 0%, #5d4037 60%, #43302a 100%)',
    icon: 'yam',
    sizes: [
      { label: 'Small tuber (2–3kg)', price: 4500 },
      { label: 'Medium tuber (4–6kg)', price: 8000 },
      { label: 'Large tuber (7–10kg)', price: 13000 },
      { label: '20kg carton (bulk)', price: 30000 },
    ],
  },
  {
    id: 'garri',
    name: 'Garri',
    nav: 'Garri',
    description:
      'Crisp, clean-fried garri — Ijebu and yellow variants — processed with pure palm oil where required. Graded for uniform grain and packed the same day it is fried.',
    badges: [
      { label: 'No Additives', type: 'season' },
      { label: 'Limited Stock', type: 'stock' },
    ],
    gradient: 'linear-gradient(140deg, #e6c34a 0%, #c9a122 55%, #96750f 100%)',
    icon: 'garri',
    sizes: [
      { label: '1 litre', price: 2500 },
      { label: '5 litres', price: 11000 },
      { label: '10 litres', price: 21000 },
      { label: '50kg bag (bulk)', price: 95000 },
    ],
  },
  {
    id: 'maize',
    name: 'Maize & Other Produce',
    nav: 'Maize & Other Produce',
    description:
      'Well-dried yellow and white maize, plus Oke Ogun staples such as sesame, soybeans and honey beans — moisture-tested before bagging to keep weevils away.',
    badges: [{ label: 'Moisture Tested', type: 'season' }],
    gradient: 'linear-gradient(140deg, #4caf50 0%, #2e7d32 55%, #1b5e20 100%)',
    icon: 'maize',
    sizes: [
      { label: '5kg pack', price: 7500 },
      { label: '25kg bag', price: 35000 },
      { label: '50kg bag', price: 68000 },
    ],
  },
];

export const bulkProductOptions = [
  'Elubo (Yam Flour)',
  'Fresh Yam',
  'Garri',
  'Maize',
  'Other produce (specify in notes)',
];

export function formatNaira(amount) {
  return `₦${amount.toLocaleString('en-NG')}`;
}
