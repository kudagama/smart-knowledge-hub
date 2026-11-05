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
  ChevronRight,
  Repeat
} from 'lucide-react';

// ==========================================
// 1. MAIN CARDS DEFINITION (Topic-Only Navigation)
// ==========================================
const LTE_MAIN_CARDS = [
  {
    id: 'cat4',
    title: 'New Connection Charges (CAT 4)',
    badge: 'Basic CPE',
    badgeStyle: 'bg-blue-50 text-[#005696] border-blue-200',
    icon: Radio,
    gradient: 'from-[#005696] via-blue-700 to-indigo-800',
    cardBorder: 'border-slate-200 hover:border-[#005696] hover:shadow-[#005696]/15',
    route: '/knowledge-hub/4g-lte/cat-4'
  },
  {
    id: 'cat6',
    title: 'New Connection Charges (CAT 6)',
    badge: 'Tozed Advanced',
    badgeStyle: 'bg-amber-50 text-amber-900 border-amber-300',
    icon: Zap,
    gradient: 'from-amber-600 via-orange-600 to-indigo-900',
    cardBorder: 'border-slate-200 hover:border-amber-600 hover:shadow-amber-500/15',
    route: '/knowledge-hub/4g-lte/cat-6'
  },
  {
    id: 'voice',
    title: 'LTE Voice Packages (VoLTE)',
    badge: 'HD Telephony',
    badgeStyle: 'bg-teal-50 text-teal-800 border-teal-200',
    icon: Phone,
    gradient: 'from-teal-600 via-emerald-600 to-indigo-900',
    cardBorder: 'border-slate-200 hover:border-teal-600 hover:shadow-teal-500/15',
    route: '/knowledge-hub/4g-lte/voice'
  },
  {
    id: 'broadband',
    title: 'LTE Broadband (BB) Packages',
    badge: 'Data Plans',
    badgeStyle: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    icon: Globe,
    gradient: 'from-indigo-600 via-blue-700 to-purple-900',
    cardBorder: 'border-slate-200 hover:border-indigo-600 hover:shadow-indigo-500/15',
    route: '/knowledge-hub/4g-lte/broadband'
  },
  {
    id: 'old_charges',
    title: 'LTE Old Call Charges',
    badge: 'Historical Rates',
    badgeStyle: 'bg-slate-100 text-slate-700 border-slate-300',
    icon: Clock,
    gradient: 'from-slate-700 via-slate-800 to-slate-950',
    cardBorder: 'border-slate-200 hover:border-slate-600 hover:shadow-slate-500/15',
    route: '/knowledge-hub/4g-lte/old-charges'
  },
  {
    id: 'prepaid',
    title: '4G LTE Prepaid Services',
    badge: 'Prepaid Plans',
    badgeStyle: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    icon: CreditCard,
    gradient: 'from-emerald-600 via-teal-700 to-cyan-900',
    cardBorder: 'border-slate-200 hover:border-emerald-600 hover:shadow-emerald-500/15',
    route: '/knowledge-hub/4g-lte/prepaid'
  },
  {
    id: 'other_charges',
    title: 'Other Charges – LTE',
    badge: 'Damage & Reconnection',
    badgeStyle: 'bg-rose-50 text-rose-900 border-rose-200',
    icon: Wrench,
    gradient: 'from-rose-600 via-indigo-800 to-blue-950',
    cardBorder: 'border-slate-200 hover:border-rose-600 hover:shadow-rose-500/15',
    route: '/knowledge-hub/4g-lte/other-charges'
  },
  {
    id: 'lanka_bell',
    title: 'Lanka Bell to SLT 4G',
    badge: 'Free Migration',
    badgeStyle: 'bg-purple-50 text-purple-900 border-purple-200',
    icon: Repeat,
    gradient: 'from-purple-700 via-indigo-800 to-slate-950',
    cardBorder: 'border-slate-200 hover:border-purple-600 hover:shadow-purple-500/15',
    route: '/knowledge-hub/4g-lte/lanka-bell'
  },
  {
    id: 'storage',
    title: 'SLT Storage (Eazy Storage)',
    badge: 'Cloud Sync',
    badgeStyle: 'bg-cyan-50 text-cyan-900 border-cyan-200',
    icon: Server,
    gradient: 'from-cyan-700 via-teal-800 to-slate-950',
    cardBorder: 'border-slate-200 hover:border-cyan-600 hover:shadow-cyan-500/15',
    route: '/knowledge-hub/4g-lte/storage'
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
    return card.title.toLowerCase().includes(q) || card.badge.toLowerCase().includes(q);
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
      <div className="relative bg-gradient-to-r from-[#03152e] via-[#082a52] to-[#011429] text-white px-8 py-7 overflow-hidden border-b border-blue-900/40">
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
                placeholder="Search topic (CAT 4, VoLTE, Prepaid...)"
                className="w-full bg-white text-slate-800 text-xs pl-8 pr-7 py-2 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-cyan-400 shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white drop-shadow-md">
            SLT-Mobitel 4G LTE - Service Navigation Hub
          </h1>
          <p className="text-xs text-cyan-100/90 max-w-3xl font-medium leading-relaxed">
            Select any service topic below to redirect directly to its complete tariffs, connection charges, packages, and technical operational procedures.
          </p>

          {/* Publisher Metadata */}
          <div className="flex items-center gap-3 pt-1">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-700 border border-cyan-400 flex items-center justify-center font-bold text-xs text-white shadow-sm">
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
              <span>4G LTE Navigation Cards ({filteredCards.length} Topics)</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-500 font-semibold text-[11px]">
            <span>Click any card to open dedicated page</span>
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
          {/* B. MAIN RIGHT PANEL: TOPIC-ONLY 4G CARDS GRID        */}
          {/* ---------------------------------------------------- */}
          <div className="lg:col-span-3 space-y-6">

            {/* Section Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black text-slate-900 tracking-tight">
                  4G LTE Service Topics
                </h2>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Click any topic card to open its dedicated page with complete details and calculators
                </p>
              </div>

              <span className="hidden sm:inline-block text-xs font-bold text-[#005696] bg-blue-50 px-3 py-1 rounded-xl border border-blue-200">
                9 Modules Available
              </span>
            </div>

            {/* Clean Topic Cards Grid (No description clutter) */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredCards.map((card) => {
                const CardIcon = card.icon;
                return (
                  <motion.div
                    key={card.id}
                    whileHover={{ y: -3, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => router.push(card.route)}
                    className={`bg-white rounded-2xl p-5 border-2 transition-all cursor-pointer flex items-center justify-between gap-4 shadow-xs hover:shadow-lg group ${card.cardBorder}`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0`}
                      >
                        <CardIcon className="w-6 h-6" />
                      </div>
                      <div className="min-w-0">
                        <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border mb-1 inline-block ${card.badgeStyle}`}>
                          {card.badge}
                        </span>
                        <h3 className="font-black text-base md:text-lg text-slate-900 group-hover:text-[#005696] transition-colors leading-snug truncate">
                          {card.title}
                        </h3>
                      </div>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-[#005696] text-slate-500 group-hover:text-white flex items-center justify-center transition-all shrink-0 shadow-2xs">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
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
                  <span>4G LTE Frontline Quick Reference</span>
                </h3>
                <span className="text-xs text-slate-400 font-semibold">ISO 9001:2015 Compliant</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-200/80 space-y-1">
                  <span className="text-[10px] font-black uppercase text-[#005696]">CAT 4 Connection</span>
                  <p className="font-bold text-slate-800">New With Tax: Rs. 4,990</p>
                  <p className="text-[11px] text-slate-600">Concessionary Double Play.</p>
                </div>

                <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/80 space-y-1">
                  <span className="text-[10px] font-black uppercase text-amber-800">CAT 6 Tozed Advanced</span>
                  <p className="font-bold text-slate-800">Concession: Rs. 13,990</p>
                  <p className="text-[11px] text-slate-600">Full payment Rs. 19,900 (25GB/mo free).</p>
                </div>

                <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-200/80 space-y-1">
                  <span className="text-[10px] font-black uppercase text-teal-800">VoLTE HD Voice</span>
                  <p className="font-bold text-slate-800">Unlimited Voice: Rs. 745</p>
                  <p className="text-[11px] text-slate-600">Any-Net flat rate calling.</p>
                </div>

                <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200/80 space-y-1">
                  <span className="text-[10px] font-black uppercase text-emerald-800">Prepaid SIM Pack</span>
                  <p className="font-bold text-slate-800">Starter Pack: Rs. 1,400</p>
                  <p className="text-[11px] text-slate-600">HBB Anytime &amp; Add-ons.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* MODAL: Sidebar SOP Procedure Details */}
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
