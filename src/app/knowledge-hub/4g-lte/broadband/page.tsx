"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import LteSubpageHeader from '../_components/LteSubpageHeader';
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
  Radio,
  FileText,
  Users,
  Grid,
  ChevronDown,
  Signal,
  Zap,
  BookOpen,
  Smartphone,
  Gauge,
  Info,
  Calendar,
  Building2,
  Layers,
  Sparkles,
  Sun,
  Moon,
  Tv,
  ArrowUpDown,
  Search,
  X,
  CreditCard,
  Percent,
  TrendingUp,
  Clock,
  Briefcase,
  AlertTriangle,
  Flame,
  CheckSquare,
  XCircle,
  Laptop
} from 'lucide-react';

// =========================================================================
// 1. DATA DEFINITIONS FROM OFFICIAL SHAREPOINT TEXT (EXACT SPECIFICATION)
// =========================================================================

// Section 1: New LTE Postpaid Home Broadband Anytime Packages (Online from 3rd April 2025)
const NEW_HBB_ANYTIME_PACKAGES = [
  {
    id: 'hbb-50',
    name: 'HBB Anytime 50GB',
    volume: '50 GB',
    volumeNum: 50,
    rentalWithoutTax: '1,290',
    rentalWithTax: '1,593.15', // 23.5% tax
    midnightThriller: 'Yes (12am - 7am Free Unlimited)',
    billingMode: 'Advanced Billing',
    staticIp: 'Not Supported',
    badge: 'Entry Anytime',
    badgeStyle: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    desc: '50GB pure anytime data without day/night restrictions + Free Midnight Thriller (12am-7am).'
  },
  {
    id: 'hbb-85',
    name: 'HBB Anytime 85GB',
    volume: '85 GB',
    volumeNum: 85,
    rentalWithoutTax: '1,890',
    rentalWithTax: '2,334.15',
    midnightThriller: 'Yes (12am - 7am Free Unlimited)',
    billingMode: 'Advanced Billing',
    staticIp: 'Not Supported',
    badge: 'Everyday Household',
    badgeStyle: 'bg-blue-100 text-blue-800 border-blue-300',
    desc: '85GB anytime quota with advance billing. Ideal for active households and study from home.'
  },
  {
    id: 'hbb-115',
    name: 'HBB Anytime 115GB',
    volume: '115 GB',
    volumeNum: 115,
    rentalWithoutTax: '2,590',
    rentalWithTax: '3,198.65',
    midnightThriller: 'Yes (12am - 7am Free Unlimited)',
    billingMode: 'Advanced Billing',
    staticIp: 'Not Supported',
    badge: 'Most Popular Anytime',
    badgeStyle: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    desc: '115GB anytime data. Excellent value for regular streaming, gaming, and remote workstations.',
    highlight: true
  },
  {
    id: 'hbb-200',
    name: 'HBB Anytime 200GB',
    volume: '200 GB',
    volumeNum: 200,
    rentalWithoutTax: '3,990',
    rentalWithTax: '4,927.65',
    midnightThriller: 'Yes (12am - 7am Free Unlimited)',
    billingMode: 'Advanced Billing',
    staticIp: 'Not Supported',
    badge: 'Heavy Streaming',
    badgeStyle: 'bg-purple-100 text-purple-800 border-purple-300',
    desc: '200GB high-capacity anytime volume + free midnight downloads for power users.'
  },
  {
    id: 'hbb-400',
    name: 'HBB Anytime 400GB',
    volume: '400 GB',
    volumeNum: 400,
    rentalWithoutTax: '7,990',
    rentalWithTax: '9,867.65',
    midnightThriller: 'Yes (12am - 7am Free Unlimited)',
    billingMode: 'Advanced Billing',
    staticIp: 'Static IP Supported (Only Package)',
    badge: 'Static IP Eligible',
    badgeStyle: 'bg-amber-100 text-amber-900 border-amber-300 ring-1 ring-amber-400',
    desc: '400GB enterprise anytime capacity. The ONLY HBB Anytime package eligible for Static IP.',
    highlight: true
  }
];

// Section 2: Anytime BB Packages (LTE) (Discontinued from 1st May 2025)
const LEGACY_ANYTIME_PACKAGES = [
  { id: 'any-joy', name: 'Any Joy', volume: '22 GB', rental: '1,150', priorRental: '890', badge: 'Discontinued 01/05/2025' },
  { id: 'any-beat', name: 'Any Beat', volume: '36 GB', rental: '1,550', priorRental: '1,290', badge: 'Discontinued 01/05/2025' },
  { id: 'any-flix', name: 'Any Flix', volume: '53 GB', rental: '2,150', priorRental: '1,790', badge: 'Discontinued 01/05/2025' },
  { id: 'any-blaze', name: 'Any Blaze', volume: '72 GB', rental: '2,990', priorRental: '2,490', badge: 'Discontinued 01/05/2025' },
  { id: 'any-tide', name: 'Any Tide', volume: '100 GB', rental: '3,890', priorRental: '3,390', badge: 'Discontinued 01/05/2025' },
  { id: 'any-spike', name: 'Any Spike', volume: '130 GB', rental: '5,050', priorRental: '4,390', badge: 'Discontinued 01/05/2025' },
  { id: 'any-storm', name: 'Any Storm', volume: '200 GB', rental: '7,490', priorRental: '6,790', badge: 'Discontinued 01/05/2025' },
  { id: 'any-glam', name: 'Any Glam', volume: '350 GB', rental: '12,990', priorRental: '11,790', badge: 'Discontinued 01/05/2025' },
  { id: 'any-delight', name: 'Any Delight', volume: '500 GB', rental: '18,490', priorRental: '16,790', badge: 'Discontinued 01/05/2025' },
  { id: 'any-xtreme', name: 'Any Xtreme', volume: '750 GB', rental: '26,250', priorRental: '25,000', badge: 'Discontinued 01/05/2025' }
];

// Section 3: LTE Volume Based BB Packages (Discontinued from 15th Feb 2025 for new acquisitions)
const VOLUME_BASED_PACKAGES = [
  { id: 'starter', name: 'Web Starter', rental: '950', priorRental: '740', peak: '10 GB', offPeak: '10 GB', total: '20 GB', priorTotal: '28 GB' },
  { id: 'pal', name: 'Web Pal', rental: '1,250', priorRental: '990', peak: '16 GB', offPeak: '16 GB', total: '32 GB', priorTotal: '45 GB' },
  { id: 'family-plus', name: 'Web Family Plus', rental: '1,790', priorRental: '1,490', peak: '33 GB', offPeak: '33 GB', total: '66 GB', priorTotal: '90 GB' },
  { id: 'family-active', name: 'Web Family Active', rental: '2,390', priorRental: '1,990', peak: '45 GB', offPeak: '65 GB', total: '110 GB', priorTotal: '110 GB' },
  { id: 'family-xtra', name: 'Web Family Xtra', rental: '3,090', priorRental: '2,690', peak: '55 GB', offPeak: '55 GB', total: '110 GB', priorTotal: '150 GB' },
  { id: 'booster', name: 'Web Booster', rental: '4,050', priorRental: '3,490', peak: '75 GB', offPeak: '110 GB', total: '185 GB', priorTotal: '185 GB' },
  { id: 'pro', name: 'Web Pro', rental: '5,650', priorRental: '4,890', peak: '85 GB', offPeak: '85 GB', total: '170 GB', priorTotal: '235 GB' },
  { id: 'master', name: 'Web Master', rental: '9,750', priorRental: '8,890', peak: '155 GB', offPeak: '155 GB', total: '310 GB', priorTotal: '425 GB' },
  { id: 'champ', name: 'Web Champ', rental: '15,090', priorRental: '13,690', peak: '245 GB', offPeak: '245 GB', total: '490 GB', priorTotal: '675 GB' },
  { id: 'life', name: 'Web Life', rental: '21,890', priorRental: '19,890', peak: '360 GB', offPeak: '360 GB', total: '720 GB', priorTotal: '1000 GB' },
  { id: 'inspire', name: 'Web Inspire', rental: '34,650', priorRental: '33,000', peak: '610 GB', offPeak: '610 GB', total: '1220 GB', priorTotal: '1700 GB' },
  { id: 'premier', name: 'Web Premier', rental: '60,900', priorRental: '58,000', peak: '1100 GB', offPeak: '1100 GB', total: '2200 GB', priorTotal: '3000 GB' },
  { id: 'shareholder', name: 'SLT Share Holder Package', rental: '499', priorRental: '499', peak: '7 GB', offPeak: '14 GB', total: '21 GB', priorTotal: '24 GB' }
];

// Section 4: Unlimited BB Packages (Residential)
const UNLIMITED_RESIDENTIAL_PACKAGES = [
  {
    id: 'unlimited-2',
    name: 'LTE Unlimited 2',
    speed: '2 Mbps Constant',
    rental: '2,950',
    priorRental: '2,250',
    dataOffering: 'Unlimited 24/7',
    badge: '2 Mbps Pure Unlimited',
    badgeStyle: 'bg-slate-100 text-slate-800 border-slate-300',
    remarks: 'Continuous 2 Mbps speed. Upload speed equals download speed.'
  },
  {
    id: 'unlimited-4',
    name: 'LTE Unlimited 4',
    speed: '4 Mbps Constant',
    rental: '5,150',
    priorRental: '3,950',
    dataOffering: 'Unlimited 24/7',
    badge: '4 Mbps Pure Unlimited',
    badgeStyle: 'bg-blue-100 text-blue-800 border-blue-300',
    remarks: 'Continuous 4 Mbps speed for smooth standard definition streaming and browsing.'
  },
  {
    id: 'unlimited-8',
    name: 'LTE Unlimited 8',
    speed: '8 Mbps Constant',
    rental: '7,090',
    priorRental: '5,450',
    dataOffering: 'Unlimited 24/7',
    badge: '8 Mbps Uncapped',
    badgeStyle: 'bg-purple-100 text-purple-800 border-purple-300',
    remarks: 'Unthrottled 8 Mbps continuous unlimited broadband. Upload speed equals download speed.'
  },
  {
    id: 'flash-5-res',
    name: 'Unlimited LTE Flash 5',
    speed: 'Normal 4G Speed (First 5GB) -> 1 Mbps Afterwards',
    rental: '2,350',
    priorRental: '1,950',
    dataOffering: 'Daily 5GB @ Full Speed + Unlimited @ 1 Mbps',
    midnightThriller: 'FREE Unlimited 12am - 7am at Normal Speed',
    badge: 'Flash 5 Daily',
    badgeStyle: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    remarks: 'Daily FUP resets @ 00:00 hrs. Uncapped 1 Mbps after 5GB. Add-ons allowed (Entertainment, Youth, Gamer, PeoTV, YouTube, LMS). Meet Lite/Max NOT allowed.',
    highlight: true
  },
  {
    id: 'flash-10-res',
    name: 'Unlimited LTE Flash 10',
    speed: 'Normal 4G Speed (First 10GB) -> 1 Mbps Afterwards',
    rental: '4,090',
    priorRental: '3,550',
    dataOffering: 'Daily 10GB @ Full Speed + Unlimited @ 1 Mbps',
    midnightThriller: 'FREE Unlimited 12am - 7am at Normal Speed',
    badge: 'Flash 10 Daily',
    badgeStyle: 'bg-teal-100 text-teal-800 border-teal-300',
    remarks: 'Daily FUP resets @ 00:00 hrs. Uncapped 1 Mbps after 10GB. Add-ons allowed (Entertainment, Youth, Gamer, PeoTV, YouTube, LMS). Meet Lite/Max NOT allowed.',
    highlight: true
  }
];

// Section 5: Unlimited Flash Packages for SME & Micro Business
const UNLIMITED_SME_PACKAGES = [
  {
    id: 'sme-flash-5',
    name: 'LTE Flash 5 (SME & Micro Business)',
    rental: '2,350',
    priorRental: '1,950',
    transferFee: 'Rs. 500/= (from general plans)',
    fup: 'Daily First 5GB at normal LTE speed, afterwards throttling to 1 Mbps',
    meetBundle: 'UNLIMITED at normal LTE speed for MEET Bundle (MS Teams, Zoom, WebEx, Google Meet, SLT Lynked, Skype) — Not deducted from daily quota!',
    commitment: '12 Months Commitment Period (Early termination fee: Rs. 5,000/- onetime fixed charge)',
    badge: 'SME Flash 5 + Free Meet',
    badgeStyle: 'bg-indigo-100 text-indigo-900 border-indigo-300'
  },
  {
    id: 'sme-flash-10',
    name: 'LTE Flash 10 (SME & Micro Business)',
    rental: '4,090',
    priorRental: '3,550',
    transferFee: 'Rs. 500/= (from general plans)',
    fup: 'Daily First 10GB at normal LTE speed, afterwards throttling to 1 Mbps',
    meetBundle: 'UNLIMITED at normal LTE speed for MEET Bundle (MS Teams, Zoom, WebEx, Google Meet, SLT Lynked, Skype) — Not deducted from daily quota!',
    commitment: '12 Months Commitment Period (Early termination fee: Rs. 5,000/- onetime fixed charge)',
    badge: 'SME Flash 10 + Free Meet',
    badgeStyle: 'bg-purple-100 text-purple-900 border-purple-300'
  }
];

// Section 6: 4G LTE Package Change Information (Mr. Prabath Herath - PR CC)
const PRABATH_HERATH_PACKAGE_CHANGE_RULES = [
  {
    current: 'LTE Volume Based & Anytime packages',
    requesting: 'HBB Anytime Packages',
    date: 'On the same day',
    modType: 'Lower Package to Higher Package',
    fee: 'No (FREE)',
    feeColor: 'text-emerald-600 font-black',
    billComplaint: 'No'
  },
  {
    current: 'LTE Unlimited Packages',
    requesting: 'HBB Anytime Packages',
    date: 'On the same day',
    modType: 'Lower Package to Higher Package',
    fee: 'No (FREE)',
    feeColor: 'text-emerald-600 font-black',
    billComplaint: 'No'
  },
  {
    current: 'HBB Anytime Packages',
    requesting: 'HBB Anytime Packages',
    date: 'Next Bill Date Any Date',
    modType: 'Lower Package to Higher Package',
    fee: 'No (FREE)',
    feeColor: 'text-emerald-600 font-black',
    billComplaint: 'Yes'
  },
  {
    current: 'HBB Anytime Packages',
    requesting: 'Anytime packages (Available till 30th April 2025)',
    date: 'Next Bill Date',
    modType: 'Lower Package to Higher Package',
    fee: 'No (FREE)',
    feeColor: 'text-emerald-600 font-black',
    billComplaint: 'Yes'
  },
  {
    current: 'HBB Anytime Packages',
    requesting: 'LTE Unlimited Packages',
    date: 'Next Bill Date',
    modType: 'Lower Package to Higher Package',
    fee: 'No (FREE)',
    feeColor: 'text-emerald-600 font-black',
    billComplaint: 'Yes'
  },
  {
    current: 'LTE Volume Based & Anytime packages',
    requesting: 'HBB Anytime Packages',
    date: 'On the same day',
    modType: 'Higher Package to Lower package',
    fee: 'Yes (Fee Applies)',
    feeColor: 'text-rose-600 font-black',
    billComplaint: 'No'
  },
  {
    current: 'LTE Unlimited Packages',
    requesting: 'HBB Anytime Packages',
    date: 'On the same day',
    modType: 'Higher Package to Lower package',
    fee: 'Yes (Fee Applies)',
    feeColor: 'text-rose-600 font-black',
    billComplaint: 'No'
  },
  {
    current: 'HBB Anytime Packages',
    requesting: 'HBB Anytime Packages',
    date: 'Next Bill Date',
    modType: 'Higher Package to Lower package',
    fee: 'Yes (Fee Applies)',
    feeColor: 'text-rose-600 font-black',
    billComplaint: 'Yes'
  },
  {
    current: 'HBB Anytime Packages',
    requesting: 'Anytime packages (Available till 30th April 2025)',
    date: 'Next Bill Date',
    modType: 'Higher Package to Lower package',
    fee: 'Yes (Fee Applies)',
    feeColor: 'text-rose-600 font-black',
    billComplaint: 'Yes'
  },
  {
    current: 'HBB Anytime Packages',
    requesting: 'LTE Unlimited Packages',
    date: 'Next Bill Date',
    modType: 'Higher Package to Lower package',
    fee: 'Yes (Fee Applies)',
    feeColor: 'text-rose-600 font-black',
    billComplaint: 'Yes'
  }
];

export default function LteBroadbandPackagesPage() {
  const [activeTab, setActiveTab] = useState<'new_hbb' | 'legacy_anytime' | 'volume_based' | 'unlimited_res' | 'unlimited_sme' | 'prabath_rules' | 'detail_bill'>('new_hbb');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // C-Log Trouble Ticket Templates
  const ttAdvanceBillingTransfer = `SERVICE: SLT-Mobitel 4G LTE Fixed Broadband
ACTION: HBB Anytime Package Transfer (Advance Billing Rule Compliance)
ACCOUNT NO: [011-2XXXXXX / ACCOUNT_NO]
REQUESTED PACKAGE: [e.g. HBB Anytime 115GB @ Rs. 2,590]
CURRENT PACKAGE: [CURRENT_PACKAGE_NAME]
MIGRATION DATE SELECTION: Next Bill Date (Mandatory to prevent duplicated rentals)
CUSTOMER CONSENT: Obtained for non-reversal of already billed advance rental if executed mid-cycle.
STATIC IP: Eligible ONLY on HBB Anytime 400GB (Rs. 7,990).
TOTAL TAX APPLICABLE: 23.5%
TARGET: BILLING-PROVISIONING / FRONT-OFFICE / CRM-TEAM`;

  const ttSmeFlashMeetOrder = `SERVICE: SLT-Mobitel 4G LTE Fixed Broadband (SME / Micro Business)
PACKAGE: [LTE Flash 5 (Rs. 2,350) / LTE Flash 10 (Rs. 4,090)]
CUSTOMER ELIGIBILITY: [Registered Business - SME Regional / Registered Business - Micro / Individual Micro]
BUSINESS PERK: Unlimited MEET Bundle (MS Teams, Zoom, WebEx, Google Meet, Skype) - Zero quota deduction!
DAILY FUP: First 5GB/10GB at full LTE speed, then 1 Mbps afterwards.
COMMITMENT: 12-Month commitment. Early termination fee: Rs. 5,000/- fixed.
TRANSFER FEE: Rs. 500/= (From general packages). Extra GB NOT permitted.
TARGET: SME-FULFILLMENT / REGIONAL-SALES`;

  // Filtered Lists
  const filteredNewHbb = NEW_HBB_ANYTIME_PACKAGES.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.volume.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.rentalWithoutTax.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredLegacyAnytime = LEGACY_ANYTIME_PACKAGES.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.volume.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.rental.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredVolumeBased = VOLUME_BASED_PACKAGES.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.total.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.rental.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f1f5f9] overflow-y-auto select-none text-slate-800">
      
      {/* UNIFIED SHAREPOINT PORTAL HEADER & 9-TOPIC QUICK SWITCHER */}
      <LteSubpageHeader
        currentTopicId="broadband"
        title="LTE BB Packages"
        subtitle="Official SLT-Mobitel Intranet broadband tariff directory for 4G LTE Fixed Wireless: New HBB Anytime (April 2025), Anytime Series, Volume-Based Day/Night packages, Unlimited Flash (Residential & SME), and PR CC Package Change Matrix."
        badge="Tax on BB: 23.5%"
        badgeStyle="bg-emerald-400/20 text-emerald-300 border-emerald-300/30"
        taxDate="Updated 10/1/2026 | Total Tax on BB = 23.5%"
        author="Chathurani Rathnayake"
        authorRole="Senior Assistant Manager (Customer Relations)-A7"
        icon={Globe}
        stats={[
          { label: 'New HBB Anytime', value: '5 Tiers', sub: 'From 50GB to 400GB' },
          { label: 'Midnight Thriller', value: '12am - 7am', sub: 'FREE Unlimited Data' },
          { label: 'SME Flash Meet', value: 'Unlimited', sub: 'Zoom/Teams Zero Rated' },
          { label: 'Static IP', value: '400GB Tier', sub: 'Only HBB 400GB Eligible' }
        ]}
      />

      {/* 4. SUB-NAVIGATION TOOLBAR */}
      <div className="bg-white border-b border-slate-300 px-6 py-3 sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-3">
          
          {/* Section Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none text-xs">
            <button
              onClick={() => setActiveTab('new_hbb')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'new_hbb'
                  ? 'bg-[#005696] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>New HBB Anytime (April 2025)</span>
            </button>

            <button
              onClick={() => setActiveTab('legacy_anytime')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'legacy_anytime'
                  ? 'bg-[#005696] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>Anytime BB (Till May 2025)</span>
            </button>

            <button
              onClick={() => setActiveTab('volume_based')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'volume_based'
                  ? 'bg-[#005696] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-orange-500" />
              <span>Volume-Based (Day/Night)</span>
            </button>

            <button
              onClick={() => setActiveTab('unlimited_res')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'unlimited_res'
                  ? 'bg-[#005696] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>Unlimited (Residential)</span>
            </button>

            <button
              onClick={() => setActiveTab('unlimited_sme')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'unlimited_sme'
                  ? 'bg-[#005696] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-purple-600" />
              <span>Unlimited Flash (SME &amp; Micro)</span>
            </button>

            <button
              onClick={() => setActiveTab('prabath_rules')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'prabath_rules'
                  ? 'bg-[#005696] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-blue-600" />
              <span>Package Change Rules (PR CC)</span>
            </button>

            <button
              onClick={() => setActiveTab('detail_bill')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'detail_bill'
                  ? 'bg-[#005696] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-indigo-600" />
              <span>Detail Bill &amp; Tech</span>
            </button>
          </div>

          {/* Search & View Mode */}
          <div className="flex items-center gap-2.5 w-full lg:w-auto justify-between lg:justify-end">
            <div className="relative w-full sm:w-48">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full bg-slate-50 text-slate-800 text-xs pl-8 pr-7 py-1.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#005696]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center bg-slate-100 p-1 rounded-xl shrink-0">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'cards' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Cards
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'table' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Table
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 5. MAIN CONTENT AREA */}
      <div className="flex-1 p-6 md:p-8 space-y-8">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* ========================================================================= */}
          {/* TAB 1: NEW LTE POSTPAID HOME BROADBAND ANYTIME PACKAGES (FROM APRIL 2025) */}
          {/* ========================================================================= */}
          {activeTab === 'new_hbb' && (
            <div className="space-y-6">

              {/* Banner Notice */}
              <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 border-2 border-emerald-300 rounded-3xl p-6 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white">
                    Available from 3rd April 2025
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-[#005696] border border-blue-200">
                    Total Tax on BB = 23.5%
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-900 border border-purple-200">
                    Advance Billing Mode
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900">
                  New LTE Postpaid Home Broadband Anytime Packages
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                  Official next-generation pure anytime packages. Zero day/night restriction, pure anytime quota + <strong>FREE Midnight Thriller (12 Midnight to 7 AM Free Unlimited Data)</strong> on every plan! Available for New Connections, Package Upgrades/Downgrades, Reconnections, and Copper to LTE Migrations.
                </p>
              </div>

              {/* Mandatory Business Rules Box */}
              <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 space-y-2 text-xs text-amber-950">
                <div className="flex items-center gap-2 font-black text-sm text-amber-900">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Mandatory Business Rules for Package Transfers (Advanced Billing)</span>
                </div>
                <ul className="list-disc list-inside space-y-1 font-medium leading-relaxed text-amber-900">
                  <li><strong>Check Existing Profile:</strong> Before changing the 4G BB Package, check whether customer is on HBB Anytime (Advance Billing) or general (Arrears Billing).</li>
                  <li><strong>Mandatory Date Selection:</strong> For package changes <em>within new HBB Anytime Packages</em> or <em>from new HBB Anytime to any other packages</em>, <strong>it is mandatory to select the transfer date as the Next Bill Date</strong>.</li>
                  <li><strong>No Refund/Reversal:</strong> Violation of this rule causes duplicated rental. The already billed rental for the following month under in-advance billing will <strong>NOT be reversed or refunded under any circumstances</strong>.</li>
                  <li><strong>Mid-Cycle Override:</strong> If a customer strongly demands change before next bill date, it must be done <em>only</em> upon obtaining explicit consent regarding non-reversal of already billed rental.</li>
                  <li><strong>Static IP:</strong> Static IP is provided <strong>strictly for HBB Anytime 400GB Package ONLY</strong>.</li>
                </ul>
              </div>

              {/* Cards Mode */}
              {viewMode === 'cards' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                  {filteredNewHbb.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`bg-white rounded-3xl border-2 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group ${
                        pkg.highlight ? 'border-[#005696] ring-2 ring-[#005696]/20 bg-blue-50/15' : 'border-slate-200'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${pkg.badgeStyle}`}>
                            {pkg.badge}
                          </span>
                        </div>

                        <div>
                          <h4 className="font-black text-xl text-slate-900 group-hover:text-[#005696] transition-colors">
                            {pkg.name}
                          </h4>
                          <p className="text-[11px] text-slate-500 font-medium mt-1 leading-snug">
                            {pkg.desc}
                          </p>
                        </div>

                        <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                          <div className="flex items-baseline justify-between">
                            <span className="text-[9px] font-bold text-slate-400 uppercase">Anytime Quota</span>
                            <span className="text-2xl font-black text-emerald-700">{pkg.volume}</span>
                          </div>
                          <div className="pt-2 border-t border-slate-200">
                            <span className="text-[9px] font-bold text-slate-400 uppercase block">Rental (Without Tax)</span>
                            <span className="text-xl font-black text-slate-900">Rs. {pkg.rentalWithoutTax}</span>
                            <span className="text-[10px] text-slate-500 block">With Tax (23.5%): Rs. {pkg.rentalWithTax}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100 mt-3 space-y-1 text-[11px]">
                        <div className="flex items-center gap-1 text-purple-700 font-bold">
                          <Moon className="w-3 h-3" />
                          <span>12am - 7am Unlimited Data</span>
                        </div>
                        <div className="text-[10px] text-slate-500">
                          Static IP: <strong className={pkg.id === 'hbb-400' ? 'text-amber-800' : 'text-slate-400'}>{pkg.staticIp}</strong>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Table Mode */}
              {viewMode === 'table' && (
                <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                          <th className="p-3.5">Package Name</th>
                          <th className="p-3.5">Anytime Data</th>
                          <th className="p-3.5">Rental (Without Tax)</th>
                          <th className="p-3.5">Rental With Tax (23.5%)</th>
                          <th className="p-3.5">Midnight Thriller (12am-7am)</th>
                          <th className="p-3.5">Billing Mode</th>
                          <th className="p-3.5">Static IP Eligibility</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredNewHbb.map((pkg) => (
                          <tr key={pkg.id} className="hover:bg-slate-50 transition-colors">
                            <td className="p-3.5 font-bold text-slate-900">{pkg.name}</td>
                            <td className="p-3.5 font-black text-emerald-700 text-sm">{pkg.volume}</td>
                            <td className="p-3.5 font-black text-slate-900 text-sm">Rs. {pkg.rentalWithoutTax}</td>
                            <td className="p-3.5 text-slate-600 font-semibold">Rs. {pkg.rentalWithTax}</td>
                            <td className="p-3.5 text-purple-800 font-semibold">FREE Unlimited (12am - 7am)</td>
                            <td className="p-3.5 font-bold text-blue-800">{pkg.billingMode}</td>
                            <td className="p-3.5 font-bold text-amber-800">{pkg.staticIp}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: ANYTIME BB PACKAGES (DISCONTINUED FROM 1ST MAY 2025)               */}
          {/* ========================================================================= */}
          {activeTab === 'legacy_anytime' && (
            <div className="space-y-6">

              <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-6 space-y-2">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-600 text-white inline-block">
                  Discontinued from 1st May 2025
                </span>
                <h3 className="text-xl font-black text-slate-900">
                  Anytime BB Packages (LTE)
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  The "Anytime" Series of Broadband Packages (Any Joy to Any Xtreme) will be <strong>discontinued from 1st May 2025</strong> for New Connections, Package Changes, Copper to LTE, Reconnections, and Relocations. Existing customers can continue or migrate to New HBB Anytime.
                </p>
                <div className="text-[11px] font-bold text-purple-800 bg-purple-50 p-2.5 rounded-xl border border-purple-200">
                  🌙 <strong>Midnight Thriller Active:</strong> FREE UNLIMITED INTERNET every day from 12 midnight - 7am (Active since 1st Jan 2024).
                </div>
              </div>

              {/* Table Mode */}
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-3.5">Package Name</th>
                        <th className="p-3.5">Total Anytime Volume</th>
                        <th className="p-3.5">Monthly Rental (Rs.)</th>
                        <th className="p-3.5">Prior Rental (Rs.)</th>
                        <th className="p-3.5">Midnight Thriller</th>
                        <th className="p-3.5">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredLegacyAnytime.map((pkg) => (
                        <tr key={pkg.id} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900">{pkg.name}</td>
                          <td className="p-3.5 font-black text-emerald-700 text-sm">{pkg.volume}</td>
                          <td className="p-3.5 font-black text-slate-900 text-sm">Rs. {pkg.rental}</td>
                          <td className="p-3.5 text-slate-400 line-through">Rs. {pkg.priorRental}</td>
                          <td className="p-3.5 text-purple-700 font-semibold">12am - 7am Free Unlimited</td>
                          <td className="p-3.5">
                            <span className="text-[10px] font-bold bg-rose-50 text-rose-800 px-2 py-0.5 rounded-md border border-rose-200">
                              Discontinued from 01/05/2025
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 3: VOLUME-BASED DAY/NIGHT PACKAGES (DISCONTINUED FEB 2025)            */}
          {/* ========================================================================= */}
          {activeTab === 'volume_based' && (
            <div className="space-y-6">

              <div className="bg-orange-50 border-2 border-orange-300 rounded-3xl p-6 space-y-2">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-orange-600 text-white inline-block">
                  Discontinued from 15th February 2025
                </span>
                <h3 className="text-xl font-black text-slate-900">
                  LTE Volume Based BB Packages (Day / Night Split)
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  Time-based packages (Web Starter to Web Premier &amp; SLT Share Holder) will not be available after <strong>15th February 2025</strong> for New Connections, Package Changes, Copper to LTE, Reconnections, or Relocations. Total tax amount on BB = 23.5%.
                </p>
              </div>

              {/* Technical Specifications Strip */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1 shadow-2xs">
                  <span className="font-bold text-slate-800 block">🌙 Free Midnight Thriller:</span>
                  <p className="text-slate-600">FREE UNLIMITED INTERNET every day from <strong>12 midnight - 7am</strong> (since 1st Jan 2024).</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1 shadow-2xs">
                  <span className="font-bold text-slate-800 block">⚡ Speeds &amp; Throttling:</span>
                  <p className="text-slate-600">Average 8 Mbps Download / 1 Mbps Upload. Throttled to <strong>64 kbps</strong> when total quota is exhausted.</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1 shadow-2xs">
                  <span className="font-bold text-slate-800 block">📦 Additional Extra GB:</span>
                  <p className="text-slate-600">1GB: Rs. 250/= | 2GB: Rs. 500/= | 5GB: Rs. 750/= | &gt;5GB: Rs. 150/= per GB.</p>
                </div>
              </div>

              {/* Table Mode */}
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-3.5">Package Name</th>
                        <th className="p-3.5">Standard Usage (8am-12 midnight)</th>
                        <th className="p-3.5">Additional Off-peak (7am-8am)</th>
                        <th className="p-3.5">Total Volume (GB)</th>
                        <th className="p-3.5">Prior Total</th>
                        <th className="p-3.5">Rental (Rs.)</th>
                        <th className="p-3.5">Prior Rental</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredVolumeBased.map((pkg) => (
                        <tr key={pkg.id} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900">{pkg.name}</td>
                          <td className="p-3.5 font-bold text-amber-700">{pkg.peak}</td>
                          <td className="p-3.5 font-bold text-indigo-700">{pkg.offPeak}</td>
                          <td className="p-3.5 font-black text-slate-900 text-sm">{pkg.total}</td>
                          <td className="p-3.5 text-slate-400 line-through">{pkg.priorTotal}</td>
                          <td className="p-3.5 font-black text-[#005696] text-sm">Rs. {pkg.rental}</td>
                          <td className="p-3.5 text-slate-400 line-through">Rs. {pkg.priorRental}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 4: UNLIMITED BB PACKAGES (RESIDENTIAL)                                 */}
          {/* ========================================================================= */}
          {activeTab === 'unlimited_res' && (
            <div className="space-y-6">

              <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-900 text-white rounded-3xl p-6 shadow-md space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/20 text-emerald-200 border border-white/20">
                    Unlimited Residential LTE
                  </span>
                  <span className="text-xs text-emerald-100">Total Tax on BB = 23.5% | Upload Speed = Download Speed</span>
                </div>
                <h3 className="text-2xl font-black tracking-tight">
                  LTE Unlimited &amp; Flash Packages (Residential)
                </h3>
                <p className="text-xs text-emerald-100/90 max-w-3xl leading-relaxed">
                  High-speed constant uncapped plans (2 Mbps, 4 Mbps, 8 Mbps) and Flash daily high-speed quota (5GB / 10GB) with unmetered 1 Mbps browsing afterwards.
                </p>
              </div>

              {/* Cards View */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {UNLIMITED_RESIDENTIAL_PACKAGES.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`bg-white rounded-3xl border-2 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group ${
                      pkg.highlight ? 'border-emerald-500 ring-2 ring-emerald-500/20 bg-emerald-50/15' : 'border-slate-200'
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${pkg.badgeStyle}`}>
                          {pkg.badge}
                        </span>
                        <span className="text-xs text-slate-400 font-bold line-through">
                          Prior: Rs. {pkg.priorRental}
                        </span>
                      </div>

                      <h4 className="font-black text-2xl text-slate-900 group-hover:text-emerald-800 transition-colors">
                        {pkg.name}
                      </h4>

                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                        <div className="flex items-baseline justify-between">
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Monthly Rental</span>
                          <span className="text-2xl font-black text-slate-900">Rs. {pkg.rental}</span>
                        </div>
                        <div className="pt-2 border-t border-slate-200 space-y-1 text-xs">
                          <div className="flex items-center justify-between text-emerald-700 font-bold">
                            <span>Speed / Bandwidth:</span>
                            <span>{pkg.speed}</span>
                          </div>
                          <div className="flex items-center justify-between text-slate-600">
                            <span>Offering:</span>
                            <span className="font-semibold">{pkg.dataOffering}</span>
                          </div>
                          {pkg.midnightThriller && (
                            <div className="text-purple-700 font-bold pt-1">
                              🌙 {pkg.midnightThriller}
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        {pkg.remarks}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 mt-4 text-[11px] text-slate-500 flex items-center justify-between">
                      <span>Upload Speed: Equal to DL</span>
                      <span className="font-bold text-emerald-700">Tax: 23.5%</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Data Add-On Permissions Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3 text-xs">
                <h4 className="font-bold text-slate-900 text-sm">Flash 5 &amp; Flash 10 Data Add-On Policy:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-1">
                    <span className="font-black text-emerald-900 flex items-center gap-1.5">
                      <CheckSquare className="w-4 h-4 text-emerald-600" />
                      <span>Allowed Data Add-Ons:</span>
                    </span>
                    <p className="text-emerald-800 leading-relaxed">
                      Entertainment Combo Pack, Youth Add-on, Gamer Lite, Gamer Premium, Streamer Premium, PeoTV Go, Messenger, YouTube, LMS Lite (Onetime &amp; Recurrent), LMS Max (Onetime &amp; Recurrent).
                    </p>
                  </div>

                  <div className="p-3 bg-rose-50/70 border border-rose-200 rounded-xl space-y-1">
                    <span className="font-black text-rose-900 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-rose-600" />
                      <span>NOT Allowed Add-Ons:</span>
                    </span>
                    <p className="text-rose-800 leading-relaxed">
                      <strong>Meet Lite</strong> (Both Onetime &amp; Recurrent) and <strong>Meet Max</strong> (Both Onetime &amp; Recurrent) are strictly restricted on residential Flash packages.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl space-y-1 text-slate-700">
                  <span className="font-bold text-[#005696] block">Package Transfer Fees (Unlimited):</span>
                  <p>• Any package (Time-based or Anytime) to Unlimited: <strong>Rs. 500/=</strong></p>
                  <p>• Unlimited lower to Unlimited higher: <strong>FREE</strong></p>
                  <p>• Unlimited higher to Unlimited lower: <strong>Rs. 250/=</strong></p>
                  <p>• Unlimited to Normal higher: <strong>No charge</strong></p>
                </div>
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 5: UNLIMITED FLASH (SME & MICRO BUSINESS)                              */}
          {/* ========================================================================= */}
          {activeTab === 'unlimited_sme' && (
            <div className="space-y-6">

              <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 shadow-md space-y-2">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-purple-500 text-white inline-block">
                  SME &amp; Micro Business Exclusive
                </span>
                <h3 className="text-2xl font-black tracking-tight">
                  SLT LTE Unlimited Flash Packages for Business
                </h3>
                <p className="text-xs text-purple-100/90 max-w-3xl leading-relaxed">
                  Opened for <strong>Registered Business (SME Regional)</strong>, <strong>Registered Business (Micro Business)</strong>, and <strong>Individual (Micro Business)</strong>. Includes unmetered zero-rated MEET Bundle for Teams, Zoom, WebEx, Google Meet, and Skype!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {UNLIMITED_SME_PACKAGES.map((pkg) => (
                  <div key={pkg.id} className="bg-white rounded-3xl border-2 border-purple-200 p-6 shadow-xs space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${pkg.badgeStyle}`}>
                        {pkg.badge}
                      </span>
                      <span className="text-xs text-slate-400 font-bold line-through">Prior: Rs. {pkg.priorRental}</span>
                    </div>

                    <h4 className="font-black text-2xl text-slate-900">{pkg.name}</h4>

                    <div className="p-4 bg-purple-50/50 rounded-2xl border border-purple-100 flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Monthly Rental</span>
                        <span className="text-3xl font-black text-purple-900">Rs. {pkg.rental}</span>
                      </div>
                      <span className="text-xs font-bold text-purple-700 bg-white px-2.5 py-1 rounded-lg border border-purple-200">
                        Transfer Fee: {pkg.transferFee}
                      </span>
                    </div>

                    <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1 text-xs">
                      <span className="font-black text-emerald-900 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        <span>Exclusive SME Perk:</span>
                      </span>
                      <p className="text-emerald-800 font-medium leading-relaxed">
                        {pkg.meetBundle}
                      </p>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-600">
                      <p><strong>Daily Quota:</strong> {pkg.fup}</p>
                      <p><strong>Commitment:</strong> {pkg.commitment}</p>
                      <p><strong>Restrictions:</strong> No Extra GB purchase, no Static IP, not entitled for sltgo/loyalty data.</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 6: PACKAGE CHANGE MATRIX & POLICIES (MR. PRABATH HERATH - PR CC)     */}
          {/* ========================================================================= */}
          {activeTab === 'prabath_rules' && (
            <div className="space-y-6">

              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <ArrowUpDown className="w-5 h-5 text-[#005696]" />
                    <span>4G LTE Broadband Package Changes Relevant Information</span>
                  </h3>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-xl">
                    Prepared by Mr. Prabath Herath - PR CC
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Official rule matrix determining whether package modifications execute on the same day or Next Bill Date, fee applicability, and bill complaint creation rules.
                </p>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-3.5">Current Package Type</th>
                        <th className="p-3.5">Requesting Package Type</th>
                        <th className="p-3.5">Package Changing Date</th>
                        <th className="p-3.5">Modification Type</th>
                        <th className="p-3.5">Package Change Fee</th>
                        <th className="p-3.5">Bill Complaint</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {PRABATH_HERATH_PACKAGE_CHANGE_RULES.map((rule, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900">{rule.current}</td>
                          <td className="p-3.5 font-medium text-slate-700">{rule.requesting}</td>
                          <td className="p-3.5 font-semibold text-slate-800">{rule.date}</td>
                          <td className="p-3.5">
                            <span className={`px-2 py-0.5 rounded-md font-semibold text-[11px] ${
                              rule.modType.includes('Higher to Lower') ? 'bg-amber-100 text-amber-900' : 'bg-blue-50 text-blue-800'
                            }`}>
                              {rule.modType}
                            </span>
                          </td>
                          <td className={`p-3.5 ${rule.feeColor}`}>{rule.fee}</td>
                          <td className="p-3.5 font-bold">
                            <span className={rule.billComplaint === 'Yes' ? 'text-amber-700 font-black' : 'text-slate-500'}>
                              {rule.billComplaint}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 7: DETAIL BILL & TECHNICAL REFERENCE                                 */}
          {/* ========================================================================= */}
          {activeTab === 'detail_bill' && (
            <div className="space-y-6">

              {/* Broadband Detail Bill Charges */}
              <div className="bg-white rounded-3xl border-2 border-indigo-200 p-6 shadow-xs space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-indigo-100 text-indigo-900 px-2.5 py-0.5 rounded-full inline-block">
                    Printed / Detail Invoicing
                  </span>
                  <h3 className="text-xl font-black text-slate-900">
                    Broadband Detail Bill Charges
                  </h3>
                  <p className="text-xs text-slate-500">
                    Tariffs for providing itemized broadband billing statements to customers.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-indigo-50/60 rounded-2xl border border-indigo-100 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Monthly Fee</span>
                    <span className="text-2xl font-black text-indigo-900">Rs. 100/=</span>
                  </div>
                  <div className="p-4 bg-indigo-50/60 rounded-2xl border border-indigo-100 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Annual Fee</span>
                    <span className="text-2xl font-black text-indigo-900">Rs. 1,000/=</span>
                  </div>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4 text-xs">
                <h4 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#005696]" />
                  <span>Technical Operational Details (Credentials, Hotspots &amp; Static IP)</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <span className="font-bold text-slate-900 text-sm block">LTE BB Username Format:</span>
                    <p>Format of International Numbers: e.g., <code>94113XXXXXX</code> or <code>94YZ3XXXXXX</code>.</p>
                    <p className="text-[11px] text-slate-500">No password is required for internet access. Password provided by SLT is used ONLY for registration to the ISP VAS portal.</p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <span className="font-bold text-slate-900 text-sm block">Connecting via SLT Wi-Fi Hotspots:</span>
                    <p>Username: <code>941136XXXXX</code> | Password: <code>BB Password</code></p>
                    <p className="text-[11px] text-slate-500">LTE customers can obtain Static IPs by placing a formal service request via the Regional Telecom Office (RTOM).</p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* C-LOG & CRM ORDER TEMPLATES                                               */}
          {/* ========================================================================= */}
          <div className="space-y-4 pt-4 border-t-2 border-slate-200">
            <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#005696]" />
              <span>C-Log &amp; Front-Office Trouble Ticket Templates</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Template 1: Advance Billing Transfer */}
              <div className="bg-slate-900 rounded-2xl p-4 text-white text-xs space-y-2 border border-slate-800 shadow-md">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-bold text-cyan-300">C-Log: HBB Anytime Advance Billing Transfer</span>
                  <button
                    onClick={() => copyToClipboard(ttAdvanceBillingTransfer, 'tt-advance')}
                    className="px-2.5 py-1 bg-[#005696] hover:bg-blue-600 rounded-lg text-white font-bold flex items-center gap-1 transition-colors"
                  >
                    {copiedId === 'tt-advance' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === 'tt-advance' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="font-mono text-[11px] text-lime-300 leading-relaxed whitespace-pre-wrap overflow-x-auto">
                  {ttAdvanceBillingTransfer}
                </pre>
              </div>

              {/* Template 2: SME Flash Meet */}
              <div className="bg-slate-900 rounded-2xl p-4 text-white text-xs space-y-2 border border-slate-800 shadow-md">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-bold text-purple-300">C-Log: SME Flash Meet Activation</span>
                  <button
                    onClick={() => copyToClipboard(ttSmeFlashMeetOrder, 'tt-sme')}
                    className="px-2.5 py-1 bg-purple-700 hover:bg-purple-600 rounded-lg text-white font-bold flex items-center gap-1 transition-colors"
                  >
                    {copiedId === 'tt-sme' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === 'tt-sme' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="font-mono text-[11px] text-purple-300 leading-relaxed whitespace-pre-wrap overflow-x-auto">
                  {ttSmeFlashMeetOrder}
                </pre>
              </div>

            </div>
          </div>

          {/* ========================================================================= */}
          {/* BOTTOM SEQUENTIAL NAVIGATION                                              */}
          {/* ========================================================================= */}
          <div className="flex items-center justify-between pt-6 border-t-2 border-slate-200">
            <Link
              href="/knowledge-hub/4g-lte/voice"
              className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back: Voice Packages (VoLTE)</span>
            </Link>

            <Link
              href="/knowledge-hub/4g-lte/old-charges"
              className="px-5 py-2.5 rounded-xl bg-[#005696] hover:bg-[#004780] text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-colors"
            >
              <span>Next: LTE Old Call Charges</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}
