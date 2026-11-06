"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import LteSubpageHeader from '../_components/LteSubpageHeader';
import {
  Zap,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Wrench,
  ShieldCheck,
  Radio,
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
  Gift,
  Clock,
  Sparkles,
  Award,
  Layers,
  Building2,
  Calendar,
  CreditCard,
  Percent,
  CheckSquare,
  ShieldAlert,
  Flame,
  Scale
} from 'lucide-react';

// =========================================================================
// 1. EXACT CAT 6 CONNECTION CHARGES DATA (SHAREPOINT SPECIFICATION)
// =========================================================================
const CAT6_PACKAGES = [
  {
    id: 'cat6_new_concess',
    name: 'Concessionary - New (CPE Model - Tozed)',
    category: 'concessionary_new',
    withoutTax: '11,327.94',
    priorWithoutTax: '6,900',
    withTax: '13,990',
    taxRate: '23.50%',
    taxAmount: '2,662.06',
    badge: 'Tozed New Unit',
    badgeStyle: 'bg-amber-100 text-amber-900 border-amber-300',
    warranty: '12 Months Warranty',
    ownership: 'Ownership transferred to customer after 12 months',
    commitment: '1 Year commitment period',
    terminationFee: 'Flat Rs. 5,000 Early Termination Fee',
    cpeSpecs: 'CAT 6 High Throughput CPE with Carrier Aggregation (CA)',
    speeds: 'Download: Average 16 Mbps | Upload: Average 1 Mbps',
    eligibility: 'Only applicable for Broadband packages Rs. 2,390 (was 1,990) and above',
    paymentRule: 'Must be paid upfront to the counter (Not added to monthly bill)',
    highlight: true,
    orderCode: 'CREATE-CAT6-CONCESS-NEW'
  },
  {
    id: 'cat6_refurb_concess',
    name: 'Concessionary - Refurbished (CPE Model - Tozed)',
    category: 'concessionary_refurb',
    withoutTax: '5,659.92',
    priorWithoutTax: '3,450',
    withTax: '6,990',
    taxRate: '23.50%',
    taxAmount: '1,330.08',
    badge: 'Refurbished Economical',
    badgeStyle: 'bg-blue-100 text-blue-900 border-blue-300',
    warranty: '6 Months Warranty',
    ownership: 'Ownership transferred to customer after 6 months',
    commitment: '1 Year commitment period',
    terminationFee: 'Flat Rs. 5,000 Early Termination Fee',
    cpeSpecs: 'Tested & Certified CAT 6 Tozed CPE with Carrier Aggregation (CA)',
    speeds: 'Download: Average 16 Mbps | Upload: Average 1 Mbps',
    eligibility: 'Only applicable for Broadband packages Rs. 2,390 (was 1,990) and above',
    paymentRule: 'Must be paid upfront to the counter (Not added to monthly bill)',
    highlight: false,
    orderCode: 'CREATE-CAT6-CONCESS-REFURB'
  },
  {
    id: 'cat6_full_pay',
    name: 'Full Payment - New (CPE Model - Tozed)',
    category: 'full_payment',
    withoutTax: '16,186.23',
    priorWithoutTax: '12,000',
    withTax: '19,900',
    taxRate: '23.50%',
    taxAmount: '3,713.77',
    badge: 'Free 300GB Bonus Data',
    badgeStyle: 'bg-emerald-100 text-emerald-900 border-emerald-300 ring-1 ring-emerald-400',
    bonusData: '25 GB / Month for first 12 months (Free 300 GB Total Bonus Data)',
    bonusNote: 'Bonus data NOT applicable for Unlimited packages',
    warranty: '12 Months Warranty',
    ownership: 'Full ownership transferred immediately to customer upon counter payment',
    commitment: 'Zero commitment period',
    terminationFee: 'No early termination fee',
    cpeSpecs: 'CAT 6 High Throughput CPE with Carrier Aggregation (CA)',
    speeds: 'Download: Average 16 Mbps | Upload: Average 1 Mbps',
    eligibility: 'Any Broadband package (Bonus data applicable on volume-based/anytime plans)',
    paymentRule: 'Must be paid upfront to the counter (Not added to monthly bill)',
    highlight: true,
    orderCode: 'CREATE-CAT6-FULLPAY-NEW'
  }
];

// =========================================================================
// 2. CAT 4 VS CAT 6 COMPARISON MATRIX
// =========================================================================
const HARDWARE_COMPARISON = [
  {
    attribute: 'CPE Architecture',
    cat4: 'CAT 4 Basic Router',
    cat6: 'Tozed CAT 6 Advanced Router'
  },
  {
    attribute: 'Carrier Aggregation (CA)',
    cat4: 'No (Single frequency band)',
    cat6: 'Yes (Band 40 + Band 3 simultaneous aggregation)'
  },
  {
    attribute: 'Average Download Speed',
    cat4: '10 Mbps – 16 Mbps',
    cat6: '16 Mbps (Faster & more resilient during congestion)'
  },
  {
    attribute: 'Average Upload Speed',
    cat4: '1 Mbps – 2 Mbps',
    cat6: '1 Mbps'
  },
  {
    attribute: 'Concessionary Price (With Tax)',
    cat4: 'Rs. 4,695 (Standard prior: Rs. 7,990)',
    cat6: 'Rs. 13,990 (New) | Rs. 6,990 (Refurbished)'
  },
  {
    attribute: 'Full Payment Price (With Tax)',
    cat4: 'Rs. 8,730 (Standard prior: Rs. 11,900)',
    cat6: 'Rs. 19,900'
  },
  {
    attribute: 'Full Pay Bonus Data',
    cat4: '15 GB one-time bonus',
    cat6: '25 GB/Month for 12 Months (Total 300 GB Free Bonus Data)'
  },
  {
    attribute: 'Eligible Package Categories',
    cat4: 'All package categories eligible',
    cat6: 'Concessionary options restricted to Rs. 2,390 (was 1,990) & above'
  },
  {
    attribute: 'Early Termination Penalty',
    cat4: 'Rs. 600 / Rs. 1,200 per remaining month',
    cat6: 'Flat Rs. 5,000 Early Termination Fee'
  }
];

export default function LteCat6ChargesPage() {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const ttCat6ConcessNew = `SERVICE: SLT-Mobitel 4G LTE Fixed Broadband
TARIFF OPTION: New Connection (CAT 6 Advanced CPE - Tozed Concessionary New)
ROUTER MODEL: Tozed CAT 6 High-Throughput (Carrier Aggregation)
PRICE WITH TAX: Rs. 13,990 (Customer pays upfront to counter)
BASE PRICE WITHOUT TAX: Rs. 11,327.94 (Prior 2022 base Rs. 6,900)
WARRANTY: 12 Months (Ownership transferred after 12 months)
COMMITMENT: 1 Year (Early termination fee: Rs. 5,000)
PACKAGE ELIGIBILITY: BB packages Rs. 2,390 (was 1,990) and above
AVERAGE SPEED: Download 16 Mbps | Upload 1 Mbps
TARGET: BROADBAND-PROVISIONING / FRONT-OFFICE`;

  const ttCat6ConcessRefurb = `SERVICE: SLT-Mobitel 4G LTE Fixed Broadband
TARIFF OPTION: New Connection (CAT 6 Advanced CPE - Tozed Concessionary Refurbished)
ROUTER MODEL: Tozed CAT 6 Refurbished (Carrier Aggregation)
PRICE WITH TAX: Rs. 6,990 (Customer pays upfront to counter)
BASE PRICE WITHOUT TAX: Rs. 5,659.92 (Prior 2022 base Rs. 3,450)
WARRANTY: 6 Months (Ownership transferred after 6 months)
COMMITMENT: 1 Year (Early termination fee: Rs. 5,000)
PACKAGE ELIGIBILITY: BB packages Rs. 2,390 (was 1,990) and above
AVERAGE SPEED: Download 16 Mbps | Upload 1 Mbps
TARGET: BROADBAND-PROVISIONING / FRONT-OFFICE`;

  const ttCat6FullPay = `SERVICE: SLT-Mobitel 4G LTE Fixed Broadband
TARIFF OPTION: New Connection (CAT 6 Advanced CPE - Tozed Full Payment)
ROUTER MODEL: Tozed CAT 6 High-Throughput (Carrier Aggregation)
PRICE WITH TAX: Rs. 19,900 (Customer pays upfront to counter)
BASE PRICE WITHOUT TAX: Rs. 16,186.23 (Prior 2022 base Rs. 12,000)
SPECIAL BENEFIT: 25GB Free Bonus Data / month for first 12 months (Total 300GB, Not for Unlimited plans)
WARRANTY: 12 Months (Full customer ownership transferred immediately)
COMMITMENT: None (No early termination fee)
PACKAGE ELIGIBILITY: Any Broadband Package
AVERAGE SPEED: Download 16 Mbps | Upload 1 Mbps
TARGET: BROADBAND-PROVISIONING / FRONT-OFFICE`;

  const filteredPackages = CAT6_PACKAGES.filter((item) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.withTax.includes(q) ||
      item.withoutTax.includes(q) ||
      item.eligibility.toLowerCase().includes(q) ||
      item.badge.toLowerCase().includes(q)
    );
  });

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f1f5f9] overflow-y-auto select-none text-slate-800">
      
      {/* UNIFIED SHAREPOINT PORTAL HEADER & 9-TOPIC QUICK SWITCHER */}
      <LteSubpageHeader
        currentTopicId="cat-6"
        title="LTE New Connection Charges (CAT 6)"
        subtitle="Official connection charges for Advanced Tozed CAT 6 routers with Carrier Aggregation (CA). High-throughput performance (16 Mbps avg download), +25 GB monthly bonus data for 12 months (300 GB) on full pay, and concessionary options for packages Rs. 2,390 and above."
        badge="Advanced CAT 6 (Tozed)"
        badgeStyle="bg-amber-400/20 text-amber-300 border-amber-300/30"
        taxDate="Published: 6/13/2025 | Effective: 24/08/2022 | Revised with Tax: 01/08/2024"
        author="Chathurani Rathnayake"
        authorRole="Senior Assistant Manager (Customer Relations) - A7"
        icon={Zap}
        stats={[
          { label: 'Concessionary New', value: 'Rs. 13,990', sub: 'With Tax (Base: Rs. 11,327.94)' },
          { label: 'Refurbished Unit', value: 'Rs. 6,990', sub: 'With Tax (Base: Rs. 5,659.92)' },
          { label: 'Full Payment New', value: 'Rs. 19,900', sub: 'With Tax (Base: Rs. 16,186.23)' },
          { label: 'Full Pay Bonus', value: '+300 GB', sub: '25 GB/Mo for 12 Months' }
        ]}
      />

      {/* 4. SUB-NAVIGATION TOOLBAR */}
      <div className="bg-white border-b border-slate-300 px-6 py-3.5 sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3.5">
          
          <div className="flex items-center gap-2">
            <span className="font-black text-slate-800 uppercase tracking-wider text-xs flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-amber-600" />
              <span>Available CAT 6 Tozed Plans (3 Options)</span>
            </span>
            <span className="text-xs bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-full border border-amber-200">
              Tax: 23.50%
            </span>
          </div>

          {/* Toggle View Mode & Search */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <div className="relative w-full sm:w-56">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search CAT 6 option..."
                className="w-full bg-slate-50 text-slate-800 text-xs pl-8 pr-7 py-1.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-amber-600"
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
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  viewMode === 'cards' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <span>Visual Cards</span>
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
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
        <div className="max-w-7xl mx-auto space-y-8">

          {/* TOP OPERATIONAL & PRICE REVISION NOTICES */}
          <div className="space-y-4">
            
            {/* Alert 1: Price Plan Evolution & Tax Breakdown */}
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-2 border-amber-300 rounded-3xl p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-600 text-white flex items-center justify-center shrink-0 font-black mt-0.5">
                  <Percent className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-amber-950 text-base">
                      📌 Price Revision Clarification: 2022 Base Rates vs Current Rates With Tax
                    </span>
                    <span className="bg-amber-100 text-amber-900 font-black text-[10px] px-2 py-0.5 rounded-full border border-amber-300">
                      Effective 01/08/2024
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    SharePoint specifications include 3 historical rate tiers for CAT 6 Tozed routers: (1) <strong>2022 Base Price</strong> (eff. 24/08/2022: Rs. 6,900 / 3,450 / 12,000), (2) <strong>Current Base Without Tax</strong> (Rs. 11,327.94 / 5,659.92 / 16,186.23), and (3) <strong>Customer Payable With Tax (23.50%)</strong>: <strong className="text-amber-900 font-bold">Rs. 13,990/=</strong> (Concessionary New), <strong className="text-blue-900 font-bold">Rs. 6,990/=</strong> (Refurbished), and <strong className="text-emerald-900 font-bold">Rs. 19,900/=</strong> (Full Pay).
                  </p>
                </div>
              </div>
              <div className="shrink-0 bg-white p-3.5 rounded-2xl border border-amber-200 text-center font-bold">
                <span className="text-[10px] text-slate-400 block uppercase">Fixed Broadband Tax</span>
                <span className="font-mono text-xl font-black text-amber-800">23.50%</span>
                <span className="text-[10px] text-slate-500 block">Upfront Counter Collection</span>
              </div>
            </div>

            {/* Alert 2: Mandatory Upfront Collection & Eligibility Directive */}
            <div className="bg-slate-900 text-white border-2 border-slate-800 rounded-3xl p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 font-black mt-0.5">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="font-black text-amber-300 text-sm block">
                    Mandatory Counter Directives &amp; Package Restrictions:
                  </span>
                  <p className="text-slate-300 font-medium leading-relaxed">
                    • <strong>Upfront Counter Payment:</strong> New Connection Charge with Tax <strong>must be collected upfront for all options when providing the service</strong> and will NOT be added to the monthly bill.<br />
                    • <strong>Package Threshold:</strong> Concessionary options (Rs. 13,990 &amp; Rs. 6,990) are <strong>only applicable for Broadband packages Rs. 2,390 (was 1,990) and above</strong>.<br />
                    • <strong>Early Termination Fee:</strong> Flat <strong>Rs. 5,000/=</strong> applicable within the 1-year commitment period for concessionary options.<br />
                    • <strong>Speeds:</strong> Average Download <strong>16 Mbps</strong> | Average Upload <strong>1 Mbps</strong> (Carrier Aggregation CA on Band 40 + Band 3).
                  </p>
                </div>
              </div>
              <div className="shrink-0 bg-slate-800/80 p-3 rounded-2xl border border-slate-700 text-center font-bold text-amber-300">
                <span className="text-[10px] text-slate-400 block uppercase">Ownership Transfer</span>
                <span className="font-mono text-sm font-black text-white">New: 12 Mos | Refurb: 6 Mos</span>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* SECTION A: CARDS VIEW MODE                               */}
          {/* ======================================================== */}
          {viewMode === 'cards' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredPackages.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-3xl border-2 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group ${
                    item.highlight ? 'border-amber-400 ring-2 ring-amber-500/10' : 'border-slate-200 hover:border-amber-300'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top Row: Badge & Category */}
                    <div className="flex items-start justify-between gap-2">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.badgeStyle}`}>
                        {item.badge}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">
                        2022 Base: Rs. {item.priorWithoutTax}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="font-black text-lg md:text-xl text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-semibold block mt-0.5">
                        Router Model: <strong className="text-slate-700">Tozed CAT 6 (Carrier Aggregation)</strong>
                      </span>
                    </div>

                    {/* Price Block: Customer Pays With Tax Prominent */}
                    <div className="p-4 bg-amber-50/70 rounded-2xl border-2 border-amber-200/80 space-y-2.5">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 bg-amber-100 px-2 py-0.5 rounded-md border border-amber-300 inline-block">
                            Customer Pays (With Tax 23.5%)
                          </span>
                          <div className="flex items-baseline gap-1 mt-1.5">
                            <span className="text-sm font-bold text-slate-500">Rs.</span>
                            <span className="text-3xl font-black text-amber-900 tracking-tight">{item.withTax}</span>
                            <span className="text-xs text-amber-800 font-bold ml-1">Upfront</span>
                          </div>
                        </div>

                        <div className="text-right bg-white px-2.5 py-1.5 rounded-xl border border-amber-200/80">
                          <span className="text-[9px] font-bold text-slate-400 uppercase block">Tax (23.5%)</span>
                          <span className="font-mono text-xs font-bold text-slate-700">
                            +Rs. {item.taxAmount}
                          </span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-amber-200/60 flex items-center justify-between text-xs text-slate-600 font-semibold">
                        <span>Base Without Tax:</span>
                        <div className="font-mono">
                          <strong className="text-slate-900">Rs. {item.withoutTax}</strong>
                          <span className="text-[10px] text-slate-400 ml-1.5 line-through">
                            (was Rs. {item.priorWithoutTax})
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bonus Data Highlight if Available */}
                    {item.bonusData && (
                      <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-1">
                        <div className="flex items-center gap-2 text-emerald-950 font-bold text-xs">
                          <Gift className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{item.bonusData}</span>
                        </div>
                        <span className="text-[10px] text-emerald-800 font-medium block pl-6">
                          ⚠️ {item.bonusNote}
                        </span>
                      </div>
                    )}

                    {/* Details List */}
                    <div className="space-y-2 text-xs text-slate-600 font-medium">
                      <p className="flex items-start gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span><strong>Warranty &amp; Ownership:</strong> {item.warranty} ({item.ownership})</span>
                      </p>
                      <p className="flex items-start gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                        <span><strong>Commitment &amp; Termination:</strong> {item.commitment} • {item.terminationFee}</span>
                      </p>
                      <p className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Package Eligibility:</strong> {item.eligibility}</span>
                      </p>
                      <p className="flex items-start gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                        <span><strong>Speed Performance:</strong> {item.speeds}</span>
                      </p>
                    </div>

                    {/* Notes Box */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 font-semibold leading-relaxed">
                      💡 {item.paymentRule}
                    </div>

                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-slate-400">{item.orderCode}</span>
                    <button
                      onClick={() => copyToClipboard(
                        item.id === 'cat6_new_concess'
                          ? ttCat6ConcessNew
                          : item.id === 'cat6_refurb_concess'
                          ? ttCat6ConcessRefurb
                          : ttCat6FullPay,
                        item.id
                      )}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-amber-50 text-slate-700 hover:text-amber-900 font-bold text-xs flex items-center gap-1.5 transition-colors border border-slate-200"
                    >
                      {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedId === item.id ? 'Copied C-Log!' : 'Copy Order'}</span>
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
                      <th className="p-4 w-1/4">Package (CAT 6 - Tozed Advanced)</th>
                      <th className="p-4 text-amber-300">With Tax (23.5%)<br/><span className="text-[10px] text-amber-400 font-normal">Customer Pays Upfront</span></th>
                      <th className="p-4">Without Tax (Rs.)<br/><span className="text-[10px] text-slate-400 font-normal">Base Rate</span></th>
                      <th className="p-4">2022 Base<br/><span className="text-[10px] text-slate-400 font-normal">eff. 24/08/2022</span></th>
                      <th className="p-4">Warranty &amp; Ownership</th>
                      <th className="p-4">Commitment &amp; Penalty</th>
                      <th className="p-4">Eligible Packages &amp; Bonus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {filteredPackages.map((item) => (
                      <tr key={item.id} className="hover:bg-amber-50/40 transition-colors">
                        <td className="p-4 font-bold text-slate-900">
                          <div className="space-y-1">
                            <span className="block text-sm font-black">{item.name}</span>
                            <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border inline-block ${item.badgeStyle}`}>
                              {item.badge}
                            </span>
                          </div>
                        </td>
                        <td className="p-4 font-mono font-black text-lg text-amber-900 bg-amber-50/70">
                          Rs. {item.withTax}
                        </td>
                        <td className="p-4 font-mono font-bold text-slate-800 text-sm">
                          Rs. {item.withoutTax}
                        </td>
                        <td className="p-4 font-mono text-slate-400 line-through">
                          Rs. {item.priorWithoutTax}
                        </td>
                        <td className="p-4 text-slate-700 space-y-0.5">
                          <span className="font-bold block text-slate-900">{item.warranty}</span>
                          <span className="text-[11px] text-slate-500 block">{item.ownership}</span>
                        </td>
                        <td className="p-4 text-slate-700 space-y-0.5">
                          <span className="font-bold block text-slate-900">{item.commitment}</span>
                          <span className="text-[11px] text-amber-800 font-bold block">{item.terminationFee}</span>
                        </td>
                        <td className="p-4 leading-relaxed text-slate-600 space-y-1">
                          <p className="font-semibold text-slate-800">{item.eligibility}</p>
                          {item.bonusData && (
                            <span className="inline-block px-2 py-0.5 bg-emerald-100 text-emerald-900 font-bold text-[10px] rounded-md border border-emerald-300">
                              🎁 {item.bonusData}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION C: CAT 4 VS CAT 6 COMMERCIAL & TECHNICAL MATRIX  */}
          {/* ======================================================== */}
          <div className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-xs">
            <div className="p-5 border-b border-slate-200 bg-gradient-to-r from-amber-50 to-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-amber-500 text-white rounded-xl">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-base">
                    CAT 4 Basic vs CAT 6 Advanced Tozed Comparison Matrix
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Quick consultation reference to guide customers choosing between CAT 4 and CAT 6 router options.
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 bg-amber-100 text-amber-900 font-bold text-xs rounded-xl border border-amber-300">
                Frontline Sales SOP
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="p-3.5 w-1/4">Feature / Parameter</th>
                    <th className="p-3.5 w-3/8 text-blue-300">CAT 4 Basic CPE</th>
                    <th className="p-3.5 w-3/8 text-amber-300">CAT 6 Tozed Advanced CPE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {HARDWARE_COMPARISON.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">{row.attribute}</td>
                      <td className="p-3.5 text-slate-700">{row.cat4}</td>
                      <td className="p-3.5 font-bold text-amber-900 bg-amber-50/30">{row.cat6}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ======================================================== */}
          {/* SECTION D: TECHNICAL SPEEDS & OWNERSHIP RULES            */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Speed Guidance */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-amber-800 font-black text-xs uppercase tracking-wider">
                <Gauge className="w-5 h-5 text-amber-600" />
                <span>Tozed CAT 6 Average Speeds (SharePoint Certified)</span>
              </div>
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 space-y-2">
                <div className="flex items-baseline justify-between border-b border-amber-200 pb-2">
                  <span className="text-xs font-bold text-amber-900 uppercase">Average Download Speed:</span>
                  <span className="font-mono font-black text-xl text-slate-900">16 Mbps</span>
                </div>
                <div className="flex items-baseline justify-between pt-1">
                  <span className="text-xs font-bold text-amber-900 uppercase">Average Upload Speed:</span>
                  <span className="font-mono font-black text-xl text-slate-900">1 Mbps</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Carrier Aggregation (CA) technology enables the Tozed router to connect to multiple LTE frequency carriers simultaneously (Band 40 2300MHz + Band 3 1800MHz), significantly improving throughput stability in fringe or congested tower sectors.
              </p>
            </div>

            {/* Billing Collection & Ownership SOP */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#005696] font-black text-xs uppercase tracking-wider">
                <Info className="w-5 h-5 text-[#005696]" />
                <span>Collection &amp; Ownership Rules</span>
              </div>
              <div className="space-y-2.5 text-xs text-slate-600 font-medium leading-relaxed">
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-2">
                  <CreditCard className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Mandatory Upfront Collection:</strong>
                    <span>New Connection Charge with Tax must be collected upfront for all CAT 6 options when providing the service (Counter payment, will NOT appear on bill).</span>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Ownership Transfer Schedule:</strong>
                    <span>Ownership of the CPE transfers to the customer at the end of the warranty period (New CPEs: 12 Months | Refurbished CPEs: 6 Months).</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* SECTION E: C-LOG SERVICE ORDER TEMPLATES                 */}
          {/* ======================================================== */}
          <div className="space-y-4">
            <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-600" />
              <span>Contact Center &amp; RTOM C-Log Order Templates</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Template 1: Concessionary New */}
              <div className="bg-slate-900 rounded-3xl border-2 border-slate-800 p-5 shadow-md space-y-3 text-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                    <span className="font-mono text-xs font-bold text-amber-300">
                      C-Log: Concessionary New (Rs. 13,990)
                    </span>
                    <button
                      onClick={() => copyToClipboard(ttCat6ConcessNew, 'tt-c6-new')}
                      className="px-2.5 py-1 bg-amber-600 hover:bg-amber-500 text-white text-[11px] rounded-lg font-bold flex items-center gap-1 transition-colors"
                    >
                      {copiedId === 'tt-c6-new' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedId === 'tt-c6-new' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="text-amber-200/90 font-mono text-[11px] leading-relaxed whitespace-pre-wrap p-2.5 bg-black/30 rounded-xl mt-3 overflow-x-auto">
                    {ttCat6ConcessNew}
                  </pre>
                </div>
              </div>

              {/* Template 2: Concessionary Refurbished */}
              <div className="bg-slate-900 rounded-3xl border-2 border-slate-800 p-5 shadow-md space-y-3 text-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                    <span className="font-mono text-xs font-bold text-blue-300">
                      C-Log: Refurbished (Rs. 6,990)
                    </span>
                    <button
                      onClick={() => copyToClipboard(ttCat6ConcessRefurb, 'tt-c6-ref')}
                      className="px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white text-[11px] rounded-lg font-bold flex items-center gap-1 transition-colors"
                    >
                      {copiedId === 'tt-c6-ref' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedId === 'tt-c6-ref' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="text-blue-200/90 font-mono text-[11px] leading-relaxed whitespace-pre-wrap p-2.5 bg-black/30 rounded-xl mt-3 overflow-x-auto">
                    {ttCat6ConcessRefurb}
                  </pre>
                </div>
              </div>

              {/* Template 3: Full Payment */}
              <div className="bg-slate-900 rounded-3xl border-2 border-slate-800 p-5 shadow-md space-y-3 text-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                    <span className="font-mono text-xs font-bold text-emerald-300">
                      C-Log: Full Payment (Rs. 19,900)
                    </span>
                    <button
                      onClick={() => copyToClipboard(ttCat6FullPay, 'tt-c6-full')}
                      className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] rounded-lg font-bold flex items-center gap-1 transition-colors"
                    >
                      {copiedId === 'tt-c6-full' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedId === 'tt-c6-full' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="text-emerald-200/90 font-mono text-[11px] leading-relaxed whitespace-pre-wrap p-2.5 bg-black/30 rounded-xl mt-3 overflow-x-auto">
                    {ttCat6FullPay}
                  </pre>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Sequential Navigation */}
          <div className="flex items-center justify-between pt-6 border-t-2 border-slate-200">
            <Link
              href="/knowledge-hub/4g-lte/cat-4"
              className="text-sm font-bold text-slate-600 hover:text-slate-900 flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to CAT 4 Charges</span>
            </Link>

            <Link
              href="/knowledge-hub/4g-lte/voice"
              className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm flex items-center gap-2 shadow-sm transition-colors"
            >
              <span>Next: LTE Voice (VoLTE) Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}
