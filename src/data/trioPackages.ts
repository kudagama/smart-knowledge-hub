/**
 * SLT-Mobitel Trio Bundled Packages - Master Source of Truth (SSOT)
 * 
 * Includes comprehensive pricing, itemized tax breakdowns (CESS, TL, SSCL, VAT),
 * technical specifications, operational migration rules, call center SOPs,
 * and AI Bot RAG retrieval schemas.
 * 
 * IMPORTANT PORTFOLIO STATUS:
 * - Active Packages: Trio Shine, Trio Vibe Plus (Vibe+), Trio Vibe
 * - Discontinued / Inactive: Trio Pet (No longer available for new activations)
 * - Note: There is NO package named "Trio Fit".
 */

export interface TaxComponent {
  ratePercentage: number;
  amountLkr: number;
}

export interface ServicePriceBreakdown {
  service: 'BROADBAND' | 'LINE_RENTAL' | 'PEO_TV' | 'DIGITAL_SERVICES';
  displayName: string;
  basePriceLkr: number;
  percentageOfBundle: number;
  cess: number;       // 2.04% CESS
  tl: number;         // 15% Telecommunication Levy (applies to Line Rental & TV, 0% on Broadband)
  sscl: number;       // 2.56% Social Security Contribution Levy
  vat: number;        // 18.00% Value Added Tax
  totalTaxLkr: number;
  priceWithTaxLkr: number;
}

export interface TrioPackage {
  id: string;
  code: string;
  name: string;
  tier: 'FLAGSHIP' | 'POPULAR' | 'VALUE' | 'LEGACY';
  isDiscontinued?: boolean;
  discontinuedNotice?: string;
  tagline: string;
  badge: string;
  accentColor: {
    primary: string;
    light: string;
    border: string;
    gradient: string;
    pill: string;
  };
  pricing: {
    basePriceWithoutTaxLkr: number;
    effectiveTaxRatePercentage: number;
    totalTaxLkr: number;
    priceWithTaxLkr: number;
    taxBreakdown: {
      cess: TaxComponent; // 2.04%
      tl: TaxComponent;   // Effective TL
      sscl: TaxComponent; // 2.56%
      vat: TaxComponent;  // 18.00%
    };
    serviceBreakdowns: ServicePriceBreakdown[];
  };
  broadband: {
    anytimeQuotaGb: number;
    freeNightTime: boolean;
    nightQuotaDesc: string;
    uploadSpeed: string;
    downloadSpeed: string;
    fairUsagePolicy: string;
  };
  peoTv: {
    channelCount: number;
    packageTier: string;
    stbIncluded: boolean;
    freeOttBonus: string[];
    multiRoomAvailable: boolean;
  };
  voice: {
    freeLineRental: boolean;
    sltToSltMinutes: string;
    otherNetworkTariff: string;
  };
  commitmentMonths: number;
  earlyTerminationFeeLkr: number;
  highlights: string[];
  bestFor: string;
}

export interface TrioSopRule {
  id: string;
  ruleCode: string;
  title: string;
  description: string;
  channel: 'CONTACT_CENTER_1212' | 'TELESHOP_RTO' | 'CRM_CLOG' | 'TCV_RETENTION';
  eligibility: string;
  actionRequired: string;
  earlyTerminationPolicy?: string;
  ttTemplate?: string;
}

export interface TrioFaqItem {
  id: string;
  question: string;
  answer: string;
  author: string;
  role: string;
  date: string;
  category: 'PRICING' | 'ELIGIBILITY' | 'MIGRATION' | 'TERMINATION' | 'HARDWARE' | 'STATUS';
  verified: boolean;
}

// ---------------------------------------------------------------------------
// 1. MASTER TRIO PACKAGES DATASET
// ---------------------------------------------------------------------------

export const TRIO_PACKAGES: TrioPackage[] = [
  {
    id: 'trio-shine',
    code: 'SHINE',
    name: 'Trio Shine',
    tier: 'FLAGSHIP',
    isDiscontinued: false,
    tagline: 'The Ultimate All-in-One Digital Home Experience',
    badge: 'Premium Flagship',
    accentColor: {
      primary: '#0284c7', // sky-600
      light: 'bg-sky-50',
      border: 'border-sky-300 hover:border-sky-500',
      gradient: 'from-blue-700 via-sky-600 to-cyan-500',
      pill: 'bg-sky-100 text-sky-900 border-sky-300'
    },
    pricing: {
      basePriceWithoutTaxLkr: 4950.00,
      effectiveTaxRatePercentage: 28.74,
      totalTaxLkr: 1422.48,
      priceWithTaxLkr: 6372.47,
      taxBreakdown: {
        cess: { ratePercentage: 2.04, amountLkr: 100.98 },
        tl: { ratePercentage: 4.34, amountLkr: 214.63 },
        sscl: { ratePercentage: 2.56, amountLkr: 134.80 },
        vat: { ratePercentage: 18.00, amountLkr: 972.07 }
      },
      serviceBreakdowns: [
        {
          service: 'BROADBAND',
          displayName: 'Fibre Broadband (Anytime 100GB)',
          basePriceLkr: 3347.43,
          percentageOfBundle: 67.62,
          cess: 68.29,
          tl: 0.00,
          sscl: 87.44,
          vat: 630.57,
          totalTaxLkr: 786.30,
          priceWithTaxLkr: 4133.73
        },
        {
          service: 'LINE_RENTAL',
          displayName: 'Voice Line Rental (SLT-to-SLT Free)',
          basePriceLkr: 600.96,
          percentageOfBundle: 12.14,
          cess: 12.26,
          tl: 91.98,
          sscl: 18.05,
          vat: 130.19,
          totalTaxLkr: 252.48,
          priceWithTaxLkr: 853.44
        },
        {
          service: 'PEO_TV',
          displayName: 'PEO TV Platinum (95 Channels)',
          basePriceLkr: 801.28,
          percentageOfBundle: 16.19,
          cess: 16.35,
          tl: 122.64,
          sscl: 24.07,
          vat: 173.58,
          totalTaxLkr: 336.64,
          priceWithTaxLkr: 1137.92
        },
        {
          service: 'DIGITAL_SERVICES',
          displayName: 'Digital Services & OTT Perks',
          basePriceLkr: 200.32,
          percentageOfBundle: 4.05,
          cess: 4.09,
          tl: 0.00,
          sscl: 5.23,
          vat: 37.74,
          totalTaxLkr: 47.05,
          priceWithTaxLkr: 247.37
        }
      ]
    },
    broadband: {
      anytimeQuotaGb: 100,
      freeNightTime: true,
      nightQuotaDesc: 'Unlimited Free Night-Time Data (00:00 - 07:00)',
      uploadSpeed: 'Unlimited High-Speed Optical Uploads',
      downloadSpeed: 'Up to 1Gbps GPON Fiber Speeds',
      fairUsagePolicy: 'Standard TRCSL Fair Usage Policy applies'
    },
    peoTv: {
      channelCount: 95,
      packageTier: 'Platinum / Titanium Tier',
      stbIncluded: true,
      freeOttBonus: ['PEO Mobile App (Free Access)', 'Lionsgate Play / HBO Bonus OTT Platform'],
      multiRoomAvailable: true
    },
    voice: {
      freeLineRental: true,
      sltToSltMinutes: 'Unlimited Free Calls (SLT-to-SLT Wireline)',
      otherNetworkTariff: 'Standard TRCSL Approved Off-Net Rate (Rs. 1.50/min)'
    },
    commitmentMonths: 12,
    earlyTerminationFeeLkr: 1000.00,
    highlights: [
      '100 GB Anytime Data + Free Night Time Data',
      '95 PEO TV Channels with High Definition (HD)',
      'Free Voice Line Rental & Unlimited SLT-to-SLT calls',
      'Free OTT Platform Access (PEO Mobile & Lionsgate/HBO)',
      'Single Consolidated Monthly Bill with bundled savings'
    ],
    bestFor: 'Power users, digital families, HD entertainment & home-office professionals'
  },
  {
    id: 'trio-vibe-plus',
    code: 'VIBE_PLUS',
    name: 'Trio Vibe Plus (Vibe+)',
    tier: 'POPULAR',
    isDiscontinued: false,
    tagline: 'High-Speed Broadband with Expanded Entertainment',
    badge: 'Most Popular',
    accentColor: {
      primary: '#059669', // emerald-600
      light: 'bg-emerald-50',
      border: 'border-emerald-300 hover:border-emerald-500',
      gradient: 'from-emerald-700 via-teal-600 to-cyan-600',
      pill: 'bg-emerald-100 text-emerald-900 border-emerald-300'
    },
    pricing: {
      basePriceWithoutTaxLkr: 4100.00,
      effectiveTaxRatePercentage: 32.98,
      totalTaxLkr: 1352.07,
      priceWithTaxLkr: 5452.07,
      taxBreakdown: {
        cess: { ratePercentage: 2.04, amountLkr: 83.64 },
        tl: { ratePercentage: 7.84, amountLkr: 321.43 },
        sscl: { ratePercentage: 2.56, amountLkr: 115.33 },
        vat: { ratePercentage: 18.00, amountLkr: 831.67 }
      },
      serviceBreakdowns: [
        {
          service: 'BROADBAND',
          displayName: 'Fibre Broadband (Anytime 70GB)',
          basePriceLkr: 2000.00,
          percentageOfBundle: 48.78,
          cess: 40.80,
          tl: 0.00,
          sscl: 52.24,
          vat: 376.75,
          totalTaxLkr: 469.79,
          priceWithTaxLkr: 2469.79
        },
        {
          service: 'LINE_RENTAL',
          displayName: 'Voice Line Rental (SLT-to-SLT Free)',
          basePriceLkr: 600.00,
          percentageOfBundle: 14.63,
          cess: 12.24,
          tl: 91.84,
          sscl: 18.07,
          vat: 129.98,
          totalTaxLkr: 252.08,
          priceWithTaxLkr: 852.08
        },
        {
          service: 'PEO_TV',
          displayName: 'PEO TV Entertainment (87 Channels)',
          basePriceLkr: 1500.00,
          percentageOfBundle: 36.59,
          cess: 30.60,
          tl: 229.59,
          sscl: 45.08,
          vat: 324.95,
          totalTaxLkr: 630.20,
          priceWithTaxLkr: 2130.20
        }
      ]
    },
    broadband: {
      anytimeQuotaGb: 70,
      freeNightTime: true,
      nightQuotaDesc: 'Unlimited Free Night-Time Data (00:00 - 07:00)',
      uploadSpeed: 'Unlimited High-Speed Optical Uploads',
      downloadSpeed: 'Up to 1Gbps GPON Fiber Speeds',
      fairUsagePolicy: 'Standard TRCSL Fair Usage Policy applies'
    },
    peoTv: {
      channelCount: 87,
      packageTier: 'Entertainment Tier',
      stbIncluded: true,
      freeOttBonus: ['PEO Mobile App (Free Access)'],
      multiRoomAvailable: true
    },
    voice: {
      freeLineRental: true,
      sltToSltMinutes: 'Unlimited Free Calls (SLT-to-SLT Wireline)',
      otherNetworkTariff: 'Standard TRCSL Approved Off-Net Rate (Rs. 1.50/min)'
    },
    commitmentMonths: 12,
    earlyTerminationFeeLkr: 1000.00,
    highlights: [
      '70 GB Anytime Data + Free Night Time Data',
      '87 PEO TV Channels with Live Pause & Rewind',
      'Free Voice Line Rental & Unlimited SLT-to-SLT calls',
      'Free PEO Mobile companion app included',
      'Balanced pricing for daily entertainment and streaming'
    ],
    bestFor: 'Modern households enjoying a mix of sports, kids entertainment & streaming'
  },
  {
    id: 'trio-vibe',
    code: 'VIBE',
    name: 'Trio Vibe',
    tier: 'VALUE',
    isDiscontinued: false,
    tagline: 'Smart Triple-Play Value for Daily Online Living',
    badge: 'Best Value',
    accentColor: {
      primary: '#d97706', // amber-600
      light: 'bg-amber-50',
      border: 'border-amber-300 hover:border-amber-500',
      gradient: 'from-amber-600 via-orange-600 to-rose-600',
      pill: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    pricing: {
      basePriceWithoutTaxLkr: 3530.00,
      effectiveTaxRatePercentage: 30.84,
      totalTaxLkr: 1088.51,
      priceWithTaxLkr: 4618.51,
      taxBreakdown: {
        cess: { ratePercentage: 2.04, amountLkr: 72.01 },
        tl: { ratePercentage: 6.07, amountLkr: 214.28 },
        sscl: { ratePercentage: 2.56, amountLkr: 97.70 },
        vat: { ratePercentage: 18.00, amountLkr: 704.52 }
      },
      serviceBreakdowns: [
        {
          service: 'BROADBAND',
          displayName: 'Fibre Broadband (Anytime 40GB)',
          basePriceLkr: 2130.00,
          percentageOfBundle: 60.34,
          cess: 43.45,
          tl: 0.00,
          sscl: 55.64,
          vat: 401.24,
          totalTaxLkr: 500.33,
          priceWithTaxLkr: 2630.33
        },
        {
          service: 'LINE_RENTAL',
          displayName: 'Voice Line Rental (SLT-to-SLT Free)',
          basePriceLkr: 600.00,
          percentageOfBundle: 17.00,
          cess: 12.24,
          tl: 91.84,
          sscl: 18.07,
          vat: 129.98,
          totalTaxLkr: 252.08,
          priceWithTaxLkr: 852.08
        },
        {
          service: 'PEO_TV',
          displayName: 'PEO TV Starter Plus (70 Channels)',
          basePriceLkr: 800.00,
          percentageOfBundle: 22.66,
          cess: 16.32,
          tl: 122.45,
          sscl: 24.09,
          vat: 173.30,
          totalTaxLkr: 336.10,
          priceWithTaxLkr: 1136.10
        }
      ]
    },
    broadband: {
      anytimeQuotaGb: 40,
      freeNightTime: true,
      nightQuotaDesc: 'Unlimited Free Night-Time Data (00:00 - 07:00)',
      uploadSpeed: 'Unlimited High-Speed Optical Uploads',
      downloadSpeed: 'Up to 1Gbps GPON Fiber Speeds',
      fairUsagePolicy: 'Standard TRCSL Fair Usage Policy applies'
    },
    peoTv: {
      channelCount: 70,
      packageTier: 'Starter Plus Tier',
      stbIncluded: true,
      freeOttBonus: ['PEO Mobile App'],
      multiRoomAvailable: true
    },
    voice: {
      freeLineRental: true,
      sltToSltMinutes: 'Unlimited Free Calls (SLT-to-SLT Wireline)',
      otherNetworkTariff: 'Standard TRCSL Approved Off-Net Rate (Rs. 1.50/min)'
    },
    commitmentMonths: 12,
    earlyTerminationFeeLkr: 1000.00,
    highlights: [
      '40 GB Anytime Data + Free Night Time Data',
      '70 Popular PEO TV Channels',
      'Free Voice Line Rental & Unlimited SLT-to-SLT calls',
      'Great budget triple-play package for small families',
      'Fast GPON Fiber connectivity with low latency'
    ],
    bestFor: 'Small households wanting essential fiber connectivity, local TV & free landline'
  },
  {
    id: 'trio-pet',
    code: 'PET',
    name: 'Trio Pet (Discontinued)',
    tier: 'LEGACY',
    isDiscontinued: true,
    discontinuedNotice: 'Trio Pet package has been officially DISCONTINUED and is no longer available for new activations or migrations.',
    tagline: 'Legacy Entry Plan (Discontinued - Not Available for New Sales)',
    badge: 'Discontinued',
    accentColor: {
      primary: '#64748b', // slate-500
      light: 'bg-slate-50',
      border: 'border-slate-300',
      gradient: 'from-slate-700 via-slate-600 to-slate-500',
      pill: 'bg-rose-100 text-rose-800 border-rose-300'
    },
    pricing: {
      basePriceWithoutTaxLkr: 1890.00,
      effectiveTaxRatePercentage: 36.13,
      totalTaxLkr: 682.91,
      priceWithTaxLkr: 2572.91,
      taxBreakdown: {
        cess: { ratePercentage: 2.04, amountLkr: 38.56 },
        tl: { ratePercentage: 10.45, amountLkr: 197.45 },
        sscl: { ratePercentage: 2.56, amountLkr: 54.43 },
        vat: { ratePercentage: 18.00, amountLkr: 392.48 }
      },
      serviceBreakdowns: [
        {
          service: 'BROADBAND',
          displayName: 'Fibre Broadband (Anytime 20GB)',
          basePriceLkr: 600.00,
          percentageOfBundle: 31.75,
          cess: 12.24,
          tl: 0.00,
          sscl: 15.67,
          vat: 113.02,
          totalTaxLkr: 140.94,
          priceWithTaxLkr: 740.94
        },
        {
          service: 'LINE_RENTAL',
          displayName: 'Voice Line Rental (Essential)',
          basePriceLkr: 430.00,
          percentageOfBundle: 22.75,
          cess: 8.77,
          tl: 65.82,
          sscl: 12.92,
          vat: 93.15,
          totalTaxLkr: 180.66,
          priceWithTaxLkr: 610.66
        },
        {
          service: 'PEO_TV',
          displayName: 'PEO TV Essential (70 Channels)',
          basePriceLkr: 860.00,
          percentageOfBundle: 45.50,
          cess: 17.54,
          tl: 131.63,
          sscl: 25.83,
          vat: 186.30,
          totalTaxLkr: 361.31,
          priceWithTaxLkr: 1221.31
        }
      ]
    },
    broadband: {
      anytimeQuotaGb: 20,
      freeNightTime: false,
      nightQuotaDesc: 'Standard Anytime 20GB quota allocation (Historical)',
      uploadSpeed: 'High-Speed Optical GPON Uploads',
      downloadSpeed: 'Up to 100Mbps GPON Fiber Speeds',
      fairUsagePolicy: 'Standard TRCSL Fair Usage Policy applies'
    },
    peoTv: {
      channelCount: 70,
      packageTier: 'Essential TV Tier',
      stbIncluded: true,
      freeOttBonus: ['PEO Mobile App'],
      multiRoomAvailable: false
    },
    voice: {
      freeLineRental: true,
      sltToSltMinutes: 'Standard Voice Service with Free Line Rental',
      otherNetworkTariff: 'Standard TRCSL Approved Off-Net Rate (Rs. 1.50/min)'
    },
    commitmentMonths: 12,
    earlyTerminationFeeLkr: 1000.00,
    highlights: [
      '⚠️ DISCONTINUED PACKAGE - Not available for new activations',
      'Former entry-level triple play package at Rs. 1,890/=',
      'Cannot be sold to new customers',
      'Existing subscribed customers only'
    ],
    bestFor: 'Legacy information only - do NOT recommend to callers'
  }
];

// Active packages for current customer recommendations
export const TRIO_ACTIVE_PACKAGES = TRIO_PACKAGES.filter(p => !p.isDiscontinued);

// ---------------------------------------------------------------------------
// 2. CONTACT CENTRE OPERATIONAL RULES & SOPS
// ---------------------------------------------------------------------------

export const TRIO_OPERATIONAL_SOPS: TrioSopRule[] = [
  {
    id: 'sop-trio-pet-discontinued',
    ruleCode: 'RULE_TRIO_PET_DISCONTINUED',
    title: 'Trio PET Status: Discontinued (Cannot be sold to new customers)',
    channel: 'CONTACT_CENTER_1212',
    description: 'The Trio PET package (Rs. 1,890/=) is DISCONTINUED and is NO LONGER AVAILABLE for new activations or migrations. Note that there is no package named Trio Fit either. Do not create new orders for Trio Pet.',
    eligibility: 'Inquiries regarding Trio Pet or entry-level Trio packages.',
    actionRequired: 'Inform the caller that Trio PET has been discontinued and cannot be sold. Direct the customer to the active lineup: Trio Vibe (Rs. 3,530/=), Trio Vibe+ (Rs. 4,100/=), or Trio Shine (Rs. 4,950/=). Existing Trio Pet customers may continue their subscription on legacy terms.',
    ttTemplate: `INQUIRY: Trio PET Availability
STATUS: DISCONTINUED (Cannot be sold to new customers)
RESOLUTION: Customer informed that Trio PET is no longer available. Guided customer to active Trio Vibe / Vibe+ / Shine packages.`
  },
  {
    id: 'sop-trio-activation',
    ruleCode: 'RULE_TRIO_ACTIVATION_CHANNELS',
    title: 'Trio Package Activation & Channel Eligibility',
    channel: 'CONTACT_CENTER_1212',
    description: 'Existing Single Play (Voice only) and Double Play (Voice + Broadband) customers can be migrated to active Trio packages (Vibe, Vibe+, Shine) directly through the Contact Centre (1212) or Teleshop without visiting the branch.',
    eligibility: 'Available for SLT Fibre (FTTH) and Megaline (Copper/PSTN) customers upon upgrading to Fibre (FTTH).',
    actionRequired: 'Verify customer account on LDAP and C-Log/CRM. Ensure premises has active FTTH connection or order FTTH migration order first. Process Trio service request in CRM under Triple Play.',
    ttTemplate: `SERVICE: SLT Trio Package Activation
SUBSCRIBER: [SLT_NUMBER]
PRE-CHECKS: Verified FTTH compatibility on GB Portal / LDAP.
REQUEST: Activate [TRIO_PACKAGE_NAME] bundle.
ACTION: Process Triple Play service order. Provision VLAN 30 on Port 4 for PEO TV and configure Broadband bundle.`
  },
  {
    id: 'sop-trio-migration-copper',
    ruleCode: 'RULE_TRIO_COPPER_TO_FIBRE_MIGRATION',
    title: 'Migration from Megaline (Copper) to Trio Fibre',
    channel: 'CONTACT_CENTER_1212',
    description: 'Megaline PSTN Copper customers who wish to obtain Trio packages must be migrated to SLT Fibre (FTTH). Trio packages cannot run on pure copper ADSL lines due to IPTV bandwidth requirements.',
    eligibility: 'Megaline copper customers in fiber-ready coverage zones.',
    actionRequired: 'Check Fiber Drop Point (DP) availability on GB Portal. Log Copper-to-Fiber migration order. Bind customer selected Trio bundle (Vibe, Vibe+, or Shine) upon fiber installation.',
    ttTemplate: `SERVICE: Copper to FTTH Trio Migration
SUBSCRIBER: [SLT_NUMBER] (Megaline Copper)
DP STATUS: Fiber DP available within 500m.
REQUEST: Upgrade to FTTH and provision [TRIO_PACKAGE_NAME].
ACTION: Dispatch TT to AREA-MTCE for outdoor optical drop wire installation.`
  },
  {
    id: 'sop-trio-upgrade-shine',
    ruleCode: 'RULE_TRIO_UPGRADE_TO_SHINE',
    title: 'Upgrading Between Trio Packages (e.g. Vibe to Shine)',
    channel: 'CONTACT_CENTER_1212',
    description: 'Any active Trio subscriber can upgrade to a higher tier (e.g. Vibe -> Vibe+ -> Shine) instantly via Contact Centre with zero migration or penalty fees.',
    eligibility: 'All active Trio subscribers in good billing standing.',
    actionRequired: 'Confirm upgraded quota and new monthly rental with subscriber. Update package code in CRM/Billing engine. New allowance takes effect immediately; bill is prorated for current cycle.',
    ttTemplate: `SERVICE: Trio Package Upgrade
SUBSCRIBER: [SLT_NUMBER]
FROM: [CURRENT_TRIO_PACKAGE] -> TO: [TARGET_TRIO_PACKAGE]
ACTION: Execute package upgrade in CRM. Prorate billing from execution date.`
  },
  {
    id: 'sop-trio-downgrade-retention',
    ruleCode: 'RULE_TRIO_DOWNGRADE_TCV_RETENTION',
    title: 'Downgrades & Shift from Trio to Double Play (TCV Escalation)',
    channel: 'TCV_RETENTION',
    description: 'Requests to downgrade from Trio Shine to lower packages, or to drop Triple Play back to Double Play (removing PEO TV), must be transferred to the TCV Retention Team to offer tailored customer retention benefits.',
    eligibility: 'Subscribers requesting downward package revision or bundle removal.',
    actionRequired: 'Do NOT immediately disconnect! Probe reason for downgrade. Transfer call or forward case to TCV retention desk. If subscriber insists after TCV engagement, inform about Early Termination fee if within 12 months.',
    earlyTerminationPolicy: 'Rs. 1,000/- + relevant taxes charged if disconnected or downgraded before 12 months commitment.',
    ttTemplate: `SERVICE: Trio Downgrade / Churn Prevention
SUBSCRIBER: [SLT_NUMBER]
REASON: Customer requested downgrade from [TRIO_PACKAGE] to Double Play.
DISPATCH: Escalated to TCV Retention Desk for customer consultation and retention offer.`
  },
  {
    id: 'sop-trio-early-termination',
    ruleCode: 'RULE_TRIO_EARLY_TERMINATION_FEE',
    title: '1-Year Commitment & Early Termination Policy',
    channel: 'CRM_CLOG',
    description: 'All Trio bundled packages carry a mandatory 1-year (12-month) service commitment. If the customer terminates the package or drops below Trio tier before 12 months, an Early Termination Fee is enforced.',
    eligibility: 'Accounts active less than 365 days from Trio contract initiation date.',
    actionRequired: 'Verify contract start date in MINT CRM. If < 12 months: formally notify customer that Early Termination fee of Rs. 1,000 + relevant taxes will be billed on the next invoice.',
    earlyTerminationPolicy: 'Flat fee of Rs. 1,000/- + applicable statutory taxes (effective total ~Rs. 1,300+ depending on tax composition).'
  }
];

// ---------------------------------------------------------------------------
// 3. AGENT COMMUNITY FAQS & TECHNICAL KNOWLEDGE (FROM INTERNAL REPO/COMMENTS)
// ---------------------------------------------------------------------------

export const TRIO_FAQS: TrioFaqItem[] = [
  {
    id: 'faq-00',
    question: 'Is Trio PET package still available? What about Trio Fit?',
    answer: 'Trio PET is officially DISCONTINUED and is no longer available for new sales or activations. There is also NO package named "Trio Fit". The current active SLT Trio lineup consists of exactly 3 packages: Trio Vibe (Rs. 3,530/=), Trio Vibe Plus (Rs. 4,100/=), and Trio Shine (Rs. 4,950/=). Existing Trio Pet customers may remain on their grandfathered plan, but no new subscriptions can be created.',
    author: 'Eroshana Rathnayake',
    role: 'Senior Executive - Broadband & VAS Knowledge Hub',
    date: '2026-02-15',
    category: 'STATUS',
    verified: true
  },
  {
    id: 'faq-01',
    question: 'How long is the commitment period for Trio packages, and can customers change packages after that?',
    answer: 'The minimum commitment period for all active Trio packages (Vibe, Vibe+, Shine) is strictly 1 year (12 months) from the activation date. After completing the 1-year period, the customer is fully free to upgrade, downgrade, or transition to standalone packages with zero early termination penalty.',
    author: 'Eroshana Rathnayake',
    role: 'Senior Executive - Broadband & VAS Knowledge Hub',
    date: '2026-02-15',
    category: 'TERMINATION',
    verified: true
  },
  {
    id: 'faq-02',
    question: 'Can Megaline copper customers get Trio packages directly on copper wireline?',
    answer: 'No, Trio bundled packages cannot be provisioned on pure copper ADSL lines because PEO TV IPTV streaming requires a dedicated VLAN 30 optical bandwidth channel. However, Megaline copper voice customers can easily obtain Trio by upgrading their copper line to SLT Fibre (FTTH), which can be requested directly via the Contact Centre (1212).',
    author: 'Eroshana Rathnayake',
    role: 'Senior Executive - Broadband & VAS Knowledge Hub',
    date: '2026-02-15',
    category: 'ELIGIBILITY',
    verified: true
  },
  {
    id: 'faq-03',
    question: 'Can a second PEO TV (Multi-Room) connection be added to a Trio package?',
    answer: 'Yes! A secondary PEO TV connection can be attached to any active Trio FTTH package. Standard PEO TV multi-room subscription and STB hardware charges apply, and both TVs will be billed together on the single consolidated monthly statement.',
    author: 'Eroshana Rathnayake',
    role: 'Senior Executive - Broadband & VAS Knowledge Hub',
    date: '2026-02-15',
    category: 'HARDWARE',
    verified: true
  },
  {
    id: 'faq-04',
    question: 'What is the exact tax rate applied to each Trio package?',
    answer: 'Because telecommunication services in Sri Lanka carry distinct tax treatments (Broadband is exempt from the 15% Telecommunication Levy, whereas Line Rental and PEO TV carry 15% TL), each Trio package has a unique effective tax rate based on its component ratios: Trio Shine = 28.74% (Total Rs. 6,372.47), Trio Vibe Plus = 32.98% (Total Rs. 5,452.07), and Trio Vibe = 30.84% (Total Rs. 4,618.51). Standard statutory taxes include CESS (2.04%), SSCL (2.56%), TL (15% on voice/TV), and VAT (18.00%).',
    author: 'Eroshana Rathnayake',
    role: 'Senior Executive - Broadband & VAS Knowledge Hub',
    date: '2026-02-15',
    category: 'PRICING',
    verified: true
  },
  {
    id: 'faq-05',
    question: 'What is the early termination fee if a customer disconnects or downgrades from FTTH Trio before 1 year?',
    answer: 'As stated in the official customer subscription agreement, an Early Termination Fee of Rs. 1,000/- plus relevant statutory taxes is charged to the customer on their next C-Log/CRM billing statement if the package is terminated or downgraded before the 12-month commitment completes.',
    author: 'Eroshana Rathnayake',
    role: 'Senior Executive - Broadband & VAS Knowledge Hub',
    date: '2026-02-15',
    category: 'TERMINATION',
    verified: true
  },
  {
    id: 'faq-06',
    question: 'Can Contact Centre (1212) officers directly activate FTTH Trio packages for callers?',
    answer: 'Yes! FTTH Trio package activations and migrations from Single/Double play can be activated directly through the Contact Centre without requiring the customer to visit a regional Teleshop. Only down-migrations or terminations require RTOM/Teleshop authorization and TCV retention clearance.',
    author: 'Eroshana Rathnayake',
    role: 'Senior Executive - Broadband & VAS Knowledge Hub',
    date: '2026-02-15',
    category: 'MIGRATION',
    verified: true
  }
];

// ---------------------------------------------------------------------------
// 4. COMPARISON MATRIX FOR UI TABLE
// ---------------------------------------------------------------------------

export interface TrioComparisonRow {
  featureName: string;
  category: 'PRICING' | 'INTERNET' | 'PEO_TV' | 'VOICE' | 'POLICY';
  shine: string;
  vibePlus: string;
  vibe: string;
  pet: string;
  tooltip?: string;
}

export const TRIO_COMPARISON_MATRIX: TrioComparisonRow[] = [
  {
    featureName: 'Package Availability Status',
    category: 'POLICY',
    shine: 'Active (Available)',
    vibePlus: 'Active (Available)',
    vibe: 'Active (Available)',
    pet: 'DISCONTINUED (Legacy Only)',
    tooltip: 'Current commercial availability for new activations.'
  },
  {
    featureName: 'Base Monthly Price (Without Tax)',
    category: 'PRICING',
    shine: 'Rs. 4,950/=',
    vibePlus: 'Rs. 4,100/=',
    vibe: 'Rs. 3,530/=',
    pet: 'Rs. 1,890/= (Legacy)',
    tooltip: 'Standard monthly recurring charge before government telecommunication levies.'
  },
  {
    featureName: 'Total Price (With Tax)',
    category: 'PRICING',
    shine: 'Rs. 6,372.47',
    vibePlus: 'Rs. 5,452.07',
    vibe: 'Rs. 4,618.51',
    pet: 'Rs. 2,572.91',
    tooltip: 'Includes CESS (2.04%), Telecommunication Levy (TL 15% on voice/TV), SSCL (2.56%), and VAT (18.00%).'
  },
  {
    featureName: 'Effective Tax Rate',
    category: 'PRICING',
    shine: '28.74%',
    vibePlus: '32.98%',
    vibe: '30.84%',
    pet: '36.13%',
    tooltip: 'Blended effective tax rate across the bundle components.'
  },
  {
    featureName: 'Anytime Broadband Quota',
    category: 'INTERNET',
    shine: '100 GB',
    vibePlus: '70 GB',
    vibe: '40 GB',
    pet: '20 GB',
    tooltip: 'High-speed GPON optical data quota usable anytime 24/7.'
  },
  {
    featureName: 'Free Night-Time Data',
    category: 'INTERNET',
    shine: 'Unlimited (00:00 - 07:00)',
    vibePlus: 'Unlimited (00:00 - 07:00)',
    vibe: 'Unlimited (00:00 - 07:00)',
    pet: 'Not Included',
    tooltip: 'Free high-speed bonus data during off-peak hours.'
  },
  {
    featureName: 'Broadband Uploads',
    category: 'INTERNET',
    shine: 'Unlimited High-Speed',
    vibePlus: 'Unlimited High-Speed',
    vibe: 'Unlimited High-Speed',
    pet: 'Standard Speed',
    tooltip: 'Optical fiber symmetric upload capabilities.'
  },
  {
    featureName: 'PEO TV Channels',
    category: 'PEO_TV',
    shine: '95 Channels (HD Tier)',
    vibePlus: '87 Channels (Entertainment)',
    vibe: '70 Channels (Starter Plus)',
    pet: '70 Channels (Essential)',
    tooltip: 'Live TV channels with Rewind, Pause, and Catch-up TV features.'
  },
  {
    featureName: 'Free OTT Platform Bonus',
    category: 'PEO_TV',
    shine: 'PEO Mobile + Lionsgate / HBO',
    vibePlus: 'PEO Mobile Included',
    vibe: 'PEO Mobile Included',
    pet: 'PEO Mobile Standard',
    tooltip: 'Complimentary streaming platform access on mobile devices and smart TVs.'
  },
  {
    featureName: 'Voice Line Rental',
    category: 'VOICE',
    shine: 'FREE (Included in Bundle)',
    vibePlus: 'FREE (Included in Bundle)',
    vibe: 'FREE (Included in Bundle)',
    pet: 'FREE (Included in Bundle)',
    tooltip: 'Traditional monthly landline rental waived as part of the bundle.'
  },
  {
    featureName: 'SLT-to-SLT Local Voice Calls',
    category: 'VOICE',
    shine: 'UNLIMITED FREE',
    vibePlus: 'UNLIMITED FREE',
    vibe: 'UNLIMITED FREE',
    pet: 'Standard Tariff',
    tooltip: 'Free crystal clear voice calls to any SLT wireline number islandwide.'
  },
  {
    featureName: 'Commitment Period',
    category: 'POLICY',
    shine: '12 Months (1 Year)',
    vibePlus: '12 Months (1 Year)',
    vibe: '12 Months (1 Year)',
    pet: '12 Months (1 Year)',
    tooltip: 'Mandatory minimum subscription period.'
  },
  {
    featureName: 'Early Termination Penalty',
    category: 'POLICY',
    shine: 'Rs. 1,000/= + Taxes',
    vibePlus: 'Rs. 1,000/= + Taxes',
    vibe: 'Rs. 1,000/= + Taxes',
    pet: 'Rs. 1,000/= + Taxes',
    tooltip: 'Fee charged if account drops or cancels before 12 months.'
  }
];

// ---------------------------------------------------------------------------
// 5. AI BOT CONTEXT DIGEST (FOR RAG / SYSTEM PROMPT INGESTION)
// ---------------------------------------------------------------------------

export const TRIO_AI_SYSTEM_CONTEXT = `
# SLT-MOBITEL TRIO BUNDLED PACKAGES (TRIPLE PLAY) KNOWLEDGE BASE

## Overview
SLT Trio is a unified "Triple Play" (3-in-1) subscription combining FTTH Voice Telephone Line + High-Speed GPON Broadband + PEO TV IPTV under a single consolidated monthly bill.

### ⚠️ IMPORTANT STATUS & CATALOG RULES:
1. **ACTIVE PACKAGES (Available for Sale):**
   There are exactly THREE (3) active Trio packages:
   - **Trio Shine** (Rs. 4,950/= without tax | Rs. 6,372.47 with tax)
   - **Trio Vibe Plus / Vibe+** (Rs. 4,100/= without tax | Rs. 5,452.07 with tax)
   - **Trio Vibe** (Rs. 3,530/= without tax | Rs. 4,618.51 with tax)

2. **DISCONTINUED PACKAGE (TRIO PET):**
   - **Trio Pet** (formerly Rs. 1,890/= without tax) is **DISCONTINUED**.
   - It cannot be sold to new customers and is not available for new activations.
   - If a caller asks for "Trio Pet", inform them that Trio Pet is no longer available and guide them to **Trio Vibe**, **Trio Vibe+**, or **Trio Shine**.

3. **CORRECTION REGARDING "TRIO FIT":**
   - There is **NO package named "Trio Fit"**.
   - Do NOT reference or invent any package named "Trio Fit". The active lineup contains only Shine, Vibe Plus, and Vibe.

## Active Package Specifications & Official Pricing (Taxes as of 2026)
1. **Trio Shine (Flagship Tier)**
   - Base Price: Rs. 4,950/= (without tax)
   - Total Price With Tax: Rs. 6,372.47
   - Effective Tax Rate: 28.74% (Total Tax: Rs. 1,422.48)
   - Tax Breakdown: CESS 2.04% (Rs. 100.98), TL 4.34% (Rs. 214.63), SSCL 2.56% (Rs. 134.80), VAT 18.00% (Rs. 972.07)
   - Component Allocation: Broadband Rs. 3,347.43 (67.62%), Line Rental Rs. 600.96 (12.14%), PEO TV Rs. 801.28 (16.19%), Digital Rs. 200.32 (4.05%)
   - Specs: 100 GB Anytime Data + Free Night Time Data (00:00-07:00), 95 PEO TV Channels, Free OTT (PEO Mobile + Lionsgate/HBO), Free Voice Line Rental & Unlimited SLT-to-SLT calls.

2. **Trio Vibe Plus (Vibe+)**
   - Base Price: Rs. 4,100/= (without tax)
   - Total Price With Tax: Rs. 5,452.07
   - Effective Tax Rate: 32.98% (Total Tax: Rs. 1,352.07)
   - Tax Breakdown: CESS 2.04% (Rs. 83.64), TL 7.84% (Rs. 321.43), SSCL 2.56% (Rs. 115.33), VAT 18.00% (Rs. 831.67)
   - Component Allocation: Broadband Rs. 2,000.00 (48.78%), Line Rental Rs. 600.00 (14.63%), PEO TV Rs. 1,500.00 (36.59%)
   - Specs: 70 GB Anytime Data + Free Night Time Data, 87 PEO TV Channels, Free PEO Mobile, Free Line Rental & Unlimited SLT-to-SLT calls.

3. **Trio Vibe**
   - Base Price: Rs. 3,530/= (without tax)
   - Total Price With Tax: Rs. 4,618.51
   - Effective Tax Rate: 30.84% (Total Tax: Rs. 1,088.51)
   - Tax Breakdown: CESS 2.04% (Rs. 72.01), TL 6.07% (Rs. 214.28), SSCL 2.56% (Rs. 97.70), VAT 18.00% (Rs. 704.52)
   - Component Allocation: Broadband Rs. 2,130.00 (60.34%), Line Rental Rs. 600.00 (17.00%), PEO TV Rs. 800.00 (22.66%)
   - Specs: 40 GB Anytime Data + Free Night Time Data, 70 PEO TV Channels, Free PEO Mobile, Free Line Rental & Unlimited SLT-to-SLT calls.

4. **Trio Pet (Legacy / Discontinued)**
   - Base Price: Rs. 1,890/= | With Tax: Rs. 2,572.91
   - Status: Discontinued. Not available for new orders.

## Key Operational & Contact Center Rules (Triage SOPs)
- **Eligibility:** Available on SLT Fibre (FTTH). Megaline (Copper/PSTN) users can obtain Trio by upgrading to FTTH.
- **Activation Channels:** Contact Centre (1212) can directly process new Trio activations and migrations from Single/Double play.
- **Upgrades:** Subscribing up to a higher Trio plan (e.g. Vibe to Shine) can be completed over the phone via 1212 with zero penalty.
- **Downgrades & Cancellation:** Must be routed through the TCV Customer Retention desk. If processed before the 12-month commitment expires, an Early Termination Fee of Rs. 1,000/- + applicable taxes is charged in C-Log/CRM.
- **Commitment Period:** Mandatory 12 months (1 year). No termination fee applies after 1 year.
- **Tax Policy Note:** Telecommunication Levy (TL 15%) is legally applied only to Voice Line Rental and PEO TV, not Broadband data. This produces varying effective bundle tax rates (28.74% to 32.98%).
`.trim();

// Helper functions for easy querying
export function getTrioPackageById(id: string): TrioPackage | undefined {
  return TRIO_PACKAGES.find(p => p.id === id || p.code.toLowerCase() === id.toLowerCase());
}

export function formatLKR(amount: number): string {
  return `Rs. ${amount.toLocaleString('en-LK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
