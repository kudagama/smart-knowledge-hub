"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import LteSubpageHeader from '../_components/LteSubpageHeader';
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
  Signal,
  CreditCard,
  ShieldAlert,
  Flame,
  CheckSquare
} from 'lucide-react';

// =========================================================================
// 1. EXACT CAT 4 CONNECTION CHARGES MATRIX (EFFECTIVE 01/08/2024)
// =========================================================================
const CAT4_PACKAGES = [
  {
    id: 'dp_concess_new',
    name: 'Double Play (BB + Voice) Concessionary - New',
    category: 'concessionary',
    withoutTax: '3,900',
    priorWithoutTax: '6,469.64',
    withTax: '4,695',
    priorWithTax: '7,990',
    badge: 'Popular Concession',
    badgeStyle: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    facilities: 'Detail Bill / Tele Life / E-Channeling / Railway Ticketing',
    commitment: '1 Year commitment period. Early termination fee: Rs. 1,200/remaining month (Rs. 3,500/5,000)',
    warranty: '12 Months Warranty (Ownership transferred after 12 months)',
    notes: 'Paid at counter (not added to monthly bill). Valid for eligible BB packages.',
    highlight: true
  },
  {
    id: 'sp_bb_concess_new',
    name: 'Single Play (BB only) Concessionary - New',
    category: 'concessionary',
    withoutTax: '3,900',
    priorWithoutTax: '6,469.64',
    withTax: '4,695',
    priorWithTax: '7,990',
    badge: 'Data Only Concession',
    badgeStyle: 'bg-blue-100 text-blue-900 border-blue-300',
    facilities: 'No additional voice facilities (Broadband data only)',
    commitment: '1 Year commitment period. Early termination fee: Rs. 600/remaining month (Rs. 3,500/5,000)',
    warranty: '12 Months Warranty (Ownership transferred after 12 months)',
    notes: 'Standard 4G LTE data connection for home/personal internet.',
    highlight: true
  },
  {
    id: 'sp_voice_pal_concess',
    name: 'Single Play (Voice only) "4G Voice Pal" Concessionary - New',
    category: 'concessionary',
    withoutTax: '3,900',
    priorWithoutTax: '6,469.64',
    withTax: '5,400',
    priorWithTax: '7,990',
    badge: 'Voice Pal Postpaid',
    badgeStyle: 'bg-teal-100 text-teal-900 border-teal-300',
    facilities: 'Detail Bill / Tele Life / E-Channeling / Railway Ticketing / Sisu Connect',
    commitment: '1 Year commitment period. Early termination fee applies.',
    warranty: '12 Months Warranty on CAT 4 CPE',
    notes: 'Voice Pal phone package. CC cannot upgrade free BB service (Customer must visit RTOM).'
  },
  {
    id: 'sp_biz_pal_concess',
    name: 'Single Play (Voice only) "4G Biz Pal" Concessionary - New',
    category: 'concessionary',
    withoutTax: '3,900',
    priorWithoutTax: '6,469.64',
    withTax: '5,400',
    priorWithTax: '7,990',
    badge: 'Biz Pal Business',
    badgeStyle: 'bg-purple-100 text-purple-900 border-purple-300',
    facilities: 'Detail Bill / Tele Life / E-Channeling / Railway Ticketing / Sisu Connect',
    commitment: '1 Year commitment period. Early termination fee applies.',
    warranty: '12 Months Warranty on CAT 4 CPE',
    notes: 'Single Play voice phone dedicated for micro-businesses and corporate counters.'
  },
  {
    id: 'cdma_migration',
    name: 'CDMA to LTE Voice Service (Same Number Migration)',
    category: 'migration',
    withoutTax: 'Free',
    priorWithoutTax: null,
    withTax: 'FREE',
    priorWithTax: null,
    badge: '100% Free Migration',
    badgeStyle: 'bg-emerald-600 text-white border-emerald-700',
    facilities: 'Tele Life / E-Channeling / Railway Ticketing / Sisu Connect',
    commitment: 'No new connection fee (Free migration from CDMA, not for brand-new lines)',
    warranty: 'Provided with VoLTE terminal',
    notes: 'Preserves existing CDMA CityLink number into geographical 011-3XXXXXX VoLTE format.',
    isFree: true
  },
  {
    id: 'net_pal_concess',
    name: '4G Net Pal (BB + Voice) Concessionary - New',
    category: 'concessionary',
    withoutTax: '3,900',
    priorWithoutTax: '6,469.64',
    withTax: '4,695',
    priorWithTax: '7,990',
    badge: 'Net Pal Bundle',
    badgeStyle: 'bg-indigo-100 text-indigo-900 border-indigo-300',
    facilities: 'Double Play VAS Bundle: Rs. 50 | Triple Play VAS Bundle: Rs. 100',
    commitment: '1 Year commitment period',
    warranty: '12 Months Warranty',
    notes: 'Combined BB + Voice package with special VAS bundling discount.'
  },
  {
    id: 'pre_owned_sp',
    name: 'Pre-owned CPE Single Play (Concessionary - Refurbished)',
    category: 'refurbished',
    withoutTax: '1,950',
    priorWithoutTax: '3,230.77',
    withTax: '2,700',
    priorWithTax: '3,990',
    badge: 'Discontinued Plan',
    badgeStyle: 'bg-amber-100 text-amber-900 border-amber-300',
    facilities: 'Broadband data facilities only',
    commitment: '1 Year commitment period. Early Termination fee: Rs. 3,500',
    warranty: 'Lifetime warranty for the CPE (CAT 4 unit only)',
    notes: 'New connections are discontinued from 5th January 2022. For reference & legacy handling only.'
  },
  {
    id: 'pre_owned_dp',
    name: 'Pre-owned CPE Double Play (Concessionary - Refurbished)',
    category: 'refurbished',
    withoutTax: '1,950',
    priorWithoutTax: '3,230.77',
    withTax: '2,350',
    priorWithTax: '3,990',
    badge: 'Refurbished DP',
    badgeStyle: 'bg-amber-100 text-amber-900 border-amber-300',
    facilities: 'Broadband + VoLTE voice facilities',
    commitment: '1 Year commitment period. Early Termination fee: Rs. 3,500',
    warranty: 'Lifetime warranty for the CPE (CAT 4 unit only)',
    notes: 'Introduced on 24th August 2022. Refurbished unit stock subject to teleshop availability.'
  },
  {
    id: 'full_pay_volte',
    name: 'With VoLTE (Voice) - Double Play or Voice Only (Full Payment - New)',
    category: 'full_pay',
    withoutTax: '7,250',
    priorWithoutTax: '9,708.50',
    withTax: '8,730',
    priorWithTax: '11,900',
    badge: '15GB Free Bonus',
    badgeStyle: 'bg-purple-100 text-purple-900 border-purple-300 ring-1 ring-purple-400',
    facilities: 'VoLTE HD Voice + Full Broadband Facilities',
    commitment: 'NO commitment period (Zero early termination fee)',
    warranty: 'Lifetime warranty for the CPE',
    notes: '🎁 Free Bonus: Additional 15GB data/month for the first 12 months! (Not applicable for Unlimited BB).',
    highlight: true
  },
  {
    id: 'full_pay_no_voice',
    name: 'Without VoLTE (Voice) - BB only (Full Payment - New)',
    category: 'full_pay',
    withoutTax: '6,550',
    priorWithoutTax: '8,898.79',
    withTax: '7,885',
    priorWithTax: '10,990',
    badge: 'Full Pay Data',
    badgeStyle: 'bg-slate-100 text-slate-800 border-slate-300',
    facilities: 'Full Broadband Facilities only (Data CPE)',
    commitment: 'NO commitment period (Zero early termination fee)',
    warranty: 'Lifetime warranty for the CPE',
    notes: 'One-time full payment router purchase. Immediate ownership.'
  },
  {
    id: 'sim_only_postpaid',
    name: '4G LTE Postpaid (SIM only) (Updated on 03/04/2024)',
    category: 'sim_only',
    withoutTax: '1,000',
    priorWithoutTax: null,
    withTax: '1,235',
    priorWithTax: null,
    badge: 'SIM Only Postpaid',
    badgeStyle: 'bg-cyan-100 text-cyan-900 border-cyan-300',
    facilities: 'Broadband / Voice connectivity on subscriber router',
    commitment: 'NO commitment period | NO early termination fees',
    warranty: 'SIM only provision',
    notes: 'SLT provides connection. Customer purchases router or gets discounted pocket router at Teleshop/eTeleshop.'
  }
];

// =========================================================================
// 2. NETWORK SPEED SPECIFICATIONS (SLT COVERAGE VS MOBITEL ROAMING)
// =========================================================================
const SPEED_SPECS = [
  {
    zone: 'Standard SLT 4G Coverage Area',
    tag: 'Direct SLT Tower',
    download: '16 Mbps – 20 Mbps (Average 8 Mbps)',
    upload: '1.6 Mbps – 2 Mbps (Average 1 Mbps)',
    style: 'bg-emerald-50 border-emerald-300 text-emerald-950',
    note: 'Updated by product team on 25/06/2025. Verify coverage at slt.lk/4gcoverage.'
  },
  {
    zone: 'Mobitel Data Roaming Area',
    tag: 'Roaming via Mobitel',
    download: '1 Mbps – 4 Mbps (Average)',
    upload: '0.5 Mbps – 1.5 Mbps (Average)',
    style: 'bg-amber-50 border-amber-300 text-amber-950',
    note: 'Applicable when customer is outside direct SLT 4G footprint and roams on Mobitel 3G/4G network.'
  }
];

// =========================================================================
// 3. BILLING CYCLES TABLE (BASED ON REGISTRATION DATE)
// =========================================================================
const BILLING_CYCLES = [
  { regPeriod: '1st to 7th of the month', billDate: '8th of the month', note: 'Cycle 1' },
  { regPeriod: '8th to 15th of the month', billDate: '16th of the month', note: 'Cycle 2 (Default for post-Jan 2018)' },
  { regPeriod: '16th to 23rd of the month', billDate: '24th of the month', note: 'Cycle 3' },
  { regPeriod: '24th to 30th / 31st of the month', billDate: '1st of the month', note: 'Cycle 4 (Default for pre-Jan 2018)' }
];

export default function LteCat4ChargesPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'concessionary' | 'full_pay' | 'refurbished' | 'sim_only' | 'migration'>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredPackages = CAT4_PACKAGES.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.facilities.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.withTax.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  const ttConcessionaryDP = `SERVICE: SLT-Mobitel 4G LTE Fixed Broadband
TARIFF OPTION: New Connection (CAT 4 Basic CPE - Concessionary Double Play)
ROUTER MODEL: Huawei B310 / B311 / Tozed Basic (CAT 4)
NEW CONNECTION CHARGE WITH TAX: Rs. 4,695 (eff. 01/08/2024)
BASE PRICE WITHOUT TAX: Rs. 3,900
PAYMENT MODE: Paid at Teleshop/RTOM Counter (Not added to monthly bill)
FACILITIES: Detail Bill, Tele Life, E-Channeling, Railway Ticketing
WARRANTY: 12 Months (Ownership transferred to subscriber after warranty period)
COMMITMENT: 1-Year commitment period. Early termination fee: Rs. 1,200/mo remaining (Rs. 3,500/5,000)
TARGET: BROADBAND-PROVISIONING / FRONT-OFFICE`;

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f1f5f9] overflow-y-auto select-none text-slate-800">
      
      {/* UNIFIED SHAREPOINT PORTAL HEADER & 9-TOPIC QUICK SWITCHER */}
      <LteSubpageHeader
        currentTopicId="cat-4"
        title="LTE New Connection Charges (CAT 4 - Basic CPE Model)"
        subtitle="Standard connection tariffs for Basic CPE models (Huawei B310, B311 & Tozed Basic). Concessionary Double Play (Rs. 4,695), Full Payment options (Rs. 8,730 with 15GB bonus), SIM-Only (Rs. 1,235), and 100% Free CDMA CityLink migration."
        badge="Basic CPE (CAT 4)"
        badgeStyle="bg-blue-400/20 text-blue-300 border-blue-300/30"
        taxDate="Tariffs Eff: 01/08/2024 | Published: 9/30/2026"
        author="Chathurani Rathnayake"
        authorRole="Senior Assistant Manager (Customer Relations)-A7"
        icon={Radio}
        stats={[
          { label: 'Concessionary DP', value: 'Rs. 4,695', sub: 'With Tax (Without: Rs. 3,900)' },
          { label: 'Full Pay + 15GB', value: 'Rs. 8,730', sub: 'No Commitment + 15GB/mo bonus' },
          { label: 'Postpaid SIM Only', value: 'Rs. 1,235', sub: 'With Tax (Base: Rs. 1,000)' },
          { label: 'CDMA Migration', value: '100% FREE', sub: 'Same Number Preserved' }
        ]}
      />

      {/* 4. SUB-NAVIGATION & FILTER TOOLBAR */}
      <div className="bg-white border-b border-slate-300 px-6 py-3.5 sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-3.5">
          
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none text-xs">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              All Plans ({CAT4_PACKAGES.length})
            </button>
            <button
              onClick={() => setActiveCategory('concessionary')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                activeCategory === 'concessionary'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              Concessionary (Rs. 4,695 - 5,400)
            </button>
            <button
              onClick={() => setActiveCategory('full_pay')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                activeCategory === 'full_pay'
                  ? 'bg-purple-700 text-white shadow-xs'
                  : 'bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200'
              }`}
            >
              Full Payment + 15GB Bonus
            </button>
            <button
              onClick={() => setActiveCategory('refurbished')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                activeCategory === 'refurbished'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200'
              }`}
            >
              Refurbished CPE
            </button>
            <button
              onClick={() => setActiveCategory('sim_only')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                activeCategory === 'sim_only'
                  ? 'bg-cyan-700 text-white shadow-xs'
                  : 'bg-cyan-50 hover:bg-cyan-100 text-cyan-900 border border-cyan-200'
              }`}
            >
              SIM Only (Rs. 1,235)
            </button>
            <button
              onClick={() => setActiveCategory('migration')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                activeCategory === 'migration'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200'
              }`}
            >
              CDMA Free Migration
            </button>
          </div>

          {/* Right Controls: Search & View Toggle */}
          <div className="flex items-center gap-2.5 w-full lg:w-auto justify-between lg:justify-end">
            <div className="relative w-full sm:w-48">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search packages..."
                className="w-full bg-slate-50 text-slate-800 text-xs pl-8 pr-7 py-1.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-700 shadow-2xs"
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

            <div className="flex items-center bg-slate-100 p-1 rounded-xl shrink-0">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'cards' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Cards
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'table' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Table
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 5. MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-8 space-y-8">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* ======================================================== */}
          {/* FRONTLINE MANDATORY PAYMENT & OPERATIONAL NOTICE         */}
          {/* ======================================================== */}
          <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 font-black mt-0.5">
                <CreditCard className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="font-black text-amber-950 text-sm block">
                  Mandatory Payment &amp; Operational Directives (Updated 02/05/2024):
                </span>
                <p className="text-amber-900 font-semibold leading-relaxed">
                  • <strong>Paid to Counter:</strong> New Connection Charges with tax <strong>must be paid directly to the counter and will NOT be added to the monthly bill</strong>.<br />
                  • <strong>Reconnection Fee:</strong> Terminated LTE postpaid reconnection fee is strictly <strong>Rs. 500/=</strong> (confirmed 22/02/2024).<br />
                  • <strong>No Virusara Discounts:</strong> There are no special discounts for LTE services under <em>Virusara Varapprasada</em> (Standard initiation &amp; rentals apply).
                </p>
              </div>
            </div>
            <div className="shrink-0 bg-white p-3 rounded-2xl border border-amber-200 text-center font-bold text-amber-950">
              <span className="text-[10px] text-slate-400 block uppercase">Ownership Transfer</span>
              <span className="font-mono text-sm font-black text-slate-900">New: 12 Mos | Refurb: 6 Mos</span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* SECTION A: CARDS VIEW MODE                               */}
          {/* ======================================================== */}
          {viewMode === 'cards' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPackages.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-3xl border-2 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group ${
                    item.highlight ? 'border-blue-400 ring-2 ring-blue-500/10' : 'border-slate-200 hover:border-blue-300'
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
                    <div>
                      <h3 className="font-black text-lg text-slate-900 group-hover:text-blue-800 transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-semibold block mt-0.5">
                        Category: <strong className="text-slate-600 capitalize">{item.category}</strong>
                      </span>
                    </div>

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
                        {item.priorWithoutTax && (
                          <span className="text-[10px] text-slate-400 line-through block">
                            (was Rs. {item.priorWithoutTax})
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Conditions & Details */}
                    <div className="space-y-1.5 text-xs text-slate-600 font-medium">
                      <p className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5" />
                        <span><strong>Available Facilities:</strong> {item.facilities}</span>
                      </p>
                      <p className="flex items-start gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Warranty &amp; CPE:</strong> {item.warranty}</span>
                      </p>
                      <p className="flex items-start gap-1.5">
                        <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span><strong>Commitment &amp; Termination:</strong> {item.commitment}</span>
                      </p>
                    </div>

                    {/* Notes Box */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-700 font-semibold leading-relaxed">
                      💡 {item.notes}
                    </div>

                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400">Basic CAT 4 CPE</span>
                    <button
                      onClick={() => copyToClipboard(`PACKAGE: ${item.name}\nWITH TAX: Rs. ${item.withTax}\nWITHOUT TAX: Rs. ${item.withoutTax}\nFACILITIES: ${item.facilities}\nCOMMITMENT: ${item.commitment}`, item.id)}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-900 font-bold text-xs flex items-center gap-1.5 transition-colors border border-slate-200"
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
          {/* SECTION B: EXACT DATA TABLE VIEW MODE                    */}
          {/* ======================================================== */}
          {viewMode === 'table' && (
            <div className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-xs space-y-4 p-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-black text-xl text-slate-900">
                  CAT 4 New Connection Tariff Matrix (Effective from 01/08/2024)
                </h3>
                <span className="px-3 py-1 bg-blue-50 text-blue-900 rounded-xl text-xs font-bold border border-blue-200">
                  Official SharePoint Specification
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white font-black">
                      <th className="p-3.5 w-1/4">Package (CAT 4 Basic CPE Model)</th>
                      <th className="p-3.5">Without Tax (Rs)<br/><span className="text-[10px] text-slate-400 font-normal">(eff. 01/08/2024)</span></th>
                      <th className="p-3.5 text-emerald-300">With Tax (Rs)<br/><span className="text-[10px] text-emerald-400 font-normal">(eff. 01/08/2024)</span></th>
                      <th className="p-3.5">Prior Price</th>
                      <th className="p-3.5">Available Facilities</th>
                      <th className="p-3.5">Commitment &amp; Warranty Rules</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {filteredPackages.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900">
                          <span className="block text-sm font-black">{item.name}</span>
                          <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border inline-block mt-1 ${item.badgeStyle}`}>
                            {item.badge}
                          </span>
                        </td>
                        <td className="p-3.5 font-mono font-bold text-slate-800">
                          {item.withoutTax === 'Free' ? 'Free' : `Rs. ${item.withoutTax}`}
                        </td>
                        <td className="p-3.5 font-mono font-black text-base text-emerald-700">
                          {item.withTax === 'FREE' ? (
                            <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-900 rounded-full font-black text-xs">FREE</span>
                          ) : (
                            `Rs. ${item.withTax}`
                          )}
                        </td>
                        <td className="p-3.5 font-mono text-slate-400 line-through">
                          {item.priorWithTax ? `Rs. ${item.priorWithTax}` : '—'}
                        </td>
                        <td className="p-3.5 text-slate-700">
                          {item.facilities}
                        </td>
                        <td className="p-3.5 text-slate-600 leading-relaxed text-[11px]">
                          <div>• {item.warranty}</div>
                          <div>• {item.commitment}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION B.2: TAX BREAKDOWN & EARLY TERMINATION MATRICES  */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* 1. Tax Structure Matrix (Effective 4th June) */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <Tag className="w-5 h-5 text-blue-700" />
                  <div>
                    <h3 className="font-black text-base text-slate-900">
                      Tax Structure on Reconnection, Rental &amp; Usage
                    </h3>
                    <span className="text-[10px] text-slate-500 font-bold">
                      Effective 4th June (All Levies &amp; Taxes Included)
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-blue-50 text-blue-900 rounded-lg text-[11px] font-black border border-blue-200">
                  SLT Policy
                </span>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white font-bold text-[11px]">
                      <th className="p-2.5">Component</th>
                      <th className="p-2.5 text-center">SP Voice</th>
                      <th className="p-2.5 text-center">SP BB</th>
                      <th className="p-2.5 text-center">Double Play (V+BB)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[11px] font-medium text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-slate-900">Reconnection Tax</td>
                      <td className="p-2.5 text-center font-mono font-bold text-slate-900">23.50% <span className="text-[9px] text-slate-400 block line-through">20.36%</span></td>
                      <td className="p-2.5 text-center font-mono font-bold text-slate-900">23.50% <span className="text-[9px] text-slate-400 block line-through">20.36%</span></td>
                      <td className="p-2.5 text-center font-mono font-bold text-blue-700 bg-blue-50/50">23.50% <span className="text-[9px] text-slate-400 block line-through">20.36%</span></td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-slate-900">Access Bearer Tax</td>
                      <td className="p-2.5 text-center font-mono font-bold text-slate-900">42.02% <span className="text-[9px] text-slate-400 block line-through">38.41%</span></td>
                      <td className="p-2.5 text-center text-slate-400 font-mono">—</td>
                      <td className="p-2.5 text-center font-mono font-bold text-blue-700 bg-blue-50/50">42.02% <span className="text-[9px] text-slate-400 block line-through">38.41%</span></td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-slate-900">BB Rental Tax</td>
                      <td className="p-2.5 text-center text-slate-400 font-mono">—</td>
                      <td className="p-2.5 text-center font-mono font-bold text-slate-900">23.50% <span className="text-[9px] text-slate-400 block line-through">20.36%</span></td>
                      <td className="p-2.5 text-center font-mono font-bold text-blue-700 bg-blue-50/50">23.50% <span className="text-[9px] text-slate-400 block line-through">20.36%</span></td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-slate-900">Voice Usage Tax</td>
                      <td className="p-2.5 text-center font-mono font-bold text-slate-900">42.02% <span className="text-[9px] text-slate-400 block line-through">38.41%</span></td>
                      <td className="p-2.5 text-center text-slate-400 font-mono">—</td>
                      <td className="p-2.5 text-center font-mono font-bold text-blue-700 bg-blue-50/50">42.02% <span className="text-[9px] text-slate-400 block line-through">38.41%</span></td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-slate-900">BB Usage Tax</td>
                      <td className="p-2.5 text-center text-slate-400 font-mono">—</td>
                      <td className="p-2.5 text-center font-mono font-bold text-slate-900">23.50% <span className="text-[9px] text-slate-400 block line-through">20.36%</span></td>
                      <td className="p-2.5 text-center font-mono font-bold text-blue-700 bg-blue-50/50">23.50% <span className="text-[9px] text-slate-400 block line-through">20.36%</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                💡 Reconnection fee is Rs. 500/= across all categories. Applicable taxes apply at reconnection time.
              </p>
            </div>

            {/* 2. Early Termination & Discontinued Installment Matrix */}
            <div className="space-y-4">
              
              {/* Early Termination Table */}
              <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-rose-600" />
                    <div>
                      <h3 className="font-black text-base text-slate-900">
                        Concessionary Early Termination Fees
                      </h3>
                      <span className="text-[10px] text-rose-600 font-bold">
                        Effective from 24th August 2022 | 1-Year Commitment
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-rose-50 text-rose-900 rounded-lg text-[11px] font-black border border-rose-200">
                    Mandatory Fee
                  </span>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold text-[11px]">
                        <th className="p-2.5">Package Type</th>
                        <th className="p-2.5">Monthly Termination Fee</th>
                        <th className="p-2.5">Formula / Fixed Charge</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-[11px] font-medium text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-2.5 font-bold text-slate-900">CAT 4 Single Play (Voice or BB)</td>
                        <td className="p-2.5 font-mono font-black text-rose-700 text-sm">Rs. 600/= / month</td>
                        <td className="p-2.5 text-slate-600">Rs. 600 × Remaining Months (Base penalty Rs. 3,500 / 5,000)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-2.5 font-bold text-slate-900">CAT 4 Double Play (BB + Voice)</td>
                        <td className="p-2.5 font-mono font-black text-rose-700 text-sm">Rs. 1,200/= / month</td>
                        <td className="p-2.5 text-slate-600">Rs. 1,200 (600×2) × Remaining Months (Base penalty Rs. 3,500 / 5,000)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[11px] text-rose-800 font-semibold bg-rose-50 p-2.5 rounded-xl border border-rose-200">
                  ⚠️ Applicable for terminations within the first 12 months. After 12 months, ownership is transferred with zero penalty.
                </p>
              </div>

              {/* Historical Installment Box (Discontinued) */}
              <div className="bg-slate-50 rounded-3xl border-2 border-slate-300 p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-slate-500" />
                    <span>Historical Installment Plan Option</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-slate-200 text-slate-700 border border-slate-400">
                    DISCONTINUED / NOT AVAILABLE NOW
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                  <strong>Notice:</strong> <em>"The installment payment option is not available now."</em> Historical reference records:
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                  <div className="p-2.5 bg-white rounded-xl border border-slate-200 font-mono">
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Single Play (Old)</span>
                    <span className="font-bold text-slate-800">900 + 800 * 2</span>
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-slate-200 font-mono">
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Double Play (Old)</span>
                    <span className="font-bold text-slate-800">800 + 600 * 2</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* ======================================================== */}
          {/* SECTION C: SPEEDS, BILLING CYCLES & TECHNICAL RULES      */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Speeds */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-blue-900 font-black text-xs uppercase tracking-wider">
                <Gauge className="w-5 h-5 text-blue-700" />
                <span>4G LTE Network Speeds</span>
              </div>

              <div className="space-y-3 text-xs">
                {SPEED_SPECS.map((s, idx) => (
                  <div key={idx} className={`p-3.5 rounded-2xl border space-y-1.5 ${s.style}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-black text-xs block">{s.zone}</span>
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-white/70">
                        {s.tag}
                      </span>
                    </div>
                    <div className="font-mono font-bold">
                      DL: <strong>{s.download}</strong><br />
                      UL: <strong>{s.upload}</strong>
                    </div>
                    <p className="text-[10px] opacity-80 leading-relaxed">{s.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Billing Cycles */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-indigo-900 font-black text-xs uppercase tracking-wider">
                <Calendar className="w-5 h-5 text-indigo-700" />
                <span>Customer Registration &amp; Bill Cycles</span>
              </div>

              <div className="space-y-2 text-xs">
                <p className="text-slate-600 leading-relaxed text-[11px] font-medium">
                  There are four billing cycles introduced as per customer registration date:
                </p>
                <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
                  {BILLING_CYCLES.map((c, i) => (
                    <div key={i} className="p-2.5 bg-slate-50/60 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-slate-800 block text-[11px]">{c.regPeriod}</span>
                        <span className="text-[10px] text-slate-400">{c.note}</span>
                      </div>
                      <span className="font-mono font-black text-indigo-900 text-xs bg-indigo-50 px-2 py-1 rounded-md border border-indigo-200">
                        {c.billDate}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="p-2 bg-slate-100 rounded-xl text-[10px] text-slate-600 font-medium">
                  ⚠️ Bill date can be modified to the 1st of the month only with the customer's written consent to RTOM.
                </div>
              </div>
            </div>

            {/* 3. Outdoor CPE & Special Policies */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-emerald-900 font-black text-xs uppercase tracking-wider">
                <Wrench className="w-5 h-5 text-emerald-700" />
                <span>Outdoor CPE &amp; Special Policies</span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-600 font-medium leading-relaxed">
                <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-1">
                  <span className="font-black text-emerald-950 block">LTE Outdoor CPE (Antenna):</span>
                  <p>Available to address specific coverage issues for data connections only.</p>
                  <p className="font-bold text-emerald-900">Charge: <strong>Rs. 1,500/=</strong> (for both new connections &amp; replacements).</p>
                </div>

                <div className="p-3 bg-rose-50 rounded-2xl border border-rose-200 space-y-1 text-rose-950">
                  <span className="font-black block">Termination Process:</span>
                  <p>1. Customer visits RTO.<br />2. Handover 4G device with all accessories.<br />3. Settle outstanding bills &amp; receive acknowledgment.</p>
                </div>

                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-700">
                  <strong>Fax Facility:</strong> Available now for LTE customers via certified terminal.
                </div>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* SECTION D: COPYABLE C-LOG ORDER TEMPLATE                 */}
          {/* ======================================================== */}
          <div className="bg-slate-900 rounded-3xl border-2 border-slate-800 p-6 shadow-md space-y-3 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-blue-400" />
                <span className="font-mono text-sm font-bold text-blue-300">
                  C-Log Service Order: CAT 4 Concessionary Double Play (Rs. 4,695)
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(ttConcessionaryDP, 'tt-cat4')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded-xl font-bold flex items-center gap-2 transition-colors shadow-xs"
              >
                {copiedId === 'tt-cat4' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                <span>{copiedId === 'tt-cat4' ? 'Copied Template!' : 'Copy Order Template'}</span>
              </button>
            </div>
            <pre className="text-blue-200 font-mono text-xs leading-relaxed whitespace-pre-wrap p-2 bg-black/30 rounded-xl overflow-x-auto">
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
              <span>Back: 4G LTE Hub</span>
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
