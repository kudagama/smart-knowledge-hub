"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  Clock,
  Gauge,
  Tag,
  Gift,
  Award,
  ChevronRight
} from 'lucide-react';

// ==========================================
// 1. MAIN CARDS DEFINITION (Displayed Immediately On Opening)
// ==========================================
const LTE_MAIN_CARDS = [
  {
    id: 'cat4',
    title: 'New Connection Charges (CAT 4)',
    subtitle: 'Basic CPE Models (Huawei B310/B311/Tozed)',
    badge: 'Basic CPE (CAT 4)',
    badgeStyle: 'bg-blue-50 text-[#005696] border-blue-200',
    icon: Radio,
    gradient: 'from-[#005696] via-blue-700 to-indigo-800',
    cardBorder: 'border-blue-200 hover:border-blue-500 hover:shadow-blue-500/15',
    route: '/knowledge-hub/4g-lte/cat-4',
    ctaText: 'Open CAT 4 Charges',
    priceHighlight: 'Rs. 4,990 (Concessionary)',
    taxDate: 'Tax Rev. eff. 01/08/2024',
    desc: 'Official connection charges for Basic CAT 4 routers. Double Play Concessionary (Rs. 4,990), Refurbished units (Rs. 3,900), CDMA to 4G Free Migration, and SIM-only options.',
    keyFeatures: [
      'Concessionary Double Play: Rs. 4,990 (Prior Rs. 7,900)',
      'Single Play BB Concessionary: Rs. 4,990 with tax',
      'CDMA CityLink to 4G Migration: 100% Free',
      'Refurbished Recovered CPE: Rs. 3,900 with tax',
      'Warranty: New CPE 12 Mos | Refurbished 6 Mos'
    ],
    ttTemplate: `SERVICE: SLT-Mobitel 4G LTE Fixed Broadband
TARIFF OPTION: New Connection (CAT 4 Basic CPE - Concessionary Double Play)
ROUTER MODEL: Huawei B310 / B311 / Tozed Basic
PRICE WITH TAX: Rs. 4,990 (New Charges eff. 01/08/2024)
BASE PRICE WITHOUT TAX: Rs. 4,990 (Prior base Rs. 4,048.96)
PACKAGE CRITERIA: Applicable for BB package category Rs. 1,990 / 2,390 and above.
WARRANTY: 12 Months (Ownership transferred to subscriber after warranty).
EARLY TERMINATION FEE: Rs. 5,000 applies within 1-year commitment period.`
  },
  {
    id: 'cat6',
    title: 'New Connection Charges (CAT 6)',
    subtitle: 'Advanced Tozed CPE (Carrier Aggregation)',
    badge: 'Advanced CAT 6 (Tozed)',
    badgeStyle: 'bg-amber-50 text-amber-900 border-amber-300',
    icon: Zap,
    gradient: 'from-amber-600 via-orange-600 to-indigo-900',
    cardBorder: 'border-amber-200 hover:border-amber-500 hover:shadow-amber-500/15',
    route: '/knowledge-hub/4g-lte/cat-6',
    ctaText: 'Open CAT 6 Charges',
    priceHighlight: 'Rs. 13,990 / Rs. 19,900',
    taxDate: 'Published: 6/13/2025',
    desc: 'High-throughput Tozed CAT 6 advanced router pricing. Concessionary New (Rs. 13,990), Refurbished (Rs. 6,990), and Full Pay New (Rs. 19,900) with 25GB/mo free bonus data.',
    keyFeatures: [
      'Concessionary New: Rs. 13,990 (1-yr commit / Rs. 5k penalty)',
      'Concessionary Refurbished: Rs. 6,990 (6-month warranty)',
      'Full Payment: Rs. 19,900 (No commitment, no termination fee)',
      'Bonus Data: 25 GB/Month free for first 12 months on Full Pay',
      'Average Speeds: Download 16 Mbps | Upload 1 Mbps'
    ],
    ttTemplate: `SERVICE: SLT-Mobitel 4G LTE Fixed Broadband
TARIFF OPTION: New Connection (CAT 6 Advanced CPE - Tozed)
PRICE WITH TAX: Rs. 13,990 (Concessionary) / Rs. 19,900 (Full Payment)
BASE PRICE WITHOUT TAX: Rs. 11,327.94 (Prior base Rs. 6,900)
CPE SPECIFICATION: CAT 6 High-Throughput Tozed LTE Router with Carrier Aggregation (CA).
AVERAGE SPEEDS: Download 16 Mbps | Upload 1 Mbps.
WARRANTY: New CPE: 12 Months | Refurbished: 6 Months (Ownership transferred after warranty).
PACKAGE ELIGIBILITY: Applicable for Broadband packages Rs. 2,390 (1,990) and above.`
  },
  {
    id: 'voice',
    title: 'LTE Voice Packages (VoLTE)',
    subtitle: 'HD Voice & Unlimited Plans (011-2XXXXXX)',
    badge: 'VoLTE HD Telephony',
    badgeStyle: 'bg-teal-50 text-teal-800 border-teal-200',
    icon: Phone,
    gradient: 'from-teal-600 via-emerald-600 to-indigo-900',
    cardBorder: 'border-teal-200 hover:border-teal-500 hover:shadow-teal-500/15',
    route: '/knowledge-hub/4g-lte/voice',
    ctaText: 'Open VoLTE Voice',
    priceHighlight: 'Unlimited Voice Rs. 745',
    taxDate: 'Geo: 011-2XXXXXX',
    desc: 'Voice over LTE calling tariffs, Active & Leisure time bands, geographical number allocation, and 4 Flat-Rate Unlimited Any-Net Voice Plans (Home, Office, Religious, Voice Pal).',
    keyFeatures: [
      'Unlimited Home Double Play: Rs. 745 / mo (Any-Net)',
      'Unlimited Office Double Play: Rs. 745 / mo (Corporate/SME)',
      'Unlimited 4G Single Play Voice Pal: Rs. 745 / mo',
      'Standard On-net: Peak Rs. 1.70/min | Leisure Rs. 1.00/min',
      'Concurrent VoLTE operation with high-speed 4G data'
    ],
    ttTemplate: `SERVICE: SLT 4G VoLTE (Fixed Voice)
PLAN: Unlimited Home Double Play Rs. 745
SERVICE ORDER TYPE: CREATE (New Customer) / MODIFY (Migration from Copper/CDMA)
CALL ALLOWANCE: Unlimited Calls to Any Local Network (On-net & Off-net)
NUMBER PRESERVATION: Geographical series (011-2XXXXXX / CityLink retained)
QUALITY: Voice over LTE (VoLTE) High-Definition Audio Codec
RENTAL: Rs. 745 / month (Postpaid)`
  },
  {
    id: 'broadband',
    title: 'LTE Broadband (BB) Packages',
    subtitle: 'Standard Data Quotas & Night Bonus',
    badge: 'Fixed Broadband Data',
    badgeStyle: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    icon: Globe,
    gradient: 'from-indigo-600 via-blue-700 to-purple-900',
    cardBorder: 'border-indigo-200 hover:border-indigo-500 hover:shadow-indigo-500/15',
    route: '/knowledge-hub/4g-lte/broadband',
    ctaText: 'Open Broadband Plans',
    priceHighlight: '8 GB to 225 GB Tiers',
    taxDate: 'Day: 08-00 | Night: 00-08',
    desc: 'Daytime and free night-time volume package tiers (Web Starter to Web Supreme), Flash daily allowances (Flash 10/25), Work & Learn passes, and RF signal strength scale.',
    keyFeatures: [
      'Web Starter (8GB ~Rs. 490) to Web Supreme (225GB ~Rs. 7,890)',
      'Daytime standard quota applies 08:00 to 00:00 hrs',
      'Free bonus night-time data applies 00:00 to 08:00 hrs',
      'Flash 10 & Flash 25: Daily volume allowances with FUP',
      'RSRP RF Signal Scale: Antenna dispatch if RSRP < -105 dBm'
    ],
    ttTemplate: `SERVICE: SLT-Mobitel 4G LTE Fixed Broadband
FAULT: Slow Browsing Speeds / Weak RF Signal (RSRP < -105 dBm)
DIAGNOSTICS: Router gateway (192.168.8.1) indicates 1 red signal bar. Band 40 (2300MHz).
ACTION: Dispatch Trouble Ticket to AREA-MTCE / RF-PLANNING for outdoor high-gain Yagi antenna installation.`
  },
  {
    id: 'prepaid',
    title: '4G LTE Prepaid Services',
    subtitle: 'SIM Starter Pack & Top-Up Passes',
    badge: 'Prepaid Pay-As-You-Go',
    badgeStyle: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    icon: CreditCard,
    gradient: 'from-emerald-600 via-teal-700 to-cyan-900',
    cardBorder: 'border-emerald-200 hover:border-emerald-500 hover:shadow-emerald-500/15',
    route: '/knowledge-hub/4g-lte/prepaid',
    ctaText: 'Open Prepaid Plans',
    priceHighlight: 'HBB Anytime: 35GB & 75GB',
    taxDate: 'Work & Learn: 30GB (Rs. 235)',
    desc: 'Onetime prepaid broadband passes, HBB Anytime 899 (35GB) & 1899 (75GB), Work & Learn 30GB (Rs. 235), YouTube & Social 25GB (Rs. 390), MySLT app activation, and out-of-bundle rates.',
    keyFeatures: [
      'HBB Anytime Packs: 35GB (Rs. 899) & 75GB (Rs. 1,899)',
      'Home Broadband 30 Days: 20GB (Rs. 535) onetime',
      'Add-ons: Work & Learn (30GB - Rs. 235), YouTube & Social (25GB - Rs. 390)',
      'Out-of-bundle PAYG Data: Rs. 0.08666 / MB (With Tax)',
      'Reload Validity Matrix: Tier 1 to 8 (TRCSL compliant)'
    ],
    ttTemplate: `SERVICE: SLT 4G LTE Prepaid Recharge
FAULT: Prepaid Recharge Not Credited to Account
PAYMENT CHANNEL: Third-Party Banking / Merchant (e.g. Commercial Bank / Food City)
RELOAD AMOUNT: Rs. [AMOUNT]
TRANSACTION REF: [BANK_REF_OR_RECEIPT_NO]
TIMESTAMP: [DATE_TIME]
RULE: RULE_4G_RELOAD_THIRD_PARTY_CHANNELS
TARGET: BILLING-HELPDESK
ACTION: Verify API settlement gateway with merchant bank. Credit package quota manually upon transaction reconciliation.`
  },
  {
    id: 'old_charges',
    title: 'LTE Old Call Charges (Archive)',
    subtitle: 'Historical Rates (Pre-20th Jan 2017)',
    badge: 'Historical Reference',
    badgeStyle: 'bg-slate-100 text-slate-700 border-slate-300',
    icon: Clock,
    gradient: 'from-slate-700 via-slate-800 to-slate-950',
    cardBorder: 'border-slate-300 hover:border-slate-500 hover:shadow-slate-500/15',
    route: '/knowledge-hub/4g-lte/old-charges',
    ctaText: 'Open Old Rates',
    priceHighlight: 'Pre-Jan 2017 Archive',
    taxDate: 'Reviewed: 11/4/2024',
    desc: 'Archival call rate schedule for accounts provisioned prior to 20th January 2017. Comparison between Residential (Rs. 310) and Business (Rs. 499) legacy tariffs.',
    keyFeatures: [
      'Residential: Rs. 310 rental | 100 Free On-net Minutes',
      'Business: Rs. 499 rental | Stepped on-net calling rates',
      'Off-net call rates: Active Rs. 2.70/min | Leisure Rs. 2.00/min',
      'Free VAS bundle: CLI, Call Forwarding, Hunting, Conferencing',
      'Migration advice to new Unlimited VoLTE Rs. 745 plan'
    ],
    ttTemplate: `SERVICE: SLT 4G LTE Historical Call Rates (Pre-20th Jan 2017)
RESIDENTIAL: Rental Rs. 310 | On-net Active: Rs. 1.70/min | Leisure: Rs. 1.00/min | Off-net: Rs. 2.70/min | Free Min: 100 On-net
BUSINESS: Rental Rs. 499 | On-net: Rs. 1.70 (1st 3 mins) / Rs. 1.00 (>3 mins) | Off-net: Rs. 2.70/min | Free VAS: CLI, Call Forwarding, Hunting, Conferencing.`
  },
  {
    id: 'other_charges',
    title: 'Other Charges – LTE',
    subtitle: 'Damage Claims & Reconnection Fee',
    badge: 'Equipment & Reconnection',
    badgeStyle: 'bg-indigo-50 text-indigo-900 border-indigo-200',
    icon: Wrench,
    gradient: 'from-indigo-600 via-slate-800 to-blue-950',
    cardBorder: 'border-indigo-200 hover:border-indigo-500 hover:shadow-indigo-500/15',
    route: '/knowledge-hub/4g-lte/other-charges',
    ctaText: 'Open Other Charges',
    priceHighlight: 'Reconnection: Rs. 500/=',
    taxDate: 'Circular: 29-11-2022',
    desc: 'Customer responsible CPE damage claims for CAT 4 (Rs. 2,900), CAT 6 (Rs. 4,900), and Outdoor units. Postpaid line reconnection fee (Rs. 500/=) and Voice Pal mouse/lightning 24-mo scheme.',
    keyFeatures: [
      'Postpaid Reconnection Fee: Rs. 500/= for terminated lines',
      'Indoor CAT 4 Complete Set: Rs. 2,900 (Unit only Rs. 2,400)',
      'Indoor CAT 6 Complete Set: Rs. 4,900 (Unit only Rs. 4,300)',
      'Outdoor CPE Complete Set: Rs. 3,900 (ODU unit Rs. 3,500)',
      'Voice Pal Mouse/Lightning: Rs. 5,000 in 24 monthly installments (~Rs. 208.33/mo)'
    ],
    ttTemplate: `SERVICE: SLT 4G LTE Fixed Broadband
FAULT: Customer Responsible CPE Damage Claim
ROUTER: CAT 4 (Rs. 2,900) / CAT 6 (Rs. 4,900) / Outdoor (Rs. 3,900)
POSTPAID RECONNECTION: Rs. 500/=
VOICE PAL SCHEME: Rs. 5,000 in 24 installments for mouse/lightning damage.
CIRCULAR: 29-11-2022 Product Circular.`
  }
];

// ==========================================
// 2. SIDEBAR SOP PROCEDURES DEFINITION
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
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTtModal, setActiveTtModal] = useState<any | null>(null);
  const [activeSidebarModal, setActiveSidebarModal] = useState<any | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredCards = LTE_MAIN_CARDS.filter((card) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      card.title.toLowerCase().includes(q) ||
      card.subtitle.toLowerCase().includes(q) ||
      card.desc.toLowerCase().includes(q) ||
      card.keyFeatures.some((f) => f.toLowerCase().includes(q))
    );
  });

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f4f7f9] overflow-y-auto select-none">
      
      {/* 1. TOP SHAREPOINT INTRA BAR */}
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

      {/* 2. SLT MOBITEL BANNER & MENU NAVIGATION */}
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

      {/* 3. BREADCRUMB SUB-HEADER */}
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

      {/* 4. HERO BANNER */}
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

            {/* Quick Search Bar */}
            <div className="relative w-72 md:w-80">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search CAT 4, CAT 6, VoLTE, Prepaid..."
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
            SLT-Mobitel 4G LTE - Core Service Modules
          </h1>
          <p className="text-xs text-cyan-100/90 max-w-3xl font-medium leading-relaxed">
            Select a service card below to navigate directly to its dedicated tariffs, connection charges (CAT 4 &amp; CAT 6), VoLTE voice packages, broadband data allowances, and prepaid procedures.
          </p>

          {/* Publisher Metadata */}
          <div className="flex items-center gap-3 pt-1">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-700 border border-cyan-400 flex items-center justify-center font-bold text-xs text-white shadow-sm">
              CR
            </div>
            <div className="text-xs">
              <p className="font-bold text-white">Chathurani Rathnayake</p>
              <p className="text-[11px] text-cyan-200/90">Senior Assistant Manager (Customer Relations) - A7 | Tax Revision: 01/08/2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. NAVIGATION STRIP */}
      <div className="bg-white px-6 py-2.5 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-black text-slate-800 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#005696]" />
              <span>4G LTE Modules (Click Card to Redirect)</span>
            </span>
            <span className="px-2 py-0.5 rounded-full bg-blue-100 text-[#005696] font-bold text-[10px]">
              {filteredCards.length} Sections Available
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-500 font-semibold text-[11px]">
            <span>Price plans eff. 24/08/2022</span>
            <span>•</span>
            <span className="text-emerald-700 font-bold">Revised with Tax: 01/08/2024</span>
          </div>
        </div>
      </div>

      {/* 6. MAIN CONTENT AREA (Left Sidebar + Right Cards Grid) */}
      <div className="flex-1 p-6 md:p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          
          {/* ---------------------------------------------------- */}
          {/* A. LEFT SIDEBAR: Standard Procedures & Quick Links   */}
          {/* ---------------------------------------------------- */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3">
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
            <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-2xl p-4 shadow-xs space-y-2.5 border border-blue-800/40">
              <div className="flex items-center gap-1.5 text-cyan-300 font-bold text-xs uppercase tracking-wider">
                <Gauge className="w-4 h-4" />
                <span>4G LTE Speed Guidelines</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-white/10 rounded-xl">
                  <span className="text-[10px] font-bold text-cyan-200 uppercase block">Good Coverage Area:</span>
                  <p className="font-mono font-bold text-white text-sm">10 - 20 Mbps</p>
                  <p className="text-[10px] text-slate-300">Min. Guarantee: 3-5 Mbps | Peak: up to 40 Mbps</p>
                  <p className="text-[10px] text-cyan-300">Upload: 3 - 5 Mbps</p>
                </div>

                <div className="p-2.5 bg-white/10 rounded-xl">
                  <span className="text-[10px] font-bold text-amber-300 uppercase block">Fringe / Moderate Area:</span>
                  <p className="font-mono font-bold text-white text-sm">4 - 8 Mbps</p>
                  <p className="text-[10px] text-slate-300">Upload: 1 - 2 Mbps</p>
                </div>
              </div>
            </div>

            {/* Tax & Billing Cycles Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs text-xs space-y-2">
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
          {/* B. MAIN RIGHT PANEL: PRIMARY 4G CARDS GRID           */}
          {/* ---------------------------------------------------- */}
          <div className="lg:col-span-3 space-y-6">

            {/* Section Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black text-slate-900 tracking-tight">
                  4G LTE Operational Modules (6 Main Cards)
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  Click any card to redirect directly to its dedicated pricing and triage page
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/knowledge-hub/4g-lte/cat-4"
                  className="px-3 py-1.5 rounded-lg bg-[#005696] hover:bg-[#004172] text-white font-bold text-xs flex items-center gap-1 shadow-xs transition-colors"
                >
                  <Radio className="w-3.5 h-3.5" />
                  <span>Open CAT 4 ➔</span>
                </Link>
                <Link
                  href="/knowledge-hub/4g-lte/cat-6"
                  className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-1 shadow-xs transition-colors"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Open CAT 6 ➔</span>
                </Link>
              </div>
            </div>

            {/* The 6 Main Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredCards.map((card) => {
                const CardIcon = card.icon;
                return (
                  <motion.div
                    key={card.id}
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => router.push(card.route)}
                    className={`bg-white rounded-2xl p-5 border transition-all cursor-pointer flex flex-col justify-between shadow-2xs hover:shadow-xl relative overflow-hidden group ${card.cardBorder}`}
                  >
                    <div>
                      {/* Top Header */}
                      <div className="flex items-start justify-between gap-1.5 mb-3">
                        <div
                          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0`}
                        >
                          <CardIcon className="w-5 h-5" />
                        </div>
                        <span
                          className={`text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border truncate ${card.badgeStyle}`}
                        >
                          {card.badge}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <div className="flex items-center justify-between mb-0.5">
                        <h3 className="font-black text-base text-slate-900 group-hover:text-[#005696] transition-colors flex items-center gap-1">
                          <span>{card.title}</span>
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#005696]" />
                        </h3>
                      </div>

                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 truncate">
                        {card.subtitle}
                      </p>

                      <div className="mb-3 flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                        <span className="font-bold text-[#005696]">{card.priceHighlight}</span>
                        <span className="text-[10px] text-slate-500 font-semibold">{card.taxDate}</span>
                      </div>

                      <p className="text-xs text-slate-600 font-medium line-clamp-3 leading-relaxed mb-4">
                        {card.desc}
                      </p>

                      {/* Key Features List */}
                      <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                        <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                          Key Topics &amp; Tariffs:
                        </span>
                        {card.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-1.5 text-[10px] text-slate-600 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#005696] shrink-0"></span>
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTtModal(card);
                        }}
                        className="text-[10px] font-bold text-[#005696] hover:underline flex items-center gap-1"
                      >
                        <FileText className="w-3 h-3" />
                        <span>TT / Quote</span>
                      </button>

                      <div
                        className="px-3 py-1 rounded-lg bg-[#005696] group-hover:bg-[#004172] text-white font-bold text-[11px] flex items-center gap-1 shadow-2xs transition-colors"
                      >
                        <span>{card.ctaText}</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Operational Triage & Signal Summary */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
              <div className="border-b border-slate-100 pb-2 flex items-center justify-between">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#005696]" />
                  <span>4G LTE Frontline Triage &amp; Escalation Summary</span>
                </h3>
                <span className="text-xs text-slate-400 font-semibold">ISO 9001:2015 Compliant</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-200/80 space-y-1">
                  <span className="text-[10px] font-black uppercase text-[#005696]">CAT 4 Connection</span>
                  <p className="font-bold text-slate-800">New With Tax: Rs. 4,990</p>
                  <p className="text-[11px] text-slate-600">Applicable for BB packages Rs. 1,990/2,390 and above.</p>
                </div>

                <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/80 space-y-1">
                  <span className="text-[10px] font-black uppercase text-amber-800">CAT 6 Tozed Advanced</span>
                  <p className="font-bold text-slate-800">Concession: Rs. 13,990</p>
                  <p className="text-[11px] text-slate-600">Full payment Rs. 19,900 carries free 25GB/mo bonus data.</p>
                </div>

                <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-200/80 space-y-1">
                  <span className="text-[10px] font-black uppercase text-teal-800">VoLTE HD Voice</span>
                  <p className="font-bold text-slate-800">Unlimited Voice: Rs. 745</p>
                  <p className="text-[11px] text-slate-600">Postpaid flat rate calling to any local telephone network.</p>
                </div>

                <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200/80 space-y-1">
                  <span className="text-[10px] font-black uppercase text-emerald-800">Prepaid SIM Pack</span>
                  <p className="font-bold text-slate-800">Starter Pack: Rs. 1,400</p>
                  <p className="text-[11px] text-slate-600">Pay-as-you-go volume passes from 1GB to 40GB.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* MODAL 1: Trouble Ticket / Quotation Draft */}
      <AnimatePresence>
        {activeTtModal && (
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
                    Trouble Ticket &amp; Quotation Template
                  </span>
                  <h3 className="text-base font-black text-slate-900 mt-1">
                    {activeTtModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveTtModal(null)}
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-slate-900 text-white p-4 rounded-xl font-mono text-xs border border-slate-800">
                <pre className="whitespace-pre-wrap leading-relaxed text-lime-300">
                  {activeTtModal.ttTemplate}
                </pre>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => router.push(activeTtModal.route)}
                  className="px-4 py-2 rounded-xl bg-blue-50 text-[#005696] font-bold text-xs hover:bg-blue-100 transition-colors flex items-center gap-1.5"
                >
                  <span>Go to Full Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(activeTtModal.ttTemplate, 'tt-modal')}
                    className="px-4 py-2 rounded-xl bg-[#005696] hover:bg-[#004780] text-white font-bold text-xs shadow-xs flex items-center gap-1.5 transition-colors"
                  >
                    {copiedId === 'tt-modal' ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === 'tt-modal' ? 'Copied Template!' : 'Copy Template'}</span>
                  </button>
                  <button
                    onClick={() => setActiveTtModal(null)}
                    className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 2: Sidebar SOP Procedure Details */}
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
                  {copiedId === 'sop-copy' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === 'sop-copy' ? 'Copied Steps!' : 'Copy Guidelines'}</span>
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
