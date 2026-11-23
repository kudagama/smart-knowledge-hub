// 4G LTE Postpaid broadband and voice plans.

export const NEW_HBB_ANYTIME_PACKAGES = [
  {
    id: 'hbb-50',
    name: 'HBB Anytime 50GB',
    volume: '50 GB',
    volumeNum: 50,
    rentalWithoutTax: '1,290',
    rentalWithTax: '1,593.15', // 23.5% tax
    midnightThriller: 'Yes (Midnight to 7am Free Unlimited Data)',
    billingMode: 'Advanced Billing',
    staticIpEligible: false,
    badge: 'Entry Anytime',
    badgeStyle: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    desc: '50GB anytime quota + Free Midnight Thriller (12am-7am). Ideal starter home connection.'
  },
  {
    id: 'hbb-85',
    name: 'HBB Anytime 85GB',
    volume: '85 GB',
    volumeNum: 85,
    rentalWithoutTax: '1,890',
    rentalWithTax: '2,334.15',
    midnightThriller: 'Yes (Midnight to 7am Free Unlimited Data)',
    billingMode: 'Advanced Billing',
    staticIpEligible: false,
    badge: 'Household Plan',
    badgeStyle: 'bg-blue-100 text-blue-800 border-blue-300',
    desc: '85GB anytime quota with advance billing. Excellent for online study and daily streaming.'
  },
  {
    id: 'hbb-115',
    name: 'HBB Anytime 115GB',
    volume: '115 GB',
    volumeNum: 115,
    rentalWithoutTax: '2,590',
    rentalWithTax: '3,198.65',
    midnightThriller: 'Yes (Midnight to 7am Free Unlimited Data)',
    billingMode: 'Advanced Billing',
    staticIpEligible: false,
    badge: 'Most Popular',
    badgeStyle: 'bg-indigo-100 text-indigo-800 border-indigo-300 ring-1 ring-indigo-400',
    desc: '115GB pure anytime data. Highest customer demand for active multi-device households.',
    highlight: true
  },
  {
    id: 'hbb-200',
    name: 'HBB Anytime 200GB',
    volume: '200 GB',
    volumeNum: 200,
    rentalWithoutTax: '3,990',
    rentalWithTax: '4,927.65',
    midnightThriller: 'Yes (Midnight to 7am Free Unlimited Data)',
    billingMode: 'Advanced Billing',
    staticIpEligible: false,
    badge: 'Power User',
    badgeStyle: 'bg-purple-100 text-purple-800 border-purple-300',
    desc: '200GB high-volume anytime quota + free overnight downloads for heavy downloaders.'
  },
  {
    id: 'hbb-400',
    name: 'HBB Anytime 400GB',
    volume: '400 GB',
    volumeNum: 400,
    rentalWithoutTax: '7,990',
    rentalWithTax: '9,867.65',
    midnightThriller: 'Yes (Midnight to 7am Free Unlimited Data)',
    billingMode: 'Advanced Billing',
    staticIpEligible: true,
    badge: 'Static IP Eligible',
    badgeStyle: 'bg-amber-100 text-amber-950 border-amber-300 ring-2 ring-amber-400/50',
    desc: '400GB enterprise anytime capacity. The ONLY HBB Anytime package eligible for Static IP.',
    highlight: true
  }
];

export const VOLUME_BASED_PACKAGES = [
  { id: 'starter', name: 'Web Starter', rental: '950', rentalWithTax: '1,173.25', priorRental: '740', peak: '10 GB (was 11)', offPeak: '10 GB (was 17)', total: '20 GB', priorTotal: '28 GB' },
  { id: 'pal', name: 'Web Pal', rental: '1,250', rentalWithTax: '1,543.75', priorRental: '990', peak: '16 GB (was 18)', offPeak: '16 GB (was 27)', total: '32 GB', priorTotal: '45 GB' },
  { id: 'family-plus', name: 'Web Family Plus', rental: '1,790', rentalWithTax: '2,210.65', priorRental: '1,490', peak: '33 GB (was 36)', offPeak: '33 GB (was 54)', total: '66 GB', priorTotal: '90 GB' },
  { id: 'family-active', name: 'Web Family Active', rental: '2,390', rentalWithTax: '2,951.65', priorRental: '1,990', peak: '45 GB', offPeak: '65 GB', total: '110 GB', priorTotal: '110 GB' },
  { id: 'family-xtra', name: 'Web Family Xtra', rental: '3,090', rentalWithTax: '3,816.15', priorRental: '2,690', peak: '55 GB (was 60)', offPeak: '55 GB (was 90)', total: '110 GB', priorTotal: '150 GB' },
  { id: 'booster', name: 'Web Booster', rental: '4,050', rentalWithTax: '5,001.75', priorRental: '3,490', peak: '75 GB', offPeak: '110 GB', total: '185 GB', priorTotal: '185 GB' },
  { id: 'pro', name: 'Web Pro', rental: '5,650', rentalWithTax: '6,977.75', priorRental: '4,890', peak: '85 GB (was 95)', offPeak: '85 GB (was 140)', total: '170 GB', priorTotal: '235 GB' },
  { id: 'master', name: 'Web Master', rental: '9,750', rentalWithTax: '12,041.25', priorRental: '8,890', peak: '155 GB (was 170)', offPeak: '155 GB (was 255)', total: '310 GB', priorTotal: '425 GB' },
  { id: 'champ', name: 'Web Champ', rental: '15,090', rentalWithTax: '18,636.15', priorRental: '13,690', peak: '245 GB (was 270)', offPeak: '245 GB (was 405)', total: '490 GB', priorTotal: '675 GB' },
  { id: 'life', name: 'Web Life', rental: '21,890', rentalWithTax: '27,034.15', priorRental: '19,890', peak: '360 GB (was 400)', offPeak: '360 GB (was 600)', total: '720 GB', priorTotal: '1000 GB' },
  { id: 'inspire', name: 'Web Inspire', rental: '34,650', rentalWithTax: '42,792.75', priorRental: '33,000', peak: '610 GB (was 700)', offPeak: '610 GB (was 1000)', total: '1220 GB', priorTotal: '1700 GB' },
  { id: 'premier', name: 'Web Premier', rental: '60,900', rentalWithTax: '75,211.50', priorRental: '58,000', peak: '1100 GB (was 1250)', offPeak: '1100 GB (was 1750)', total: '2200 GB', priorTotal: '3000 GB' },
  { id: 'shareholder', name: 'SLT Share Holder Package', rental: '499', rentalWithTax: '616.27', priorRental: '499', peak: '7 GB (was 8)', offPeak: '14 GB (was 16)', total: '21 GB', priorTotal: '24 GB' }
];

export const LEGACY_ANYTIME_PACKAGES = [
  { id: 'any-joy', name: 'Any Joy', volume: '22 GB', rental: '1,150', rentalWithTax: '1,420.25', priorRental: '890', badge: 'Discontinued 01/05/2025' },
  { id: 'any-beat', name: 'Any Beat', volume: '36 GB', rental: '1,550', rentalWithTax: '1,914.25', priorRental: '1,290', badge: 'Discontinued 01/05/2025' },
  { id: 'any-flix', name: 'Any Flix', volume: '53 GB', rental: '2,150', rentalWithTax: '2,655.25', priorRental: '1,790', badge: 'Discontinued 01/05/2025' },
  { id: 'any-blaze', name: 'Any Blaze', volume: '72 GB', rental: '2,990', rentalWithTax: '3,692.65', priorRental: '2,490', badge: 'Discontinued 01/05/2025' },
  { id: 'any-tide', name: 'Any Tide', volume: '100 GB', rental: '3,890', rentalWithTax: '4,804.15', priorRental: '3,390', badge: 'Discontinued 01/05/2025' },
  { id: 'any-spike', name: 'Any Spike', volume: '130 GB', rental: '5,050', rentalWithTax: '6,236.75', priorRental: '4,390', badge: 'Discontinued 01/05/2025' },
  { id: 'any-storm', name: 'Any Storm', volume: '200 GB', rental: '7,490', rentalWithTax: '9,250.15', priorRental: '6,790', badge: 'Discontinued 01/05/2025' },
  { id: 'any-glam', name: 'Any Glam', volume: '350 GB', rental: '12,990', rentalWithTax: '16,042.65', priorRental: '11,790', badge: 'Discontinued 01/05/2025' },
  { id: 'any-delight', name: 'Any Delight', volume: '500 GB', rental: '18,490', rentalWithTax: '22,835.15', priorRental: '16,790', badge: 'Discontinued 01/05/2025' },
  { id: 'any-xtreme', name: 'Any Xtreme', volume: '750 GB', rental: '26,250', rentalWithTax: '32,418.75', priorRental: '25,000', badge: 'Discontinued 01/05/2025' }
];

export const UNLIMITED_RESIDENTIAL_PACKAGES = [
  {
    id: 'unlimited-2',
    name: 'LTE Unlimited 2',
    speed: '2 Mbps Constant',
    rental: '2,950',
    rentalWithTax: '3,643.25',
    priorRental: '2,250',
    dataOffering: 'Unlimited 24/7',
    badge: '2 Mbps Unlimited',
    badgeStyle: 'bg-slate-100 text-slate-800 border-slate-300',
    remarks: 'Uploading speed = Download speed (2 Mbps). Uncapped 24/7 broadband.'
  },
  {
    id: 'unlimited-4',
    name: 'LTE Unlimited 4',
    speed: '4 Mbps Constant',
    rental: '5,150',
    rentalWithTax: '6,360.25',
    priorRental: '3,950',
    dataOffering: 'Unlimited 24/7',
    badge: '4 Mbps Unlimited',
    badgeStyle: 'bg-blue-100 text-blue-800 border-blue-300',
    remarks: 'Continuous 4 Mbps speed. Smooth streaming and multi-user web surfing.'
  },
  {
    id: 'unlimited-8',
    name: 'LTE Unlimited 8',
    speed: '8 Mbps Constant',
    rental: '7,090',
    rentalWithTax: '8,756.15',
    priorRental: '5,450',
    dataOffering: 'Unlimited 24/7',
    badge: '8 Mbps Uncapped',
    badgeStyle: 'bg-purple-100 text-purple-800 border-purple-300',
    remarks: 'High-speed 8 Mbps continuous unlimited broadband. Upload speed equals download speed.'
  },
  {
    id: 'flash-5-res',
    name: 'Unlimited LTE Flash 5',
    speed: 'Normal LTE Speed (Daily First 5GB) -> Throttled to 1 Mbps',
    rental: '2,350',
    rentalWithTax: '2,902.25',
    priorRental: '1,950',
    dataOffering: 'Daily First 5GB @ full LTE speed, then 1 Mbps afterwards',
    midnightThriller: 'FREE UNLIMITED INTERNET at normal speed every day (12 midnight - 7am)',
    badge: 'Flash 5 Daily',
    badgeStyle: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    remarks: 'Add-ons allowed: Entertainment Combo, Youth, Gamer Lite/Prem, Streamer, PeoTV Go, Messenger, YouTube, LMS Lite/Max. Meet Lite & Meet Max are NOT allowed.',
    highlight: true
  },
  {
    id: 'flash-10-res',
    name: 'Unlimited LTE Flash 10',
    speed: 'Normal LTE Speed (Daily First 10GB) -> Throttled to 1 Mbps',
    rental: '4,090',
    rentalWithTax: '5,051.15',
    priorRental: '3,550',
    dataOffering: 'Daily First 10GB @ full LTE speed, then 1 Mbps afterwards',
    midnightThriller: 'FREE UNLIMITED INTERNET at normal speed every day (12 midnight - 7am)',
    badge: 'Flash 10 Daily',
    badgeStyle: 'bg-teal-100 text-teal-800 border-teal-300',
    remarks: 'Add-ons allowed: Entertainment Combo, Youth, Gamer Lite/Prem, Streamer, PeoTV Go, Messenger, YouTube, LMS Lite/Max. Meet Lite & Meet Max are NOT allowed.',
    highlight: true
  }
];

export const UNLIMITED_SME_PACKAGES = [
  {
    id: 'sme-flash-5',
    name: 'LTE Flash 5 (SME & Micro Business)',
    rental: '2,350',
    rentalWithTax: '2,902.25',
    priorRental: '1,950',
    transferFee: 'Rs. 500/= (from general packages to Unlimited)',
    fup: 'Daily First 5GB at normal LTE speed, afterwards throttling to 1 Mbps for that day',
    meetBundle: 'UNLIMITED internet at normal LTE speed ONLY for MEET bundle (MS Teams, Zoom, WebEx, Google Meet, SLT Lynked, Skype) — This usage is NOT included in daily quota!',
    commitment: '12 Months Commitment Period (Early termination fee: Rs. 5,000/- onetime fixed charge)',
    badge: 'SME Flash 5 + Free Meet',
    badgeStyle: 'bg-indigo-100 text-indigo-900 border-indigo-300'
  },
  {
    id: 'sme-flash-10',
    name: 'LTE Flash 10 (SME & Micro Business)',
    rental: '4,090',
    rentalWithTax: '5,051.15',
    priorRental: '3,550',
    transferFee: 'Rs. 500/= (from general packages to Unlimited)',
    fup: 'Daily First 10GB at normal LTE speed, afterwards throttling to 1 Mbps for that day',
    meetBundle: 'UNLIMITED internet at normal LTE speed ONLY for MEET bundle (MS Teams, Zoom, WebEx, Google Meet, SLT Lynked, Skype) — This usage is NOT included in daily quota!',
    commitment: '12 Months Commitment Period (Early termination fee: Rs. 5,000/- onetime fixed charge)',
    badge: 'SME Flash 10 + Free Meet',
    badgeStyle: 'bg-purple-100 text-purple-900 border-purple-300'
  }
];

export const UNLIMITED_VOICE_PACKAGES = [
  {
    id: 'unltd_home_dp',
    name: 'Unltd LTE Home Double Play Rs.747',
    rental: '747',
    rentalWithTax: '1,060.89',
    orderType: 'CREATE (New Customers) | MODIFY (Existing Migrations)',
    phoneClass: '4G LTE Double Play',
    allowedCategories: [
      'Individual Residencies',
      'Government Official Residencies',
      'SLT Official Residencies',
      'Diplomats & Delegates'
    ],
    badge: 'Residential DP',
    badgeStyle: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    highlight: true,
    commitment: 'No commitment period',
    advantages: [
      'Unlimited calls to ANY local network (On-net & Off-net island-wide)',
      'Clear, high-quality HD VoLTE voice clarity',
      'Postpaid package with zero surprise call charges',
      'No dropped calls or connection issues',
      'No more worrying about running out of minutes',
      'Keep your existing number (011-3XXXXXX) and phone',
      'No commitment period (cancel or modify anytime)'
    ]
  },
  {
    id: 'unltd_office_dp',
    name: 'Unltd LTE Office Double Play Rs.747',
    rental: '747',
    rentalWithTax: '1,060.89',
    orderType: 'CREATE (New Customers) | MODIFY (Existing Migrations)',
    phoneClass: '4G LTE Double Play',
    allowedCategories: [
      'Individual Business',
      'Individual Micro Business',
      'Small Business',
      'Regional - SME',
      'Registered Micro Business'
    ],
    badge: 'Business / SME',
    badgeStyle: 'bg-blue-100 text-blue-900 border-blue-300',
    commitment: 'No commitment period',
    advantages: [
      'Unlimited business calls to ANY local fixed or mobile network',
      'Secure & safe corporate grade calling',
      'Clear HD VoLTE voice for front desk and customer service',
      'Postpaid predictable monthly telephony expense',
      'No dropped calls or connection degradation',
      'Keep existing business number and phone',
      'No commitment period'
    ]
  },
  {
    id: 'unltd_dp_religious',
    name: 'Unltd 4G DP Religious Rs.747',
    rental: '747',
    rentalWithTax: '1,060.89',
    orderType: 'CREATE (New Customers) | MODIFY (Existing Migrations)',
    phoneClass: '4G LTE Double Play',
    allowedCategories: [
      'Religious Institute'
    ],
    badge: 'Religious DP',
    badgeStyle: 'bg-amber-100 text-amber-900 border-amber-300',
    commitment: 'No commitment period',
    advantages: [
      'Unlimited calls to all networks for temples, churches, kovils & mosques',
      'Clear, high-quality HD VoLTE voice',
      'Postpaid package without minute caps',
      'Keep existing religious institute landline number',
      'No commitment period'
    ]
  },
  {
    id: 'unltd_biz_pal_religious',
    name: 'Unltd 4G Biz Pal Religious Rs.747',
    rental: '747',
    rentalWithTax: '1,060.89',
    orderType: 'CREATE (New Customers) | MODIFY (Existing Migrations)',
    phoneClass: '4G LTE Biz Pal',
    allowedCategories: [
      'Religious Institute'
    ],
    badge: 'Biz Pal Religious',
    badgeStyle: 'bg-purple-100 text-purple-900 border-purple-300',
    commitment: 'No commitment period',
    advantages: [
      'Unlimited voice calls to any network for religious administration',
      '4G LTE Biz Pal phone classification',
      'Crystal clear HD VoLTE sound without dropouts',
      'Predictable flat Rs. 747 monthly bill',
      'No commitment period'
    ]
  },
  {
    id: 'unltd_voice_pal_basic',
    name: 'Unltd 4G Voice Pal Basic Rs.747',
    rental: '747',
    rentalWithTax: '1,060.89',
    orderType: 'CREATE (New Customers) | MODIFY (Existing Migrations)',
    phoneClass: '4G Voice Pal (Single Play Voice)',
    allowedCategories: [
      'Individual Residencies',
      'Government Official Residencies',
      'SLT Official Residencies',
      'Diplomats & Delegates',
      'Individual Business',
      'Individual Micro Business',
      'Small Business',
      'Regional - SME',
      'Registered Micro Business'
    ],
    badge: 'Single Play Voice',
    badgeStyle: 'bg-teal-100 text-teal-900 border-teal-300',
    highlight: true,
    commitment: 'No commitment period',
    advantages: [
      'Dedicated fixed voice phone service WITHOUT requiring broadband package',
      'Unlimited calls to ANY network (SLT, Mobitel, Dialog, Airtel, Hutch)',
      'Works seamlessly on VoLTE fixed desk phones',
      'Postpaid package, no minute cards or reloads',
      'Keep existing number and desk phone',
      'No commitment period on this Unlimited Rs. 747 plan'
    ]
  }
];

export const STANDARD_VOICE_PACKAGES_MATRIX = [
  {
    category: '4G Voice Pal (Single Play)',
    pkg: 'Basic (Effective from 05/09/2022)',
    rental: '479',
    rentalWithTax: '680.28',
    oldRental: '399',
    priceOverriding: 'Min: 0 | Max: 1000',
    onNetActive: '1.25',
    onNetLeisure: '1.25',
    offNetActive: '1.75',
    offNetLeisure: '1.75',
    freeMinutes: '300 (On-net)',
    data: 'Free 200MB',
    extraData: 'Rs. 0.30/MB (Max 3GB limit)',
    phone: 'Customer purchases phone',
    commitment: '1 Year (Termination Rs. 600/remaining mo)',
    badge: 'Voice Pal Basic',
    badgeStyle: 'bg-teal-50 text-teal-900 border-teal-300'
  },
  {
    category: '4G Voice Pal (Single Play)',
    pkg: 'Premium (Effective from 05/09/2022)',
    rental: '999',
    rentalWithTax: '1,418.78',
    oldRental: null,
    priceOverriding: 'Min: 0 | Max: 1000',
    onNetActive: '3.90 per minute',
    onNetLeisure: '3.90 per minute',
    offNetActive: '5.90 per minute',
    offNetLeisure: '5.90 per minute',
    freeMinutes: '1,000 (On-net)',
    data: 'Free 500MB',
    extraData: 'Rs. 0.30/MB (Max 3GB limit)',
    phone: 'Customer purchases phone',
    commitment: '1 Year (Termination Rs. 600/remaining mo)',
    badge: 'Voice Pal Premium',
    badgeStyle: 'bg-emerald-50 text-emerald-900 border-emerald-300'
  },
  {
    category: '4G Net Pal (Single Play)',
    pkg: 'Net Pal (Data Only)',
    rental: 'Free',
    rentalWithTax: 'Free',
    oldRental: null,
    priceOverriding: 'NA',
    onNetActive: 'NA',
    onNetLeisure: 'NA',
    offNetActive: 'NA',
    offNetLeisure: 'NA',
    freeMinutes: 'NA',
    data: 'Based on the BB Package',
    extraData: 'Standard Extra GB',
    phone: 'NA',
    commitment: 'Standard 4G',
    badge: 'Net Pal Single',
    badgeStyle: 'bg-slate-100 text-slate-800 border-slate-300'
  },
  {
    category: 'Double Play (Voice & BB)',
    pkg: 'Residential (Effective from 05/09/2022)',
    rental: '370 (Voice Rental)',
    rentalWithTax: '525.47 (Voice)',
    oldRental: '310',
    priceOverriding: 'Min: 0 | Max: 1000',
    onNetActive: '1.70 (1-3 min) / 1.50 (>3 min)',
    onNetLeisure: '1.50',
    offNetActive: '2.70',
    offNetLeisure: '2.00',
    freeMinutes: 'NA',
    data: 'Based on the BB Package',
    extraData: 'Standard Extra GB',
    phone: 'CPE / VoLTE phone',
    commitment: 'Standard 4G',
    badge: 'DP Residential',
    badgeStyle: 'bg-blue-50 text-blue-900 border-blue-300'
  },
  {
    category: 'Double Play (Voice & BB)',
    pkg: 'Business',
    rental: '599 (Voice Rental)',
    rentalWithTax: '850.70 (Voice)',
    oldRental: '499',
    priceOverriding: 'Min: 0 | Max: 1000',
    onNetActive: '1.70 (1-3 min) / 1.50 (>3 min)',
    onNetLeisure: '1.50',
    offNetActive: '2.70',
    offNetLeisure: '2.00',
    freeMinutes: '100 (On-net)',
    data: 'Based on the BB Package',
    extraData: 'Standard Extra GB',
    phone: 'CPE / VoLTE phone',
    commitment: 'Standard 4G',
    badge: 'DP Business',
    badgeStyle: 'bg-indigo-50 text-indigo-900 border-indigo-300'
  },
  {
    category: 'Double Play (Voice & BB)',
    pkg: 'Religious (Effective from 05/09/2022)',
    rental: '60 (Voice Rental)',
    rentalWithTax: '85.21 (Voice)',
    oldRental: '50',
    priceOverriding: 'Min: 0 | Max: 1000',
    onNetActive: '1.70 (1-3 min) / 1.50 (>3 min)',
    onNetLeisure: '1.50',
    offNetActive: '2.70',
    offNetLeisure: '2.00',
    freeMinutes: 'NA',
    data: 'Based on the BB Package',
    extraData: 'Standard Extra GB',
    phone: 'CPE / VoLTE phone',
    commitment: 'Standard 4G',
    badge: 'DP Religious',
    badgeStyle: 'bg-amber-50 text-amber-900 border-amber-300'
  },
  {
    category: 'Biz Pal',
    pkg: 'Business',
    rental: '499',
    rentalWithTax: '708.68',
    oldRental: null,
    priceOverriding: 'Min: 0 | Max: 1000',
    onNetActive: '1.90 (1-3 min) / 1.50 (>3 min)',
    onNetLeisure: '1.50',
    offNetActive: '2.90',
    offNetLeisure: '2.00',
    freeMinutes: '100 (On-net)',
    data: 'Based on the BB Package',
    extraData: 'Standard Extra GB',
    phone: 'CPE / VoLTE phone',
    commitment: 'Standard 4G',
    badge: 'Biz Pal Business',
    badgeStyle: 'bg-purple-50 text-purple-900 border-purple-300'
  },
  {
    category: 'Biz Pal',
    pkg: 'Religious',
    rental: '50',
    rentalWithTax: '71.01',
    oldRental: null,
    priceOverriding: 'Min: 0 | Max: 1000',
    onNetActive: '1.90 (1-3 min) / 1.50 (>3 min)',
    onNetLeisure: '1.50',
    offNetActive: '2.90',
    offNetLeisure: '2.00',
    freeMinutes: 'NA',
    data: 'Based on the BB Package',
    extraData: 'Standard Extra GB',
    phone: 'CPE / VoLTE phone',
    commitment: 'Standard 4G',
    badge: 'Biz Pal Religious',
    badgeStyle: 'bg-amber-50 text-amber-900 border-amber-300'
  },
  {
    category: 'Smart Dial / Smart Dial Plus',
    pkg: 'Smart Dial / Plus',
    rental: '0',
    rentalWithTax: '0',
    oldRental: null,
    priceOverriding: 'Min: 0 | Max: 1000',
    onNetActive: '1.90 (1-3 min) / 1.50 (>3 min)',
    onNetLeisure: '1.50',
    offNetActive: '2.90',
    offNetLeisure: '2.00',
    freeMinutes: '100 (On-net)',
    data: 'Based on the BB Package',
    extraData: 'Standard Extra GB',
    phone: 'CPE / VoLTE phone',
    commitment: 'Standard 4G',
    badge: 'Smart Dial Plus',
    badgeStyle: 'bg-cyan-50 text-cyan-900 border-cyan-300'
  }
];
