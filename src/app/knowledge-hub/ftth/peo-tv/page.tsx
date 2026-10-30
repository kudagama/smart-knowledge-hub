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
  Monitor,
  Radio,
  RefreshCw,
  ExternalLink
} from 'lucide-react';

export default function FTTHPeoTvPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const ttStbHardware = `SERVICE: PEO TV on FTTH
FAULT: STB Hardware Defect / Continual Red LED Boot Loop
ONT CONFIG: LAN 4 bound to VLAN 30. IGMP Snooping enabled.
PRE-CHECKS: Verified HDMI cable and STB 12V DC power adapter. STB fails to boot to SLT PEO TV home screen.
RULE: RULE_STB_ONT_ROUTER_FAULTY
ACTION: Dispatch Trouble Ticket to AREA-MTCE for premises visit and STB hardware replacement.`;

  const ttVlanPort4 = `SERVICE: PEO TV on FTTH
FAULT: PEO TV Network Error / CAS Error 101 (No Multicast Stream)
ONT STATUS: PON Steady Green. LAN Port 4 physical link UP.
DIAGNOSIS: ONT LAN 4 VLAN 30 tag dropped or IGMP Snooping inactive after ONT firmware update.
ACTION: Dispatch Trouble Ticket to CEN-CSC-TECH for remote VLAN 30 rebinding and IGMP multicast stream restore.`;

  const ttRemoteWarranty = `CUSTOMER INQUIRY: PEO TV Remote Controller Defective / Unresponsive
WARRANTY POLICY: 6-Month Replacement Warranty (RULE_REMOTE_CONTROLLER_WARRANTY)
ACTION TAKEN: Verified customer subscription date in I-Hub. Advised customer to visit nearest SLT Teleshop / Regional Telecom Office (RTOM) with customer NIC and defective remote for free unit replacement.`;

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
          <span className="text-xs text-purple-200">| FTTH PEO TV Domain</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="hidden sm:inline text-purple-100 font-medium">SLT-Mobitel Intranet</span>
          <div className="w-7 h-7 rounded-full bg-purple-700 border border-purple-400 flex items-center justify-center font-bold text-[11px] text-white">
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
          <span className="font-bold text-[#005696]">PEO TV (IPTV on Fiber)</span>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/knowledge-hub/faq/ftth"
            className="px-2.5 py-1 rounded bg-purple-50 text-purple-800 border border-purple-200 hover:bg-purple-100 font-bold text-[11px] flex items-center gap-1 transition-colors"
          >
            <HelpCircle className="w-3 h-3 text-purple-600" />
            <span>Open FTTH FAQs</span>
          </Link>
        </div>
      </div>

      {/* 3. HERO BANNER */}
      <div className="relative bg-gradient-to-r from-purple-950 via-indigo-900 to-slate-900 text-white px-8 py-8 overflow-hidden border-b border-purple-800/40">
        <div className="max-w-5xl mx-auto space-y-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-purple-400/20 text-purple-300 border border-purple-300/30">
              FTTH IPTV Platform
            </span>
            <span className="text-xs text-purple-200">ONT Port 4 VLAN 30 Binding &amp; Set-Top Box Triage</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-500/20 border border-purple-400/40">
              <Tv className="w-6 h-6 text-purple-300" />
            </div>
            <span>FTTH PEO TV (Digital IPTV on Fiber)</span>
          </h1>

          <p className="text-xs text-purple-100/90 max-w-2xl font-medium leading-relaxed">
            Standard operating procedures for Set-Top Box hardware faults, Port 4 VLAN 30 IPTV routing, CAS smartcard authorization, and 6-month remote controller warranty policies.
          </p>
        </div>
      </div>

      {/* 4. MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-8 space-y-6">
        <div className="max-w-5xl mx-auto space-y-6">

          {/* Triage Rule Banner */}
          <div className="bg-white rounded-2xl border border-purple-200 p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-purple-800 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                Mandatory Port Configuration
              </span>
              <h3 className="text-base font-black text-slate-900">
                Rule: ONT LAN Port 4 Dedicated VLAN 30 Binding
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                PEO TV STB must always be plugged directly into <b>ONT LAN Port 4</b>. Connecting to Ports 1, 2, or 3 will cause network failure. <b>IGMP Snooping</b> must remain enabled to prevent Wi-Fi network packet flooding.
              </p>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-slate-400 block uppercase">Hardware Replacement</span>
              <span className="px-3 py-1 rounded-lg bg-purple-600 text-white font-mono font-black text-xs inline-block mt-0.5">
                AREA-MTCE / Teleshop
              </span>
            </div>
          </div>

          {/* 3 Core Scenarios Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Card 1: STB Hardware Fault */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-2xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
                  1
                </div>
                <h4 className="font-black text-sm text-slate-900">STB Hardware Defect (Boot Loop)</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  STB power LED stuck on Red, constant rebooting, or no HDMI output signal to TV.<br/>
                  1. Check 12V adapter and power socket.<br/>
                  2. Try power cycle (30 seconds OFF).<br/>
                  3. If persistent, dispatch TT to <b>AREA-MTCE</b> for unit swap.
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(ttStbHardware, 'tt-stb')}
                className="w-full py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold text-xs rounded-lg border border-purple-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                {copiedId === 'tt-stb' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-purple-700" />}
                <span>{copiedId === 'tt-stb' ? 'Copied TT!' : 'Copy STB Fault TT'}</span>
              </button>
            </div>

            {/* Card 2: VLAN 30 / Network Error */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-2xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold">
                  2
                </div>
                <h4 className="font-black text-sm text-slate-900">VLAN 30 / CAS Error 101</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Screen displays "Connecting to Server" or CAS Error 101/102.<br/>
                  1. Confirm Ethernet cable is plugged into <b>LAN 4</b> on ONT.<br/>
                  2. Check ONT Port 4 LED status (flashing amber/green).<br/>
                  3. Escalate to <b>CEN-CSC-TECH</b> for VLAN 30 rebinding.
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(ttVlanPort4, 'tt-vlan')}
                className="w-full py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-bold text-xs rounded-lg border border-indigo-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                {copiedId === 'tt-vlan' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-indigo-700" />}
                <span>{copiedId === 'tt-vlan' ? 'Copied TT!' : 'Copy VLAN 30 TT'}</span>
              </button>
            </div>

            {/* Card 3: Remote Controller Warranty */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-2xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  3
                </div>
                <h4 className="font-black text-sm text-slate-900">Remote Controller 6-Month Warranty</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Remote controller buttons unresponsive or battery compartment damaged.<br/>
                  <b>Policy:</b> 6-month free replacement warranty.<br/>
                  Advise subscriber to visit nearest <b>SLT Teleshop / RTOM</b> with NIC and faulty remote controller.
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(ttRemoteWarranty, 'tt-remote')}
                className="w-full py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs rounded-lg border border-amber-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                {copiedId === 'tt-remote' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-amber-700" />}
                <span>{copiedId === 'tt-remote' ? 'Copied Guidance!' : 'Copy Teleshop Guidance'}</span>
              </button>
            </div>

          </div>

          {/* Standard Trouble Ticket Template Display */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-sm space-y-3 text-white">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <span className="font-mono text-xs font-bold text-purple-300">
                Standard C-Log Trouble Ticket: FTTH PEO TV (STB Hardware Failure)
              </span>
              <button
                onClick={() => copyToClipboard(ttStbHardware, 'tt-full')}
                className="px-3 py-1 bg-purple-600 hover:bg-purple-500 text-white text-xs rounded-lg font-bold flex items-center gap-1.5 transition-colors"
              >
                {copiedId === 'tt-full' ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                <span>{copiedId === 'tt-full' ? 'Copied!' : 'Copy Full TT'}</span>
              </button>
            </div>
            <pre className="text-lime-300 font-mono text-xs leading-relaxed whitespace-pre-wrap">
              {ttStbHardware}
            </pre>
          </div>

          {/* Bottom navigation */}
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

