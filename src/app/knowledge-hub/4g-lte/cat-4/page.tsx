"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Radio,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Wrench,
  ShieldCheck,
  Zap,
  Home,
  FileText,
  Users,
  Grid,
  ChevronDown,
  Gauge,
  Tag,
  Search,
  X,
  ExternalLink,
  Info,
  Layers,
  Sparkles,
  SlidersHorizontal,
  Calculator,
  RotateCcw,
  Calendar,
  Building2,
  Phone,
  Signal
} from 'lucide-react';

const CAT4_CHARGES = [
  {
    id: 'dp_concess',
    package: 'Double Play (BB + Voice) Concessionary - New',
    category: 'double_play',
    withoutTax: '4,990',
    priorWithoutTax: '4,048.96',
    withTax: '4,990',
    priorWithTax: '7,900',
    badge: 'Popular Concession',
    badgeStyle: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    conditions: 'Any BB Package (Rs. 1,990 / 2,390 package category and above)',
    ownership: '12 Months Warranty (Transferred to customer after warranty)',
    commitment: '1 Year commitment period. Early termination fee: Rs. 5,000',
    highlight: true
  },
  {
    id: 'sp_bb_concess',
    package: 'Single Play (BB only) Concessionary - New',
    category: 'single_play',
    withoutTax: '4,990',
    priorWithoutTax: '4,048.96',
    withTax: '4,990',
    priorWithTax: '7,241',
    badge: 'Data Only Concession',
    badgeStyle: 'bg-blue-100 text-blue-900 border-blue-300',
    conditions: 'Applicable for BB packages Rs. 1,990 / 2,390 and above',
    ownership: '12 Months Warranty (Transferred to customer after warranty)',
    commitment: '1 Year commitment period. Early termination fee: Rs. 5,000',
    highlight: true
  },
  {
    id: 'sp_voice_full',
    package: 'Single Play (Voice only) - Full Pay / New',
    category: 'voice_only',
    withoutTax: '5,490',
    priorWithoutTax: '5,432.00',
    withTax: '6,490',
    priorWithTax: '7,900',
    badge: 'Voice Postpaid',
    badgeStyle: 'bg-teal-100 text-teal-900 border-teal-300',
    conditions: 'Any Voice Package (Postpaid Voice Plans)',
    ownership: '12 Months Warranty',
    commitment: 'Standard voice contract'
  },
  {
    id: 'sp_voice_offnet',
    package: 'Single Play (Voice only) - Off-Net No F2F',
    category: 'voice_only',
    withoutTax: '4,990',
    priorWithoutTax: '4,048.96',
    withTax: '6,490',
    priorWithTax: '7,900',
    badge: 'Voice Pal',
    badgeStyle: 'bg-cyan-100 text-cyan-900 border-cyan-300',
    conditions: 'Voice package (Voice Pal)',
    ownership: '12 Months Warranty',
    commitment: 'Standard voice contract'
  },
  {
    id: 'cdma_mig',
    package: 'CDMA to LTE Migration',
    category: 'migration',
    withoutTax: 'Free migration according to current scheme',
    priorWithoutTax: null,
    withTax: 'Free',
    priorWithTax: null,
    badge: '100% Free Migration',
    badgeStyle: 'bg-emerald-500 text-white border-emerald-600',
    conditions: 'Existing CDMA CityLink voice customers migrating. Same phone number preserved.',
    ownership: 'Free Desk Phone / CPE provided',
    commitment: 'No connection fee charged',
    isFree: true
  },
  {
    id: 'dp_full',
    package: 'Double Play (BB + Voice) Full Payment',
    category: 'double_play',
    withoutTax: '9,900',
    priorWithoutTax: '8,097.92',
    withTax: '9,900',
    priorWithTax: '11,900',
    badge: 'No Commitment',
    badgeStyle: 'bg-slate-100 text-slate-800 border-slate-300',
    conditions: 'Any BB package (Unlimited / Any BB package category)',
    ownership: '12 Months Warranty (Ownership transferred immediately)',
    commitment: 'No commitment period, no early termination fee'
  },
  {
    id: 'refurb_sp',
    package: 'Recovered CPE Single Play (Concessionary - Refurbished)',
    category: 'refurbished',
    withoutTax: '2,450 / 3,000',
    priorWithoutTax: 'Refurbished unit scheme',
    withTax: '3,900',
    priorWithTax: '4,750',
    badge: 'Refurbished Single Play',
    badgeStyle: 'bg-amber-100 text-amber-900 border-amber-300',
    conditions: 'Selected packages. Subject to tested unit stock availability.',
    ownership: '6 Months Warranty (Ownership transferred after 6 mos)',
    commitment: '1 Year commitment period. Early termination fee: Rs. 5,000'
  },
  {
    id: 'refurb_dp',
    package: 'Recovered CPE Double Play (Concessionary - Refurbished)',
    category: 'refurbished',
    withoutTax: 'Concessionary offer for refurb units',
    priorWithoutTax: null,
    withTax: '3,900',
    priorWithTax: '4,750',
    badge: 'Refurbished Double Play',
    badgeStyle: 'bg-amber-100 text-amber-900 border-amber-300',
    conditions: 'BB packages above Rs. 1,990 / 2,390 category',
    ownership: '6 Months Warranty (Ownership transferred after 6 mos)',
    commitment: '1 Year commitment period. Early termination fee: Rs. 5,000'
  },
  {
    id: 'sim_dp',
    package: 'With OUT Sub / Router - Double Play (Broadband + Voice)',
    category: 'sim_only',
    withoutTax: '4,990',
    priorWithoutTax: '4,048.96',
    withTax: '6,490',
    priorWithTax: '7,900',
    badge: 'SIM Only DP',
    badgeStyle: 'bg-purple-100 text-purple-900 border-purple-300',
    conditions: 'Customer already has compatible CAT 4 CPE. SIM only provision.',
    ownership: 'Customer-owned router',
    commitment: 'Applicable package rules apply'
  },
  {
    id: 'sim_bb',
    package: 'Without Sub / Router - BB only (Data only SIM)',
    category: 'sim_only',
    withoutTax: '4,990',
    priorWithoutTax: '4,048.96',
    withTax: '6,490',
    priorWithTax: '7,900',
    badge: 'SIM Only Data',
    badgeStyle: 'bg-purple-100 text-purple-900 border-purple-300',
    conditions: 'Compatible router provided by subscriber. Data-only SIM provision.',
    ownership: 'Customer-owned router',
    commitment: 'Applicable package rules apply'
  },
  {
    id: 'prepaid_sim',
    package: '4G LTE Prepaid SIM only (Voice + Broadband)',
    category: 'sim_only',
    withoutTax: '1,400',
    priorWithoutTax: null,
    withTax: '1,400',
    priorWithTax: null,
    badge: 'Prepaid SIM Pack',
    badgeStyle: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    conditions: 'Prepaid SIM card only. Top-up passes can be loaded via MySLT.',
    ownership: 'SIM Only',
    commitment: 'No recurring monthly commitment'
  }
];

export default function LteCat4ChargesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'double_play' | 'single_play' | 'voice_only' | 'refurbished' | 'sim_only' | 'migration'>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredCharges = CAT4_CHARGES.filter((item) => {
    const matchesSearch =
      item.package.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.conditions.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.withTax.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  const ttConcessionaryDP = `SERVICE: SLT-Mobitel 4G LTE Fixed Broadband
TARIFF OPTION: New Connection (CAT 4 Basic CPE - Concessionary Double Play)
ROUTER MODEL: Huawei B310 / B311 / Tozed Basic
PRICE WITH TAX: Rs. 4,990 (Revised eff. 01/08/2024)
BASE PRICE WITHOUT TAX: Rs. 4,990 (Prior base Rs. 4,048.96)
PACKAGE CRITERIA: Applicable for BB package category Rs. 1,990 / 2,390 and above.
WARRANTY: 12 Months (Ownership transferred to subscriber after warranty).
COMMITMENT: 1-Year commitment. Early termination fee of Rs. 5,000 applies.
TARGET: BROADBAND-PROVISIONING / FRONT-OFFICE`;

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f1f5f9] overflow-y-auto select-none text-slate-800">
      
      {/* 1. TOP SHAREPOINT BAR */}
      <div className="bg-[#004e89] text-white px-5 py-2.5 flex items-center justify-between text-sm shadow-md shrink-0">
        <div className="flex items-center gap-3">
          <Link
            href="/knowledge-hub/4g-lte"
            className="flex items-center gap-2 text-white/90 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>4G LTE Home</span>
          </Link>
          <span className="text-white/40">|</span>
          <span className="font-semibold text-white/90 text-xs">Knowledge Hub</span>
          <span className="text-white/40">/</span>
          <span className="font-bold text-white text-xs">CAT 4 Connection Charges</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
            Revised eff. 01/08/2024
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 text-white/80 border border-white/20">
            Basic CPE (CAT 4)
          </span>
        </div>
      </div>

      {/* 2. HERO BANNER */}
      <div className="bg-gradient-to-r from-[#003865] via-[#005696] to-[#007acc] text-white px-6 py-7 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs font-black uppercase tracking-wider text-cyan-200">
                Official Intranet Tariff Schedule
              </span>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 rounded-lg text-xs font-black">
                Tax Revised: 01/08/2024
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white flex items-center gap-3">
              <Radio className="w-9 h-9 text-cyan-300" />
              <span>LTE New Connection Charges (CAT 4)</span>
            </h1>
            <p className="text-slate-200 text-sm md:text-base max-w-3xl leading-relaxed font-medium">
              Standard connection tariffs for Basic CPE models (Huawei B310, B311 &amp; Tozed Basic). Concessionary Double Play, Single Play, Refurbished recovered units, and 100% Free CDMA CityLink migration.
            </p>
          </div>

          {/* Quick Stat Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl p-4 shrink-0 text-center space-y-1">
            <div className="text-xs uppercase tracking-wider text-cyan-200 font-bold">Concessionary Double Play</div>
            <div className="text-3xl font-black text-white">Rs. 4,990</div>
            <div className="text-[11px] font-bold text-emerald-300">With Tax (Prior: Rs. 7,900)</div>
            <div className="text-[11px] text-white/80">Save Rs. 2,910 on new installs</div>
          </div>
        </div>
      </div>

      {/* 3. AUTHOR & METADATA BAR */}
      <div className="bg-white border-b border-slate-200 px-6 py-2.5 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 font-bold text-slate-700">
              <Building2 className="w-3.5 h-3.5 text-cyan-700" />
              <span>Chathurani Rathnayake, Senior Assistant Manager (Customer Relations) A7</span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Price Plans Eff: 24/08/2022 | Tax Revised: 01/08/2024</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/knowledge-hub/4g-lte/cat-6"
              className="text-xs font-bold text-amber-800 hover:text-amber-950 bg-amber-50 hover:bg-amber-100 px-3 py-1 rounded-lg transition-colors flex items-center gap-1 border border-amber-200"
            >
              <Zap className="w-3.5 h-3.5 text-amber-600" />
              <span>View CAT 6 Charges ➔</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 4. NAVIGATION & FILTER TOOLBAR */}
      <div className="bg-white border-b border-slate-300 px-6 py-3.5 sticky top-0 z-20 shadow-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3.5">
          
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none text-xs">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-cyan-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              All Packages ({CAT4_CHARGES.length})
            </button>
            <button
              onClick={() => setActiveCategory('double_play')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                activeCategory === 'double_play'
                  ? 'bg-cyan-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              Double Play (BB + Voice)
            </button>
            <button
              onClick={() => setActiveCategory('single_play')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                activeCategory === 'single_play'
                  ? 'bg-cyan-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              Single Play (BB Only)
            </button>
            <button
              onClick={() => setActiveCategory('voice_only')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                activeCategory === 'voice_only'
                  ? 'bg-cyan-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              Voice Pal
            </button>
            <button
              onClick={() => setActiveCategory('refurbished')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                activeCategory === 'refurbished'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200'
              }`}
            >
              Refurbished CPE
            </button>
            <button
              onClick={() => setActiveCategory('migration')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                activeCategory === 'migration'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200'
              }`}
            >
              CDMA Free Migration
            </button>
            <button
              onClick={() => setActiveCategory('sim_only')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                activeCategory === 'sim_only'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200'
              }`}
            >
              SIM Only
            </button>
          </div>

          {/* Right Controls: Search & View Toggle */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <div className="relative w-full sm:w-56">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search packages..."
                className="w-full bg-slate-50 text-slate-800 text-xs pl-8 pr-7 py-1.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-cyan-500 shadow-2xs"
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

            {/* Toggle View Mode */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl shrink-0">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  viewMode === 'cards' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <span>Visual Cards</span>
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  viewMode === 'table' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <span>Data Table</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 5. MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* ======================================================== */}
          {/* SECTION A: CARDS VIEW MODE                               */}
          {/* ======================================================== */}
          {viewMode === 'cards' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredCharges.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-3xl border-2 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group ${
                    item.highlight ? 'border-cyan-300 bg-cyan-50/20' : 'border-slate-200'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top Row: Badge & Category */}
                    <div className="flex items-start justify-between gap-2">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.badgeStyle}`}>
                        {item.badge}
                      </span>
                      {item.priorWithTax && (
                        <span className="text-xs text-slate-400 font-bold line-through">
                          Prior: Rs. {item.priorWithTax}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-black text-lg md:text-xl text-slate-900 group-hover:text-[#005696] transition-colors leading-snug">
                      {item.package}
                    </h3>

                    {/* Price Block */}
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          Charge With Tax (eff. 01/08/2024)
                        </span>
                        <div className="flex items-baseline gap-1 mt-0.5">
                          {item.isFree ? (
                            <span className="text-3xl font-black text-emerald-600">FREE</span>
                          ) : (
                            <>
                              <span className="text-sm font-bold text-slate-500">Rs.</span>
                              <span className="text-3xl font-black text-slate-900">{item.withTax}</span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          Without Tax
                        </span>
                        <span className="font-mono text-sm font-bold text-slate-600">
                          {item.withoutTax === 'Free' ? 'Free' : `Rs. ${item.withoutTax}`}
                        </span>
                      </div>
                    </div>

                    {/* Conditions & Details */}
                    <div className="space-y-1.5 text-xs text-slate-600 font-medium">
                      <p className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-700 shrink-0 mt-0.5" />
                        <span><strong>Applicable Packages:</strong> {item.conditions}</span>
                      </p>
                      {item.ownership && (
                        <p className="flex items-start gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>Warranty &amp; Ownership:</strong> {item.ownership}</span>
                        </p>
                      )}
                      {item.commitment && (
                        <p className="flex items-start gap-1.5">
                          <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span><strong>Commitment:</strong> {item.commitment}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400">Basic CAT 4 CPE</span>
                    <button
                      onClick={() => copyToClipboard(`PACKAGE: ${item.package}\nWITH TAX: Rs. ${item.withTax}\nWITHOUT TAX: Rs. ${item.withoutTax}\nCONDITIONS: ${item.conditions}`, item.id)}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-cyan-50 text-slate-700 hover:text-cyan-900 font-bold text-xs flex items-center gap-1.5 transition-colors border border-slate-200"
                    >
                      {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedId === item.id ? 'Copied Quote!' : 'Copy Quote'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION B: DATA TABLE VIEW MODE                          */}
          {/* ======================================================== */}
          {viewMode === 'table' && (
            <div className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white font-black">
                      <th className="p-4 w-1/3">Package (CAT 4 - Basic CPE Models)</th>
                      <th className="p-4">Without Tax (Rs.)<br/><span className="text-[10px] text-slate-400 font-normal">(Base Rate)</span></th>
                      <th className="p-4 text-emerald-300">With Tax (Rs.)<br/><span className="text-[10px] text-emerald-400 font-normal">(New eff. 01/08/2024)</span></th>
                      <th className="p-4">Prior Charge</th>
                      <th className="p-4">Applicable Packages / Conditions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {filteredCharges.map((item) => (
                      <tr key={item.id} className="hover:bg-cyan-50/40 transition-colors">
                        <td className="p-4 font-bold text-slate-900">
                          <div className="space-y-1">
                            <span className="block text-sm">{item.package}</span>
                            <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border inline-block ${item.badgeStyle}`}>
                              {item.badge}
                            </span>
                          </div>
                        </td>
                        <td className="p-4 font-mono font-bold text-slate-700">
                          {item.withoutTax}
                        </td>
                        <td className="p-4 font-mono font-black text-base text-emerald-700">
                          {item.withTax === 'Free' ? (
                            <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-900 rounded-full font-black text-xs">FREE</span>
                          ) : (
                            `Rs. ${item.withTax}`
                          )}
                        </td>
                        <td className="p-4 font-mono text-slate-400 line-through">
                          {item.priorWithTax ? `Rs. ${item.priorWithTax}` : '—'}
                        </td>
                        <td className="p-4 leading-relaxed text-slate-600">
                          {item.conditions}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION C: SPEEDS, TAXES, & OPERATIONAL GUIDELINES       */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Speeds */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#005696] font-black text-xs uppercase tracking-wider">
                <Gauge className="w-5 h-5 text-cyan-700" />
                <span>CAT 4 Fixed Wireless Speeds</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 bg-cyan-50/70 rounded-2xl border border-cyan-100">
                  <span className="text-[10px] font-black uppercase text-cyan-900 block">Good Coverage Area:</span>
                  <p className="font-mono font-black text-slate-900 text-base">10 - 20 Mbps Download</p>
                  <p className="text-[11px] text-slate-600">Average minimum guarantee: 3 - 5 Mbps | Peak: up to 40 Mbps</p>
                  <p className="text-[11px] text-cyan-800 font-bold mt-1">Upload: 3 - 5 Mbps</p>
                </div>

                <div className="p-3 bg-amber-50/70 rounded-2xl border border-amber-100">
                  <span className="text-[10px] font-black uppercase text-amber-900 block">Moderate / Fringe Area:</span>
                  <p className="font-mono font-black text-slate-900 text-base">4 - 8 Mbps Download</p>
                  <p className="text-[11px] text-amber-800 font-bold mt-0.5">Upload: 1 - 2 Mbps</p>
                </div>
              </div>
            </div>

            {/* 2. Warranty & Ownership */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#005696] font-black text-xs uppercase tracking-wider">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Warranty &amp; CPE Ownership</span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-600 leading-relaxed font-medium">
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <span className="font-bold text-slate-900 block">New CAT 4 CPE Models:</span>
                  <p><strong>12 Months Warranty</strong>. Ownership of the CPE is transferred to the customer at the end of the warranty period.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <span className="font-bold text-slate-900 block">Refurbished CPEs:</span>
                  <p><strong>6 Months Warranty</strong>. Ownership transferred at the end of 6 months.</p>
                </div>
                <div className="p-3 bg-rose-50 rounded-2xl border border-rose-100 text-rose-900">
                  <p><strong>Early Termination:</strong> Rs. 5,000 fee applies if disconnected within the 1-year commitment.</p>
                </div>
              </div>
            </div>

            {/* 3. Taxes & Outdoor Antenna */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#005696] font-black text-xs uppercase tracking-wider">
                <Tag className="w-5 h-5 text-blue-600" />
                <span>Taxes, Cycles &amp; Antenna</span>
              </div>

              <div className="space-y-2 text-xs text-slate-600 font-medium">
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <span className="font-bold text-slate-900 block">Applicable Taxes:</span>
                  <p>Telecommunication Levy (TL), VAT (18%), CESS, SSCL.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <span className="font-bold text-slate-900 block">Billing Cycles:</span>
                  <p><strong>Cycle 1:</strong> 1st to end of month</p>
                  <p><strong>Cycle 2:</strong> 16th to 15th of next month</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <span className="font-bold text-slate-900 block">Outdoor Antenna:</span>
                  <p>External antenna charges apply if requested: ~Rs. 3,500 – 5,000 depending on cable length.</p>
                </div>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* SECTION D: COPYABLE C-LOG TROUBLE TICKET TEMPLATE        */}
          {/* ======================================================== */}
          <div className="bg-slate-900 rounded-3xl border-2 border-slate-800 p-6 shadow-md space-y-3 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-cyan-400" />
                <span className="font-mono text-sm font-bold text-cyan-300">
                  C-Log Service Order: Concessionary Double Play Activation (Rs. 4,990)
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(ttConcessionaryDP, 'tt-cat4')}
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-xs rounded-xl font-bold flex items-center gap-2 transition-colors shadow-xs"
              >
                {copiedId === 'tt-cat4' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                <span>{copiedId === 'tt-cat4' ? 'Copied Template!' : 'Copy Order Template'}</span>
              </button>
            </div>
            <pre className="text-lime-300 font-mono text-xs leading-relaxed whitespace-pre-wrap p-2 bg-black/30 rounded-xl overflow-x-auto">
              {ttConcessionaryDP}
            </pre>
          </div>

          {/* Bottom Sequential Navigation */}
          <div className="flex items-center justify-between pt-6 border-t-2 border-slate-200">
            <Link
              href="/knowledge-hub/4g-lte"
              className="text-sm font-bold text-slate-600 hover:text-slate-900 flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to 4G LTE Hub</span>
            </Link>

            <Link
              href="/knowledge-hub/4g-lte/cat-6"
              className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm flex items-center gap-2 shadow-sm transition-colors"
            >
              <span>Next: CAT 6 Connection Charges</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}
