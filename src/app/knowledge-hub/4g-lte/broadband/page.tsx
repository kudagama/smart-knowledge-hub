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
  Clock
} from 'lucide-react';

// =========================================================================
// 1. DATA DEFINITIONS FROM OFFICIAL SHAREPOINT DOCUMENT
// =========================================================================

// Section A: Any-Time GB Packages (LTE) - 10 Packages
const ANYTIME_GB_PACKAGES = [
  {
    id: 'any-joy',
    name: 'Any Joy',
    volume: '22 GB',
    volumeNum: 22,
    rental: '1,150',
    oldRental: '1,050',
    badge: 'Starter Anytime',
    badgeStyle: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    desc: 'Pure anytime 22GB without day/night quota restrictions. Best for light daily use and social browsing.',
    highlight: false
  },
  {
    id: 'any-beat',
    name: 'Any Beat',
    volume: '36 GB',
    volumeNum: 36,
    rental: '1,550',
    oldRental: '1,450',
    badge: 'Popular Everyday',
    badgeStyle: 'bg-blue-100 text-blue-800 border-blue-300',
    desc: 'Balanced 36GB anytime quota for everyday online classes, banking, and casual video streaming.',
    highlight: true
  },
  {
    id: 'any-fit',
    name: 'Any Fit',
    volume: '50 GB',
    volumeNum: 50,
    rental: '2,150',
    oldRental: '1,950',
    badge: 'Family Standard',
    badgeStyle: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    desc: '50GB high-speed anytime data for multi-user household browsing and work from home.',
    highlight: false
  },
  {
    id: 'any-wave',
    name: 'Any Wave',
    volume: '70 GB',
    volumeNum: 70,
    rental: '2,950',
    oldRental: '2,750',
    badge: 'Entertainment',
    badgeStyle: 'bg-purple-100 text-purple-800 border-purple-300',
    desc: '70GB generous anytime allowance suited for HD streaming and intensive remote working.',
    highlight: false
  },
  {
    id: 'any-flow',
    name: 'Any Flow',
    volume: '100 GB',
    volumeNum: 100,
    rental: '4,190',
    oldRental: '3,850',
    badge: 'Century Tier (100GB)',
    badgeStyle: 'bg-cyan-100 text-cyan-800 border-cyan-300',
    desc: '100GB pure unthrottled anytime volume for heavy downloads and active digital creators.',
    highlight: true
  },
  {
    id: 'any-pulse',
    name: 'Any Pulse',
    volume: '135 GB',
    volumeNum: 135,
    rental: '5,490',
    oldRental: '5,150',
    badge: 'Power User',
    badgeStyle: 'bg-teal-100 text-teal-800 border-teal-300',
    desc: '135GB high capacity for smart households and small office remote workstations.',
    highlight: false
  },
  {
    id: 'any-sprint',
    name: 'Any Sprint',
    volume: '175 GB',
    volumeNum: 175,
    rental: '7,190',
    oldRental: '6,750',
    badge: 'Pro Workstation',
    badgeStyle: 'bg-amber-100 text-amber-800 border-amber-300',
    desc: '175GB anytime quota designed for multi-gigabyte cloud sync, gaming, and 4K media.',
    highlight: false
  },
  {
    id: 'any-pace',
    name: 'Any Pace',
    volume: '215 GB',
    volumeNum: 215,
    rental: '8,890',
    oldRental: '8,350',
    badge: 'Executive Plan',
    badgeStyle: 'bg-orange-100 text-orange-800 border-orange-300',
    desc: '215GB for heavy enterprise operations, surveillance video backup, and continuous connectivity.',
    highlight: false
  },
  {
    id: 'any-flight',
    name: 'Any Flight',
    volume: '260 GB',
    volumeNum: 260,
    rental: '10,790',
    oldRental: '10,150',
    badge: 'Ultra Capacity',
    badgeStyle: 'bg-rose-100 text-rose-800 border-rose-300',
    desc: '260GB anytime data for SME branch offices and data-intensive media production.',
    highlight: false
  },
  {
    id: 'any-bounce',
    name: 'Any Bounce',
    volume: '310 GB',
    volumeNum: 310,
    rental: '12,790',
    oldRental: '12,050',
    badge: 'Maximum Any-Time Tier',
    badgeStyle: 'bg-violet-100 text-violet-800 border-violet-300',
    desc: '310GB maximum anytime monthly quota. Complete freedom from time-band splits.',
    highlight: false
  }
];

// Section B: New LTE Postpaid Home Broadband Anytime Packages (Advance Billing)
const HBB_ANYTIME_POSTPAID = [
  {
    id: 'hbb-anytime-35',
    name: 'HBB Anytime 35GB',
    crmName: 'HBB Anytime 35GB',
    volume: '35 GB',
    rentalWithoutTax: '1,150',
    academicExtra: 'Included',
    bonusEligible: 'Yes (via MySLT & eServices)',
    billingMode: 'Advanced Billing',
    badge: 'Entry Anytime',
    badgeStyle: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    desc: 'Official post-April 2024 advance billed anytime tier. No day/night split, 35GB pure anytime data.'
  },
  {
    id: 'hbb-anytime-65',
    name: 'HBB Anytime 65GB',
    crmName: 'HBB Anytime 65GB',
    volume: '65 GB',
    rentalWithoutTax: '2,150',
    academicExtra: 'Included',
    bonusEligible: 'Yes (via MySLT & eServices)',
    billingMode: 'Advanced Billing',
    badge: 'Popular Household',
    badgeStyle: 'bg-blue-100 text-blue-800 border-blue-300',
    desc: '65GB anytime data with advance billing. Ideal replacement for older Web Master packages.'
  },
  {
    id: 'hbb-anytime-105',
    name: 'HBB Anytime 105GB',
    crmName: 'HBB Anytime 105GB',
    volume: '105 GB',
    rentalWithoutTax: '3,290',
    academicExtra: 'Included',
    bonusEligible: 'Yes (via MySLT & eServices)',
    billingMode: 'Advanced Billing',
    badge: 'Century Value',
    badgeStyle: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    desc: '105GB anytime data. High value tier for families streaming on smart TVs.'
  },
  {
    id: 'hbb-anytime-150',
    name: 'HBB Anytime 150GB',
    crmName: 'HBB Anytime 150GB',
    volume: '150 GB',
    rentalWithoutTax: '4,690',
    academicExtra: 'Included',
    bonusEligible: 'Yes (via MySLT & eServices)',
    billingMode: 'Advanced Billing',
    badge: 'Power Workstation',
    badgeStyle: 'bg-purple-100 text-purple-800 border-purple-300',
    desc: '150GB anytime quota for tech professionals, home studios, and multiple concurrent users.'
  },
  {
    id: 'hbb-anytime-225',
    name: 'HBB Anytime 225GB',
    crmName: 'HBB Anytime 225GB',
    volume: '225 GB',
    rentalWithoutTax: '6,890',
    academicExtra: 'Included',
    bonusEligible: 'Yes (via MySLT & eServices)',
    billingMode: 'Advanced Billing',
    badge: 'Maximum Anytime Tier',
    badgeStyle: 'bg-amber-100 text-amber-800 border-amber-300',
    desc: '225GB anytime quota with advance billing. Heavy volume without time restrictions.'
  }
];

// Section C: General Broadband Packages (Day/Night Split - 12 Packages)
const GENERAL_BB_PACKAGES = [
  { id: 'web-starter', tier: 'Web Starter', total: '9 GB', day: '4 GB', night: '5 GB', rental: '490', badge: 'Base Plan', badgeStyle: 'bg-slate-100 text-slate-800 border-slate-300' },
  { id: 'web-pal', tier: 'Web Pal', total: '15 GB', day: '7 GB', night: '8 GB', rental: '690', badge: 'Casual Tier', badgeStyle: 'bg-slate-100 text-slate-800 border-slate-300' },
  { id: 'web-lite', tier: 'Web Family Plus / Lite', total: '28 GB', day: '13 GB', night: '15 GB', rental: '990', badge: 'Lite Tier', badgeStyle: 'bg-blue-50 text-blue-800 border-blue-200' },
  { id: 'web-booster', tier: 'Web Booster', total: '45 GB', day: '20 GB', night: '25 GB', rental: '1,490', badge: 'Booster', badgeStyle: 'bg-cyan-50 text-cyan-800 border-cyan-200' },
  { id: 'web-active', tier: 'Web Family Active', total: '55 GB', day: '25 GB', night: '30 GB', rental: '1,890', badge: 'Family Active', badgeStyle: 'bg-teal-50 text-teal-800 border-teal-200' },
  { id: 'web-monster', tier: 'Web Monster', total: '65 GB', day: '30 GB', night: '35 GB', rental: '2,190', badge: 'Monster Tier', badgeStyle: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
  { id: 'web-master', tier: 'Web Master', total: '90 GB', day: '40 GB', night: '50 GB', rental: '2,690', badge: 'Most Popular', badgeStyle: 'bg-emerald-100 text-emerald-900 border-emerald-300', highlight: true },
  { id: 'web-champ', tier: 'Web Champ', total: '125 GB', day: '55 GB', night: '70 GB', rental: '3,790', badge: 'Champ Tier', badgeStyle: 'bg-indigo-100 text-indigo-900 border-indigo-300' },
  { id: 'web-life', tier: 'Web Life', total: '190 GB', day: '85 GB', night: '105 GB', rental: '5,690', badge: 'Power User', badgeStyle: 'bg-purple-100 text-purple-900 border-purple-300' },
  { id: 'web-supreme', tier: 'Web Supreme', total: '275 GB', day: '125 GB', night: '150 GB', rental: '8,390', badge: 'Ultra Volume', badgeStyle: 'bg-amber-100 text-amber-900 border-amber-300' },
  { id: 'web-inspire', tier: 'Web Inspire', total: '470 GB', day: '210 GB', night: '260 GB', rental: '13,890', badge: 'Inspire Heavy', badgeStyle: 'bg-rose-100 text-rose-900 border-rose-300' },
  { id: 'web-premier', tier: 'Web Premier', total: '680 GB', day: '300 GB', night: '380 GB', rental: '19,890', badge: 'Premier Enterprise', badgeStyle: 'bg-violet-100 text-violet-900 border-violet-300' }
];

// Section D: Unlimited HBB Packages (LTE)
const UNLIMITED_HBB_PACKAGES = [
  {
    id: 'flash-5',
    name: 'LTE FLASH 5',
    maxSpeed: 'Up to 5 Mbps (Full Speed)',
    dailyQuota: '5 GB Daily @ Full Speed',
    afterQuotaSpeed: 'Unlimited @ 1 Mbps afterwards',
    rental: '2,350',
    oldRental: '2,150',
    fupReset: 'Daily Reset @ 00:00 hrs',
    badge: 'Flash 5 Daily',
    badgeStyle: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    desc: '5GB daily high speed quota. Once 5GB is consumed, connection continues completely UNLIMITED at 1 Mbps with zero extra bill charges.',
    highlight: true
  },
  {
    id: 'flash-10',
    name: 'LTE FLASH 10',
    maxSpeed: 'Up to 10 Mbps (Full Speed)',
    dailyQuota: '10 GB Daily @ Full Speed',
    afterQuotaSpeed: 'Unlimited @ 1 Mbps afterwards',
    rental: '4,090',
    oldRental: '3,850',
    fupReset: 'Daily Reset @ 00:00 hrs',
    badge: 'Flash 10 Daily',
    badgeStyle: 'bg-blue-100 text-blue-800 border-blue-300',
    desc: '10GB daily high speed volume (300GB/mo) followed by unmetered 1 Mbps browsing for the remainder of the day.',
    highlight: false
  },
  {
    id: 'unlimited-8',
    name: 'LTE UNLIMITED 8',
    maxSpeed: 'Up to 8 Mbps Constant',
    dailyQuota: 'No Daily Quota Cap',
    afterQuotaSpeed: 'Constant 8 Mbps 24/7',
    rental: '7,090',
    oldRental: '6,650',
    fupReset: 'Continuous Uncapped',
    badge: 'Pure 8 Mbps Unthrottled',
    badgeStyle: 'bg-purple-100 text-purple-800 border-purple-300',
    desc: 'Pure unthrottled unlimited broadband at 8 Mbps speed without daily threshold caps or volume metering.',
    highlight: false
  },
  {
    id: 'allday-4',
    name: 'Unlimited All Day 4',
    maxSpeed: 'Up to 4 Mbps',
    dailyQuota: 'Standard Work & Learn Protocols',
    afterQuotaSpeed: 'Unlimited Web, Email, Zoom, Teams',
    rental: '5,950',
    oldRental: '5,650',
    fupReset: 'Monthly / Protocol Policy',
    badge: 'All Day 4 Mbps',
    badgeStyle: 'bg-cyan-100 text-cyan-800 border-cyan-300',
    desc: 'Unlimited standard surfing and streaming. Torrents and heavy P2P restricted under network fair usage.',
    highlight: false
  },
  {
    id: 'allday-8',
    name: 'Unlimited All Day 8',
    maxSpeed: 'Up to 8 Mbps',
    dailyQuota: 'Standard High Speed Surfing',
    afterQuotaSpeed: 'Unlimited Web, YouTube, Streaming',
    rental: '8,950',
    oldRental: '8,450',
    fupReset: 'Monthly / Protocol Policy',
    badge: 'All Day 8 Mbps',
    badgeStyle: 'bg-amber-100 text-amber-800 border-amber-300',
    desc: 'High speed 8 Mbps continuous unlimited package for multi-screen homes and streaming users.',
    highlight: false
  }
];

// Section E: IP TV / PEO TV Collection Flash Packages
const IPTV_FLASH_PACKAGES = [
  {
    id: 'iptv-flash-5',
    name: 'PEO Flash 5 (IP TV Bundle)',
    rental: '2,850',
    oldRental: '2,650',
    dailyData: '5 GB Daily @ Full Speed + Unlimited 1 Mbps',
    tvChannels: 'PEO TV Go Mobile App / OTT Bundle Included',
    storageFree: '5 GB Free Cloud Storage',
    commitment: '12 Months Commitment Period',
    terminationFee: 'Rs. 5,000/= if disconnected within 1 year',
    badge: 'TV + BB Combo',
    badgeStyle: 'bg-purple-100 text-purple-900 border-purple-300'
  },
  {
    id: 'iptv-flash-10',
    name: 'PEO Flash 10 (IP TV Bundle)',
    rental: '4,690',
    oldRental: '4,350',
    dailyData: '10 GB Daily @ Full Speed + Unlimited 1 Mbps',
    tvChannels: 'PEO TV Go Mobile App / Premium OTT Included',
    storageFree: '5 GB Free Cloud Storage',
    commitment: '12 Months Commitment Period',
    terminationFee: 'Rs. 5,000/= if disconnected within 1 year',
    badge: 'High-Speed TV Combo',
    badgeStyle: 'bg-indigo-100 text-indigo-900 border-indigo-300'
  }
];

// Section F: Package Changing Rules Matrix
const PACKAGE_CHANGE_RULES = [
  {
    current: 'Low rental Base BB (Any package)',
    requesting: 'Higher rental BB package',
    option: 'Normal Upgrade',
    fee: 'FREE',
    feeColor: 'text-emerald-600 font-black',
    billOption: 'Yes',
    notes: 'Free immediate upgrade. Quota provisioned prorated or next billing cycle.'
  },
  {
    current: '7-14 Days Home BB package',
    requesting: 'Higher rental BB package',
    option: 'Normal Upgrade',
    fee: 'FREE',
    feeColor: 'text-emerald-600 font-black',
    billOption: 'Yes',
    notes: 'Customer migrating from discontinued weekly/bi-weekly plans to standard monthly tiers.'
  },
  {
    current: 'Higher rental BB Package',
    requesting: 'Lower rental BB Package',
    option: 'Down Grade',
    fee: 'Rs. 250/=',
    feeColor: 'text-rose-600 font-black',
    billOption: 'Yes',
    notes: 'Downgrade penalty of Rs. 250 applies on next bill. Downgrade occurs at cycle boundary.'
  },
  {
    current: 'HBB Anytime Packages',
    requesting: 'Anytime packages (Postpaid) / Any Joy/Beat',
    option: 'Same Category Change',
    fee: 'FREE',
    feeColor: 'text-emerald-600 font-black',
    billOption: 'Yes',
    notes: 'Changing within Anytime family (e.g., Any Joy to Any Beat or HBB 35 to HBB 65) is completely free.'
  },
  {
    current: 'HBB Postpaid Packages',
    requesting: 'LTE Unlimited Packages (Flash 5 / Flash 10 / Unlimited 8)',
    option: 'Non-shifting Upgrade',
    fee: 'FREE',
    feeColor: 'text-emerald-600 font-black',
    billOption: 'Yes',
    notes: 'Migrating from metered day/night packages to Unlimited packages incurs zero migration fee.'
  },
  {
    current: 'HBB Anytime Packages',
    requesting: 'HBB Postpaid (Day/Night Split) Packages',
    option: 'Downgrade / Category Shift',
    fee: 'FREE',
    feeColor: 'text-emerald-600 font-black',
    billOption: 'Yes',
    notes: 'Customer switching from Advance Billed Anytime to standard Arrears Billed Day/Night plans.'
  }
];

export default function LteBroadbandPackagesPage() {
  const [activeTab, setActiveTab] = useState<'anytime' | 'hbb_anytime' | 'general' | 'unlimited' | 'iptv' | 'rules' | 'entel'>('anytime');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const ttAnytimeMigration = `SERVICE: SLT-Mobitel 4G LTE Fixed Broadband
ACTION: Package Migration to Any-Time GB / HBB Anytime
ACCOUNT NO: [011-2XXXXXX / ACCOUNT_NO]
REQUESTED PACKAGE: [e.g. Any Joy (22GB @ Rs. 1,150) / Any Beat (36GB @ Rs. 1,550)]
CURRENT PACKAGE: [CURRENT_PLAN_NAME]
MIGRATION OPTION: Normal Upgrade (Free) / Downgrade (Rs. 250 fee applicable)
BILLING PROFILE: Advanced Billing Adjustment required if migrating from Arrears billing
RULE: CIRCULAR_LTE_BB_ANYTIME_PACKAGES
TARGET: BILLING-PROVISIONING / FRONT-OFFICE
ACTION: Provision requested Anytime package in CRM. Reconcile advance billing deposit where required.`;

  const ttFlashUnlimitedOrder = `SERVICE: SLT-Mobitel 4G LTE Fixed Broadband
ACTION: New Connection / Upgrade to LTE FLASH Unlimited
ACCOUNT NO: [011-2XXXXXX / NEW_PROSPECT]
PACKAGE: [LTE FLASH 5 (Rs. 2,350) / LTE FLASH 10 (Rs. 4,090) / LTE UNLIMITED 8 (Rs. 7,090)]
FUP SPECIFICATION: Daily quota @ full speed, unthrottled 1 Mbps browsing afterwards
COMMITMENT: 12-Month commitment period applies. Early termination penalty: Rs. 5,000/=
WARRANTY: 12 Months for new CPE unit.
TARGET: BROADBAND-FULFILLMENT / CS-PROVISIONING`;

  const ttAntennaWeakSignal = `SERVICE: SLT-Mobitel 4G LTE Fixed Broadband
FAULT: Slow Browsing Speeds / Weak RF Signal (RSRP < -105 dBm)
DIAGNOSTICS: Router gateway (192.168.8.1) indicates 1 red signal bar. Band 40 (2300MHz).
ACTION: Dispatch Trouble Ticket to AREA-MTCE / RF-PLANNING for outdoor high-gain Yagi antenna installation.`;

  // Filter logic
  const filteredAnytime = ANYTIME_GB_PACKAGES.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.volume.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.rental.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredHbbAnytime = HBB_ANYTIME_POSTPAID.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.volume.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.rentalWithoutTax.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredGeneral = GENERAL_BB_PACKAGES.filter(p =>
    p.tier.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.total.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.rental.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredUnlimited = UNLIMITED_HBB_PACKAGES.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.rental.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.maxSpeed.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f1f5f9] overflow-y-auto select-none text-slate-800">
      
      {/* UNIFIED SHAREPOINT PORTAL HEADER & 9-TOPIC QUICK SWITCHER */}
      <LteSubpageHeader
        currentTopicId="broadband"
        title="LTE Broadband (BB) Package Master Matrix"
        subtitle="Comprehensive postpaid broadband tariff directory for SLT-Mobitel 4G LTE Fixed Wireless: Any-Time GB packages, New Postpaid HBB Anytime, General Day/Night packages, LTE Flash Unlimited, and IP TV bundles."
        badge="Official LTE BB Schedule"
        badgeStyle="bg-indigo-400/20 text-indigo-300 border-indigo-300/30"
        taxDate="Circular: 1st May 2024 / Tax Rev. 01/08/2024"
        author="Chathurani Rathnayake"
        authorRole="Senior Assistant Manager (Customer Relations) - A7"
        icon={Globe}
        stats={[
          { label: 'Any-Time Plans', value: '10 Tiers', sub: '22GB to 310GB Pure Anytime' },
          { label: 'Unlimited Flash', value: 'From Rs. 2,350', sub: 'Flash 5 & Flash 10' },
          { label: 'Night Bonus Tiers', value: '12 Packages', sub: 'Web Starter to Web Premier' }
        ]}
      />

      {/* 4. SUB-NAVIGATION & CATEGORY TOOLBAR */}
      <div className="bg-white border-b border-slate-300 px-6 py-3 sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-3">
          
          {/* Section Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none text-xs">
            <button
              onClick={() => setActiveTab('anytime')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'anytime'
                  ? 'bg-[#005696] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Any-Time GB ({ANYTIME_GB_PACKAGES.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('hbb_anytime')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'hbb_anytime'
                  ? 'bg-[#005696] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>HBB Anytime Postpaid ({HBB_ANYTIME_POSTPAID.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('general')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'general'
                  ? 'bg-[#005696] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              <span>Day/Night General ({GENERAL_BB_PACKAGES.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('unlimited')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'unlimited'
                  ? 'bg-[#005696] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>Unlimited Flash ({UNLIMITED_HBB_PACKAGES.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('iptv')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'iptv'
                  ? 'bg-[#005696] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Tv className="w-3.5 h-3.5 text-purple-600" />
              <span>PEO TV Bundles</span>
            </button>

            <button
              onClick={() => setActiveTab('rules')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'rules'
                  ? 'bg-[#005696] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-blue-600" />
              <span>Package Change Rules</span>
            </button>

            <button
              onClick={() => setActiveTab('entel')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'entel'
                  ? 'bg-[#005696] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Signal className="w-3.5 h-3.5 text-indigo-600" />
              <span>Entel &amp; Signal</span>
            </button>
          </div>

          {/* Search & View Mode Controls */}
          <div className="flex items-center gap-2.5 w-full lg:w-auto justify-between lg:justify-end">
            <div className="relative w-full sm:w-52">
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

            {/* Toggle View Mode */}
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
          {/* TAB 1: ANY-TIME GB PACKAGES (Active from 1st May 2024)                    */}
          {/* ========================================================================= */}
          {activeTab === 'anytime' && (
            <div className="space-y-6">
              
              {/* Header Notice Banner */}
              <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 border-2 border-emerald-300 rounded-2xl p-5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white px-2.5 py-0.5 rounded-full inline-block">
                      100% Pure Anytime Volume • Available from 1st May 2024
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-slate-900">
                      Any-Time GB Packages (LTE Fixed Wireless)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      Zero day/night split, zero hourly restriction, no off-peak required. Quota is fully usable anytime 24/7. Available for New Connections, Package Changes, Copper to LTE, and Reconnections.
                    </p>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-xl border border-emerald-200 text-center shrink-0 shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Starting Price</span>
                    <span className="text-xl font-black text-emerald-700">Rs. 1,150</span>
                    <span className="text-[10px] text-slate-500 block">Any Joy (22 GB)</span>
                  </div>
                </div>
              </div>

              {/* Cards Mode */}
              {viewMode === 'cards' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {filteredAnytime.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`bg-white rounded-3xl border-2 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group ${
                        pkg.highlight ? 'border-[#005696] ring-2 ring-[#005696]/20 bg-blue-50/15' : 'border-slate-200'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-1">
                          <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${pkg.badgeStyle}`}>
                            {pkg.badge}
                          </span>
                          <span className="text-[11px] font-bold text-slate-400 line-through">
                            Old: Rs. {pkg.oldRental}
                          </span>
                        </div>

                        <div>
                          <h4 className="font-black text-xl text-slate-900 group-hover:text-[#005696] transition-colors">
                            {pkg.name}
                          </h4>
                          <p className="text-xs text-slate-500 font-medium mt-1 leading-snug">
                            {pkg.desc}
                          </p>
                        </div>

                        {/* Volume Highlight */}
                        <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                          <div>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                              Anytime Quota
                            </span>
                            <span className="text-2xl font-black text-slate-900">
                              {pkg.volume}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                              Rental (Without Tax)
                            </span>
                            <span className="text-xl font-black text-[#005696]">
                              Rs. {pkg.rental}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100 mt-3 flex items-center justify-between text-xs">
                        <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          Pure 24/7 Any-Time
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          ~Rs. {(parseInt(pkg.rental.replace(',', '')) / pkg.volumeNum).toFixed(1)}/GB
                        </span>
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
                          <th className="p-3.5">Anytime Volume</th>
                          <th className="p-3.5">New Monthly Rental (Without Tax)</th>
                          <th className="p-3.5">Old Rental</th>
                          <th className="p-3.5">Cost per GB</th>
                          <th className="p-3.5">Package Classification</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredAnytime.map((pkg) => (
                          <tr key={pkg.id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="p-3.5 font-bold text-slate-900 flex items-center gap-2">
                              <Sparkles className="w-3.5 h-3.5 text-[#005696]" />
                              <span>{pkg.name}</span>
                            </td>
                            <td className="p-3.5 font-black text-emerald-700 font-mono text-sm">{pkg.volume}</td>
                            <td className="p-3.5 font-black text-slate-900 text-sm">Rs. {pkg.rental}</td>
                            <td className="p-3.5 text-slate-400 line-through">Rs. {pkg.oldRental}</td>
                            <td className="p-3.5 text-slate-600 font-mono">Rs. {(parseInt(pkg.rental.replace(',', '')) / pkg.volumeNum).toFixed(2)}</td>
                            <td className="p-3.5">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${pkg.badgeStyle}`}>
                                {pkg.badge}
                              </span>
                            </td>
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
          {/* TAB 2: HBB ANYTIME POSTPAID (Advance Billed Packages - 5 Tiers)            */}
          {/* ========================================================================= */}
          {activeTab === 'hbb_anytime' && (
            <div className="space-y-6">

              {/* Advance Billing Notice */}
              <div className="bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border-2 border-blue-300 rounded-2xl p-5 space-y-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-blue-700 text-white px-2.5 py-0.5 rounded-full inline-block">
                  Advance Billed Postpaid Series • Online from 1st April 2024
                </span>
                <h3 className="text-lg md:text-xl font-black text-slate-900">
                  New LTE Postpaid Home Broadband Anytime Packages
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  <strong>Special Operational Note:</strong> These packages follow <strong>Advanced Billing Mode</strong>. When migrating existing customers on Arrears Billing, check customer billing profile: customer must settle current prorated bill and post advance payment before package activation.
                </p>
              </div>

              {/* Cards View */}
              {viewMode === 'cards' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredHbbAnytime.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#005696]"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${pkg.badgeStyle}`}>
                            {pkg.badge}
                          </span>
                          <span className="text-[10px] font-bold bg-blue-50 text-[#005696] px-2 py-0.5 rounded-md border border-blue-200">
                            {pkg.billingMode}
                          </span>
                        </div>

                        <h4 className="font-black text-xl text-slate-900 group-hover:text-[#005696] transition-colors">
                          {pkg.name}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium">
                          {pkg.desc}
                        </p>

                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-baseline justify-between">
                          <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                              Anytime Volume
                            </span>
                            <span className="text-3xl font-black text-slate-900">
                              {pkg.volume}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                              Rental (Without Tax)
                            </span>
                            <span className="text-2xl font-black text-[#005696]">
                              Rs. {pkg.rentalWithoutTax}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100 mt-4 space-y-1 text-xs text-slate-600 font-medium">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Bonus Allocation:</span>
                          <span className="font-bold text-emerald-700">Eligible via MySLT</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Billing Mode:</span>
                          <span className="font-bold text-blue-800">Advanced Billed</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Table View */}
              {viewMode === 'table' && (
                <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                          <th className="p-3.5">Package Name</th>
                          <th className="p-3.5">Anytime Volume</th>
                          <th className="p-3.5">Per Mo Fee (Without Tax)</th>
                          <th className="p-3.5">Academic / Bonus Extra</th>
                          <th className="p-3.5">Billing Mode</th>
                          <th className="p-3.5">Available For</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredHbbAnytime.map((pkg) => (
                          <tr key={pkg.id} className="hover:bg-slate-50 transition-colors">
                            <td className="p-3.5 font-bold text-slate-900">{pkg.name}</td>
                            <td className="p-3.5 font-black text-emerald-700 text-sm">{pkg.volume}</td>
                            <td className="p-3.5 font-black text-slate-900 text-sm">Rs. {pkg.rentalWithoutTax}</td>
                            <td className="p-3.5 text-slate-600">{pkg.bonusEligible}</td>
                            <td className="p-3.5 font-semibold text-blue-800">{pkg.billingMode}</td>
                            <td className="p-3.5 text-slate-500">New / Upgrade / Reconnect / Migration</td>
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
          {/* TAB 3: GENERAL BROADBAND PACKAGES (Day/Night Split - 12 Tiers)            */}
          {/* ========================================================================= */}
          {activeTab === 'general' && (
            <div className="space-y-6">

              {/* Notice Strip */}
              <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
                <div className="space-y-1">
                  <span className="font-bold text-amber-900 uppercase tracking-wider block">
                    Day (08:00 - 00:00) + Free Night Bonus (00:00 - 08:00) Schedule
                  </span>
                  <p className="text-amber-800">
                    Discontinued for new customer acquisition since 15th Feb 2024, but <strong>fully active for existing accounts, package changes, copper migrations, and retentions</strong>.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-xl bg-amber-200/70 text-amber-950 font-bold border border-amber-300 shrink-0">
                  12 Active Tiers
                </span>
              </div>

              {/* Cards View */}
              {viewMode === 'cards' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {filteredGeneral.map((pkg) => (
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
                          <span className="font-mono text-xs font-bold text-slate-400">Total: {pkg.total}</span>
                        </div>

                        <h4 className="font-black text-xl text-slate-900 group-hover:text-[#005696] transition-colors">
                          {pkg.tier}
                        </h4>

                        <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                          <div className="flex items-baseline justify-between">
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Monthly Rental</span>
                            <span className="text-xl font-black text-slate-900">Rs. {pkg.rental}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200 text-xs">
                            <div className="flex items-center gap-1 text-amber-700">
                              <Sun className="w-3.5 h-3.5" />
                              <span className="font-bold">Day: {pkg.day}</span>
                            </div>
                            <div className="flex items-center gap-1 text-indigo-700">
                              <Moon className="w-3.5 h-3.5" />
                              <span className="font-bold">Night: {pkg.night}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100 mt-3 text-[10px] text-slate-500 flex items-center justify-between">
                        <span>Extra GB: Rs. 100/200</span>
                        <span className="font-bold text-[#005696]">{pkg.total} Quota</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Table View */}
              {viewMode === 'table' && (
                <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                          <th className="p-3.5">Package Name</th>
                          <th className="p-3.5">Day Quota (08:00 - 00:00)</th>
                          <th className="p-3.5">Night Bonus (00:00 - 08:00)</th>
                          <th className="p-3.5">Total Data Volume</th>
                          <th className="p-3.5">Monthly Rental (Without Tax)</th>
                          <th className="p-3.5">Classification</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredGeneral.map((pkg) => (
                          <tr key={pkg.id} className="hover:bg-slate-50 transition-colors">
                            <td className="p-3.5 font-bold text-slate-900">{pkg.tier}</td>
                            <td className="p-3.5 font-bold text-amber-700">{pkg.day}</td>
                            <td className="p-3.5 font-bold text-indigo-700">{pkg.night}</td>
                            <td className="p-3.5 font-black text-slate-900 text-sm">{pkg.total}</td>
                            <td className="p-3.5 font-black text-[#005696] text-sm">Rs. {pkg.rental}</td>
                            <td className="p-3.5">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${pkg.badgeStyle}`}>
                                {pkg.badge}
                              </span>
                            </td>
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
          {/* TAB 4: UNLIMITED HBB PACKAGES (Flash 5 / Flash 10 / Unlimited 8)          */}
          {/* ========================================================================= */}
          {activeTab === 'unlimited' && (
            <div className="space-y-6">

              {/* Header Banner */}
              <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-900 text-white rounded-3xl p-6 shadow-md space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/20 text-emerald-200 border border-white/20">
                    Pure Uncapped After Quota
                  </span>
                  <span className="text-xs text-emerald-100">Daily Reset @ 00:00 hrs</span>
                </div>
                <h3 className="text-2xl font-black tracking-tight">
                  LTE Flash &amp; Unlimited Residential Broadband
                </h3>
                <p className="text-xs text-emerald-100/90 max-w-3xl leading-relaxed">
                  High-speed daily quota paired with continuous unmetered 1 Mbps browsing afterwards. No bill shocks, no excess usage fees, and 24-hour uninterrupted connectivity.
                </p>
              </div>

              {/* Cards View */}
              {viewMode === 'cards' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {filteredUnlimited.map((pkg) => (
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
                          {pkg.oldRental && (
                            <span className="text-xs text-slate-400 font-bold line-through">
                              Prior: Rs. {pkg.oldRental}
                            </span>
                          )}
                        </div>

                        <div>
                          <h4 className="font-black text-2xl text-slate-900 group-hover:text-emerald-800 transition-colors">
                            {pkg.name}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                            {pkg.desc}
                          </p>
                        </div>

                        {/* Price & Speed Card */}
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                          <div className="flex items-baseline justify-between">
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Monthly Rental</span>
                            <span className="text-2xl font-black text-slate-900">Rs. {pkg.rental}</span>
                          </div>
                          <div className="pt-2 border-t border-slate-200 space-y-1 text-xs">
                            <div className="flex items-center justify-between text-emerald-700 font-bold">
                              <span>Max Speed:</span>
                              <span>{pkg.maxSpeed}</span>
                            </div>
                            <div className="flex items-center justify-between text-slate-600">
                              <span>Daily Threshold:</span>
                              <span>{pkg.dailyQuota}</span>
                            </div>
                            <div className="flex items-center justify-between text-indigo-700 font-medium">
                              <span>After Threshold:</span>
                              <span className="font-bold">{pkg.afterQuotaSpeed}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100 mt-4 text-[11px] text-slate-500 flex items-center justify-between">
                        <span>FUP Policy: {pkg.fupReset}</span>
                        <span className="font-bold text-emerald-700">Unmetered 1Mbps</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Table View */}
              {viewMode === 'table' && (
                <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                          <th className="p-3.5">Package Name</th>
                          <th className="p-3.5">Max Speed Bandwidth</th>
                          <th className="p-3.5">Monthly Rental (Rs.)</th>
                          <th className="p-3.5">Prior Rental</th>
                          <th className="p-3.5">Daily Quota Threshold</th>
                          <th className="p-3.5">Speed After Threshold</th>
                          <th className="p-3.5">FUP Reset</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredUnlimited.map((pkg) => (
                          <tr key={pkg.id} className="hover:bg-slate-50 transition-colors">
                            <td className="p-3.5 font-bold text-slate-900">{pkg.name}</td>
                            <td className="p-3.5 font-bold text-emerald-700">{pkg.maxSpeed}</td>
                            <td className="p-3.5 font-black text-slate-900 text-sm">Rs. {pkg.rental}</td>
                            <td className="p-3.5 text-slate-400 line-through">{pkg.oldRental ? `Rs. ${pkg.oldRental}` : '—'}</td>
                            <td className="p-3.5 font-medium text-slate-700">{pkg.dailyQuota}</td>
                            <td className="p-3.5 font-bold text-indigo-700">{pkg.afterQuotaSpeed}</td>
                            <td className="p-3.5 text-slate-500">{pkg.fupReset}</td>
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
          {/* TAB 5: IP TV / PEO TV FLASH PACKAGES                                      */}
          {/* ========================================================================= */}
          {activeTab === 'iptv' && (
            <div className="space-y-6">

              <div className="bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10 border-2 border-purple-300 rounded-2xl p-5 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider bg-purple-700 text-white px-2.5 py-0.5 rounded-full inline-block">
                  Fixed Wireless OTT &amp; Entertainment
                </span>
                <h3 className="text-xl font-black text-slate-900">
                  IP TV Collection Flash Packages for SLT Fixed Wireless
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Combines high speed broadband with PEO TV Go Mobile / OTT TV channels and free 5 GB cloud storage in a unified monthly billing bundle.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {IPTV_FLASH_PACKAGES.map((pkg) => (
                  <div key={pkg.id} className="bg-white rounded-3xl border-2 border-purple-200 p-6 shadow-xs space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${pkg.badgeStyle}`}>
                        {pkg.badge}
                      </span>
                      <span className="text-xs text-slate-400 font-bold line-through">Old: Rs. {pkg.oldRental}</span>
                    </div>

                    <h4 className="font-black text-2xl text-slate-900">{pkg.name}</h4>

                    <div className="p-4 bg-purple-50/50 rounded-2xl border border-purple-100 flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Monthly Rental</span>
                        <span className="text-3xl font-black text-purple-900">Rs. {pkg.rental}</span>
                      </div>
                      <span className="text-xs font-bold text-purple-700 bg-white px-2.5 py-1 rounded-lg border border-purple-200">
                        Without Tax
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-600">
                      <div className="p-2.5 bg-slate-50 rounded-xl flex items-center justify-between">
                        <span className="font-bold text-slate-700">Broadband Quota:</span>
                        <span className="font-semibold text-emerald-700">{pkg.dailyData}</span>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-xl flex items-center justify-between">
                        <span className="font-bold text-slate-700">TV Channels:</span>
                        <span className="font-semibold text-purple-800">{pkg.tvChannels}</span>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-xl flex items-center justify-between">
                        <span className="font-bold text-slate-700">Cloud Storage:</span>
                        <span className="font-semibold text-blue-700">{pkg.storageFree}</span>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-xl flex items-center justify-between text-slate-500">
                        <span>Commitment:</span>
                        <span>{pkg.commitment}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 6: PACKAGE CHANGE & MIGRATION RULES MATRIX                            */}
          {/* ========================================================================= */}
          {activeTab === 'rules' && (
            <div className="space-y-6">

              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-2">
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <ArrowUpDown className="w-5 h-5 text-[#005696]" />
                  <span>4G LTE Broadband Package Change Related Information</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Official rules governing package upgrades, downgrades, penalty charges, and advance billing requirements.
                </p>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-3.5">Current Package Type</th>
                        <th className="p-3.5">Requesting Package Type</th>
                        <th className="p-3.5">Changing Option</th>
                        <th className="p-3.5">Package Change Fee</th>
                        <th className="p-3.5">Bill Option</th>
                        <th className="p-3.5">Policy / Operational Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {PACKAGE_CHANGE_RULES.map((rule, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900">{rule.current}</td>
                          <td className="p-3.5 font-medium text-slate-700">{rule.requesting}</td>
                          <td className="p-3.5">
                            <span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded-md font-semibold text-[11px]">
                              {rule.option}
                            </span>
                          </td>
                          <td className={`p-3.5 ${rule.feeColor}`}>{rule.fee}</td>
                          <td className="p-3.5 font-semibold text-slate-700">{rule.billOption}</td>
                          <td className="p-3.5 text-slate-600 leading-snug">{rule.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 7: BROADBAND ENTEL CHARGES & RF SIGNAL GUIDELINES                      */}
          {/* ========================================================================= */}
          {activeTab === 'entel' && (
            <div className="space-y-6">

              {/* Entel BB Charges */}
              <div className="bg-white rounded-3xl border-2 border-indigo-200 p-6 shadow-xs space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-indigo-100 text-indigo-900 px-2.5 py-0.5 rounded-full inline-block">
                    Fixed Charges
                  </span>
                  <h3 className="text-xl font-black text-slate-900">
                    Broadband Entel BB Charges
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fixed operational service charges applicable on Broadband Entel connections.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-indigo-50/60 rounded-2xl border border-indigo-100 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Monthly Fee</span>
                    <span className="text-2xl font-black text-indigo-900">Rs. 745/=</span>
                  </div>
                  <div className="p-4 bg-indigo-50/60 rounded-2xl border border-indigo-100 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Annual Fee</span>
                    <span className="text-2xl font-black text-indigo-900">Rs. 1,124/=</span>
                  </div>
                </div>
              </div>

              {/* RSRP RF Signal Quality Diagnostics */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-slate-900 font-black text-base">
                  <Signal className="w-5 h-5 text-indigo-600" />
                  <span>4G LTE Signal Quality (RSRP) Thresholds &amp; Triage</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div className="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-1">
                    <span className="font-bold text-emerald-800 text-sm block">Excellent (&gt; -80 dBm)</span>
                    <p className="text-slate-600">3-4 green bars on router. Highest download/upload speeds.</p>
                  </div>
                  <div className="p-3.5 bg-blue-50 rounded-2xl border border-blue-200 space-y-1">
                    <span className="font-bold text-blue-800 text-sm block">Good (-80 to -90 dBm)</span>
                    <p className="text-slate-600">2-3 green bars. Stable throughput for video &amp; VoIP.</p>
                  </div>
                  <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 space-y-1">
                    <span className="font-bold text-amber-800 text-sm block">Moderate (-90 to -105 dBm)</span>
                    <p className="text-slate-600">1-2 bars. Recommend repositioning CPE near window.</p>
                  </div>
                  <div className="p-3.5 bg-rose-50 rounded-2xl border border-rose-200 space-y-1">
                    <span className="font-bold text-rose-800 text-sm block">Poor (&lt; -105 dBm)</span>
                    <p className="text-slate-600">Red indicator. Outdoor high-gain antenna strongly required.</p>
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
              
              {/* Template 1: Anytime Migration */}
              <div className="bg-slate-900 rounded-2xl p-4 text-white text-xs space-y-2 border border-slate-800 shadow-md">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-bold text-cyan-300">C-Log: Any-Time GB Migration Order</span>
                  <button
                    onClick={() => copyToClipboard(ttAnytimeMigration, 'tt-anytime')}
                    className="px-2.5 py-1 bg-[#005696] hover:bg-blue-600 rounded-lg text-white font-bold flex items-center gap-1 transition-colors"
                  >
                    {copiedId === 'tt-anytime' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === 'tt-anytime' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="font-mono text-[11px] text-lime-300 leading-relaxed whitespace-pre-wrap overflow-x-auto">
                  {ttAnytimeMigration}
                </pre>
              </div>

              {/* Template 2: Flash Unlimited */}
              <div className="bg-slate-900 rounded-2xl p-4 text-white text-xs space-y-2 border border-slate-800 shadow-md">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-bold text-emerald-300">C-Log: LTE Flash Unlimited Activation</span>
                  <button
                    onClick={() => copyToClipboard(ttFlashUnlimitedOrder, 'tt-flash')}
                    className="px-2.5 py-1 bg-emerald-700 hover:bg-emerald-600 rounded-lg text-white font-bold flex items-center gap-1 transition-colors"
                  >
                    {copiedId === 'tt-flash' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === 'tt-flash' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="font-mono text-[11px] text-emerald-300 leading-relaxed whitespace-pre-wrap overflow-x-auto">
                  {ttFlashUnlimitedOrder}
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
