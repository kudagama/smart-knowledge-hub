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
  Info
} from 'lucide-react';

const CAT4_CHARGES = [
  {
    package: 'Double Play (BB + Voice) Concessionary - New',
    withoutTax: '4,990',
    priorWithoutTax: '4,048.96',
    withTax: '4,990',
    priorWithTax: '7,900',
    badge: 'Concessionary Offer',
    conditions: 'Any BB Package (Rs. 1,990 / 2,390 package category and above)',
    type: 'double_play',
    highlight: true
  },
  {
    package: 'Single Play (BB only) Concessionary - New',
    withoutTax: '4,990',
    priorWithoutTax: '4,048.96',
    withTax: '4,990',
    priorWithTax: '7,241',
    badge: 'Data Only',
    conditions: 'Yes (Applicable for BB packages Rs. 1,990 / 2,390 and above)',
    type: 'single_play',
    highlight: true
  },
  {
    package: 'Single Play (Voice only) - Full Pay / New',
    withoutTax: '5,490',
    priorWithoutTax: '5,432.00',
    withTax: '6,490',
    priorWithTax: '7,900',
    badge: 'Voice Only',
    conditions: 'Any Voice Package (Postpaid Voice Plans)',
    type: 'voice_only'
  },
  {
    package: 'Single Play (Voice only) - Off-Net No F2F',
    withoutTax: '4,990',
    priorWithoutTax: '4,048.96',
    withTax: '6,490',
    priorWithTax: '7,900',
    badge: 'Off-Net Voice',
    conditions: 'Voice package (Voice Pal)',
    type: 'voice_only'
  },
  {
    package: 'CDMA to LTE Migration',
    withoutTax: 'Free migration according to current scheme',
    priorWithoutTax: null,
    withTax: 'Free',
    priorWithTax: null,
    badge: 'Free Migration',
    conditions: 'Existing CDMA voice customers migrating (CityLink retained)',
    type: 'migration',
    isFree: true
  },
  {
    package: 'Double Play (BB + Voice) Full Payment',
    withoutTax: '9,900',
    priorWithoutTax: '8,097.92',
    withTax: '9,900',
    priorWithTax: '11,900',
    badge: 'Standard Full Pay',
    conditions: 'Any BB package (Unlimited / Any BB package category)',
    type: 'double_play'
  },
  {
    package: 'Recovered CPE Single Play (Concessionary - Refurbished)',
    withoutTax: '2,450 / 3,000',
    priorWithoutTax: 'Charges based on refurbished unit scheme',
    withTax: '3,900',
    priorWithTax: '4,750',
    badge: 'Refurbished Unit',
    conditions: '• Warranty: 6 months\n• 1 year commitment period\n• Early termination fee: Rs. 5,000\n• Applicable for selected packages',
    type: 'refurbished'
  },
  {
    package: 'Recovered CPE Double Play (Concessionary - Refurbished)',
    withoutTax: 'Concessionary offer for refurb units',
    priorWithoutTax: null,
    withTax: '3,900',
    priorWithTax: '4,750',
    badge: 'Refurbished Unit',
    conditions: '• Warranty: 6 months\n• 1 year commitment period\n• Early termination fee: Rs. 5,000\n• BB packages above Rs. 1,990 / 2,390',
    type: 'refurbished'
  },
  {
    package: 'With OUT Sub / Router - Double Play (Broadband + Voice)',
    withoutTax: '4,990',
    priorWithoutTax: '4,048.96',
    withTax: '6,490',
    priorWithTax: '7,900',
    badge: 'SIM Only (BYOD)',
    conditions: '• Customer already has compatible CPE router\n• SIM only provision\n• Applicable package rules apply',
    type: 'sim_only'
  },
  {
    package: 'Without Sub / Router - BB only (Data only SIM)',
    withoutTax: '4,990',
    priorWithoutTax: '4,048.96',
    withTax: '6,490',
    priorWithTax: '7,900',
    badge: 'Data SIM Only',
    conditions: '• Compatible router provided by user\n• Applicable package rules apply',
    type: 'sim_only'
  },
  {
    package: '4G LTE Prepaid SIM only (Voice + Broadband)',
    withoutTax: '1,400',
    priorWithoutTax: null,
    withTax: '1,400',
    priorWithTax: null,
    badge: 'Prepaid SIM',
    conditions: '• Prepaid SIM card only\n• Can load data / voice top-ups\n• Self-care recharge via MySLT & banking apps',
    type: 'prepaid'
  }
];

export default function LteCat4ChargesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredCharges = CAT4_CHARGES.filter((c) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      c.package.toLowerCase().includes(q) ||
      c.conditions.toLowerCase().includes(q) ||
      c.withoutTax.toLowerCase().includes(q) ||
      c.withTax.toLowerCase().includes(q)
    );
  });

  const ttCat4Standard = `SERVICE: SLT-Mobitel 4G LTE Fixed Broadband
TARIFF OPTION: New Connection (CAT 4 Basic CPE - Concessionary Double Play)
ROUTER MODEL: Huawei B310 / B311 / Tozed Basic
PRICE WITH TAX: Rs. 4,990 (New Charges eff. 01/08/2024)
BASE PRICE WITHOUT TAX: Rs. 4,990 (Prior base Rs. 4,048.96)
PACKAGE CRITERIA: Applicable for BB package category Rs. 1,990 / 2,390 and above.
WARRANTY: 12 Months (Ownership transferred to subscriber after warranty).
EARLY TERMINATION FEE: Rs. 5,000 applies within 1-year commitment period.`;

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f4f7f9] overflow-y-auto select-none">
      
      {/* 1. TOP SHAREPOINT BAR */}
      <div className="bg-[#005a9c] text-white px-4 py-2 flex items-center justify-between text-xs shadow-xs shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/knowledge-hub" className="flex items-center gap-1.5 cursor-pointer hover:opacity-80">
            <Grid className="w-4 h-4 text-white" />
            <span className="font-bold tracking-tight text-sm">SharePoint</span>
          </Link>
          <span className="text-xs text-cyan-200">| 4G LTE CAT 4 Tariff</span>
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
          <span className="font-bold text-[#005696]">CAT 4 Connection Charges</span>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/knowledge-hub/4g-lte/cat-6"
            className="px-2.5 py-1 rounded bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 font-bold text-[11px] flex items-center gap-1 transition-colors"
          >
            <Zap className="w-3 h-3 text-amber-600" />
            <span>View CAT 6 Charges ➔</span>
          </Link>
        </div>
      </div>

      {/* 3. HERO BANNER */}
      <div className="relative bg-gradient-to-r from-blue-950 via-[#003B66] to-slate-900 text-white px-8 py-8 overflow-hidden border-b border-blue-800/40">
        <div className="max-w-6xl mx-auto space-y-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-cyan-400/20 text-cyan-300 border border-cyan-300/30">
              Basic CPE Models
            </span>
            <span className="text-xs text-cyan-200">Huawei B310, B311 &amp; Tozed Basic</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/20 border border-cyan-400/40">
              <Radio className="w-6 h-6 text-cyan-300" />
            </div>
            <span>LTE New Connection Charges (CAT 4)</span>
          </h1>

          <p className="text-xs text-cyan-100/90 max-w-3xl font-medium leading-relaxed">
            SLT 4G LTE voice and fixed broadband new connection charges. Price plans effective from 24/08/2022, revised with tax effective from <strong>01/08/2024</strong>.
          </p>

          <div className="flex items-center gap-3 pt-1">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-700 border border-cyan-400 flex items-center justify-center font-bold text-xs text-white">
              CR
            </div>
            <div className="text-xs">
              <p className="font-bold text-white">Chathurani Rathnayake</p>
              <p className="text-[11px] text-cyan-200/90">Senior Assistant Manager (Customer Relations) - A7</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-8 space-y-6">
        <div className="max-w-6xl mx-auto space-y-6">

          {/* Quick Search & Summary Strip */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search packages, prices, conditions..."
                className="w-full bg-slate-50 text-slate-800 text-xs pl-8 pr-7 py-2 rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#005696]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 text-xs">
              <div className="p-2 rounded-lg bg-blue-50 border border-blue-200 text-[#005696] font-bold">
                Tax Revision: eff. 01/08/2024
              </div>
              <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold">
                CDMA Migration: 100% Free
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-black">
                    <th className="p-3.5 w-1/3">Package (CAT 4 - Basic CPE Models)</th>
                    <th className="p-3.5">Without Tax (Rs.)<br/><span className="text-[10px] text-slate-500 font-normal">(Prior / Base)</span></th>
                    <th className="p-3.5 text-emerald-800">With Tax (Rs.)<br/><span className="text-[10px] text-emerald-700 font-normal">(New eff. 01/08/2024)</span></th>
                    <th className="p-3.5">Applicable Packages / Conditions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredCharges.map((row, idx) => (
                    <tr key={idx} className={`hover:bg-blue-50/40 transition-colors ${row.highlight ? 'bg-cyan-50/20' : ''}`}>
                      <td className="p-3.5 align-top">
                        <div className="font-bold text-slate-900 text-sm">{row.package}</div>
                        <span className="inline-block mt-1 px-2 py-0.5 rounded text-[9px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                          {row.badge}
                        </span>
                      </td>
                      <td className="p-3.5 align-top font-mono font-bold text-slate-700">
                        <div className="text-sm">{row.withoutTax}</div>
                        {row.priorWithoutTax && (
                          <div className="text-[10px] text-slate-400 font-normal">({row.priorWithoutTax})</div>
                        )}
                      </td>
                      <td className="p-3.5 align-top font-mono font-black text-[#005696]">
                        <div className="text-base">{row.withTax}</div>
                        {row.priorWithTax && (
                          <div className="text-[10px] text-slate-400 font-normal">({row.priorWithTax})</div>
                        )}
                      </td>
                      <td className="p-3.5 align-top text-slate-600 whitespace-pre-wrap leading-relaxed text-[11px]">
                        {row.conditions}
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
                <span>Warranty &amp; Ownership Policy</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ownership of the CPE is officially transferred to the customer at the end of the warranty period:
              </p>
              <div className="space-y-1 text-xs pt-1">
                <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-700">New CPEs:</span>
                  <span className="font-mono font-bold text-[#005696]">12 Months</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-700">Refurbished CPEs:</span>
                  <span className="font-mono font-bold text-amber-700">6 Months</span>
                </div>
              </div>
            </div>

            {/* Speeds */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2 shadow-2xs">
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <Gauge className="w-4 h-4 text-emerald-600" />
                <span>Expected Speed Metrics</span>
              </h3>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 space-y-0.5">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase block">Good Coverage Area:</span>
                  <p className="font-bold text-slate-800">Download: 10 - 20 Mbps</p>
                  <p className="text-[10px] text-slate-500">Min. Guarantee: 3-5 Mbps | Peak: up to 40 Mbps</p>
                  <p className="text-[10px] text-emerald-800">Upload: 3 - 5 Mbps</p>
                </div>
                <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 space-y-0.5">
                  <span className="text-[10px] font-bold text-amber-800 uppercase block">Moderate / Fringe Coverage:</span>
                  <p className="font-bold text-slate-800">Download: 4 - 8 Mbps</p>
                  <p className="text-[10px] text-amber-800">Upload: 1 - 2 Mbps</p>
                </div>
              </div>
            </div>

            {/* Taxes & Antenna */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2 shadow-2xs">
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <Tag className="w-4 h-4 text-purple-600" />
                <span>Taxes &amp; Migration Rules</span>
              </h3>
              <div className="text-xs text-slate-600 space-y-2">
                <p><strong>Applicable Taxes:</strong> Telecommunication Levy (TL), VAT (18%), CESS, SSCL.</p>
                <div className="p-2 rounded bg-purple-50 border border-purple-100 text-[11px] space-y-1">
                  <p>• <strong>Migration Charge:</strong> Standard Rs. 1,000 (without tax).</p>
                  <p>• <strong>Outdoor Antenna:</strong> Rs. 3,500 - 5,000 depending on cable length for weak signal areas.</p>
                  <p>• <strong>Billing Cycles:</strong> Cycle 1 (1st-end), Cycle 2 (16th-15th).</p>
                </div>
              </div>
            </div>

          </div>

          {/* Trouble Ticket / Quotation Draft */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-sm space-y-3 text-white">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <span className="font-mono text-xs font-bold text-cyan-300">
                Official C-Log Quotation &amp; Service Order Template: CAT 4 Double Play
              </span>
              <button
                onClick={() => copyToClipboard(ttCat4Standard, 'tt-cat4')}
                className="px-3 py-1 bg-[#005696] hover:bg-blue-600 text-white text-xs rounded-lg font-bold flex items-center gap-1.5 transition-colors"
              >
                {copiedId === 'tt-cat4' ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                <span>{copiedId === 'tt-cat4' ? 'Copied Quote!' : 'Copy Quotation'}</span>
              </button>
            </div>
            <pre className="text-lime-300 font-mono text-xs leading-relaxed whitespace-pre-wrap">
              {ttCat4Standard}
            </pre>
          </div>

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between pt-2">
            <Link
              href="/knowledge-hub/4g-lte"
              className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to 4G LTE Modules</span>
            </Link>

            <Link
              href="/knowledge-hub/4g-lte/cat-6"
              className="px-4 py-2 rounded-xl bg-[#005696] hover:bg-[#004780] text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <span>Next: CAT 6 Advanced Charges</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}

