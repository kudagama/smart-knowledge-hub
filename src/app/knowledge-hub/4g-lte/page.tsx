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
  Cpu
} from 'lucide-react';

// 4 Core 4G LTE Operational Modules
const LTE_MODULES = [
  {
    id: 'signal_cpe',
    title: 'CPE Router & Signal Triage',
    subtitle: 'Band 40 (2300MHz) / RSRP & SINR',
    badge: 'Radio Frequency',
    badgeStyle: 'bg-blue-50 text-blue-800 border-blue-200',
    icon: Signal,
    gradient: 'from-blue-700 via-indigo-700 to-cyan-800',
    cardBorder: 'border-blue-200 hover:border-blue-500 hover:shadow-blue-500/15',
    targetGroup: 'AREA-MTCE / RF-PLANNING',
    ruleCode: 'RULE_4G_WEAK_SIGNAL_ANTENNA',
    desc: 'CPE router signal bar diagnostics, RSRP reference power, SINR interference tests, Band 40 vs Band 3 locking, and outdoor high-gain antenna dispatch.',
    keyFeatures: [
      'RSRP & Signal Bar Level Diagnostics (Modem 192.168.8.1)',
      'Router Placement near Windows Facing Base Station (eNodeB)',
      'Band Locking: 4G Only (Prefer Band 40 - 2300MHz TDD)',
      'Outdoor High-Gain Antenna Dispatch for Low Coverage Areas'
    ],
    ttTemplate: `SERVICE: SLT-Mobitel 4G LTE Fixed Broadband
FAULT: Weak Signal / Low Data Speeds (RSRP < -105 dBm)
ROUTER MODEL: Huawei B310 / B311 CPE
SIGNAL CHECK: Only 1 red signal bar observed inside premises.
RULE: Rule 4G-Signal (Outdoor High-Gain Antenna Request)
TARGET: AREA-MTCE / RF-PLANNING
ACTION: Dispatch field technician to install outdoor high-gain directional Yagi antenna pointing to nearest eNodeB tower.`
  },
  {
    id: 'prepaid_recharge',
    title: 'Prepaid Reloads & Banking SOP',
    subtitle: 'Direct Channels vs Commercial Banks',
    badge: 'Billing & Payments',
    badgeStyle: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    icon: CreditCard,
    gradient: 'from-emerald-700 via-teal-700 to-blue-800',
    cardBorder: 'border-emerald-200 hover:border-emerald-500 hover:shadow-emerald-500/15',
    targetGroup: 'BILLING-HELPDESK / M-CASH',
    ruleCode: 'RULE_4G_RELOAD_THIRD_PARTY_CHANNELS',
    desc: 'Standard triage for 4G LTE prepaid recharge failures via Food City, Keells, Singer, Commercial Bank, Sampath, BOC, and MySLT online payments.',
    keyFeatures: [
      'Direct Reloads (Mobitel Dealer, MySLT, mCash) - Instant Sync',
      'Third-Party Banking Apps (Commercial Bank, BOC, Sampath) - 15-30 mins buffer',
      'Merchant Counter Reloads (Cargills Food City, Keells, Singer)',
      'PCRF Rating Verification & Transaction Reference Logging'
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
    id: 'volte_voice',
    title: 'VoLTE Desk Phone & Migration',
    subtitle: 'Fixed Voice over 4G LTE (CDMA Replacement)',
    badge: 'Voice Services',
    badgeStyle: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    icon: Phone,
    gradient: 'from-indigo-700 via-purple-700 to-blue-800',
    cardBorder: 'border-indigo-200 hover:border-indigo-500 hover:shadow-indigo-500/15',
    targetGroup: 'Teleshop Walk-in / CS-TECH',
    ruleCode: 'RULE_VOLTE_DESK_PHONE_SWAP',
    desc: 'Fixed Voice over LTE (VoLTE) desk phone operations, legacy CDMA CityLink migration, geographical number preservation, and Teleshop warranty replacements.',
    keyFeatures: [
      'VoLTE Desk Phone Setup & Geographical PSTN Number Retention',
      'SIM Registration inside Desk Phone Unit',
      'No Dial Tone / Call Dropping Voice Troubleshooting',
      'Teleshop 1-to-1 Warranty Replacement for Defective Units'
    ],
    ttTemplate: `SERVICE: SLT 4G VoLTE Fixed Telephone
FAULT: No Dial Tone / VoLTE SIP Registration Failure
SUBSCRIBER NUMBER: [GEOGRAPHICAL_PSTN_NUMBER]
UNIT MODEL: Huawei / Tozed VoLTE Desk Phone
PRE-CHECKS: Antenna tightened. SIM card seated properly. Power adapter OK.
RULE: Rule VoLTE-Swap (Hardware Defect)
ACTION: Customer guided to visit nearest Teleshop with defective desk phone and power adapter for warranty exchange.`
  },
  {
    id: 'sim_imei_lock',
    title: 'SIM Card Lock & IMEI Binding',
    subtitle: 'Geographical Cell & Router Lock Policy',
    badge: 'Security Policy',
    badgeStyle: 'bg-amber-50 text-amber-800 border-amber-200',
    icon: ShieldCheck,
    gradient: 'from-amber-700 via-orange-700 to-rose-800',
    cardBorder: 'border-amber-200 hover:border-amber-500 hover:shadow-amber-500/15',
    targetGroup: 'CEN-CSC-TECH / Teleshop',
    ruleCode: 'RULE_4G_SIM_ROUTER_IMEI_LOCK',
    desc: 'SLT Fixed Wireless 4G SIM cards are strictly locked to the registered CPE router IMEI. Triage for SIM lockouts, IMEI resets, and lost SIM replacements.',
    keyFeatures: [
      'SIM Binding Policy: Fixed Wireless SIM cannot be used in Mobile Phone',
      'Data Blocked / "SIM Card Locked" Error Resolution',
      'IMEI Re-binding upon Router Replacement at Teleshop',
      'Lost / Damaged 4G USIM Replacement Procedure'
    ],
    ttTemplate: `SERVICE: 4G LTE SIM / IMEI Binding
FAULT: SIM Locked / Data Session Blocked after Hardware Change
REASON: Customer inserted Fixed Wireless 4G SIM into unapproved device / new router.
RULE: RULE_4G_SIM_ROUTER_IMEI_LOCK
TARGET: CEN-CSC-TECH / Teleshop
ACTION: Update customer CPE router IMEI in HSS / Billing engine to re-enable 4G fixed wireless broadband service.`
  }
];

export default function LteServicesHubPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTtModal, setActiveTtModal] = useState<any | null>(null);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  const filteredModules = LTE_MODULES.filter((mod) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      mod.title.toLowerCase().includes(q) ||
      mod.subtitle.toLowerCase().includes(q) ||
      mod.desc.toLowerCase().includes(q) ||
      mod.keyFeatures.some((f) => f.toLowerCase().includes(q))
    );
  });

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f8fafc] overflow-y-auto select-none">
      
      {/* 1. TOP HEADER BAR */}
      <header className="bg-gradient-to-r from-blue-950 via-indigo-900 to-cyan-900 text-white px-5 py-2.5 flex items-center justify-between text-xs shadow-md shrink-0 border-b border-indigo-500/20">
        <div className="flex items-center gap-4">
          <Link href="/knowledge-hub" className="flex items-center gap-2 group">
            <div className="flex flex-col leading-none">
              <span className="font-black text-lg text-white tracking-tighter drop-shadow-xs">SLT MOBITEL</span>
              <span className="text-[9px] text-cyan-200 uppercase tracking-widest font-bold">4G LTE Knowledge Hub</span>
            </div>
          </Link>
          <span className="h-5 w-px bg-white/20 hidden sm:block"></span>
          <span className="text-xs text-indigo-100 font-medium hidden md:inline">
            Fixed Wireless Broadband, VoLTE Desk Phone &amp; Recharge Triage
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/knowledge-hub/trio"
            className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-lg text-xs flex items-center gap-1.5 shadow-md transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Migrate to FTTH Trio ➔</span>
          </Link>
          <div className="w-7 h-7 rounded-full bg-indigo-700 border border-indigo-400 flex items-center justify-center font-bold text-[11px] text-white">
            GJ
          </div>
        </div>
      </header>

      {/* 2. BREADCRUMBS BAR */}
      <div className="bg-white border-b border-slate-200 px-6 py-2.5 flex items-center justify-between text-xs text-slate-600 shrink-0">
        <div className="flex items-center gap-2">
          <Link href="/knowledge-hub" className="text-[#005696] font-bold hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/knowledge-hub" className="hover:underline">Knowledge Hub</Link>
          <span className="text-slate-300">/</span>
          <span className="font-bold text-indigo-800">SLT 4G LTE (Fixed Wireless)</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 text-[10px] font-mono font-bold">
            Band 40: 2300MHz (TDD)
          </span>
          <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-800 border border-indigo-200 text-[10px] font-mono font-bold">
            Band 3: 1800MHz (FDD)
          </span>
        </div>
      </div>

      {/* 3. HERO BANNER */}
      <div className="p-6 max-w-7xl mx-auto w-full space-y-6">
        <div className="p-6 bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-950 rounded-2xl text-white shadow-xl border border-indigo-600/30 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-indigo-500/20 text-cyan-300 border border-indigo-400/30 flex items-center gap-1.5">
                  <Radio className="w-3 h-3" />
                  Fixed Wireless 4G LTE
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-slate-300">
                  SLT-Mobitel Wireless Operations
                </span>
              </div>

              {/* Universal Search inside 4G LTE Hub */}
              <div className="relative w-full sm:w-72">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-indigo-300" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 4G Signal, Food City reload, VoLTE..."
                  className="w-full bg-white/15 text-white placeholder-indigo-200/60 text-xs pl-8 pr-7 py-1.5 rounded-lg border border-white/20 focus:outline-hidden focus:ring-2 focus:ring-cyan-400 backdrop-blur-md"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-indigo-200 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            <div>
              <h1 className="text-xl md:text-2xl font-black text-white">
                SLT-Mobitel 4G LTE Fixed Wireless Services Portal
              </h1>
              <p className="text-xs md:text-sm text-indigo-100 mt-1 max-w-3xl leading-relaxed">
                Frontline troubleshooting standard operating procedures for 4G LTE CPE routers, RSRP signal strength diagnostics, third-party prepaid reload reconciliation, and VoLTE desk phone operations.
              </p>
            </div>

            {/* Quick Signal Reference Strip */}
            <div className="p-3 bg-white/10 rounded-xl border border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-cyan-300 shrink-0" />
                <span className="text-slate-200">
                  Customer experiencing slow browsing or red signal indicator? Verify <strong>RSRP signal metric</strong> in router gateway (192.168.8.1). If RSRP &lt; -105 dBm, request an <strong>Outdoor High-Gain Antenna</strong>.
                </span>
              </div>
              <button
                onClick={() => setActiveTtModal(LTE_MODULES[0])}
                className="px-3 py-1 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-lg text-xs flex items-center gap-1 transition-all shrink-0"
              >
                <span>Antenna TT Draft</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* 4. 4 CORE OPERATIONAL MODULES */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-700" />
                4G LTE Operational &amp; Triage Modules
              </h2>
              <p className="text-xs text-slate-500">
                Frontline resolution guides and standard operating procedures for contact center and teleshop officers.
              </p>
            </div>
            <span className="text-xs font-semibold text-slate-400">
              Showing {filteredModules.length} of 4 Modules
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredModules.map((mod) => {
              const IconComponent = mod.icon;
              return (
                <motion.div
                  key={mod.id}
                  whileHover={{ y: -3 }}
                  className={`bg-white rounded-2xl border p-5 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group ${mod.cardBorder}`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${mod.gradient} text-white flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform`}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold">
                          {mod.ruleCode}
                        </span>
                        <span
                          className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border truncate ${mod.badgeStyle}`}
                        >
                          {mod.badge}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-black text-lg text-slate-900 group-hover:text-indigo-700 transition-colors">
                      {mod.title}
                    </h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 truncate">
                      {mod.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                      {mod.desc}
                    </p>

                    {/* Key Topics List */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                      <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                        Core SOP &amp; Triage Topics:
                      </span>
                      {mod.keyFeatures.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></span>
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">
                      Dispatch: <strong className="text-slate-700">{mod.targetGroup}</strong>
                    </span>

                    <button
                      onClick={() => setActiveTtModal(mod)}
                      className="px-3.5 py-1.5 rounded-lg bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>View TT Draft</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 5. 4G LTE RSRP SIGNAL STRENGTH DIAGNOSTIC MATRIX */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <Signal className="w-4 h-4 text-indigo-700" />
                4G LTE Radio Frequency (RF) Signal Diagnostic Scale
              </h3>
              <p className="text-xs text-slate-500">
                Read metrics from router dashboard: http://192.168.8.1 (Default credentials: admin / admin)
              </p>
            </div>
            <span className="px-2.5 py-1 bg-indigo-50 text-indigo-800 border border-indigo-200 rounded-md text-[10px] font-mono font-bold">
              RSRP (dBm) &amp; SINR (dB)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1 text-xs">
            {/* Level 1 */}
            <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/60 space-y-1">
              <span className="text-[10px] font-black uppercase text-emerald-800 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Outstanding Signal
              </span>
              <p className="font-mono font-bold text-slate-900 text-sm">&gt; -80 dBm</p>
              <p className="text-[11px] text-emerald-900">
                3-4 Solid Blue signal bars. Full 4G throughput. No antenna needed.
              </p>
            </div>

            {/* Level 2 */}
            <div className="p-3.5 rounded-xl border border-teal-200 bg-teal-50/60 space-y-1">
              <span className="text-[10px] font-black uppercase text-teal-800 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                Good / Normal
              </span>
              <p className="font-mono font-bold text-slate-900 text-sm">-80 to -90 dBm</p>
              <p className="text-[11px] text-teal-900">
                2-3 Solid Blue bars. Stable streaming and browsing. Normal operating zone.
              </p>
            </div>

            {/* Level 3 */}
            <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/60 space-y-1">
              <span className="text-[10px] font-black uppercase text-amber-800 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                Fair / Cell Edge
              </span>
              <p className="font-mono font-bold text-slate-900 text-sm">-90 to -100 dBm</p>
              <p className="text-[11px] text-amber-900">
                1-2 Bars. Relocate router near a window or higher floor facing tower.
              </p>
            </div>

            {/* Level 4 */}
            <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50/60 space-y-1">
              <span className="text-[10px] font-black uppercase text-rose-800 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                Critical Low / No Sync
              </span>
              <p className="font-mono font-bold text-slate-900 text-sm">&lt; -105 dBm</p>
              <p className="text-[11px] text-rose-900">
                1 Red / Blinking Bar. Dispatch TT to AREA-MTCE for Outdoor Antenna.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. TROUBLE TICKET MODAL */}
      <AnimatePresence>
        {activeTtModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4"
            >
              <div className="flex items-start justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${activeTtModal.gradient} text-white flex items-center justify-center font-bold shadow-md`}>
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700">
                      Standard Trouble Ticket Draft
                    </span>
                    <h3 className="text-base font-black text-slate-900">
                      {activeTtModal.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTtModal(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Target Work Group</span>
                  <p className="font-mono font-bold text-indigo-800">{activeTtModal.targetGroup}</p>
                </div>

                <div className="p-4 bg-slate-900 border border-slate-700 rounded-xl space-y-2 text-white">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                    <span className="font-bold text-cyan-300 font-mono text-[11px]">C-Log / CRM Dispatch Note</span>
                    <button
                      onClick={() => copyToClipboard(activeTtModal.ttTemplate, 'tt-modal')}
                      className="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] rounded-md font-sans font-bold flex items-center gap-1 transition-all"
                    >
                      {copiedLink === 'tt-modal' ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedLink === 'tt-modal' ? 'Copied TT!' : 'Copy TT'}</span>
                    </button>
                  </div>
                  <pre className="whitespace-pre-wrap leading-relaxed text-cyan-200 font-mono text-[11px]">
                    {activeTtModal.ttTemplate}
                  </pre>
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center">
                <button
                  onClick={() => copyToClipboard(activeTtModal.ttTemplate, 'tt-modal-btn')}
                  className="px-4 py-2 bg-indigo-700 hover:bg-indigo-800 text-white rounded-xl text-xs font-black shadow-xs flex items-center gap-1.5"
                >
                  {copiedLink === 'tt-modal-btn' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink === 'tt-modal-btn' ? 'Copied Template!' : 'Copy Template'}</span>
                </button>

                <button
                  onClick={() => setActiveTtModal(null)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors"
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

