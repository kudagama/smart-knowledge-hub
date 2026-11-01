"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
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
  Radio,
  SlidersHorizontal,
  Info
} from 'lucide-react';

// 3 Core Megaline Service Domain Cards (Voice, Broadband, PEO TV)
const MEGALINE_CARDS = [
  {
    id: 'voice',
    title: 'Voice',
    subtitle: 'PSTN / Dial Tone / POTS (-48V DC)',
    badge: 'Copper Wireline Voice',
    badgeStyle: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    icon: Phone,
    gradient: 'from-emerald-700 via-teal-700 to-cyan-800',
    cardBorder: 'border-emerald-200 hover:border-emerald-500 hover:shadow-emerald-500/15',
    route: '/knowledge-hub/megaline/voice',
    ctaText: 'Open Voice Page',
    desc: 'Traditional PSTN copper wireline voice, exchange MDF line loop resistance testing, Rule 11 dispatch, line crackling & hum noise, and drop wire replacement.',
    ruleCode: 'RULE_11_MDF_VOICE_LINE_FAULT',
    targetGroup: 'MDF / AREA-MTCE',
    keyFeatures: [
      'No Dial Tone (MDF Line Loop Test & Rule 11)',
      'Line Noise & Hum (Earth Leakage / Rain Fault)',
      'Outdoor Copper Drop Wire Snapped / Damaged',
      'PSTN Telephone Instrument & Bell Malfunction'
    ],
    ttTemplate: `SERVICE: Megaline PSTN Voice
FAULT: No Dial Tone / PSTN Line Dead
LOOP RESISTANCE TEST: MDF test shows open circuit / high loop resistance (>1200 ohms)
RULE: Rule 11 (Copper Voice Line Fault)
ACTION: Dispatch TT to MDF / AREA-MTCE for outdoor distribution box (DP) pair check.`
  },
  {
    id: 'broadband',
    title: 'Broadband',
    subtitle: 'ADSL / ADSL2+ (VPI/VCI 8/35)',
    badge: 'Copper ADSL Broadband',
    badgeStyle: 'bg-teal-50 text-teal-800 border-teal-200',
    icon: Globe,
    gradient: 'from-teal-700 via-cyan-700 to-blue-800',
    cardBorder: 'border-teal-200 hover:border-teal-500 hover:shadow-teal-500/15',
    route: '/knowledge-hub/megaline/broadband',
    ctaText: 'Open Broadband Page',
    desc: 'High-speed ADSL & ADSL2+ copper broadband transmission, physical sync drop diagnosis, SNR margin degradation, line attenuation, and Rule 3 ADSL router warranty replacement.',
    ruleCode: 'RULE_3_ADSL_ROUTER_DEFECT / RULE_1_SYNC_DOWN',
    targetGroup: 'DSLAM-MTCE / Teleshop Walk-in',
    keyFeatures: [
      'ADSL Sync LED Blinking / Down (DSLAM Port Reset)',
      'SNR Margin < 6dB & Frequent Connection Drops',
      'Line Attenuation > 45dB (Copper Distance Check)',
      'Rule 3: Defective ADSL Router RTOM Walk-in Replacement'
    ],
    ttTemplate: `SERVICE: Megaline ADSL Broadband
FAULT: ADSL Physical Sync Down / Blinking DSL Indicator
DSLAM DIAGNOSTIC: VPI/VCI 8/35 configured. Line SNR: 4.2dB (Degraded). Attenuation: 48dB.
RULE: Rule 1 (DSLAM Port Lockup & Copper Loop Maintenance)
ACTION: Reset DSLAM port in central office. If unresolved, dispatch TT to AREA-MTCE for copper pair swap.`
  },
  {
    id: 'peo_tv',
    title: 'PEO TV',
    subtitle: 'IPTV on ADSL (VPI/VCI 8/36)',
    badge: 'IPTV over Copper',
    badgeStyle: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    icon: Tv,
    gradient: 'from-indigo-800 via-purple-700 to-cyan-800',
    cardBorder: 'border-indigo-200 hover:border-indigo-500 hover:shadow-indigo-500/15',
    route: '/knowledge-hub/megaline/peo-tv',
    ctaText: 'Open PEO TV Page',
    desc: 'PEO TV digital IPTV streaming delivered over copper ADSL2+ wireline, ADSL microfilter & splitter isolation tests, video pixelation during phone calls, and STB triage.',
    ruleCode: 'RULE_PEO_ADSL_SPLITTER_FAULT',
    targetGroup: 'Teleshop / AREA-MTCE',
    keyFeatures: [
      'ADSL Microfilter / Splitter Defect (Noise during TV)',
      'Video Freezing / Pixelation on Copper Bandwidth',
      'PEO TV Dedicated PVC (VPI/VCI 8/36 Binding)',
      'STB Hardware & Remote Controller 6-Month Warranty'
    ],
    ttTemplate: `SERVICE: Megaline PEO TV on Copper ADSL
FAULT: PEO TV Screen Pixelation / Sync Drops on Phone Call
ISOLATION TEST: Customer tested without microfilter - sync dropped.
DIAGNOSIS: Faulty ADSL Microfilter / Splitter causing high frequency bleed.
ACTION: Guide customer to collect replacement Splitter from nearest Teleshop or dispatch AREA-MTCE.`
  }
];

export default function MegalineServicesHubPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTtModal, setActiveTtModal] = useState<any | null>(null);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  const filteredCards = MEGALINE_CARDS.filter((card) => {
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
    <div className="flex-1 flex flex-col h-full bg-[#f8fafc] overflow-y-auto select-none">
      
      {/* 1. TOP HEADER BAR */}
      <header className="bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-900 text-white px-5 py-2.5 flex items-center justify-between text-xs shadow-md shrink-0 border-b border-teal-500/20">
        <div className="flex items-center gap-4">
          <Link href="/knowledge-hub" className="flex items-center gap-2 group">
            <div className="flex flex-col leading-none">
              <span className="font-black text-lg text-white tracking-tighter drop-shadow-xs">SLT MOBITEL</span>
              <span className="text-[9px] text-teal-200 uppercase tracking-widest font-bold">Megaline Services Hub</span>
            </div>
          </Link>
          <span className="h-5 w-px bg-white/20 hidden sm:block"></span>
          <span className="text-xs text-teal-100 font-medium hidden md:inline">
            PSTN Copper Wireline, ADSL2+ Broadband &amp; Copper PEO TV
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
          <div className="w-7 h-7 rounded-full bg-teal-700 border border-teal-400 flex items-center justify-center font-bold text-[11px] text-white">
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
          <span className="font-bold text-teal-800">SLT Megaline (Copper Wireline)</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] text-slate-500 font-medium">Domain Standards:</span>
          <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-mono font-bold">
            VPI/VCI 8/35 (ADSL)
          </span>
          <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-800 border border-indigo-200 text-[10px] font-mono font-bold">
            VPI/VCI 8/36 (PEO TV)
          </span>
        </div>
      </div>

      {/* 3. HERO BANNER */}
      <div className="p-6 max-w-7xl mx-auto w-full space-y-6">
        <div className="p-6 bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-950 rounded-2xl text-white shadow-xl border border-teal-600/30 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1.5">
                  <Phone className="w-3 h-3" />
                  Copper Infrastructure (PSTN &amp; ADSL)
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-slate-300">
                  SLT Wireline Operations
                </span>
              </div>

              {/* Universal Search inside Megaline Hub */}
              <div className="relative w-full sm:w-72">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-teal-300" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Voice, ADSL, PEO TV, Rule 11..."
                  className="w-full bg-white/15 text-white placeholder-teal-200/60 text-xs pl-8 pr-7 py-1.5 rounded-lg border border-white/20 focus:outline-hidden focus:ring-2 focus:ring-teal-400 backdrop-blur-md"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-teal-200 hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

            <div>
              <h1 className="text-xl md:text-2xl font-black text-white">
                SLT Megaline (Copper Wireline) Services Portal
              </h1>
              <p className="text-xs md:text-sm text-teal-100 mt-1 max-w-3xl leading-relaxed">
                Comprehensive operational triage, standard operating procedures, and copyable trouble ticket templates for PSTN Copper Voice, ADSL/ADSL2+ Broadband, and Copper PEO TV services.
              </p>
            </div>

            {/* Quick Copper-to-Fibre Upgrade Callout Banner */}
            <div className="p-3 bg-white/10 rounded-xl border border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-300 shrink-0" />
                <span className="text-slate-200">
                  Looking to migrate a Megaline copper customer to high-speed fiber? Customers can upgrade directly to <strong>FTTH Trio (Voice + 1Gbps BB + PEO TV)</strong> via Contact Centre 1212.
                </span>
              </div>
              <Link
                href="/knowledge-hub/trio"
                className="px-3 py-1 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs flex items-center gap-1 transition-all shrink-0"
              >
                <span>View Trio Packages</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4. 3 CORE SERVICE CARDS (VOICE, BROADBAND, PEO TV) */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-teal-700" />
                Select Megaline Service Domain
              </h2>
              <p className="text-xs text-slate-500">
                Explore in-depth complaint handling, SOP flowcharts, and technical diagnostics for each copper service.
              </p>
            </div>
            <span className="text-xs font-semibold text-slate-400">
              Showing {filteredCards.length} of 3 Service Domains
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={card.id}
                  whileHover={{ y: -3 }}
                  onClick={() => router.push(card.route)}
                  className={`bg-white rounded-2xl border p-5 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group ${card.cardBorder}`}
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.gradient} text-white flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform`}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span
                        className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border truncate ${card.badgeStyle}`}
                      >
                        {card.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="flex items-center justify-between mb-0.5">
                      <h3 className="font-black text-lg text-slate-900 group-hover:text-teal-700 transition-colors flex items-center gap-1">
                        <span>{card.title}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-teal-700" />
                      </h3>
                    </div>

                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2.5 truncate">
                      {card.subtitle}
                    </p>

                    {/* Key SOP Topics List */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                      <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                        Core SOP &amp; Triage Topics:
                      </span>
                      {card.keyFeatures.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0"></span>
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
                      className="text-[10px] font-bold text-teal-700 hover:underline flex items-center gap-1"
                    >
                      <FileText className="w-3 h-3" />
                      <span>TT Draft</span>
                    </button>

                    <div
                      className="px-3.5 py-1.5 rounded-lg bg-teal-700 group-hover:bg-teal-800 text-white font-bold text-xs flex items-center gap-1 shadow-xs transition-colors"
                    >
                      <span>Open</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 5. CONTACT CENTRE OPERATIONAL RULES & SOPS (MEGALINE SPECIFIC) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                Official Megaline Operational Dispatch Rules
              </h3>
              <p className="text-xs text-slate-500">
                Contact Centre 1212 &amp; Teleshop complaint routing guidelines for PSTN Copper &amp; ADSL wirelines.
              </p>
            </div>
            <span className="px-2.5 py-1 bg-teal-50 text-teal-800 border border-teal-200 rounded-md text-[10px] font-mono font-bold">
              ISO 9001:2015 Approved
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-bold">
                  RULE_11_MDF_VOICE_FAULT
                </span>
                <span className="text-[10px] font-bold text-slate-500">MDF / Switch Team</span>
              </div>
              <h4 className="font-bold text-xs text-slate-900">
                PSTN Voice No Dial Tone / Line Loop Test
              </h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                When a subscriber reports no dial tone on copper PSTN, dispatch TT directly to the local exchange MDF for loop resistance and voltage verification (-48V DC). Do not dispatch field technicians before MDF clearance.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-teal-100 text-teal-900 font-bold">
                  RULE_3_ADSL_ROUTER_WALKIN
                </span>
                <span className="text-[10px] font-bold text-slate-500">Teleshop / RTOM</span>
              </div>
              <h4 className="font-bold text-xs text-slate-900">
                ADSL Router Hardware Defect (Walk-in Replacement)
              </h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                If the ADSL router power is completely dead, ports are damaged by lightning, or Wi-Fi radio has failed, advise customer to bring router, power adapter, and warranty slip to nearest Teleshop for immediate 1-to-1 swap.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-bold">
                  RULE_1_DSLAM_SYNC_LOCKUP
                </span>
                <span className="text-[10px] font-bold text-slate-500">DSLAM / MSAN NOC</span>
              </div>
              <h4 className="font-bold text-xs text-slate-900">
                ADSL Sync Down (DSL Blinking Continuously)
              </h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Perform central port reset on DSLAM / MSAN port via GB Portal / ACS. If physical sync does not stabilize, verify SNR margin and dispatch to Area Maintenance for copper cable pair substitution.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-purple-100 text-purple-900 font-bold">
                  RULE_MICROFILTER_ISOLATION
                </span>
                <span className="text-[10px] font-bold text-slate-500">Frontline 1212 Triage</span>
              </div>
              <h4 className="font-bold text-xs text-slate-900">
                Line Crackling / Disconnection When Answering Phone
              </h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Instruct subscriber to perform Microfilter / Splitter isolation: connect the telephone instrument directly without splitter. If noise clears, the splitter is defective and can be replaced at any Teleshop free of charge.
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
                    <span className="text-[10px] font-black uppercase tracking-wider text-teal-700">
                      Standard Trouble Ticket Draft
                    </span>
                    <h3 className="text-base font-black text-slate-900">
                      {activeTtModal.title} Service Fault
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
                  <p className="font-mono font-bold text-teal-800">{activeTtModal.targetGroup}</p>
                </div>

                <div className="p-4 bg-slate-900 border border-slate-700 rounded-xl space-y-2 text-white">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                    <span className="font-bold text-teal-300 font-mono text-[11px]">C-Log / CRM Dispatch Note</span>
                    <button
                      onClick={() => copyToClipboard(activeTtModal.ttTemplate, 'tt-modal')}
                      className="px-2.5 py-1 bg-teal-600 hover:bg-teal-500 text-white text-[10px] rounded-md font-sans font-bold flex items-center gap-1 transition-all"
                    >
                      {copiedLink === 'tt-modal' ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedLink === 'tt-modal' ? 'Copied TT!' : 'Copy TT'}</span>
                    </button>
                  </div>
                  <pre className="whitespace-pre-wrap leading-relaxed text-teal-200 font-mono text-[11px]">
                    {activeTtModal.ttTemplate}
                  </pre>
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center">
                <button
                  onClick={() => {
                    router.push(activeTtModal.route);
                    setActiveTtModal(null);
                  }}
                  className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-black shadow-xs flex items-center gap-1.5"
                >
                  <span>Open {activeTtModal.title} Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
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

