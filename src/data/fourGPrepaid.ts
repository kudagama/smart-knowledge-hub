// 4G LTE Prepaid plans, add-ons, connection charges and reload validity.

export const PREPAID_CONNECTION_CHARGES = [
  {
    type: 'New LTE Connection (With CPE)',
    withoutTax: '4,048.96',
    withTax: '4,990',
    priorPrice: '7,241 / 7,900',
    badge: 'Standard Starter Unit',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    warranty: '12 Months Warranty',
    commitment: '1 Year Commitment',
    conditions: 'Includes New CAT 4 CPE unit. Transferred to customer ownership after 12 months warranty. Requires minimum Rs. 500 initial reload.'
  },
  {
    type: 'Refurbished CPE Connection',
    withoutTax: '3,165.18',
    withTax: '3,900',
    priorPrice: '4,750 (2,450/3,000)',
    badge: 'Budget Reconditioned',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    warranty: '6 Months Warranty',
    commitment: '1 Year Commitment',
    conditions: 'Factory refurbished & tested CAT 4 CPE. Early termination fee of Rs. 5,000 applies if disconnected within commitment period.'
  },
  {
    type: 'Migration (Postpaid to Prepaid)',
    withoutTax: '700.00',
    withTax: '825',
    priorPrice: 'Standard Fee',
    badge: 'Zero Monthly Rental',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
    warranty: 'Existing CPE Maintained',
    commitment: 'No Commitment',
    conditions: 'For active postpaid customers seeking to eliminate recurring monthly rental bills while retaining their existing connection & number.'
  },
  {
    type: 'SIM Only (BYOD - Customer Router)',
    withoutTax: '1,016.95',
    withTax: '1,200',
    priorPrice: '1,400',
    badge: 'Freedom BYOD',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    warranty: 'SIM Lifetime Warranty',
    commitment: 'No Commitment / Zero Lock-in',
    conditions: 'Customer uses own compatible 4G router supporting Band 40 (2300 MHz) or Band 38. Zero early termination fees.'
  },
  {
    type: 'SIM Activation Fee (Standalone)',
    withoutTax: '1,016.95',
    withTax: '1,200',
    priorPrice: '1,200',
    badge: 'Network Provisioning',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
    warranty: 'Instant Activation',
    commitment: 'Standalone Issuance',
    conditions: 'Standard TRCSL registered SIM issuance and core network IMS/HSS profile initialization fee.'
  },
  {
    type: 'Minimum Physical Reload (Eff. 12/01/2024)',
    withoutTax: '423.73',
    withTax: '500',
    priorPrice: '100 / 200',
    badge: 'Retail Floor Limit',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    warranty: '60 Days Active Validity',
    commitment: 'Islandwide Retailers',
    conditions: 'Mandatory minimum threshold at all physical retail dealer counters & POS outlets (Keells, Food City, Singer, dealers).'
  }
];

export const MAIN_PACKAGES = [
  {
    id: 'hbb-anytime-899',
    name: 'HBB Anytime - 899',
    subtitle: 'High-Speed 24/7 Pure Anytime Volume',
    status: 'Active',
    statusDate: 'Available from 12th February 2025',
    recurrence: 'Onetime',
    volume: '35 GB',
    volumeNum: 35,
    validity: '30 Days',
    price: '899',
    popular: true,
    accentGradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    borderColor: 'border-emerald-300 ring-2 ring-emerald-500/20',
    notes: 'No day/night split, no hourly restriction, and no daily throttling. Ideal for families and small offices needing reliable 24-hour broadband.'
  },
  {
    id: 'hbb-anytime-1899',
    name: 'HBB Anytime - 1899',
    subtitle: 'Power User High-Capacity Anytime Bundle',
    status: 'Active',
    statusDate: 'Available from 12th February 2025',
    recurrence: 'Onetime',
    volume: '75 GB',
    volumeNum: 75,
    validity: '30 Days',
    price: '1,899',
    popular: false,
    accentGradient: 'from-blue-600 via-indigo-600 to-purple-800',
    borderColor: 'border-blue-300 hover:border-blue-500',
    notes: 'Massive 75GB quota usable anytime day or night. Best for heavy video streaming, cloud backups, and intensive remote workstations.'
  },
  {
    id: 'home-bb-30',
    name: '4G LTE - Home Broadband - 30 Days',
    subtitle: 'Standard Monthly Plan with Voice Perks',
    status: 'Active',
    statusDate: 'Standard Plan',
    recurrence: 'Onetime',
    volume: '20 GB',
    volumeNum: 20,
    validity: '30 Days',
    price: '535',
    popular: false,
    accentGradient: 'from-slate-700 to-slate-900',
    borderColor: 'border-slate-300 hover:border-slate-500',
    notes: 'Affordable monthly base pack. Out-of-bundle PAYG rate of Rs. 0.08666/MB applies once quota is depleted if no add-on is loaded.'
  },
  {
    id: 'home-bb-14',
    name: '4G LTE - Home Broadband - 14 Days',
    subtitle: 'Bi-Weekly Allocation Pack (Legacy)',
    status: 'Discontinued',
    statusDate: 'Discontinued from 15th January 2026',
    recurrence: 'Onetime',
    volume: '10 GB',
    volumeNum: 10,
    validity: '14 Days',
    price: '295',
    popular: false,
    accentGradient: 'from-slate-400 to-slate-600',
    borderColor: 'border-slate-200 opacity-75',
    notes: 'Discontinued from 15th January 2026. Kept for billing dispute lookup and historical customer reconciliation.'
  },
  {
    id: 'home-bb-7',
    name: '4G LTE - Home Broadband - 7 Days',
    subtitle: 'Weekly Allocation Pack (Legacy)',
    status: 'Discontinued',
    statusDate: 'Discontinued from 15th January 2026',
    recurrence: 'Onetime',
    volume: '5 GB',
    volumeNum: 5,
    validity: '7 Days',
    price: '155',
    popular: false,
    accentGradient: 'from-slate-400 to-slate-600',
    borderColor: 'border-slate-200 opacity-75',
    notes: 'Discontinued from 15th January 2026. Historical reference tier.'
  }
];

export const DATA_ADDONS = [
  {
    id: 'work-learn-30',
    name: 'Work & Learn Addon 30 Days',
    category: 'Work & Education',
    recurrence: 'Onetime',
    volume: '30 GB',
    validity: '30 Days',
    price: '235',
    highlight: 'Rs. 7.83 / GB',
    tagColor: 'bg-blue-100 text-blue-900 border-blue-300',
    apps: [
      { name: 'Zoom', bg: 'bg-[#2D8CFF] text-white' },
      { name: 'Microsoft Teams', bg: 'bg-[#464EB8] text-white' },
      { name: 'Office 365', bg: 'bg-[#D83B01] text-white' },
      { name: 'Google Meet', bg: 'bg-[#00AC47] text-white' }
    ],
    restriction: 'Zoom, MS Teams, Office 365, Google Meet only',
    description: 'Specialized education and remote workspace quota. Dedicated pipeline ensuring uninterrupted online lectures and video meetings.'
  },
  {
    id: 'youtube-social-30',
    name: 'YouTube & Social Media Addon 30 Days',
    category: 'Entertainment & Social',
    recurrence: 'Onetime',
    volume: '25 GB',
    validity: '30 Days',
    price: '390',
    highlight: '7 Top Apps Included',
    tagColor: 'bg-rose-100 text-rose-900 border-rose-300',
    apps: [
      { name: 'WhatsApp', bg: 'bg-[#25D366] text-white' },
      { name: 'YouTube', bg: 'bg-[#FF0000] text-white' },
      { name: 'Facebook', bg: 'bg-[#1877F2] text-white' },
      { name: 'Instagram', bg: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' },
      { name: 'TikTok', bg: 'bg-black text-white' },
      { name: 'Spotify', bg: 'bg-[#1DB954] text-white' },
      { name: 'Viber', bg: 'bg-[#7360F2] text-white' },
      { name: 'IMO', bg: 'bg-[#0091FF] text-white' }
    ],
    restriction: 'WhatsApp Messenger, Viber Messenger, IMO Messenger, Facebook & Facebook Messenger, Instagram, TikTok, Spotify',
    description: 'Comprehensive media pass covering top social networks, music streaming, and voice/video messaging protocols.'
  },
  {
    id: 'anytime-5gb-7d',
    name: 'Anytime Addon 5GB (7 Days)',
    category: 'Anytime Booster',
    recurrence: 'Onetime',
    volume: '5 GB',
    validity: '7 Days',
    price: '249',
    highlight: 'Quick Top-Up',
    tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    apps: [{ name: 'All Web Protocols (Unrestricted)', bg: 'bg-emerald-700 text-white' }],
    restriction: 'Unrestricted open internet access',
    description: 'Fast 1-week data booster for sudden high-usage requirements or project downloads.'
  },
  {
    id: 'anytime-5gb-30d',
    name: 'Anytime Addon 5GB (30 Days)',
    category: 'Anytime Booster',
    recurrence: 'Onetime',
    volume: '5 GB',
    validity: '30 Days',
    price: '298',
    highlight: 'Full Month Cushion',
    tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    apps: [{ name: 'All Web Protocols (Unrestricted)', bg: 'bg-emerald-700 text-white' }],
    restriction: 'Unrestricted open internet access',
    description: 'Monthly 5GB cushion that stays active for 30 full days alongside your base account.'
  },
  {
    id: 'anytime-10gb-7d',
    name: 'Anytime Addon 10GB (7 Days)',
    category: 'Anytime Booster',
    recurrence: 'Onetime',
    volume: '10 GB',
    validity: '7 Days',
    price: '460',
    highlight: 'High Speed Burst',
    tagColor: 'bg-teal-100 text-teal-900 border-teal-300',
    apps: [{ name: 'All Web Protocols (Unrestricted)', bg: 'bg-teal-700 text-white' }],
    restriction: 'Unrestricted open internet access',
    description: 'Heavy weekly data pass designed for short bursts of intensive file downloads or software updates.'
  },
  {
    id: 'anytime-10gb-30d',
    name: 'Anytime Addon 10GB (30 Days)',
    category: 'Anytime Booster',
    recurrence: 'Onetime',
    volume: '10 GB',
    validity: '30 Days',
    price: '570',
    highlight: 'Best Monthly Value',
    tagColor: 'bg-teal-100 text-teal-900 border-teal-300',
    apps: [{ name: 'All Web Protocols (Unrestricted)', bg: 'bg-teal-700 text-white' }],
    restriction: 'Unrestricted open internet access',
    description: 'Generous 10GB anytime monthly top-up pass for steady day-to-day work.'
  }
];

export const RELOAD_VALIDITY_MATRIX = [
  { lower: '20', upper: '49', days: 3, label: '3 Calendar Days', tier: 'Tier 1', channel: 'MySLT SelfCare / Online Banking' },
  { lower: '50', upper: '99', days: 7, label: '7 Calendar Days', tier: 'Tier 2', channel: 'MySLT SelfCare (Min. Card Rs. 50)' },
  { lower: '100', upper: '199', days: 15, label: '15 Calendar Days', tier: 'Tier 3', channel: 'Digital Banking / ATM CDMs' },
  { lower: '200', upper: '499', days: 30, label: '30 Calendar Days (1 Month)', tier: 'Tier 4', channel: 'Digital & Merchant Top-ups' },
  { lower: '500', upper: '999', days: 60, label: '60 Calendar Days (2 Months)', tier: 'Tier 5', channel: 'Min. Retail POS (Food City/Keells/Dealers)' },
  { lower: '1,000', upper: '1,999', days: 90, label: '90 Calendar Days (3 Months)', tier: 'Tier 6', channel: 'All Channels Island-wide' },
  { lower: '2,000', upper: '4,999', days: 120, label: '120 Calendar Days (4 Months)', tier: 'Tier 7', channel: 'All Channels Island-wide' },
  { lower: '5,000', upper: 'And Above', days: 180, label: '180 Calendar Days (6 Months)', tier: 'Tier 8', channel: 'Max. Single Top-Up Validity' }
];
