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
  Calendar
} from 'lucide-react';

const CAT6_CHARGES = [
  {
    id: 'cat6_new_concess',
    package: 'Concessionary - New (CPE Model - Tozed CAT 6)',
    type: 'concessionary_new',
    withoutTax: '11,327.94',
    priorWithoutTax: '6,900',
    withTax: '13,990',
    priorWithTax: '—',
    badge: 'Tozed New Unit',
    badgeStyle: 'bg-amber-100 text-amber-900 border-amber-300',
    warranty: '12 Months Warranty (Ownership transferred after 12 mos)',
    commitment: '1 Year commitment period. Early termination fee: Rs. 5,000',
    cpeSpecs: 'CAT 6 High Throughput CPE with Carrier Aggregation (CA)',
    eligibility: 'Only applicable for Broadband packages Rs. 2,390 (1,990) and above',
    highlight: true
  },
  {
    id: 'cat6_refurb_concess',
    package: 'Concessionary - Refurbished (CPE Model - Tozed CAT 6)',
    type: 'concessionary_refurb',
    withoutTax: '5,659.92',
    priorWithoutTax: '3,450',
    withTax: '6,990',
    priorWithTax: '—',
    badge: 'Refurbished Economical',
    badgeStyle: 'bg-blue-100 text-blue-900 border-blue-300',
    warranty: '6 Months Warranty (Ownership transferred after 6 mos)',
    commitment: '1 Year commitment period. Early termination fee: Rs. 5,000',
    cpeSpecs: 'Tested & Certified CAT 6 Tozed CPE',
    eligibility: 'Only applicable for Broadband packages Rs. 2,390 (1,990) and above',
    highlight: false
  },
  {
    id: 'cat6_full_pay',
    package: 'Full Payment - New (CPE Model - Tozed CAT 6)',
    type: 'full_payment',
    withoutTax: '16,186.23',
    priorWithoutTax: '12,000',
    withTax: '19,900',
    priorWithTax: '—',
    badge: 'Free 300GB Bonus Data',
    badgeStyle: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    bonusData: '25 GB / Month for first 12 months (Free 300 GB total bonus data)',
    warranty: '12 Months Warranty (Instant Customer Ownership)',
    commitment: 'Zero commitment period. No early termination fee.',
    cpeSpecs: 'CAT 6 High Throughput CPE with Carrier Aggregation (CA)',
    eligibility: 'Any Broadband package (Bonus data not applicable for Unlimited plans)',
    highlight: true
  }
];

export default function LteCat6ChargesPage() {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const ttCat6FullPay = `SERVICE: SLT-Mobitel 4G LTE Fixed Broadband
TARIFF OPTION: New Connection (CAT 6 Advanced CPE - Tozed Full Payment)
ROUTER MODEL: Tozed CAT 6 High-Throughput (Carrier Aggregation)
PRICE WITH TAX: Rs. 19,900 (Revised eff. 01/08/2024)
BASE PRICE WITHOUT TAX: Rs. 16,186.23 (Prior base Rs. 12,000)
SPECIAL BENEFIT: 25GB Free Bonus Data / month for first 12 months (Total 300GB).
WARRANTY: 12 Months (Full customer ownership transferred immediately).
COMMITMENT: None (No early termination fee).
TARGET: BROADBAND-PROVISIONING / FRONT-OFFICE`;

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f1f5f9] overflow-y-auto select-none text-slate-800">
      
      {/* UNIFIED SHAREPOINT PORTAL HEADER & 9-TOPIC QUICK SWITCHER */}
      <LteSubpageHeader
        currentTopicId="cat-6"
        title="LTE New Connection Charges (CAT 6)"
        subtitle="Official connection charges for Advanced Tozed CAT 6 routers with Carrier Aggregation. High-throughput performance, 25 GB monthly bonus data for 12 months on full pay, and concessionary options."
        badge="Advanced CAT 6 (Tozed)"
        badgeStyle="bg-amber-400/20 text-amber-300 border-amber-300/30"
        taxDate="Published: 6/13/2025 | Revised with Tax: 01/08/2024"
        author="Chathurani Rathnayake"
        authorRole="Senior Assistant Manager (Customer Relations) - A7"
        icon={Zap}
        stats={[
          { label: 'Concessionary New', value: 'Rs. 13,990', sub: 'With Tax (Base: Rs. 11,328)' },
          { label: 'Refurbished Unit', value: 'Rs. 6,990', sub: '6 Mos Warranty' },
          { label: 'Full Pay Bonus', value: '+25 GB/Mo', sub: 'Free for 12 Mos (300 GB)' }
        ]}
      />

      {/* 4. NAVIGATION TOOLBAR */}
      <div className="bg-white border-b border-slate-300 px-6 py-3.5 sticky top-0 z-20 shadow-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3.5">
          
          <div className="flex items-center gap-2">
            <span className="font-black text-slate-800 uppercase tracking-wider text-xs flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-amber-600" />
              <span>Available CAT 6 Tozed Options (3 Plans)</span>
            </span>
          </div>

          {/* Toggle View Mode */}
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

      {/* 5. MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* ======================================================== */}
          {/* SECTION A: CARDS VIEW MODE                               */}
          {/* ======================================================== */}
          {viewMode === 'cards' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CAT6_CHARGES.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-3xl border-2 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group ${
                    item.highlight ? 'border-amber-300 bg-amber-50/15' : 'border-slate-200'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top Row: Badge */}
                    <div className="flex items-start justify-between gap-2">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.badgeStyle}`}>
                        {item.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-black text-lg md:text-xl text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                      {item.package}
                    </h3>

                    {/* Price Block */}
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          With Tax (eff. 01/08/2024)
                        </span>
                        <div className="flex items-baseline gap-1 mt-0.5">
                          <span className="text-sm font-bold text-slate-500">Rs.</span>
                          <span className="text-3xl font-black text-amber-700">{item.withTax}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          Without Tax
                        </span>
                        <span className="font-mono text-sm font-bold text-slate-600">
                          Rs. {item.withoutTax}
                        </span>
                        <span className="block text-[10px] text-slate-400 line-through">
                          Prior: Rs. {item.priorWithoutTax}
                        </span>
                      </div>
                    </div>

                    {/* Bonus Data Highlight if Available */}
                    {item.bonusData && (
                      <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center gap-2.5">
                        <Gift className="w-5 h-5 text-emerald-600 shrink-0" />
                        <div className="text-xs text-emerald-950 font-bold">
                          <span>{item.bonusData}</span>
                        </div>
                      </div>
                    )}

                    {/* Details List */}
                    <div className="space-y-1.5 text-xs text-slate-600 font-medium">
                      <p className="flex items-start gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span><strong>Warranty:</strong> {item.warranty}</span>
                      </p>
                      <p className="flex items-start gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                        <span><strong>Commitment:</strong> {item.commitment}</span>
                      </p>
                      <p className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Eligibility:</strong> {item.eligibility}</span>
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400">Carrier Aggregation</span>
                    <button
                      onClick={() => copyToClipboard(`PACKAGE: ${item.package}\nWITH TAX: Rs. ${item.withTax}\nWITHOUT TAX: Rs. ${item.withoutTax}\nWARRANTY: ${item.warranty}\nCONDITIONS: ${item.eligibility}`, item.id)}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-amber-50 text-slate-700 hover:text-amber-900 font-bold text-xs flex items-center gap-1.5 transition-colors border border-slate-200"
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
                      <th className="p-4 w-1/3">Package (CAT 6 - Advanced Tozed Models)</th>
                      <th className="p-4">Without Tax (Rs.)<br/><span className="text-[10px] text-slate-400 font-normal">(Base Rate)</span></th>
                      <th className="p-4 text-amber-300">With Tax (Rs.)<br/><span className="text-[10px] text-amber-400 font-normal">(eff. 01/08/2024)</span></th>
                      <th className="p-4">Prior Base</th>
                      <th className="p-4">Special Conditions &amp; Bonus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {CAT6_CHARGES.map((item) => (
                      <tr key={item.id} className="hover:bg-amber-50/40 transition-colors">
                        <td className="p-4 font-bold text-slate-900">
                          <div className="space-y-1">
                            <span className="block text-sm">{item.package}</span>
                            <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border inline-block ${item.badgeStyle}`}>
                              {item.badge}
                            </span>
                          </div>
                        </td>
                        <td className="p-4 font-mono font-bold text-slate-700">
                          Rs. {item.withoutTax}
                        </td>
                        <td className="p-4 font-mono font-black text-base text-amber-700">
                          Rs. {item.withTax}
                        </td>
                        <td className="p-4 font-mono text-slate-400 line-through">
                          Rs. {item.priorWithoutTax}
                        </td>
                        <td className="p-4 leading-relaxed text-slate-600 space-y-1">
                          <p>{item.warranty}</p>
                          <p className="text-amber-800 font-bold">{item.commitment}</p>
                          {item.bonusData && <p className="text-emerald-700 font-black">{item.bonusData}</p>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION C: TECHNICAL SPECIFICATIONS & SPEEDS             */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Speed Guidance */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-amber-800 font-black text-xs uppercase tracking-wider">
                <Gauge className="w-5 h-5 text-amber-600" />
                <span>Tozed CAT 6 Average Speeds</span>
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
              <p className="text-xs text-slate-500 font-medium">
                Carrier Aggregation (CA) combines multiple frequency bands simultaneously (Band 40 + Band 3) to ensure stable connection even during heavy sector congestion.
              </p>
            </div>

            {/* Billing Collection SOP */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#005696] font-black text-xs uppercase tracking-wider">
                <Info className="w-5 h-5 text-[#005696]" />
                <span>Collection &amp; Ownership Rules</span>
              </div>
              <div className="space-y-2 text-xs text-slate-600 font-medium leading-relaxed">
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                  <strong className="text-slate-900 block mb-0.5">Mandatory Upfront Collection:</strong>
                  <span>New Connection Charge with Tax must be collected upfront for all CAT 6 options when providing the service.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                  <strong className="text-slate-900 block mb-0.5">Device Ownership:</strong>
                  <span>Ownership is transferred to the customer after the warranty period (New: 12 Months, Refurbished: 6 Months).</span>
                </div>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* SECTION D: C-LOG SERVICE ORDER TEMPLATE                  */}
          {/* ======================================================== */}
          <div className="bg-slate-900 rounded-3xl border-2 border-slate-800 p-6 shadow-md space-y-3 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-amber-400" />
                <span className="font-mono text-sm font-bold text-amber-300">
                  C-Log Service Order: Tozed CAT 6 Full Payment Activation (Rs. 19,900)
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(ttCat6FullPay, 'tt-cat6')}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs rounded-xl font-bold flex items-center gap-2 transition-colors shadow-xs"
              >
                {copiedId === 'tt-cat6' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                <span>{copiedId === 'tt-cat6' ? 'Copied Template!' : 'Copy Order Template'}</span>
              </button>
            </div>
            <pre className="text-amber-200 font-mono text-xs leading-relaxed whitespace-pre-wrap p-2 bg-black/30 rounded-xl overflow-x-auto">
              {ttCat6FullPay}
            </pre>
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
