"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Tv,
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
  SlidersHorizontal,
  Info
} from 'lucide-react';

export default function MegalinePeoTvPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const ttSplitterFault = `SERVICE: Megaline PEO TV on Copper ADSL
FAULT: PEO TV Picture Freezing / ADSL Sync Drops when Phone Rings
ISOLATION TEST: Performed phone call test without microfilter - noise confirmed on voice.
DIAGNOSIS: Defective ADSL Microfilter / High-Frequency Voice Splitter.
RULE: Rule 15 (Microfilter / Splitter Defect)
ACTION: Customer guided to collect free replacement Splitter from nearest SLT Teleshop, or dispatch AREA-MTCE with replacement splitter.`;

  const ttStbDefect = `SERVICE: Megaline PEO TV on Copper ADSL
FAULT: STB Hardware Defect / Continual Red Power LED Boot Loop
PRE-CHECKS: Power adapter tested on functional wall socket. Remote batteries fresh.
STB MODEL: ZTE / Huawei Copper STB
RULE: Rule 2 (STB Hardware 1-to-1 Warranty Replacement)
ACTION: Advise customer to visit nearest Teleshop with defective STB, remote controller, power adapter, and latest bill for 1-to-1 warranty exchange.`;

  const ttBandwidthDrop = `SERVICE: Megaline PEO TV on Copper ADSL
FAULT: Insufficient Copper Bandwidth / ADSL Downstream Drops below 4Mbps
LINE PARAMETERS: Downstream sync only 2,800 kbps (Insufficient for PEO TV SD stream).
DIAGNOSIS: Copper cable attenuation exceeds transmission threshold for IPTV.
TARGET: AREA-MTCE / Migration Desk
ACTION: Dispatch AREA-MTCE for line loop optimization, or recommend customer migrate to FTTH (Fiber) Trio for seamless HD streaming.`;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f8fafc] overflow-y-auto select-none">
      
      {/* 1. TOP HEADER BAR */}
      <header className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-white px-5 py-2.5 flex items-center justify-between text-xs shadow-md shrink-0 border-b border-indigo-500/20">
        <div className="flex items-center gap-4">
          <Link href="/knowledge-hub" className="flex items-center gap-2 group">
            <div className="flex flex-col leading-none">
              <span className="font-black text-lg text-white tracking-tighter drop-shadow-xs">SLT MOBITEL</span>
              <span className="text-[9px] text-indigo-200 uppercase tracking-widest font-bold">Megaline PEO TV</span>
            </div>
          </Link>
          <span className="h-5 w-px bg-white/20 hidden sm:block"></span>
          <span className="text-xs text-indigo-100 font-medium hidden md:inline">
            Copper ADSL IPTV, VPI/VCI 8/36, Microfilter Triage &amp; STB Warranty
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
          <div className="w-7 h-7 rounded-full bg-indigo-700 border border-indigo-400 flex items-center justify-center font-bold text-[11px] text-white">
            GJ
          </div>
        </div>
      </header>

      {/* 2. BREADCRUMBS */}
      <div className="bg-white border-b border-slate-200 px-6 py-2.5 flex items-center justify-between text-xs text-slate-600 shrink-0">
        <div className="flex items-center gap-2">
          <Link href="/knowledge-hub/megaline" className="text-indigo-700 font-bold hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Megaline Hub
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/knowledge-hub" className="hover:underline">Knowledge Hub</Link>
          <span className="text-slate-300">/</span>
          <Link href="/knowledge-hub/megaline" className="hover:underline">Megaline</Link>
          <span className="text-slate-300">/</span>
          <span className="font-bold text-indigo-800">Copper PEO TV Domain</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded bg-purple-50 text-purple-800 border border-purple-200 text-[10px] font-mono font-bold">
            VPI/VCI: 8/36 (IPTV)
          </span>
          <span className="px-2.5 py-0.5 rounded bg-indigo-50 text-indigo-800 border border-indigo-200 text-[10px] font-mono font-bold">
            Min Copper Sync: 4 Mbps
          </span>
        </div>
      </div>

      {/* 3. HERO BANNER */}
      <div className="p-6 max-w-7xl mx-auto w-full space-y-6">
        <div className="p-6 bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-950 rounded-2xl text-white shadow-xl border border-indigo-600/30 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-400/30 flex items-center gap-1.5">
                <Tv className="w-3 h-3" />
                IPTV on Copper Wireline
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-slate-300">
                ADSL2+ PVC Protocol
              </span>
            </div>

            <h1 className="text-xl md:text-2xl font-black text-white">
              Megaline PEO TV (Copper IPTV) Standard Operating Procedures
            </h1>
            <p className="text-xs md:text-sm text-purple-100 max-w-3xl leading-relaxed">
              Triage workflows for PEO TV streaming over ADSL copper wirelines, ADSL microfilter isolation, screen pixelation during telephone calls, and STB replacement guidelines.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs">
              <div className="flex items-center gap-1.5 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Dedicated PVC: VPI 8 / VCI 36</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Microfilter: Essential for simultaneous voice &amp; TV</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Remote Controller: 6-Month Official Warranty</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. MICROFILTER & SPLITTER WIRING TRIAGE GUIDE */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-indigo-700" />
                ADSL Microfilter / Splitter Wiring &amp; Fault Diagnosis
              </h2>
              <p className="text-xs text-slate-500">
                Over 75% of copper PEO TV complaints (freezing screen, crackling line) are caused by improper microfilter wiring or damaged splitters.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-xs">
            {/* Step 1 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="font-mono text-[10px] text-indigo-800 font-bold bg-indigo-100 px-2 py-0.5 rounded">
                Check 1: Splitter Port Wiring
              </span>
              <h3 className="font-bold text-slate-900 text-xs">Verify Wall Socket Connection</h3>
              <p className="text-slate-600 leading-relaxed">
                Ensure incoming copper line connects to <strong>LINE</strong>. Telephone instrument connects to <strong>PHONE</strong>. ADSL Router connects to <strong>MODEM</strong>. Reversing PHONE and MODEM ports cuts off high frequencies.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="font-mono text-[10px] text-indigo-800 font-bold bg-indigo-100 px-2 py-0.5 rounded">
                Check 2: Extension Isolation Test
              </span>
              <h3 className="font-bold text-slate-900 text-xs">Isolate Parallel Phones</h3>
              <p className="text-slate-600 leading-relaxed">
                Every telephone instrument on the premises must have its own microfilter. If a customer has a bedroom extension without a filter, answering it will instantly disconnect the PEO TV stream.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="font-mono text-[10px] text-indigo-800 font-bold bg-indigo-100 px-2 py-0.5 rounded">
                Check 3: Teleshop Splitter Swap
              </span>
              <h3 className="font-bold text-slate-900 text-xs">Free Splitter Replacement</h3>
              <p className="text-slate-600 leading-relaxed">
                If the microfilter internal capacitor is blown (usually from lightning), guide subscriber to collect a replacement ADSL splitter free of charge at any SLT Teleshop without waiting for a field visit.
              </p>
            </div>
          </div>
        </div>

        {/* 5. COPYABLE TROUBLE TICKET TEMPLATES */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-indigo-700" />
                Copper PEO TV Trouble Ticket (TT) Templates
              </h2>
              <p className="text-xs text-slate-500">
                1-Click copy formatted notes for MINT CRM &amp; C-Log trouble ticketing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            {/* Template 1: Splitter Fault */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 text-white space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                  <span className="font-bold text-xs text-purple-300">TT 1: Splitter Defect (Freeze on Call)</span>
                  <button
                    onClick={() => copyToClipboard(ttSplitterFault, 'tt1')}
                    className="px-2 py-1 bg-purple-600 hover:bg-purple-500 rounded text-[10px] font-bold flex items-center gap-1 transition-all"
                  >
                    {copiedId === 'tt1' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === 'tt1' ? 'Copied!' : 'Copy TT'}</span>
                  </button>
                </div>
                <pre className="whitespace-pre-wrap font-mono text-[10px] text-purple-100 leading-relaxed">
                  {ttSplitterFault}
                </pre>
              </div>
            </div>

            {/* Template 2: STB Hardware Defect */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 text-white space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                  <span className="font-bold text-xs text-indigo-300">TT 2: STB Red LED Boot Loop</span>
                  <button
                    onClick={() => copyToClipboard(ttStbDefect, 'tt2')}
                    className="px-2 py-1 bg-indigo-600 hover:bg-indigo-500 rounded text-[10px] font-bold flex items-center gap-1 transition-all"
                  >
                    {copiedId === 'tt2' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === 'tt2' ? 'Copied!' : 'Copy TT'}</span>
                  </button>
                </div>
                <pre className="whitespace-pre-wrap font-mono text-[10px] text-indigo-100 leading-relaxed">
                  {ttStbDefect}
                </pre>
              </div>
            </div>

            {/* Template 3: Insufficient Copper Bandwidth */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 text-white space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                  <span className="font-bold text-xs text-pink-300">TT 3: Insufficient Bandwidth</span>
                  <button
                    onClick={() => copyToClipboard(ttBandwidthDrop, 'tt3')}
                    className="px-2 py-1 bg-pink-600 hover:bg-pink-500 rounded text-[10px] font-bold flex items-center gap-1 transition-all"
                  >
                    {copiedId === 'tt3' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === 'tt3' ? 'Copied!' : 'Copy TT'}</span>
                  </button>
                </div>
                <pre className="whitespace-pre-wrap font-mono text-[10px] text-pink-100 leading-relaxed">
                  {ttBandwidthDrop}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* 6. NAVIGATION FOOTER */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-slate-200">
          <Link
            href="/knowledge-hub/megaline/broadband"
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: ADSL Broadband Domain</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/knowledge-hub/megaline"
              className="px-4 py-2 bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <span>Back to Megaline Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

