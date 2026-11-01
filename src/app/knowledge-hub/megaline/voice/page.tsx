"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
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
  ArrowUpRight
} from 'lucide-react';

export default function MegalineVoicePage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const ttVoiceMdf = `SERVICE: Megaline PSTN Voice
FAULT: No Dial Tone / PSTN Line Dead
LOOP RESISTANCE TEST: MDF test shows high loop resistance (>1200 ohms) / open loop
RULE: Rule 11 (Copper Voice Line Fault)
TARGET: MDF Switch Maintenance
ACTION: Test MDF line jumper, reset line card port, and dispatch to AREA-MTCE if underground cable fault detected.`;

  const ttDropWire = `SERVICE: Megaline PSTN Voice
FAULT: Outdoor Copper Drop Wire Physical Snapped / Damaged
CUSTOMER REPORT: Cable cut by fallen tree / excavation
PRE-CHECKS: Verified subscriber account on LDAP/CRM.
TARGET: AREA-MTCE (Field Operations)
ACTION: Dispatch Direct Trouble Ticket to AREA-MTCE for copper drop wire replacement from DP to premises.`;

  const ttLineNoise = `SERVICE: Megaline PSTN Voice
FAULT: Severe Line Crackling & Earth Noise (Rainy Season Disturbance)
LINE TEST: Low insulation resistance between A-wire and B-wire / Earth leakage detected.
RULE: Rule 11 (Insulation & Earth Fault)
TARGET: AREA-MTCE (Cable Maintenance)
ACTION: Check local distribution box (DP) terminal insulation and replace corroded drop wire junction.`;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f8fafc] overflow-y-auto select-none">
      
      {/* 1. TOP HEADER BAR */}
      <header className="bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-900 text-white px-5 py-2.5 flex items-center justify-between text-xs shadow-md shrink-0 border-b border-teal-500/20">
        <div className="flex items-center gap-4">
          <Link href="/knowledge-hub" className="flex items-center gap-2 group">
            <div className="flex flex-col leading-none">
              <span className="font-black text-lg text-white tracking-tighter drop-shadow-xs">SLT MOBITEL</span>
              <span className="text-[9px] text-teal-200 uppercase tracking-widest font-bold">Megaline PSTN Voice</span>
            </div>
          </Link>
          <span className="h-5 w-px bg-white/20 hidden sm:block"></span>
          <span className="text-xs text-teal-100 font-medium hidden md:inline">
            Copper Wireline Voice SOPs, Exchange MDF Triage &amp; Rule 11
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
          <span className="font-bold text-teal-800">PSTN Voice Domain</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-mono font-bold">
            Exchange POTS: -48V DC
          </span>
          <span className="px-2.5 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 text-[10px] font-mono font-bold">
            Rule 11 (MDF Dispatch)
          </span>
        </div>
      </div>

      {/* 3. HERO BANNER */}
      <div className="p-6 max-w-7xl mx-auto w-full space-y-6">
        <div className="p-6 bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-950 rounded-2xl text-white shadow-xl border border-teal-600/30 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1.5">
                <Phone className="w-3 h-3" />
                PSTN Copper Voice
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-slate-300">
                Rule 11 Exchange Protocol
              </span>
            </div>

            <h1 className="text-xl md:text-2xl font-black text-white">
              Megaline PSTN Copper Voice Standard Operating Procedures
            </h1>
            <p className="text-xs md:text-sm text-teal-100 max-w-3xl leading-relaxed">
              Standardized triage workflow for copper telephone line faults, exchange MDF line test procedures, Earth leakage checks, and Rule 11 trouble ticket dispatch.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs">
              <div className="flex items-center gap-1.5 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Loop Resistance: Normal &lt; 1,200 Ω</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Line Voltage: -48V DC (On-Hook) / ~9-12V (Off-Hook)</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>MDF Line Test before Field Dispatch</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. STEP-BY-STEP TRIAGE DECISION TREE */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                Step-by-Step Triage for "No Dial Tone" / Dead Phone
              </h2>
              <p className="text-xs text-slate-500">
                Follow this mandatory protocol when a subscriber calls 1212 reporting a dead copper landline.
              </p>
            </div>
            <span className="px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-md text-[10px] font-bold">
              Mandatory SOP
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-xs">
            {/* Step 1 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-teal-700 text-white font-black text-xs flex items-center justify-center">
                  1
                </span>
                <span className="font-mono text-[10px] text-teal-800 font-bold bg-teal-100 px-2 py-0.5 rounded">
                  Customer Premises Check
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-xs">Isolate Telephone Instrument</h3>
              <ul className="space-y-1.5 text-slate-600 leading-relaxed">
                <li>• Ask customer to disconnect any ADSL splitter or extension cord.</li>
                <li>• Plug the phone instrument directly into the main wall socket (Rosette Box).</li>
                <li>• Test with a known working telephone instrument if available.</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-teal-700 text-white font-black text-xs flex items-center justify-center">
                  2
                </span>
                <span className="font-mono text-[10px] text-teal-800 font-bold bg-teal-100 px-2 py-0.5 rounded">
                  Exchange MDF Test
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-xs">MDF Line Loop Testing (Rule 11)</h3>
              <ul className="space-y-1.5 text-slate-600 leading-relaxed">
                <li>• Query Line Test on Clarity / C-Log system for subscriber number.</li>
                <li>• Verify if loop is Open, Short-circuit, or Earth-faulted.</li>
                <li>• If loop is open inside exchange, dispatch TT to MDF for jumper renewal.</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-teal-700 text-white font-black text-xs flex items-center justify-center">
                  3
                </span>
                <span className="font-mono text-[10px] text-teal-800 font-bold bg-teal-100 px-2 py-0.5 rounded">
                  Field Maintenance Dispatch
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-xs">Dispatch to AREA-MTCE</h3>
              <ul className="space-y-1.5 text-slate-600 leading-relaxed">
                <li>• If loop test indicates outdoor copper cable cut or DP terminal fault.</li>
                <li>• Dispatch TT with exact distribution box (DP) number to AREA-MTCE.</li>
                <li>• Inform subscriber: Field technician visit within standard SLA (24 hrs).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 5. COPYABLE TROUBLE TICKET TEMPLATES */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-teal-700" />
                Frontline Trouble Ticket (TT) Dispatch Templates
              </h2>
              <p className="text-xs text-slate-500">
                1-Click copy standard formatted notes for MINT CRM &amp; C-Log trouble ticketing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            {/* Template 1: Rule 11 MDF */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 text-white space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                  <span className="font-bold text-xs text-emerald-300">TT 1: No Dial Tone (Rule 11 MDF)</span>
                  <button
                    onClick={() => copyToClipboard(ttVoiceMdf, 'tt1')}
                    className="px-2 py-1 bg-emerald-600 hover:bg-emerald-500 rounded text-[10px] font-bold flex items-center gap-1 transition-all"
                  >
                    {copiedId === 'tt1' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === 'tt1' ? 'Copied!' : 'Copy TT'}</span>
                  </button>
                </div>
                <pre className="whitespace-pre-wrap font-mono text-[10px] text-emerald-100 leading-relaxed">
                  {ttVoiceMdf}
                </pre>
              </div>
            </div>

            {/* Template 2: Outdoor Drop Wire Cut */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 text-white space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                  <span className="font-bold text-xs text-teal-300">TT 2: Outdoor Drop Wire Broken</span>
                  <button
                    onClick={() => copyToClipboard(ttDropWire, 'tt2')}
                    className="px-2 py-1 bg-teal-600 hover:bg-teal-500 rounded text-[10px] font-bold flex items-center gap-1 transition-all"
                  >
                    {copiedId === 'tt2' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === 'tt2' ? 'Copied!' : 'Copy TT'}</span>
                  </button>
                </div>
                <pre className="whitespace-pre-wrap font-mono text-[10px] text-teal-100 leading-relaxed">
                  {ttDropWire}
                </pre>
              </div>
            </div>

            {/* Template 3: Line Noise / Earth Fault */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 text-white space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                  <span className="font-bold text-xs text-cyan-300">TT 3: Line Crackling &amp; Earth Fault</span>
                  <button
                    onClick={() => copyToClipboard(ttLineNoise, 'tt3')}
                    className="px-2 py-1 bg-cyan-600 hover:bg-cyan-500 rounded text-[10px] font-bold flex items-center gap-1 transition-all"
                  >
                    {copiedId === 'tt3' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === 'tt3' ? 'Copied!' : 'Copy TT'}</span>
                  </button>
                </div>
                <pre className="whitespace-pre-wrap font-mono text-[10px] text-cyan-100 leading-relaxed">
                  {ttLineNoise}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* 6. NAVIGATION FOOTER */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-slate-200">
          <Link
            href="/knowledge-hub/megaline"
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Megaline Hub</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/knowledge-hub/megaline/broadband"
              className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <span>Next: ADSL Broadband Domain</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

