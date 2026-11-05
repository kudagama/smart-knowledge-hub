"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Clock,
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
  Phone,
  Info
} from 'lucide-react';

const OLD_CALL_CHARGES = [
  { feature: 'Monthly Rental', residential: 'Rs. 310', business: 'Rs. 499' },
  { feature: 'On-net (Active Hours)', residential: 'Rs. 1.70 per min', business: 'Up to 3rd min: Rs. 1.70 | Beyond: Rs. 1.00' },
  { feature: 'On-net (Leisure Hours)', residential: 'Rs. 1.00 per min', business: 'Up to 3rd min: Rs. 1.70 | Beyond: Rs. 1.00' },
  { feature: 'Off-net (Active Hours)', residential: 'Rs. 2.70 per min', business: 'Rs. 2.70 per min' },
  { feature: 'Off-net (Leisure Hours)', residential: 'Rs. 2.00 per min', business: 'Rs. 2.00 per min' },
  { feature: 'Free Minutes', residential: '100 Minutes (On-net)', business: 'NA' },
  { feature: 'Data Allowance', residential: 'Based on the BB Package', business: 'Based on the BB Package' },
  {
    feature: 'Free Value Added Services (VAS)',
    residential: 'VAS Bundle included',
    business: 'CLI, Call Forwarding, Call Waiting, Conferencing (Three parties), Absentee service, Abbreviated dialing'
  }
];

export default function LteOldCallChargesPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const oldChargesSummary = `SERVICE: SLT 4G LTE Historical Call Rates (Pre-20th Jan 2017)
RESIDENTIAL: Rental Rs. 310 | On-net Active: Rs. 1.70/min | Leisure: Rs. 1.00/min | Off-net: Rs. 2.70/min | Free Min: 100 On-net
BUSINESS: Rental Rs. 499 | On-net: Rs. 1.70 (1st 3 mins) / Rs. 1.00 (>3 mins) | Off-net: Rs. 2.70/min | Free VAS: CLI, Call Forwarding, Hunting, Conferencing.`;

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f4f7f9] overflow-y-auto select-none">
      
      {/* 1. TOP SHAREPOINT BAR */}
      <div className="bg-[#005a9c] text-white px-4 py-2 flex items-center justify-between text-xs shadow-xs shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/knowledge-hub" className="flex items-center gap-1.5 cursor-pointer hover:opacity-80">
            <Grid className="w-4 h-4 text-white" />
            <span className="font-bold tracking-tight text-sm">SharePoint</span>
          </Link>
          <span className="text-xs text-slate-200">| LTE Historical Call Rates</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="hidden sm:inline text-cyan-100 font-medium">SLT-Mobitel Intranet</span>
          <div className="w-7 h-7 rounded-full bg-cyan-700 border border-cyan-400 flex items-center justify-center font-bold text-[11px] text-white">
            CR
          </div>
        </div>
      </div>

      {/* 2. BREADCRUMB */}
      <div className="bg-white border-b border-slate-200 px-6 py-2.5 flex items-center justify-between text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Link href="/knowledge-hub/4g-lte" className="text-[#005696] font-bold hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to 4G LTE Services
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/knowledge-hub" className="hover:underline">Knowledge Hub</Link>
          <span className="text-slate-300">/</span>
          <Link href="/knowledge-hub/4g-lte" className="hover:underline">4G LTE</Link>
          <span className="text-slate-300">/</span>
          <span className="font-bold text-slate-700">Historical Call Charges</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-300 text-xs font-mono font-bold">
            Pre-Jan 2017 Schedule
          </span>
        </div>
      </div>

      {/* 3. HERO BANNER */}
      <div className="relative bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-950 text-white px-8 py-8 overflow-hidden border-b border-slate-800">
        <div className="max-w-6xl mx-auto space-y-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-500/20 text-slate-300 border border-slate-400/30">
              Historical Reference
            </span>
            <span className="text-xs text-slate-300">Applicable for Legacy Accounts Activated Before 20th January 2017</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-slate-700/30 border border-slate-600/40">
              <Clock className="w-6 h-6 text-slate-300" />
            </div>
            <span>LTE Old Call Charges (Pre-2017 Archive)</span>
          </h1>

          <p className="text-xs text-slate-300 max-w-3xl font-medium leading-relaxed">
            Historical call tariff schedule for contact center reference. Published on 11/4/2024 by Chathurani Rathnayake.
          </p>
        </div>
      </div>

      {/* 4. MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-8 space-y-6">
        <div className="max-w-6xl mx-auto space-y-6">

          {/* Table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs space-y-2 p-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-black text-slate-900">
                  Residential vs Business Legacy Call Charges
                </h3>
                <p className="text-xs text-slate-500">
                  Use this historical schedule when handling dispute queries from long-standing subscribers who have not migrated to modern VoLTE Unlimited plans.
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(oldChargesSummary, 'copy-old')}
                className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg border border-slate-300 flex items-center gap-1.5 transition-all"
              >
                {copiedId === 'copy-old' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedId === 'copy-old' ? 'Copied Rates!' : 'Copy Summary'}</span>
              </button>
            </div>

            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-black">
                    <th className="p-3.5 w-1/3">Feature / Tariff Detail</th>
                    <th className="p-3.5 text-[#005696]">Residential Schedule</th>
                    <th className="p-3.5 text-indigo-900">Business Schedule</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {OLD_CALL_CHARGES.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 font-bold text-slate-800">{row.feature}</td>
                      <td className="p-3.5 font-mono text-slate-700 whitespace-pre-wrap">{row.residential}</td>
                      <td className="p-3.5 font-mono text-slate-700 whitespace-pre-wrap">{row.business}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Migration Recommendation */}
          <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase text-[#005696] tracking-wider">
                Recommended Customer Action
              </span>
              <p className="text-sm font-bold text-slate-900">
                Advise Legacy Subscribers to Migrate to New Unlimited VoLTE Rs. 745
              </p>
              <p className="text-xs text-slate-600">
                Customers on old per-minute rates can save substantially by upgrading to the flat-rate Rs. 745 Unlimited plan with free number retention.
              </p>
            </div>

            <Link
              href="/knowledge-hub/4g-lte/voice"
              className="px-4 py-2 rounded-xl bg-[#005696] hover:bg-[#004780] text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors shrink-0"
            >
              <span>View Modern VoLTE Plans</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between pt-2">
            <Link
              href="/knowledge-hub/4g-lte/prepaid"
              className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Prepaid Services</span>
            </Link>

            <Link
              href="/knowledge-hub/4g-lte/other-charges"
              className="px-4 py-2 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <span>Next: Other Charges – LTE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}

