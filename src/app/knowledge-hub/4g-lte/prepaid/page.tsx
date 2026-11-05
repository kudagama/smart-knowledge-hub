"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CreditCard,
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
  Smartphone,
  Layers,
  Clock,
  Zap,
  Info
} from 'lucide-react';

const PREPAID_PASSES = [
  { volume: '1 GB', validity: '1 Day', price: 'Rs. 45 - 60', bestFor: 'Quick emergency browsing' },
  { volume: '2 GB', validity: '3 Days', price: 'Rs. 95 - 110', bestFor: 'Short weekend pass' },
  { volume: '5 GB', validity: '7 Days', price: 'Rs. 220 - 250', bestFor: 'Weekly work & social' },
  { volume: '10 GB', validity: '14 Days', price: 'Rs. 420 - 460', bestFor: 'Bi-weekly browsing' },
  { volume: '20 GB', validity: '30 Days', price: 'Rs. 790 - 850', bestFor: 'Standard monthly volume' },
  { volume: '40 GB', validity: '30 Days', price: 'Rs. 1,450 - 1,590', bestFor: 'Heavy streaming & downloads' }
];

export default function LtePrepaidServicesPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const ttPrepaidReloadFailure = `SERVICE: SLT 4G LTE Prepaid Recharge
FAULT: Prepaid Recharge Not Credited to Account
PAYMENT CHANNEL: Third-Party Banking / Merchant (e.g. Commercial Bank / Food City)
RELOAD AMOUNT: Rs. [AMOUNT]
TRANSACTION REF: [BANK_REF_OR_RECEIPT_NO]
TIMESTAMP: [DATE_TIME]
RULE: RULE_4G_RELOAD_THIRD_PARTY_CHANNELS
TARGET: BILLING-HELPDESK
ACTION: Verify API settlement gateway with merchant bank. Credit package quota manually upon transaction reconciliation.`;

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f4f7f9] overflow-y-auto select-none">
      
      {/* 1. TOP SHAREPOINT BAR */}
      <div className="bg-[#005a9c] text-white px-4 py-2 flex items-center justify-between text-xs shadow-xs shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/knowledge-hub" className="flex items-center gap-1.5 cursor-pointer hover:opacity-80">
            <Grid className="w-4 h-4 text-white" />
            <span className="font-bold tracking-tight text-sm">SharePoint</span>
          </Link>
          <span className="text-xs text-emerald-200">| 4G LTE Prepaid Services</span>
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
          <span className="font-bold text-emerald-800">4G LTE Prepaid</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-bold">
            Balance: *123#
          </span>
        </div>
      </div>

      {/* 3. HERO BANNER */}
      <div className="relative bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white px-8 py-8 overflow-hidden border-b border-emerald-800/40">
        <div className="max-w-6xl mx-auto space-y-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-400/20 text-emerald-300 border border-emerald-300/30">
              Prepaid Pay-As-You-Go
            </span>
            <span className="text-xs text-emerald-200">No Monthly Commitments or Arrears Bills</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/20 border border-emerald-400/40">
              <CreditCard className="w-6 h-6 text-emerald-300" />
            </div>
            <span>4G LTE Prepaid Services &amp; Reload SOP</span>
          </h1>

          <p className="text-xs text-emerald-100/90 max-w-3xl font-medium leading-relaxed">
            SIM starter pack tariffs (Rs. 1,400), data top-up passes (1GB to 40GB), merchant counter reloads, grace period policies, and third-party recharge reconciliation.
          </p>
        </div>
      </div>

      {/* 4. MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-8 space-y-6">
        <div className="max-w-6xl mx-auto space-y-6">

          {/* 3 Core Components */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-emerald-600" />
                <h3 className="font-black text-sm text-slate-900">Prepaid SIM Starter Pack</h3>
              </div>
              <p className="font-mono text-xl font-black text-[#005696]">Rs. 1,400</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Available at all SLT Teleshops, RTOM branches, and Mobitel dealer outlets. Pre-configured for voice calling and high-speed LTE data.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-blue-600" />
                <h3 className="font-black text-sm text-slate-900">Recharge Channels</h3>
              </div>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>• <strong>MySLT App:</strong> Instant credit with LankaQR / Card</li>
                <li>• <strong>Banking Apps:</strong> Commercial, Sampath, BOC, HNB</li>
                <li>• <strong>Merchant Counters:</strong> Food City, Keells, Singer</li>
                <li>• <strong>Scratch Cards:</strong> USSD string *123#</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-600" />
                <h3 className="font-black text-sm text-slate-900">Lifecycle &amp; Grace Period</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                • <strong>90 Days:</strong> Account enters inactive grace period if no reload is performed.<br/>
                • <strong>180 Days:</strong> Number is quarantined and recycled per TRCSL regulations.
              </p>
            </div>

          </div>

          {/* Volume Passes Table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs space-y-2 p-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-black text-slate-900">
                  Fixed Volume Prepaid Data Top-Up Passes
                </h3>
                <p className="text-xs text-slate-500">
                  Select and activate on-demand data passes through MySLT Portal or USSD.
                </p>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-emerald-50 text-emerald-800">
                Data Passes
              </span>
            </div>

            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-black">
                    <th className="p-3.5">Volume Quota</th>
                    <th className="p-3.5">Validity Period</th>
                    <th className="p-3.5 text-emerald-800">Approx. Price (Rs.)</th>
                    <th className="p-3.5">Recommended Usage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {PREPAID_PASSES.map((p, idx) => (
                    <tr key={idx} className="hover:bg-emerald-50/30 transition-colors">
                      <td className="p-3.5 font-mono font-black text-[#005696] text-sm">{p.volume}</td>
                      <td className="p-3.5 font-bold text-slate-800">{p.validity}</td>
                      <td className="p-3.5 font-mono font-bold text-emerald-700">{p.price}</td>
                      <td className="p-3.5 text-slate-600 text-[11px]">{p.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Trouble Ticket Template */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-sm space-y-3 text-white">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <span className="font-mono text-xs font-bold text-emerald-300">
                Standard C-Log Trouble Ticket: Third-Party Reload Not Credited
              </span>
              <button
                onClick={() => copyToClipboard(ttPrepaidReloadFailure, 'tt-prepaid')}
                className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs rounded-lg font-bold flex items-center gap-1.5 transition-colors"
              >
                {copiedId === 'tt-prepaid' ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                <span>{copiedId === 'tt-prepaid' ? 'Copied TT!' : 'Copy TT'}</span>
              </button>
            </div>
            <pre className="text-lime-300 font-mono text-xs leading-relaxed whitespace-pre-wrap">
              {ttPrepaidReloadFailure}
            </pre>
          </div>

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between pt-2">
            <Link
              href="/knowledge-hub/4g-lte/broadband"
              className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Broadband Packages</span>
            </Link>

            <Link
              href="/knowledge-hub/4g-lte/old-charges"
              className="px-4 py-2 rounded-xl bg-[#005696] hover:bg-[#004780] text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <span>Next: LTE Old Call Charges</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}

