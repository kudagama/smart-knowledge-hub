"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import LteSubpageHeader from '../_components/LteSubpageHeader';
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
  Radio,
  FileText,
  Users,
  Grid,
  ChevronDown,
  Clock,
  Sparkles,
  PhoneCall,
  Zap,
  Info,
  Calendar,
  Building2,
  Layers,
  PhoneForwarded,
  Signal,
  Award,
  Search,
  X,
  BatteryCharging,
  CreditCard,
  AlertTriangle,
  Flame,
  CheckSquare,
  ShieldAlert
} from 'lucide-react';

// =========================================================================
// 1. UNLIMITED VOICE PACKAGES (FLAT RATE RS. 747/MO - 4G LTE VOLTE)
// =========================================================================
const UNLIMITED_VOICE_PACKAGES = [
  {
    id: 'unltd_home_dp',
    name: 'Unltd LTE Home Double Play Rs.747',
    rental: '747',
    rentalWithTax: '1,060.89',
    orderType: 'CREATE (New Customers) | MODIFY (Existing Migrations)',
    phoneClass: '4G LTE Double Play',
    allowedCategories: [
      'Individual Residencies',
      'Government Official Residencies',
      'SLT Official Residencies',
      'Diplomats & Delegates'
    ],
    badge: 'Residential DP',
    badgeStyle: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    highlight: true,
    commitment: 'No commitment period',
    advantages: [
      'Unlimited calls to ANY local network (On-net & Off-net island-wide)',
      'Clear, high-quality HD VoLTE voice clarity',
      'Postpaid package with zero surprise call charges',
      'No dropped calls or connection issues',
      'No more worrying about running out of minutes',
      'Keep your existing number (011-3XXXXXX) and phone',
      'No commitment period (cancel or modify anytime)'
    ]
  },
  {
    id: 'unltd_office_dp',
    name: 'Unltd LTE Office Double Play Rs.747',
    rental: '747',
    rentalWithTax: '1,060.89',
    orderType: 'CREATE (New Customers) | MODIFY (Existing Migrations)',
    phoneClass: '4G LTE Double Play',
    allowedCategories: [
      'Individual Business',
      'Individual Micro Business',
      'Small Business',
      'Regional - SME',
      'Registered Micro Business'
    ],
    badge: 'Business / SME',
    badgeStyle: 'bg-blue-100 text-blue-900 border-blue-300',
    commitment: 'No commitment period',
    advantages: [
      'Unlimited business calls to ANY local fixed or mobile network',
      'Secure & safe corporate grade calling',
      'Clear HD VoLTE voice for front desk and customer service',
      'Postpaid predictable monthly telephony expense',
      'No dropped calls or connection degradation',
      'Keep existing business number and phone',
      'No commitment period'
    ]
  },
  {
    id: 'unltd_dp_religious',
    name: 'Unltd 4G DP Religious Rs.747',
    rental: '747',
    rentalWithTax: '1,060.89',
    orderType: 'CREATE (New Customers) | MODIFY (Existing Migrations)',
    phoneClass: '4G LTE Double Play',
    allowedCategories: [
      'Religious Institute'
    ],
    badge: 'Religious DP',
    badgeStyle: 'bg-amber-100 text-amber-900 border-amber-300',
    commitment: 'No commitment period',
    advantages: [
      'Unlimited calls to all networks for temples, churches, kovils & mosques',
      'Clear, high-quality HD VoLTE voice',
      'Postpaid package without minute caps',
      'Keep existing religious institute landline number',
      'No commitment period'
    ]
  },
  {
    id: 'unltd_biz_pal_religious',
    name: 'Unltd 4G Biz Pal Religious Rs.747',
    rental: '747',
    rentalWithTax: '1,060.89',
    orderType: 'CREATE (New Customers) | MODIFY (Existing Migrations)',
    phoneClass: '4G LTE Biz Pal',
    allowedCategories: [
      'Religious Institute'
    ],
    badge: 'Biz Pal Religious',
    badgeStyle: 'bg-purple-100 text-purple-900 border-purple-300',
    commitment: 'No commitment period',
    advantages: [
      'Unlimited voice calls to any network for religious administration',
      '4G LTE Biz Pal phone classification',
      'Crystal clear HD VoLTE sound without dropouts',
      'Predictable flat Rs. 747 monthly bill',
      'No commitment period'
    ]
  },
  {
    id: 'unltd_voice_pal_basic',
    name: 'Unltd 4G Voice Pal Basic Rs.747',
    rental: '747',
    rentalWithTax: '1,060.89',
    orderType: 'CREATE (New Customers) | MODIFY (Existing Migrations)',
    phoneClass: '4G Voice Pal (Single Play Voice)',
    allowedCategories: [
      'Individual Residencies',
      'Government Official Residencies',
      'SLT Official Residencies',
      'Diplomats & Delegates',
      'Individual Business',
      'Individual Micro Business',
      'Small Business',
      'Regional - SME',
      'Registered Micro Business'
    ],
    badge: 'Single Play Voice',
    badgeStyle: 'bg-teal-100 text-teal-900 border-teal-300',
    highlight: true,
    commitment: 'No commitment period',
    advantages: [
      'Dedicated fixed voice phone service WITHOUT requiring broadband package',
      'Unlimited calls to ANY network (SLT, Mobitel, Dialog, Airtel, Hutch)',
      'Works seamlessly on VoLTE fixed desk phones',
      'Postpaid package, no minute cards or reloads',
      'Keep existing number and desk phone',
      'No commitment period on this Unlimited Rs. 747 plan'
    ]
  }
];

// =========================================================================
// 2. STANDARD VOICE PACKAGES MATRIX (VOICE PAL, NET PAL, DOUBLE PLAY, BIZ PAL)
// =========================================================================
const STANDARD_VOICE_PACKAGES_MATRIX = [
  {
    category: '4G Voice Pal (Single Play)',
    pkg: 'Basic (Effective from 05/09/2022)',
    rental: '479',
    rentalWithTax: '680.28',
    oldRental: '399',
    priceOverriding: 'Min: 0 | Max: 1000',
    onNetActive: '1.25',
    onNetLeisure: '1.25',
    offNetActive: '1.75',
    offNetLeisure: '1.75',
    freeMinutes: '300 (On-net)',
    data: 'Free 200MB',
    extraData: 'Rs. 0.30/MB (Max 3GB limit)',
    phone: 'Customer purchases phone',
    commitment: '1 Year (Termination Rs. 600/remaining mo)',
    badge: 'Voice Pal Basic',
    badgeStyle: 'bg-teal-50 text-teal-900 border-teal-300'
  },
  {
    category: '4G Voice Pal (Single Play)',
    pkg: 'Premium (Effective from 05/09/2022)',
    rental: '999',
    rentalWithTax: '1,418.78',
    oldRental: null,
    priceOverriding: 'Min: 0 | Max: 1000',
    onNetActive: '3.90 per minute',
    onNetLeisure: '3.90 per minute',
    offNetActive: '5.90 per minute',
    offNetLeisure: '5.90 per minute',
    freeMinutes: '1,000 (On-net)',
    data: 'Free 500MB',
    extraData: 'Rs. 0.30/MB (Max 3GB limit)',
    phone: 'Customer purchases phone',
    commitment: '1 Year (Termination Rs. 600/remaining mo)',
    badge: 'Voice Pal Premium',
    badgeStyle: 'bg-emerald-50 text-emerald-900 border-emerald-300'
  },
  {
    category: '4G Net Pal (Single Play)',
    pkg: 'Net Pal (Data Only)',
    rental: 'Free',
    rentalWithTax: 'Free',
    oldRental: null,
    priceOverriding: 'NA',
    onNetActive: 'NA',
    onNetLeisure: 'NA',
    offNetActive: 'NA',
    offNetLeisure: 'NA',
    freeMinutes: 'NA',
    data: 'Based on the BB Package',
    extraData: 'Standard Extra GB',
    phone: 'NA',
    commitment: 'Standard 4G',
    badge: 'Net Pal Single',
    badgeStyle: 'bg-slate-100 text-slate-800 border-slate-300'
  },
  {
    category: 'Double Play (Voice & BB)',
    pkg: 'Residential (Effective from 05/09/2022)',
    rental: '370 (Voice Rental)',
    rentalWithTax: '525.47 (Voice)',
    oldRental: '310',
    priceOverriding: 'Min: 0 | Max: 1000',
    onNetActive: '1.70 (1-3 min) / 1.50 (>3 min)',
    onNetLeisure: '1.50',
    offNetActive: '2.70',
    offNetLeisure: '2.00',
    freeMinutes: 'NA',
    data: 'Based on the BB Package',
    extraData: 'Standard Extra GB',
    phone: 'CPE / VoLTE phone',
    commitment: 'Standard 4G',
    badge: 'DP Residential',
    badgeStyle: 'bg-blue-50 text-blue-900 border-blue-300'
  },
  {
    category: 'Double Play (Voice & BB)',
    pkg: 'Business',
    rental: '599 (Voice Rental)',
    rentalWithTax: '850.70 (Voice)',
    oldRental: '499',
    priceOverriding: 'Min: 0 | Max: 1000',
    onNetActive: '1.70 (1-3 min) / 1.50 (>3 min)',
    onNetLeisure: '1.50',
    offNetActive: '2.70',
    offNetLeisure: '2.00',
    freeMinutes: '100 (On-net)',
    data: 'Based on the BB Package',
    extraData: 'Standard Extra GB',
    phone: 'CPE / VoLTE phone',
    commitment: 'Standard 4G',
    badge: 'DP Business',
    badgeStyle: 'bg-indigo-50 text-indigo-900 border-indigo-300'
  },
  {
    category: 'Double Play (Voice & BB)',
    pkg: 'Religious (Effective from 05/09/2022)',
    rental: '60 (Voice Rental)',
    rentalWithTax: '85.21 (Voice)',
    oldRental: '50',
    priceOverriding: 'Min: 0 | Max: 1000',
    onNetActive: '1.70 (1-3 min) / 1.50 (>3 min)',
    onNetLeisure: '1.50',
    offNetActive: '2.70',
    offNetLeisure: '2.00',
    freeMinutes: 'NA',
    data: 'Based on the BB Package',
    extraData: 'Standard Extra GB',
    phone: 'CPE / VoLTE phone',
    commitment: 'Standard 4G',
    badge: 'DP Religious',
    badgeStyle: 'bg-amber-50 text-amber-900 border-amber-300'
  },
  {
    category: 'Biz Pal',
    pkg: 'Business',
    rental: '499',
    rentalWithTax: '708.68',
    oldRental: null,
    priceOverriding: 'Min: 0 | Max: 1000',
    onNetActive: '1.90 (1-3 min) / 1.50 (>3 min)',
    onNetLeisure: '1.50',
    offNetActive: '2.90',
    offNetLeisure: '2.00',
    freeMinutes: '100 (On-net)',
    data: 'Based on the BB Package',
    extraData: 'Standard Extra GB',
    phone: 'CPE / VoLTE phone',
    commitment: 'Standard 4G',
    badge: 'Biz Pal Business',
    badgeStyle: 'bg-purple-50 text-purple-900 border-purple-300'
  },
  {
    category: 'Biz Pal',
    pkg: 'Religious',
    rental: '50',
    rentalWithTax: '71.01',
    oldRental: null,
    priceOverriding: 'Min: 0 | Max: 1000',
    onNetActive: '1.90 (1-3 min) / 1.50 (>3 min)',
    onNetLeisure: '1.50',
    offNetActive: '2.90',
    offNetLeisure: '2.00',
    freeMinutes: 'NA',
    data: 'Based on the BB Package',
    extraData: 'Standard Extra GB',
    phone: 'CPE / VoLTE phone',
    commitment: 'Standard 4G',
    badge: 'Biz Pal Religious',
    badgeStyle: 'bg-amber-50 text-amber-900 border-amber-300'
  },
  {
    category: 'Smart Dial / Smart Dial Plus',
    pkg: 'Smart Dial / Plus',
    rental: '0',
    rentalWithTax: '0',
    oldRental: null,
    priceOverriding: 'Min: 0 | Max: 1000',
    onNetActive: '1.90 (1-3 min) / 1.50 (>3 min)',
    onNetLeisure: '1.50',
    offNetActive: '2.90',
    offNetLeisure: '2.00',
    freeMinutes: '100 (On-net)',
    data: 'Based on the BB Package',
    extraData: 'Standard Extra GB',
    phone: 'CPE / VoLTE phone',
    commitment: 'Standard 4G',
    badge: 'Smart Dial Plus',
    badgeStyle: 'bg-cyan-50 text-cyan-900 border-cyan-300'
  }
];

// =========================================================================
// 3. CALL TIME BANDS SPECIFICATION
// =========================================================================
const CALL_TIME_BANDS = [
  {
    band: 'Active Hours (Peak)',
    days: 'Monday to Friday',
    hours: '0700 hrs – 1900 hrs (7:00 AM – 7:00 PM)',
    rule: 'Standard stepped daytime calling tariff applies.'
  },
  {
    band: 'Active Hours (Peak)',
    days: 'Saturday',
    hours: '0700 hrs – 1400 hrs (7:00 AM – 2:00 PM)',
    rule: 'Half-day Saturday active window before leisure transition.'
  },
  {
    band: 'Leisure Hours (Off-Peak)',
    days: 'Monday to Friday',
    hours: '0000 – 0700 hrs & 1900 – 2400 hrs (12am-7am & 7pm-12am)',
    rule: 'Discounted leisure call rates apply automatically.'
  },
  {
    band: 'Leisure Hours (Off-Peak)',
    days: 'Saturday',
    hours: '0000 – 0700 hrs & 1400 – 2400 hrs (Post 2:00 PM Saturday)',
    rule: 'Afternoon & evening weekend leisure tariff.'
  },
  {
    band: 'Leisure Hours (Full Day)',
    days: 'Sunday & Public Holidays',
    hours: 'Full Day (24 Hours) 0000 – 2400 hrs',
    rule: 'All outgoing calls billed at lowest leisure rate 24/7.'
  }
];

// =========================================================================
// 4. VAS BUNDLE DETAILS
// =========================================================================
const VAS_BUNDLES = [
  {
    name: 'Double Play VAS Bundle',
    rental: 'Rs. 50 /= per month',
    rentalWithTax: 'Rs. 71.01 (With Tax 42.02%)',
    features: [
      'CLI (Caller Line Identification)',
      'Call Forwarding',
      'Call Waiting',
      'Conferencing (Three Parties)',
      'Absentee Service',
      'Abbreviated Dialing'
    ],
    note: 'CLI is fully included in the VAS bundle.'
  },
  {
    name: 'Triple Play VAS Bundle',
    rental: 'Rs. 100 /= per month',
    rentalWithTax: 'Rs. 142.02 (With Tax 42.02%)',
    features: [
      'CLI (Caller Line Identification)',
      'Call Forwarding',
      'Call Waiting',
      'Conferencing (Three Parties)',
      'Absentee Service',
      'Abbreviated Dialing'
    ],
    note: 'Included CLI in VAS bundle for Voice + BB + PEO TV customers.'
  }
];

export default function LteVoicePackagesPage() {
  const [activeTab, setActiveTab] = useState<'unlimited' | 'standard' | 'voice_pal_rules' | 'time_bands' | 'vas'>('unlimited');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const ttUnlimitedHome = `SERVICE: SLT 4G VoLTE Voice
PLAN: Unltd LTE Home Double Play Rs.747
SERVICE ORDER TYPE: CREATE (New Customer) / MODIFY (Existing Migration)
PHONE CLASS: 4G LTE Double Play
CUSTOMER SUBCATEGORY: Individual Residencies / Govt Official Residencies
MONTHLY RENTAL: Rs. 747 / month (Postpaid)
CALL ALLOWANCE: 100% UNLIMITED Calls to Any Local Network (On-net & Off-net)
NUMBER FORMAT: 011-3XXXXXX (VoLTE Geographic Landline)
COMMITMENT: NO commitment period
TARGET: VOICE-PROVISIONING / FRONT-OFFICE`;

  const ttVoicePalBasic = `SERVICE: SLT 4G Voice Pal (Single Play Voice)
PLAN: 4G Voice Pal Basic (Rs. 479/=)
SERVICE ORDER TYPE: CREATE / MODIFY
CUSTOMER SUBCATEGORY: Individual Residencies / Business
MONTHLY RENTAL: Rs. 479/= (Postpaid)
FREE ON-NET MINUTES: 300 Minutes
FREE DATA: 200MB (Additional Rs. 0.30/MB capped at 3GB, No Top-up)
PHONE HARDWARE: Customer purchases phone (Internal battery provided initially)
COMMITMENT PERIOD: 1 Year (Early termination fee: Rs. 600/month for remaining months)
IMPORTANT: BB package changes cannot be initiated via Contact Center (Customer must visit RTOM)
TARGET: VOICE-PAL-FULFILLMENT / RTOM`;

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f1f5f9] overflow-y-auto select-none text-slate-800">
      
      {/* UNIFIED SHAREPOINT PORTAL HEADER & 9-TOPIC QUICK SWITCHER */}
      <LteSubpageHeader
        currentTopicId="voice"
        title="LTE Voice Packages & VoLTE Services"
        subtitle="All voice service of SLT 4G LTE provided through VoLTE technology (Since 31st March 2017). High-definition HD voice, flat-rate Unlimited Any-Net Voice plans (Rs. 747), and Standard Voice Pal tariffs. Number series 011-3XXXXXX."
        badge="VoLTE HD Voice"
        badgeStyle="bg-teal-400/20 text-teal-300 border-teal-300/30"
        taxDate="Number Format: 011-3XXXXXX | Circular: 11/4/2024"
        author="Chathurani Rathnayake"
        authorRole="Senior Assistant Manager (Customer Relations)-A7 | Published: 11/4/2024"
        icon={Phone}
        stats={[
          { label: 'Unlimited Any-Net', value: 'Rs. 1,060.89', sub: 'With Tax 42.02% (Base Rs. 747)' },
          { label: 'Voice Pal Basic', value: 'Rs. 680.28', sub: 'With Tax 42.02% (Base Rs. 479)' },
          { label: 'Number Series', value: '011-3XXXXXX', sub: 'LTE Geographical VoLTE' },
          { label: 'Technology', value: '100% VoLTE', sub: 'Active Since March 2017' }
        ]}
      />

      {/* 4. SUB-NAVIGATION TOOLBAR */}
      <div className="bg-white border-b border-slate-300 px-6 py-3.5 sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-3.5">
          
          {/* Main Switcher */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none text-xs">
            <button
              onClick={() => setActiveTab('unlimited')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'unlimited'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Unlimited Voice (Rs. 747)</span>
            </button>
            <button
              onClick={() => setActiveTab('standard')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'standard'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Standard Voice Matrix (Voice Pal / DP / Biz Pal)</span>
            </button>
            <button
              onClick={() => setActiveTab('voice_pal_rules')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'voice_pal_rules'
                  ? 'bg-amber-700 text-white shadow-xs'
                  : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300'
              }`}
            >
              <BatteryCharging className="w-3.5 h-3.5" />
              <span>Voice Pal Hardware &amp; RTOM Rules</span>
            </button>
            <button
              onClick={() => setActiveTab('time_bands')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'time_bands'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Call Time Bands (Active / Leisure)</span>
            </button>
            <button
              onClick={() => setActiveTab('vas')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'vas'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>VAS Bundles &amp; C-Log TT</span>
            </button>
          </div>

          {/* Toggle View Mode & Search */}
          <div className="flex items-center gap-2.5 w-full lg:w-auto justify-end">
            <div className="relative w-full sm:w-44">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search plan..."
                className="w-full bg-slate-50 text-slate-800 text-xs pl-8 pr-7 py-1.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-teal-700"
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

      {/* 5. MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-8 space-y-8">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* ======================================================== */}
          {/* TAB 1: UNLIMITED VOICE PACKAGES (FLAT RATE RS. 747)      */}
          {/* ======================================================== */}
          {activeTab === 'unlimited' && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-teal-100 rounded-xl">
                      <Sparkles className="w-6 h-6 text-teal-700" />
                    </div>
                    <span>Unlimited Any-Net Voice Packages – 4G LTE (Rs. 747 / Month)</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Crystal-clear HD voice calls to ANY local network in Sri Lanka (SLT, Mobitel, Dialog, Airtel, Hutch). <strong>No commitment period</strong>.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-900 font-black text-xs border border-emerald-300">
                    ZERO Usage Charges
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-teal-50 text-teal-900 font-bold text-xs border border-teal-200">
                    Keep Existing 011-3XXXXXX
                  </span>
                </div>
              </div>

              {/* CRITICAL OPERATIONAL SUMMARY BOX */}
              <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 font-black">
                    <CheckSquare className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-black text-emerald-950 text-sm block">Core Advantages for Frontline Agents:</span>
                    <p className="text-slate-700 font-medium">
                      Unlimited calls to all networks • Secure &amp; safe calling • Postpaid package • No dropped calls • No worrying about running out of minutes • <strong>NO commitment period</strong>.
                    </p>
                  </div>
                </div>
                <div className="shrink-0 font-bold text-emerald-900 bg-emerald-100 px-3 py-1.5 rounded-xl border border-emerald-300">
                  <span>Service Order: CREATE &amp; MODIFY</span>
                </div>
              </div>

              {viewMode === 'cards' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {UNLIMITED_VOICE_PACKAGES
                    .filter((pkg) => {
                      if (!searchQuery) return true;
                      const q = searchQuery.toLowerCase();
                      return pkg.name.toLowerCase().includes(q) || pkg.phoneClass.toLowerCase().includes(q);
                    })
                    .map((pkg) => (
                      <div
                        key={pkg.id}
                        className={`bg-white rounded-3xl border-2 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group ${
                          pkg.highlight ? 'border-teal-500 ring-2 ring-teal-500/10' : 'border-slate-200 hover:border-teal-400'
                        }`}
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${pkg.badgeStyle}`}>
                              {pkg.badge}
                            </span>
                            <span className="text-[11px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                              {pkg.commitment}
                            </span>
                          </div>

                          <div>
                            <h3 className="font-black text-lg text-slate-900 group-hover:text-teal-800 transition-colors">
                              {pkg.name}
                            </h3>
                            <span className="text-xs font-semibold text-slate-500 block mt-0.5">
                              Phone Class: <strong className="text-slate-800">{pkg.phoneClass}</strong>
                            </span>
                          </div>

                          {/* Price Block: Customer Pays With Tax Prominent */}
                          <div className="p-4 bg-teal-50/80 rounded-2xl border-2 border-teal-200 space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-300">
                                Customer Pays (With Tax 42.02%)
                              </span>
                              <span className="px-2.5 py-0.5 bg-white rounded-xl border border-teal-200 text-teal-900 font-black text-[11px]">
                                Postpaid
                              </span>
                            </div>
                            <div className="flex items-baseline gap-1 mt-0.5">
                              <span className="text-sm font-bold text-teal-900">Rs.</span>
                              <span className="text-3xl font-black text-teal-950 tracking-tight">{pkg.rentalWithTax}</span>
                              <span className="text-xs text-teal-800 font-bold">/ month</span>
                            </div>
                            <div className="pt-2 border-t border-teal-200/60 flex items-center justify-between text-xs font-semibold text-slate-600">
                              <span>Base Without Tax:</span>
                              <span className="font-mono font-bold text-slate-900">Rs. {pkg.rental} / mo</span>
                            </div>
                          </div>

                          {/* Allowed Customer Subcategories */}
                          <div className="text-xs bg-slate-50 p-3 rounded-2xl border border-slate-100 space-y-1">
                            <span className="font-black text-slate-800 text-[11px] block uppercase tracking-wider">
                              Allowed Customer Subcategories:
                            </span>
                            <ul className="text-slate-600 space-y-0.5 pl-1">
                              {pkg.allowedCategories.map((cat, cIdx) => (
                                <li key={cIdx} className="flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0"></span>
                                  <span className="font-medium text-[11px]">{cat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Advantages */}
                          <div className="space-y-1.5 pt-1">
                            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                              Included Advantages:
                            </span>
                            <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                              {pkg.advantages.slice(0, 4).map((adv, aIdx) => (
                                <li key={aIdx} className="flex items-start gap-1.5 text-[11px]">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                  <span>{adv}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>

                        <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                          <span className="text-[11px] font-mono font-bold text-slate-400">Order: CREATE / MODIFY</span>
                          <button
                            onClick={() => copyToClipboard(`SERVICE: 4G VoLTE Unlimited Voice\nPLAN: ${pkg.name}\nMONTHLY RENTAL: Rs. ${pkg.rental}\nPHONE CLASS: ${pkg.phoneClass}\nCOMMITMENT: None\nALLOWANCE: Unlimited calls to Any Local Network`, pkg.id)}
                            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-teal-50 text-slate-700 hover:text-teal-900 font-bold text-xs flex items-center gap-1.5 transition-colors border border-slate-200"
                          >
                            {copiedId === pkg.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                            <span>{copiedId === pkg.id ? 'Copied Order!' : 'Copy Order'}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              )}

              {viewMode === 'table' && (
                <div className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white font-black">
                          <th className="p-3.5">Price Plan Name</th>
                          <th className="p-3.5 text-teal-300">Monthly With Tax (42.02%)<br/><span className="text-[10px] text-teal-400 font-normal">Customer Pays</span></th>
                          <th className="p-3.5">Without Tax (Rs)</th>
                          <th className="p-3.5">Service Order Type</th>
                          <th className="p-3.5">Voice Class / LTE Package</th>
                          <th className="p-3.5">Allowed Customer Subcategories</th>
                          <th className="p-3.5">Advantages &amp; Rules</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                        {UNLIMITED_VOICE_PACKAGES.map((pkg) => (
                          <tr key={pkg.id} className="hover:bg-teal-50/40 transition-colors">
                            <td className="p-3.5 font-bold text-slate-900">
                              <span className="block text-sm font-black">{pkg.name}</span>
                              <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border inline-block mt-1 ${pkg.badgeStyle}`}>
                                {pkg.badge}
                              </span>
                            </td>
                            <td className="p-3.5 font-mono font-black text-base text-emerald-800 bg-emerald-50/70">
                              Rs. {pkg.rentalWithTax}
                            </td>
                            <td className="p-3.5 font-mono font-bold text-slate-700 text-sm">
                              Rs. {pkg.rental}
                            </td>
                            <td className="p-3.5 font-bold text-slate-700">
                              CREATE &amp; MODIFY
                            </td>
                            <td className="p-3.5 font-semibold text-slate-800">
                              {pkg.phoneClass}
                            </td>
                            <td className="p-3.5 text-slate-600">
                              <ul className="list-disc list-inside space-y-0.5 text-[11px]">
                                {pkg.allowedCategories.map((c, i) => (
                                  <li key={i}>{c}</li>
                                ))}
                              </ul>
                            </td>
                            <td className="p-3.5 text-slate-600 space-y-1">
                              <span className="font-bold text-emerald-700 block">Unlimited Calls to Any Network</span>
                              <span className="text-[11px] text-slate-500 block">HD VoLTE voice • Keep existing number</span>
                              <span className="text-[11px] text-teal-800 font-black block">No commitment period</span>
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

          {/* ======================================================== */}
          {/* TAB 2: STANDARD VOICE PACKAGES MATRIX                    */}
          {/* ======================================================== */}
          {activeTab === 'standard' && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-blue-100 rounded-xl">
                      <PhoneCall className="w-6 h-6 text-[#005696]" />
                    </div>
                    <span>Standard Voice Packages &amp; Tariff Matrix (Effective from 05/09/2022)</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Official call tariff breakdown for 4G Voice Pal (Single Play), 4G Net Pal, Double Play (Residential/Business/Religious), Biz Pal, and Smart Dial.
                  </p>
                </div>
                <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-2xl text-xs font-bold text-[#005696]">
                  <span>Number Series: <strong>011-3XXXXXX</strong></span>
                </div>
              </div>

              {/* Matrix Table */}
              <div className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white font-black">
                        <th className="p-3.5">Category / Package</th>
                        <th className="p-3.5 text-teal-300">Monthly With Tax (42.02%)<br/><span className="text-[10px] text-teal-400 font-normal">Customer Pays</span></th>
                        <th className="p-3.5">Without Tax (Rs)</th>
                        <th className="p-3.5">On-Net (Active)</th>
                        <th className="p-3.5">On-Net (Leisure)</th>
                        <th className="p-3.5">Off-Net (Active)</th>
                        <th className="p-3.5">Off-Net (Leisure)</th>
                        <th className="p-3.5">Free Minutes</th>
                        <th className="p-3.5">Included Data</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      {STANDARD_VOICE_PACKAGES_MATRIX.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                              {row.category}
                            </span>
                            <span className="font-black text-slate-900 text-sm">{row.pkg}</span>
                            <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border inline-block mt-1 ${row.badgeStyle}`}>
                              {row.badge}
                            </span>
                          </td>
                          <td className="p-3.5 font-mono font-black text-sm text-emerald-800 bg-emerald-50/70">
                            {row.rentalWithTax === 'Free' || row.rentalWithTax === '0' ? row.rentalWithTax : `Rs. ${row.rentalWithTax}`}
                          </td>
                          <td className="p-3.5 font-mono font-bold text-slate-700 text-sm">
                            Rs. {row.rental}
                            {row.oldRental && (
                              <span className="text-slate-400 font-normal line-through ml-1.5 text-xs">
                                ({row.oldRental})
                              </span>
                            )}
                          </td>
                          <td className="p-3.5 font-mono text-emerald-800 font-bold">
                            {row.onNetActive !== 'NA' ? `Rs. ${row.onNetActive}` : '—'}
                          </td>
                          <td className="p-3.5 font-mono text-emerald-700 font-semibold">
                            {row.onNetLeisure !== 'NA' ? `Rs. ${row.onNetLeisure}` : '—'}
                          </td>
                          <td className="p-3.5 font-mono text-blue-900 font-bold">
                            {row.offNetActive !== 'NA' ? `Rs. ${row.offNetActive}` : '—'}
                          </td>
                          <td className="p-3.5 font-mono text-blue-700 font-semibold">
                            {row.offNetLeisure !== 'NA' ? `Rs. ${row.offNetLeisure}` : '—'}
                          </td>
                          <td className="p-3.5">
                            {row.freeMinutes !== 'NA' ? (
                              <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 font-black text-xs border border-emerald-300">
                                {row.freeMinutes}
                              </span>
                            ) : (
                              <span className="text-slate-400">None</span>
                            )}
                          </td>
                          <td className="p-3.5 font-semibold text-slate-800">
                            {row.data}
                            {row.extraData && (
                              <span className="text-[10px] text-slate-500 block font-normal">
                                {row.extraData}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Price Overriding Rule Callout */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#005696] shrink-0" />
                  <span className="font-bold text-slate-800">
                    Price Overriding / Selected BB Rental: <strong>Min: 0 | Max: 1000</strong>
                  </span>
                </div>
                <span className="text-slate-500 text-[11px]">
                  Governed by official SLT Customer Relations circular (05/09/2022)
                </span>
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 3: VOICE PAL HARDWARE & RTOM OPERATIONAL RULES        */}
          {/* ======================================================== */}
          {activeTab === 'voice_pal_rules' && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-amber-100 rounded-xl">
                      <BatteryCharging className="w-6 h-6 text-amber-700" />
                    </div>
                    <span>4G Voice Pal Hardware, Commitment &amp; RTOM Operational Rules</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Special conditions and strict procedures governing 4G Voice Pal (Basic &amp; Premium) single play phone services.
                  </p>
                </div>
              </div>

              {/* 4 Critical Rule Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Rule 1: RTOM Exclusive Rule */}
                <div className="bg-red-50 border-2 border-red-300 rounded-3xl p-6 shadow-xs space-y-3">
                  <div className="flex items-center gap-2.5 text-red-900 font-black text-sm uppercase tracking-wide">
                    <ShieldAlert className="w-5 h-5 text-red-600 shrink-0" />
                    <span>RTOM Visit Mandatory for Package Changes</span>
                  </div>
                  <p className="text-xs text-red-950 font-bold leading-relaxed">
                    Voice Pal BB Packages <span className="underline decoration-red-600 font-black">CANNOT be changed through the Contact Center (1212)</span>. The customer must visit their respective Regional Telecom Office (RTOM) to initiate package upgrades or modifications.
                  </p>
                  <div className="p-2.5 bg-white rounded-xl border border-red-200 text-[11px] text-red-900 font-medium">
                    🗣️ <em>&quot;Sir, Voice Pal package change ekak Contact Center eken danna ba, meka RTOM ekata gihin thamai karaganna one.&quot;</em>
                  </div>
                </div>

                {/* Rule 2: Hardware & Battery */}
                <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 shadow-xs space-y-3">
                  <div className="flex items-center gap-2.5 text-slate-900 font-black text-sm uppercase tracking-wide">
                    <Phone className="w-5 h-5 text-teal-600 shrink-0" />
                    <span>Phone Purchase &amp; Internal Battery</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    • The customer has to <strong>purchase the phone hardware</strong>.<br />
                    • The <strong>internal battery is provided initially</strong>. If required, the recommended battery can be purchased and replaced by the customer in the future.
                  </p>
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 font-semibold">
                    Replacement battery models must comply with SLT VoLTE specifications.
                  </div>
                </div>

                {/* Rule 3: 1-Year Commitment & Early Termination */}
                <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-6 shadow-xs space-y-3">
                  <div className="flex items-center gap-2.5 text-amber-950 font-black text-sm uppercase tracking-wide">
                    <Clock className="w-5 h-5 text-amber-700 shrink-0" />
                    <span>Service Commitment &amp; Early Termination Fee</span>
                  </div>
                  <p className="text-xs text-amber-950 leading-relaxed font-semibold">
                    • Standard Voice Pal service commitment period is <strong>1 Year (12 Months)</strong>.<br />
                    • Early Termination Fee: <strong className="text-red-700">Rs. 600/= per month</strong>, applicable for all remaining months of the first year!
                  </p>
                  <div className="p-2.5 bg-white rounded-xl border border-amber-200 text-[11px] text-amber-900 font-bold">
                    ⚠️ Example: If terminated at month 8, customer must pay 4 × Rs. 600 = Rs. 2,400/= penalty.
                  </div>
                </div>

                {/* Rule 4: Data Charging & No Top-Up */}
                <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 shadow-xs space-y-3">
                  <div className="flex items-center gap-2.5 text-slate-900 font-black text-sm uppercase tracking-wide">
                    <Zap className="w-5 h-5 text-blue-600 shrink-0" />
                    <span>Data Limit &amp; No Top-Up Policy</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    • Basic Plan: <strong>Free 200MB</strong> | Premium Plan: <strong>Free 500MB</strong>.<br />
                    • Additional Data charge: <strong>Rs. 0.30 per MB</strong>.<br />
                    • Maximum data limit: <strong>3GB</strong> (excluding free data).<br />
                    • <strong className="text-red-700">NO TOP-UP OPTIONS</strong> are available for Voice Pal!
                  </p>
                  <div className="p-2.5 bg-blue-50 rounded-xl border border-blue-200 text-[11px] text-blue-900 font-semibold">
                    If customer needs high volume data, migrate them to 4G Double Play or LTE Broadband!
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 4: CALL TIME BANDS (ACTIVE VS LEISURE HOURS)         */}
          {/* ======================================================== */}
          {activeTab === 'time_bands' && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-teal-100 rounded-xl">
                      <Clock className="w-6 h-6 text-teal-700" />
                    </div>
                    <span>Call Time Bands Definition (Active vs Leisure Hours)</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Exact billing hour windows for SLT 4G LTE Voice services.
                  </p>
                </div>
              </div>

              {/* Time Bands Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {CALL_TIME_BANDS.map((band, idx) => (
                  <div
                    key={idx}
                    className={`bg-white rounded-3xl border-2 p-5 shadow-xs space-y-3 ${
                      band.band.includes('Active') ? 'border-blue-200' : 'border-emerald-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                        band.band.includes('Active')
                          ? 'bg-blue-100 text-blue-900 border-blue-300'
                          : 'bg-emerald-100 text-emerald-900 border-emerald-300'
                      }`}>
                        {band.band}
                      </span>
                      <span className="text-xs font-bold text-slate-400">{band.days}</span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Time Range</span>
                      <span className="font-mono font-black text-base text-slate-900 block">{band.hours}</span>
                    </div>

                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {band.rule}
                    </p>
                  </div>
                ))}
              </div>

              {/* VoLTE Core Infrastructure Note */}
              <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-teal-900 font-black text-sm uppercase tracking-wide">
                  <ShieldCheck className="w-5 h-5 text-teal-600" />
                  <span>VoLTE Technology Architecture (Active Since 31st March 2017)</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-medium text-slate-600 leading-relaxed">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <strong className="text-slate-900 block mb-1">HD Voice Codec:</strong>
                    Delivers high-definition acoustic fidelity with advanced noise suppression over LTE radio spectrum.
                  </div>
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <strong className="text-slate-900 block mb-1">Concurrent Broadband:</strong>
                    Browsing and download speeds remain unaffected while telephone calls are active on the same terminal.
                  </div>
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <strong className="text-slate-900 block mb-1">Geographical Identification:</strong>
                    Fixed telephone numbering series formatted as <code>011-3XXXXXX</code> (or area prefix <code>0YZ-3XXXXXX</code>).
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 5: VAS BUNDLES & C-LOG TROUBLE TICKETS               */}
          {/* ======================================================== */}
          {activeTab === 'vas' && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-indigo-100 rounded-xl">
                      <Layers className="w-6 h-6 text-indigo-700" />
                    </div>
                    <span>Value-Added Services (VAS Bundles) &amp; C-Log Order Templates</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Feature bundles including CLI, Call Forwarding, Call Waiting, and standard SOD/C-Log templates.
                  </p>
                </div>
              </div>

              {/* VAS Bundles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {VAS_BUNDLES.map((vas, vIdx) => (
                  <div key={vIdx} className="bg-white rounded-3xl border-2 border-indigo-200 p-6 shadow-xs space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-xs font-black uppercase tracking-wider text-indigo-900 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                        {vas.name}
                      </span>
                      <div className="text-right">
                        <span className="font-mono font-black text-sm text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200 block">
                          {vas.rentalWithTax}
                        </span>
                        <span className="text-[10px] text-slate-500 font-bold block mt-0.5">
                          Base: {vas.rental}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[11px] font-black uppercase text-slate-400 block tracking-wider">
                        Included Features:
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {vas.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-1.5 p-2 bg-slate-50 rounded-xl border border-slate-100 text-slate-800 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-2.5 bg-indigo-50/70 rounded-xl border border-indigo-100 text-[11px] text-indigo-900 font-semibold">
                      💡 {vas.note}
                    </div>
                  </div>
                ))}
              </div>

              {/* C-Log Order Templates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                
                {/* Template 1: Unlimited Voice */}
                <div className="bg-slate-900 rounded-3xl border-2 border-slate-800 p-6 shadow-md space-y-3 text-white">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-teal-400" />
                      <span className="font-mono text-xs font-bold text-teal-300">
                        C-Log: Unlimited Home Double Play (Rs. 747)
                      </span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(ttUnlimitedHome, 'tt-unltd')}
                      className="px-3 py-1 bg-teal-600 hover:bg-teal-500 text-white text-xs rounded-xl font-bold flex items-center gap-1.5 transition-colors"
                    >
                      {copiedId === 'tt-unltd' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedId === 'tt-unltd' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="text-teal-200 font-mono text-[11px] leading-relaxed whitespace-pre-wrap p-2.5 bg-black/30 rounded-xl overflow-x-auto">
                    {ttUnlimitedHome}
                  </pre>
                </div>

                {/* Template 2: Voice Pal Basic */}
                <div className="bg-slate-900 rounded-3xl border-2 border-slate-800 p-6 shadow-md space-y-3 text-white">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-amber-400" />
                      <span className="font-mono text-xs font-bold text-amber-300">
                        C-Log: 4G Voice Pal Basic (Rs. 479)
                      </span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(ttVoicePalBasic, 'tt-pal')}
                      className="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-white text-xs rounded-xl font-bold flex items-center gap-1.5 transition-colors"
                    >
                      {copiedId === 'tt-pal' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedId === 'tt-pal' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="text-amber-200 font-mono text-[11px] leading-relaxed whitespace-pre-wrap p-2.5 bg-black/30 rounded-xl overflow-x-auto">
                    {ttVoicePalBasic}
                  </pre>
                </div>

              </div>

            </div>
          )}

          {/* Bottom Sequential Navigation */}
          <div className="flex items-center justify-between pt-6 border-t-2 border-slate-200">
            <Link
              href="/knowledge-hub/4g-lte/cat-6"
              className="text-sm font-bold text-slate-600 hover:text-slate-900 flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back: CAT 6 Charges</span>
            </Link>

            <Link
              href="/knowledge-hub/4g-lte/broadband"
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm flex items-center gap-2 shadow-sm transition-colors"
            >
              <span>Next: LTE BB Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}
