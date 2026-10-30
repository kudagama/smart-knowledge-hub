"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
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
  CreditCard,
  Smartphone,
  Globe,
  Server,
  Layers
} from 'lucide-react';

export default function FTTHVasPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const ttPcrfMismatch = `SERVICE: FTTH VAS (Value Added Services)
FAULT: Extra GB Data Add-on Purchased but not deducting from PCRF bucket
SUBSCRIBER: Extra GB activated via MySLT App / LankaQR.
DIAGNOSIS: Payment verified in Billing System. PCRF quota bucket failed to synchronize with ONT session. Speed throttled under FUP.
RULE: RULE_DATA_CONSUMPTION_ADDON_MISMATCH
ACTION: Escalate Trouble Ticket to CEN-CSC-UI / INT-NW-SYS-ADMIN for manual PCRF bucket re-sync.`;

  const ttPublicIp = `SERVICE: FTTH VAS / Broadband
INQUIRY/FAULT: Private to Public Dynamic IP Conversion for CCTV / Port Forwarding
CURRENT IP: CGNAT (100.64.x.x series)
REQUIREMENT: Customer configuring outdoor CCTV DVR / Port Forwarding on ONT 192.168.1.1.
ACTION: Forward service request to INT-NW-SYS-ADMIN to migrate subscriber from CGNAT pool to Public Dynamic IP pool.`;

  const ttExtraGbTopup = `SERVICE: FTTH VAS
CUSTOMER GUIDANCE: How to Add Extra GB via MySLT Self-Care
PROCEDURE GIVEN:
1. Open MySLT App or visit https://myslt.slt.lk
2. Navigate to "Data Add-ons / Boosters"
3. Select required volume (1GB, 5GB, 10GB, 50GB)
4. Confirm payment via LankaQR, Credit Card, or Add-to-Bill.
5. If quota fails to reflect within 10 minutes, advise customer to power cycle ONT.`;

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
          <span className="text-xs text-amber-200">| FTTH VAS Domain</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="hidden sm:inline text-amber-100 font-medium">SLT-Mobitel Intranet</span>
          <div className="w-7 h-7 rounded-full bg-amber-700 border border-amber-400 flex items-center justify-center font-bold text-[11px] text-white">
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
          <span className="font-bold text-[#005696]">Value Added Services (VAS)</span>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/knowledge-hub/faq/ftth"
            className="px-2.5 py-1 rounded bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 font-bold text-[11px] flex items-center gap-1 transition-colors"
          >
            <HelpCircle className="w-3 h-3 text-amber-700" />
            <span>Open FTTH FAQs</span>
          </Link>
        </div>
      </div>

      {/* 3. HERO BANNER */}
      <div className="relative bg-gradient-to-r from-amber-950 via-orange-950 to-slate-900 text-white px-8 py-8 overflow-hidden border-b border-amber-800/40">
        <div className="max-w-5xl mx-auto space-y-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-300/30">
              FTTH VAS Platform
            </span>
            <span className="text-xs text-amber-200">Data Boosters, PCRF Quota Sync &amp; Public IP Configuration</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-400/40">
              <Sparkles className="w-6 h-6 text-amber-300" />
            </div>
            <span>FTTH Value Added Services (VAS)</span>
          </h1>

          <p className="text-xs text-amber-100/90 max-w-2xl font-medium leading-relaxed">
            Troubleshooting for Extra GB booster allocations, PCRF quota deduction errors, Private-to-Public IP routing for CCTV/gaming, and self-care customer guidance.
          </p>
        </div>
      </div>

      {/* 4. MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-8 space-y-6">
        <div className="max-w-5xl mx-auto space-y-6">

          {/* Triage Rule Banner */}
          <div className="bg-white rounded-2xl border border-amber-200 p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Official PCRF Rating Policy
              </span>
              <h3 className="text-base font-black text-slate-900">
                Rule: Data Add-on PCRF Bucket Synchronization
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                When Extra GB is activated but speed remains throttled, verify payment status in VAS Portal. If payment is successful but quota does not deduct from booster bucket, dispatch TT to <b>CEN-CSC-UI / INT-NW-SYS-ADMIN</b>.
              </p>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-slate-400 block uppercase">Target Work Group</span>
              <span className="px-3 py-1 rounded-lg bg-amber-600 text-white font-mono font-black text-xs inline-block mt-0.5">
                CEN-CSC-UI / INT-NW-SYS-ADMIN
              </span>
            </div>
          </div>

          {/* 3 Core VAS Scenarios Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Card 1: Extra GB Top-up Guidance */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-2xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  1
                </div>
                <h4 className="font-black text-sm text-slate-900">Extra GB Top-up via MySLT</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Guide customer to top up data booster via MySLT Portal or App.<br/>
                  1. Visit <b>myslt.slt.lk</b> or mobile app.<br/>
                  2. Select Extra GB pack (1GB / 5GB / 10GB / 50GB).<br/>
                  3. Pay via LankaQR, card, or add to monthly bill.
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(ttExtraGbTopup, 'tt-topup')}
                className="w-full py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs rounded-lg border border-amber-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                {copiedId === 'tt-topup' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-amber-700" />}
                <span>{copiedId === 'tt-topup' ? 'Copied Guidance!' : 'Copy Top-up Steps'}</span>
              </button>
            </div>

            {/* Card 2: PCRF Bucket Sync Fault */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-2xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-800 flex items-center justify-center font-bold">
                  2
                </div>
                <h4 className="font-black text-sm text-slate-900">PCRF Quota Bucket Mismatch</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Customer purchased Extra GB but internet remains throttled at 64Kbps / 128Kbps.<br/>
                  1. Verify payment in billing.<br/>
                  2. Reboot ONT to re-initialize PPPoE session.<br/>
                  3. If still throttled, dispatch TT to <b>CEN-CSC-UI</b>.
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(ttPcrfMismatch, 'tt-pcrf')}
                className="w-full py-1.5 bg-orange-50 hover:bg-orange-100 text-orange-900 font-bold text-xs rounded-lg border border-orange-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                {copiedId === 'tt-pcrf' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-orange-700" />}
                <span>{copiedId === 'tt-pcrf' ? 'Copied TT!' : 'Copy PCRF Fault TT'}</span>
              </button>
            </div>

            {/* Card 3: Public IP for CCTV / Port Forwarding */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-2xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#005696] flex items-center justify-center font-bold">
                  3
                </div>
                <h4 className="font-black text-sm text-slate-900">Public IP / CCTV Port Forwarding</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Customer requires remote access for CCTV DVR, gaming server, or VPN.<br/>
                  1. Check WAN IP on ONT status page.<br/>
                  2. If 100.64.x.x (CGNAT), port forwarding will not work.<br/>
                  3. Dispatch TT to <b>INT-NW-SYS-ADMIN</b> for Public Dynamic IP.
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(ttPublicIp, 'tt-public')}
                className="w-full py-1.5 bg-blue-50 hover:bg-blue-100 text-[#005696] font-bold text-xs rounded-lg border border-blue-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                {copiedId === 'tt-public' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#005696]" />}
                <span>{copiedId === 'tt-public' ? 'Copied TT!' : 'Copy Public IP TT'}</span>
              </button>
            </div>

          </div>

          {/* Standard Trouble Ticket Template Display */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-sm space-y-3 text-white">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <span className="font-mono text-xs font-bold text-amber-300">
                Standard C-Log Trouble Ticket: FTTH VAS (PCRF Quota Bucket Mismatch)
              </span>
              <button
                onClick={() => copyToClipboard(ttPcrfMismatch, 'tt-full')}
                className="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-white text-xs rounded-lg font-bold flex items-center gap-1.5 transition-colors"
              >
                {copiedId === 'tt-full' ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                <span>{copiedId === 'tt-full' ? 'Copied!' : 'Copy Full TT'}</span>
              </button>
            </div>
            <pre className="text-lime-300 font-mono text-xs leading-relaxed whitespace-pre-wrap">
              {ttPcrfMismatch}
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

