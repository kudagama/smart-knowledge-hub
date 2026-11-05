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
  Info,
  History,
  Calendar,
  Building2,
  Sparkles,
  Layers,
  ArrowUpRight
} from 'lucide-react';

const OLD_CALL_CHARGES = [
  { feature: 'Monthly Rental', residential: 'Rs. 310', business: 'Rs. 499', highlight: true },
  { feature: 'On-net (Active Hours)', residential: 'Rs. 1.70 per min', business: 'Up to 3rd min: Rs. 1.70 | Beyond: Rs. 1.00' },
  { feature: 'On-net (Leisure Hours)', residential: 'Rs. 1.00 per min', business: 'Up to 3rd min: Rs. 1.70 | Beyond: Rs. 1.00' },
  { feature: 'Off-net (Active Hours)', residential: 'Rs. 2.70 per min', business: 'Rs. 2.70 per min' },
  { feature: 'Off-net (Leisure Hours)', residential: 'Rs. 2.00 per min', business: 'Rs. 2.00 per min' },
  { feature: 'Free Call Minutes', residential: '100 Minutes (On-net)', business: 'None included (Metered from 1st min)' },
  { feature: 'Data Allowance', residential: 'Based on the BB Package', business: 'Based on the BB Package' },
  {
    feature: 'Free Value Added Services (VAS)',
    residential: 'Standard VAS Bundle included',
    business: 'CLI, Call Forwarding, Call Waiting, 3-Party Conferencing, Absentee service, Abbreviated dialing'
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
BUSINESS: Rental Rs. 499 | On-net: Rs. 1.70 (1st 3 mins) / Rs. 1.00 (>3 mins) | Off-net: Rs. 2.70/min | Free VAS: CLI, Call Forwarding, Hunting, Conferencing.
MIGRATION RECOMMENDATION: Customers spending over Rs. 435 in call charges should be offered the Unlimited Home Double Play Rs. 745 plan for unlimited calling.`;

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f1f5f9] overflow-y-auto select-none text-slate-800">
      
      {/* UNIFIED SHAREPOINT PORTAL HEADER & 9-TOPIC QUICK SWITCHER */}
      <LteSubpageHeader
        currentTopicId="old-charges"
        title="LTE Old Call Charges (Pre-2017 Reference)"
        subtitle="Call tariff matrix for fixed 4G LTE telephone services provisioned prior to 20th January 2017. For existing grandfathered accounts comparing rates against current Unlimited VoLTE plans."
        badge="Historical Archive"
        badgeStyle="bg-slate-400/20 text-slate-300 border-slate-300/30"
        taxDate="Pre-20th Jan 2017 | Grandfathered Accounts"
        author="Chathurani Rathnayake"
        authorRole="Senior Assistant Manager (Customer Relations) - A7"
        icon={History}
        stats={[
          { label: 'Legacy Residential', value: 'Rs. 310', sub: '+ 100 Free On-Net Mins' },
          { label: 'Legacy Business', value: 'Rs. 499', sub: 'Includes Free VAS' },
          { label: 'Migrate To', value: 'Rs. 745', sub: 'Unlimited Any-Net VoLTE' }
        ]}
      />

      {/* 4. MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* ======================================================== */}
          {/* SECTION A: SIDE-BY-SIDE RESIDENTIAL VS BUSINESS CARDS    */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Residential Card */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-[#005696] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  Residential Legacy
                </span>
                <span className="text-xs font-bold text-slate-400">Pre-2017</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-black text-slate-900">Residential Voice Plan</h3>
                <p className="text-xs text-slate-500">For home subscribers with 100 on-net free minutes.</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Monthly Rental</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-sm font-bold text-slate-500">Rs.</span>
                    <span className="text-3xl font-black text-slate-900">310</span>
                    <span className="text-xs text-slate-400 font-medium">/ month</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-900 rounded-xl font-bold text-xs border border-emerald-200">
                  100 Free Mins
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 bg-blue-50/60 rounded-xl">
                  <span className="font-bold text-slate-700">On-net Active (08-18):</span>
                  <span className="font-mono font-bold text-[#005696]">Rs. 1.70 / min</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-blue-50/60 rounded-xl">
                  <span className="font-bold text-slate-700">On-net Leisure (18-08):</span>
                  <span className="font-mono font-bold text-[#005696]">Rs. 1.00 / min</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-purple-50/60 rounded-xl">
                  <span className="font-bold text-slate-700">Off-net Active:</span>
                  <span className="font-mono font-bold text-purple-900">Rs. 2.70 / min</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-purple-50/60 rounded-xl">
                  <span className="font-bold text-slate-700">Off-net Leisure:</span>
                  <span className="font-mono font-bold text-purple-900">Rs. 2.00 / min</span>
                </div>
              </div>
            </div>

            {/* Business Card */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-purple-900 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                  Business Legacy
                </span>
                <span className="text-xs font-bold text-slate-400">Pre-2017</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-black text-slate-900">Business Voice Plan</h3>
                <p className="text-xs text-slate-500">Stepped on-net calling rates with full VAS package.</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Monthly Rental</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-sm font-bold text-slate-500">Rs.</span>
                    <span className="text-3xl font-black text-slate-900">499</span>
                    <span className="text-xs text-slate-400 font-medium">/ month</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-purple-100 text-purple-900 rounded-xl font-bold text-xs border border-purple-200">
                  Full VAS Bundle
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                  <span className="font-bold text-slate-700">On-net (1st 3 mins):</span>
                  <span className="font-mono font-bold text-slate-900">Rs. 1.70 / min</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                  <span className="font-bold text-slate-700">On-net (&gt; 3 mins):</span>
                  <span className="font-mono font-bold text-emerald-700">Rs. 1.00 / min</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-purple-50/60 rounded-xl">
                  <span className="font-bold text-slate-700">Off-net Active:</span>
                  <span className="font-mono font-bold text-purple-900">Rs. 2.70 / min</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-purple-50/60 rounded-xl">
                  <span className="font-bold text-slate-700">Off-net Leisure:</span>
                  <span className="font-mono font-bold text-purple-900">Rs. 2.00 / min</span>
                </div>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* SECTION B: COMPARISON TABLE                              */}
          {/* ======================================================== */}
          <div className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-xs space-y-4 p-6">
            <h3 className="font-black text-lg text-slate-900">
              Detailed Historical Rate Comparison Table
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white font-black">
                    <th className="p-4 w-1/3">Feature / Tariff Element</th>
                    <th className="p-4 text-cyan-300">Residential (Rs. 310)</th>
                    <th className="p-4 text-purple-300">Business (Rs. 499)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {OLD_CALL_CHARGES.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900">{row.feature}</td>
                      <td className="p-4 font-mono text-cyan-900 font-bold">{row.residential}</td>
                      <td className="p-4 font-mono text-purple-950">{row.business}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ======================================================== */}
          {/* SECTION C: MIGRATION OPPORTUNITY TO UNLIMITED RS. 745     */}
          {/* ======================================================== */}
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl border-2 border-teal-300 p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-teal-900 font-black text-sm uppercase tracking-wider">
              <Sparkles className="w-5 h-5 text-teal-600" />
              <span>Frontline Triage: Why Migrate to Unlimited Rs. 745?</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              A legacy residential customer paying Rs. 310 monthly rental who makes just <strong>2.5 minutes</strong> of calls per day (approx. Rs. 435 in call charges) spends over Rs. 745 per month!
            </p>
            <div className="p-3 bg-white rounded-xl border border-teal-200 text-xs text-teal-950 font-bold">
              Recommendation: Proactively offer the <strong>Unlimited Home Double Play Rs. 745</strong> or <strong>Unlimited Voice Pal</strong> plan to eliminate per-minute call billing entirely.
            </div>
          </div>

          {/* ======================================================== */}
          {/* SECTION D: C-LOG REFERENCE SNIPPET                       */}
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
              <span>Back to LTE BB Packages</span>
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
