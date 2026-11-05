"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Radio,
  Search,
  Grid,
  ChevronDown,
  Home,
  FileText,
  Users,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Wrench,
  BookOpen,
  Phone,
  Wifi,
  Globe,
  Tv,
  Sparkles,
  Zap,
  Server,
  ShieldCheck,
  Layers,
  CreditCard,
  Signal,
  SlidersHorizontal,
  Info,
  Smartphone,
  Activity,
  Cpu,
  Download,
  Upload,
  Calendar,
  Clock,
  Gauge,
  Tag,
  Award,
  ChevronRight,
  ExternalLink,
  PhoneCall
} from 'lucide-react';

// ==========================================
// 1. DATA: CAT 4 CONNECTION CHARGES
// ==========================================
const CAT4_CHARGES = [
  {
    package: 'Double Play (BB + Voice) Concessionary - New',
    withoutTax: '4,990',
    priorWithoutTax: '4,048.96',
    withTax: '4,990',
    priorWithTax: '7,900',
    badge: 'Concessionary Offer',
    conditions: 'Any BB Package (Rs. 1,990 / 2,390 package category and above)',
    type: 'double_play',
    highlight: true
  },
  {
    package: 'Single Play (BB only) Concessionary - New',
    withoutTax: '4,990',
    priorWithoutTax: '4,048.96',
    withTax: '4,990',
    priorWithTax: '7,241',
    badge: 'Data Only',
    conditions: 'Yes (Applicable for BB packages Rs. 1,990 / 2,390 and above)',
    type: 'single_play',
    highlight: true
  },
  {
    package: 'Single Play (Voice only) - Full Pay / New',
    withoutTax: '5,490',
    priorWithoutTax: '5,432.00',
    withTax: '6,490',
    priorWithTax: '7,900',
    badge: 'Voice Only',
    conditions: 'Any Voice Package (Postpaid Voice Plans)',
    type: 'voice_only'
  },
  {
    package: 'Single Play (Voice only) - Off-Net No F2F',
    withoutTax: '4,990',
    priorWithoutTax: '4,048.96',
    withTax: '6,490',
    priorWithTax: '7,900',
    badge: 'Off-Net Voice',
    conditions: 'Voice package (Voice Pal)',
    type: 'voice_only'
  },
  {
    package: 'CDMA to LTE Migration',
    withoutTax: 'Free migration according to current scheme',
    priorWithoutTax: null,
    withTax: 'Free',
    priorWithTax: null,
    badge: 'Free Migration',
    conditions: 'Existing CDMA voice customers migrating (CityLink retained)',
    type: 'migration',
    isFree: true
  },
  {
    package: 'Double Play (BB + Voice) Full Payment',
    withoutTax: '9,900',
    priorWithoutTax: '8,097.92',
    withTax: '9,900',
    priorWithTax: '11,900',
    badge: 'Standard Full Pay',
    conditions: 'Any BB package (Unlimited / Any BB package category)',
    type: 'double_play'
  },
  {
    package: 'Recovered CPE Single Play (Concessionary - Refurbished)',
    withoutTax: '2,450 / 3,000',
    priorWithoutTax: 'Charges based on refurbished unit scheme',
    withTax: '3,900',
    priorWithTax: '4,750',
    badge: 'Refurbished Unit',
    conditions: '• Warranty: 6 months\n• 1 year commitment period\n• Early termination fee: Rs. 5,000\n• Applicable for selected packages',
    type: 'refurbished'
  },
  {
    package: 'Recovered CPE Double Play (Concessionary - Refurbished)',
    withoutTax: 'Concessionary offer for refurb units',
    priorWithoutTax: null,
    withTax: '3,900',
    priorWithTax: '4,750',
    badge: 'Refurbished Unit',
    conditions: '• Warranty: 6 months\n• 1 year commitment period\n• Early termination fee: Rs. 5,000\n• BB packages above Rs. 1,990 / 2,390',
    type: 'refurbished'
  },
  {
    package: 'With OUT Sub / Router - Double Play (Broadband + Voice)',
    withoutTax: '4,990',
    priorWithoutTax: '4,048.96',
    withTax: '6,490',
    priorWithTax: '7,900',
    badge: 'SIM Only (BYOD)',
    conditions: '• Customer already has compatible CPE router\n• SIM only provision\n• Applicable package rules apply',
    type: 'sim_only'
  },
  {
    package: 'Without Sub / Router - BB only (Data only SIM)',
    withoutTax: '4,990',
    priorWithoutTax: '4,048.96',
    withTax: '6,490',
    priorWithTax: '7,900',
    badge: 'Data SIM Only',
    conditions: '• Compatible router provided by user\n• Applicable package rules apply',
    type: 'sim_only'
  },
  {
    package: '4G LTE Prepaid SIM only (Voice + Broadband)',
    withoutTax: '1,400',
    priorWithoutTax: null,
    withTax: '1,400',
    priorWithTax: null,
    badge: 'Prepaid SIM',
    conditions: '• Prepaid SIM card only\n• Can load data / voice top-ups\n• Self-care recharge via MySLT & banking apps',
    type: 'prepaid'
  }
];

// ==========================================
// 2. DATA: CAT 6 ADVANCED CPE CHARGES
// ==========================================
const CAT6_CHARGES = [
  {
    package: 'Concessionary - New (CPE Model - Tozed CAT 6)',
    withoutTax: '11,327.94',
    priorWithoutTax: '6,900',
    withTax: '13,990',
    badge: 'New CAT 6 Tozed',
    conditions: [
      'Warranty for the new CPE: 12 months',
      'One year commitment period',
      'Early termination fee of Rs. 5,000 is applicable',
      'CAT 6 CPE types will be provided (High throughput Carrier Aggregation)',
      'Only applicable for BB packages 2,390 (1,990) and above'
    ]
  },
  {
    package: 'Concessionary - Refurbished (CPE Model - Tozed CAT 6)',
    withoutTax: '5,659.92',
    priorWithoutTax: '3,450',
    withTax: '6,990',
    badge: 'Refurbished CAT 6',
    conditions: [
      'Warranty for the refurbished CPE: 6 months',
      'One year commitment period',
      'Early termination fee of Rs. 5,000 is applicable',
      'CAT 6 CPE types will be provided',
      'Only applicable for BB packages 2,390 (1,990) and above'
    ]
  },
  {
    package: 'Full Payment - New (CPE Model - Tozed CAT 6)',
    withoutTax: '16,186.23',
    priorWithoutTax: '12,000',
    withTax: '19,900',
    badge: 'Full Pay Bonus 25GB',
    conditions: [
      'Warranty for the new CPE: 12 months',
      'No commitment period',
      'No early termination fee',
      'Additional Data of 25GB per month for the first 12 months will be provided (Not applicable for Unlimited packages)'
    ]
  }
];

// ==========================================
// 3. DATA: LTE VOICE & VOLTE PACKAGES
// ==========================================
const STANDARD_VOICE_PACKAGES = [
  {
    planCategory: '4G Voice Pal (Single Play)',
    name: 'Basic / Postpaid Voice Pal',
    rental: '310 / 499',
    onNetPeak: 'Rs. 1.70 / min',
    onNetLeisure: 'Rs. 1.00 / min',
    offNetPeak: 'Rs. 2.70 / min',
    offNetLeisure: 'Rs. 2.00 / min',
    freeMinutes: '100 On-Net Free Minutes (Residential)'
  },
  {
    planCategory: 'Double Play (Voice + BB)',
    name: 'Residential Double Play Voice',
    rental: 'Based on BB Plan',
    onNetPeak: 'Rs. 1.70 / min',
    onNetLeisure: 'Rs. 1.00 / min',
    offNetPeak: 'Rs. 2.70 / min',
    offNetLeisure: 'Rs. 2.00 / min',
    freeMinutes: 'Free VAS package bundle included'
  },
  {
    planCategory: 'Business / Corporate',
    name: 'Business Voice Pal / DP',
    rental: '499',
    onNetPeak: 'Rs. 1.70 (Up to 3 min) / Rs. 1.00 (>3 min)',
    onNetLeisure: 'Rs. 1.70 / Rs. 1.00',
    offNetPeak: 'Rs. 2.70 / min',
    offNetLeisure: 'Rs. 2.00 / min',
    freeMinutes: 'CLI, Call Waiting, Hunting, Conferencing'
  },
  {
    planCategory: 'Religious',
    name: 'Religious Package',
    rental: 'Concessionary rental',
    onNetPeak: 'Concession rates apply',
    onNetLeisure: 'Concession rates apply',
    offNetPeak: 'Concession rates apply',
    offNetLeisure: 'Concession rates apply',
    freeMinutes: 'Free incoming & restricted outgoing options'
  }
];

const UNLIMITED_VOICE_PACKAGES = [
  {
    plan: 'Unlimited Home Double Play Rs. 745',
    orderType: 'CREATE (New Customers) | MODIFY (Existing Migration)',
    subCategories: '• Domestic / Individual\n• SLT Staff Residential\n• Higher Education Residential',
    classification: '4G LTE Double Play',
    advantages: [
      'Unlimited calls to any network in Sri Lanka',
      'Crystal clear HD VoLTE call quality',
      'Postpaid package billing',
      'No unexpected high voice bills',
      'Keep existing copper/CDMA number',
      'No commitment period lock'
    ]
  },
  {
    plan: 'Unlimited Office Double Play Rs. 745',
    orderType: 'CREATE (New Customers) | MODIFY (Existing Migration)',
    subCategories: '• Business / Offices\n• Government Institutions\n• SME Customers',
    classification: '4G LTE Double Play',
    advantages: [
      'Unlimited calls to any network',
      'Fixed voice clarity over LTE',
      'Consolidated postpaid corporate billing',
      'Dedicated hunt group support'
    ]
  },
  {
    plan: 'Unlimited 4G Religious Double Play Rs. 745',
    orderType: 'CREATE (New Customers) | MODIFY (Existing Migration)',
    subCategories: '• Temples, Churches, Mosques & Kovils\n• Registered Religious Institutions',
    classification: '4G LTE Double Play',
    advantages: [
      'Unlimited any-net voice calls',
      'Concessionary base setup and billing waiver',
      'Reliable community communications'
    ]
  },
  {
    plan: 'Unlimited 4G Single Play Voice Pal Rs. 745',
    orderType: 'CREATE (New Customers) | MODIFY (Existing Migration)',
    subCategories: '• Individual Customers\n• Business / SME\n• Government & Religious',
    classification: '4G Voice Pal (Single Play)',
    advantages: [
      'Unlimited voice calling without mandatory BB data bundle',
      'Works with standard VoLTE desk phone unit',
      'Ideal for senior citizens & voice-centric premises'
    ]
  }
];

// ==========================================
// 4. DATA: LTE BROADBAND (BB) PACKAGES
// ==========================================
const LTE_BB_PACKAGES = [
  { tier: 'Web Starter', total: '8 GB', day: '4 GB', night: '4 GB', rental: '~ 490' },
  { tier: 'Web Lite', total: '16 GB', day: '8 GB', night: '8 GB', rental: '~ 790' },
  { tier: 'Web Pro', total: '35 GB', day: '18 GB', night: '17 GB', rental: '~ 1,490' },
  { tier: 'Web Master', total: '60 GB', day: '30 GB', night: '30 GB', rental: '~ 2,390' },
  { tier: 'Web Champ', total: '95 GB', day: '48 GB', night: '47 GB', rental: '~ 3,490' },
  { tier: 'Web Life', total: '150 GB', day: '75 GB', night: '75 GB', rental: '~ 5,390' },
  { tier: 'Web Supreme', total: '225 GB', day: '115 GB', night: '110 GB', rental: '~ 7,890' }
];

// ==========================================
// 5. DATA: LTE OLD CALL CHARGES (PRE-2017)
// ==========================================
const OLD_CALL_CHARGES = [
  { feature: 'Monthly Rental', residential: 'Rs. 310', business: 'Rs. 499' },
  { feature: 'On-net (Active Hours)', residential: 'Rs. 1.70 per min', business: 'Up to 3rd min: Rs. 1.70 | Beyond: Rs. 1.00' },
  { feature: 'On-net (Leisure Hours)', residential: 'Rs. 1.00 per min', business: 'Up to 3rd min: Rs. 1.70 | Beyond: Rs. 1.00' },
  { feature: 'Off-net (Active Hours)', residential: 'Rs. 2.70 per min', business: 'Rs. 2.70 per min' },
  { feature: 'Off-net (Leisure Hours)', residential: 'Rs. 2.00 per min', business: 'Rs. 2.00 per min' },
  { feature: 'Free Minutes', residential: '100 Minutes (On-net)', business: 'NA' },
  { feature: 'Data Allowance', residential: 'Based on the BB Package', business: 'Based on the BB Package' },
  {
    feature: 'Free Value Added Services (VAS)',
    residential: 'VAS Bundle included',
    business: 'CLI, Call Forwarding, Call Waiting, Conferencing (Three parties), Absentee service, Abbreviated dialing'
  }
];

// ==========================================
// 6. DATA: SIDEBAR PROCEDURES & SOP LINKS
// ==========================================
const SIDEBAR_SOP_LINKS = [
  {
    id: 'copper_migration',
    title: 'Copper to LTE same number Migration (MSAN Cutover)',
    category: 'Network Migration',
    desc: 'When copper cable theft, rain attenuation, or MSAN cutover occurs, copper voice lines migrate to 4G LTE VoLTE with identical 7-digit geographical telephone number.',
    guidelines: [
      'Verify customer copper telephone number in I-Hub/LDAP.',
      'Check 4G coverage at customer premises address (RSRP > -100 dBm required).',
      'Service Order Type: MODIFY - Migration with Number Porting.',
      'Provide VoLTE Desk Phone with pre-configured SIM tied to subscriber profile.'
    ]
  },
  {
    id: 'threshold_set',
    title: 'Action Threshold Set for LTE',
    category: 'Quality of Service',
    desc: 'Strict QoS thresholds set for fixed wireless towers. If cell sector utilization exceeds 85%, new broadband provisions are held to prevent degrading existing subscribers.',
    guidelines: [
      'Cell Capacity: Maximum 40 active concurrent video streams per sector.',
      'Signal Quality Threshold: Minimum RSRP -105 dBm / SINR > 3 dB.',
      'If cell is overloaded, offer FTTH or advise waiting list queue.'
    ]
  },
  {
    id: 'migration_matrix',
    title: 'Migration Matrix (CDMA / Copper to 4G)',
    category: 'Matrix Guide',
    desc: 'Standard mapping matrix for transitioning legacy voice and ADSL subscribers to 4G LTE Fixed Wireless platform with special waiver schemes.',
    guidelines: [
      'CDMA CityLink -> 4G VoLTE: 100% Free connection + Free Desk Phone.',
      'Megaline Copper -> 4G Double Play: Standard migration fee Rs. 1,000 waived for approved cutover areas.',
      'Old WiMAX -> 4G LTE: Trade-in old WiMAX CPE for new CAT 4 unit.'
    ]
  },
  {
    id: 'bar_association',
    title: 'Promotion-for-Bar-Association',
    category: 'Special Affinity',
    desc: 'Special corporate affinity offer for members of the Bar Association of Sri Lanka (BASL) with concessionary CAT 6 Tozed routers and bonus legal research bandwidth.',
    guidelines: [
      'Valid BASL membership identity card required.',
      'Discounted CAT 6 connection charge: Rs. 9,900 with tax.',
      'Free 30GB research booster added to Web Master and above packages.'
    ]
  },
  {
    id: 'coverage_expansion',
    title: '4G LTE Coverage expansion via Mobitel 2G/4G Network',
    category: 'Network Coverage',
    desc: 'National coverage roaming agreement allowing SLT Fixed Wireless subscribers to latch onto Mobitel cellular towers in fringe rural regions.',
    guidelines: [
      'SIM Profile: Domestic roaming enabled for specific PLMN cell IDs.',
      'APN: "sltbb" remains mandatory across all shared towers.',
      'Voice falls back smoothly to VoLTE / CS-fallback on 900MHz if 2300MHz TDD is obscured.'
    ]
  },
  {
    id: 'call_forwarding',
    title: 'Call Forwarding Settings (VoLTE Desk Phone)',
    category: 'Voice Feature',
    desc: 'Short codes and key sequences to activate Unconditional, Busy, and No-Answer call forwarding on VoLTE desk phones.',
    guidelines: [
      'Call Forward All Calls: *21* [Target Number] #',
      'Deactivate All Forwarding: #21#',
      'Call Forward on Busy: *67* [Target Number] #',
      'Call Forward on No Answer (20s): *61* [Target Number] #'
    ]
  },
  {
    id: 'staff_packages',
    title: 'SLT Staff Packages (4G LTE)',
    category: 'Internal Staff',
    desc: 'Concessionary telecom welfare packages available for permanent SLT and Mobitel employees, pensioners, and eligible dependents.',
    guidelines: [
      'Staff Voice: Unlimited On-net calls + 500 Off-net minutes.',
      'Staff BB: 50% discount on Web Master 60GB and Web Champ 95GB packages.',
      'Requires HR approval and employee EPF registration.'
    ]
  },
  {
    id: 'school_bb',
    title: 'School BB Packages (Ministry of Education)',
    category: 'Education Platform',
    desc: 'Special high-quota connectivity provided for government schools, pirivenas, and rural computer labs under the National SchoolNet project.',
    guidelines: [
      'Unlimited access to SchoolNet, MoE portal, and e-Thaksalawa.',
      'Zero connection charge for MoE approved schools.',
      'Content filtering and adult site firewall enabled at core proxy.'
    ]
  },
  {
    id: 'cdma_no_signal',
    title: 'CDMA to LTE Voice Service (No Signal Areas)',
    category: 'Edge Case SOP',
    desc: 'Special escalation procedure when migrating CDMA subscribers in deep rural valleys with marginal 4G coverage.',
    guidelines: [
      'Mandatory pre-installation site test with hand-held RF scanner.',
      'Deploy Outdoor High-Gain Yagi Antenna on 20ft GI pole.',
      'If RSRP remains below -112 dBm, route to Satellite or alternative coverage scheme.'
    ]
  }
];

export default function LteServicesHubPage() {
  const [activeTab, setActiveTab] = useState<'cat4' | 'cat6' | 'voice' | 'bb' | 'prepaid' | 'old_charges' | 'other' | 'lankabell' | 'storage'>('cat4');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSidebarModal, setActiveSidebarModal] = useState<any | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Filter CAT 4 Table
  const filteredCat4 = CAT4_CHARGES.filter((c) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      c.package.toLowerCase().includes(q) ||
      c.conditions.toLowerCase().includes(q) ||
      c.withoutTax.toLowerCase().includes(q) ||
      c.withTax.toLowerCase().includes(q)
    );
  });

  // Filter Voice Packages
  const filteredVoice = STANDARD_VOICE_PACKAGES.filter((v) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      v.name.toLowerCase().includes(q) ||
      v.planCategory.toLowerCase().includes(q) ||
      v.freeMinutes.toLowerCase().includes(q)
    );
  });

  // Filter BB Packages
  const filteredBB = LTE_BB_PACKAGES.filter((b) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return b.tier.toLowerCase().includes(q) || b.total.toLowerCase().includes(q);
  });

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f4f7f9] overflow-y-auto select-none">
      
      {/* ======================================================== */}
      {/* 1. TOP SHAREPOINT INTRA BAR                              */}
      {/* ======================================================== */}
      <div className="bg-[#005a9c] text-white px-4 py-2 flex items-center justify-between text-xs shadow-xs shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/knowledge-hub" className="flex items-center gap-1.5 cursor-pointer hover:opacity-80">
            <Grid className="w-4 h-4 text-white" />
            <span className="font-bold tracking-tight text-sm">SharePoint</span>
          </Link>
          <span className="text-xs text-cyan-200">| 4G LTE Fixed Wireless Portal</span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span className="hidden sm:inline text-cyan-100 font-medium">SLT-Mobitel Intranet</span>
          <div className="w-7 h-7 rounded-full bg-cyan-700 border border-cyan-400 flex items-center justify-center font-bold text-[11px] text-white">
            CR
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. SLT MOBITEL BANNER & MENU NAVIGATION                 */}
      {/* ======================================================== */}
      <div className="bg-white border-b border-slate-200 px-6 py-2.5 flex items-center justify-between shadow-2xs shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-black text-xl text-[#005696] tracking-tighter">SLT</span>
              <span className="font-black text-xl text-[#22b14c] tracking-tighter">MOBITEL</span>
            </div>
            <span className="text-[9px] text-[#005696] font-semibold -mt-1 tracking-wider uppercase">The Connection</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-700">
          <Link href="/knowledge-hub" className="text-slate-700 hover:text-[#005696] hover:underline">Home</Link>
          <span className="flex items-center gap-1 cursor-pointer hover:text-[#005696]">Groups <ChevronDown className="w-3 h-3 text-slate-400" /></span>
          <span className="flex items-center gap-1 cursor-pointer hover:text-[#005696]">eApplications <ChevronDown className="w-3 h-3 text-slate-400" /></span>
          <span className="flex items-center gap-1 cursor-pointer hover:text-[#005696]">General <ChevronDown className="w-3 h-3 text-slate-400" /></span>
          <Link href="/knowledge-hub/faq" className="text-[#005696] font-bold hover:underline flex items-center gap-1">
            Knowledge Base <ChevronDown className="w-3 h-3 text-[#005696]" />
          </Link>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. BREADCRUMB SUB-HEADER                                */}
      {/* ======================================================== */}
      <div className="bg-white border-b border-slate-200 px-6 py-2 flex items-center justify-between text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Link href="/knowledge-hub" className="text-[#005696] font-bold hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" /> Back to Knowledge Hub
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/knowledge-hub" className="hover:underline">Knowledge Hub</Link>
          <span className="text-slate-300">/</span>
          <span className="font-bold text-[#005696]">SLT 4G LTE (Fixed Wireless)</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-slate-500">
          <span>Private group</span>
          <span className="flex items-center gap-1"><Users className="w-3 h-3" /> 1 member</span>
          <span className="cursor-pointer font-bold">•••</span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 4. HERO BANNER                                          */}
      {/* ======================================================== */}
      <div className="relative bg-gradient-to-r from-[#03152e] via-[#082a52] to-[#011429] text-white px-8 py-8 overflow-hidden border-b border-blue-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-cyan-400/20 text-cyan-300 border border-cyan-300/30">
                Fixed Wireless 4G LTE
              </span>
              <span className="text-xs text-blue-200">Band 40 (2300MHz TDD) &amp; Band 3 (1800MHz FDD)</span>
            </div>

            {/* Quick Search */}
            <div className="relative w-72 md:w-80">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search CAT 4, CAT 6, VoLTE, charges..."
                className="w-full bg-white text-slate-800 text-xs pl-8 pr-7 py-1.5 rounded-md focus:outline-hidden focus:ring-2 focus:ring-cyan-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white drop-shadow-md">
            LTE New Connection Charges &amp; Packages Portal
          </h1>
          <p className="text-xs text-cyan-100/90 max-w-3xl font-medium leading-relaxed">
            Official tariff schedules, connection charges (effective 24/08/2022 | revised with tax effective 01/08/2024), VoLTE voice call rates, data allowances, and customer migration matrices.
          </p>

          {/* Publisher Metadata matching screenshot */}
          <div className="flex items-center gap-3 pt-1">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-700 border border-cyan-400 flex items-center justify-center font-bold text-xs text-white shadow-sm">
              CR
            </div>
            <div className="text-xs">
              <p className="font-bold text-white">Chathurani Rathnayake</p>
              <p className="text-[11px] text-cyan-200/90">Senior Assistant Manager (Customer Relations) - A7</p>
              <p className="text-[10px] text-slate-400">Published / Reviewed for 2024-2025 Tax Revision</p>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 5. NAVIGATION BUTTONS (Matching Screenshot)              */}
      {/* ======================================================== */}
      <div className="bg-white px-6 py-2.5 border-b border-slate-200 sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          
          <button
            onClick={() => setActiveTab('cat4')}
            className={`px-3 py-1.5 rounded-md font-bold text-xs whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'cat4'
                ? 'bg-[#005696] text-white shadow-2xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>New Connection Charges (CAT 4)</span>
          </button>

          <button
            onClick={() => setActiveTab('cat6')}
            className={`px-3 py-1.5 rounded-md font-bold text-xs whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'cat6'
                ? 'bg-[#005696] text-white shadow-2xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>New Connection Charges (CAT 6)</span>
          </button>

          <button
            onClick={() => setActiveTab('voice')}
            className={`px-3 py-1.5 rounded-md font-bold text-xs whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'voice'
                ? 'bg-[#005696] text-white shadow-2xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-teal-600" />
            <span>LTE Voice Packages (VoLTE)</span>
          </button>

          <button
            onClick={() => setActiveTab('bb')}
            className={`px-3 py-1.5 rounded-md font-bold text-xs whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'bb'
                ? 'bg-[#005696] text-white shadow-2xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            <span>LTE BB Packages</span>
          </button>

          <button
            onClick={() => setActiveTab('prepaid')}
            className={`px-3 py-1.5 rounded-md font-bold text-xs whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'prepaid'
                ? 'bg-[#005696] text-white shadow-2xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5 text-emerald-600" />
            <span>4G LTE Prepaid</span>
          </button>

          <button
            onClick={() => setActiveTab('old_charges')}
            className={`px-3 py-1.5 rounded-md font-bold text-xs whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'old_charges'
                ? 'bg-[#005696] text-white shadow-2xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>LTE Old Call Charges</span>
          </button>

          <button
            onClick={() => setActiveTab('other')}
            className={`px-3 py-1.5 rounded-md font-bold text-xs whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'other'
                ? 'bg-[#005696] text-white shadow-2xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-600" />
            <span>Other Charges - LTE</span>
          </button>

          <button
            onClick={() => setActiveTab('lankabell')}
            className={`px-3 py-1.5 rounded-md font-bold text-xs whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'lankabell'
                ? 'bg-[#005696] text-white shadow-2xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-purple-600" />
            <span>Lanka Bell to SLT 4G</span>
          </button>

          <button
            onClick={() => setActiveTab('storage')}
            className={`px-3 py-1.5 rounded-md font-bold text-xs whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'storage'
                ? 'bg-[#005696] text-white shadow-2xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
            }`}
          >
            <Server className="w-3.5 h-3.5 text-cyan-600" />
            <span>SLT Storage</span>
          </button>

        </div>
      </div>

      {/* ======================================================== */}
      {/* 6. MAIN CONTENT AREA (Left Sidebar + Right Panels)       */}
      {/* ======================================================== */}
      <div className="flex-1 p-6 md:p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          
          {/* ---------------------------------------------------- */}
          {/* A. LEFT SIDEBAR: Standard Procedures & Quick Links   */}
          {/* ---------------------------------------------------- */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-3">
              <div className="border-b border-slate-100 pb-2">
                <h3 className="font-black text-xs uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#005696]" />
                  <span>SOPs &amp; Operational Links</span>
                </h3>
                <p className="text-[10px] text-slate-400">Click any link to inspect official guidelines</p>
              </div>

              <div className="space-y-1">
                {SIDEBAR_SOP_LINKS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSidebarModal(item)}
                    className="w-full text-left p-2 rounded-lg hover:bg-slate-50 transition-colors text-xs font-semibold text-slate-700 hover:text-[#005696] flex items-center justify-between group border border-transparent hover:border-slate-200"
                  >
                    <span className="line-clamp-2 text-[11px] leading-tight">{item.title}</span>
                    <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#005696] shrink-0 ml-1" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Speed Summary Card */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-xl p-4 shadow-xs space-y-2.5 border border-blue-800/40">
              <div className="flex items-center gap-1.5 text-cyan-300 font-bold text-xs uppercase tracking-wider">
                <Gauge className="w-4 h-4" />
                <span>4G LTE Speed Guidelines</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2 bg-white/10 rounded-lg">
                  <span className="text-[10px] font-bold text-cyan-200 uppercase block">Good Coverage Area:</span>
                  <p className="font-mono font-bold text-white text-sm">10 - 20 Mbps</p>
                  <p className="text-[10px] text-slate-300">Min. Guarantee: 3-5 Mbps | Peak: up to 40 Mbps</p>
                  <p className="text-[10px] text-cyan-300">Upload: 3 - 5 Mbps</p>
                </div>

                <div className="p-2 bg-white/10 rounded-lg">
                  <span className="text-[10px] font-bold text-amber-300 uppercase block">Fringe / Moderate Area:</span>
                  <p className="font-mono font-bold text-white text-sm">4 - 8 Mbps</p>
                  <p className="text-[10px] text-slate-300">Upload: 1 - 2 Mbps</p>
                </div>
              </div>
            </div>

            {/* Tax & Billing Cycles Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs text-xs space-y-2">
              <h4 className="font-black text-slate-800 text-[11px] uppercase tracking-wider flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-[#005696]" />
                <span>Tax Structure &amp; Cycles</span>
              </h4>
              <p className="text-[11px] text-slate-600">
                <strong>Applicable Taxes:</strong> Telecommunication Levy (TL), VAT (18%), CESS, SSCL.
              </p>
              <div className="pt-1 border-t border-slate-100 space-y-1">
                <p className="text-[11px] text-slate-700"><strong>Cycle 1:</strong> 1st to end of month</p>
                <p className="text-[11px] text-slate-700"><strong>Cycle 2:</strong> 16th to 15th of next month</p>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------- */}
          {/* B. MAIN RIGHT PANEL (Content Tabs)                   */}
          {/* ---------------------------------------------------- */}
          <div className="lg:col-span-3 space-y-6">

            {/* TAB 1: CAT 4 CONNECTION CHARGES */}
            {activeTab === 'cat4' && (
              <div className="space-y-4">
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-100 text-[#005696] border border-blue-200">
                          Basic CPE Models
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">
                          Huawei B310 / B311 / Tozed Basic
                        </span>
                      </div>
                      <h2 className="text-lg font-black text-slate-900 mt-1">
                        New Connection Charges Table (SLT 4G LTE Voice Dedicated)
                      </h2>
                      <p className="text-[11px] text-slate-500">
                        Price plans effective from 24/08/2022 | Revised with tax effective from <strong>01/08/2024</strong>
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-bold text-slate-400 block uppercase">Ownership Transfer</span>
                      <span className="text-xs font-black text-slate-800">New: 12 Mos | Refurb: 6 Mos</span>
                    </div>
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-black">
                          <th className="p-3 w-1/3">Package (CAT 4 - Basic CPE Models)</th>
                          <th className="p-3">Without Tax (Rs.)<br/><span className="text-[10px] text-slate-500 font-normal">(Prior / Base)</span></th>
                          <th className="p-3 text-emerald-800">With Tax (Rs.)<br/><span className="text-[10px] text-emerald-700 font-normal">(New eff. 01/08/2024)</span></th>
                          <th className="p-3">Applicable Packages / Conditions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {filteredCat4.map((row, idx) => (
                          <tr key={idx} className={`hover:bg-blue-50/40 transition-colors ${row.highlight ? 'bg-cyan-50/20' : ''}`}>
                            <td className="p-3 align-top">
                              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                                <span>{row.package}</span>
                              </div>
                              <span className="inline-block mt-1 px-1.5 py-0.2 rounded text-[9px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                                {row.badge}
                              </span>
                            </td>
                            <td className="p-3 align-top font-mono font-bold text-slate-700">
                              <div>{row.withoutTax}</div>
                              {row.priorWithoutTax && (
                                <div className="text-[10px] text-slate-400 font-normal">({row.priorWithoutTax})</div>
                              )}
                            </td>
                            <td className="p-3 align-top font-mono font-black text-[#005696]">
                              <div className="text-sm">{row.withTax}</div>
                              {row.priorWithTax && (
                                <div className="text-[10px] text-slate-400 font-normal">({row.priorWithTax})</div>
                              )}
                            </td>
                            <td className="p-3 align-top text-slate-600 whitespace-pre-wrap leading-relaxed text-[11px]">
                              {row.conditions}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Conditions & Warranty Footer */}
                  <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600">
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                      <span className="font-black text-slate-800 uppercase text-[10px] block">Warranty &amp; Ownership Policy:</span>
                      <p>• Ownership is transferred to the customer after warranty completion (New CPEs: 12 Months | Refurbished CPEs: 6 Months).</p>
                      <p>• Early termination fee of Rs. 5,000 applies to concessionary packages within the 1-year commitment.</p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                      <span className="font-black text-slate-800 uppercase text-[10px] block">Migration &amp; Outdoor Antenna:</span>
                      <p>• Standard migration charge: <strong>Rs. 1,000</strong> (without tax).</p>
                      <p>• Outdoor Antenna: Approx. <strong>Rs. 3,500 - 5,000</strong> depending on cable length for low coverage premises.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: CAT 6 ADVANCED CPE CHARGES */}
            {activeTab === 'cat6' && (
              <div className="space-y-4">
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
                          Advanced CPE (Tozed)
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">
                          High-Throughput Carrier Aggregation
                        </span>
                      </div>
                      <h2 className="text-lg font-black text-slate-900 mt-1">
                        LTE New Connection Charges (CAT 6)
                      </h2>
                      <p className="text-[11px] text-slate-500">
                        Published: 6/13/2025 | Revised with tax effective from <strong>01/08/2024</strong>
                      </p>
                    </div>

                    <div className="p-2 bg-amber-50 rounded-lg border border-amber-200 text-right">
                      <span className="text-[10px] font-bold text-amber-800 uppercase block">Average CAT 6 Speeds</span>
                      <span className="text-xs font-black text-slate-800">DL: 16 Mbps | UL: 1 Mbps</span>
                    </div>
                  </div>

                  {/* CAT 6 Table */}
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-black">
                          <th className="p-3 w-1/3">Package (CAT 6 - Advanced CPE Models)</th>
                          <th className="p-3">Without Tax (Rs.)</th>
                          <th className="p-3 text-emerald-800">With Tax (Rs.)</th>
                          <th className="p-3">Special Conditions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {CAT6_CHARGES.map((row, idx) => (
                          <tr key={idx} className="hover:bg-amber-50/30 transition-colors">
                            <td className="p-3 align-top">
                              <div className="font-bold text-slate-900">{row.package}</div>
                              <span className="inline-block mt-1 px-1.5 py-0.2 rounded text-[9px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
                                {row.badge}
                              </span>
                            </td>
                            <td className="p-3 align-top font-mono font-bold text-slate-700">
                              <div>{row.withoutTax}</div>
                              {row.priorWithoutTax && (
                                <div className="text-[10px] text-slate-400 font-normal">(Prior: {row.priorWithoutTax})</div>
                              )}
                            </td>
                            <td className="p-3 align-top font-mono font-black text-emerald-700 text-sm">
                              {row.withTax}
                            </td>
                            <td className="p-3 align-top text-slate-600 text-[11px]">
                              <ul className="space-y-1">
                                {row.conditions.map((c, cIdx) => (
                                  <li key={cIdx} className="flex items-start gap-1">
                                    <span className="text-amber-600 font-bold">•</span>
                                    <span>{c}</span>
                                  </li>
                                ))}
                              </ul>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-3 rounded-lg bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-700 shrink-0" />
                    <span><strong>Mandatory Rule:</strong> New Connection Charge with Tax must be collected for all options upfront when providing the service.</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: LTE VOICE PACKAGES (VOLTE) */}
            {activeTab === 'voice' && (
              <div className="space-y-4">
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
                  <div className="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h2 className="text-lg font-black text-slate-900">
                        LTE Voice Packages (VoLTE) &amp; Call Rates
                      </h2>
                      <p className="text-[11px] text-slate-500">
                        High-Definition crystal clear voice calls over 4G LTE with concurrent high-speed data usage.
                      </p>
                    </div>
                    <span className="px-2.5 py-1 bg-teal-50 text-teal-800 border border-teal-200 rounded text-xs font-mono font-bold">
                      Geographical Series: 011-2XXXXXX
                    </span>
                  </div>

                  {/* Standard Voice Plans Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-black">
                          <th className="p-3">Plan / Category</th>
                          <th className="p-3">Rental (Rs.)</th>
                          <th className="p-3">On-net (Peak / Active)</th>
                          <th className="p-3">On-net (Leisure)</th>
                          <th className="p-3">Off-net (Peak / Active)</th>
                          <th className="p-3">Off-net (Leisure)</th>
                          <th className="p-3">Free Minutes / Benefits</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {filteredVoice.map((v, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 transition-colors">
                            <td className="p-3 align-top font-bold text-slate-900">
                              <div>{v.name}</div>
                              <span className="text-[10px] text-slate-400 font-normal">{v.planCategory}</span>
                            </td>
                            <td className="p-3 align-top font-mono font-bold text-teal-800">{v.rental}</td>
                            <td className="p-3 align-top font-mono text-slate-700">{v.onNetPeak}</td>
                            <td className="p-3 align-top font-mono text-slate-700">{v.onNetLeisure}</td>
                            <td className="p-3 align-top font-mono text-slate-700">{v.offNetPeak}</td>
                            <td className="p-3 align-top font-mono text-slate-700">{v.offNetLeisure}</td>
                            <td className="p-3 align-top text-slate-600 text-[11px] font-medium">{v.freeMinutes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Call Time Bands Strip */}
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="font-black text-slate-800 uppercase text-[10px] block">Active Hours Band:</span>
                      <p className="text-slate-600">• Monday to Friday: 07:00 hrs to 19:00 hrs</p>
                      <p className="text-slate-600">• Saturday: 07:00 hrs to 14:00 hrs</p>
                    </div>
                    <div>
                      <span className="font-black text-slate-800 uppercase text-[10px] block">Leisure Hours Band:</span>
                      <p className="text-slate-600">• Monday to Friday: 00:00 to 07:00 &amp; 19:00 to 24:00</p>
                      <p className="text-slate-600">• Saturday: 14:00 to 24:00 | Sunday &amp; Holidays: Full Day</p>
                    </div>
                  </div>

                  {/* Unlimited Voice Packages Section */}
                  <div className="pt-2 space-y-3">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span>Unlimited Voice Packages - 4G LTE (Rs. 745)</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {UNLIMITED_VOICE_PACKAGES.map((u, uIdx) => (
                        <div key={uIdx} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#005696] transition-all space-y-2 shadow-2xs">
                          <div className="flex items-start justify-between gap-1">
                            <h4 className="font-black text-sm text-[#005696]">{u.plan}</h4>
                            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[9px] uppercase">
                              Rs. 745 / mo
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-400 font-semibold">{u.orderType}</p>
                          <div className="text-[11px] text-slate-600 space-y-1">
                            <span className="font-bold text-slate-700 block">Eligible Sub-categories:</span>
                            <pre className="font-sans text-[11px] whitespace-pre-wrap">{u.subCategories}</pre>
                          </div>
                          <div className="pt-2 border-t border-slate-100">
                            <span className="font-bold text-[10px] text-slate-500 uppercase block mb-1">Key Advantages:</span>
                            <ul className="text-[10px] text-slate-600 space-y-0.5">
                              {u.advantages.map((adv, aIdx) => (
                                <li key={aIdx} className="flex items-center gap-1">
                                  <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                                  <span>{adv}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: LTE BROADBAND (BB) PACKAGES */}
            {activeTab === 'bb' && (
              <div className="space-y-4">
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
                  <div className="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h2 className="text-lg font-black text-slate-900">
                        LTE Broadband (BB) Data Packages
                      </h2>
                      <p className="text-[11px] text-slate-500">
                        Standard anytime volume packages, night-time bonuses, flash unlimited quotas, and study add-ons.
                      </p>
                    </div>
                    <span className="px-2.5 py-1 bg-blue-50 text-[#005696] border border-blue-200 rounded text-xs font-mono font-bold">
                      Day: 08:00 - 00:00 | Night: 00:00 - 08:00
                    </span>
                  </div>

                  {/* Standard Volume Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-black">
                          <th className="p-3">Package Tier</th>
                          <th className="p-3">Total Volume (GB)</th>
                          <th className="p-3">Standard Daytime (08:00 - 00:00)</th>
                          <th className="p-3">Free Night Data (00:00 - 08:00)</th>
                          <th className="p-3 text-emerald-800">Rental w/o Tax (Rs.)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {filteredBB.map((b, idx) => (
                          <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                            <td className="p-3 font-bold text-slate-900">{b.tier}</td>
                            <td className="p-3 font-mono font-black text-[#005696]">{b.total}</td>
                            <td className="p-3 font-mono text-slate-700">{b.day}</td>
                            <td className="p-3 font-mono text-indigo-700">{b.night}</td>
                            <td className="p-3 font-mono font-bold text-emerald-700">{b.rental}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Flash & Add-on Packages Box */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                      <h4 className="font-black text-xs text-slate-800 uppercase flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-amber-500" />
                        <span>Flash 10 &amp; Flash 25</span>
                      </h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Daily recurring data allowances (10 GB/day or 25 GB/day). Standard Fair Usage Policy (FUP) throttling speeds apply after daily threshold exhaustion.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                      <h4 className="font-black text-xs text-slate-800 uppercase flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                        <span>Work &amp; Learn Plans</span>
                      </h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Unlimited and quota-based passes dedicated for Zoom, Microsoft Teams, Google Meet, and Office 365 video collaboration.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                      <h4 className="font-black text-xs text-slate-800 uppercase flex items-center gap-1">
                        <Smartphone className="w-3.5 h-3.5 text-purple-600" />
                        <span>Social Media Add-ons</span>
                      </h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Dedicated data buckets for YouTube, Facebook, WhatsApp, Instagram, and TikTok with high-speed streaming optimization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: 4G LTE PREPAID SERVICES */}
            {activeTab === 'prepaid' && (
              <div className="space-y-4">
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
                  <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-black text-slate-900">
                        4G LTE Prepaid Services &amp; Top-Up SOP
                      </h2>
                      <p className="text-[11px] text-slate-500">
                        Pay-as-you-go broadband data passes, instant SIM starter packs, and recharge channels.
                      </p>
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded text-xs font-mono font-bold">
                      Starter Pack: Rs. 1,400
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                      <h3 className="font-black text-xs uppercase text-slate-800 flex items-center gap-1.5">
                        <CreditCard className="w-4 h-4 text-emerald-600" />
                        <span>Prepaid SIM Starter Pack</span>
                      </h3>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Purchasable across all SLT Teleshops, Regional Telecom Offices, and authorized Mobitel dealer networks. Pre-loaded with starter balance.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                      <h3 className="font-black text-xs uppercase text-slate-800 flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-blue-600" />
                        <span>Volume Top-Ups</span>
                      </h3>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Fixed volume data passes: <strong>1 GB, 2 GB, 5 GB, 10 GB, 20 GB, 40 GB</strong>. Valid for 1 day, 3 days, 7 days, 14 days, and 30 days.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                      <h3 className="font-black text-xs uppercase text-slate-800 flex items-center gap-1.5">
                        <Smartphone className="w-4 h-4 text-purple-600" />
                        <span>Recharge Channels</span>
                      </h3>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        • MySLT Mobile App &amp; Web Portal<br/>
                        • Commercial Bank, Sampath, BOC Online<br/>
                        • Food City, Keells, Singer merchant counters<br/>
                        • Physical scratch cards (*123#)
                      </p>
                    </div>
                  </div>

                  {/* Prepaid Policies */}
                  <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900 space-y-1.5">
                    <span className="font-black uppercase text-[10px] text-amber-800 block">Prepaid Lifecycle &amp; Grace Period Rules:</span>
                    <p>• Inactive accounts without top-ups for 90 days enter a grace period.</p>
                    <p>• If unexhausted after 180 days, the MSISDN and SIM profile will be recycled per TRCSL numbering rules.</p>
                    <p>• Balance inquiry command: Dial <strong>*123#</strong> or query via MySLT Selfcare.</p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 6: LTE OLD CALL CHARGES (HISTORICAL) */}
            {activeTab === 'old_charges' && (
              <div className="space-y-4">
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
                  <div className="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h2 className="text-lg font-black text-slate-900">
                        LTE Old Call Charges (Historical Reference)
                      </h2>
                      <p className="text-[11px] text-slate-500">
                        Archival call rate schedule for accounts provisioned before 20th January 2017.
                      </p>
                    </div>
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-300 rounded text-xs font-mono font-bold">
                      Pre-Jan 2017 Archive
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-black">
                          <th className="p-3 w-1/3">Feature / Tariff Detail</th>
                          <th className="p-3 text-blue-900">Residential</th>
                          <th className="p-3 text-indigo-900">Business</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {OLD_CALL_CHARGES.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 transition-colors">
                            <td className="p-3 font-bold text-slate-800">{row.feature}</td>
                            <td className="p-3 font-mono text-slate-700 whitespace-pre-wrap">{row.residential}</td>
                            <td className="p-3 font-mono text-slate-700 whitespace-pre-wrap">{row.business}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 7: OTHER CHARGES */}
            {activeTab === 'other' && (
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
                <h2 className="text-base font-black text-slate-900 uppercase tracking-wider">
                  Other Charges &amp; Incidental Service Fees - LTE
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                    <span className="font-bold text-slate-800 block">SIM Replacement (USIM):</span>
                    <p className="text-slate-600">Rs. 250 (Waiver applicable if SIM was found defective within warranty period at Teleshop).</p>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                    <span className="font-bold text-slate-800 block">Change of Ownership:</span>
                    <p className="text-slate-600">Rs. 1,000 standard transfer fee with customer consent letter and NIC documentation.</p>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                    <span className="font-bold text-slate-800 block">Relocation / Premises Shifting:</span>
                    <p className="text-slate-600">Free within 4G coverage. Requires IMEI cell-lock reconfiguration in HSS core.</p>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                    <span className="font-bold text-slate-800 block">Temporary Disconnection &amp; Safe Custody:</span>
                    <p className="text-slate-600">Rs. 250 monthly safe custody fee (Maximum 6 months duration).</p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 8: LANKA BELL TO SLT 4G */}
            {activeTab === 'lankabell' && (
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
                <div className="border-b border-slate-100 pb-2 flex items-center justify-between">
                  <h2 className="text-base font-black text-slate-900">
                    Lanka Bell to SLT-Mobitel 4G Migration Program
                  </h2>
                  <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-bold text-xs">
                    Special Concession
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Special customer takeover package for former Lanka Bell LTE subscribers. Allows smooth transition to SLT 4G Fixed Wireless network with waived connection charges.
                </p>
                <div className="p-3 rounded-lg bg-purple-50/60 border border-purple-200 text-xs text-purple-900 space-y-1">
                  <p>• <strong>Free Connection:</strong> Standard connection charge waived upon presenting Lanka Bell final settlement bill.</p>
                  <p>• <strong>Compatible Router Reuse:</strong> If subscriber owns an unlocked Band 40 CPE router, only a SIM-only package fee (Rs. 1,400) is charged.</p>
                  <p>• <strong>Bonus Data:</strong> Free 50GB introductory data booster allocated upon first bill cycle activation.</p>
                </div>
              </div>
            )}

            {/* TAB 9: SLT STORAGE */}
            {activeTab === 'storage' && (
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
                <h2 className="text-base font-black text-slate-900">
                  SLT Storage &amp; Cloud Drive for 4G LTE
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Secure local cloud storage hosted inside SLT Tier III National Data Center (Pitipana &amp; Welikada) for 4G LTE subscribers.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
                  <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                    <span className="font-bold text-slate-800">Free 10GB Tier</span>
                    <p className="text-slate-600">Included complimentary for all Web Master and above 4G LTE packages.</p>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                    <span className="font-bold text-slate-800">100GB Expansion</span>
                    <p className="text-slate-600">Rs. 250 / month added to primary billing invoice.</p>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                    <span className="font-bold text-slate-800">1TB Family Cloud</span>
                    <p className="text-slate-600">Rs. 1,200 / month with multi-device sync and automatic photo backup.</p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* ======================================================== */}
      {/* 7. MODAL: SIDEBAR SOP PROCEDURE DETAILS                  */}
      {/* ======================================================== */}
      <AnimatePresence>
        {activeSidebarModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 space-y-4"
            >
              <div className="flex items-start justify-between border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#005696] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {activeSidebarModal.category}
                  </span>
                  <h3 className="text-base font-black text-slate-900 mt-1">
                    {activeSidebarModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveSidebarModal(null)}
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {activeSidebarModal.desc}
              </p>

              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="font-black text-xs uppercase tracking-wider text-slate-700 block">
                  Mandatory Execution Steps:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {activeSidebarModal.guidelines.map((g: string, gIdx: number) => (
                    <li key={gIdx} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#005696] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        {gIdx + 1}
                      </span>
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => copyToClipboard(activeSidebarModal.guidelines.join('\n'), 'sop-copy')}
                  className="px-3.5 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  {copiedText === 'sop-copy' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedText === 'sop-copy' ? 'Copied Steps!' : 'Copy Guidelines'}</span>
                </button>
                <button
                  onClick={() => setActiveSidebarModal(null)}
                  className="px-4 py-1.5 rounded-lg bg-[#005696] hover:bg-[#004172] text-white font-bold text-xs shadow-xs"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
