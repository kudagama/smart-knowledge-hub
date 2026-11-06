"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import LteSubpageHeader from '../_components/LteSubpageHeader';
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  FileText,
  Users,
  Grid,
  Phone,
  Info,
  History,
  Calendar,
  Building2,
  Sparkles,
  Layers,
  PhoneCall,
  Search,
  X,
  CreditCard,
  Zap,
  CheckSquare
} from 'lucide-react';

// =========================================================================
// 1. HISTORICAL RATE COMPARISON DATA (PRE-20TH JANUARY 2017)
// =========================================================================
const OLD_CALL_CHARGES_MATRIX = [
  {
    feature: 'Monthly Rental (Rs.)',
    residential: '310',
    business: '499',
    unit: 'Per month',
    highlight: true
  },
  {
    feature: 'On-net Active Hrs (Up to 3rd min)',
    residential: 'Rs. 1.70 / min',
    business: 'Rs. 1.70 / min',
    unit: 'Per minute'
  },
  {
    feature: 'On-net Active Hrs (Beyond 3rd min)',
    residential: 'Rs. 1.00 / min',
    business: 'Rs. 1.00 / min',
    unit: 'Stepped rate'
  },
  {
    feature: 'On-net Leisure Hrs (Up to 3rd min)',
    residential: 'Rs. 1.70 / min',
    business: 'Rs. 1.70 / min',
    unit: 'Per minute'
  },
  {
    feature: 'On-net Leisure Hrs (Beyond 3rd min)',
    residential: 'Rs. 1.00 / min',
    business: 'Rs. 1.00 / min',
    unit: 'Stepped rate'
  },
  {
    feature: 'Off-net Calls (Active Hours)',
    residential: 'Rs. 2.70 / min',
    business: 'Rs. 2.70 / min',
    unit: 'Per minute'
  },
  {
    feature: 'Off-net Calls (Leisure Hours)',
    residential: 'Rs. 2.00 / min',
    business: 'Rs. 2.00 / min',
    unit: 'Discounted leisure'
  },
  {
    feature: 'Free Minutes Included',
    residential: '100 Minutes (On-net)',
    business: 'NA (No free minutes)',
    unit: 'Monthly quota'
  },
  {
    feature: 'Data Allowance',
    residential: 'Based on the BB Package',
    business: 'Based on the BB Package',
    unit: 'LTE Broadband'
  },
  {
    feature: 'Free Value Added Services (VAS)',
    residential: 'VAS Bundle Included',
    business: 'VAS Bundle Included',
    unit: 'CLI, Call Forwarding, Call Waiting, 3-Party Conferencing, Absentee, Abbreviated Dialing'
  }
];

// =========================================================================
// 2. CALL TIME BANDS SPECIFICATION (PRE-2017)
// =========================================================================
const TIME_BANDS_DATA = [
  {
    type: 'Active Hours for Voice',
    days: 'Monday to Friday',
    hours: '0700 hrs. to 1900 hrs. (7:00 AM – 7:00 PM)',
    details: 'Daytime stepped on-net rate: Rs. 1.70 (1-3 min) / Rs. 1.00 (>3 min) | Off-net: Rs. 2.70'
  },
  {
    type: 'Active Hours for Voice',
    days: 'Saturday',
    hours: '0700 hrs. to 1400 hrs. (7:00 AM – 2:00 PM)',
    details: 'Half-day Saturday active calling window.'
  },
  {
    type: 'Leisure Hours for Voice',
    days: 'Monday to Friday',
    hours: '0000 hrs. to 0700 hrs. & 1900 hrs. to 2400 hrs.',
    details: 'Night & early morning leisure rates: Off-net drops from Rs. 2.70 to Rs. 2.00'
  },
  {
    type: 'Leisure Hours for Voice',
    days: 'Saturday',
    hours: '0000 hrs. to 0700 hrs. & 1400 hrs. to 2400 hrs.',
    details: 'Saturday afternoon (post 2:00 PM) leisure rates apply automatically.'
  },
  {
    type: 'Leisure Hours for Voice',
    days: 'Sunday & Public Holidays',
    hours: 'Full Day (24 Hours) 0000 hrs. to 2400 hrs.',
    details: 'All calls billed at leisure rates throughout the entire day.'
  }
];

export default function LteOldCallChargesPage() {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const oldChargesSummary = `SERVICE: SLT 4G LTE Old Voice Call Charges (Before 20th January 2017)
RESIDENTIAL: Monthly Rental Rs. 310 | Free Minutes: 100 On-net | On-net: Rs. 1.70 (1-3 min) / Rs. 1.00 (>3 min) | Off-net Active: Rs. 2.70 | Leisure: Rs. 2.00
BUSINESS: Monthly Rental Rs. 499 | Free Minutes: NA | On-net: Rs. 1.70 (1-3 min) / Rs. 1.00 (>3 min) | Off-net Active: Rs. 2.70 | Leisure: Rs. 2.00
VAS BUNDLE: CLI, Call Forwarding, Call Waiting, Conferencing (3 parties), Absentee service & Abbreviated dialing.
ACTIVE HOURS: Mon-Fri 0700-1900 | Sat 0700-1400
LEISURE HOURS: Mon-Fri 1900-0700 | Sat post 1400 | Sun & Public Holidays Full Day
UPGRADE RECOMMENDATION: Offer Unlimited Any-Net Double Play Rs. 747 (Flat rate to ANY network, no commitment period).`;

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f1f5f9] overflow-y-auto select-none text-slate-800">
      
      {/* UNIFIED SHAREPOINT PORTAL HEADER & 9-TOPIC QUICK SWITCHER */}
      <LteSubpageHeader
        currentTopicId="old-charges"
        title="LTE Old Call Charges (Before 20th January 2017)"
        subtitle="Historical call tariff matrix for SLT 4G LTE fixed voice services activated before 20th January 2017. Reference sheet for grandfathered accounts, billing dispute resolution, and migration comparisons against current Unlimited Rs. 747 plans."
        badge="Historical Archive"
        badgeStyle="bg-slate-400/20 text-slate-300 border-slate-300/30"
        taxDate="Effective: Pre-20th Jan 2017 | Published: 11/4/2024"
        author="Chathurani Rathnayake"
        authorRole="Senior Assistant Manager (Customer Relations)-A7"
        icon={History}
        stats={[
          { label: 'Old Residential', value: 'Rs. 310', sub: '+ 100 Free On-Net Mins' },
          { label: 'Old Business', value: 'Rs. 499', sub: 'Metered Voice + VAS Bundle' },
          { label: 'Off-Net Peak', value: 'Rs. 2.70', sub: 'Rs. 2.00 in Leisure Hours' },
          { label: 'Upgrade Target', value: 'Rs. 747', sub: 'Unlimited Any-Net VoLTE' }
        ]}
      />

      {/* 4. TOOLBAR */}
      <div className="bg-white border-b border-slate-300 px-6 py-3.5 sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-600" />
              <span>Accounts Registered Prior to 20th January 2017</span>
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-amber-50 text-amber-900 font-bold text-xs border border-amber-200 hidden sm:inline-block">
              Grandfathered Tariffs
            </span>
          </div>

          <div className="flex items-center bg-slate-100 p-1 rounded-xl shrink-0">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'cards' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Side-by-Side Cards
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'table' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Comparison Matrix
            </button>
          </div>

        </div>
      </div>

      {/* 5. MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-8 space-y-8">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* ======================================================== */}
          {/* SECTION 1: SIDE-BY-SIDE RESIDENTIAL VS BUSINESS CARDS    */}
          {/* ======================================================== */}
          {viewMode === 'cards' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Residential Card */}
              <div className="bg-white rounded-3xl border-2 border-slate-200 hover:border-[#005696] p-7 shadow-xs hover:shadow-md transition-all space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#005696] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                      Residential Plan (Pre-2017)
                    </span>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      100 On-Net Free Mins
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-900">
                      Residential Old Call Charges
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      Fixed 4G voice rate plan for home subscribers activated before 20th January 2017.
                    </p>
                  </div>

                  {/* Monthly Rental Box */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        Monthly Rental
                      </span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-sm font-bold text-slate-500">Rs.</span>
                        <span className="text-3xl font-black text-slate-900">310</span>
                        <span className="text-xs text-slate-500 font-medium">/ month</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-white rounded-xl border border-slate-200 text-slate-700 font-bold text-xs">
                      Postpaid
                    </span>
                  </div>

                  {/* Call Rate Breakdown */}
                  <div className="space-y-2 text-xs">
                    <div className="p-3 bg-blue-50/70 rounded-2xl border border-blue-100 space-y-1.5">
                      <span className="font-black text-[#005696] uppercase text-[10px] tracking-wide block">
                        On-Net Call Charges (SLT to SLT / Mobitel)
                      </span>
                      <div className="flex items-center justify-between text-slate-700">
                        <span>Active Hours (Up to 3rd min):</span>
                        <span className="font-mono font-bold text-slate-900">Rs. 1.70 / min</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-700">
                        <span>Active Hours (Beyond 3rd min):</span>
                        <span className="font-mono font-bold text-emerald-700">Rs. 1.00 / min</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-700 pt-1 border-t border-blue-200/60">
                        <span>Leisure Hours (Up to 3rd min):</span>
                        <span className="font-mono font-bold text-slate-900">Rs. 1.70 / min</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-700">
                        <span>Leisure Hours (Beyond 3rd min):</span>
                        <span className="font-mono font-bold text-emerald-700">Rs. 1.00 / min</span>
                      </div>
                    </div>

                    <div className="p-3 bg-purple-50/70 rounded-2xl border border-purple-100 space-y-1.5">
                      <span className="font-black text-purple-900 uppercase text-[10px] tracking-wide block">
                        Off-Net Call Charges (Dialog, Airtel, Hutch)
                      </span>
                      <div className="flex items-center justify-between text-slate-700">
                        <span>Active Hours:</span>
                        <span className="font-mono font-bold text-purple-950">Rs. 2.70 / min</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-700">
                        <span>Leisure Hours:</span>
                        <span className="font-mono font-bold text-purple-950">Rs. 2.00 / min</span>
                      </div>
                    </div>
                  </div>

                  {/* Free Value Added Services & Data */}
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-bold">Data Quota:</span>
                      <span className="font-semibold text-slate-800">Based on the BB Package</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-bold">Free VAS Bundle:</span>
                      <span className="font-semibold text-emerald-700">CLI, Forwarding, Waiting, 3-Party Conf, Absentee</span>
                    </div>
                  </div>

                </div>

                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400">Pre-2017 Plan</span>
                  <button
                    onClick={() => copyToClipboard(`SERVICE: 4G LTE Old Voice (Pre-2017)\nPLAN: Residential (Rs. 310)\nFREE MINS: 100 On-net\nON-NET: Rs. 1.70 (1-3 min) / Rs. 1.00 (>3 min)\nOFF-NET: Rs. 2.70 (Active) / Rs. 2.00 (Leisure)`, 'res-old')}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#005696] font-bold text-xs flex items-center gap-1.5 transition-colors border border-slate-200"
                  >
                    {copiedId === 'res-old' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === 'res-old' ? 'Copied' : 'Copy Rates'}</span>
                  </button>
                </div>
              </div>

              {/* Business Card */}
              <div className="bg-white rounded-3xl border-2 border-slate-200 hover:border-purple-600 p-7 shadow-xs hover:shadow-md transition-all space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-purple-900 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                      Business Plan (Pre-2017)
                    </span>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                      NA Free Minutes
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-900">
                      Business Old Call Charges
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      Fixed 4G voice rate plan for commercial and corporate subscribers activated before 20th January 2017.
                    </p>
                  </div>

                  {/* Monthly Rental Box */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        Monthly Rental
                      </span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-sm font-bold text-slate-500">Rs.</span>
                        <span className="text-3xl font-black text-slate-900">499</span>
                        <span className="text-xs text-slate-500 font-medium">/ month</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-white rounded-xl border border-slate-200 text-slate-700 font-bold text-xs">
                      Postpaid
                    </span>
                  </div>

                  {/* Call Rate Breakdown */}
                  <div className="space-y-2 text-xs">
                    <div className="p-3 bg-blue-50/70 rounded-2xl border border-blue-100 space-y-1.5">
                      <span className="font-black text-[#005696] uppercase text-[10px] tracking-wide block">
                        On-Net Call Charges (SLT to SLT / Mobitel)
                      </span>
                      <div className="flex items-center justify-between text-slate-700">
                        <span>Active Hours (Up to 3rd min):</span>
                        <span className="font-mono font-bold text-slate-900">Rs. 1.70 / min</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-700">
                        <span>Active Hours (Beyond 3rd min):</span>
                        <span className="font-mono font-bold text-emerald-700">Rs. 1.00 / min</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-700 pt-1 border-t border-blue-200/60">
                        <span>Leisure Hours (Up to 3rd min):</span>
                        <span className="font-mono font-bold text-slate-900">Rs. 1.70 / min</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-700">
                        <span>Leisure Hours (Beyond 3rd min):</span>
                        <span className="font-mono font-bold text-emerald-700">Rs. 1.00 / min</span>
                      </div>
                    </div>

                    <div className="p-3 bg-purple-50/70 rounded-2xl border border-purple-100 space-y-1.5">
                      <span className="font-black text-purple-900 uppercase text-[10px] tracking-wide block">
                        Off-Net Call Charges (Dialog, Airtel, Hutch)
                      </span>
                      <div className="flex items-center justify-between text-slate-700">
                        <span>Active Hours:</span>
                        <span className="font-mono font-bold text-purple-950">Rs. 2.70 / min</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-700">
                        <span>Leisure Hours:</span>
                        <span className="font-mono font-bold text-purple-950">Rs. 2.00 / min</span>
                      </div>
                    </div>
                  </div>

                  {/* Free Value Added Services & Data */}
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-bold">Data Quota:</span>
                      <span className="font-semibold text-slate-800">Based on the BB Package</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-bold">Free VAS Bundle:</span>
                      <span className="font-semibold text-purple-900">CLI, Call Forwarding, Waiting, 3-Party Conf, Absentee</span>
                    </div>
                  </div>

                </div>

                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400">Pre-2017 Plan</span>
                  <button
                    onClick={() => copyToClipboard(`SERVICE: 4G LTE Old Voice (Pre-2017)\nPLAN: Business (Rs. 499)\nFREE MINS: NA\nON-NET: Rs. 1.70 (1-3 min) / Rs. 1.00 (>3 min)\nOFF-NET: Rs. 2.70 (Active) / Rs. 2.00 (Leisure)`, 'biz-old')}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-purple-50 text-slate-700 hover:text-purple-900 font-bold text-xs flex items-center gap-1.5 transition-colors border border-slate-200"
                  >
                    {copiedId === 'biz-old' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === 'biz-old' ? 'Copied' : 'Copy Rates'}</span>
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 2: FULL COMPARISON MATRIX TABLE                  */}
          {/* ======================================================== */}
          {viewMode === 'table' && (
            <div className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-xs space-y-4 p-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-black text-xl text-slate-900">
                  LTE Voice Call Charges (Before 20th January 2017) – Exact Comparison Table
                </h3>
                <span className="px-3 py-1 bg-slate-100 rounded-xl text-slate-600 text-xs font-bold">
                  Official SharePoint Specification
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white font-black">
                      <th className="p-4 w-1/3">Tariff Element / Rule</th>
                      <th className="p-4 text-cyan-300">Residential (Pre-2017)</th>
                      <th className="p-4 text-purple-300">Business (Pre-2017)</th>
                      <th className="p-4 text-slate-400">Unit / Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {OLD_CALL_CHARGES_MATRIX.map((row, idx) => (
                      <tr key={idx} className={`hover:bg-slate-50 transition-colors ${row.highlight ? 'bg-amber-50/50 font-black' : ''}`}>
                        <td className="p-4 font-bold text-slate-900">{row.feature}</td>
                        <td className="p-4 font-mono font-bold text-cyan-900">{row.residential}</td>
                        <td className="p-4 font-mono font-bold text-purple-950">{row.business}</td>
                        <td className="p-4 text-slate-500 text-[11px]">{row.unit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 3: CALL TIME BANDS (ACTIVE VS LEISURE HOURS)     */}
          {/* ======================================================== */}
          <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 text-slate-900 font-black text-base border-b border-slate-100 pb-3">
              <Clock className="w-5 h-5 text-teal-600" />
              <span>Call Time Bands Definition (Active vs Leisure Hours)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {TIME_BANDS_DATA.map((band, bIdx) => (
                <div
                  key={bIdx}
                  className={`p-4 rounded-2xl border space-y-2 ${
                    band.type.includes('Active')
                      ? 'bg-blue-50/60 border-blue-200'
                      : 'bg-emerald-50/60 border-emerald-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                      band.type.includes('Active')
                        ? 'bg-blue-600 text-white'
                        : 'bg-emerald-600 text-white'
                    }`}>
                      {band.type}
                    </span>
                    <span className="text-xs font-bold text-slate-600">{band.days}</span>
                  </div>

                  <div className="font-mono font-black text-sm text-slate-900">
                    {band.hours}
                  </div>

                  <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                    {band.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ======================================================== */}
          {/* SECTION 4: FREE VALUE ADDED SERVICES (VAS BUNDLE)        */}
          {/* ======================================================== */}
          <div className="bg-white rounded-3xl border-2 border-indigo-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-indigo-100 pb-3">
              <div className="flex items-center gap-2.5 text-indigo-950 font-black text-base">
                <Layers className="w-5 h-5 text-indigo-600" />
                <span>Free Value-Added Services (VAS Bundle)</span>
              </div>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-900 rounded-full font-bold text-xs border border-indigo-200">
                Included Free in Both Residential &amp; Business
              </span>
            </div>

            <p className="text-xs text-slate-600 font-medium">
              The following features are bundled into all grandfathered 4G LTE voice lines without extra charge:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" />
                <span className="font-bold text-slate-800 block">CLI</span>
                <span className="text-[10px] text-slate-500">Caller ID</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" />
                <span className="font-bold text-slate-800 block">Call Forwarding</span>
                <span className="text-[10px] text-slate-500">Divert on busy</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" />
                <span className="font-bold text-slate-800 block">Call Waiting</span>
                <span className="text-[10px] text-slate-500">2nd incoming call</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" />
                <span className="font-bold text-slate-800 block">Conferencing</span>
                <span className="text-[10px] text-slate-500">Three parties</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" />
                <span className="font-bold text-slate-800 block">Absentee</span>
                <span className="text-[10px] text-slate-500">Announcement</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" />
                <span className="font-bold text-slate-800 block">Abbreviated</span>
                <span className="text-[10px] text-slate-500">Speed dialing</span>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* SECTION 5: FRONTLINE UPGRADE RECOMMENDATION TO RS. 747   */}
          {/* ======================================================== */}
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl border-2 border-teal-300 p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-teal-900 font-black text-sm uppercase tracking-wider">
              <Sparkles className="w-5 h-5 text-teal-600" />
              <span>Customer Consultation Advice: Why Upgrade to Unlimited Voice (Rs. 747)?</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              A legacy residential customer paying Rs. 310 monthly rental who talks for just <strong>2.5 minutes a day</strong> (approx. Rs. 437 in metered calls) spends over <strong>Rs. 747 per month</strong> on voice bills!
            </p>
            <div className="p-3 bg-white rounded-xl border border-teal-200 text-xs text-teal-950 font-bold flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span>
                Recommendation: Proactively advise the subscriber to migrate to <strong>Unltd LTE Home Double Play Rs. 747</strong> or <strong>Unltd Voice Pal Basic Rs. 747</strong> for 100% Unlimited calls to ALL local networks with zero commitment period.
              </span>
              <Link
                href="/knowledge-hub/4g-lte/voice"
                className="px-3.5 py-1.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs shrink-0 transition-colors"
              >
                View Unlimited Plans
              </Link>
            </div>
          </div>

          {/* ======================================================== */}
          {/* SECTION 6: C-LOG REFERENCE SNIPPET                       */}
          {/* ======================================================== */}
          <div className="bg-slate-900 rounded-3xl border-2 border-slate-800 p-6 shadow-md space-y-3 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-slate-400" />
                <span className="font-mono text-sm font-bold text-slate-300">
                  C-Log Reference: Legacy LTE Call Rate Verification Note
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(oldChargesSummary, 'tt-old')}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-xs rounded-xl font-bold flex items-center gap-2 transition-colors shadow-xs"
              >
                {copiedId === 'tt-old' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                <span>{copiedId === 'tt-old' ? 'Copied Note!' : 'Copy Reference'}</span>
              </button>
            </div>
            <pre className="text-slate-300 font-mono text-xs leading-relaxed whitespace-pre-wrap p-2 bg-black/30 rounded-xl overflow-x-auto">
              {oldChargesSummary}
            </pre>
          </div>

          {/* Bottom Sequential Navigation */}
          <div className="flex items-center justify-between pt-6 border-t-2 border-slate-200">
            <Link
              href="/knowledge-hub/4g-lte/broadband"
              className="text-sm font-bold text-slate-600 hover:text-slate-900 flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back: LTE BB Packages</span>
            </Link>

            <Link
              href="/knowledge-hub/4g-lte/prepaid"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center gap-2 shadow-sm transition-colors"
            >
              <span>Next: 4G LTE Prepaid Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}
