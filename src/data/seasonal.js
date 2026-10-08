/**
 * Seasonal availability calendar.
 * level: 'peak' | 'good' | 'off'
 * Peak = best quality & widest supply, good = steady supply, off = limited.
 */
export const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const seasonalRows = [
  {
    product: 'Elubo (Yam Flour)',
    note: 'Best drying conditions during harmattan; stocked year-round.',
    months: [
      'peak', 'peak', 'peak', 'good', 'good', 'good',
      'good', 'good', 'good', 'good', 'peak', 'peak',
    ],
  },
  {
    product: 'Fresh Yam',
    note: 'Main harvest lands July – October; tubers at their heaviest.',
    months: [
      'good', 'good', 'good', 'off', 'off', 'good',
      'peak', 'peak', 'peak', 'peak', 'peak', 'good',
    ],
  },
  {
    product: 'Garri',
    note: 'Dry-season frying (Nov – Feb) gives the crispest grain.',
    months: [
      'peak', 'peak', 'peak', 'good', 'good', 'good',
      'good', 'good', 'good', 'good', 'peak', 'peak',
    ],
  },
  {
    product: 'Maize',
    note: 'Wet-season harvest July – Sept, then dried and sealed for storage.',
    months: [
      'good', 'good', 'good', 'good', 'good', 'good',
      'peak', 'peak', 'peak', 'good', 'good', 'good',
    ],
  },
];

/** Expected lead times, including high-demand periods. */
export const leadTimes = [
  {
    period: 'Regular season (everyday orders)',
    scope: 'Retail orders within Oyo, Ibadan & Lagos',
    lead: '1 – 3 working days',
  },
  {
    period: 'Festive peaks (December, Easter, Sallah)',
    scope: 'All retail orders nationwide',
    lead: '5 – 7 working days — book early',
  },
  {
    period: 'Bulk / wholesale orders',
    scope: 'From 10 bags or 100kg upwards',
    lead: '7 – 14 days (sourcing & processing window)',
  },
  {
    period: 'Export-grade / large institutional orders',
    scope: 'Pallet quantities with documentation',
    lead: '21 – 30 days with advance booking',
  },
];

export const highDemandPeriods = [
  {
    title: 'December / Christmas & New Year',
    text: 'Elubo demand can triple in the last two weeks of December. Bulk buyers should lock orders by the first week of November.',
  },
  {
    title: 'Easter & Eid Celebrations',
    text: 'Fresh yam and garri move fast around public holidays. Reserve 2 weeks ahead for guaranteed dispatch slots.',
  },
  {
    title: 'Back-to-school & Corporate Gifting',
    text: 'January and September bring steady institutional demand for repacked 5L and 10L buckets.',
  },
];
