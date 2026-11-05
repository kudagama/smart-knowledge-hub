"use client";

import React, { useState } from 'react';
import Link from 'next/link';
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
  Clock
} from 'lucide-react';

const CAT6_CHARGES = [
  {
    package: 'Concessionary - New (CPE Model - Tozed CAT 6)',
    withoutTax: '11,327.94',
    priorWithoutTax: '6,900',
    withTax: '13,990',
    badge: 'New CAT 6 Tozed',
    badgeStyle: 'bg-blue-100 text-[#005696] border-blue-200',
    conditions: [
      'Warranty for the new CPE: 12 months',
      'One year commitment period',
      'Early termination fee of Rs. 5,000 is applicable',
      'CAT 6 CPE types will be provided (High throughput Carrier Aggregation)',
      'Only applicable for BB packages 2,390 (1,990) and above'
    ]
  },
  {
    package: 'Concessionary - Refurbished (CPE Model - Tozed CAT 6)',
    withoutTax: '5,659.92',
    priorWithoutTax: '3,450',
    withTax: '6,990',
    badge: 'Refurbished CAT 6',
    badgeStyle: 'bg-amber-100 text-amber-900 border-amber-300',
    conditions: [
      'Warranty for the refurbished CPE: 6 months',
      'One year commitment period',
      'Early termination fee of Rs. 5,000 is applicable',
      'CAT 6 CPE types will be provided',
      'Only applicable for BB packages 2,390 (1,990) and above'
    ]
  },
  {
    package: 'Full Payment - New (CPE Model - Tozed CAT 6)',
    withoutTax: '16,186.23',
    priorWithoutTax: '12,000',
    withTax: '19,900',
    badge: 'Full Pay Bonus 25GB',
    badgeStyle: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    bonusData: '25 GB / Month for first 12 months (Free 300 GB total)',
    conditions: [
      'Warranty for the new CPE: 12 months',
      'No commitment period',
      'No early termination fee',
      'Additional Data of 25GB per month for the first 12 months will be provided (Not applicable for Unlimited packages)'
    ]
  }
];

export default function LteCat6ChargesPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const ttCat6Standard = `SERVICE: SLT-Mobitel 4G LTE Fixed Broadband
TARIFF OPTION: New Connection (CAT 6 Advanced CPE - Tozed)
PRICE WITH TAX: Rs. 13,990 (Concessionary) / Rs. 19,900 (Full Payment)
BASE PRICE WITHOUT TAX: Rs. 11,327.94 (Prior base Rs. 6,900)
CPE SPECIFICATION: CAT 6 High-Throughput Tozed LTE Router with Carrier Aggregation (CA).
AVERAGE SPEEDS: Download 16 Mbps | Upload 1 Mbps.
WARRANTY: New CPE: 12 Months | Refurbished: 6 Months (Ownership transferred after warranty).
PACKAGE ELIGIBILITY: Applicable for Broadband packages Rs. 2,390 (1,990) and above.`;

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f4f7f9] overflow-y-auto select-none">
      
      {/* 1. TOP SHAREPOINT BAR */}
      <div className="bg-[#005a9c] text-white px-4 py-2 flex items-center justify-between text-xs shadow-xs shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/knowledge-hub" className="flex items-center gap-1.5 cursor-pointer hover:opacity-80">
            <Grid className="w-4 h-4 text-white" />
            <span className="font-bold tracking-tight text-sm">SharePoint</span>
          </Link>
          <span className="text-xs text-amber-200">| 4G LTE CAT 6 Tariff</span>
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
          <span className="font-bold text-amber-700">CAT 6 Connection Charges</span>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/knowledge-hub/4g-lte/cat-4"
            className="px-2.5 py-1 rounded bg-blue-50 text-blue-900 border border-blue-200 hover:bg-blue-100 font-bold text-[11px] flex items-center gap-1 transition-colors"
          >
            <Radio className="w-3 h-3 text-[#005696]" />
            <span>View CAT 4 Charges</span>
          </Link>
        </div>
      </div>

      {/* 3. HERO BANNER */}
      <div className="relative bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-950 text-white px-8 py-8 overflow-hidden border-b border-indigo-900/40">
        <div className="max-w-6xl mx-auto space-y-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-300/30">
              Advanced CPE (Tozed)
            </span>
            <span className="text-xs text-indigo-200">High-Throughput Carrier Aggregation Platform</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-400/40">
              <Zap className="w-6 h-6 text-amber-300" />
            </div>
            <span>LTE New Connection Charges (CAT 6)</span>
          </h1>

          <p className="text-xs text-indigo-100/90 max-w-3xl font-medium leading-relaxed">
            Tariffs and conditions for Tozed Advanced CAT 6 LTE CPE routers. Price plans effective from 24/08/2022, revised charges with tax effective from <strong>01/08/2024</strong>.
          </p>

          <div className="flex items-center gap-3 pt-1">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 to-orange-700 border border-amber-400 flex items-center justify-center font-bold text-xs text-white">
              CR
            </div>
            <div className="text-xs">
              <p className="font-bold text-white">Chathurani Rathnayake</p>
              <p className="text-[11px] text-amber-200/90">Senior Assistant Manager (Customer Relations) - A7 | Published: 6/13/2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-8 space-y-6">
        <div className="max-w-6xl mx-auto space-y-6">

          {/* Speed & Mandatory Collection Banner */}
          <div className="bg-amber-50 rounded-2xl border border-amber-200 p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
                <Gauge className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-amber-800 tracking-wider">
                  CAT 6 Average Performance Metric
                </span>
                <p className="font-black text-base text-slate-900">
                  Download Speed: Average 16 Mbps | Upload Speed: Average 1 Mbps
                </p>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-white border border-amber-300 text-xs text-amber-900 font-semibold max-w-sm">
              <Info className="w-4 h-4 text-amber-700 inline-block mr-1 -mt-0.5" />
              <strong>Collection Rule:</strong> New Connection Charge with Tax should be collected upfront for all options when providing the service.
            </div>
          </div>

          {/* CAT 6 Table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-black">
                    <th className="p-3.5 w-1/3">Package (CAT 6 - Advanced CPE Models)</th>
                    <th className="p-3.5">New Connection Charge (Rs.)<br/><span className="text-[10px] text-slate-500 font-normal">(Without Tax)</span></th>
                    <th className="p-3.5 text-emerald-800">New Connection Charge (Rs.)<br/><span className="text-[10px] text-emerald-700 font-normal">(With Tax eff. 01/08/2024)</span></th>
                    <th className="p-3.5">Special Conditions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {CAT6_CHARGES.map((row, idx) => (
                    <tr key={idx} className="hover:bg-amber-50/30 transition-colors">
                      <td className="p-3.5 align-top">
                        <div className="font-bold text-slate-900 text-sm">{row.package}</div>
                        <span className={`inline-block mt-1 px-2 py-0.5 rounded text-[9px] font-bold border ${row.badgeStyle}`}>
                          {row.badge}
                        </span>
                        {row.bonusData && (
                          <div className="mt-2 p-1.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold flex items-center gap-1">
                            <Gift className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{row.bonusData}</span>
                          </div>
                        )}
                      </td>
                      <td className="p-3.5 align-top font-mono font-bold text-slate-700">
                        <div className="text-sm">{row.withoutTax}</div>
                        {row.priorWithoutTax && (
                          <div className="text-[10px] text-slate-400 font-normal">(Prior: {row.priorWithoutTax})</div>
                        )}
                      </td>
                      <td className="p-3.5 align-top font-mono font-black text-emerald-700">
                        <div className="text-base">{row.withTax}</div>
                      </td>
                      <td className="p-3.5 align-top text-slate-600 text-[11px]">
                        <ul className="space-y-1">
                          {row.conditions.map((c, cIdx) => (
                            <li key={cIdx} className="flex items-start gap-1">
                              <span className="text-amber-600 font-bold">•</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Operational Policy Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Warranty & Ownership */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2 shadow-2xs">
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#005696]" />
                <span>Ownership &amp; Warranty</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ownership of the Tozed CAT 6 CPE is transferred to the customer after warranty period completion:
              </p>
              <div className="space-y-1 text-xs pt-1">
                <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-700">New Tozed Unit:</span>
                  <span className="font-mono font-bold text-[#005696]">12 Months</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-700">Refurbished Unit:</span>
                  <span className="font-mono font-bold text-amber-700">6 Months</span>
                </div>
              </div>
            </div>

            {/* Commitment Period */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2 shadow-2xs">
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Commitment Period &amp; Penalties</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Concessionary units carry a mandatory <strong>1-year commitment period</strong>.
              </p>
              <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                <p>• <strong>Early Termination Fee:</strong> Rs. 5,000 applicable if disconnected before 1 year.</p>
                <p>• <strong>Full Payment Option:</strong> Carries <em>no commitment period</em> and <em>zero early termination penalty</em>.</p>
              </div>
            </div>

            {/* Bonus Data */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2 shadow-2xs">
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <Gift className="w-4 h-4 text-emerald-600" />
                <span>Full Pay 25GB/Mo Bonus Rule</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Subscribers choosing the Full Payment New option (Rs. 19,900) receive <strong>25 GB extra data per month</strong> for the first 12 months.
              </p>
              <p className="text-[11px] text-slate-500 italic">
                * Note: Free bonus data is not applicable for Unlimited package categories.
              </p>
            </div>

          </div>

          {/* Trouble Ticket / Quotation Draft */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-sm space-y-3 text-white">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <span className="font-mono text-xs font-bold text-amber-300">
                Official C-Log Quotation &amp; Service Order Template: CAT 6 Tozed CPE
              </span>
              <button
                onClick={() => copyToClipboard(ttCat6Standard, 'tt-cat6')}
                className="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-white text-xs rounded-lg font-bold flex items-center gap-1.5 transition-colors"
              >
                {copiedId === 'tt-cat6' ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                <span>{copiedId === 'tt-cat6' ? 'Copied Quote!' : 'Copy Quotation'}</span>
              </button>
            </div>
            <pre className="text-lime-300 font-mono text-xs leading-relaxed whitespace-pre-wrap">
              {ttCat6Standard}
            </pre>
          </div>

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between pt-2">
            <Link
              href="/knowledge-hub/4g-lte/cat-4"
              className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to CAT 4 Charges</span>
            </Link>

            <Link
              href="/knowledge-hub/4g-lte/voice"
              className="px-4 py-2 rounded-xl bg-[#005696] hover:bg-[#004780] text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <span>Next: LTE Voice Packages (VoLTE)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}

