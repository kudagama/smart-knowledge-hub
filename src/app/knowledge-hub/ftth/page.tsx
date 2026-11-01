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
  Layers
} from 'lucide-react';

// 5 Core FTTH Service Domain Cards
const FTTH_CARDS = [
  {
    id: 'voice',
    title: 'Voice',
    subtitle: 'SIP / Dial Tone / RJ11',
    badge: 'Telephone Line',
    badgeStyle: 'bg-teal-50 text-teal-800 border-teal-200',
    icon: Phone,
    gradient: 'from-teal-600 via-emerald-600 to-teal-700',
    cardBorder: 'border-teal-200 hover:border-teal-500 hover:shadow-teal-500/15',
    route: '/knowledge-hub/ftth/voice',
    ctaText: 'Open Voice Services',
    desc: 'FTTH Telephone voice line, SIP registration on ONT TEL port, Rule 11 exchange MDF routing, line noise, and physical drop wire repairs.',
    ruleCode: 'RULE_FIBER_VOICE_LINE_FAULT',
    targetGroup: 'MDF / AREA-MTCE',
    keyFeatures: [
      'No Dial Tone (MDF Rule 11 Dispatch)',
      'Drop Wire Cut (Direct to AREA-MTCE)',
      'PSTN to FTTH Number Migration',
      'Telephone Disturbance & Call Waiting'
    ],
    ttTemplate: 'SERVICE: FTTH Voice\nFAULT: No Dial Tone / Voice Line Inoperable\nONT PON STATUS: Steady Green (Normal Transmission)\nDIAGNOSIS: Optical signal healthy. Voice line inactive on SIP port.\nRULE: Rule 11 (Voice Line Fault on Fiber)\nACTION: Dispatch TT to MDF for SIP port reactivation.'
  },
  {
    id: 'broadband',
    title: 'Broadband',
    subtitle: '1Gbps / GPON & Wi-Fi',
    badge: 'Optical High-Speed',
    badgeStyle: 'bg-cyan-50 text-cyan-800 border-cyan-200',
    icon: Globe,
    gradient: 'from-cyan-600 via-blue-600 to-cyan-700',
    cardBorder: 'border-cyan-200 hover:border-cyan-500 hover:shadow-cyan-500/15',
    route: '/knowledge-hub/ftth/broadband',
    ctaText: 'Open Broadband Services',
    desc: 'Ultra high-speed GPON optical fiber transmission, Wi-Fi 2.4/5GHz dual-band, LOS Red fiber cut triage, and browsing speed throttling.',
    ruleCode: 'RULE_LOS_RED / RULE_UNLIMITED_SLOWNESS',
    targetGroup: 'AREA-CPE-MTCE / CEN-CSC-TECH',
    keyFeatures: [
      'Wi-Fi Not Working (PON Steady ON)',
      'Browsing Slow & FUP Bandwidth Throttling',
      'LOS Red Indicator (Fiber Cable Cut)',
      'ONT Router Power Dead / Power Cycle'
    ],
    ttTemplate: 'SERVICE: FTTH Broadband\nFAULT: LOS Indicator Red / Optical Signal Lost\nPRE-CHECKS: Verified subscriber account on LDAP. GB Portal Rx power unavailable.\nACTION: Direct TT dispatched to AREA-CPE-MTCE for outdoor fiber cut restoration.'
  },
  {
    id: 'peo_tv',
    title: 'PEO TV',
    subtitle: 'VLAN 30 / Port 4 IPTV',
    badge: 'Digital IPTV Platform',
    badgeStyle: 'bg-purple-50 text-purple-800 border-purple-200',
    icon: Tv,
    gradient: 'from-purple-600 via-indigo-600 to-purple-700',
    cardBorder: 'border-purple-200 hover:border-purple-500 hover:shadow-purple-500/15',
    route: '/knowledge-hub/ftth/peo-tv',
    ctaText: 'Open PEO TV Services',
    desc: 'High-Definition digital IPTV streaming over Fiber, ONT LAN Port 4 VLAN 30 binding, STB hardware defect triage, and remote controller warranty.',
    ruleCode: 'RULE_STB_ONT_ROUTER_FAULTY',
    targetGroup: 'AREA-MTCE / Teleshop',
    keyFeatures: [
      'ONT LAN 4 VLAN 30 Port Binding',
      'STB Hardware Defect / Continual Red LED',
      'Remote Controller 6-Month Warranty',
      'CAS Error 101/102 & IGMP Snooping'
    ],
    ttTemplate: 'SERVICE: PEO TV on FTTH\nFAULT: STB Hardware Defect / Continual Red LED Boot Loop\nONT CONFIG: LAN 4 bound to VLAN 30. IGMP Snooping enabled.\nACTION: Dispatch TT to AREA-MTCE for premises visit and STB replacement.'
  },
  {
    id: 'faq',
    title: 'FAQ',
    subtitle: 'Official Complaint Matrix & SOPs',
    badge: 'Interactive Decision Trees',
    badgeStyle: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    icon: HelpCircle,
    gradient: 'from-emerald-600 via-teal-600 to-emerald-700',
    cardBorder: 'border-emerald-200 hover:border-emerald-500 hover:shadow-emerald-500/15',
    route: '/knowledge-hub/faq/ftth',
    ctaText: 'Open FTTH FAQs',
    desc: 'Complete FTTH complaint matrix, interactive decision trees, official SharePoint PDF flowcharts, and call center standard operating procedures.',
    ruleCode: 'INTERACTIVE_DECISION_TREES',
    targetGroup: 'ALL WORK GROUPS',
    keyFeatures: [
      'General Questions FTTH SOP',
      'ONT Not Working Official Flowchart',
      'PON / LOS Red Indicator Decision Matrix',
      'Wi-Fi Not Working & Speed Drop Guides'
    ],
    ttTemplate: 'KNOWLEDGE BASE: FTTH Interactive SOPs & Decision Trees\nURL: /knowledge-hub/faq/ftth\nACTION: Follow step-by-step visual resolution flowcharts.'
  },
  {
    id: 'trio',
    title: 'Trio Bundles',
    subtitle: 'Triple Play 3-in-1',
    badge: 'Voice + BB + TV',
    badgeStyle: 'bg-amber-50 text-amber-800 border-amber-200',
    icon: Layers,
    gradient: 'from-amber-600 via-orange-600 to-rose-600',
    cardBorder: 'border-amber-200 hover:border-amber-500 hover:shadow-amber-500/15',
    route: '/knowledge-hub/trio',
    ctaText: 'Open Trio Bundled Packages',
    desc: 'Unified 3-in-1 Triple Play package bundling Voice Landline + GPON Broadband + PEO TV with itemized taxes, free line rental, and bundled savings.',
    ruleCode: 'RULE_TRIO_ACTIVATION_MIGRATION',
    targetGroup: 'CONTACT-CENTRE / CEN-CSC-UI',
    keyFeatures: [
      'Trio Shine (100GB + 95 Ch + Free OTT)',
      'Trio Vibe & Vibe+ (Entertainment)',
      'Itemized Tax Matrix (CESS, TL, SSCL, VAT)',
      'Contact Centre 1212 SOP & Churn Rules'
    ],
    ttTemplate: 'SERVICE: SLT FTTH Trio Bundle\nREQUEST: Activate Trio Triple Play Package\nACTION: Provision selected package in MINT CRM and configure VLAN 30 on ONT Port 4.'
  },
  {
    id: 'vas',
    title: 'VAS',
    subtitle: 'Data Add-ons & Static IP',
    badge: 'Value Added Services',
    badgeStyle: 'bg-amber-50 text-amber-800 border-amber-200',
    icon: Sparkles,
    gradient: 'from-amber-600 via-orange-600 to-amber-700',
    cardBorder: 'border-amber-200 hover:border-amber-500 hover:shadow-amber-500/15',
    route: '/knowledge-hub/ftth/vas',
    ctaText: 'Open VAS Services',
    desc: 'Extra GB booster top-ups, Data Add-on PCRF rating errors, Private to Public Dynamic IP conversion, and Port Forwarding policies.',
    ruleCode: 'RULE_DATA_CONSUMPTION_ADDON_MISMATCH',
    targetGroup: 'CEN-CSC-UI / INT-NW-SYS-ADMIN',
    keyFeatures: [
      'Extra GB Top-up via MySLT & LankaQR',
      'Data Add-on PCRF Quota Bucket Sync',
      'Private IP to Public Dynamic / Static IP',
      'Port Forwarding (Customer Configured)'
    ],
    ttTemplate: 'SERVICE: FTTH VAS\nFAULT: Extra GB Data Add-on Purchased but not deducting from PCRF bucket\nACTION: Escalate Trouble Ticket to CEN-CSC-UI / INT-NW-SYS-ADMIN for quota bucket sync.'
  }
];

export default function FTTHPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTtModal, setActiveTtModal] = useState<any | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredCards = FTTH_CARDS.filter((card) => {
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
      
      {/* 1. TOP SHAREPOINT BAR */}
      <div className="bg-[#005a9c] text-white px-4 py-2 flex items-center justify-between text-xs shadow-xs shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/knowledge-hub" className="flex items-center gap-1.5 cursor-pointer hover:opacity-80">
            <Grid className="w-4 h-4 text-white" />
            <span className="font-bold tracking-tight text-sm">SharePoint</span>
          </Link>

          <div className="relative ml-4 w-72 md:w-96">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Voice, Broadband, PEO TV, FAQ, VAS..."
              className="w-full bg-white text-slate-800 text-xs pl-8 pr-6 py-1 rounded-sm focus:outline-hidden focus:ring-1 focus:ring-cyan-300"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span className="hidden sm:inline text-cyan-100 font-medium">SLT-Mobitel Intranet</span>
          <div className="w-7 h-7 rounded-full bg-cyan-700 border border-cyan-400 flex items-center justify-center font-bold text-[11px] text-white">
            GJ
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
          <span className="font-semibold text-slate-800">Knowledge Hub</span>
          <span className="text-slate-300">/</span>
          <span className="font-bold text-[#005696]">SLT Fibre (FTTH)</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-slate-500">
          <span>Private group</span>
          <span className="flex items-center gap-1"><Users className="w-3 h-3" /> 1 member</span>
          <span className="cursor-pointer font-bold">•••</span>
        </div>
      </div>

      {/* 4. HERO BANNER WITH GLOWING FIBER OPTIC STRANDS */}
      <div className="relative bg-gradient-to-r from-[#03152e] via-[#052b57] to-[#011429] text-white px-8 py-9 overflow-hidden border-b border-blue-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10 space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-cyan-400/20 text-cyan-300 border border-cyan-300/30">
              FTTH Optical Fiber
            </span>
            <span className="text-xs text-blue-200">1Gbps Ultra High-Speed Triple Play Platform</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white drop-shadow-md">
            SLT Fibre (FTTH) - Core Service Domains
          </h1>
          <p className="text-xs text-cyan-100/90 max-w-2xl font-medium leading-relaxed">
            Select a service domain card below to navigate directly to its dedicated operational procedures, decision trees, and trouble ticket triage guidelines.
          </p>

          <div className="flex items-center gap-3 pt-1">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-700 border border-cyan-400 flex items-center justify-center font-bold text-xs text-white shadow-sm">
              CR
            </div>
            <div className="text-xs">
              <p className="font-bold text-white">Chathurani Rathnayake</p>
              <p className="text-[11px] text-cyan-200/90">Senior Assistant Manager (Customer Relations) - A7</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. NAVIGATION PILL BUTTONS */}
      <div className="bg-white px-6 py-3 border-b border-slate-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <Link
              href="/knowledge-hub"
              className="px-4 py-1.5 rounded-md border border-[#005696]/40 hover:border-[#005696] bg-white hover:bg-slate-50 text-[#005696] font-bold text-xs flex items-center gap-1.5 transition-all shadow-2xs"
            >
              <Home className="w-3.5 h-3.5 text-[#005696]" />
              <span>Hub Home</span>
            </Link>

            <Link
              href="/knowledge-hub/faq/ftth"
              className="px-4 py-1.5 rounded-md border border-[#005696]/40 hover:border-[#005696] bg-white hover:bg-slate-50 text-[#005696] font-bold text-xs flex items-center gap-1.5 transition-all shadow-2xs"
            >
              <FileText className="w-3.5 h-3.5 text-[#005696]" />
              <span>FTTH FAQs &amp; Complaint Matrix</span>
            </Link>
          </div>

          <span className="text-xs font-semibold text-slate-500">
            Showing <b className="text-[#005696]">{filteredCards.length}</b> Core Domains
          </span>
        </div>
      </div>

      {/* 6. MAIN CONTENT: 5 CORE SERVICE CARDS */}
      <div className="flex-1 p-6 md:p-8 bg-slate-50 space-y-6">
        <div className="max-w-6xl mx-auto space-y-6">

          {/* Section Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight">
                FTTH Service Domains (5 Core Cards)
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Click any card to redirect to its dedicated operational and triage page
              </p>
            </div>

            <Link
              href="/knowledge-hub/faq/ftth"
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>View All FTTH FAQs ➔</span>
            </Link>
          </div>

          {/* 5 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
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
                      <h3 className="font-black text-lg text-slate-900 group-hover:text-[#005696] transition-colors flex items-center gap-1">
                        <span>{card.title}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#005696]" />
                      </h3>
                    </div>

                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2.5 truncate">
                      {card.subtitle}
                    </p>



                    {/* Key Features List */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                      <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                        Key SOP Topics:
                      </span>
                      {card.keyFeatures.map((feat, fIdx) => (
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
                      <span>TT Draft</span>
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

          {/* Quick Domain Summary Matrix */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
            <div className="border-b border-slate-100 pb-2 flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#005696]" />
                <span>FTTH Operational Triage &amp; Escalation Summary</span>
              </h3>
              <span className="text-xs text-slate-400 font-semibold">ISO 9001:2015 Compliant</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-200/80 space-y-1">
                <span className="text-[10px] font-black uppercase text-teal-800">Voice Line (Rule 11)</span>
                <p className="font-bold text-slate-800">PON Solid ON $\rightarrow$ MDF Frame</p>
                <p className="text-[11px] text-slate-600">If optical signal is normal, voice issues route directly to exchange MDF.</p>
              </div>

              <div className="p-3 bg-cyan-50/60 rounded-xl border border-cyan-200/80 space-y-1">
                <span className="text-[10px] font-black uppercase text-cyan-800">Broadband (LOS Red)</span>
                <p className="font-bold text-slate-800">Rx &lt; -27 dBm $\rightarrow$ AREA-MTCE</p>
                <p className="text-[11px] text-slate-600">Direct Trouble Ticket dispatched for outdoor optical cable cuts.</p>
              </div>

              <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-200/80 space-y-1">
                <span className="text-[10px] font-black uppercase text-purple-800">PEO TV on Fiber</span>
                <p className="font-bold text-slate-800">LAN 4 $\rightarrow$ VLAN 30 Tagged</p>
                <p className="text-[11px] text-slate-600">ONT Port 4 dedicated for multicast IPTV streaming and STB pairing.</p>
              </div>

              <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/80 space-y-1">
                <span className="text-[10px] font-black uppercase text-amber-800">VAS &amp; Top-Ups</span>
                <p className="font-bold text-slate-800">PCRF Rating $\rightarrow$ CEN-CSC-UI</p>
                <p className="text-[11px] text-slate-600">Extra GB booster purchases and Public Dynamic IP allocations.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Trouble Ticket Preview Modal */}
      <AnimatePresence>
        {activeTtModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4"
            >
              <div className="flex items-start justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${activeTtModal.gradient} text-white flex items-center justify-center shadow-xs`}>
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#005696]">
                      {activeTtModal.badge}
                    </span>
                    <h3 className="text-base font-black text-slate-900">
                      Standard Trouble Ticket: FTTH {activeTtModal.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTtModal(null)}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-bold text-indigo-700 uppercase">Triage Rule Code</span>
                    <p className="font-mono font-bold text-xs text-indigo-950">{activeTtModal.ruleCode}</p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-indigo-600 text-white font-mono text-[9px] font-bold">
                    Target: {activeTtModal.targetGroup}
                  </span>
                </div>

                <div className="p-3.5 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-white font-mono text-[11px]">
                  <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-1.5">
                    <span className="font-bold text-cyan-300">C-Log Ticket Draft</span>
                    <button
                      onClick={() => copyToClipboard(activeTtModal.ttTemplate, 'modal-tt-copy')}
                      className="px-2.5 py-1 bg-[#005696] hover:bg-[#0070ba] text-white text-[10px] rounded-md font-sans font-bold flex items-center gap-1 transition-all"
                    >
                      {copiedId === 'modal-tt-copy' ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedId === 'modal-tt-copy' ? 'Copied TT!' : 'Copy TT'}</span>
                    </button>
                  </div>
                  <pre className="whitespace-pre-wrap leading-relaxed text-lime-300 font-mono text-[10px]">
                    {activeTtModal.ttTemplate}
                  </pre>
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center">
                <button
                  onClick={() => {
                    const r = activeTtModal.route;
                    setActiveTtModal(null);
                    router.push(r);
                  }}
                  className="px-4 py-2 bg-[#005696] hover:bg-[#004780] text-white rounded-xl text-xs font-black shadow-xs flex items-center gap-1.5"
                >
                  <span>Open Dedicated Page</span>
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
