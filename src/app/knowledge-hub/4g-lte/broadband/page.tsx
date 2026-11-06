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
  Laptop,
  PhoneCall,
  ShieldAlert,
  CheckCircle,
  Ban,
  Tag
} from 'lucide-react';

// =========================================================================
// 1. DATA DEFINITIONS FROM OFFICIAL SHAREPOINT TEXT (EXACT SPECIFICATION)
// =========================================================================

// Table 1: 4G LTE Broadband Package Changes relevant information (Prepared by Mr. Prabath Herath - PR CC)
const PRABATH_HERATH_PACKAGE_CHANGE_RULES = [
  {
    current: 'LTE Volume Based & Anytime packages',
    requesting: 'HBB Anytime Packages',
    date: 'On the same day',
    modType: 'Lower Package to Higher Package',
    fee: 'No (FREE)',
    feeColor: 'text-emerald-700 font-black',
    billComplaint: 'No',
    complaintRisk: 'Safe to execute immediately'
  },
  {
    current: 'LTE Unlimited Packages',
    requesting: 'HBB Anytime Packages',
    date: 'On the same day',
    modType: 'Lower Package to Higher Package',
    fee: 'No (FREE)',
    feeColor: 'text-emerald-700 font-black',
    billComplaint: 'No',
    complaintRisk: 'Safe to execute immediately'
  },
  {
    current: 'HBB Anytime Packages',
    requesting: 'HBB Anytime Packages',
    date: 'Next Bill Date Any Date',
    modType: 'Lower Package to Higher Package',
    fee: 'No (FREE)',
    feeColor: 'text-emerald-700 font-black',
    billComplaint: 'Yes',
    complaintRisk: 'High Risk if mid-cycle: MUST select Next Bill Date'
  },
  {
    current: 'HBB Anytime Packages',
    requesting: 'Anytime packages (Available till 30th April 2025)',
    date: 'Next Bill Date',
    modType: 'Lower Package to Higher Package',
    fee: 'No (FREE)',
    feeColor: 'text-emerald-700 font-black',
    billComplaint: 'Yes',
    complaintRisk: 'High Risk if mid-cycle: MUST select Next Bill Date'
  },
  {
    current: 'HBB Anytime Packages',
    requesting: 'LTE Unlimited Packages',
    date: 'Next Bill Date',
    modType: 'Lower Package to Higher Package',
    fee: 'No (FREE)',
    feeColor: 'text-emerald-700 font-black',
    billComplaint: 'Yes',
    complaintRisk: 'High Risk if mid-cycle: MUST select Next Bill Date'
  },
  {
    current: 'LTE Volume Based & Anytime packages',
    requesting: 'HBB Anytime Packages',
    date: 'On the same day',
    modType: 'Higher Package to Lower package',
    fee: 'Yes (Fee Applies)',
    feeColor: 'text-rose-700 font-black',
    billComplaint: 'No',
    complaintRisk: 'Safe from duplicate bill, but downgrade fee applies'
  },
  {
    current: 'LTE Unlimited Packages',
    requesting: 'HBB Anytime Packages',
    date: 'On the same day',
    modType: 'Higher Package to Lower package',
    fee: 'Yes (Fee Applies)',
    feeColor: 'text-rose-700 font-black',
    billComplaint: 'No',
    complaintRisk: 'Safe from duplicate bill, but downgrade fee applies'
  },
  {
    current: 'HBB Anytime Packages',
    requesting: 'HBB Anytime Packages',
    date: 'Next Bill Date',
    modType: 'Higher Package to Lower package',
    fee: 'Yes (Fee Applies)',
    feeColor: 'text-rose-700 font-black',
    billComplaint: 'Yes',
    complaintRisk: 'High Risk: Downgrade fee applies AND must use Next Bill Date'
  },
  {
    current: 'HBB Anytime Packages',
    requesting: 'Anytime packages (Available till 30th April 2025)',
    date: 'Next Bill Date',
    modType: 'Higher Package to Lower package',
    fee: 'Yes (Fee Applies)',
    feeColor: 'text-rose-700 font-black',
    billComplaint: 'Yes',
    complaintRisk: 'High Risk: Downgrade fee applies AND must use Next Bill Date'
  },
  {
    current: 'HBB Anytime Packages',
    requesting: 'LTE Unlimited Packages',
    date: 'Next Bill Date',
    modType: 'Higher Package to Lower package',
    fee: 'Yes (Fee Applies)',
    feeColor: 'text-rose-700 font-black',
    billComplaint: 'Yes',
    complaintRisk: 'High Risk: Downgrade fee applies AND must use Next Bill Date'
  }
];

// Table 2: Detail Bill Charges
const DETAIL_BILL_CHARGES = [
  { duration: 'Monthly fee', charge: 'Rs. 100/=', note: 'Billed monthly on customer invoice' },
  { duration: 'Annual fee', charge: 'Rs. 1,000/=', note: 'One-time annual invoice charge' }
];

// Table 3: New LTE Postpaid Home Broadband Anytime Packages (Will be available from 3rd April 2025)
const NEW_HBB_ANYTIME_PACKAGES = [
  {
    id: 'hbb-50',
    name: 'HBB Anytime 50GB',
    volume: '50 GB',
    volumeNum: 50,
    rentalWithoutTax: '1,290',
    rentalWithTax: '1,593.15', // 23.5% tax
    midnightThriller: 'Yes (Midnight to 7am Free Unlimited Data)',
    billingMode: 'Advanced Billing',
    staticIpEligible: false,
    badge: 'Entry Anytime',
    badgeStyle: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    desc: '50GB anytime quota + Free Midnight Thriller (12am-7am). Ideal starter home connection.'
  },
  {
    id: 'hbb-85',
    name: 'HBB Anytime 85GB',
    volume: '85 GB',
    volumeNum: 85,
    rentalWithoutTax: '1,890',
    rentalWithTax: '2,334.15',
    midnightThriller: 'Yes (Midnight to 7am Free Unlimited Data)',
    billingMode: 'Advanced Billing',
    staticIpEligible: false,
    badge: 'Household Plan',
    badgeStyle: 'bg-blue-100 text-blue-800 border-blue-300',
    desc: '85GB anytime quota with advance billing. Excellent for online study and daily streaming.'
  },
  {
    id: 'hbb-115',
    name: 'HBB Anytime 115GB',
    volume: '115 GB',
    volumeNum: 115,
    rentalWithoutTax: '2,590',
    rentalWithTax: '3,198.65',
    midnightThriller: 'Yes (Midnight to 7am Free Unlimited Data)',
    billingMode: 'Advanced Billing',
    staticIpEligible: false,
    badge: 'Most Popular',
    badgeStyle: 'bg-indigo-100 text-indigo-800 border-indigo-300 ring-1 ring-indigo-400',
    desc: '115GB pure anytime data. Highest customer demand for active multi-device households.',
    highlight: true
  },
  {
    id: 'hbb-200',
    name: 'HBB Anytime 200GB',
    volume: '200 GB',
    volumeNum: 200,
    rentalWithoutTax: '3,990',
    rentalWithTax: '4,927.65',
    midnightThriller: 'Yes (Midnight to 7am Free Unlimited Data)',
    billingMode: 'Advanced Billing',
    staticIpEligible: false,
    badge: 'Power User',
    badgeStyle: 'bg-purple-100 text-purple-800 border-purple-300',
    desc: '200GB high-volume anytime quota + free overnight downloads for heavy downloaders.'
  },
  {
    id: 'hbb-400',
    name: 'HBB Anytime 400GB',
    volume: '400 GB',
    volumeNum: 400,
    rentalWithoutTax: '7,990',
    rentalWithTax: '9,867.65',
    midnightThriller: 'Yes (Midnight to 7am Free Unlimited Data)',
    billingMode: 'Advanced Billing',
    staticIpEligible: true,
    badge: 'Static IP Eligible',
    badgeStyle: 'bg-amber-100 text-amber-950 border-amber-300 ring-2 ring-amber-400/50',
    desc: '400GB enterprise anytime capacity. The ONLY HBB Anytime package eligible for Static IP.',
    highlight: true
  }
];

// Table 4: LTE Volume Based BB packages (Time-based packages discontinued from 15th February 2025)
const VOLUME_BASED_PACKAGES = [
  { id: 'starter', name: 'Web Starter', rental: '950', rentalWithTax: '1,173.25', priorRental: '740', peak: '10 GB (was 11)', offPeak: '10 GB (was 17)', total: '20 GB', priorTotal: '28 GB' },
  { id: 'pal', name: 'Web Pal', rental: '1,250', rentalWithTax: '1,543.75', priorRental: '990', peak: '16 GB (was 18)', offPeak: '16 GB (was 27)', total: '32 GB', priorTotal: '45 GB' },
  { id: 'family-plus', name: 'Web Family Plus', rental: '1,790', rentalWithTax: '2,210.65', priorRental: '1,490', peak: '33 GB (was 36)', offPeak: '33 GB (was 54)', total: '66 GB', priorTotal: '90 GB' },
  { id: 'family-active', name: 'Web Family Active', rental: '2,390', rentalWithTax: '2,951.65', priorRental: '1,990', peak: '45 GB', offPeak: '65 GB', total: '110 GB', priorTotal: '110 GB' },
  { id: 'family-xtra', name: 'Web Family Xtra', rental: '3,090', rentalWithTax: '3,816.15', priorRental: '2,690', peak: '55 GB (was 60)', offPeak: '55 GB (was 90)', total: '110 GB', priorTotal: '150 GB' },
  { id: 'booster', name: 'Web Booster', rental: '4,050', rentalWithTax: '5,001.75', priorRental: '3,490', peak: '75 GB', offPeak: '110 GB', total: '185 GB', priorTotal: '185 GB' },
  { id: 'pro', name: 'Web Pro', rental: '5,650', rentalWithTax: '6,977.75', priorRental: '4,890', peak: '85 GB (was 95)', offPeak: '85 GB (was 140)', total: '170 GB', priorTotal: '235 GB' },
  { id: 'master', name: 'Web Master', rental: '9,750', rentalWithTax: '12,041.25', priorRental: '8,890', peak: '155 GB (was 170)', offPeak: '155 GB (was 255)', total: '310 GB', priorTotal: '425 GB' },
  { id: 'champ', name: 'Web Champ', rental: '15,090', rentalWithTax: '18,636.15', priorRental: '13,690', peak: '245 GB (was 270)', offPeak: '245 GB (was 405)', total: '490 GB', priorTotal: '675 GB' },
  { id: 'life', name: 'Web Life', rental: '21,890', rentalWithTax: '27,034.15', priorRental: '19,890', peak: '360 GB (was 400)', offPeak: '360 GB (was 600)', total: '720 GB', priorTotal: '1000 GB' },
  { id: 'inspire', name: 'Web Inspire', rental: '34,650', rentalWithTax: '42,792.75', priorRental: '33,000', peak: '610 GB (was 700)', offPeak: '610 GB (was 1000)', total: '1220 GB', priorTotal: '1700 GB' },
  { id: 'premier', name: 'Web Premier', rental: '60,900', rentalWithTax: '75,211.50', priorRental: '58,000', peak: '1100 GB (was 1250)', offPeak: '1100 GB (was 1750)', total: '2200 GB', priorTotal: '3000 GB' },
  { id: 'shareholder', name: 'SLT Share Holder Package', rental: '499', rentalWithTax: '616.27', priorRental: '499', peak: '7 GB (was 8)', offPeak: '14 GB (was 16)', total: '21 GB', priorTotal: '24 GB' }
];

// Table 5: Anytime BB packages (LTE) (Discontinued from 1st May 2025)
const LEGACY_ANYTIME_PACKAGES = [
  { id: 'any-joy', name: 'Any Joy', volume: '22 GB', rental: '1,150', rentalWithTax: '1,420.25', priorRental: '890', badge: 'Discontinued 01/05/2025' },
  { id: 'any-beat', name: 'Any Beat', volume: '36 GB', rental: '1,550', rentalWithTax: '1,914.25', priorRental: '1,290', badge: 'Discontinued 01/05/2025' },
  { id: 'any-flix', name: 'Any Flix', volume: '53 GB', rental: '2,150', rentalWithTax: '2,655.25', priorRental: '1,790', badge: 'Discontinued 01/05/2025' },
  { id: 'any-blaze', name: 'Any Blaze', volume: '72 GB', rental: '2,990', rentalWithTax: '3,692.65', priorRental: '2,490', badge: 'Discontinued 01/05/2025' },
  { id: 'any-tide', name: 'Any Tide', volume: '100 GB', rental: '3,890', rentalWithTax: '4,804.15', priorRental: '3,390', badge: 'Discontinued 01/05/2025' },
  { id: 'any-spike', name: 'Any Spike', volume: '130 GB', rental: '5,050', rentalWithTax: '6,236.75', priorRental: '4,390', badge: 'Discontinued 01/05/2025' },
  { id: 'any-storm', name: 'Any Storm', volume: '200 GB', rental: '7,490', rentalWithTax: '9,250.15', priorRental: '6,790', badge: 'Discontinued 01/05/2025' },
  { id: 'any-glam', name: 'Any Glam', volume: '350 GB', rental: '12,990', rentalWithTax: '16,042.65', priorRental: '11,790', badge: 'Discontinued 01/05/2025' },
  { id: 'any-delight', name: 'Any Delight', volume: '500 GB', rental: '18,490', rentalWithTax: '22,835.15', priorRental: '16,790', badge: 'Discontinued 01/05/2025' },
  { id: 'any-xtreme', name: 'Any Xtreme', volume: '750 GB', rental: '26,250', rentalWithTax: '32,418.75', priorRental: '25,000', badge: 'Discontinued 01/05/2025' }
];

// Table 6: Unlimited BB Packages (Residential)
const UNLIMITED_RESIDENTIAL_PACKAGES = [
  {
    id: 'unlimited-2',
    name: 'LTE Unlimited 2',
    speed: '2 Mbps Constant',
    rental: '2,950',
    rentalWithTax: '3,643.25',
    priorRental: '2,250',
    dataOffering: 'Unlimited 24/7',
    badge: '2 Mbps Unlimited',
    badgeStyle: 'bg-slate-100 text-slate-800 border-slate-300',
    remarks: 'Uploading speed = Download speed (2 Mbps). Uncapped 24/7 broadband.'
  },
  {
    id: 'unlimited-4',
    name: 'LTE Unlimited 4',
    speed: '4 Mbps Constant',
    rental: '5,150',
    rentalWithTax: '6,360.25',
    priorRental: '3,950',
    dataOffering: 'Unlimited 24/7',
    badge: '4 Mbps Unlimited',
    badgeStyle: 'bg-blue-100 text-blue-800 border-blue-300',
    remarks: 'Continuous 4 Mbps speed. Smooth streaming and multi-user web surfing.'
  },
  {
    id: 'unlimited-8',
    name: 'LTE Unlimited 8',
    speed: '8 Mbps Constant',
    rental: '7,090',
    rentalWithTax: '8,756.15',
    priorRental: '5,450',
    dataOffering: 'Unlimited 24/7',
    badge: '8 Mbps Uncapped',
    badgeStyle: 'bg-purple-100 text-purple-800 border-purple-300',
    remarks: 'High-speed 8 Mbps continuous unlimited broadband. Upload speed equals download speed.'
  },
  {
    id: 'flash-5-res',
    name: 'Unlimited LTE Flash 5',
    speed: 'Normal LTE Speed (Daily First 5GB) -> Throttled to 1 Mbps',
    rental: '2,350',
    rentalWithTax: '2,902.25',
    priorRental: '1,950',
    dataOffering: 'Daily First 5GB @ full LTE speed, then 1 Mbps afterwards',
    midnightThriller: 'FREE UNLIMITED INTERNET at normal speed every day (12 midnight - 7am)',
    badge: 'Flash 5 Daily',
    badgeStyle: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    remarks: 'Add-ons allowed: Entertainment Combo, Youth, Gamer Lite/Prem, Streamer, PeoTV Go, Messenger, YouTube, LMS Lite/Max. Meet Lite & Meet Max are NOT allowed.',
    highlight: true
  },
  {
    id: 'flash-10-res',
    name: 'Unlimited LTE Flash 10',
    speed: 'Normal LTE Speed (Daily First 10GB) -> Throttled to 1 Mbps',
    rental: '4,090',
    rentalWithTax: '5,051.15',
    priorRental: '3,550',
    dataOffering: 'Daily First 10GB @ full LTE speed, then 1 Mbps afterwards',
    midnightThriller: 'FREE UNLIMITED INTERNET at normal speed every day (12 midnight - 7am)',
    badge: 'Flash 10 Daily',
    badgeStyle: 'bg-teal-100 text-teal-800 border-teal-300',
    remarks: 'Add-ons allowed: Entertainment Combo, Youth, Gamer Lite/Prem, Streamer, PeoTV Go, Messenger, YouTube, LMS Lite/Max. Meet Lite & Meet Max are NOT allowed.',
    highlight: true
  }
];

// Table 7: SLT LTE Unlimited Flash Packages (for SME and Micro Business)
const UNLIMITED_SME_PACKAGES = [
  {
    id: 'sme-flash-5',
    name: 'LTE Flash 5 (SME & Micro Business)',
    rental: '2,350',
    rentalWithTax: '2,902.25',
    priorRental: '1,950',
    transferFee: 'Rs. 500/= (from general packages to Unlimited)',
    fup: 'Daily First 5GB at normal LTE speed, afterwards throttling to 1 Mbps for that day',
    meetBundle: 'UNLIMITED internet at normal LTE speed ONLY for MEET bundle (MS Teams, Zoom, WebEx, Google Meet, SLT Lynked, Skype) — This usage is NOT included in daily quota!',
    commitment: '12 Months Commitment Period (Early termination fee: Rs. 5,000/- onetime fixed charge)',
    badge: 'SME Flash 5 + Free Meet',
    badgeStyle: 'bg-indigo-100 text-indigo-900 border-indigo-300'
  },
  {
    id: 'sme-flash-10',
    name: 'LTE Flash 10 (SME & Micro Business)',
    rental: '4,090',
    rentalWithTax: '5,051.15',
    priorRental: '3,550',
    transferFee: 'Rs. 500/= (from general packages to Unlimited)',
    fup: 'Daily First 10GB at normal LTE speed, afterwards throttling to 1 Mbps for that day',
    meetBundle: 'UNLIMITED internet at normal LTE speed ONLY for MEET bundle (MS Teams, Zoom, WebEx, Google Meet, SLT Lynked, Skype) — This usage is NOT included in daily quota!',
    commitment: '12 Months Commitment Period (Early termination fee: Rs. 5,000/- onetime fixed charge)',
    badge: 'SME Flash 10 + Free Meet',
    badgeStyle: 'bg-purple-100 text-purple-900 border-purple-300'
  }
];

// Extra GB reload charges
const EXTRA_GB_CHARGES = [
  { volume: '1 GB', charge: 'Rs. 250/=' },
  { volume: '2 GB', charge: 'Rs. 500/=' },
  { volume: '5 GB', charge: 'Rs. 750/=' },
  { volume: 'More than 5 GB', charge: 'Rs. 150/= per GB' }
];

export default function LteBroadbandPackagesPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'prabath_rules' | 'new_hbb' | 'unlimited' | 'volume_based' | 'legacy_anytime' | 'tech_specs'>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('table');
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
ACCOUNT NO: [011-3XXXXXX / ACCOUNT_NO]
REQUESTED PACKAGE: [e.g. HBB Anytime 115GB @ Rs. 2,590]
CURRENT PACKAGE: [CURRENT_PACKAGE_NAME]
MIGRATION DATE SELECTION: Next Bill Date (Mandatory in CRM to prevent duplicated rentals)
CUSTOMER CONSENT: Obtained for non-reversal of already billed advance rental if executed mid-cycle.
STATIC IP: Eligible ONLY on HBB Anytime 400GB (Rs. 7,990).
TOTAL TAX ON BB: 23.5%
TARGET: BILLING-PROVISIONING / FRONT-OFFICE / CRM-TEAM`;

  const ttSmeFlashMeetOrder = `SERVICE: SLT-Mobitel 4G LTE Fixed Broadband (SME / Micro Business)
PACKAGE: [LTE Flash 5 (Rs. 2,350) / LTE Flash 10 (Rs. 4,090)]
CUSTOMER ELIGIBILITY: [Registered Business - SME Regional / Registered Business - Micro / Individual Micro]
BUSINESS PERK: Unlimited MEET Bundle (MS Teams, Zoom, WebEx, Google Meet, Skype) - Zero quota deduction!
DAILY FUP: First 5GB/10GB at full LTE speed, then 1 Mbps afterwards.
COMMITMENT: 12-Month commitment. Early termination fee: Rs. 5,000/- fixed.
TRANSFER FEE: Rs. 500/= (From general packages). Extra GB NOT permitted.
TARGET: SME-FULFILLMENT / REGIONAL-SALES`;

  // Filtered lists
  const filteredNewHbb = NEW_HBB_ANYTIME_PACKAGES.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.volume.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.rentalWithoutTax.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredVolumeBased = VOLUME_BASED_PACKAGES.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.total.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.rental.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredLegacyAnytime = LEGACY_ANYTIME_PACKAGES.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.volume.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.rental.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f1f5f9] overflow-y-auto select-none text-slate-800">
      
      {/* UNIFIED SHAREPOINT PORTAL HEADER & 9-TOPIC QUICK SWITCHER */}
      <LteSubpageHeader
        currentTopicId="broadband"
        title="LTE BB Packages"
        subtitle="Official SLT-Mobitel Intranet broadband directory for 4G LTE Fixed Wireless: Package Change Rules (PR CC), Detail Bill, New HBB Anytime (April 2025), Volume-Based Day/Night, Anytime BB, and Unlimited Residential & SME Flash."
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
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'all'
                  ? 'bg-[#005696] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All in One (Full SharePoint View)</span>
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
              <span>Package Changes (PR CC)</span>
            </button>

            <button
              onClick={() => setActiveTab('new_hbb')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'new_hbb'
                  ? 'bg-[#005696] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>New HBB Anytime (April 2025)</span>
            </button>

            <button
              onClick={() => setActiveTab('unlimited')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'unlimited'
                  ? 'bg-[#005696] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Unlimited (Residential &amp; SME)</span>
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
              onClick={() => setActiveTab('legacy_anytime')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'legacy_anytime'
                  ? 'bg-[#005696] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>Anytime BB (Till May 2025)</span>
            </button>

            <button
              onClick={() => setActiveTab('tech_specs')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'tech_specs'
                  ? 'bg-[#005696] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Wrench className="w-3.5 h-3.5 text-indigo-600" />
              <span>Detail Bill &amp; Technical</span>
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
                placeholder="Search packages..."
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
                onClick={() => setViewMode('table')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'table' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Table
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'cards' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Cards
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 5. MAIN CONTENT AREA */}
      <div className="flex-1 p-6 md:p-8 space-y-10">
        <div className="max-w-7xl mx-auto space-y-10">

          {/* ========================================================================= */}
          {/* SECTION 1: 4G LTE BROADBAND PACKAGE CHANGES (MR. PRABATH HERATH - PR CC)  */}
          {/* ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'prabath_rules') && (
            <div className="space-y-4">
              
              {/* HIGH-VISIBILITY CALLOUT CARD FOR PACKAGE CHANGES */}
              <div className="bg-blue-50 border-3 border-blue-600 rounded-3xl p-6 shadow-sm space-y-3">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#005696] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <ArrowUpDown className="w-6 h-6" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#005696] text-white">
                        CRITICAL CALL PROCEDURE
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-amber-400 text-amber-950">
                        PREVENT BILL COMPLAINTS
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-slate-900">
                      4G LTE Broadband Package Changes Relevant Information
                    </h3>
                    <p className="text-xs text-slate-600 font-medium">
                      Prepared by <strong>Mr. Prabath Herath - PR CC</strong>. Frontline rules for package change date selection and bill complaint prevention.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs font-semibold text-slate-700">
                  <div className="p-3.5 bg-white rounded-2xl border-2 border-emerald-300 space-y-1">
                    <span className="text-emerald-900 font-black block text-sm flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Bill Complaint: NO (Safe on Same Day)</span>
                    </span>
                    <p className="text-[11px] leading-relaxed">
                      When changing from <strong>Volume-Based / Unlimited to HBB Anytime</strong>, modification date is <strong>On the same day</strong>. No duplicate billing will occur!
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-2xl border-2 border-rose-300 space-y-1">
                    <span className="text-rose-950 font-black block text-sm flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4 text-rose-600" />
                      <span>Bill Complaint: YES (MANDATORY NEXT BILL DATE)</span>
                    </span>
                    <p className="text-[11px] leading-relaxed">
                      When changing <strong>Within HBB Anytime or from HBB Anytime to another plan</strong>, you <span className="text-rose-700 font-black underline">MUST SELECT NEXT BILL DATE</span>. Selecting same day causes duplicated bills!
                    </p>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-900 text-white font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-3.5">Current Package Type</th>
                        <th className="p-3.5">Requesting Package Type</th>
                        <th className="p-3.5">Package Changing Date</th>
                        <th className="p-3.5">Modification Type</th>
                        <th className="p-3.5">Package Change Fee</th>
                        <th className="p-3.5">Bill Complaint Risk</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {PRABATH_HERATH_PACKAGE_CHANGE_RULES.map((rule, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900">{rule.current}</td>
                          <td className="p-3.5 text-slate-700 font-semibold">{rule.requesting}</td>
                          <td className="p-3.5 font-mono font-black text-blue-900 bg-blue-50/40">{rule.date}</td>
                          <td className="p-3.5">
                            <span className={`px-2 py-0.5 rounded-md font-semibold text-[11px] ${
                              rule.modType.includes('Higher to Lower') ? 'bg-amber-100 text-amber-900' : 'bg-emerald-50 text-emerald-800'
                            }`}>
                              {rule.modType}
                            </span>
                          </td>
                          <td className={`p-3.5 ${rule.feeColor}`}>{rule.fee}</td>
                          <td className="p-3.5">
                            <span className={`px-2.5 py-1 rounded-lg text-xs font-black inline-block ${
                              rule.billComplaint === 'Yes' ? 'bg-rose-100 text-rose-800 border border-rose-300' : 'bg-emerald-100 text-emerald-800'
                            }`}>
                              {rule.billComplaint === 'Yes' ? '⚠️ High Risk (Use Next Bill Date)' : '✅ Safe (Same Day)'}
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
          {/* SECTION 2: BROADBAND DETAIL BILL CHARGES                                   */}
          {/* ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'tech_specs') && (
            <div className="bg-white rounded-3xl border-2 border-indigo-200 p-6 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-indigo-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-indigo-700" />
                  <div>
                    <h3 className="font-black text-lg text-slate-900">Broadband Detail Bill Charges</h3>
                    <p className="text-xs text-slate-500">Official tariffs for providing itemized broadband billing statements.</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-900 rounded-xl text-xs font-bold border border-indigo-200 w-fit">
                  Invoice Service
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DETAIL_BILL_CHARGES.map((b, i) => (
                  <div key={i} className="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">{b.duration}</span>
                      <span className="text-[11px] text-indigo-700 font-bold">{b.note}</span>
                    </div>
                    <span className="text-2xl font-black text-indigo-950 font-mono">{b.charge}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SECTION 3: NEW LTE POSTPAID HOME BROADBAND ANYTIME PACKAGES (FROM APRIL)   */}
          {/* ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'new_hbb') && (
            <div className="space-y-6">

              {/* CRITICAL CALLOUT: ADVANCE BILLING TRANSFER RULES */}
              <div className="bg-red-50 border-4 border-red-500 rounded-3xl p-6 shadow-md space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <ShieldAlert className="w-7 h-7" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-red-600 text-white">
                        🚨 MANDATORY ADVANCE BILLING TRANSFER RULES
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-amber-400 text-amber-950">
                        CRITICAL CALL INSTRUCTION
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-red-950">
                      Business Rules for Package Transfers Related to Advanced Billing
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  
                  {/* Step 1 */}
                  <div className="bg-white p-4 rounded-2xl border-2 border-red-200 shadow-2xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs font-black flex items-center justify-center">1</span>
                      <span className="font-black text-sm text-slate-900">MANDATORY DATE SELECTION</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                      When transferring packages within HBB Anytime or from HBB Anytime to another plan, you <span className="text-red-700 font-black underline">MUST SELECT THE NEXT BILL DATE</span> in CRM.
                    </p>
                    <div className="p-2 bg-red-100/70 rounded-lg text-[11px] text-red-900 font-bold">
                      ⚠️ Never select "Same Day" unless customer explicitly agrees to lose already paid advance rental!
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-white p-4 rounded-2xl border-2 border-red-200 shadow-2xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs font-black flex items-center justify-center">2</span>
                      <span className="font-black text-sm text-slate-900">NO REFUND / NO REVERSAL</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                      The already billed rental for the following month under in-advance billing <span className="text-red-700 font-black underline">CANNOT BE REVERSED OR REFUNDED</span> under any circumstances!
                    </p>
                    <div className="p-2 bg-amber-100/70 rounded-lg text-[11px] text-amber-950 font-bold">
                      🗣️ Tell CX: "Already billed advance rental portion will not be refunded if changed mid-cycle."
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-white p-4 rounded-2xl border-2 border-red-200 shadow-2xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs font-black flex items-center justify-center">3</span>
                      <span className="font-black text-sm text-slate-900">STATIC IP ELIGIBILITY</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                      Static IP will be given <span className="text-red-700 font-black underline">ONLY TO HBB ANYTIME 400GB (Rs. 7,990)</span>.
                    </p>
                    <div className="p-2 bg-slate-100 rounded-lg text-[11px] text-slate-800 font-bold">
                      ❌ Do NOT promise Static IP for 50GB, 85GB, 115GB, or 200GB plans!
                    </div>
                  </div>

                </div>

                <div className="p-3 bg-red-100/60 rounded-xl text-xs text-red-950 font-semibold flex items-center gap-2">
                  <Info className="w-4 h-4 text-red-700 shrink-0" />
                  <span>Available for: <strong>New Connection, Package Upgrade/Downgrade, Reconnections, and Copper to LTE Migrations</strong>.</span>
                </div>
              </div>

              {/* View Toggle Mode: Table or Cards */}
              {viewMode === 'table' ? (
                <div className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-xs">
                  <div className="p-4 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
                    <div>
                      <h4 className="font-black text-base text-slate-900">New LTE Postpaid Home Broadband Anytime Packages</h4>
                      <span className="text-xs text-emerald-700 font-bold">Will be available from 3rd April 2025 | Total tax amount on BB = 23.5%</span>
                    </div>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-900 rounded-xl text-xs font-black border border-emerald-300">
                      Active Series
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-900 text-white font-bold">
                        <tr>
                          <th className="p-3.5">Package Name</th>
                          <th className="p-3.5 text-emerald-300">Rental With Tax (23.5%)<br/><span className="text-[10px] text-emerald-400 font-normal">Customer Charge</span></th>
                          <th className="p-3.5">Rental (Without Tax)<br/><span className="text-[10px] text-slate-400 font-normal">Base Tariff</span></th>
                          <th className="p-3.5">Anytime Data (GB)</th>
                          <th className="p-3.5">Midnight Thriller</th>
                          <th className="p-3.5">Billing Mode</th>
                          <th className="p-3.5">Static IP</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium">
                        {filteredNewHbb.map((pkg) => (
                          <tr key={pkg.id} className="hover:bg-slate-50 transition-colors">
                            <td className="p-3.5 font-bold text-slate-900">
                              <span className="block text-sm font-black">{pkg.name}</span>
                              <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border inline-block mt-1 ${pkg.badgeStyle}`}>
                                {pkg.badge}
                              </span>
                            </td>
                            <td className="p-3.5 font-mono font-black text-emerald-800 bg-emerald-50/70 text-base">Rs. {pkg.rentalWithTax}</td>
                            <td className="p-3.5 font-mono font-bold text-slate-700 text-sm">Rs. {pkg.rentalWithoutTax}</td>
                            <td className="p-3.5 font-black text-slate-900 text-base">{pkg.volume}</td>
                            <td className="p-3.5 text-purple-700 font-bold">Yes (Midnight to 7am Free Unlimited)</td>
                            <td className="p-3.5 font-bold text-blue-900">{pkg.billingMode}</td>
                            <td className="p-3.5">
                              <span className={`px-2 py-0.5 rounded-md text-[10px] font-black ${
                                pkg.staticIpEligible ? 'bg-amber-100 text-amber-950 border border-amber-300' : 'text-slate-400'
                              }`}>
                                {pkg.staticIpEligible ? '✅ Supported' : '❌ No'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
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

                        <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                          <div className="flex items-baseline justify-between">
                            <span className="text-[9px] font-bold text-slate-400 uppercase">Anytime Quota</span>
                            <span className="text-2xl font-black text-slate-900">{pkg.volume}</span>
                          </div>
                          
                          <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-300">
                            <span className="text-[9px] font-black text-emerald-900 uppercase block">
                              Rental With Tax (23.5%)
                            </span>
                            <span className="text-2xl font-black text-emerald-700">Rs. {pkg.rentalWithTax}</span>
                          </div>

                          <div className="flex items-center justify-between text-xs text-slate-600 font-semibold pt-1">
                            <span>Without Tax (Base):</span>
                            <span className="font-mono font-bold text-slate-900">Rs. {pkg.rentalWithoutTax}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100 mt-3 space-y-2 text-[11px]">
                        <div className="flex items-center gap-1.5 text-purple-800 font-bold bg-purple-50 p-2 rounded-xl border border-purple-200">
                          <Moon className="w-3.5 h-3.5 shrink-0 text-purple-600" />
                          <span>12am - 7am Free Unlimited</span>
                        </div>
                        
                        <div className={`p-2 rounded-xl font-bold text-center text-[10px] border ${
                          pkg.staticIpEligible
                            ? 'bg-amber-100 text-amber-950 border-amber-300 font-black'
                            : 'bg-slate-100 text-slate-500 border-slate-200'
                        }`}>
                          {pkg.staticIpEligible ? '🌟 STATIC IP AVAILABLE' : '❌ NO STATIC IP'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}

          {/* ========================================================================= */}
          {/* SECTION 4: UNLIMITED BB PACKAGES (RESIDENTIAL & SME FLASH)                */}
          {/* ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'unlimited') && (
            <div className="space-y-6">

              {/* CRITICAL CALLOUT: UNLIMITED POLICIES & ADD-ON RESTRICTIONS */}
              <div className="bg-emerald-50 border-4 border-emerald-400 rounded-3xl p-6 shadow-md space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Zap className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-700 text-white inline-block">
                      🚨 CX CALL VERIFICATION: ADD-ON RESTRICTIONS &amp; TRANSFER FEES
                    </span>
                    <h3 className="text-xl font-black text-slate-900">
                      Operating Rules for Residential Unlimited &amp; SME Flash Packages
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs font-semibold text-slate-700">
                  
                  {/* Warning 1 */}
                  <div className="bg-white p-4 rounded-2xl border-2 border-emerald-200 space-y-2 shadow-2xs">
                    <span className="text-rose-950 font-black text-sm block">🚫 RESIDENTIAL FLASH: MEET BUNDLE BLOCKED</span>
                    <p className="text-[11px] leading-relaxed">
                      <strong>Meet Lite &amp; Meet Max are STRICTLY BLOCKED</strong> on Residential Flash 5 and Flash 10!
                    </p>
                    <div className="p-2 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-950 text-[11px] font-bold">
                      ✅ Allowed on Res Flash: YouTube, Messenger, PeoTV Go, Entertainment Combo, Youth, Gamer, LMS Lite/Max.
                    </div>
                  </div>

                  {/* Warning 2 */}
                  <div className="bg-white p-4 rounded-2xl border-2 border-emerald-200 space-y-2 shadow-2xs">
                    <span className="text-purple-950 font-black text-sm block">🌟 SME FLASH: 100% UNLIMITED MEET BUNDLE</span>
                    <p className="text-[11px] leading-relaxed">
                      On <strong>SME Flash 5/10</strong>, MS Teams, Zoom, WebEx, Google Meet, Skype &amp; Lynked are <strong>100% UNLIMITED</strong> at normal speed and <strong>NOT deducted from daily quota</strong>!
                    </p>
                    <div className="p-2 bg-purple-100 rounded-xl text-purple-950 text-[11px] font-black">
                      🏢 Available ONLY for Registered SME, Micro Business, or Individual Micro.
                    </div>
                  </div>

                  {/* Warning 3 */}
                  <div className="bg-white p-4 rounded-2xl border-2 border-emerald-200 space-y-2 shadow-2xs">
                    <span className="text-blue-950 font-black text-sm block">💰 PACKAGE TRANSFER FEES (TELL CX)</span>
                    <div className="p-2 bg-slate-50 border border-slate-200 rounded-xl space-y-1 font-mono text-[11px] text-slate-800">
                      <p>• General/Anytime to Unlimited: <span className="text-rose-700 font-black">Rs. 500/=</span></p>
                      <p>• Unlimited Lower to Higher: <span className="text-emerald-700 font-black">FREE (Rs. 0)</span></p>
                      <p>• Unlimited Higher to Lower: <span className="text-rose-700 font-black">Rs. 250/=</span></p>
                      <p>• Unlimited to Normal Higher: <span className="text-emerald-700 font-black">No charge</span></p>
                    </div>
                  </div>

                </div>
              </div>

              {/* 1. Unlimited Residential Table */}
              <div className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-xs space-y-3 p-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h4 className="font-black text-base text-slate-900">LTE Unlimited Packages (Residential)</h4>
                    <span className="text-xs text-slate-500 font-medium">New rentals effective from 5th September 2022 | Total tax amount on BB = 23.5%</span>
                  </div>
                  <span className="px-3 py-1 bg-blue-50 text-blue-900 rounded-xl text-xs font-black border border-blue-200">
                    Residential Plans
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-900 text-white font-bold">
                      <tr>
                        <th className="p-3">Package Name</th>
                        <th className="p-3">Bandwidth / Speed</th>
                        <th className="p-3 text-emerald-300">Monthly With Tax (23.5%)<br/><span className="text-[10px] text-emerald-400 font-normal">Customer Pays</span></th>
                        <th className="p-3">Without Tax (Rs)<br/><span className="text-[10px] text-slate-400 font-normal">Base Rental</span></th>
                        <th className="p-3">Data Offering / FUP</th>
                        <th className="p-3">Remarks &amp; Add-on Eligibility</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {UNLIMITED_RESIDENTIAL_PACKAGES.map((pkg) => (
                        <tr key={pkg.id} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3 font-bold text-slate-900">
                            <span className="block text-sm font-black">{pkg.name}</span>
                            <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border inline-block mt-0.5 ${pkg.badgeStyle}`}>
                              {pkg.badge}
                            </span>
                          </td>
                          <td className="p-3 font-mono font-bold text-slate-700">{pkg.speed}</td>
                          <td className="p-3 font-mono font-black text-emerald-800 bg-emerald-50/70 text-base">
                            Rs. {pkg.rentalWithTax}
                          </td>
                          <td className="p-3 font-mono font-bold text-slate-700 text-sm">
                            Rs. {pkg.rental} <span className="text-[10px] text-slate-400 font-normal line-through block">(was Rs. {pkg.priorRental})</span>
                          </td>
                          <td className="p-3 font-semibold text-slate-800">
                            {pkg.dataOffering}
                            {pkg.midnightThriller && (
                              <span className="block text-[11px] text-purple-700 font-bold mt-0.5">🌙 {pkg.midnightThriller}</span>
                            )}
                          </td>
                          <td className="p-3 text-[11px] text-slate-600 leading-relaxed max-w-md">
                            {pkg.remarks}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2. SME & Micro Business Flash Table */}
              <div className="bg-white rounded-3xl border-2 border-purple-200 overflow-hidden shadow-xs space-y-3 p-5">
                <div className="flex items-center justify-between border-b border-purple-100 pb-3">
                  <div>
                    <h4 className="font-black text-base text-purple-950">SLT LTE Unlimited Flash Packages (for SME and Micro Business)</h4>
                    <span className="text-xs text-purple-700 font-semibold">12-Month Commitment (Rs. 5,000 Early Termination Fee) | Total tax amount on BB = 23.5%</span>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-950 rounded-xl text-xs font-black border border-purple-300">
                    SME / Micro Only
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-900 text-white font-bold">
                      <tr>
                        <th className="p-3">Package Name</th>
                        <th className="p-3 text-emerald-300">Monthly With Tax (23.5%)<br/><span className="text-[10px] text-emerald-400 font-normal">Customer Pays</span></th>
                        <th className="p-3">Without Tax (Base)</th>
                        <th className="p-3">Transfer Fee</th>
                        <th className="p-3">Daily FUP &amp; Throttling</th>
                        <th className="p-3 text-emerald-400">MEET Bundle (Zero Quota Deduction)</th>
                        <th className="p-3">Commitment &amp; Conditions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {UNLIMITED_SME_PACKAGES.map((pkg) => (
                        <tr key={pkg.id} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3 font-bold text-slate-900">
                            <span className="block text-sm font-black">{pkg.name}</span>
                            <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border inline-block mt-0.5 ${pkg.badgeStyle}`}>
                              {pkg.badge}
                            </span>
                          </td>
                          <td className="p-3 font-mono font-black text-emerald-800 bg-emerald-50/70 text-base">
                            Rs. {pkg.rentalWithTax}
                          </td>
                          <td className="p-3 font-mono font-bold text-slate-700 text-sm">
                            Rs. {pkg.rental} <span className="text-[10px] text-slate-400 font-normal line-through block">(was Rs. {pkg.priorRental})</span>
                          </td>
                          <td className="p-3 font-mono text-slate-700">{pkg.transferFee}</td>
                          <td className="p-3 text-slate-800 font-semibold">{pkg.fup}</td>
                          <td className="p-3 text-[11px] text-emerald-900 font-bold bg-emerald-50/50 max-w-md">
                            {pkg.meetBundle}
                          </td>
                          <td className="p-3 text-[11px] text-slate-600 space-y-1">
                            <div>• {pkg.commitment}</div>
                            <div className="text-rose-700 font-bold">• No Extra GB | No Static IP | No sltgo/loyalty data</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-3 bg-purple-50 rounded-2xl border border-purple-100 text-xs text-purple-900 font-semibold">
                  💡 <strong>Activation Day Behavior:</strong> Customer will receive 1 Mbps Unlimited Data on the same day of activation and enjoy full package features from next day onwards.
                </div>
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* SECTION 5: VOLUME-BASED DAY/NIGHT PACKAGES (DISCONTINUED FEB 2025)        */}
          {/* ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'volume_based') && (
            <div className="space-y-4">

              {/* CALLOUT CARD */}
              <div className="bg-orange-50 border-4 border-orange-400 rounded-3xl p-6 shadow-md space-y-3">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Sun className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-orange-600 text-white inline-block">
                      🚨 CX CALL SCRIPT: 64 KBPS SPEED THROTTLING &amp; EXTRA GB
                    </span>
                    <h3 className="text-xl font-black text-slate-900">
                      LTE Volume Based BB Packages (Discontinued from 15th February 2025)
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs font-semibold text-slate-700">
                  <div className="p-3.5 bg-white rounded-2xl border-2 border-orange-200 space-y-1">
                    <span className="text-rose-700 font-black text-sm block">⚠️ 64 KBPS THROTTLING PENALTY</span>
                    <p className="text-[11px] leading-relaxed">
                      When Total GB is over, speed throttles to <strong>64 kbps</strong>. If standard peak data is over but free time remains, they can access normal speed during night hours.
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-2xl border-2 border-orange-200 space-y-1">
                    <span className="text-blue-700 font-black text-sm block">💳 EXTRA GB RELOAD CHARGES</span>
                    <div className="space-y-0.5 text-[11px] font-mono">
                      <p>• 1 GB: Rs. 250/= | 2 GB: Rs. 500/=</p>
                      <p>• 5 GB: Rs. 750/= | &gt;5 GB: Rs. 150/= per GB</p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white rounded-2xl border-2 border-orange-200 space-y-1">
                    <span className="text-emerald-700 font-black text-sm block">🗣️ UPSELL RECOMMENDATION</span>
                    <p className="text-[11px] leading-relaxed">
                      Upsell customer to <strong>New HBB Anytime 50GB (Rs. 1,290)</strong> or <strong>LTE Flash 5 (Rs. 2,350)</strong> where speed never drops below 1 Mbps!
                    </p>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-900 text-white font-bold">
                      <tr>
                        <th className="p-3">Package Name</th>
                        <th className="p-3">Standard (8am-12am)</th>
                        <th className="p-3">Off-peak (7am-8am)</th>
                        <th className="p-3">Total Volume</th>
                        <th className="p-3 text-emerald-300">Monthly With Tax (23.5%)<br/><span className="text-[10px] text-emerald-400 font-normal">Customer Pays</span></th>
                        <th className="p-3">Without Tax (Rs)<br/><span className="text-[10px] text-slate-400 font-normal">eff. 05/09/2022</span></th>
                        <th className="p-3">Prior Without Tax</th>
                        <th className="p-3">Midnight Thriller</th>
                        <th className="p-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {filteredVolumeBased.map((pkg) => (
                        <tr key={pkg.id} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3 font-bold text-slate-900">{pkg.name}</td>
                          <td className="p-3 text-amber-800 font-bold">{pkg.peak}</td>
                          <td className="p-3 text-indigo-800 font-bold">{pkg.offPeak}</td>
                          <td className="p-3 font-black text-slate-900 text-sm">{pkg.total} <span className="text-[10px] text-slate-400 line-through">({pkg.priorTotal})</span></td>
                          <td className="p-3 font-mono font-black text-emerald-800 bg-emerald-50/70 text-base">Rs. {pkg.rentalWithTax}</td>
                          <td className="p-3 font-mono font-bold text-slate-700 text-sm">Rs. {pkg.rental}</td>
                          <td className="p-3 font-mono text-slate-400 line-through">Rs. {pkg.priorRental}</td>
                          <td className="p-3 text-purple-700 font-bold">FREE 12am-7am</td>
                          <td className="p-3">
                            <span className="text-[10px] font-black bg-rose-100 text-rose-800 px-2 py-0.5 rounded-md border border-rose-300">
                              Discontinued 15/02/2025
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
          {/* SECTION 6: ANYTIME BB PACKAGES (DISCONTINUED FROM 1ST MAY 2025)           */}
          {/* ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'legacy_anytime') && (
            <div className="space-y-4">

              {/* CALLOUT CARD */}
              <div className="bg-amber-50 border-4 border-amber-400 rounded-3xl p-6 shadow-md space-y-3">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-600 text-white inline-block">
                      🚨 CALL ADVISORY: DISCONTINUED FROM 1ST MAY 2025
                    </span>
                    <h3 className="text-xl font-black text-slate-900">
                      Handling Inquiries for Old Anytime Series (Any Joy to Any Xtreme)
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs font-semibold text-slate-700">
                  <div className="p-4 bg-white rounded-2xl border-2 border-amber-200 space-y-1">
                    <span className="text-amber-950 font-black block text-sm">🗣️ What to Tell Existing Customers:</span>
                    <p>• "Existing packages continue normally with <strong>FREE UNLIMITED INTERNET every day from 12 midnight - 7am</strong>."</p>
                    <p>• "For package upgrades, we recommend our <strong>New HBB Anytime series</strong> offering more data at lower rates."</p>
                  </div>

                  <div className="p-4 bg-white rounded-2xl border-2 border-amber-200 space-y-1">
                    <span className="text-rose-950 font-black block text-sm">❌ Rules for New Customers:</span>
                    <p>• These packages are <span className="text-rose-700 font-bold">NOT available for New Connections, Package Changes, Reconnections, Migrations or Relocations</span> after 1st May 2025.</p>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-900 text-white font-bold">
                      <tr>
                        <th className="p-3.5">Package Name</th>
                        <th className="p-3.5">Total Volume (GB)</th>
                        <th className="p-3.5 text-emerald-300">Monthly With Tax (23.5%)<br/><span className="text-[10px] text-emerald-400 font-normal">Customer Pays</span></th>
                        <th className="p-3.5">Without Tax (Rs.)<br/><span className="text-[10px] text-slate-400 font-normal">eff. 05/09/2022</span></th>
                        <th className="p-3.5">Prior Without Tax</th>
                        <th className="p-3.5">Midnight Thriller</th>
                        <th className="p-3.5">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {filteredLegacyAnytime.map((pkg) => (
                        <tr key={pkg.id} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900">{pkg.name}</td>
                          <td className="p-3.5 font-black text-slate-900 text-base">{pkg.volume}</td>
                          <td className="p-3.5 font-mono font-black text-emerald-800 bg-emerald-50/70 text-base">Rs. {pkg.rentalWithTax}</td>
                          <td className="p-3.5 font-mono font-bold text-slate-700 text-sm">Rs. {pkg.rental}</td>
                          <td className="p-3.5 font-mono text-slate-400 line-through">Rs. {pkg.priorRental}</td>
                          <td className="p-3.5 text-purple-700 font-bold">FREE 12am - 7am</td>
                          <td className="p-3.5">
                            <span className="text-[10px] font-black bg-rose-100 text-rose-800 px-2 py-0.5 rounded-md border border-rose-300">
                              Discontinued 01/05/2025
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
          {/* SECTION 7: TECHNICAL OPERATIONAL DETAILS                                  */}
          {/* ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'tech_specs') && (
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-4 text-xs">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <Wrench className="w-5 h-5 text-[#005696]" />
                <h3 className="font-black text-lg text-slate-900">
                  LTE Broadband Technical &amp; Operational Standards
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-700 font-medium">
                
                {/* 1. Credentials */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <span className="font-black text-slate-900 text-sm block">LTE BB Username Format:</span>
                  <p>In the format of international numbers:</p>
                  <code className="px-2 py-1 bg-white border border-slate-200 rounded font-mono font-bold text-blue-900 block">
                    94113XXXXXX / 94YZ3XXXXXX
                  </code>
                  <p className="text-[11px] text-slate-500">
                    No password is required for LTE access. The password provided by SLT is used ONLY for registration to the ISP VAS portal.
                  </p>
                </div>

                {/* 2. Wi-Fi Hotspots & Static IP */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <span className="font-black text-slate-900 text-sm block">Wi-Fi Hotspots &amp; Static IP:</span>
                  <p>Connecting via SLT Wi-Fi Hotspots:</p>
                  <code className="px-2 py-1 bg-white border border-slate-200 rounded font-mono font-bold text-slate-800 block text-[11px]">
                    User: 941136XXXXX | Pass: BB Password
                  </code>
                  <p className="text-[11px] text-slate-500">
                    LTE customers can obtain Static IPs by requesting through RTOM. Static IP will NOT be provided for Unlimited Flash plans.
                  </p>
                </div>

                {/* 3. Volume Cycles */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <span className="font-black text-slate-900 text-sm block">LTE BB Volume Cycles:</span>
                  <div className="space-y-1 text-[11px]">
                    <p>• <strong>Registered BEFORE 30th Jan 2018:</strong> 1st to end of the month.</p>
                    <p>• <strong>Registered AFTER 30th Jan 2018:</strong> 16th to 15th of the next month.</p>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Speed: Download average 8Mbps | Upload average 1Mbps. Throttles to 64kbps after volume exhaustion.
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SECTION 8: C-LOG & CRM ORDER TEMPLATES                                    */}
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
