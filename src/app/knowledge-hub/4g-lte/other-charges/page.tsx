"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Wrench,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  AlertCircle,
  ShieldAlert,
  ShieldCheck,
  FileText,
  Grid,
  Radio,
  Clock,
  Zap,
  Info,
  Calendar,
  CheckCircle2,
  Search,
  ExternalLink,
  ChevronRight,
  AlertTriangle,
  History,
  PhoneCall,
  Wifi,
  Sparkles,
  Calculator,
  SlidersHorizontal,
  Download,
  Flame,
  ZapOff,
  Cpu,
  Layers,
  HelpCircle
} from 'lucide-react';

// CAT 4 Indoor CPE Damage Charges
const CAT4_INDOOR_CHARGES = [
  {
    item: 'Complete Set',
    currentRate: '2,900',
    priorRates: '1,900 / 1,500',
    badge: 'Full Bundle',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    description: 'Includes router mainboard chassis, power adaptor, external rabbit-ear antennas, battery (if equipped), and internal SIM.'
  },
  {
    item: 'Unit Only',
    currentRate: '2,400',
    priorRates: '1,500 / 1,300',
    badge: 'Core Router',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    description: 'Only the router unit (Huawei B310/B311/Tozed) without power adapter, cables, or detachable antennas.'
  },
  {
    item: 'CPE Antenna',
    currentRate: '500',
    priorRates: '500 / 300',
    badge: 'RF Element',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
    description: 'Original SMA-connector detachable paddle / high-gain omni antenna for basic CAT 4 units.'
  },
  {
    item: 'SIM Card Replacement',
    currentRate: '200',
    priorRates: '100',
    badge: 'Subscriber Identity',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    description: 'TRCSL registered 4G LTE SIM card re-issuance fee for physical damage, burnt chip, or lost card.'
  },
  {
    item: 'Power Adaptor / Charger',
    currentRate: '350',
    priorRates: '550',
    badge: 'Power Supply',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    description: 'Original 12V 1A / 1.5A DC power brick adaptor matching manufacturer specification.'
  },
  {
    item: 'Battery (Only If Applicable)',
    currentRate: '600',
    priorRates: '500 / 250',
    badge: 'Internal Backup',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    description: 'Rechargeable internal lithium-ion battery cell equipped on selected portable/backup 4G CPE models.'
  }
];

// CAT 6 Indoor CPE Damage Charges (Tozed High-Throughput)
const CAT6_INDOOR_CHARGES = [
  {
    item: 'Complete Set',
    currentRate: '4,900',
    priorRates: 'New Tier',
    badge: 'Advanced Bundle',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    description: 'Full CAT 6 advanced router package: Tozed dual-band Wi-Fi unit, high-capacity power supply, antennas, and SIM.'
  },
  {
    item: 'Unit Only',
    currentRate: '4,300',
    priorRates: 'New Tier',
    badge: 'Core Router',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    description: 'Advanced Tozed Carrier Aggregation router unit without external accessories.'
  },
  {
    item: 'CPE Antenna',
    currentRate: '750',
    priorRates: 'New Tier',
    badge: 'Dual-Band RF',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
    description: 'Special high-gain MIMO antennas tuned for Band 40 and Band 38 CA carrier aggregation.'
  },
  {
    item: 'SIM Card Replacement',
    currentRate: '200',
    priorRates: '100',
    badge: 'Subscriber Identity',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    description: 'High-speed USIM profile replacement.'
  },
  {
    item: 'Power Adaptor / Charger',
    currentRate: '950',
    priorRates: 'New Tier',
    badge: 'High-Amp Supply',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    description: 'Special 12V 2A high-output power adapter certified for CAT 6 radio frequency draw.'
  },
  {
    item: 'Battery (Only If Applicable)',
    currentRate: '600',
    priorRates: 'New Tier',
    badge: 'Internal Backup',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    description: 'High-capacity internal battery cell for Tozed backup models.'
  }
];

// Outdoor CPE Damage Charges
const OUTDOOR_CPE_CHARGES = [
  {
    item: 'Complete Set',
    currentRate: '3,900',
    priorRates: '3,900',
    badge: 'Full Outdoor Unit',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    description: 'Complete outdoor antenna assembly, mast brackets, indoor PoE injector/router, Cat5 cabling, and SIM.'
  },
  {
    item: 'Outdoor Unit (ODU)',
    currentRate: '3,500',
    priorRates: '3,500',
    badge: 'Mast Antenna Unit',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    description: 'Weatherproof high-gain directional antenna and integrated outdoor LTE modem housing.'
  },
  {
    item: 'Indoor Unit (IDU)',
    currentRate: '3,000',
    priorRates: '3,000',
    badge: 'Indoor Gateway',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
    description: 'Indoor Wi-Fi distribution router / PoE unit delivering connectivity to household devices.'
  },
  {
    item: 'SIM Card Replacement',
    currentRate: '200',
    priorRates: '100',
    badge: 'Subscriber Identity',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    description: 'SIM card replacement for outdoor SIM slot.'
  },
  {
    item: 'Power Adaptor / Charger',
    currentRate: '350',
    priorRates: '550',
    badge: 'PoE Adaptor',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    description: 'Power over Ethernet (PoE) supply adaptor connecting indoor AC power to the outdoor line.'
  },
  {
    item: 'CAT 5 Cable',
    currentRate: '350',
    priorRates: '150',
    badge: 'Outdoor Patch Cable',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
    description: 'Weatherproof shielded outdoor twisted-pair patch cord connecting ODU to indoor gateway.'
  }
];

export default function LteOtherChargesPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'cat4' | 'cat6' | 'outdoor' | 'voicepal' | 'troubleshooting'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const ttCpeDamageClaim = `SERVICE: SLT 4G LTE Fixed Broadband
FAULT: Customer Responsible CPE Damage / Equipment Claim
ACCOUNT NO: [011-2XXXXXX / ACCOUNT_NO]
ROUTER MODEL: [CAT 4 INDOOR (Huawei B310/B311) / CAT 6 TOZED / OUTDOOR ODU]
DAMAGED ACCESSORY: [Complete Set / Unit Only / Antenna / Power Adapter / SIM / Battery]
CLAIM AMOUNT PAYABLE: Rs. [CLAIM_AMOUNT]
RULE: CIRCULAR_29_11_2022_CPE_DAMAGE_CLAIM
PAYMENT METHOD: Cash upfront at Teleshop / Billed to next monthly invoice
TARGET: RTOM-STORE / BILLING-HELPDESK
ACTION: Issue replacement accessory/CPE unit against payment receipt or billing charge posting.`;

  const ttVoicePalLightningMouse = `SERVICE: SLT 4G VoLTE (Voice Pal)
FAULT: CPE Damage Due to Mouse / Lightning
ACCOUNT NO: [011-2XXXXXX / VOICE_PAL_ACCOUNT]
REPLACEMENT SCHEME: 24-Month Installment Scheme
TOTAL COST: Rs. 5,000/=
MONTHLY INSTALLMENT: Rs. 208.33 / month (Charged on customer bill for 24 months)
RULE: VOICE_PAL_LIGHTNING_MOUSE_DAMAGE_REPLACEMENT_SCHEME
TARGET: CS-BILLING / RTOM-DISPATCH
ACTION: Dispatch replacement Voice Pal CPE unit. Setup 24-month recurring surcharge installment of Rs. 208.33/mo on customer billing account.`;

  const ttPostpaidReconnection = `SERVICE: SLT 4G LTE Postpaid
FAULT: Terminated Connection Reconnection Request
ACCOUNT NO: [ACCOUNT_NUMBER]
SERVICE ID: [011-2XXXXXX]
OUTSTANDING ARREARS: Cleared (Receipt No: [RECEIPT_NO])
RECONNECTION FEE: Rs. 500/=
RULE: RULE_4G_TERMINATED_POSTPAID_RECONNECTION
TARGET: BILLING-HELPDESK / NOC-PROVISIONING
ACTION: Post reconnection charge of Rs. 500/=. Restore HSS/IMS profile and data bandwidth profile in PCRF.`;

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f1f5f9] overflow-y-auto select-none text-slate-800">
      
      {/* 1. TOP SHAREPOINT BAR */}
      <div className="bg-[#004e89] text-white px-5 py-2.5 flex items-center justify-between text-sm shadow-md shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/knowledge-hub" className="flex items-center gap-2 cursor-pointer hover:opacity-90">
            <Grid className="w-5 h-5 text-cyan-300" />
            <span className="font-extrabold tracking-tight text-base">SharePoint</span>
          </Link>
          <span className="text-cyan-200">|</span>
          <span className="text-cyan-100 font-semibold text-sm">Other Charges – LTE &amp; CPE Damage Claims</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="hidden md:inline bg-cyan-900/60 border border-cyan-400/40 px-3 py-1 rounded-full text-cyan-200 font-medium">
            SLT-Mobitel Intranet
          </span>
          <div className="w-8 h-8 rounded-full bg-indigo-600 border-2 border-indigo-300 flex items-center justify-center font-black text-xs text-white shadow-sm">
            CR
          </div>
        </div>
      </div>

      {/* 2. BREADCRUMB */}
      <div className="bg-white border-b border-slate-200 px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-sm">
        <div className="flex items-center gap-2.5 text-slate-600">
          <Link href="/knowledge-hub/4g-lte" className="text-[#005696] font-bold hover:underline flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-lg transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to 4G LTE Hub
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/knowledge-hub" className="hover:text-blue-800 font-medium">Knowledge Hub</Link>
          <span className="text-slate-300">/</span>
          <span className="font-bold text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-200">
            Other Charges – LTE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-mono font-bold flex items-center gap-1.5 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            Circular: 29-11-2022
          </span>
          <span className="px-3 py-1 rounded-lg bg-blue-100 text-blue-900 border border-blue-300 text-xs font-mono font-bold">
            Published: 11/4/2024
          </span>
        </div>
      </div>

      {/* 3. HERO BANNER */}
      <div className="relative bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white px-8 py-9 overflow-hidden border-b-4 border-indigo-500 shadow-lg">
        <div className="max-w-6xl mx-auto space-y-4 relative z-10">
          
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-indigo-500 text-white shadow-sm flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5" />
              Service Maintenance &amp; Claims
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-cyan-200 backdrop-blur-xs">
              Reviewed by Chathurani Rathnayake (SAM CR - A7)
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-emerald-200">
              Published: 11/4/2024
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-indigo-500/20 border-2 border-indigo-400/50 shadow-inner">
                <Wrench className="w-8 h-8 text-indigo-300" />
              </div>
              <span>Other Charges – LTE &amp; CPE Damage Claim Manual</span>
            </h1>

            <p className="text-base md:text-lg text-slate-200/90 max-w-4xl font-medium leading-relaxed">
              Official schedule for Customer-Responsible CPE Damage Claims (Indoor CAT 4, Indoor CAT 6, and Outdoor CPE), Postpaid Reconnection Fees (Rs. 500/=), and Voice Pal Lightning/Mouse Replacement installment rules.
            </p>
          </div>

          {/* Quick Highlight Cards */}
          <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 block">Postpaid Reconnection Fee</span>
              <p className="text-2xl font-black text-white">Rs. 500/= <span className="text-xs font-normal text-slate-300">(Terminated Line Restore)</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block">Voice Pal Mouse/Lightning Scheme</span>
              <p className="text-2xl font-black text-white">Rs. 5,000/= <span className="text-xs font-normal text-slate-300">(In 24 Monthly Installments)</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block">CPE Complete Set Claims</span>
              <p className="text-2xl font-black text-white">Rs. 2,900 – 4,900 <span className="text-xs font-normal text-slate-300">(CAT 4 vs CAT 6)</span></p>
            </div>
          </div>

        </div>
      </div>

      {/* 4. NAVIGATION TOOLBAR */}
      <div className="bg-white border-b border-slate-300 px-6 py-3.5 sticky top-0 z-20 shadow-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3.5">
          
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none text-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-indigo-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              All Charges
            </button>
            <button
              onClick={() => setActiveTab('cat4')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'cat4'
                  ? 'bg-indigo-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Radio className="w-4 h-4" />
              <span>Indoor CAT 4</span>
            </button>
            <button
              onClick={() => setActiveTab('cat6')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'cat6'
                  ? 'bg-indigo-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Indoor CAT 6</span>
            </button>
            <button
              onClick={() => setActiveTab('outdoor')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'outdoor'
                  ? 'bg-indigo-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Wifi className="w-4 h-4" />
              <span>Outdoor CPE</span>
            </button>
            <button
              onClick={() => setActiveTab('voicepal')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'voicepal'
                  ? 'bg-indigo-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Voice Pal Special Scheme</span>
            </button>
            <button
              onClick={() => setActiveTab('troubleshooting')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'troubleshooting'
                  ? 'bg-indigo-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>C-Log Trouble Tickets</span>
            </button>
          </div>

          <div className="relative w-full md:w-60 shrink-0">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search accessory, fee..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
            />
          </div>

        </div>
      </div>

      {/* 5. MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-8 space-y-10">
        <div className="max-w-6xl mx-auto space-y-10">

          {/* ======================================================== */}
          {/* SECTION 1: CORE OPERATING CHARGES (Reconnection & Circular)*/}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Reconnection Fee */}
            <div className="bg-white rounded-3xl border-2 border-emerald-300 p-6 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300">
                    Restoration Fee
                  </span>
                  <span className="text-xs font-bold text-slate-400">Postpaid Connections</span>
                </div>

                <h3 className="text-xl font-black text-slate-900 leading-snug">
                  Reconnection Fee for Terminated LTE Postpaid Connections
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Applied when restoring service for customer accounts previously disconnected or terminated due to bill non-payment, following full settlement of outstanding arrears.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-baseline justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Standard Charge</span>
                  <span className="text-3xl font-black text-emerald-800">Rs. 500/=</span>
                </div>
                <button
                  onClick={() => copyToClipboard(ttPostpaidReconnection, 'tt-reconnect')}
                  className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-2xs transition-colors flex items-center gap-1.5"
                >
                  {copiedId === 'tt-reconnect' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedId === 'tt-reconnect' ? 'Copied TT!' : 'Copy TT'}</span>
                </button>
              </div>
            </div>

            {/* Card 2: Damage Claim Policy & Circular */}
            <div className="bg-white rounded-3xl border-2 border-indigo-300 p-6 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-indigo-100 text-indigo-800 border border-indigo-300">
                    Official Product Circular
                  </span>
                  <span className="text-xs font-bold text-slate-400">Eff. 29-11-2022</span>
                </div>

                <h3 className="text-xl font-black text-slate-900 leading-snug">
                  Damage Claim Charges for Customer Responsible Damages
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Updated as per the official product team guidelines shared on 29-11-2022. Standard fees applicable when CPE or accessories suffer physical harm, burn, or missing parts under subscriber custody.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 flex items-center justify-between">
                <div className="text-xs text-indigo-900 font-bold">
                  <span>Product Team Policy Document</span>
                  <p className="text-slate-500 font-normal">Recent circular available on SharePoint</p>
                </div>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); alert("PDF document shared by the product team on 29-11-2022 is archived in SharePoint Intranet."); }}
                  className="px-4 py-2 bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-xs rounded-xl shadow-2xs transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>View PDF Circular</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* SECTION 2: SPECIAL VOICE PAL LIGHTNING & MOUSE DAMAGE    */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'voicepal') && (
            <div className="rounded-3xl border-2 border-amber-400 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 p-7 shadow-sm space-y-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200 pb-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 bg-amber-500 text-white rounded-2xl shadow-xs shrink-0">
                    <ShieldAlert className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-black uppercase tracking-wider text-amber-800 bg-amber-200/80 px-3 py-0.5 rounded-full">
                      Special Relief Scheme
                    </span>
                    <h3 className="text-2xl font-black text-amber-950">
                      Voice Pal Customers – CPE Damage Due to Mouse or Lightning
                    </h3>
                    <p className="text-sm text-amber-900/90 font-medium">
                      Official concessionary equipment replacement and 24-month installment recovery scheme.
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => copyToClipboard(ttVoicePalLightningMouse, 'tt-voicepal')}
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow-xs transition-colors"
                  >
                    {copiedId === 'tt-voicepal' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedId === 'tt-voicepal' ? 'Copied Scheme TT!' : 'Copy Scheme TT'}</span>
                  </button>
                </div>
              </div>

              {/* Installment Breakdown Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/90 p-4 rounded-2xl border border-amber-200 space-y-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Total Equipment Cost</span>
                  <p className="text-3xl font-black text-amber-900">Rs. 5,000/=</p>
                  <span className="text-xs text-slate-500">Standard replacement charge</span>
                </div>
                <div className="bg-white/90 p-4 rounded-2xl border border-amber-200 space-y-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Installment Tenor</span>
                  <p className="text-3xl font-black text-blue-900">24 Months</p>
                  <span className="text-xs text-slate-500">Added to customer regular monthly bill</span>
                </div>
                <div className="bg-white/90 p-4 rounded-2xl border border-amber-200 space-y-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Monthly Recovery Surcharge</span>
                  <p className="text-3xl font-black text-emerald-800">~Rs. 208.33 <span className="text-xs font-normal">/ mo</span></p>
                  <span className="text-xs text-slate-500">Zero upfront lump-sum required</span>
                </div>
              </div>

              <div className="p-4 bg-white/70 rounded-2xl border border-amber-200 text-xs text-amber-950 font-medium leading-relaxed">
                <strong>Policy Summary:</strong> When a Voice Pal subscriber reports complete CPE malfunction resulting from proven lightning surge or rodent damage (wire chewing), SLT replaces the unit immediately. The subsidized replacement cost of <strong>Rs. 5,000/=</strong> is recovered across <strong>24 monthly installments</strong> on the customer bill.
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 3: LTE CPE – INDOOR (CAT 4)                      */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'cat4') && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-blue-100 rounded-xl">
                      <Radio className="w-6 h-6 text-[#005696]" />
                    </div>
                    <span>LTE CPE – INDOOR (CAT 4) Damage Claim Schedule</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Applicable for standard indoor basic CPE models (Huawei B310, B311, ZTE, Tozed Basic).
                  </p>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-blue-50 text-[#005696] border border-blue-200 font-bold text-xs">
                  CAT 4 Basic Models
                </span>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {CAT4_INDOOR_CHARGES
                  .filter(c => searchTerm === '' || c.item.toLowerCase().includes(searchTerm.toLowerCase()) || c.description.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((charge, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-3xl border-2 border-slate-200 hover:border-blue-400 p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${charge.badgeColor}`}>
                            {charge.badge}
                          </span>
                          <span className="text-xs font-mono font-bold text-slate-400">
                            Prior: {charge.priorRates}
                          </span>
                        </div>

                        <h3 className="text-lg font-black text-slate-900 leading-snug">
                          {charge.item}
                        </h3>

                        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-300 flex items-baseline justify-between">
                          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Damage Claim Charge</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xs font-bold text-emerald-700">Rs.</span>
                            <span className="text-3xl font-black text-emerald-800">{charge.currentRate}</span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 font-medium leading-relaxed">
                          {charge.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400">CAT 4 Indoor</span>
                        <button
                          onClick={() => copyToClipboard(`CAT 4 INDOOR: ${charge.item} - Claim Rs. ${charge.currentRate}`, `cat4-${idx}`)}
                          className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors"
                        >
                          {copiedId === `cat4-${idx}` ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedId === `cat4-${idx}` ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                    </div>
                  ))}
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 4: LTE CPE – INDOOR (CAT 6)                      */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'cat6') && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-amber-100 rounded-xl">
                      <Zap className="w-6 h-6 text-amber-700" />
                    </div>
                    <span>LTE CPE – INDOOR (CAT 6) Damage Claim Schedule</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Applicable for advanced high-throughput Tozed CAT 6 routers with Carrier Aggregation.
                  </p>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-300 font-bold text-xs">
                  CAT 6 Advanced (Tozed)
                </span>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {CAT6_INDOOR_CHARGES
                  .filter(c => searchTerm === '' || c.item.toLowerCase().includes(searchTerm.toLowerCase()) || c.description.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((charge, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-3xl border-2 border-slate-200 hover:border-amber-400 p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${charge.badgeColor}`}>
                            {charge.badge}
                          </span>
                          <span className="text-xs font-mono font-bold text-slate-400">
                            {charge.priorRates}
                          </span>
                        </div>

                        <h3 className="text-lg font-black text-slate-900 leading-snug">
                          {charge.item}
                        </h3>

                        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-300 flex items-baseline justify-between">
                          <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">Damage Claim Charge</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xs font-bold text-amber-800">Rs.</span>
                            <span className="text-3xl font-black text-amber-900">{charge.currentRate}</span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 font-medium leading-relaxed">
                          {charge.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400">CAT 6 Indoor</span>
                        <button
                          onClick={() => copyToClipboard(`CAT 6 INDOOR: ${charge.item} - Claim Rs. ${charge.currentRate}`, `cat6-${idx}`)}
                          className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-amber-600 hover:text-white text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors"
                        >
                          {copiedId === `cat6-${idx}` ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedId === `cat6-${idx}` ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                    </div>
                  ))}
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 5: LTE CPE – OUT DOOR                            */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'outdoor') && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-teal-100 rounded-xl">
                      <Wifi className="w-6 h-6 text-teal-700" />
                    </div>
                    <span>LTE CPE – OUT DOOR Damage Claim Schedule</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Applicable for outdoor antenna units (ODU), mast hardware, PoE units, and indoor receivers.
                  </p>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-teal-50 text-teal-900 border border-teal-200 font-bold text-xs">
                  Outdoor &amp; Mast Units
                </span>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {OUTDOOR_CPE_CHARGES
                  .filter(c => searchTerm === '' || c.item.toLowerCase().includes(searchTerm.toLowerCase()) || c.description.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((charge, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-3xl border-2 border-slate-200 hover:border-teal-400 p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${charge.badgeColor}`}>
                            {charge.badge}
                          </span>
                          <span className="text-xs font-mono font-bold text-slate-400">
                            Prior: {charge.priorRates}
                          </span>
                        </div>

                        <h3 className="text-lg font-black text-slate-900 leading-snug">
                          {charge.item}
                        </h3>

                        <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-300 flex items-baseline justify-between">
                          <span className="text-xs font-bold text-teal-900 uppercase tracking-wider">Damage Claim Charge</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xs font-bold text-teal-800">Rs.</span>
                            <span className="text-3xl font-black text-teal-900">{charge.currentRate}</span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 font-medium leading-relaxed">
                          {charge.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400">Outdoor CPE</span>
                        <button
                          onClick={() => copyToClipboard(`OUTDOOR CPE: ${charge.item} - Claim Rs. ${charge.currentRate}`, `outdoor-${idx}`)}
                          className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-teal-600 hover:text-white text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors"
                        >
                          {copiedId === `outdoor-${idx}` ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedId === `outdoor-${idx}` ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                    </div>
                  ))}
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 6: C-LOG TROUBLE TICKET & QUOTATION TEMPLATES    */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'troubleshooting') && (
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-indigo-100 rounded-xl">
                      <FileText className="w-6 h-6 text-indigo-700" />
                    </div>
                    <span>C-Log Trouble Ticket &amp; Billing Quotation Templates</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Directly copyable trouble tickets for customer care agents handling damage claims and line reconnections.
                  </p>
                </div>
              </div>

              {/* Template 1: CPE Damage Claim */}
              <div className="bg-slate-900 rounded-3xl border-2 border-slate-800 p-6 shadow-md space-y-3 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <Wrench className="w-5 h-5 text-emerald-400" />
                    <span className="font-mono text-sm font-bold text-emerald-300">
                      C-Log Trouble Ticket: Customer Responsible CPE Damage Claim
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(ttCpeDamageClaim, 'tt-cpe-claim')}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs rounded-xl font-bold flex items-center gap-2 transition-colors shadow-xs"
                  >
                    {copiedId === 'tt-cpe-claim' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedId === 'tt-cpe-claim' ? 'Copied TT!' : 'Copy TT Template'}</span>
                  </button>
                </div>
                <pre className="text-lime-300 font-mono text-xs leading-relaxed whitespace-pre-wrap p-2 bg-black/30 rounded-xl overflow-x-auto">
                  {ttCpeDamageClaim}
                </pre>
              </div>

              {/* Template 2: Voice Pal Installment Scheme */}
              <div className="bg-slate-900 rounded-3xl border-2 border-slate-800 p-6 shadow-md space-y-3 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <ShieldAlert className="w-5 h-5 text-amber-400" />
                    <span className="font-mono text-sm font-bold text-amber-300">
                      C-Log Trouble Ticket: Voice Pal Mouse / Lightning Damage (24-Month Installment Recovery)
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(ttVoicePalLightningMouse, 'tt-voicepal-tt')}
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs rounded-xl font-bold flex items-center gap-2 transition-colors shadow-xs"
                  >
                    {copiedId === 'tt-voicepal-tt' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedId === 'tt-voicepal-tt' ? 'Copied TT!' : 'Copy TT Template'}</span>
                  </button>
                </div>
                <pre className="text-amber-200 font-mono text-xs leading-relaxed whitespace-pre-wrap p-2 bg-black/30 rounded-xl overflow-x-auto">
                  {ttVoicePalLightningMouse}
                </pre>
              </div>

            </div>
          )}

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between pt-6 border-t-2 border-slate-200">
            <Link
              href="/knowledge-hub/4g-lte/prepaid"
              className="text-sm font-bold text-slate-600 hover:text-slate-900 flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to 4G LTE Prepaid</span>
            </Link>

            <Link
              href="/knowledge-hub/4g-lte"
              className="px-5 py-2.5 rounded-xl bg-[#005696] hover:bg-[#004780] text-white font-bold text-sm flex items-center gap-2 shadow-sm transition-colors"
            >
              <span>Back to 4G LTE Hub</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}

