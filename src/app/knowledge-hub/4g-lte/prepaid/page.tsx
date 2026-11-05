"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CreditCard,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  Radio,
  FileText,
  Grid,
  Smartphone,
  Layers,
  Clock,
  Zap,
  Info,
  Calendar,
  CheckCircle2,
  RefreshCw,
  Search,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  History,
  PhoneCall,
  Wifi,
  ShoppingBag
} from 'lucide-react';

// New Connection Charges Table (01st August 2024 Revision)
const PREPAID_CONNECTION_CHARGES = [
  {
    type: 'New LTE Connection (With CPE)',
    withoutTax: '4,048.96',
    withTax: '4,990',
    priorPrice: '7,241 / 7,900',
    conditions: 'Includes New CAT 4 CPE | 1 Year commitment period | 12 Months CPE warranty | Requires min. Rs. 500 initial reload'
  },
  {
    type: 'Refurbished CPE Connection',
    withoutTax: '3,165.18',
    withTax: '3,900',
    priorPrice: '4,750 (2,450/3,000)',
    conditions: 'Refurbished CAT 4 CPE unit | 6 Months CPE warranty | 1 Year commitment period | Early termination fee Rs. 5,000'
  },
  {
    type: 'Migration (Postpaid to Prepaid / Prepaid to Postpaid)',
    withoutTax: '700.00',
    withTax: '825',
    priorPrice: 'Standard fee',
    conditions: 'Applicable for active postpaid customers wishing to migrate to prepaid to avoid monthly recurring charges.'
  },
  {
    type: 'SIM Only (Customer Router / Teleshop Purchase)',
    withoutTax: '1,016.95',
    withTax: '1,200',
    priorPrice: '1,400',
    conditions: 'No commitment period | No early termination fee | Customer uses compatible Band 40 (2300MHz) / Band 38 router'
  },
  {
    type: 'SIM Activation Fee (Standalone)',
    withoutTax: '1,016.95',
    withTax: '1,200',
    priorPrice: '1,200',
    conditions: 'Initial SIM issuance & network provisioning fee'
  },
  {
    type: 'Minimum Reload Charge (Eff. 12/01/2024)',
    withoutTax: '423.73',
    withTax: '500',
    priorPrice: '100 / 200',
    conditions: 'Mandatory minimum recharge threshold across all physical and digital channels'
  }
];

// Main Packages Table (From Official SLT Documentation)
const MAIN_PACKAGES = [
  {
    name: '4G LTE - Home Broadband - 7 Days',
    status: 'Discontinued',
    statusDate: 'Discontinued from 15th January 2026',
    recurrence: 'Onetime',
    volume: '5 GB',
    validity: '7 Days',
    price: '155',
    notes: 'Discontinued from 15th January 2026'
  },
  {
    name: '4G LTE - Home Broadband - 14 Days',
    status: 'Discontinued',
    statusDate: 'Discontinued from 15th January 2026',
    recurrence: 'Onetime',
    volume: '10 GB',
    validity: '14 Days',
    price: '295',
    notes: 'Discontinued from 15th January 2026'
  },
  {
    name: '4G LTE - Home Broadband - 30 Days',
    status: 'Active',
    statusDate: 'Standard Plan',
    recurrence: 'Onetime',
    volume: '20 GB',
    validity: '30 Days',
    price: '535',
    notes: 'Standard monthly onetime pack'
  },
  {
    name: 'HBB Anytime - 899 (30 days)',
    status: 'Active',
    statusDate: 'Available from 12th February 2025',
    recurrence: 'Onetime',
    volume: '35 GB',
    validity: '30 Days',
    price: '899',
    notes: 'Pure anytime quota (Available from 12th February 2025)'
  },
  {
    name: 'HBB Anytime - 1899 (30 days)',
    status: 'Active',
    statusDate: 'Available from 12th February 2025',
    recurrence: 'Onetime',
    volume: '75 GB',
    validity: '30 Days',
    price: '1,899',
    notes: 'Pure anytime high-speed volume (Available from 12th February 2025)'
  }
];

// Special Add-ons / Data Add-ons (From Official SLT Documentation)
const DATA_ADDONS = [
  {
    name: 'Work & Learn Addon 30 Days',
    category: 'Work & Study',
    recurrence: 'Onetime',
    volume: '30 GB',
    validity: '30 Days',
    price: '235',
    restriction: 'Zoom, MS Teams, Office 365, Google Meet only',
    description: 'Dedicated quota for remote education and office collaboration tools.'
  },
  {
    name: 'YouTube & social media Addon 30 Days',
    category: 'Entertainment & Social',
    recurrence: 'Onetime',
    volume: '25 GB',
    validity: '30 Days',
    price: '390',
    restriction: 'WhatsApp Messenger, Viber Messenger, IMO Messenger, Facebook & Facebook Messenger, Instagram, TikTok, Spotify',
    description: 'High-speed pass for messaging, music and social media streaming.'
  },
  {
    name: 'Anytime Addon 5GB 7 Days',
    category: 'Anytime Booster',
    recurrence: 'Onetime',
    volume: '5 GB',
    validity: '7 Days',
    price: '249',
    restriction: 'Any internet access',
    description: 'Weekly volume booster.'
  },
  {
    name: 'Anytime Addon 5GB 30 Days',
    category: 'Anytime Booster',
    recurrence: 'Onetime',
    volume: '5 GB',
    validity: '30 Days',
    price: '298',
    restriction: 'Any internet access',
    description: 'Monthly 5GB extension.'
  },
  {
    name: 'Anytime Addon 10GB 7 Days',
    category: 'Anytime Booster',
    recurrence: 'Onetime',
    volume: '10 GB',
    validity: '7 Days',
    price: '460',
    restriction: 'Any internet access',
    description: 'High-volume weekly pass.'
  },
  {
    name: 'Anytime Addon 10GB 30 Days',
    category: 'Anytime Booster',
    recurrence: 'Onetime',
    volume: '10 GB',
    validity: '30 Days',
    price: '570',
    restriction: 'Any internet access',
    description: 'Heavy monthly volume pass.'
  }
];

// Reload Validity Matrix Table
const RELOAD_VALIDITY_MATRIX = [
  { lower: '20', upper: '49', days: '3 Days', tier: 'Tier 1' },
  { lower: '50', upper: '99', days: '7 Days', tier: 'Tier 2' },
  { lower: '100', upper: '199', days: '15 Days', tier: 'Tier 3' },
  { lower: '200', upper: '499', days: '30 Days', tier: 'Tier 4' },
  { lower: '500', upper: '999', days: '60 Days', tier: 'Tier 5 (Min. Retail)' },
  { lower: '1,000', upper: '1,999', days: '90 Days', tier: 'Tier 6' },
  { lower: '2,000', upper: '4,999', days: '120 Days', tier: 'Tier 7' },
  { lower: '5,000', upper: 'And Above', days: '180 Days (6 Months)', tier: 'Tier 8' }
];

// Official Updates Timeline
const UPDATES_TIMELINE = [
  {
    date: '14/06/2024',
    title: 'Minimum Reload Charge Revised to Rs. 500/=',
    summary: 'Minimum Reload charge is revised to Rs. 500/= effective 12/01/2024 across all merchant POS and retail reload outlets. Selfcare portal card payments allow min. Rs. 50.',
    tag: 'Policy Revision'
  },
  {
    date: '12/05/2024',
    title: 'Prepaid Migration Policy (Prepaid to Postpaid Incentive)',
    summary: 'Discontinuing prepaid customers or customers requiring higher bandwidth can migrate to Postpaid without registration fee under special incentive scheme. Applicable for BB packages Rs. 1,990 and above.',
    tag: 'Migration SOP'
  },
  {
    date: '08/04/2024',
    title: 'Introduction of New 4G LTE Prepaid SIM Starter Pack (Rs. 1,200)',
    summary: 'Price of new Prepaid SIM card revised to Rs. 1,200/=. Customer can bring compatible B40/B38 router without device commitment or termination fee.',
    tag: 'Product Launch'
  },
  {
    date: '07/01/2024',
    title: 'New HBB Anytime Packages (15GB & 30GB) & Discontinuation of 7/14 Day Packs',
    summary: 'Launched HBB Anytime 15GB (Rs. 590) and 30GB (Rs. 1,090). 7-Day and 14-Day daily allotment packs discontinued for new activation.',
    tag: 'Package Revision'
  },
  {
    date: '18/11/2023',
    title: 'Online Reload Integration on MySLT Windows App & Portal',
    summary: 'Direct recharge enabled on MySLT Web/App using LankaQR, Credit cards, and Debit cards with immediate quota crediting.',
    tag: 'Digital Channel'
  },
  {
    date: '15/10/2023',
    title: 'Scratch Card & Retail Merchant Top-up Expansion',
    summary: 'Island-wide top-ups enabled via Mobitel/SLT dealers, Keells, Cargills Food City, Singer outlets, and bank CDMs.',
    tag: 'Channel Expansion'
  }
];

export default function LtePrepaidServicesPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'connection' | 'packages' | 'addons' | 'validity' | 'updates' | 'troubleshooting'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const ttPrepaidReloadFailure = `SERVICE: SLT 4G LTE Prepaid Recharge Reconciliation
FAULT: Prepaid Reload / Top-up Not Credited
CUSTOMER CONTACT: [CUSTOMER_NAME] | [PHONE_NO]
PREPAID LTE NUMBER / SERVICE ID: 011-2XXXXXX / [LTE_SIM_NO]
RELOAD AMOUNT: Rs. [AMOUNT]
PAYMENT CHANNEL: [MySLT App / Bank App (Commercial/Sampath/BOC/HNB) / Retail Merchant (Food City/Keells/Singer)]
BANK TRANSACTION REF / RECEIPT NO: [BANK_REF_OR_RECEIPT_NO]
TRANSACTION DATE & TIME: [YYYY-MM-DD HH:MM]
RULE: RULE_4G_PREPAID_RELOAD_RECONCILIATION
TARGET: BILLING-HELPDESK / PAYMENT GATEWAY RECON TEAM
ACTION: Verify API settlement gateway with merchant bank. Credit package quota / prepaid balance manually upon transaction reconciliation.`;

  const ttPrepaidVoiceFault = `SERVICE: SLT 4G LTE Prepaid Voice Service
FAULT: Outgoing Voice Blocked / Incoming Only / Call Drop
ACCOUNT NO / SERVICE ID: [011-2XXXXXX]
CURRENT PREPAID BALANCE: Rs. [BALANCE]
VALIDITY STATUS: [ACTIVE / INACTIVE_GRACE_PERIOD]
CPE MODEL: CAT 4 [HUAWEI_B310 / TOZED / ZTE]
SIGNAL STRENGTH (RSRP): [e.g. -85 dBm - Good]
TARGET: CS-NOC / 4G-VOICE-TEAM
ACTION: Check HSS / IMS voice profile provisioning for prepaid MSISDN. Restore voice origination privileges.`;

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f4f7f9] overflow-y-auto select-none">
      
      {/* 1. TOP SHAREPOINT BAR */}
      <div className="bg-[#005a9c] text-white px-4 py-2 flex items-center justify-between text-xs shadow-xs shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/knowledge-hub" className="flex items-center gap-1.5 cursor-pointer hover:opacity-80">
            <Grid className="w-4 h-4 text-white" />
            <span className="font-bold tracking-tight text-sm">SharePoint</span>
          </Link>
          <span className="text-xs text-emerald-200">| 4G LTE Prepaid Services (ISO 9001:2015)</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="hidden sm:inline text-cyan-100 font-medium">SLT-Mobitel Intranet Portal</span>
          <div className="w-7 h-7 rounded-full bg-emerald-700 border border-emerald-400 flex items-center justify-center font-bold text-[11px] text-white">
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
          <span className="font-bold text-emerald-800">4G LTE Prepaid</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-bold">
            Balance Inquiry: *123#
          </span>
          <span className="px-2.5 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 text-xs font-mono font-bold">
            CAT 4 Only
          </span>
        </div>
      </div>

      {/* 3. HERO BANNER */}
      <div className="relative bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white px-8 py-7 overflow-hidden border-b border-emerald-800/40">
        <div className="max-w-6xl mx-auto space-y-2 relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-400/20 text-emerald-300 border border-emerald-300/30">
              Prepaid Pay-As-You-Go
            </span>
            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-300/30">
              Tax Revised eff. 01/08/2024
            </span>
            <span className="text-xs text-emerald-200">No Monthly Commitments or Billing Arrears</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/20 border border-emerald-400/40">
              <CreditCard className="w-6 h-6 text-emerald-300" />
            </div>
            <span>4G LTE Prepaid Services &amp; Reload Master Manual</span>
          </h1>

          <p className="text-xs text-emerald-100/90 max-w-3xl font-medium leading-relaxed">
            Full connection tariffs, SIM Starter Pack (Rs. 1,200), Main Packages (HBB Anytime 15GB &amp; 30GB), Special Add-ons, Reload Validity Matrix (Tier 1-8), Circular Audit Timeline, and CRM Trouble Ticket SOP.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs text-emerald-200/80">
            <div><strong>Publisher:</strong> Chathurani Rathnayake (SAM CR - A7)</div>
            <div>•</div>
            <div><strong>Min. Reload:</strong> Rs. 500/= (Physical) / Rs. 50/= (SelfCare)</div>
            <div>•</div>
            <div><strong>Router Bands:</strong> Band 40 (2300MHz) / Band 38</div>
          </div>
        </div>
      </div>

      {/* 4. NAVIGATION SHORTCUT BAR */}
      <div className="bg-white border-b border-slate-200 px-6 py-2.5 sticky top-0 z-20 shadow-2xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Section Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none text-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              All Sections
            </button>
            <button
              onClick={() => setActiveTab('connection')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap flex items-center gap-1 ${
                activeTab === 'connection'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Connection Charges</span>
            </button>
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap flex items-center gap-1 ${
                activeTab === 'packages'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Wifi className="w-3.5 h-3.5" />
              <span>Main Packages</span>
            </button>
            <button
              onClick={() => setActiveTab('addons')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap flex items-center gap-1 ${
                activeTab === 'addons'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Data Add-ons</span>
            </button>
            <button
              onClick={() => setActiveTab('validity')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap flex items-center gap-1 ${
                activeTab === 'validity'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Reload Validity Matrix</span>
            </button>
            <button
              onClick={() => setActiveTab('updates')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap flex items-center gap-1 ${
                activeTab === 'updates'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <History className="w-3.5 h-3.5" />
              <span>Updates Timeline</span>
            </button>
            <button
              onClick={() => setActiveTab('troubleshooting')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap flex items-center gap-1 ${
                activeTab === 'troubleshooting'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>C-Log Trouble Tickets</span>
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-60 shrink-0">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter plans, validities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>

        </div>
      </div>

      {/* 5. MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* SECTION 1: NEW CONNECTION CHARGES */}
          {(activeTab === 'all' || activeTab === 'connection') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                <div>
                  <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-emerald-700" />
                    <span>New Connection Charges – Prepaid (Price Eff. 01st August 2024)</span>
                  </h2>
                  <p className="text-xs text-slate-500">
                    Official tariffs for new LTE prepaid activations, refurbished CPE bundles, and BYOD SIM-only issuance.
                  </p>
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                  VAT 18% + TL + SSCL Included
                </span>
              </div>

              {/* Charges Table */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-emerald-900 text-white font-bold">
                        <th className="p-3.5">New Connection Type</th>
                        <th className="p-3.5">Without Tax (Rs.)</th>
                        <th className="p-3.5">With Tax (Rs.) [Aug 2024]</th>
                        <th className="p-3.5">Prior / Standard</th>
                        <th className="p-3.5">Terms, Warranties &amp; Commitment</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {PREPAID_CONNECTION_CHARGES
                        .filter(item => searchTerm === '' || item.type.toLowerCase().includes(searchTerm.toLowerCase()) || item.conditions.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((row, idx) => (
                          <tr key={idx} className="hover:bg-emerald-50/40 transition-colors">
                            <td className="p-3.5 font-bold text-slate-900">{row.type}</td>
                            <td className="p-3.5 font-mono text-slate-700">Rs. {row.withoutTax}</td>
                            <td className="p-3.5 font-mono font-black text-emerald-700 text-sm">
                              Rs. {row.withTax}
                            </td>
                            <td className="p-3.5 font-mono text-slate-500">{row.priorPrice}</td>
                            <td className="p-3.5 text-slate-600 text-[11px] leading-relaxed max-w-md">
                              {row.conditions}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                {/* Important Highlights Footer */}
                <div className="p-4 bg-emerald-50/50 border-t border-emerald-100 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700">
                  <div>
                    <span className="font-bold text-emerald-900 block mb-0.5">Device Commitment:</span>
                    1 Year commitment period applies for New and Refurbished CPEs. Early termination fee is Rs. 5,000.
                  </div>
                  <div>
                    <span className="font-bold text-emerald-900 block mb-0.5">Ownership Transfer:</span>
                    Ownership transfers after warranty period: 12 months for New CPE, 6 months for Refurbished CPE.
                  </div>
                  <div>
                    <span className="font-bold text-emerald-900 block mb-0.5">SIM-Only (BYOD):</span>
                    Customer provides compatible router supporting Band 40 (2300 MHz) or Band 38. Zero commitment period.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 2: MAIN PACKAGES */}
          {(activeTab === 'all' || activeTab === 'packages') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                <div>
                  <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-emerald-700" />
                    <span>Main Packages (4G LTE Prepaid Broadband)</span>
                  </h2>
                  <p className="text-xs text-slate-500">
                    Official Onetime broadband bundles, HBB Anytime packages, and historical daily allotment packs.
                  </p>
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-blue-50 text-blue-800 border border-blue-200">
                  Recharge via MySLT / OTC
                </span>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs space-y-4 p-5">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3.5">Display Name</th>
                        <th className="p-3.5">Recurrence</th>
                        <th className="p-3.5">Data Volume (GB)</th>
                        <th className="p-3.5">Validity (Days)</th>
                        <th className="p-3.5 text-emerald-400">Price (Rs) With Tax</th>
                        <th className="p-3.5">Package Status &amp; Availability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {MAIN_PACKAGES
                        .filter(item => searchTerm === '' || item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.notes.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((pkg, idx) => (
                          <tr key={idx} className={pkg.status === 'Discontinued' ? 'bg-slate-50/70 text-slate-500' : 'hover:bg-emerald-50/40 transition-colors'}>
                            <td className="p-3.5 font-bold text-slate-900">
                              <div className="flex items-center gap-2">
                                <span>{pkg.name}</span>
                                {pkg.status === 'Discontinued' && (
                                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-rose-100 text-rose-700">
                                    Discontinued
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="p-3.5 font-medium text-slate-700">{pkg.recurrence}</td>
                            <td className="p-3.5 font-mono font-black text-[#005696] text-sm">{pkg.volume}</td>
                            <td className="p-3.5 font-bold text-slate-800">{pkg.validity}</td>
                            <td className="p-3.5 font-mono font-black text-emerald-700 text-sm">
                              Rs. {pkg.price}
                            </td>
                            <td className="p-3.5">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                pkg.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-50 text-rose-700 border border-rose-200'
                              }`}>
                                {pkg.statusDate}
                              </span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                {/* Activation & Guidelines Box */}
                <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 text-xs text-emerald-950">
                    <Smartphone className="w-5 h-5 text-emerald-700 shrink-0" />
                    <div>
                      <span className="font-bold block">SelfCare Activation:</span>
                      <span>Can be Activated through <strong>MySLT App</strong> and <strong>My SLT Portal</strong>.</span>
                    </div>
                  </div>
                  <a
                    href="https://sltcomlk.sharepoint.com/sites/KnowledgeHub/Shared%20Documents/Forms/AllItems.aspx?id=/sites/KnowledgeHub/Shared%20Documents/Chathurani/From%20Old%20KH/Old%20KH%20Backup/LTE/LTE%20Prepaid%20Guide%20for%20MySLT%20App.pdf&viewid=f85720f1-07a8-48b6-be78-153e3e326686&parent=/sites/KnowledgeHub/Shared%20Documents/Chathurani/From%20Old%20KH/Old%20KH%20Backup/LTE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors shrink-0 shadow-2xs"
                  >
                    <span>Click here to find Guidelines to install MySLT App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Usage Charges (When Add-on is not activated) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 space-y-2">
                    <h4 className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-600" />
                      <span>Usage charges of Main Package (When Add-on is not activated)</span>
                    </h4>
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-white text-slate-700 border-b border-slate-200 font-bold">
                          <th className="p-2.5">Service</th>
                          <th className="p-2.5 text-emerald-800">Price in LKR (With Tax)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-100 bg-white">
                          <td className="p-2.5 font-medium text-slate-800">Data Charge</td>
                          <td className="p-2.5 font-mono font-bold text-emerald-700 text-sm">
                            Rs. 0.08666 / MB
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Prerequisites Alert */}
                  <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2 text-xs text-amber-950 flex flex-col justify-center">
                    <div className="font-black flex items-center gap-1.5 text-amber-900">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Customer Add-on &amp; Wallet Balance Conditions:</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-amber-900/90 pl-1 font-medium">
                      <li>Customer can add <strong>only add-ons without any main package</strong>.</li>
                      <li>
                        <strong>Important Requirement:</strong> But to use the add-on without any issue, the customer needs to have a <strong>positive wallet balance</strong> or a <strong>main package with a positive balance</strong>.
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* SECTION 3: DATA ADD-ONS */}
          {(activeTab === 'all' || activeTab === 'addons') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                <div>
                  <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber-600" />
                    <span>Data Add-ons (Work &amp; Learn, Social Media, Anytime Passes)</span>
                  </h2>
                  <p className="text-xs text-slate-500">
                    Onetime add-on passes usable independently or with an active main package.
                  </p>
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-amber-50 text-amber-800 border border-amber-200">
                  Onetime Passes
                </span>
              </div>

              {/* Add-ons Official Table */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3.5">Display Name</th>
                        <th className="p-3.5">Recurrence</th>
                        <th className="p-3.5">Data Volume (GB)</th>
                        <th className="p-3.5">Validity</th>
                        <th className="p-3.5 text-emerald-400">Price (Rs) With Tax</th>
                        <th className="p-3.5">Allowed Protocols / Applications</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {DATA_ADDONS
                        .filter(item => searchTerm === '' || item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.restriction.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((addon, idx) => (
                          <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                            <td className="p-3.5 font-bold text-slate-900">{addon.name}</td>
                            <td className="p-3.5 font-medium text-slate-700">{addon.recurrence}</td>
                            <td className="p-3.5 font-mono font-black text-[#005696] text-sm">{addon.volume}</td>
                            <td className="p-3.5 font-bold text-slate-800">{addon.validity}</td>
                            <td className="p-3.5 font-mono font-black text-emerald-700 text-sm">
                              Rs. {addon.price}
                            </td>
                            <td className="p-3.5 text-slate-600 text-[11px] max-w-sm">
                              {addon.restriction}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                {/* Add-on Activation & Balance Guidelines */}
                <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-3 text-xs text-slate-700">
                  <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 text-xs text-emerald-950">
                      <Smartphone className="w-5 h-5 text-emerald-700 shrink-0" />
                      <div>
                        <span className="font-bold block">Add-on Activation:</span>
                        <span>Can be Activated through <strong>MySLT App</strong> and <strong>My SLT Portal</strong>.</span>
                      </div>
                    </div>
                    <a
                      href="https://sltcomlk.sharepoint.com/sites/KnowledgeHub/Shared%20Documents/Forms/AllItems.aspx?id=/sites/KnowledgeHub/Shared%20Documents/Chathurani/From%20Old%20KH/Old%20KH%20Backup/LTE/LTE%20Prepaid%20Guide%20for%20MySLT%20App.pdf&viewid=f85720f1-07a8-48b6-be78-153e3e326686&parent=/sites/KnowledgeHub/Shared%20Documents/Chathurani/From%20Old%20KH/Old%20KH%20Backup/LTE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors shrink-0 shadow-2xs"
                    >
                      <span>Click here to find Guidelines to install MySLT App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 space-y-1.5 text-amber-950">
                    <div className="font-bold flex items-center gap-1.5 text-amber-900">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      <span>Special Operating Notes:</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-amber-900/90 pl-1 font-medium">
                      <li>Customer can add <strong>only add-ons without any main package</strong>.</li>
                      <li>
                        <strong>Critical Condition:</strong> But to use the add-on without any issue, the customer needs to have a <strong>positive wallet balance</strong> or a <strong>main package with a positive balance</strong>.
                      </li>
                      <li>
                        <strong>YouTube &amp; Social Media Protocols:</strong> WhatsApp Messenger, Viber Messenger, IMO Messenger, Facebook &amp; Facebook Messenger, Instagram, TikTok, Spotify.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Add-ons Visual Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {DATA_ADDONS
                  .filter(item => searchTerm === '' || item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.restriction.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((addon, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700">
                            {addon.category}
                          </span>
                          <span className="font-mono text-xs font-bold text-slate-500">
                            {addon.validity}
                          </span>
                        </div>

                        <h3 className="font-black text-sm text-slate-900 leading-snug">
                          {addon.name}
                        </h3>

                        <div className="flex items-baseline gap-2">
                          <span className="font-mono text-2xl font-black text-[#005696]">{addon.volume}</span>
                          <span className="text-xs text-slate-400 font-medium">Quota</span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] space-y-1">
                          <div className="font-bold text-slate-800">Allowed Scope:</div>
                          <div className="text-slate-600">{addon.restriction}</div>
                        </div>

                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          {addon.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-400 block font-medium">Price (With Tax)</span>
                          <span className="font-mono text-base font-black text-emerald-700">Rs. {addon.price}/=</span>
                        </div>
                        <button
                          onClick={() => copyToClipboard(`ACTIVATE ${addon.name}`, `addon-${idx}`)}
                          className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 font-bold transition-colors flex items-center gap-1"
                        >
                          {copiedId === `addon-${idx}` ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedId === `addon-${idx}` ? 'Copied' : 'Select'}</span>
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* SECTION 4: RELOAD VALIDITY MATRIX */}
          {(activeTab === 'all' || activeTab === 'validity') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                <div>
                  <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-emerald-700" />
                    <span>Reload Validity Matrix (Recharge Amount vs. Calendar Days)</span>
                  </h2>
                  <p className="text-xs text-slate-500">
                    Official schedule defining active account validity periods based on physical &amp; electronic recharge denominations.
                  </p>
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                  TRCSL Compliant
                </span>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#005696] text-white font-bold">
                        <th className="p-3.5">Tier Category</th>
                        <th className="p-3.5">Recharge Lower Limit (Rs.)</th>
                        <th className="p-3.5">Recharge Upper Limit (Rs.)</th>
                        <th className="p-3.5 text-lime-300">Validity (Calendar Days)</th>
                        <th className="p-3.5">Authorized Recharge Channels</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {RELOAD_VALIDITY_MATRIX.map((tier, idx) => (
                        <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                          <td className="p-3.5 font-bold text-slate-800">{tier.tier}</td>
                          <td className="p-3.5 font-mono font-bold text-slate-900">Rs. {tier.lower}</td>
                          <td className="p-3.5 font-mono text-slate-600">
                            {tier.upper === 'And Above' ? 'And Above' : `Rs. ${tier.upper}`}
                          </td>
                          <td className="p-3.5 font-mono font-black text-emerald-700 text-sm">
                            {tier.days}
                          </td>
                          <td className="p-3.5 text-slate-600 text-[11px]">
                            {idx < 2 ? 'MySLT SelfCare / Online Banking only (Min. Rs. 50)' : 'All channels: Retail POS, Keells, Food City, Singer, MySLT, CDM'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
                  <div className="space-y-1">
                    <span className="font-bold text-slate-900 block">SelfCare Online Banking Special Rule:</span>
                    Customers can reload via the SLT-Mobitel SelfCare App with online banking / credit card with a minimum reload of <strong>Rs. 50/=</strong>.
                  </div>
                  <div className="space-y-1">
                    <span className="font-bold text-slate-900 block">Account Inactivity Grace Period:</span>
                    • <strong>90 Days:</strong> Account enters inactive status if zero reloads performed after validity expiry.<br/>
                    • <strong>180 Days:</strong> Service quarantined and recycled per TRCSL numbering guidelines.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 5: UPDATES TIMELINE */}
          {(activeTab === 'all' || activeTab === 'updates') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                <div>
                  <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <History className="w-5 h-5 text-indigo-700" />
                    <span>Official Circulars &amp; Audit Trail Updates</span>
                  </h2>
                  <p className="text-xs text-slate-500">
                    Chronological history of prepaid pricing circulars, channel rollouts, and policy revisions.
                  </p>
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-indigo-50 text-indigo-800 border border-indigo-200">
                  ISO Audit Trail
                </span>
              </div>

              <div className="space-y-3">
                {UPDATES_TIMELINE.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs hover:shadow-xs transition-shadow flex flex-col md:flex-row md:items-start gap-4">
                    <div className="shrink-0 flex md:flex-col items-center md:items-start gap-2 md:w-36">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-100 text-indigo-800">
                        {item.tag}
                      </span>
                      <span className="font-mono text-xs font-black text-slate-600 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                        <span>{item.date}</span>
                      </span>
                    </div>

                    <div className="space-y-1 flex-1">
                      <h3 className="font-bold text-sm text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 6: FAULT REPORTING & C-LOG TROUBLE TICKETS */}
          {(activeTab === 'all' || activeTab === 'troubleshooting') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                <div>
                  <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-emerald-700" />
                    <span>Prepaid Fault Reporting Process &amp; C-Log Trouble Ticket Templates</span>
                  </h2>
                  <p className="text-xs text-slate-500">
                    Standard operating procedures for resolving reload failures, third-party payment discrepancies, and voice blocks.
                  </p>
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                  1212 &amp; Teleshop SOP
                </span>
              </div>

              {/* Step-by-Step SOP Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-2xs">
                <h3 className="font-black text-sm text-slate-900">Standard Investigation Workflow:</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="font-black text-emerald-700">Step 1: Contact Point</span>
                    <p className="text-slate-600">Customer calls 1212 Contact Center or visits RTOM / Teleshop.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="font-black text-emerald-700">Step 2: Diagnosis</span>
                    <p className="text-slate-600">Verify whether fault is Reload, Voice Outgoing, Data speed, or Inactivity.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="font-black text-emerald-700">Step 3: Collect Evidence</span>
                    <p className="text-slate-600">Obtain Bank Ref / Merchant receipt, Date, Exact Amount, and Prepaid Phone ID.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="font-black text-emerald-700">Step 4: Escalate in C-Log</span>
                    <p className="text-slate-600">Forward TT to Billing Helpdesk / Gateway Reconciliation Team.</p>
                  </div>
                </div>
              </div>

              {/* Template 1: Reload Failure */}
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-sm space-y-3 text-white">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-emerald-400" />
                    <span className="font-mono text-xs font-bold text-emerald-300">
                      C-Log Trouble Ticket: Third-Party Reload Not Credited
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(ttPrepaidReloadFailure, 'tt-reload')}
                    className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs rounded-lg font-bold flex items-center gap-1.5 transition-colors"
                  >
                    {copiedId === 'tt-reload' ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === 'tt-reload' ? 'Copied TT!' : 'Copy TT'}</span>
                  </button>
                </div>
                <pre className="text-lime-300 font-mono text-xs leading-relaxed whitespace-pre-wrap">
                  {ttPrepaidReloadFailure}
                </pre>
              </div>

              {/* Template 2: Voice Issue */}
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-sm space-y-3 text-white">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <div className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-cyan-400" />
                    <span className="font-mono text-xs font-bold text-cyan-300">
                      C-Log Trouble Ticket: Prepaid Voice Outgoing Barred / Provisioning Fault
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(ttPrepaidVoiceFault, 'tt-voice')}
                    className="px-3 py-1 bg-cyan-600 hover:bg-cyan-500 text-white text-xs rounded-lg font-bold flex items-center gap-1.5 transition-colors"
                  >
                    {copiedId === 'tt-voice' ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === 'tt-voice' ? 'Copied TT!' : 'Copy TT'}</span>
                  </button>
                </div>
                <pre className="text-cyan-200 font-mono text-xs leading-relaxed whitespace-pre-wrap">
                  {ttPrepaidVoiceFault}
                </pre>
              </div>

            </div>
          )}

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
            <Link
              href="/knowledge-hub/4g-lte/broadband"
              className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Broadband Packages</span>
            </Link>

            <Link
              href="/knowledge-hub/4g-lte/old-charges"
              className="px-4 py-2 rounded-xl bg-[#005696] hover:bg-[#004780] text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <span>Next: LTE Old Call Charges</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}
