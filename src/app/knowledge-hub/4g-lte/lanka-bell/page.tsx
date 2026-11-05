"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  AlertCircle,
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
  Users,
  Building2,
  Mail,
  Repeat,
  BadgePercent,
  Layers,
  ArrowRightLeft
} from 'lucide-react';

// Official Lanka Bell to SLT Package Mapping Matrix
const MIGRATION_PACKAGES = [
  {
    id: 'starter-pack',
    bellName: 'Starter Pack',
    bellVolume: '55 GB',
    bellRental: '1,140',
    customerBase: '9,120',
    sltPackage: 'Any Joy',
    sltRental: '1,150',
    sltQuota: '22 GB',
    bonusData: '23 GB',
    loyaltyData: '5 GB',
    totalSltData: '50 GB',
    savingsOrDiff: '+ Rs. 10/mo',
    badge: 'Largest Customer Segment (9,120)',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    notes: 'Bonus 23GB + Loyalty 5GB provisioned within 2 weeks of activation. Renews every 30 days.'
  },
  {
    id: 'intro-pack',
    bellName: 'Intro Pack',
    bellVolume: '77 GB',
    bellRental: '1,620',
    customerBase: '2,606',
    sltPackage: 'Any Beat',
    sltRental: '1,550',
    sltQuota: '36 GB',
    bonusData: '41 GB',
    loyaltyData: '5 GB',
    totalSltData: '82 GB',
    savingsOrDiff: 'Save Rs. 70/mo',
    badge: 'Popular Tier (2,606)',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    notes: 'Exact volume match: 36GB standard + 41GB bonus + 5GB loyalty = 82GB total! Monthly rental is Rs. 70 lower than Lanka Bell.'
  },
  {
    id: 'lite-pack',
    bellName: 'Lite Pack',
    bellVolume: '110 GB',
    bellRental: '2,280',
    customerBase: '781',
    sltPackage: 'LTE Flash 5',
    sltRental: '2,350',
    sltQuota: '5GB Daily @ Full Speed',
    bonusData: 'Unlimited @ 1Mbps after daily quota',
    loyaltyData: 'Included in FUP',
    totalSltData: '~150 GB / mo',
    savingsOrDiff: '+ Rs. 70/mo',
    badge: 'Flash Daily High Speed',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
    notes: 'Upgrades user from capped 110GB to 5GB/day (150GB/mo) plus unlimited browsing at 1Mbps afterwards.'
  },
  {
    id: 'family-pack',
    bellName: 'Family Pack',
    bellVolume: '154 GB',
    bellRental: '3,180',
    customerBase: '428',
    sltPackage: 'LTE Flash 5',
    sltRental: '2,350',
    sltQuota: '5GB Daily @ Full Speed',
    bonusData: 'Unlimited @ 1Mbps after daily quota',
    loyaltyData: 'Included in FUP',
    totalSltData: '~150 GB / mo',
    savingsOrDiff: 'Save Rs. 830/mo',
    badge: 'Major Cost Savings (Save Rs. 830)',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    notes: 'Huge customer benefit: Monthly rental drops by Rs. 830/mo while providing 5GB daily quota with unlimited throttled access.'
  },
  {
    id: 'family-lite',
    bellName: 'Family Lite',
    bellVolume: '220 GB',
    bellRental: '4,560',
    customerBase: '117',
    sltPackage: 'LTE Flash 10',
    sltRental: '4,090',
    sltQuota: '10GB Daily @ Full Speed',
    bonusData: 'Unlimited @ 1Mbps after daily quota',
    loyaltyData: 'Included in FUP',
    totalSltData: '~300 GB / mo',
    savingsOrDiff: 'Save Rs. 470/mo',
    badge: 'High Volume Family (117)',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    notes: 'Massive volume upgrade to 10GB daily (~300GB/mo) with Rs. 470/mo savings compared to former Lanka Bell rental.'
  },
  {
    id: 'family-max',
    bellName: 'Family Max',
    bellVolume: '440 GB',
    bellRental: '9,120',
    customerBase: '8',
    sltPackage: 'LTE UNLIMITED 8',
    sltRental: '7,090',
    sltQuota: 'Unlimited @ 8Mbps',
    bonusData: 'No Data Cap',
    loyaltyData: 'Unlimited Access',
    totalSltData: 'Pure Unlimited',
    savingsOrDiff: 'Save Rs. 2,030/mo',
    badge: 'Enterprise Grade (Save Rs. 2,030)',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    notes: 'Pure uncapped unlimited connection at 8Mbps. Saves the subscriber Rs. 2,030 per month on regular billing.'
  }
];

export default function LankaBellMigrationPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'mapping' | 'residential' | 'enterprise' | 'billing' | 'troubleshooting'>('all');
  const [selectedPlanId, setSelectedPlanId] = useState<string>('starter-pack');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const selectedPlan = MIGRATION_PACKAGES.find(p => p.id === selectedPlanId) || MIGRATION_PACKAGES[0];

  const ttResidentialMigration = `SERVICE: SLT-Mobitel 4G LTE Fixed Broadband
ACTION: Lanka Bell to SLT 4G LTE Free Migration
SUBSCRIBER NAME: [CUSTOMER_NAME]
NIC / PASSPORT: [NIC_NUMBER]
LANKA BELL NUMBER: [011-XXXXXXXX]
LANKA BELL OLD PACKAGE: ${selectedPlan.bellName} (${selectedPlan.bellVolume} @ Rs. ${selectedPlan.bellRental})
MAPPED SLT PACKAGE: ${selectedPlan.sltPackage} (Rs. ${selectedPlan.sltRental})
OLD BELL CPE COLLECTED: [YES - SERIAL_NO: XXXXXX]
NEW SLT CPE ISSUED: Free of Charge (Serial No: [SLT_CPE_SN])
BONUS DATA ENTITLEMENT: ${selectedPlan.bonusData} + Loyalty: ${selectedPlan.loyaltyData}
TARGET: CS-NOC / REGIONAL-FULFILLMENT
ACTION: Complete free migration provisioning in CRM. Forward bonus data request to Product Provisioning team.`;

  const ttEnterpriseNumberMigration = `SERVICE: SLT 4G LTE Enterprise / SME Number Porting
CLIENT NAME / COMPANY: [BUSINESS_NAME]
BUSINESS REGISTRATION (BR) / NIC: [BR_OR_NIC_NO]
LANKA BELL NUMBER TO MIGRATE: [011-XXXXXXXX]
LANKA BELL 2024 BILL COPY: [ATTACHED & VERIFIED]
TARGET EMAIL: manushika@slt.com.lk (Eng. Control Architecture & Data Center Strategy)
STATUS: Pre-registration approval requested before CRM provisioning.
STANDARD CHARGES: New 4G LTE connection charges apply. No Fax delivered via 4G.`;

  const ttBillSRWaiver = `SERVICE: SLT 4G LTE Billing Complaint (Bill SR)
FAULT: Erroneous Initial Connection Charge for Lanka Bell Migrated Customer
ACCOUNT NO: [SLT_ACCOUNT_NO]
MIGRATION ORDER REF: [MIGRATION_SR_NO]
DESCRIPTION: Customer migrated under Free Lanka Bell Residential Scheme, but billed for initial connection charge.
RULE: CIRCULAR_LANKA_BELL_FREE_MIGRATION (Updated 29/04/2024)
TARGET: BILLING-DISPUTES / REVENUE-ASSURANCE
ACTION: Create Bill SR with description. Reverse and credit the initial connection fee.`;

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
          <span className="text-cyan-100 font-semibold text-sm">Lanka Bell to SLT 4G LTE Migration SOP</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="hidden md:inline bg-cyan-900/60 border border-cyan-400/40 px-3 py-1 rounded-full text-cyan-200 font-medium">
            SLT-Mobitel Intranet
          </span>
          <div className="w-8 h-8 rounded-full bg-purple-600 border-2 border-purple-300 flex items-center justify-center font-black text-xs text-white shadow-sm">
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
          <span className="font-bold text-purple-900 bg-purple-50 px-2.5 py-0.5 rounded-md border border-purple-200">
            Lanka Bell to SLT 4G
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-mono font-bold flex items-center gap-1.5 shadow-2xs">
            <Repeat className="w-3.5 h-3.5 text-emerald-700" />
            Free Residential Migration
          </span>
          <span className="px-3 py-1 rounded-lg bg-purple-100 text-purple-900 border border-purple-300 text-xs font-mono font-bold">
            Updated: 01/08/2024
          </span>
        </div>
      </div>

      {/* 3. HERO BANNER */}
      <div className="relative bg-gradient-to-r from-purple-950 via-indigo-950 to-slate-950 text-white px-8 py-9 overflow-hidden border-b-4 border-purple-500 shadow-lg">
        <div className="max-w-6xl mx-auto space-y-4 relative z-10">
          
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-purple-500 text-white shadow-sm flex items-center gap-1.5">
              <ArrowRightLeft className="w-3.5 h-3.5" />
              Network Migration &amp; Subscriber Acquisition
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-cyan-200 backdrop-blur-xs">
              Reviewed by Chathurani Rathnayake (SAM CR - A7)
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-emerald-300">
              Enterprise Policy Eff. 01/08/2024
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-purple-500/20 border-2 border-purple-400/50 shadow-inner">
                <Repeat className="w-8 h-8 text-purple-300" />
              </div>
              <span>Lanka Bell to SLT 4G LTE Migration Master SOP</span>
            </h1>

            <p className="text-base md:text-lg text-purple-100/90 max-w-4xl font-medium leading-relaxed">
              Standard operating procedures for acquiring and onboarding existing Lanka Bell wireless subscribers to SLT-Mobitel 4G LTE with 100% Free Connection, CPE swap-out, monthly bonus data, and enterprise number retention.
            </p>
          </div>

          {/* Quick Metrics Cards */}
          <div className="pt-3 grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 block">Residential Connection Fee</span>
              <p className="text-2xl font-black text-white">100% FREE <span className="text-xs font-normal text-slate-300">(CPE Swap-out)</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block">Total Mapped Subscribers</span>
              <p className="text-2xl font-black text-white">13,060 <span className="text-xs font-normal text-slate-300">Active Lines</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block">Bonus Data Renewal</span>
              <p className="text-2xl font-black text-white">Every 30 Days <span className="text-xs font-normal text-slate-300">(Recurring)</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-300 block">Enterprise Number Port</span>
              <p className="text-2xl font-black text-white">Supported <span className="text-xs font-normal text-slate-300">(Keep Bell No)</span></p>
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
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              All Sections
            </button>
            <button
              onClick={() => setActiveTab('mapping')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'mapping'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Package Mapping Matrix</span>
            </button>
            <button
              onClick={() => setActiveTab('residential')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'residential'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Residential Free Migration</span>
            </button>
            <button
              onClick={() => setActiveTab('enterprise')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'enterprise'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Enterprise &amp; SME Numbers</span>
            </button>
            <button
              onClick={() => setActiveTab('billing')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'billing'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Bill SR Guidelines</span>
            </button>
            <button
              onClick={() => setActiveTab('troubleshooting')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'troubleshooting'
                  ? 'bg-purple-700 text-white shadow-sm'
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
              placeholder="Search plan, volume, rule..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 font-medium"
            />
          </div>

        </div>
      </div>

      {/* 5. MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-8 space-y-10">
        <div className="max-w-6xl mx-auto space-y-10">

          {/* ======================================================== */}
          {/* SECTION 1: INTERACTIVE PLAN COMPARISON & MATCHER         */}
          {/* ======================================================== */}
          <div className="bg-white rounded-3xl border-2 border-purple-200 p-7 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-100 pb-4">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                  Interactive Plan Matcher
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  Select Customer's Current Lanka Bell Package:
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Select to preview mapped quota &amp; monthly savings</span>
              </div>
            </div>

            {/* Plan Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {MIGRATION_PACKAGES.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => setSelectedPlanId(pkg.id)}
                  className={`p-3.5 rounded-2xl border-2 text-left transition-all flex flex-col justify-between ${
                    selectedPlanId === pkg.id
                      ? 'border-purple-600 bg-purple-50/70 ring-2 ring-purple-500/20 shadow-xs'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <span className="text-xs font-black block truncate">{pkg.bellName}</span>
                  <span className="text-lg font-black text-[#005696]">{pkg.bellVolume}</span>
                  <span className="text-[11px] font-bold text-slate-500">Rs. {pkg.bellRental}</span>
                </button>
              ))}
            </div>

            {/* Comparison Side-by-Side Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* Old Lanka Bell Plan */}
              <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500 bg-slate-200 px-3 py-1 rounded-full">
                    Former Lanka Bell Service
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    Base: {selectedPlan.customerBase} Subs
                  </span>
                </div>

                <div>
                  <h4 className="text-2xl font-black text-slate-900">{selectedPlan.bellName}</h4>
                  <p className="text-xs text-slate-500 font-medium">Original subscriber broadband agreement</p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-[11px] font-bold text-slate-400 uppercase block">Anytime Volume</span>
                    <span className="text-2xl font-black text-slate-800">{selectedPlan.bellVolume}</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-[11px] font-bold text-slate-400 uppercase block">Monthly Rental</span>
                    <span className="text-2xl font-black text-slate-800">Rs. {selectedPlan.bellRental}</span>
                  </div>
                </div>
              </div>

              {/* Proposed SLT 4G Package */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 text-white border-2 border-purple-500 shadow-lg space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-purple-200 bg-white/10 px-3 py-1 rounded-full">
                    New Mapped SLT Package
                  </span>
                  <span className="text-xs font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-400/40 px-3 py-1 rounded-full">
                    {selectedPlan.savingsOrDiff}
                  </span>
                </div>

                <div>
                  <h4 className="text-2xl font-black text-white">{selectedPlan.sltPackage}</h4>
                  <p className="text-xs text-purple-200 font-medium">{selectedPlan.notes}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-white/10 rounded-xl border border-white/15">
                    <span className="text-[11px] font-bold text-purple-300 uppercase block">SLT Monthly Rental</span>
                    <span className="text-2xl font-black text-emerald-300">Rs. {selectedPlan.sltRental}</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-xl border border-white/15">
                    <span className="text-[11px] font-bold text-purple-300 uppercase block">Standard Quota</span>
                    <span className="text-xl font-black text-white">{selectedPlan.sltQuota}</span>
                  </div>
                </div>

                {/* Bonus Data Breakdown */}
                <div className="p-3.5 bg-white/10 rounded-2xl border border-white/15 text-xs space-y-1.5 font-medium">
                  <div className="flex items-center justify-between">
                    <span className="text-purple-200">Bonus Volume Match:</span>
                    <span className="font-bold text-white">{selectedPlan.bonusData}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-200">Loyalty Special Data:</span>
                    <span className="font-bold text-amber-300">{selectedPlan.loyaltyData}</span>
                  </div>
                  <div className="pt-1 border-t border-white/15 flex items-center justify-between text-emerald-300 font-bold">
                    <span>Effective Volume:</span>
                    <span>{selectedPlan.totalSltData}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ======================================================== */}
          {/* SECTION 2: OFFICIAL PACKAGE MAPPING TABLE                */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'mapping') && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-purple-100 rounded-xl">
                      <Layers className="w-6 h-6 text-purple-700" />
                    </div>
                    <span>Lanka Bell to SLT 4G Package Mapping Matrix</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Internal operational schedule. Migrations must happen to the mapped package or higher rental package only.
                  </p>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-rose-50 text-rose-800 border border-rose-300 font-bold text-xs">
                  Internal Only (Do Not Share Raw Table)
                </span>
              </div>

              {/* Full Table */}
              <div className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold text-xs uppercase tracking-wider">
                        <th colSpan={4} className="p-4 bg-slate-950 border-r border-slate-800 text-slate-300">
                          1. Former Lanka Bell Package
                        </th>
                        <th colSpan={5} className="p-4 bg-purple-950 text-purple-200">
                          2. Proposed SLT-Mobitel Equivalent Package
                        </th>
                      </tr>
                      <tr className="bg-slate-800 text-slate-300 text-xs font-semibold">
                        <th className="p-3.5">Bell Package</th>
                        <th className="p-3.5">Anytime Vol.</th>
                        <th className="p-3.5">Rental (LKR)</th>
                        <th className="p-3.5 border-r border-slate-700">Cust. Base</th>
                        <th className="p-3.5 text-white">SLT Package</th>
                        <th className="p-3.5 text-emerald-400">SLT Rental</th>
                        <th className="p-3.5">Base Quota</th>
                        <th className="p-3.5">Bonus Data</th>
                        <th className="p-3.5 text-amber-300">Loyalty Data</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-sm">
                      {MIGRATION_PACKAGES
                        .filter(item => searchTerm === '' || item.bellName.toLowerCase().includes(searchTerm.toLowerCase()) || item.sltPackage.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((pkg) => (
                          <tr key={pkg.id} className="hover:bg-purple-50/40 transition-colors">
                            <td className="p-4 font-bold text-slate-900">{pkg.bellName}</td>
                            <td className="p-4 font-mono font-bold text-[#005696]">{pkg.bellVolume}</td>
                            <td className="p-4 font-mono text-slate-700">Rs. {pkg.bellRental}</td>
                            <td className="p-4 font-mono text-slate-500 border-r border-slate-200">{pkg.customerBase}</td>
                            <td className="p-4 font-black text-purple-900">{pkg.sltPackage}</td>
                            <td className="p-4 font-mono font-black text-emerald-700">Rs. {pkg.sltRental}</td>
                            <td className="p-4 text-slate-800 font-medium">{pkg.sltQuota}</td>
                            <td className="p-4 text-purple-800 font-bold">{pkg.bonusData}</td>
                            <td className="p-4 text-amber-800 font-bold">{pkg.loyaltyData}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                {/* Important Rules Footer */}
                <div className="p-5 bg-purple-50/50 border-t border-purple-200 space-y-2 text-xs text-purple-950 font-medium">
                  <div className="flex items-center gap-2 font-black text-purple-900">
                    <Info className="w-4 h-4 text-purple-700" />
                    <span>Bonus &amp; Loyalty Data Entitlement Rules:</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 pl-1 text-slate-700">
                    <li><strong>Bonus Data Renewal:</strong> Renewed every 30 days from the date of 1st activation.</li>
                    <li><strong>Loyalty Data Renewal:</strong> Renewed every 30 days. Provisioned only at the initial DSP connection; not applicable for subsequent package changes.</li>
                    <li><strong>Starter &amp; Intro Packs:</strong> Relevant bonus data is provisioned within 2 weeks of new connection activation.</li>
                    <li><strong>Staff Directive:</strong> The mapping table above must not be given or shared directly with customers; staff must verbally explain and provide the new SLT package details.</li>
                  </ul>
                </div>
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 3: RESIDENTIAL CUSTOMERS MIGRATION PROCESS       */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'residential') && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-emerald-100 rounded-xl">
                      <Users className="w-6 h-6 text-emerald-700" />
                    </div>
                    <span>Process of Migration for Residential Customers</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    7-Step standard procedure for processing walk-in Lanka Bell residential customers at Teleshops &amp; RTOMs.
                  </p>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold text-xs">
                  CPE Swap-out Required
                </span>
              </div>

              {/* 7-Step Workflow Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                
                <div className="bg-white rounded-3xl border-2 border-slate-200 p-5 space-y-2 shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center">1</div>
                  <h4 className="font-black text-base text-slate-900">Return Lanka Bell CPE</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    The customer must physically present the existing Lanka Bell LTE CPE unit at the counter for swap-out.
                  </p>
                </div>

                <div className="bg-white rounded-3xl border-2 border-slate-200 p-5 space-y-2 shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center">2</div>
                  <h4 className="font-black text-base text-slate-900">NIC &amp; 2024 Bill Copy</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    The customer must submit their national identity card (NIC/Passport/DL) and a Lanka Bell bill generated in 2024.
                  </p>
                </div>

                <div className="bg-white rounded-3xl border-2 border-slate-200 p-5 space-y-2 shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center">3</div>
                  <h4 className="font-black text-base text-slate-900">CPE Collection &amp; Inventory</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    The existing Lanka Bell CPE is collected, logged, and inventoried by the SLT Regional Team.
                  </p>
                </div>

                <div className="bg-white rounded-3xl border-2 border-emerald-300 bg-emerald-50/40 p-5 space-y-2 shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-emerald-700 text-white font-black text-sm flex items-center justify-center">4</div>
                  <h4 className="font-black text-base text-emerald-950">100% Free SLT Connection</h4>
                  <p className="text-xs text-emerald-900 leading-relaxed font-medium">
                    SLT 4G LTE Connection and new CAT 4 CPE is provided <strong>Free of Charge</strong> for eligible migrating customers.
                  </p>
                </div>

                <div className="bg-white rounded-3xl border-2 border-slate-200 p-5 space-y-2 shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center">5</div>
                  <h4 className="font-black text-base text-slate-900">Minimum Mapped Rental</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Migration is permitted only to the <strong>mapped broadband package or a higher rental package</strong>.
                  </p>
                </div>

                <div className="bg-white rounded-3xl border-2 border-slate-200 p-5 space-y-2 shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center">6</div>
                  <h4 className="font-black text-base text-slate-900">Bonus Provisioning</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    For Starter and Intro pack migrators, the relevant monthly bonus data is provisioned within 2 weeks of activation.
                  </p>
                </div>

              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 4: ENTERPRISE & SME NUMBERS                      */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'enterprise') && (
            <div className="rounded-3xl border-2 border-blue-300 bg-gradient-to-r from-blue-50 via-indigo-50 to-slate-50 p-7 shadow-xs space-y-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-blue-200 pb-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-xs shrink-0">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-black uppercase tracking-wider text-blue-800 bg-blue-200/80 px-3 py-0.5 rounded-full">
                      Enterprise &amp; SME Migration Policy (Eff. 01/08/2024)
                    </span>
                    <h3 className="text-2xl font-black text-blue-950">
                      Lanka Bell Telephone Numbers Provided via SLT 4G LTE
                    </h3>
                    <p className="text-sm text-blue-900 font-medium">
                      Corporate and SME customers can preserve and transfer their existing Lanka Bell phone numbers to SLT 4G.
                    </p>
                  </div>
                </div>
              </div>

              {/* Enterprise Rules Checklist */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="bg-white p-5 rounded-2xl border border-blue-200 space-y-2">
                  <h4 className="font-black text-sm text-blue-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Customer Validation Process (Compulsory):</span>
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside font-medium">
                    <li>The customer must provide a <strong>Lanka Bell bill generated in 2024</strong>.</li>
                    <li>The bill name <strong>must match the customer's NIC, passport, driving license, or Business Registration (BR)</strong>.</li>
                    <li>If the bill does not match the customer identity, <strong>the same number cannot be issued</strong>.</li>
                    <li>The front office officer must file all supporting documents for future audit reference.</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-blue-200 space-y-2">
                  <h4 className="font-black text-sm text-blue-900 flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-[#005696]" />
                    <span>Engineering Notification &amp; Business Rules:</span>
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside font-medium">
                    <li>The Lanka Bell number to be migrated <strong>MUST be communicated to Eng. Control Architecture &amp; Data Center Strategy (<span className="text-[#005696] font-bold">manushika@slt.com.lk</span>)</strong> before the service is registered in CRM.</li>
                    <li><strong>Fax Services will NOT be delivered via 4G LTE</strong> (Voice &amp; Data only).</li>
                    <li>Service is provided as a new connection with standard charges applicable to 4G LTE.</li>
                  </ul>
                </div>

              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 5: BILL SR & CHARGING DISPUTES                   */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'billing') && (
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-amber-100 rounded-xl">
                    <AlertCircle className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      Billing Complaints &amp; Bill SR Guidelines (Updated 29/04/2024)
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Operational directive for handling initial connection charge disputes on migrated accounts.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold bg-amber-100 text-amber-900 px-3 py-1 rounded-md">
                  Eff. 29/04/2024
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 font-medium space-y-2">
                <p>
                  • <strong>Standard Practice:</strong> It is <strong>NOT required to create a Bill SR</strong> for customers billed for the initial charge under routine circumstances.
                </p>
                <p>
                  • <strong>Customer Escalations:</strong> However, if a customer is distressed or insists on a formal complaint regarding initial fee billing on a free migration order, staff are authorized to <strong>create a Bill SR</strong> with full documentation in the ticket description.
                </p>
                <p>
                  • <strong>Error Resolution:</strong> If you identify customers erroneously billed for the initial connection charge under the Free Residential Scheme, please create a Bill SR for immediate reversal.
                </p>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 6: C-LOG TROUBLE TICKETS & ACTION COPIES         */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'troubleshooting') && (
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-purple-100 rounded-xl">
                      <FileText className="w-6 h-6 text-purple-700" />
                    </div>
                    <span>C-Log Trouble Ticket &amp; Order Fulfillment Templates</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Pre-formatted service orders for residential migration fulfillment, enterprise email escalation, and bill waiver requests.
                  </p>
                </div>
              </div>

              {/* Template 1: Residential Migration */}
              <div className="bg-slate-900 rounded-3xl border-2 border-slate-800 p-6 shadow-md space-y-3 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <Repeat className="w-5 h-5 text-purple-400" />
                    <span className="font-mono text-sm font-bold text-purple-300">
                      C-Log Service Order: Lanka Bell to SLT Free Residential Migration ({selectedPlan.bellName})
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(ttResidentialMigration, 'tt-res-mig')}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs rounded-xl font-bold flex items-center gap-2 transition-colors shadow-xs"
                  >
                    {copiedId === 'tt-res-mig' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedId === 'tt-res-mig' ? 'Copied Order!' : 'Copy Order Template'}</span>
                  </button>
                </div>
                <pre className="text-lime-300 font-mono text-xs leading-relaxed whitespace-pre-wrap p-2 bg-black/30 rounded-xl overflow-x-auto">
                  {ttResidentialMigration}
                </pre>
              </div>

              {/* Template 2: Enterprise Email Escalation */}
              <div className="bg-slate-900 rounded-3xl border-2 border-slate-800 p-6 shadow-md space-y-3 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <Building2 className="w-5 h-5 text-blue-400" />
                    <span className="font-mono text-sm font-bold text-blue-300">
                      Email Template: Enterprise / SME Number Porting to manushika@slt.com.lk
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(ttEnterpriseNumberMigration, 'tt-ent-port')}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded-xl font-bold flex items-center gap-2 transition-colors shadow-xs"
                  >
                    {copiedId === 'tt-ent-port' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedId === 'tt-ent-port' ? 'Copied Email!' : 'Copy Email Template'}</span>
                  </button>
                </div>
                <pre className="text-cyan-200 font-mono text-xs leading-relaxed whitespace-pre-wrap p-2 bg-black/30 rounded-xl overflow-x-auto">
                  {ttEnterpriseNumberMigration}
                </pre>
              </div>

              {/* Template 3: Bill SR Waiver */}
              <div className="bg-slate-900 rounded-3xl border-2 border-slate-800 p-6 shadow-md space-y-3 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <AlertCircle className="w-5 h-5 text-amber-400" />
                    <span className="font-mono text-sm font-bold text-amber-300">
                      C-Log Bill SR: Erroneous Initial Charge Reversal
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(ttBillSRWaiver, 'tt-billsr')}
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs rounded-xl font-bold flex items-center gap-2 transition-colors shadow-xs"
                  >
                    {copiedId === 'tt-billsr' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedId === 'tt-billsr' ? 'Copied Bill SR!' : 'Copy Bill SR'}</span>
                  </button>
                </div>
                <pre className="text-amber-200 font-mono text-xs leading-relaxed whitespace-pre-wrap p-2 bg-black/30 rounded-xl overflow-x-auto">
                  {ttBillSRWaiver}
                </pre>
              </div>

            </div>
          )}

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between pt-6 border-t-2 border-slate-200">
            <Link
              href="/knowledge-hub/4g-lte/other-charges"
              className="text-sm font-bold text-slate-600 hover:text-slate-900 flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Other Charges</span>
            </Link>

            <Link
              href="/knowledge-hub/4g-lte/storage"
              className="px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-sm flex items-center gap-2 shadow-sm transition-colors"
            >
              <span>Next: SLT Storage (Eazy Storage)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}

