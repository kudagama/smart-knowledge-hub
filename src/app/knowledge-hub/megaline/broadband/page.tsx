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
  Zap,
  Home,
  FileText,
  Users,
  Grid,
  ChevronDown,
  Sparkles,
  Radio,
  Clock,
  Layers,
  ArrowUpRight,
  Server,
  Activity
} from 'lucide-react';

export default function MegalineBroadbandPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const ttAdslSync = `SERVICE: Megaline ADSL Broadband
FAULT: ADSL Physical Sync Down / DSL Indicator Blinking Continuously
DSLAM DIAGNOSTIC: VPI/VCI 8/35 configured. Sync rate 0kbps.
RULE: Rule 1 (DSLAM Port Lockup & Copper Loop Testing)
TARGET: DSLAM-MTCE / AREA-MTCE
ACTION: Reset DSLAM port profile in central exchange. If unresolved within 30 mins, dispatch field MTCE for DP copper pair substitution.`;

  const ttSnrDegraded = `SERVICE: Megaline ADSL Broadband
FAULT: Frequent Connection Drops & Slow Speeds
LINE PARAMETERS:
- Downstream SNR Margin: 4.1 dB (Critical Low < 6dB)
- Downstream Attenuation: 51.4 dB (Long Copper Loop > 3.5km)
RULE: Rule 7 (Copper Loop Attenuation Optimization)
TARGET: AREA-MTCE
ACTION: Shift subscriber line to lower attenuation copper pair at street cabinet (Pillar/DP) and verify Rosette box joint resistance.`;

  const ttRouterWalkIn = `SERVICE: Megaline ADSL Broadband
FAULT: Defective ADSL Router Hardware (Power Dead / Lightning Damage)
PRE-CHECKS: Power adapter tested on functional socket. Power LED dark.
RULE: Rule 3 (Defective ADSL Router Replacement)
ACTION: Customer guided to visit nearest SLT Teleshop / RTOM with defective router, power adapter, and NIC/Bill for 1-to-1 warranty replacement.`;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f8fafc] overflow-y-auto select-none">
      
      {/* 1. TOP HEADER BAR */}
      <header className="bg-gradient-to-r from-teal-900 via-cyan-900 to-blue-900 text-white px-5 py-2.5 flex items-center justify-between text-xs shadow-md shrink-0 border-b border-teal-500/20">
        <div className="flex items-center gap-4">
          <Link href="/knowledge-hub" className="flex items-center gap-2 group">
            <div className="flex flex-col leading-none">
              <span className="font-black text-lg text-white tracking-tighter drop-shadow-xs">SLT MOBITEL</span>
              <span className="text-[9px] text-teal-200 uppercase tracking-widest font-bold">Megaline ADSL Broadband</span>
            </div>
          </Link>
          <span className="h-5 w-px bg-white/20 hidden sm:block"></span>
          <span className="text-xs text-teal-100 font-medium hidden md:inline">
            Copper ADSL/ADSL2+, VPI/VCI 8/35, SNR Diagnostics &amp; Rule 3
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/knowledge-hub/trio"
            className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-lg text-xs flex items-center gap-1.5 shadow-md transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Migrate to FTTH Trio ➔</span>
          </Link>
          <div className="w-7 h-7 rounded-full bg-teal-700 border border-teal-400 flex items-center justify-center font-bold text-[11px] text-white">
            GJ
          </div>
        </div>
      </header>

      {/* 2. BREADCRUMBS */}
      <div className="bg-white border-b border-slate-200 px-6 py-2.5 flex items-center justify-between text-xs text-slate-600 shrink-0">
        <div className="flex items-center gap-2">
          <Link href="/knowledge-hub/megaline" className="text-teal-700 font-bold hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Megaline Hub
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/knowledge-hub" className="hover:underline">Knowledge Hub</Link>
          <span className="text-slate-300">/</span>
          <Link href="/knowledge-hub/megaline" className="hover:underline">Megaline</Link>
          <span className="text-slate-300">/</span>
          <span className="font-bold text-teal-800">ADSL Broadband Domain</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200 text-[10px] font-mono font-bold">
            VPI/VCI: 8/35
          </span>
          <span className="px-2.5 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 text-[10px] font-mono font-bold">
            Encapsulation: PPPoE LLC
          </span>
        </div>
      </div>

      {/* 3. HERO BANNER */}
      <div className="p-6 max-w-7xl mx-auto w-full space-y-6">
        <div className="p-6 bg-gradient-to-r from-teal-950 via-cyan-950 to-slate-950 rounded-2xl text-white shadow-xl border border-teal-600/30 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-400/30 flex items-center gap-1.5">
                <Globe className="w-3 h-3" />
                Copper ADSL / ADSL2+
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-slate-300">
                DSLAM Port Sync Protocol
              </span>
            </div>

            <h1 className="text-xl md:text-2xl font-black text-white">
              Megaline ADSL &amp; ADSL2+ Broadband Triage Matrix
            </h1>
            <p className="text-xs md:text-sm text-teal-100 max-w-3xl leading-relaxed">
              Standard Operating Procedures for physical ADSL sync drops, SNR Margin degradation diagnostics, DSLAM port lockups, and Rule 3 Teleshop walk-in router replacements.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs">
              <div className="flex items-center gap-1.5 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>ADSL Standard PVC: VPI 8 / VCI 35</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Target SNR Margin: &gt; 10 dB for stable sync</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Rule 3: Teleshop Walk-in Router Warranty</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. SNR MARGIN & ATTENUATION DIAGNOSTIC MATRIX */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                <Activity className="w-4 h-4 text-teal-700" />
                ADSL Copper Physical Line Diagnostics (SNR &amp; Attenuation)
              </h2>
              <p className="text-xs text-slate-500">
                Use the modem status page (192.168.1.1) or GB Portal to read line health metrics when resolving slow browsing or disconnections.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 text-xs">
            {/* SNR Margin Table */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="font-bold text-slate-900 text-xs flex items-center gap-1">
                  <Radio className="w-3.5 h-3.5 text-teal-700" />
                  Signal-to-Noise Ratio (SNR Margin)
                </span>
                <span className="text-[10px] text-teal-800 font-bold bg-teal-100 px-2 py-0.5 rounded">
                  Higher is Better
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 font-medium">
                  <span>&gt; 20 dB</span>
                  <span className="font-bold">Outstanding (Rock solid sync)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-teal-50 border border-teal-200 text-teal-900 font-medium">
                  <span>11 dB - 20 dB</span>
                  <span className="font-bold">Good / Normal Operation</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 font-medium">
                  <span>6 dB - 10 dB</span>
                  <span className="font-bold">Fair (Occasional drops during rain)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-900 font-medium">
                  <span>&lt; 6 dB</span>
                  <span className="font-bold">Critical Bad (Constant sync drops)</span>
                </div>
              </div>
            </div>

            {/* Line Attenuation Table */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="font-bold text-slate-900 text-xs flex items-center gap-1">
                  <Server className="w-3.5 h-3.5 text-cyan-700" />
                  Line Attenuation (Signal Loss)
                </span>
                <span className="text-[10px] text-cyan-800 font-bold bg-cyan-100 px-2 py-0.5 rounded">
                  Lower is Better
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 font-medium">
                  <span>&lt; 20 dB</span>
                  <span className="font-bold">Outstanding (&lt; 1 km from exchange)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-teal-50 border border-teal-200 text-teal-900 font-medium">
                  <span>20 dB - 30 dB</span>
                  <span className="font-bold">Excellent (1.5 km - 2 km)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 font-medium">
                  <span>30 dB - 40 dB</span>
                  <span className="font-bold">Very Good (2 km - 3 km)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-900 font-medium">
                  <span>&gt; 50 dB</span>
                  <span className="font-bold">High Attenuation (Copper loop limit)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. COPYABLE TROUBLE TICKET TEMPLATES */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-teal-700" />
                ADSL Trouble Ticket (TT) Dispatch Templates
              </h2>
              <p className="text-xs text-slate-500">
                Copy pre-formatted dispatch notes for DSLAM port resets, SNR degradation, and Rule 3 Teleshop router walk-in advice.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            {/* Template 1: DSLAM Sync Lockup */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 text-white space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                  <span className="font-bold text-xs text-emerald-300">TT 1: ADSL Sync Down (Rule 1)</span>
                  <button
                    onClick={() => copyToClipboard(ttAdslSync, 'tt1')}
                    className="px-2 py-1 bg-emerald-600 hover:bg-emerald-500 rounded text-[10px] font-bold flex items-center gap-1 transition-all"
                  >
                    {copiedId === 'tt1' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === 'tt1' ? 'Copied!' : 'Copy TT'}</span>
                  </button>
                </div>
                <pre className="whitespace-pre-wrap font-mono text-[10px] text-emerald-100 leading-relaxed">
                  {ttAdslSync}
                </pre>
              </div>
            </div>

            {/* Template 2: SNR Degraded */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 text-white space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                  <span className="font-bold text-xs text-teal-300">TT 2: Low SNR / Attenuation</span>
                  <button
                    onClick={() => copyToClipboard(ttSnrDegraded, 'tt2')}
                    className="px-2 py-1 bg-teal-600 hover:bg-teal-500 rounded text-[10px] font-bold flex items-center gap-1 transition-all"
                  >
                    {copiedId === 'tt2' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === 'tt2' ? 'Copied!' : 'Copy TT'}</span>
                  </button>
                </div>
                <pre className="whitespace-pre-wrap font-mono text-[10px] text-teal-100 leading-relaxed">
                  {ttSnrDegraded}
                </pre>
              </div>
            </div>

            {/* Template 3: Router Walk-in (Rule 3) */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 text-white space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                  <span className="font-bold text-xs text-cyan-300">TT 3: Rule 3 Router Walk-in</span>
                  <button
                    onClick={() => copyToClipboard(ttRouterWalkIn, 'tt3')}
                    className="px-2 py-1 bg-cyan-600 hover:bg-cyan-500 rounded text-[10px] font-bold flex items-center gap-1 transition-all"
                  >
                    {copiedId === 'tt3' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === 'tt3' ? 'Copied!' : 'Copy TT'}</span>
                  </button>
                </div>
                <pre className="whitespace-pre-wrap font-mono text-[10px] text-cyan-100 leading-relaxed">
                  {ttRouterWalkIn}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* 6. NAVIGATION FOOTER */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-slate-200">
          <Link
            href="/knowledge-hub/megaline/voice"
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: PSTN Voice Domain</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/knowledge-hub/megaline/peo-tv"
              className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <span>Next: Copper PEO TV Domain</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

