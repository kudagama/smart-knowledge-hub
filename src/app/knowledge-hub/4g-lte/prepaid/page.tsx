"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import LteSubpageHeader from '../_components/LteSubpageHeader';
import {
  CreditCard,
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  AlertCircle,
  ShieldCheck,
  FileText,
  Grid,
  Smartphone,
  Layers,
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
  Globe,
  MessageCircle,
  Music,
  Video,
  Share2,
  BookOpen
} from 'lucide-react';

// New Connection Charges Table (01st August 2024 Revision)
const PREPAID_CONNECTION_CHARGES = [
  {
    type: 'New LTE Connection (With CPE)',
    withoutTax: '4,048.96',
    withTax: '4,990',
    priorPrice: '7,241 / 7,900',
    badge: 'Standard Starter Unit',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    warranty: '12 Months Warranty',
    commitment: '1 Year Commitment',
    conditions: 'Includes New CAT 4 CPE unit. Transferred to customer ownership after 12 months warranty. Requires minimum Rs. 500 initial reload.'
  },
  {
    type: 'Refurbished CPE Connection',
    withoutTax: '3,165.18',
    withTax: '3,900',
    priorPrice: '4,750 (2,450/3,000)',
    badge: 'Budget Reconditioned',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    warranty: '6 Months Warranty',
    commitment: '1 Year Commitment',
    conditions: 'Factory refurbished & tested CAT 4 CPE. Early termination fee of Rs. 5,000 applies if disconnected within commitment period.'
  },
  {
    type: 'Migration (Postpaid to Prepaid)',
    withoutTax: '700.00',
    withTax: '825',
    priorPrice: 'Standard Fee',
    badge: 'Zero Monthly Rental',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
    warranty: 'Existing CPE Maintained',
    commitment: 'No Commitment',
    conditions: 'For active postpaid customers seeking to eliminate recurring monthly rental bills while retaining their existing connection & number.'
  },
  {
    type: 'SIM Only (BYOD - Customer Router)',
    withoutTax: '1,016.95',
    withTax: '1,200',
    priorPrice: '1,400',
    badge: 'Freedom BYOD',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    warranty: 'SIM Lifetime Warranty',
    commitment: 'No Commitment / Zero Lock-in',
    conditions: 'Customer uses own compatible 4G router supporting Band 40 (2300 MHz) or Band 38. Zero early termination fees.'
  },
  {
    type: 'SIM Activation Fee (Standalone)',
    withoutTax: '1,016.95',
    withTax: '1,200',
    priorPrice: '1,200',
    badge: 'Network Provisioning',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
    warranty: 'Instant Activation',
    commitment: 'Standalone Issuance',
    conditions: 'Standard TRCSL registered SIM issuance and core network IMS/HSS profile initialization fee.'
  },
  {
    type: 'Minimum Physical Reload (Eff. 12/01/2024)',
    withoutTax: '423.73',
    withTax: '500',
    priorPrice: '100 / 200',
    badge: 'Retail Floor Limit',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    warranty: '60 Days Active Validity',
    commitment: 'Islandwide Retailers',
    conditions: 'Mandatory minimum threshold at all physical retail dealer counters & POS outlets (Keells, Food City, Singer, dealers).'
  }
];

// Main Packages (Official SLT Specifications)
const MAIN_PACKAGES = [
  {
    id: 'hbb-anytime-899',
    name: 'HBB Anytime - 899',
    subtitle: 'High-Speed 24/7 Pure Anytime Volume',
    status: 'Active',
    statusDate: 'Available from 12th February 2025',
    recurrence: 'Onetime',
    volume: '35 GB',
    volumeNum: 35,
    validity: '30 Days',
    price: '899',
    popular: true,
    accentGradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    borderColor: 'border-emerald-300 ring-2 ring-emerald-500/20',
    notes: 'No day/night split, no hourly restriction, and no daily throttling. Ideal for families and small offices needing reliable 24-hour broadband.'
  },
  {
    id: 'hbb-anytime-1899',
    name: 'HBB Anytime - 1899',
    subtitle: 'Power User High-Capacity Anytime Bundle',
    status: 'Active',
    statusDate: 'Available from 12th February 2025',
    recurrence: 'Onetime',
    volume: '75 GB',
    volumeNum: 75,
    validity: '30 Days',
    price: '1,899',
    popular: false,
    accentGradient: 'from-blue-600 via-indigo-600 to-purple-800',
    borderColor: 'border-blue-300 hover:border-blue-500',
    notes: 'Massive 75GB quota usable anytime day or night. Best for heavy video streaming, cloud backups, and intensive remote workstations.'
  },
  {
    id: 'home-bb-30',
    name: '4G LTE - Home Broadband - 30 Days',
    subtitle: 'Standard Monthly Plan with Voice Perks',
    status: 'Active',
    statusDate: 'Standard Plan',
    recurrence: 'Onetime',
    volume: '20 GB',
    volumeNum: 20,
    validity: '30 Days',
    price: '535',
    popular: false,
    accentGradient: 'from-slate-700 to-slate-900',
    borderColor: 'border-slate-300 hover:border-slate-500',
    notes: 'Affordable monthly base pack. Out-of-bundle PAYG rate of Rs. 0.08666/MB applies once quota is depleted if no add-on is loaded.'
  },
  {
    id: 'home-bb-14',
    name: '4G LTE - Home Broadband - 14 Days',
    subtitle: 'Bi-Weekly Allocation Pack (Legacy)',
    status: 'Discontinued',
    statusDate: 'Discontinued from 15th January 2026',
    recurrence: 'Onetime',
    volume: '10 GB',
    volumeNum: 10,
    validity: '14 Days',
    price: '295',
    popular: false,
    accentGradient: 'from-slate-400 to-slate-600',
    borderColor: 'border-slate-200 opacity-75',
    notes: 'Discontinued from 15th January 2026. Kept for billing dispute lookup and historical customer reconciliation.'
  },
  {
    id: 'home-bb-7',
    name: '4G LTE - Home Broadband - 7 Days',
    subtitle: 'Weekly Allocation Pack (Legacy)',
    status: 'Discontinued',
    statusDate: 'Discontinued from 15th January 2026',
    recurrence: 'Onetime',
    volume: '5 GB',
    volumeNum: 5,
    validity: '7 Days',
    price: '155',
    popular: false,
    accentGradient: 'from-slate-400 to-slate-600',
    borderColor: 'border-slate-200 opacity-75',
    notes: 'Discontinued from 15th January 2026. Historical reference tier.'
  }
];

// Special Add-ons / Data Add-ons
const DATA_ADDONS = [
  {
    id: 'work-learn-30',
    name: 'Work & Learn Addon 30 Days',
    category: 'Work & Education',
    recurrence: 'Onetime',
    volume: '30 GB',
    validity: '30 Days',
    price: '235',
    highlight: 'Rs. 7.83 / GB',
    tagColor: 'bg-blue-100 text-blue-900 border-blue-300',
    apps: [
      { name: 'Zoom', bg: 'bg-[#2D8CFF] text-white' },
      { name: 'Microsoft Teams', bg: 'bg-[#464EB8] text-white' },
      { name: 'Office 365', bg: 'bg-[#D83B01] text-white' },
      { name: 'Google Meet', bg: 'bg-[#00AC47] text-white' }
    ],
    restriction: 'Zoom, MS Teams, Office 365, Google Meet only',
    description: 'Specialized education and remote workspace quota. Dedicated pipeline ensuring uninterrupted online lectures and video meetings.'
  },
  {
    id: 'youtube-social-30',
    name: 'YouTube & Social Media Addon 30 Days',
    category: 'Entertainment & Social',
    recurrence: 'Onetime',
    volume: '25 GB',
    validity: '30 Days',
    price: '390',
    highlight: '7 Top Apps Included',
    tagColor: 'bg-rose-100 text-rose-900 border-rose-300',
    apps: [
      { name: 'WhatsApp', bg: 'bg-[#25D366] text-white' },
      { name: 'YouTube', bg: 'bg-[#FF0000] text-white' },
      { name: 'Facebook', bg: 'bg-[#1877F2] text-white' },
      { name: 'Instagram', bg: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' },
      { name: 'TikTok', bg: 'bg-black text-white' },
      { name: 'Spotify', bg: 'bg-[#1DB954] text-white' },
      { name: 'Viber', bg: 'bg-[#7360F2] text-white' },
      { name: 'IMO', bg: 'bg-[#0091FF] text-white' }
    ],
    restriction: 'WhatsApp Messenger, Viber Messenger, IMO Messenger, Facebook & Facebook Messenger, Instagram, TikTok, Spotify',
    description: 'Comprehensive media pass covering top social networks, music streaming, and voice/video messaging protocols.'
  },
  {
    id: 'anytime-5gb-7d',
    name: 'Anytime Addon 5GB (7 Days)',
    category: 'Anytime Booster',
    recurrence: 'Onetime',
    volume: '5 GB',
    validity: '7 Days',
    price: '249',
    highlight: 'Quick Top-Up',
    tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    apps: [{ name: 'All Web Protocols (Unrestricted)', bg: 'bg-emerald-700 text-white' }],
    restriction: 'Unrestricted open internet access',
    description: 'Fast 1-week data booster for sudden high-usage requirements or project downloads.'
  },
  {
    id: 'anytime-5gb-30d',
    name: 'Anytime Addon 5GB (30 Days)',
    category: 'Anytime Booster',
    recurrence: 'Onetime',
    volume: '5 GB',
    validity: '30 Days',
    price: '298',
    highlight: 'Full Month Cushion',
    tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    apps: [{ name: 'All Web Protocols (Unrestricted)', bg: 'bg-emerald-700 text-white' }],
    restriction: 'Unrestricted open internet access',
    description: 'Monthly 5GB cushion that stays active for 30 full days alongside your base account.'
  },
  {
    id: 'anytime-10gb-7d',
    name: 'Anytime Addon 10GB (7 Days)',
    category: 'Anytime Booster',
    recurrence: 'Onetime',
    volume: '10 GB',
    validity: '7 Days',
    price: '460',
    highlight: 'High Speed Burst',
    tagColor: 'bg-teal-100 text-teal-900 border-teal-300',
    apps: [{ name: 'All Web Protocols (Unrestricted)', bg: 'bg-teal-700 text-white' }],
    restriction: 'Unrestricted open internet access',
    description: 'Heavy weekly data pass designed for short bursts of intensive file downloads or software updates.'
  },
  {
    id: 'anytime-10gb-30d',
    name: 'Anytime Addon 10GB (30 Days)',
    category: 'Anytime Booster',
    recurrence: 'Onetime',
    volume: '10 GB',
    validity: '30 Days',
    price: '570',
    highlight: 'Best Monthly Value',
    tagColor: 'bg-teal-100 text-teal-900 border-teal-300',
    apps: [{ name: 'All Web Protocols (Unrestricted)', bg: 'bg-teal-700 text-white' }],
    restriction: 'Unrestricted open internet access',
    description: 'Generous 10GB anytime monthly top-up pass for steady day-to-day work.'
  }
];

// Reload Validity Matrix
const RELOAD_VALIDITY_MATRIX = [
  { lower: '20', upper: '49', days: 3, label: '3 Calendar Days', tier: 'Tier 1', channel: 'MySLT SelfCare / Online Banking' },
  { lower: '50', upper: '99', days: 7, label: '7 Calendar Days', tier: 'Tier 2', channel: 'MySLT SelfCare (Min. Card Rs. 50)' },
  { lower: '100', upper: '199', days: 15, label: '15 Calendar Days', tier: 'Tier 3', channel: 'Digital Banking / ATM CDMs' },
  { lower: '200', upper: '499', days: 30, label: '30 Calendar Days (1 Month)', tier: 'Tier 4', channel: 'Digital & Merchant Top-ups' },
  { lower: '500', upper: '999', days: 60, label: '60 Calendar Days (2 Months)', tier: 'Tier 5', channel: 'Min. Retail POS (Food City/Keells/Dealers)' },
  { lower: '1,000', upper: '1,999', days: 90, label: '90 Calendar Days (3 Months)', tier: 'Tier 6', channel: 'All Channels Island-wide' },
  { lower: '2,000', upper: '4,999', days: 120, label: '120 Calendar Days (4 Months)', tier: 'Tier 7', channel: 'All Channels Island-wide' },
  { lower: '5,000', upper: 'And Above', days: 180, label: '180 Calendar Days (6 Months)', tier: 'Tier 8', channel: 'Max. Single Top-Up Validity' }
];

export default function LtePrepaidServicesPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'packages' | 'addons' | 'connection' | 'calculator' | 'validity' | 'troubleshooting'>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [searchTerm, setSearchTerm] = useState('');
  const [calcMB, setCalcMB] = useState<number>(500);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // PAYG calculation
  const calculatedCost = (calcMB * 0.08666).toFixed(2);

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
    <div className="flex-1 flex flex-col h-full bg-[#f1f5f9] overflow-y-auto select-none text-slate-800">
      
      {/* UNIFIED SHAREPOINT PORTAL HEADER & 9-TOPIC QUICK SWITCHER */}
      <LteSubpageHeader
        currentTopicId="prepaid"
        title="4G LTE Prepaid Services & Tariff Reference"
        subtitle="Official customer support manual for Onetime Main Broadband packages, specialized Data Add-ons, out-of-bundle PAYG tariffs, and physical/digital reload validity schedules."
        badge="Prepaid Plans"
        badgeStyle="bg-emerald-400/20 text-emerald-300 border-emerald-300/30"
        taxDate="Tax Revised: 01/08/2024"
        author="Chathurani Rathnayake"
        authorRole="Senior Assistant Manager (Customer Relations) - A7"
        icon={CreditCard}
        stats={[
          { label: 'Out-of-Bundle Rate', value: 'Rs. 0.08666', sub: 'Per MB PAYG' },
          { label: 'Min. Physical Reload', value: 'Rs. 500/=', sub: 'Retail Merchant' },
          { label: 'Min. App Reload', value: 'Rs. 50/=', sub: 'MySLT SelfCare' },
          { label: 'SIM Only (BYOD)', value: 'Rs. 1,200/=', sub: 'Zero Commitment' }
        ]}
      />

      {/* 4. INTERACTIVE TOOLBAR & CONTROLS */}
      <div className="bg-white border-b border-slate-300 px-6 py-3.5 sticky top-0 z-20 shadow-xs">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-3.5">
          
          {/* Navigation Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none text-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              All Sections
            </button>
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'packages'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Wifi className="w-4 h-4" />
              <span>Main Packages</span>
            </button>
            <button
              onClick={() => setActiveTab('addons')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'addons'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Data Add-ons</span>
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'calculator'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>PAYG Calculator</span>
            </button>
            <button
              onClick={() => setActiveTab('connection')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'connection'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>Connection Charges</span>
            </button>
            <button
              onClick={() => setActiveTab('validity')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'validity'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Validity Matrix</span>
            </button>
          </div>

          {/* View Toggle & Search Bar */}
          <div className="flex items-center gap-3 w-full lg:w-auto shrink-0">
            {/* View Switcher */}
            <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1 border border-slate-200 shrink-0">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'cards'
                    ? 'bg-white text-emerald-800 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span className="hidden sm:inline">Visual Cards</span>
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'table'
                    ? 'bg-white text-emerald-800 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-600" />
                <span className="hidden sm:inline">Data Table</span>
              </button>
            </div>

            {/* Quick Search */}
            <div className="relative flex-1 lg:w-56">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search packages, add-ons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
              />
            </div>
          </div>

        </div>
      </div>

      {/* 5. MAIN CONTENT AREA */}
      <div className="flex-1 p-6 md:p-8 space-y-10">
        <div className="max-w-6xl mx-auto space-y-10">

          {/* ======================================================== */}
          {/* SECTION 1: CRITICAL PREREQUISITE ALERT BANNER            */}
          {/* ======================================================== */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-amber-300 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 p-6 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="p-3 bg-amber-500 text-white rounded-xl shadow-xs shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-800 bg-amber-200/60 px-2.5 py-0.5 rounded-md">
                    Important Customer Advisory
                  </span>
                  <h3 className="text-lg font-black text-amber-950">
                    Positive Wallet Balance Prerequisite for Add-on Activation
                  </h3>
                  <p className="text-sm text-amber-900/90 leading-relaxed max-w-3xl font-medium">
                    Customer can purchase and load <strong>Add-ons only without having an active Main Package</strong>. However, to utilize add-ons without network interruptions, the account <strong>MUST maintain a positive wallet cash balance</strong> or an <strong>active main package with a positive balance</strong>.
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <a
                  href="https://sltcomlk.sharepoint.com/sites/KnowledgeHub/Shared%20Documents/Forms/AllItems.aspx?id=/sites/KnowledgeHub/Shared%20Documents/Chathurani/From%20Old%20KH/Old%20KH%20Backup/LTE/LTE%20Prepaid%20Guide%20for%20MySLT%20App.pdf&viewid=f85720f1-07a8-48b6-be78-153e3e326686&parent=/sites/KnowledgeHub/Shared%20Documents/Chathurani/From%20Old%20KH/Old%20KH%20Backup/LTE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow-xs transition-colors whitespace-nowrap"
                >
                  <Download className="w-4 h-4" />
                  <span>MySLT App User Guide</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* SECTION 2: MAIN PACKAGES                                 */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'packages') && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-emerald-100 rounded-xl">
                      <Wifi className="w-6 h-6 text-emerald-700" />
                    </div>
                    <span>Main Packages (4G LTE Prepaid Broadband)</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Standalone onetime broadband packages with pure anytime quota and standard monthly allotments.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-xl bg-blue-50 text-[#005696] border border-blue-200 font-bold text-xs">
                    Recharge via MySLT App / Portal
                  </span>
                </div>
              </div>

              {/* Visual Cards View */}
              {viewMode === 'cards' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {MAIN_PACKAGES
                    .filter(pkg => searchTerm === '' || pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) || pkg.volume.toLowerCase().includes(searchTerm.toLowerCase()) || pkg.notes.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((pkg) => (
                      <div
                        key={pkg.id}
                        className={`bg-white rounded-3xl border-2 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between ${
                          pkg.status === 'Discontinued' ? 'border-slate-200 bg-slate-50/70 opacity-80' : pkg.borderColor
                        }`}
                      >
                        {/* Top Gradient Banner */}
                        <div className={`p-5 bg-gradient-to-r ${pkg.accentGradient} text-white space-y-1 relative`}>
                          <div className="flex items-center justify-between">
                            <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                              pkg.status === 'Active' ? 'bg-white/20 text-white backdrop-blur-xs' : 'bg-rose-500 text-white'
                            }`}>
                              {pkg.statusDate}
                            </span>
                            <span className="text-xs font-bold bg-black/25 px-2.5 py-0.5 rounded-md">
                              {pkg.recurrence}
                            </span>
                          </div>

                          <h3 className="text-xl font-black tracking-tight text-white pt-2">
                            {pkg.name}
                          </h3>
                          <p className="text-xs text-white/80 font-medium">
                            {pkg.subtitle}
                          </p>
                        </div>

                        {/* Card Body with Big Readable Numbers */}
                        <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                          <div className="space-y-4">
                            
                            {/* Big Quota Display */}
                            <div className="flex items-baseline justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                              <div>
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Data Allowance</span>
                                <span className="text-3xl font-black text-[#005696]">{pkg.volume}</span>
                              </div>
                              <div className="text-right">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Validity</span>
                                <span className="text-lg font-black text-slate-800">{pkg.validity}</span>
                              </div>
                            </div>

                            {/* Price Block */}
                            <div className="flex items-baseline justify-between pt-1">
                              <div>
                                <span className="text-xs font-bold text-slate-400 block">Total Price (With Tax)</span>
                                <div className="flex items-baseline gap-1">
                                  <span className="text-xs font-bold text-emerald-700">Rs.</span>
                                  <span className="text-3xl font-black text-emerald-700">{pkg.price}</span>
                                </div>
                              </div>
                              <span className="text-xs text-slate-500 font-semibold bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-lg border border-emerald-200">
                                Inclusive of VAT &amp; Taxes
                              </span>
                            </div>

                            <p className="text-xs text-slate-600 leading-relaxed font-medium">
                              {pkg.notes}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-400">Action:</span>
                            <button
                              onClick={() => copyToClipboard(`ACTIVATE ${pkg.name}`, `pkg-${pkg.id}`)}
                              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
                            >
                              {copiedId === `pkg-${pkg.id}` ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                              <span>{copiedId === `pkg-${pkg.id}` ? 'Code Copied!' : 'Copy Plan Name'}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}

              {/* Data Table View */}
              {viewMode === 'table' && (
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold text-xs uppercase tracking-wider">
                          <th className="p-4">Display Name</th>
                          <th className="p-4">Recurrence</th>
                          <th className="p-4">Data Volume (GB)</th>
                          <th className="p-4">Validity</th>
                          <th className="p-4 text-emerald-400">Price (Rs) With Tax</th>
                          <th className="p-4">Availability / Status</th>
                          <th className="p-4">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-sm">
                        {MAIN_PACKAGES.map((pkg) => (
                          <tr key={pkg.id} className="hover:bg-slate-50 transition-colors">
                            <td className="p-4 font-bold text-slate-900">{pkg.name}</td>
                            <td className="p-4 text-slate-600">{pkg.recurrence}</td>
                            <td className="p-4 font-mono font-black text-[#005696] text-base">{pkg.volume}</td>
                            <td className="p-4 font-bold text-slate-800">{pkg.validity}</td>
                            <td className="p-4 font-mono font-black text-emerald-700 text-lg">Rs. {pkg.price}</td>
                            <td className="p-4">
                              <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                                pkg.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                              }`}>
                                {pkg.statusDate}
                              </span>
                            </td>
                            <td className="p-4">
                              <button
                                onClick={() => copyToClipboard(`ACTIVATE ${pkg.name}`, `tbl-${pkg.id}`)}
                                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1 transition-colors"
                              >
                                {copiedId === `tbl-${pkg.id}` ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                <span>Copy</span>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Usage Charges Callout */}
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="p-2 bg-amber-100 text-amber-700 rounded-xl">
                      <Zap className="w-5 h-5" />
                    </span>
                    <h3 className="font-black text-base text-slate-900">
                      Usage Charges of Main Package (When Add-on is Not Active)
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    If an account depletes its main broadband package without activating a supplementary data add-on, out-of-bundle PAYG browsing is charged at the standard TRCSL approved rate:
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-300 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-800 block">Out-of-Bundle Tariff</span>
                    <span className="text-3xl font-black text-emerald-900">Rs. 0.08666</span>
                    <span className="text-sm font-bold text-emerald-700 ml-1">/ MB (With Tax)</span>
                  </div>
                  <button
                    onClick={() => setActiveTab('calculator')}
                    className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-xs shadow-xs transition-colors flex items-center gap-1.5"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>Try Calculator</span>
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 3: DATA ADD-ONS                                  */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'addons') && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-amber-100 rounded-xl">
                      <Zap className="w-6 h-6 text-amber-600" />
                    </div>
                    <span>Data Add-ons (Work &amp; Learn, Social Media, Anytime Passes)</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Onetime dedicated passes for remote work, social apps, and emergency anytime boosters.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 font-bold text-xs">
                    Priority Quota Deduction
                  </span>
                </div>
              </div>

              {/* Add-ons Visual Grid with App Badges */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {DATA_ADDONS
                  .filter(addon => searchTerm === '' || addon.name.toLowerCase().includes(searchTerm.toLowerCase()) || addon.restriction.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((addon) => (
                    <div
                      key={addon.id}
                      className="bg-white rounded-3xl border-2 border-slate-200 hover:border-amber-400 p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-5"
                    >
                      <div className="space-y-3.5">
                        
                        {/* Header Badges */}
                        <div className="flex items-center justify-between">
                          <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${addon.tagColor}`}>
                            {addon.category}
                          </span>
                          <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                            {addon.validity}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-black text-slate-900 leading-snug">
                          {addon.name}
                        </h3>

                        {/* Big Quota & Price Banner */}
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-baseline justify-between">
                          <div>
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Quota</span>
                            <span className="text-3xl font-black text-[#005696]">{addon.volume}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Price (With Tax)</span>
                            <span className="text-2xl font-black text-emerald-700">Rs. {addon.price}</span>
                          </div>
                        </div>

                        {/* Supported Apps Badges */}
                        <div className="space-y-1.5">
                          <span className="text-xs font-bold text-slate-500 block uppercase tracking-wider">
                            Supported Apps &amp; Protocols:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {addon.apps.map((app, aIdx) => (
                              <span
                                key={aIdx}
                                className={`px-2.5 py-1 rounded-lg text-xs font-bold shadow-2xs ${app.bg}`}
                              >
                                {app.name}
                              </span>
                            ))}
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed font-medium pt-1">
                          {addon.description}
                        </p>
                      </div>

                      {/* Footer CTA */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                          {addon.highlight}
                        </span>
                        <button
                          onClick={() => copyToClipboard(`ACTIVATE ${addon.name}`, `addon-${addon.id}`)}
                          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
                        >
                          {copiedId === `addon-${addon.id}` ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                          <span>{copiedId === `addon-${addon.id}` ? 'Copied' : 'Select Plan'}</span>
                        </button>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Data Add-on Official Table (for quick tabular reference) */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="p-4 bg-slate-50 border-b border-slate-200">
                  <h4 className="font-black text-sm text-slate-900">
                    Official Data Add-ons Schedule (Tabular View)
                  </h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold text-xs uppercase tracking-wider">
                        <th className="p-4">Display Name</th>
                        <th className="p-4">Recurrence</th>
                        <th className="p-4">Data Volume (GB)</th>
                        <th className="p-4">Validity</th>
                        <th className="p-4 text-emerald-400">Price (Rs) With Tax</th>
                        <th className="p-4">Allowed Protocols</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {DATA_ADDONS.map((addon) => (
                        <tr key={addon.id} className="hover:bg-amber-50/30 transition-colors">
                          <td className="p-4 font-bold text-slate-900">{addon.name}</td>
                          <td className="p-4 text-slate-600">{addon.recurrence}</td>
                          <td className="p-4 font-mono font-black text-[#005696] text-base">{addon.volume}</td>
                          <td className="p-4 font-bold text-slate-800">{addon.validity}</td>
                          <td className="p-4 font-mono font-black text-emerald-700 text-lg">Rs. {addon.price}</td>
                          <td className="p-4 text-xs text-slate-600 max-w-sm font-medium">{addon.restriction}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 4: INTERACTIVE PAYG DATA CALCULATOR              */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'calculator') && (
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-emerald-100 rounded-xl">
                      <Calculator className="w-6 h-6 text-emerald-700" />
                    </div>
                    <span>Interactive PAYG Out-of-Bundle Tariff Calculator</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Quickly estimate data cost for customer inquiries at the official rate of <strong>Rs. 0.08666 / MB</strong> (With Tax).
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border-2 border-slate-200 p-8 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                
                {/* Input Slider & Presets */}
                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-900 uppercase tracking-wider block">
                      Enter or Select Usage (Megabytes - MB):
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        min="1"
                        max="10240"
                        value={calcMB}
                        onChange={(e) => setCalcMB(Math.max(1, parseInt(e.target.value) || 0))}
                        className="w-40 px-4 py-2.5 text-xl font-mono font-black text-[#005696] rounded-xl border-2 border-slate-300 focus:border-emerald-500 focus:outline-none"
                      />
                      <span className="font-bold text-slate-600 text-base">MB</span>
                      <span className="text-xs text-slate-400 font-medium">({(calcMB / 1024).toFixed(2)} GB)</span>
                    </div>
                  </div>

                  {/* Range Slider */}
                  <input
                    type="range"
                    min="10"
                    max="5120"
                    step="10"
                    value={calcMB}
                    onChange={(e) => setCalcMB(parseInt(e.target.value))}
                    className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                  />

                  {/* Preset Pills */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Quick Presets:</span>
                    <div className="flex flex-wrap gap-2">
                      {[100, 250, 500, 1024, 2048, 5120].map((preset) => (
                        <button
                          key={preset}
                          onClick={() => setCalcMB(preset)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                            calcMB === preset
                              ? 'bg-emerald-700 text-white shadow-2xs'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                          }`}
                        >
                          {preset >= 1024 ? `${preset / 1024} GB` : `${preset} MB`}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Calculation Result Display */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white shadow-lg space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-300 bg-white/10 px-3 py-1 rounded-full">
                      Estimated Out-of-Bundle Charge
                    </span>
                    <span className="text-xs text-slate-300 font-mono">Rate: 0.08666/MB</span>
                  </div>

                  <div className="pt-2">
                    <span className="text-xs text-emerald-200 font-bold block uppercase tracking-wider">Estimated Cost</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-emerald-300">Rs.</span>
                      <span className="text-5xl font-black text-white tracking-tight">{calculatedCost}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/15 text-xs text-emerald-100/80 space-y-1 font-medium">
                    <p>• Usage: <strong>{calcMB} MB</strong> (~{(calcMB / 1024).toFixed(2)} GB)</p>
                    <p>• Inclusive of VAT (18%), Telecom Levy, SSCL, and CESS taxes.</p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 5: NEW CONNECTION CHARGES                        */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'connection') && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-blue-100 rounded-xl">
                      <CreditCard className="w-6 h-6 text-blue-700" />
                    </div>
                    <span>New Connection Charges – Prepaid (Price Eff. 01st August 2024)</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Standard charges for new connections, refurbished CPE bundles, and BYOD SIM-only issuance.
                  </p>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold text-xs">
                  All Prices With Tax (Upfront)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PREPAID_CONNECTION_CHARGES.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl border-2 border-slate-200 hover:border-blue-400 p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-400">
                          {item.priorPrice}
                        </span>
                      </div>

                      <h3 className="text-lg font-black text-slate-900 leading-snug">
                        {item.type}
                      </h3>

                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-baseline justify-between">
                        <div>
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Without Tax</span>
                          <span className="text-lg font-mono font-bold text-slate-700">Rs. {item.withoutTax}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">With Tax</span>
                          <span className="text-2xl font-mono font-black text-emerald-700">Rs. {item.withTax}</span>
                        </div>
                      </div>

                      <div className="space-y-1.5 text-xs text-slate-600 font-medium">
                        <div className="flex items-center gap-1.5 text-slate-700">
                          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span><strong>Warranty:</strong> {item.warranty}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-700">
                          <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                          <span><strong>Commitment:</strong> {item.commitment}</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-500 leading-relaxed pt-1">
                        {item.conditions}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 6: RELOAD VALIDITY MATRIX (CARDS ROADMAP)        */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'validity') && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-purple-100 rounded-xl">
                      <Clock className="w-6 h-6 text-purple-700" />
                    </div>
                    <span>Reload Validity Matrix (Recharge Amount vs. Calendar Days)</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    TRCSL approved schedule defining active line validity days granted for each recharge denomination.
                  </p>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-purple-50 text-purple-900 border border-purple-200 font-bold text-xs">
                  Tier 1 to Tier 8
                </span>
              </div>

              {/* Tier Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {RELOAD_VALIDITY_MATRIX.map((tier, idx) => (
                  <div
                    key={idx}
                    className={`bg-white rounded-2xl border-2 p-5 shadow-xs space-y-3 transition-all hover:shadow-md ${
                      idx === 4
                        ? 'border-emerald-500 bg-emerald-50/20 ring-2 ring-emerald-500/20'
                        : 'border-slate-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase text-purple-800 bg-purple-100 px-2.5 py-0.5 rounded-md">
                        {tier.tier}
                      </span>
                      {idx === 4 && (
                        <span className="text-[10px] font-black uppercase text-emerald-800 bg-emerald-200 px-2 py-0.5 rounded-md">
                          Retail Floor
                        </span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Recharge Range</span>
                      <p className="text-xl font-black text-slate-900">
                        Rs. {tier.lower} {tier.upper === 'And Above' ? '+' : `– Rs. ${tier.upper}`}
                      </p>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <span className="text-[11px] text-slate-400 font-bold uppercase block">Granted Validity</span>
                      <p className="text-2xl font-black text-emerald-700">{tier.days} <span className="text-xs font-medium text-slate-600">Days</span></p>
                    </div>

                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                      {tier.channel}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 7: TROUBLE TICKETS & SOP                         */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'troubleshooting') && (
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-emerald-100 rounded-xl">
                      <FileText className="w-6 h-6 text-emerald-700" />
                    </div>
                    <span>Prepaid Fault Reporting &amp; C-Log Trouble Ticket Templates</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Standard operating procedures for resolving third-party reload delays and IMS voice restrictions.
                  </p>
                </div>
              </div>

              {/* Template 1: Reload Failure */}
              <div className="bg-slate-900 rounded-3xl border-2 border-slate-800 p-6 shadow-md space-y-3 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <AlertCircle className="w-5 h-5 text-emerald-400" />
                    <span className="font-mono text-sm font-bold text-emerald-300">
                      C-Log Trouble Ticket: Third-Party Reload Not Credited
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(ttPrepaidReloadFailure, 'tt-reload')}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs rounded-xl font-bold flex items-center gap-2 transition-colors shadow-xs"
                  >
                    {copiedId === 'tt-reload' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedId === 'tt-reload' ? 'Copied to Clipboard!' : 'Copy TT Template'}</span>
                  </button>
                </div>
                <pre className="text-lime-300 font-mono text-xs leading-relaxed whitespace-pre-wrap p-2 bg-black/30 rounded-xl overflow-x-auto">
                  {ttPrepaidReloadFailure}
                </pre>
              </div>

              {/* Template 2: Voice Issue */}
              <div className="bg-slate-900 rounded-3xl border-2 border-slate-800 p-6 shadow-md space-y-3 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <PhoneCall className="w-5 h-5 text-cyan-400" />
                    <span className="font-mono text-sm font-bold text-cyan-300">
                      C-Log Trouble Ticket: Prepaid Voice Outgoing Barred / Provisioning Fault
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(ttPrepaidVoiceFault, 'tt-voice')}
                    className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-xs rounded-xl font-bold flex items-center gap-2 transition-colors shadow-xs"
                  >
                    {copiedId === 'tt-voice' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedId === 'tt-voice' ? 'Copied to Clipboard!' : 'Copy TT Template'}</span>
                  </button>
                </div>
                <pre className="text-cyan-200 font-mono text-xs leading-relaxed whitespace-pre-wrap p-2 bg-black/30 rounded-xl overflow-x-auto">
                  {ttPrepaidVoiceFault}
                </pre>
              </div>

            </div>
          )}

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between pt-6 border-t-2 border-slate-200">
            <Link
              href="/knowledge-hub/4g-lte/old-charges"
              className="text-sm font-bold text-slate-600 hover:text-slate-900 flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to LTE Old Call Charges</span>
            </Link>

            <Link
              href="/knowledge-hub/4g-lte/other-charges"
              className="px-5 py-2.5 rounded-xl bg-[#005696] hover:bg-[#004780] text-white font-bold text-sm flex items-center gap-2 shadow-sm transition-colors"
            >
              <span>Next: Other Charges – LTE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}
