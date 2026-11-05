"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Globe,
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
  Signal,
  Zap,
  BookOpen,
  Smartphone,
  Gauge,
  Info
} from 'lucide-react';

const LTE_BB_PACKAGES = [
  { tier: 'Web Starter', total: '8 GB', day: '4 GB', night: '4 GB', rental: '~ 490' },
  { tier: 'Web Lite', total: '16 GB', day: '8 GB', night: '8 GB', rental: '~ 790' },
  { tier: 'Web Pro', total: '35 GB', day: '18 GB', night: '17 GB', rental: '~ 1,490' },
  { tier: 'Web Master', total: '60 GB', day: '30 GB', night: '30 GB', rental: '~ 2,390' },
  { tier: 'Web Champ', total: '95 GB', day: '48 GB', night: '47 GB', rental: '~ 3,490' },
  { tier: 'Web Life', total: '150 GB', day: '75 GB', night: '75 GB', rental: '~ 5,390' },
  { tier: 'Web Supreme', total: '225 GB', day: '115 GB', night: '110 GB', rental: '~ 7,890' }
];

export default function LteBroadbandPackagesPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const ttAntennaWeakSignal = `SERVICE: SLT-Mobitel 4G LTE Fixed Broadband
FAULT: Slow Browsing Speeds / Weak RF Signal (RSRP < -105 dBm)
DIAGNOSTICS: Router gateway (192.168.8.1) indicates 1 red signal bar. Band 40 (2300MHz).
ACTION: Dispatch Trouble Ticket to AREA-MTCE / RF-PLANNING for outdoor high-gain Yagi antenna installation.`;

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f4f7f9] overflow-y-auto select-none">
      
      {/* 1. TOP SHAREPOINT BAR */}
      <div className="bg-[#005a9c] text-white px-4 py-2 flex items-center justify-between text-xs shadow-xs shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/knowledge-hub" className="flex items-center gap-1.5 cursor-pointer hover:opacity-80">
            <Grid className="w-4 h-4 text-white" />
            <span className="font-bold tracking-tight text-sm">SharePoint</span>
          </Link>
          <span className="text-xs text-blue-200">| 4G LTE Broadband (BB)</span>
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
          <span className="font-bold text-[#005696]">Broadband Packages (BB)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded bg-blue-50 text-[#005696] border border-blue-200 text-xs font-mono font-bold">
            Day: 08:00 - 00:00 | Night: 00:00 - 08:00
          </span>
        </div>
      </div>

      {/* 3. HERO BANNER */}
      <div className="relative bg-gradient-to-r from-blue-950 via-[#003B66] to-slate-900 text-white px-8 py-8 overflow-hidden border-b border-blue-800/40">
        <div className="max-w-6xl mx-auto space-y-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-cyan-400/20 text-cyan-300 border border-cyan-300/30">
              Fixed Wireless Broadband
            </span>
            <span className="text-xs text-cyan-200">High-Speed Anytime &amp; Night-Time Volume Tiers</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/20 border border-cyan-400/40">
              <Globe className="w-6 h-6 text-cyan-300" />
            </div>
            <span>LTE Broadband (BB) Packages &amp; Quotas</span>
          </h1>

          <p className="text-xs text-cyan-100/90 max-w-3xl font-medium leading-relaxed">
            Standard anytime volume quotas, Web Starter to Web Supreme tiers, Flash daily allowance passes, Work &amp; Learn add-ons, and RF signal strength scale.
          </p>
        </div>
      </div>

      {/* 4. MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-8 space-y-6">
        <div className="max-w-6xl mx-auto space-y-6">

          {/* Volume Tiers Table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs space-y-2 p-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-black text-slate-900">
                  Anytime &amp; Standard Data Packages Table
                </h3>
                <p className="text-xs text-slate-500">
                  Daytime standard data bucket applies from 08:00 to 00:00 hrs. Free bonus night data applies from 00:00 to 08:00 hrs.
                </p>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                Monthly Recurring
              </span>
            </div>

            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-black">
                    <th className="p-3.5">Package Tier</th>
                    <th className="p-3.5">Total Volume (GB)</th>
                    <th className="p-3.5">Standard Daytime (08:00 - 00:00)</th>
                    <th className="p-3.5">Free Night Data (00:00 - 08:00)</th>
                    <th className="p-3.5 text-emerald-800">Rental w/o Tax (Rs.)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {LTE_BB_PACKAGES.map((b, idx) => (
                    <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900 text-sm">{b.tier}</td>
                      <td className="p-3.5 font-mono font-black text-[#005696] text-base">{b.total}</td>
                      <td className="p-3.5 font-mono text-slate-700">{b.day}</td>
                      <td className="p-3.5 font-mono text-indigo-700">{b.night}</td>
                      <td className="p-3.5 font-mono font-bold text-emerald-700 text-sm">{b.rental}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Flash & Add-on Packages Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
              <h4 className="font-black text-sm text-slate-900 uppercase flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Flash 10 &amp; Flash 25</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Daily data allowances (e.g. 10 GB/day or 25 GB/day). Standard Fair Usage Policy (FUP) throttling speeds apply once daily limit is reached.
              </p>
              <div className="pt-2 text-[11px] font-bold text-[#005696]">
                Automatic midnight quota renewal
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
              <h4 className="font-black text-sm text-slate-900 uppercase flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Work &amp; Learn / Meet Plans</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Unlimited and volume-based passes dedicated for Zoom, Microsoft Teams, Google Meet, and Office 365 cloud collaboration.
              </p>
              <div className="pt-2 text-[11px] font-bold text-blue-800">
                Optimized video conferencing QoS
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
              <h4 className="font-black text-sm text-slate-900 uppercase flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-purple-600" />
                <span>Social Media Add-ons</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated data buckets for YouTube, Facebook, WhatsApp, and TikTok without consuming standard daytime GB quota.
              </p>
              <div className="pt-2 text-[11px] font-bold text-purple-800">
                Available via MySLT App self-care
              </div>
            </div>
          </div>

          {/* 4G LTE RSRP Signal Diagnostic Scale */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <Signal className="w-4 h-4 text-[#005696]" />
                  <span>4G LTE Radio Frequency (RF) Signal Diagnostic Scale</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Inspect metrics on router dashboard: http://192.168.8.1 (Default credentials: admin / admin)
                </p>
              </div>
              <span className="px-2.5 py-1 bg-blue-50 text-[#005696] border border-blue-200 rounded-md text-[10px] font-mono font-bold">
                RSRP (dBm) &amp; SINR (dB)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/60 space-y-1">
                <span className="text-[10px] font-black uppercase text-emerald-800 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Outstanding Signal
                </span>
                <p className="font-mono font-bold text-slate-900 text-sm">&gt; -80 dBm</p>
                <p className="text-[11px] text-emerald-900">
                  3-4 Solid Blue signal bars. Full 4G throughput. No antenna required.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-teal-200 bg-teal-50/60 space-y-1">
                <span className="text-[10px] font-black uppercase text-teal-800 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  Good / Normal
                </span>
                <p className="font-mono font-bold text-slate-900 text-sm">-80 to -90 dBm</p>
                <p className="text-[11px] text-teal-900">
                  2-3 Solid Blue bars. Stable streaming and browsing. Normal operating zone.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/60 space-y-1">
                <span className="text-[10px] font-black uppercase text-amber-800 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                  Fair / Cell Edge
                </span>
                <p className="font-mono font-bold text-slate-900 text-sm">-90 to -100 dBm</p>
                <p className="text-[11px] text-amber-900">
                  1-2 Bars. Relocate router near a window or higher floor facing tower.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50/60 space-y-1">
                <span className="text-[10px] font-black uppercase text-rose-800 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                  Critical Low / No Sync
                </span>
                <p className="font-mono font-bold text-slate-900 text-sm">&lt; -105 dBm</p>
                <p className="text-[11px] text-rose-900">
                  1 Red / Blinking Bar. Dispatch TT to AREA-MTCE for Outdoor Antenna.
                </p>
              </div>
            </div>
          </div>

          {/* Trouble Ticket Template */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-sm space-y-3 text-white">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <span className="font-mono text-xs font-bold text-cyan-300">
                Standard C-Log Trouble Ticket: 4G LTE Weak Signal (Outdoor Antenna Request)
              </span>
              <button
                onClick={() => copyToClipboard(ttAntennaWeakSignal, 'tt-bb')}
                className="px-3 py-1 bg-[#005696] hover:bg-blue-600 text-white text-xs rounded-lg font-bold flex items-center gap-1.5 transition-colors"
              >
                {copiedId === 'tt-bb' ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                <span>{copiedId === 'tt-bb' ? 'Copied TT!' : 'Copy TT'}</span>
              </button>
            </div>
            <pre className="text-lime-300 font-mono text-xs leading-relaxed whitespace-pre-wrap">
              {ttAntennaWeakSignal}
            </pre>
          </div>

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between pt-2">
            <Link
              href="/knowledge-hub/4g-lte/voice"
              className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to VoLTE Voice</span>
            </Link>

            <Link
              href="/knowledge-hub/4g-lte/prepaid"
              className="px-4 py-2 rounded-xl bg-[#005696] hover:bg-[#004780] text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <span>Next: 4G LTE Prepaid</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}

