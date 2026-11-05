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
  Info,
  Calendar,
  Building2,
  Layers,
  Sparkles,
  Sun,
  Moon
} from 'lucide-react';

const LTE_BB_PACKAGES = [
  { id: 'starter', tier: 'Web Starter', total: '8 GB', day: '4 GB', night: '4 GB', rental: '490', badge: 'Entry Tier', badgeStyle: 'bg-slate-100 text-slate-800 border-slate-300', bestFor: 'Light browsing, email, and banking' },
  { id: 'lite', tier: 'Web Lite', total: '16 GB', day: '8 GB', night: '8 GB', rental: '790', badge: 'Casual User', badgeStyle: 'bg-blue-50 text-blue-800 border-blue-200', bestFor: 'Social media, messaging, and web search' },
  { id: 'pro', tier: 'Web Pro', total: '35 GB', day: '18 GB', night: '17 GB', rental: '1,490', badge: 'Active Student', badgeStyle: 'bg-cyan-50 text-cyan-800 border-cyan-200', bestFor: 'Online classes, streaming clips, and research' },
  { id: 'master', tier: 'Web Master', total: '60 GB', day: '30 GB', night: '30 GB', rental: '2,390', badge: 'Most Popular', badgeStyle: 'bg-emerald-100 text-emerald-900 border-emerald-300', highlight: true, bestFor: 'Family household browsing and entertainment' },
  { id: 'champ', tier: 'Web Champ', total: '95 GB', day: '48 GB', night: '47 GB', rental: '3,490', badge: 'Heavy Usage', badgeStyle: 'bg-indigo-100 text-indigo-900 border-indigo-300', bestFor: 'Multi-device home streaming and downloading' },
  { id: 'life', tier: 'Web Life', total: '150 GB', day: '75 GB', night: '75 GB', rental: '5,390', badge: 'Power User', badgeStyle: 'bg-purple-100 text-purple-900 border-purple-300', bestFor: 'Small office / remote workstation connection' },
  { id: 'supreme', tier: 'Web Supreme', total: '225 GB', day: '115 GB', night: '110 GB', rental: '7,890', badge: 'Ultra Volume', badgeStyle: 'bg-amber-100 text-amber-900 border-amber-300', bestFor: 'Enterprise terabyte downloads & media vault' }
];

export default function LteBroadbandPackagesPage() {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
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
    <div className="flex-1 flex flex-col h-full bg-[#f1f5f9] overflow-y-auto select-none text-slate-800">
      
      {/* 1. TOP SHAREPOINT BAR */}
      <div className="bg-[#004e89] text-white px-5 py-2.5 flex items-center justify-between text-sm shadow-md shrink-0">
        <div className="flex items-center gap-3">
          <Link
            href="/knowledge-hub/4g-lte"
            className="flex items-center gap-2 text-white/90 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>4G LTE Home</span>
          </Link>
          <span className="text-white/40">|</span>
          <span className="font-semibold text-white/90 text-xs">Knowledge Hub</span>
          <span className="text-white/40">/</span>
          <span className="font-bold text-white text-xs">LTE BB Packages</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
            Day + Night Quota Split
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 text-white/80 border border-white/20">
            8 GB to 225 GB Tiers
          </span>
        </div>
      </div>

      {/* 2. HERO BANNER */}
      <div className="bg-gradient-to-r from-[#1e1b4b] via-[#312e81] to-[#005696] text-white px-6 py-7 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs font-black uppercase tracking-wider text-indigo-200">
                Fixed Wireless Broadband
              </span>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 rounded-lg text-xs font-black">
                Night Bonus Included
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white flex items-center gap-3">
              <Globe className="w-9 h-9 text-indigo-300" />
              <span>LTE Broadband (BB) Package Matrix</span>
            </h1>
            <p className="text-slate-200 text-sm md:text-base max-w-3xl leading-relaxed font-medium">
              Standard postpaid volume packages for 4G LTE Fixed Wireless subscribers. Daytime quota (08:00 - 00:00) paired with free night-time volume (00:00 - 08:00) from Web Starter (8 GB) to Web Supreme (225 GB).
            </p>
          </div>

          {/* Quick Stat Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl p-4 shrink-0 text-center space-y-1">
            <div className="text-xs uppercase tracking-wider text-indigo-200 font-bold">Most Popular Plan</div>
            <div className="text-3xl font-black text-white">60 GB</div>
            <div className="text-[11px] font-bold text-emerald-300">Web Master (Rs. 2,390)</div>
            <div className="text-[11px] text-white/80">30GB Day + 30GB Night</div>
          </div>
        </div>
      </div>

      {/* 3. AUTHOR & METADATA BAR */}
      <div className="bg-white border-b border-slate-200 px-6 py-2.5 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 font-bold text-slate-700">
              <Building2 className="w-3.5 h-3.5 text-indigo-700" />
              <span>Chathurani Rathnayake, Senior Assistant Manager (Customer Relations) A7</span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Official Tariff Schedule</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/knowledge-hub/4g-lte/prepaid"
              className="text-xs font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 px-3 py-1 rounded-lg transition-colors flex items-center gap-1 border border-emerald-200"
            >
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>View Prepaid Passes ➔</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 4. NAVIGATION TOOLBAR */}
      <div className="bg-white border-b border-slate-300 px-6 py-3.5 sticky top-0 z-20 shadow-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3.5">
          
          <div className="flex items-center gap-2">
            <span className="font-black text-slate-800 uppercase tracking-wider text-xs flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-700" />
              <span>Postpaid Broadband Tiers ({LTE_BB_PACKAGES.length} Plans)</span>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {LTE_BB_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`bg-white rounded-3xl border-2 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group ${
                    pkg.highlight ? 'border-indigo-400 bg-indigo-50/15' : 'border-slate-200'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${pkg.badgeStyle}`}>
                        {pkg.badge}
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-400">Total: {pkg.total}</span>
                    </div>

                    <h3 className="font-black text-2xl text-slate-900 group-hover:text-indigo-800 transition-colors">
                      {pkg.tier}
                    </h3>

                    {/* Price Block */}
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          Monthly Rental
                        </span>
                        <div className="flex items-baseline gap-1 mt-0.5">
                          <span className="text-sm font-bold text-slate-500">Rs.</span>
                          <span className="text-3xl font-black text-indigo-700">{pkg.rental}</span>
                          <span className="text-xs text-slate-400 font-medium">/mo</span>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-slate-400">+ taxes</span>
                    </div>

                    {/* Quota Split */}
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200/80 space-y-1">
                        <span className="font-bold text-amber-900 flex items-center gap-1 uppercase text-[10px]">
                          <Sun className="w-3.5 h-3.5 text-amber-600" /> Day Quota
                        </span>
                        <p className="font-mono font-black text-slate-900 text-base">{pkg.day}</p>
                        <p className="text-[10px] text-slate-500">08:00 – 00:00</p>
                      </div>

                      <div className="p-3 bg-indigo-50/70 rounded-xl border border-indigo-200/80 space-y-1">
                        <span className="font-bold text-indigo-900 flex items-center gap-1 uppercase text-[10px]">
                          <Moon className="w-3.5 h-3.5 text-indigo-600" /> Night Bonus
                        </span>
                        <p className="font-mono font-black text-slate-900 text-base">{pkg.night}</p>
                        <p className="text-[10px] text-slate-500">00:00 – 08:00</p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 font-medium bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      {pkg.bestFor}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400">Fixed Wireless</span>
                    <button
                      onClick={() => copyToClipboard(`PACKAGE: ${pkg.tier}\nTOTAL DATA: ${pkg.total} (${pkg.day} Day + ${pkg.night} Night)\nRENTAL: Rs. ${pkg.rental} + Tax`, pkg.id)}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-900 font-bold text-xs flex items-center gap-1.5 transition-colors border border-slate-200"
                    >
                      {copiedId === pkg.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedId === pkg.id ? 'Copied Quote!' : 'Copy Quote'}</span>
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
                      <th className="p-4 w-1/4">Package Tier</th>
                      <th className="p-4">Total Allowance</th>
                      <th className="p-4">Standard Day Quota (08-00)</th>
                      <th className="p-4">Free Night Bonus (00-08)</th>
                      <th className="p-4">Monthly Rental (Rs.)</th>
                      <th className="p-4">Target Application</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {LTE_BB_PACKAGES.map((pkg) => (
                      <tr key={pkg.id} className="hover:bg-indigo-50/40 transition-colors">
                        <td className="p-4 font-bold text-slate-900">
                          <span className="block text-sm font-black">{pkg.tier}</span>
                          <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border inline-block mt-1 ${pkg.badgeStyle}`}>
                            {pkg.badge}
                          </span>
                        </td>
                        <td className="p-4 font-mono font-black text-base text-indigo-700">
                          {pkg.total}
                        </td>
                        <td className="p-4 font-mono font-bold text-slate-800">
                          {pkg.day}
                        </td>
                        <td className="p-4 font-mono font-bold text-slate-800">
                          {pkg.night}
                        </td>
                        <td className="p-4 font-mono font-black text-base text-slate-900">
                          Rs. {pkg.rental}
                        </td>
                        <td className="p-4 text-slate-600">
                          {pkg.bestFor}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION C: RF SIGNAL STRENGTH & TROUBLESHOOTING          */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* RSRP Scale */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-indigo-900 font-black text-xs uppercase tracking-wider">
                <Signal className="w-5 h-5 text-indigo-600" />
                <span>RSRP Signal Quality Scale</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 bg-emerald-50 rounded-xl border border-emerald-200">
                  <span className="font-bold text-emerald-900">Excellent Signal:</span>
                  <span className="font-mono font-black text-emerald-800">RSRP &gt; -80 dBm</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-cyan-50 rounded-xl border border-cyan-200">
                  <span className="font-bold text-cyan-900">Good Signal:</span>
                  <span className="font-mono font-black text-cyan-800">-80 dBm to -95 dBm</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-amber-50 rounded-xl border border-amber-200">
                  <span className="font-bold text-amber-900">Moderate / Fair Signal:</span>
                  <span className="font-mono font-black text-amber-800">-95 dBm to -105 dBm</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-rose-50 rounded-xl border border-rose-200">
                  <span className="font-bold text-rose-900">Poor / Weak Signal:</span>
                  <span className="font-mono font-black text-rose-800">RSRP &lt; -105 dBm</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                If RSRP is below -105 dBm or router displays 1 red bar, dispatch trouble ticket for outdoor Yagi antenna installation.
              </p>
            </div>

            {/* Outdoor Antenna Guidance */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#005696] font-black text-xs uppercase tracking-wider">
                <Wrench className="w-5 h-5 text-[#005696]" />
                <span>Outdoor Antenna Installation SOP</span>
              </div>
              <div className="space-y-2.5 text-xs text-slate-600 leading-relaxed font-medium">
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <strong className="text-slate-900 block">External High-Gain Antenna:</strong>
                  <span>Installed when indoor signal is blocked by terrain or heavy concrete walls. Extra charges: approx. Rs. 3,500 – 5,000 depending on cable run.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <strong className="text-slate-900 block">Frequencies:</strong>
                  <span>Operates on Band 40 (2300MHz TDD) with secondary fallback on Band 3 (1800MHz FDD).</span>
                </div>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* SECTION D: C-LOG TROUBLE TICKET TEMPLATE                 */}
          {/* ======================================================== */}
          <div className="bg-slate-900 rounded-3xl border-2 border-slate-800 p-6 shadow-md space-y-3 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-indigo-400" />
                <span className="font-mono text-sm font-bold text-indigo-300">
                  C-Log Trouble Ticket: Slow Browsing Speeds / Weak RF Signal Antenna Request
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(ttAntennaWeakSignal, 'tt-bb')}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs rounded-xl font-bold flex items-center gap-2 transition-colors shadow-xs"
              >
                {copiedId === 'tt-bb' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                <span>{copiedId === 'tt-bb' ? 'Copied Template!' : 'Copy TT Template'}</span>
              </button>
            </div>
            <pre className="text-indigo-200 font-mono text-xs leading-relaxed whitespace-pre-wrap p-2 bg-black/30 rounded-xl overflow-x-auto">
              {ttAntennaWeakSignal}
            </pre>
          </div>

          {/* Bottom Sequential Navigation */}
          <div className="flex items-center justify-between pt-6 border-t-2 border-slate-200">
            <Link
              href="/knowledge-hub/4g-lte/voice"
              className="text-sm font-bold text-slate-600 hover:text-slate-900 flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to LTE Voice (VoLTE)</span>
            </Link>

            <Link
              href="/knowledge-hub/4g-lte/old-charges"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm flex items-center gap-2 shadow-sm transition-colors"
            >
              <span>Next: LTE Old Call Charges</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}
