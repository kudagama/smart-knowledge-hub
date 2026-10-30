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
  ChevronDown
} from 'lucide-react';

export default function FTTHVoicePage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const ttVoiceMdf = `SERVICE: FTTH Voice
FAULT: No Dial Tone / Voice Line Inoperable
ONT PON STATUS: Steady Green (Normal Optical Transmission)
DIAGNOSIS: Optical signal healthy. Voice line inactive on SIP port.
RULE: Rule 11 (Voice Line Fault on Fiber)
ACTION: Dispatch TT to MDF for SIP port reactivation.`;

  const ttDropWire = `SERVICE: FTTH Voice
FAULT: Outdoor Drop Wire (Fiber Cable) Physical Break / Damaged
CUSTOMER REPORT: Cable cut by fallen tree / excavation
PRE-CHECKS: Verified subscriber account on LDAP.
ACTION: Dispatch Direct Trouble Ticket to AREA-MTCE for outdoor drop cable replacement.`;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f4f7f9] overflow-y-auto select-none">
      
      {/* 1. TOP SHAREPOINT BAR */}
      <div className="bg-[#005a9c] text-white px-4 py-2 flex items-center justify-between text-xs shadow-xs shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/knowledge-hub" className="flex items-center gap-1.5 cursor-pointer hover:opacity-80">
            <Grid className="w-4 h-4 text-white" />
            <span className="font-bold tracking-tight text-sm">SharePoint</span>
          </Link>
          <span className="text-xs text-cyan-200">| FTTH Voice Domain</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="hidden sm:inline text-cyan-100 font-medium">SLT-Mobitel Intranet</span>
          <div className="w-7 h-7 rounded-full bg-cyan-700 border border-cyan-400 flex items-center justify-center font-bold text-[11px] text-white">
            GJ
          </div>
        </div>
      </div>

      {/* 2. BREADCRUMB */}
      <div className="bg-white border-b border-slate-200 px-6 py-2.5 flex items-center justify-between text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Link href="/knowledge-hub/ftth" className="text-[#005696] font-bold hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to FTTH Services
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/knowledge-hub" className="hover:underline">Knowledge Hub</Link>
          <span className="text-slate-300">/</span>
          <Link href="/knowledge-hub/ftth" className="hover:underline">SLT Fibre</Link>
          <span className="text-slate-300">/</span>
          <span className="font-bold text-[#005696]">Voice Services</span>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/knowledge-hub/faq/ftth"
            className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 font-bold text-[11px] flex items-center gap-1 transition-colors"
          >
            <HelpCircle className="w-3 h-3 text-emerald-600" />
            <span>Open FTTH FAQs</span>
          </Link>
        </div>
      </div>

      {/* 3. HERO BANNER */}
      <div className="relative bg-gradient-to-r from-teal-900 via-emerald-900 to-slate-900 text-white px-8 py-8 overflow-hidden border-b border-emerald-800/40">
        <div className="max-w-5xl mx-auto space-y-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-teal-400/20 text-teal-300 border border-teal-300/30">
              FTTH Telephony
            </span>
            <span className="text-xs text-teal-200">SIP Registration &amp; ONT TEL Port Diagnostics</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-teal-500/20 border border-teal-400/40">
              <Phone className="w-6 h-6 text-teal-300" />
            </div>
            <span>FTTH Voice Services (Telephone &amp; Dial Tone)</span>
          </h1>

          <p className="text-xs text-teal-100/90 max-w-2xl font-medium leading-relaxed">
            Troubleshooting for FTTH telephone dead / no dial tone, Rule 11 exchange MDF routing, outdoor drop wire damage, and PSTN-to-Fiber migration rules.
          </p>
        </div>
      </div>

      {/* 4. MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-8 space-y-6">
        <div className="max-w-5xl mx-auto space-y-6">

          {/* Triage Rule Banner */}
          <div className="bg-white rounded-2xl border border-teal-200 p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                Official Triage Rule
              </span>
              <h3 className="text-base font-black text-slate-900">
                Rule 11: Voice Line Fault on Fiber (No Dial Tone)
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                If ONT PON is ON (Steady Green), optical power is healthy. Voice fault is on the SIP port. Dispatch directly to <b>MDF (Main Distribution Frame)</b>.
              </p>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-slate-400 block uppercase">Target Work Group</span>
              <span className="px-3 py-1 rounded-lg bg-teal-600 text-white font-mono font-black text-xs inline-block mt-0.5">
                MDF / AREA-MTCE
              </span>
            </div>
          </div>

          {/* 3 Core Voice Scenarios Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-2xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  1
                </div>
                <h4 className="font-black text-sm text-slate-900">Phone Not Working (No Dial Tone)</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  1. Check RJ11 cable connected firmly to Phone 1 / TEL port on ONT.<br/>
                  2. Check if TEL indicator LED is ON.<br/>
                  3. If PON is steady green, dispatch ticket directly to <b>MDF</b> frame.
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(ttVoiceMdf, 'tt-mdf')}
                className="w-full py-1.5 bg-teal-50 hover:bg-teal-100 text-teal-900 font-bold text-xs rounded-lg border border-teal-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                {copiedId === 'tt-mdf' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-teal-700" />}
                <span>{copiedId === 'tt-mdf' ? 'Copied TT!' : 'Copy MDF TT Template'}</span>
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-2xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold">
                  2
                </div>
                <h4 className="font-black text-sm text-slate-900">Drop Wire / Cable Physical Cut</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Outdoor fiber cable damaged or broken by vehicle or tree fall. Record exact pole number and nearest landmark. Dispatch direct TT to <b>AREA-MTCE</b>.
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(ttDropWire, 'tt-drop')}
                className="w-full py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-900 font-bold text-xs rounded-lg border border-rose-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                {copiedId === 'tt-drop' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-rose-700" />}
                <span>{copiedId === 'tt-drop' ? 'Copied TT!' : 'Copy Drop Wire TT'}</span>
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-2xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#005696] flex items-center justify-center font-bold">
                  3
                </div>
                <h4 className="font-black text-sm text-slate-900">PSTN Copper to FTTH Migration</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Customer requesting to retain original 7-digit copper phone number when upgrading to Fiber. Advise customer to visit nearest <b>RTOM (Regional Telecom Office)</b> with NIC.
                </p>
              </div>
              <div className="p-2 bg-blue-50/70 rounded-lg border border-blue-200 text-[11px] font-semibold text-blue-900">
                Customer Walk-in to RTOM with NIC and bill
              </div>
            </div>

          </div>

          {/* Standard Trouble Ticket Template Display */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-sm space-y-3 text-white">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <span className="font-mono text-xs font-bold text-teal-300">
                Standard C-Log Trouble Ticket: FTTH Voice (Rule 11)
              </span>
              <button
                onClick={() => copyToClipboard(ttVoiceMdf, 'tt-full')}
                className="px-3 py-1 bg-teal-600 hover:bg-teal-500 text-white text-xs rounded-lg font-bold flex items-center gap-1.5 transition-colors"
              >
                {copiedId === 'tt-full' ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                <span>{copiedId === 'tt-full' ? 'Copied!' : 'Copy Full TT'}</span>
              </button>
            </div>
            <pre className="text-lime-300 font-mono text-xs leading-relaxed whitespace-pre-wrap">
              {ttVoiceMdf}
            </pre>
          </div>

          {/* Bottom link to FAQ */}
          <div className="flex items-center justify-between pt-2">
            <Link
              href="/knowledge-hub/ftth"
              className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to FTTH Domains</span>
            </Link>

            <Link
              href="/knowledge-hub/faq/ftth"
              className="px-4 py-2 rounded-xl bg-[#005696] hover:bg-[#004780] text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <span>View Official FTTH FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}

