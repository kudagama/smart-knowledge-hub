"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Radio,
  Search,
  Grid,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  X,
  Phone,
  Globe,
  Zap,
  Server,
  ShieldCheck,
  Layers,
  CreditCard,
  Clock,
  Gauge,
  Tag,
  Wrench,
  Repeat,
  Users
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

export default function LteServicesHubPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

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

      {/* 6. MAIN CONTENT AREA (Full Width 9 Cards Grid) */}
      <div className="flex-1 p-6 md:p-8">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <Layers className="w-6 h-6 text-[#005696]" />
                <span>4G LTE Service Topics</span>
              </h2>
              <p className="text-xs md:text-sm text-slate-500 font-medium mt-1">
                Select any topic card below to open its dedicated tariffs, package options, and technical procedures.
              </p>
            </div>

            <span className="text-xs font-bold text-[#005696] bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-200 w-fit">
              {filteredCards.length} Modules Available
            </span>
          </div>

          {/* Clean Topic Cards Grid (Full Topic Always Visible across full width) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCards.map((card) => {
              const CardIcon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => router.push(card.route)}
                  className={`bg-white rounded-2xl p-6 border-2 transition-all cursor-pointer flex items-center justify-between gap-4 shadow-xs hover:shadow-lg group ${card.cardBorder}`}
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0`}
                    >
                      <CardIcon className="w-7 h-7" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border mb-1.5 inline-block ${card.badgeStyle}`}>
                        {card.badge}
                      </span>
                      <h3 className="font-black text-base md:text-lg text-slate-900 group-hover:text-[#005696] transition-colors leading-snug break-words whitespace-normal">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-[#005696] text-slate-500 group-hover:text-white flex items-center justify-center transition-all shrink-0 shadow-2xs">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Reference Footer Strip: Speeds, Taxes, and Frontline Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 border-t border-slate-200">
            {/* 1. Speed Guidelines */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2.5">
              <div className="flex items-center gap-2 text-[#005696] font-black text-xs uppercase tracking-wider">
                <Gauge className="w-4 h-4" />
                <span>4G LTE Speed Guidelines</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">Good Coverage Area:</span>
                  <p className="font-mono font-bold text-slate-900 text-sm">10 - 20 Mbps</p>
                  <p className="text-[10px] text-slate-500">Peak: up to 40 Mbps | Upload: 3 - 5 Mbps</p>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">Fringe / Moderate Area:</span>
                  <p className="font-mono font-bold text-slate-900 text-sm">4 - 8 Mbps</p>
                  <p className="text-[10px] text-slate-500">Upload: 1 - 2 Mbps</p>
                </div>
              </div>
            </div>

            {/* 2. Tax Structure & Billing Cycles */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs text-xs space-y-2.5">
              <h4 className="font-black text-[#005696] text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Tag className="w-4 h-4" />
                <span>Tax Structure &amp; Billing Cycles</span>
              </h4>
              <p className="text-slate-600 leading-relaxed">
                <strong>Applicable Taxes:</strong> Telecommunication Levy (TL), VAT (18%), CESS, SSCL.
              </p>
              <div className="pt-2 border-t border-slate-100 space-y-1.5">
                <div className="flex items-center justify-between bg-slate-50 p-2 rounded-lg">
                  <span className="text-slate-600 font-medium">Cycle 1:</span>
                  <span className="font-bold text-slate-900">1st to end of month</span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 p-2 rounded-lg">
                  <span className="text-slate-600 font-medium">Cycle 2:</span>
                  <span className="font-bold text-slate-900">16th to 15th next month</span>
                </div>
              </div>
            </div>

            {/* 3. Frontline Quick Reference */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs text-xs space-y-2.5">
              <h4 className="font-black text-[#005696] text-xs uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Frontline Quick Reference</span>
              </h4>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] p-1.5 bg-slate-50 rounded-md">
                  <span className="text-slate-600">CAT 4 Double Play:</span>
                  <span className="font-bold text-[#005696]">Rs. 4,695 (2024) / Rs. 7,990 (2023)</span>
                </div>
                <div className="flex items-center justify-between text-[11px] p-1.5 bg-slate-50 rounded-md">
                  <span className="text-slate-600">CAT 6 Advanced (With Tax):</span>
                  <span className="font-bold text-amber-700">Rs. 13,990 (New) / Rs. 6,990 (Refurb) / Rs. 19,900 (Full)</span>
                </div>
                <div className="flex items-center justify-between text-[11px] p-1.5 bg-slate-50 rounded-md">
                  <span className="text-slate-600">Unlimited VoLTE:</span>
                  <span className="font-bold text-teal-700">Rs. 1,060.89 With Tax (Rs. 747 Base)</span>
                </div>
                <div className="flex items-center justify-between text-[11px] p-1.5 bg-slate-50 rounded-md">
                  <span className="text-slate-600">Lanka Bell / CDMA:</span>
                  <span className="font-bold text-emerald-700">100% Free Swap</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
