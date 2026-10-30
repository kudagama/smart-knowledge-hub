"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Globe,
  Wifi,
  Zap,
  Server,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Wrench,
  ShieldCheck,
  Grid
} from 'lucide-react';

export default function FTTHBroadbandPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const ttLosRed = `SERVICE: FTTH Broadband
FAULT: LOS Indicator Red / Optical Signal Lost
PRE-CHECKS: Verified subscriber account on LDAP. GB Portal Rx power unavailable (Rx < -27 dBm).
ACTION: Dispatch Direct Trouble Ticket to AREA-CPE-MTCE for outdoor fiber cut restoration.`;

  const ttWifi = `SERVICE: FTTH Broadband
FAULT: Wi-Fi Not Working (PON Indicator Steady Green)
PRE-CHECKS: WLAN LED checked. SSIDs visible, but authentication failing. Router restarted.
ACTION: Dispatch Trouble Ticket to CEN-CSC-TECH under Broadband Service.`;

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
          <span className="text-xs text-cyan-200">| FTTH Broadband Domain</span>
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
          <span className="font-bold text-[#005696]">Broadband Services</span>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/knowledge-hub/faq/ftth"
            className="px-2.5 py-1 rounded bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100 font-bold text-[11px] flex items-center gap-1 transition-colors"
          >
            <HelpCircle className="w-3 h-3 text-[#005696]" />
            <span>Open FTTH FAQs</span>
          </Link>
        </div>
      </div>

      {/* 3. HERO BANNER */}
      <div className="relative bg-gradient-to-r from-blue-950 via-[#003B66] to-slate-900 text-white px-8 py-8 overflow-hidden border-b border-blue-800/40">
        <div className="max-w-5xl mx-auto space-y-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-cyan-400/20 text-cyan-300 border border-cyan-300/30">
              FTTH GPON Optical
            </span>
            <span className="text-xs text-cyan-200">1Gbps Dual-Band Wi-Fi 6 &amp; Optical Triage</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/20 border border-cyan-400/40">
              <Globe className="w-6 h-6 text-cyan-300" />
            </div>
            <span>FTTH Broadband (High-Speed GPON &amp; Wi-Fi)</span>
          </h1>

          <p className="text-xs text-cyan-100/90 max-w-2xl font-medium leading-relaxed">
            Troubleshooting for Wi-Fi not working, speed degradation, Fair Usage Policy (FUP) throttling, LOS Red fiber cut alarms, and ONT router hardware replacement.
          </p>
        </div>
      </div>

      {/* 4. MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-8 space-y-6">
        <div className="max-w-5xl mx-auto space-y-6">

          {/* 4 High-Frequency Decision Trees Quick Launch */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#005696]" />
                <span>Interactive Troubleshooting Decision Trees</span>
              </h3>
              <span className="text-xs text-slate-400 font-semibold">Visual Step-by-Step SOPs</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              <Link
                href="/knowledge-hub/faq/ftth/wifi-not-working"
                className="p-4 rounded-xl bg-white border border-emerald-200 hover:border-emerald-500 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                      <Wifi className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-black uppercase text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      PON Steady
                    </span>
                  </div>
                  <h4 className="font-black text-sm text-slate-900 group-hover:text-[#005696] transition-colors">
                    Wi-Fi Not Working
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    WLAN LED diagnostics, SSID config, client throughput, and CEN-CSC-TECH escalation.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:underline">
                  <span>Open Flowchart</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              <Link
                href="/knowledge-hub/faq/ftth/browsing-slow"
                className="p-4 rounded-xl bg-white border border-blue-200 hover:border-blue-500 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#005696] flex items-center justify-center">
                      <Globe className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-black uppercase text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      Speed / FUP
                    </span>
                  </div>
                  <h4 className="font-black text-sm text-slate-900 group-hover:text-[#005696] transition-colors">
                    Browsing Slow
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    TR-069 ACS channel inspection, quota verification, Extra GB booster, and Default WG.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#005696] group-hover:underline">
                  <span>Open Flowchart</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              <Link
                href="/knowledge-hub/faq/ftth/pon-los-indicator"
                className="p-4 rounded-xl bg-white border border-rose-200 hover:border-rose-500 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center">
                      <Zap className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-black uppercase text-rose-800 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                      Fiber Cut
                    </span>
                  </div>
                  <h4 className="font-black text-sm text-slate-900 group-hover:text-rose-600 transition-colors">
                    PON / LOS Indicator
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    LOS Red blinking alarm, optical power drop, and Direct Trouble Ticket to AREA-CPE-MTCE.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-rose-700 group-hover:underline">
                  <span>Open Flowchart</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              <Link
                href="/knowledge-hub/faq/ftth/ont-not-working"
                className="p-4 rounded-xl bg-white border border-amber-200 hover:border-amber-500 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                      <Server className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-black uppercase text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      Hardware Fault
                    </span>
                  </div>
                  <h4 className="font-black text-sm text-slate-900 group-hover:text-amber-700 transition-colors">
                    ONT Router Dead
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    Power supply check, charger verification, restart sequence, and field technician dispatch.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-800 group-hover:underline">
                  <span>Open Flowchart</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>
          </div>

          {/* Standard Trouble Ticket Template Display */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-sm space-y-3 text-white">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <span className="font-mono text-xs font-bold text-cyan-300">
                Standard C-Log Trouble Ticket: FTTH LOS Red (Optical Signal Lost)
              </span>
              <button
                onClick={() => copyToClipboard(ttLosRed, 'tt-los')}
                className="px-3 py-1 bg-[#005696] hover:bg-[#0070ba] text-white text-xs rounded-lg font-bold flex items-center gap-1.5 transition-colors"
              >
                {copiedId === 'tt-los' ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                <span>{copiedId === 'tt-los' ? 'Copied!' : 'Copy TT'}</span>
              </button>
            </div>
            <pre className="text-lime-300 font-mono text-xs leading-relaxed whitespace-pre-wrap">
              {ttLosRed}
            </pre>
          </div>

          {/* Navigation link */}
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
              <span>View FTTH FAQs Matrix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}

