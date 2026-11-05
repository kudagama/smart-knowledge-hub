"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import LteSubpageHeader from '../_components/LteSubpageHeader';
import {
  Server,
  Cloud,
  HardDrive,
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
  Lock,
  Share2,
  FolderUp,
  Smartphone,
  CreditCard,
  Layers,
  Laptop,
  Coins,
  BadgePercent,
  XCircle,
  BookOpen
} from 'lucide-react';

// Popular Standard Storage Packages
const EXISTING_STORAGE_PACKAGES = [
  { size: '20 GB', rental: '350', perGb: 'Rs. 17.50 / GB', bestFor: 'Casual phone photo backup & contacts sync' },
  { size: '50 GB', rental: '500', perGb: 'Rs. 10.00 / GB', bestFor: 'Active smartphone user photos, documents & videos' },
  { size: '100 GB', rental: '850', perGb: 'Rs. 8.50 / GB', bestFor: 'Family sharing & work documents archive' },
  { size: '200 GB', rental: '1,700', perGb: 'Rs. 8.50 / GB', bestFor: 'Content creators, 4K video clips & PC backup' },
  { size: '500 GB', rental: '3,100', perGb: 'Rs. 6.20 / GB', bestFor: 'Small office / remote team collaboration hub' },
  { size: '1,000 GB (1 TB)', rental: '5,600', perGb: 'Rs. 5.60 / GB', bestFor: 'Enterprise terabyte archive & media vault' }
];

// 27 New Customized Package Tiers (Exact matrix from official circular)
const NEW_TIERS_ROW1 = [
  { size: '20 GB', rental: '140', perGb: 'Rs. 7.00/GB' },
  { size: '30 GB', rental: '210', perGb: 'Rs. 7.00/GB' },
  { size: '40 GB', rental: '280', perGb: 'Rs. 7.00/GB' },
  { size: '50 GB', rental: '350', perGb: 'Rs. 7.00/GB' },
  { size: '60 GB', rental: '420', perGb: 'Rs. 7.00/GB' },
  { size: '70 GB', rental: '490', perGb: 'Rs. 7.00/GB' },
  { size: '80 GB', rental: '560', perGb: 'Rs. 7.00/GB' },
  { size: '90 GB', rental: '630', perGb: 'Rs. 7.00/GB' },
  { size: '100 GB', rental: '700', perGb: 'Rs. 7.00/GB' }
];

const NEW_TIERS_ROW2 = [
  { size: '200 GB', rental: '1,400', perGb: 'Rs. 7.00/GB' },
  { size: '300 GB', rental: '2,100', perGb: 'Rs. 7.00/GB' },
  { size: '400 GB', rental: '2,800', perGb: 'Rs. 7.00/GB' },
  { size: '500 GB', rental: '3,500', perGb: 'Rs. 7.00/GB' },
  { size: '600 GB', rental: '4,200', perGb: 'Rs. 7.00/GB' },
  { size: '700 GB', rental: '4,900', perGb: 'Rs. 7.00/GB' },
  { size: '800 GB', rental: '5,600', perGb: 'Rs. 7.00/GB' },
  { size: '900 GB', rental: '6,300', perGb: 'Rs. 7.00/GB' },
  { size: '1,000 GB (1TB)', rental: '7,000', perGb: 'Rs. 7.00/GB' }
];

const NEW_TIERS_ROW3 = [
  { size: '2 TB', rental: '9,450', perGb: 'Rs. 4.61/GB' },
  { size: '3 TB', rental: '12,600', perGb: 'Rs. 4.10/GB' },
  { size: '4 TB', rental: '18,900', perGb: 'Rs. 4.61/GB' },
  { size: '5 TB', rental: '24,500', perGb: 'Rs. 3.98/GB' },
  { size: '6 TB', rental: '31,500', perGb: 'Rs. 4.27/GB' },
  { size: '7 TB', rental: '35,000', perGb: 'Rs. 4.88/GB' },
  { size: '8 TB', rental: '39,900', perGb: 'Rs. 4.87/GB' },
  { size: '9 TB', rental: '42,000', perGb: 'Rs. 4.56/GB' },
  { size: '10 TB', rental: '44,800', perGb: 'Rs. 4.38/GB' }
];

// Historical / Old Legacy Packages (Eff. 01/10/2021)
const LEGACY_STORAGE_PACKAGES = [
  { pkg: 'Package 1', size: '10 GB', oldRental: '50/=', currentEquivalent: '5 GB Free Trial or 20 GB (Rs. 140)', status: 'Grandfathered' },
  { pkg: 'Package 2', size: '50 GB', oldRental: '290/=', currentEquivalent: '50 GB New Customized (Rs. 350)', status: 'Grandfathered' },
  { pkg: 'Package 3', size: '100 GB', oldRental: '490/=', priorRental: '250/=', currentEquivalent: '100 GB New Customized (Rs. 700)', status: 'Grandfathered' },
  { pkg: 'Package 4', size: '250 GB', oldRental: '1,190/=', currentEquivalent: '300 GB New Customized (Rs. 2,100)', status: 'Grandfathered' },
  { pkg: 'Package 5', size: '500 GB', oldRental: '2,340/=', currentEquivalent: '500 GB New Customized (Rs. 3,500)', status: 'Grandfathered' },
  { pkg: 'Package 6', size: '1,000 GB (1 TB)', oldRental: '4,675/=', currentEquivalent: '1 TB New Customized (Rs. 7,000)', status: 'Grandfathered' }
];

export default function SltStoragePage() {
  const [activeTab, setActiveTab] = useState<'all' | 'packages' | 'legacy' | 'how-to' | 'unsubscribe' | 'apps' | 'troubleshooting'>('all');
  const [selectedStorageSize, setSelectedStorageSize] = useState<string>('50 GB');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const ttEazyStorageProvisioning = `SERVICE: SLT Eazy Storage (Cloud Backup & Sync)
ACTION: Account Provisioning / Plan Upgrade
ACCOUNT NO / SERVICE ID: [011-2XXXXXX / BROADBAND_ACCOUNT]
SUBSCRIBER NAME: [CUSTOMER_NAME]
SELECTED STORAGE TIER: ${selectedStorageSize}
BILLING MODE: [Add to SLT Monthly Bill (Postpaid) / Credit Card (Prepaid/Non-SLT)]
PORTAL USERNAME / EMAIL: [CUSTOMER_EMAIL]
DATA CONSUMPTION RULE: Data-Free for SLT Broadband (No internet quota deduction)
TARGET: VAS-PROVISIONING / CLOUD-HELPDESK
ACTION: Initialize Eazy Storage quota in backend and map billing subscription.`;

  const ttEazyStorageSupport = `SERVICE: SLT Eazy Storage Technical Support
FAULT: [Password Reset / Sync Failure / Quota Exceeded / Mobile App Login Error]
PORTAL USERNAME / EMAIL: [CUSTOMER_EMAIL]
SLT BROADBAND ACC: [ACCOUNT_NO]
DEVICE: [Android / iOS / Windows Desktop / Web Browser]
ERROR MESSAGE: [DESCRIBE_ERROR]
TARGET: IT-HELPDESK / CLOUD-STORAGE-TEAM
ACTION: Verify subscriber LDAP credential and sync state in https://storage.slt.lk/account/admin/login.`;

  const ttEazyStorageUnsubscribe = `SERVICE: SLT Eazy Storage (Cloud Backup)
ACTION: Account Unsubscription / Cancellation Request
ACCOUNT NO / SERVICE ID: [011-2XXXXXX / BROADBAND_ACCOUNT]
SUBSCRIBER NAME: [CUSTOMER_NAME]
CURRENT STORAGE TIER: [e.g. 50GB / 100GB / Legacy Package]
REASON FOR CANCELLATION: [Customer Request / Service Not Required / Cost]
UNSUBSCRIBE MODE: [Remove from SLT Monthly Bill / Cancel Credit Card Auto-Renew]
DATA RETENTION NOTICE: Customer informed of 30-day grace period to download files prior to purge.
TARGET: BILLING-VAS / IT-STORAGE-ADMIN
ACTION: Terminate active monthly subscription in storage.slt.lk operator portal.`;

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f1f5f9] overflow-y-auto select-none text-slate-800">
      
      {/* UNIFIED SHAREPOINT PORTAL HEADER & 9-TOPIC QUICK SWITCHER */}
      <LteSubpageHeader
        currentTopicId="storage"
        title="SLT Storage (Eazy Storage Cloud)"
        subtitle="SLT-Mobitel high-speed private cloud backup, sync, and family sharing solution. Hosted securely inside SLT state-of-the-art national data centers with 27 customized tiers and 100% free data usage for broadband customers."
        badge="Cloud Sync"
        badgeStyle="bg-cyan-400/20 text-cyan-300 border-cyan-300/30"
        taxDate="DATA FREE for SLT BB | Circular: PGW-BP-POS-02"
        author="Mohamed Riyas"
        authorRole="Contact Centre Associate - A11 | Published: 5/24/2023"
        icon={Cloud}
        stats={[
          { label: 'Free Trial', value: '5 GB', sub: 'Zero Registration Fee' },
          { label: 'Entry Tier', value: 'Rs. 140/=', sub: '20 GB Storage' },
          { label: 'Cloud Quota', value: 'FREE', sub: 'Zero Data Deduction' },
          { label: 'Max Capacity', value: '10 TB', sub: 'Enterprise Archiving' }
        ]}
      />

      {/* 4. NAVIGATION TOOLBAR */}
      <div className="bg-white border-b border-slate-300 px-6 py-3.5 sticky top-0 z-20 shadow-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3.5">
          
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none text-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-cyan-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              All Sections
            </button>
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'packages'
                  ? 'bg-cyan-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Current Packages (27 Tiers)</span>
            </button>
            <button
              onClick={() => setActiveTab('legacy')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'legacy'
                  ? 'bg-amber-700 text-white shadow-sm'
                  : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300'
              }`}
            >
              <History className="w-4 h-4" />
              <span>Legacy / Old Packages (2021)</span>
            </button>
            <button
              onClick={() => setActiveTab('how-to')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'how-to'
                  ? 'bg-cyan-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>How to Subscribe</span>
            </button>
            <button
              onClick={() => setActiveTab('unsubscribe')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'unsubscribe'
                  ? 'bg-rose-700 text-white shadow-sm'
                  : 'bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200'
              }`}
            >
              <XCircle className="w-4 h-4" />
              <span>Unsubscribe SOP</span>
            </button>
            <button
              onClick={() => setActiveTab('apps')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'apps'
                  ? 'bg-cyan-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Web &amp; Mobile Setup</span>
            </button>
            <button
              onClick={() => setActiveTab('troubleshooting')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'troubleshooting'
                  ? 'bg-cyan-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>C-Log Trouble Tickets</span>
            </button>
          </div>

          {/* Direct Portal Link */}
          <div className="shrink-0 flex items-center gap-2">
            <a
              href="https://storage.slt.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-cyan-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
            >
              <span>Visit storage.slt.lk</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>

      {/* 5. MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-8 space-y-10">
        <div className="max-w-6xl mx-auto space-y-10">

          {/* ======================================================== */}
          {/* SECTION 1: CORE VALUE PROPOSITION & PDF GUIDELINES       */}
          {/* ======================================================== */}
          <div className="bg-white rounded-3xl border-2 border-cyan-200 p-7 shadow-xs space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-cyan-100 pb-5">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-wider text-cyan-800 bg-cyan-100 px-3 py-1 rounded-full">
                    What is Eazy Storage?
                  </span>
                  <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
                    Rebranded from SLT Storage
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Private Cloud Storage, File Syncing &amp; Family Sharing
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  SLT Storage (now <strong>Eazy Storage</strong>) is a cloud storage, file sync, and sharing solution designed for universal access through mobile apps and web browser. Securely store and collaborate on files, photos, messages, contacts, and documents inside SLT&apos;s state-of-the-art Tier-3 data centers with end-to-end encryption.
                </p>
              </div>

              {/* 5 Key Highlights */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 space-y-2 text-xs text-emerald-950 font-bold shrink-0">
                <span className="text-emerald-900 font-black block uppercase tracking-wider">Uncomparable Benefits:</span>
                <ul className="space-y-1.5 font-medium text-slate-700">
                  <li className="flex items-center gap-1.5 text-emerald-900 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>DATA FREE</strong> for all SLT Broadband customers (Zero Quota)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>27 Customized package tiers + 5GB Always Free Trial</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Password protection &amp; file sharing without expiration date</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Automatic sync for mobile photos, videos, contacts</span>
                  </li>
                  <li className="flex items-center gap-1.5 text-blue-900 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Registration Charge: <strong>Rs. 0.00 (100% Free)</strong></span>
                  </li>
                  <li className="flex items-center gap-1.5 text-purple-900 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Staff Sales Commissions on new subscriber onboarding</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Official PDF User Manuals Download Strip */}
            <div className="space-y-2.5">
              <span className="text-xs font-black uppercase tracking-wider text-slate-400 block">
                Official Operation Manuals, Circulars &amp; User Guides:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); alert("Opening Eazy Storage General User Manual [PDF] from SharePoint..."); }}
                  className="p-3 bg-slate-50 hover:bg-cyan-50 rounded-2xl border border-slate-200 hover:border-cyan-300 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-cyan-700" />
                    <span className="text-xs font-bold text-slate-800 group-hover:text-cyan-900">General Manual</span>
                  </div>
                  <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-700" />
                </a>

                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); alert("Opening Eazy Storage Product Presentation / Awareness Guide (updated 07/06/23)..."); }}
                  className="p-3 bg-slate-50 hover:bg-cyan-50 rounded-2xl border border-slate-200 hover:border-cyan-300 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-blue-700" />
                    <span className="text-xs font-bold text-slate-800 group-hover:text-blue-900">Product Presentation (23)</span>
                  </div>
                  <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700" />
                </a>

                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); alert("Opening Eazy Storage Sales Portal User Guide (updated 21/10/21)..."); }}
                  className="p-3 bg-slate-50 hover:bg-cyan-50 rounded-2xl border border-slate-200 hover:border-cyan-300 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-4 h-4 text-purple-700" />
                    <span className="text-xs font-bold text-slate-800 group-hover:text-purple-900">Sales Portal Guide</span>
                  </div>
                  <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-700" />
                </a>

                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); alert("Opening Eazy Storage Lunch Time Discussion Notes (23/11/22)..."); }}
                  className="p-3 bg-slate-50 hover:bg-cyan-50 rounded-2xl border border-slate-200 hover:border-cyan-300 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-amber-700" />
                    <span className="text-xs font-bold text-slate-800 group-hover:text-amber-900">Discussion Notes (22)</span>
                  </div>
                  <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-700" />
                </a>
              </div>
            </div>

            {/* Terms and Conditions Note */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1.5 font-medium leading-relaxed">
              <span className="font-bold text-slate-800 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-slate-500" />
                <span>Terms and Conditions (Official Acceptable Use Policy):</span>
              </span>
              <ul className="list-disc list-inside space-y-1 pl-1">
                <li>Above package charges are exclusive of government taxes. Relevant taxes will be applicable at the time of purchase.</li>
                <li>Use of the services is subject to the SLT Acceptable Use Policy and Storage Terms of Service.</li>
                <li>SLT may make commercially reasonable updates to the Services from time to time. If SLT makes a material change, SLT will inform the Customer, provided that Customer has subscribed to be informed.</li>
              </ul>
            </div>

          </div>

          {/* ======================================================== */}
          {/* SECTION 2: 27 NEW CUSTOMIZED PACKAGE TIERS MATRIX        */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'packages') && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-blue-100 rounded-xl">
                      <Layers className="w-6 h-6 text-blue-700" />
                    </div>
                    <span>27 New Customized Package Tiers (Exact Circular Rates)</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Structured in 3 distinct blocks of 9 tiers each: 20GB–100GB (Rs. 7/GB), 200GB–1,000GB (Rs. 7/GB), and Enterprise 2TB–10TB (&lt; Rs. 5/GB).
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-900 font-bold text-xs border border-emerald-300">
                    5 GB Always Free Trial
                  </span>
                </div>
              </div>

              {/* 27 Tiers Matrix Table */}
              <div className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-xs space-y-6 p-6">
                
                {/* Block 1: 20 GB to 100 GB */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-xs uppercase tracking-wider text-cyan-900 bg-cyan-100 px-3 py-1 rounded-md">
                      Block 1: 20 GB – 100 GB (10 GB Steps @ Rs. 70 per 10 GB)
                    </h4>
                    <span className="text-[11px] font-bold text-slate-500">Unit Rate: Rs. 7.00 / GB</span>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-center text-xs border-collapse">
                      <thead>
                        <tr className="bg-amber-400 text-slate-900 font-black">
                          <th className="p-3 border-r border-amber-500 text-left bg-amber-500 text-white">DATA ALLOCATED</th>
                          {NEW_TIERS_ROW1.map((t, idx) => (
                            <th key={idx} className="p-3 border-r border-amber-300 last:border-0">{t.size}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-amber-50/70 font-black text-slate-800">
                          <td className="p-3 border-r border-slate-200 font-bold text-slate-700 text-left bg-slate-100">MONTHLY RENTAL (Rs)</td>
                          {NEW_TIERS_ROW1.map((t, idx) => (
                            <td key={idx} className="p-3 border-r border-slate-200 last:border-0 font-mono text-cyan-950 text-sm">
                              {t.rental}
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Block 2: 200 GB to 1,000 GB (1 TB) */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-xs uppercase tracking-wider text-blue-900 bg-blue-100 px-3 py-1 rounded-md">
                      Block 2: 200 GB – 1,000 GB (1 TB) (100 GB Steps @ Rs. 700 per 100 GB)
                    </h4>
                    <span className="text-[11px] font-bold text-slate-500">Unit Rate: Rs. 7.00 / GB</span>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-center text-xs border-collapse">
                      <thead>
                        <tr className="bg-amber-400 text-slate-900 font-black">
                          <th className="p-3 border-r border-amber-500 text-left bg-amber-500 text-white">DATA ALLOCATED</th>
                          {NEW_TIERS_ROW2.map((t, idx) => (
                            <th key={idx} className="p-3 border-r border-amber-300 last:border-0">{t.size}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-amber-50/70 font-black text-slate-800">
                          <td className="p-3 border-r border-slate-200 font-bold text-slate-700 text-left bg-slate-100">MONTHLY RENTAL (Rs)</td>
                          {NEW_TIERS_ROW2.map((t, idx) => (
                            <td key={idx} className="p-3 border-r border-slate-200 last:border-0 font-mono text-blue-950 text-sm">
                              {t.rental}
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Block 3: Enterprise Terabytes (2 TB to 10 TB) */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-xs uppercase tracking-wider text-emerald-900 bg-emerald-100 px-3 py-1 rounded-md">
                      Block 3: Enterprise Terabytes (2 TB – 10 TB High Capacity Tiers)
                    </h4>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">High Volume Discount</span>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-center text-xs border-collapse">
                      <thead>
                        <tr className="bg-amber-400 text-slate-900 font-black">
                          <th className="p-3 border-r border-amber-500 text-left bg-amber-500 text-white">DATA ALLOCATED</th>
                          {NEW_TIERS_ROW3.map((t, idx) => (
                            <th key={idx} className="p-3 border-r border-amber-300 last:border-0">{t.size}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-amber-50/70 font-black text-slate-800">
                          <td className="p-3 border-r border-slate-200 font-bold text-slate-700 text-left bg-slate-100">MONTHLY RENTAL (Rs)</td>
                          {NEW_TIERS_ROW3.map((t, idx) => (
                            <td key={idx} className="p-3 border-r border-slate-200 last:border-0 font-mono text-emerald-950 text-sm">
                              {t.rental}
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 3: POPULAR EXISTING PACKAGES (CARDS)             */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'packages') && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-cyan-100 rounded-xl">
                      <HardDrive className="w-6 h-6 text-cyan-700" />
                    </div>
                    <span>Popular Existing Packages (Standard Cloud Tiers)</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Standard monthly storage plans for individual subscribers and household backup.
                  </p>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-cyan-50 text-cyan-900 border border-cyan-300 font-bold text-xs">
                  Zero Data Usage on SLT BB
                </span>
              </div>

              {/* 6 Popular Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {EXISTING_STORAGE_PACKAGES.map((pkg, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl border-2 border-slate-200 hover:border-cyan-500 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-cyan-50 text-cyan-800 rounded-full text-xs font-black">
                          {pkg.size}
                        </span>
                        <span className="text-[11px] font-bold text-slate-400">
                          {pkg.perGb}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <div className="text-xs text-slate-500 font-bold">Monthly Rental</div>
                        <div className="flex items-baseline gap-1 text-slate-900">
                          <span className="text-xs font-bold text-slate-500">Rs.</span>
                          <span className="text-3xl font-black text-cyan-700 group-hover:text-cyan-800 transition-colors">
                            {pkg.rental}
                          </span>
                          <span className="text-xs text-slate-400 font-bold">/month</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 font-medium leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        {pkg.bestFor}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedStorageSize(pkg.size)}
                        className={`text-xs font-bold px-3 py-1.5 rounded-xl transition-all ${
                          selectedStorageSize === pkg.size
                            ? 'bg-cyan-700 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {selectedStorageSize === pkg.size ? 'Selected for TT' : 'Select for C-Log'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 4: HISTORICAL / LEGACY PACKAGES (SLT STORAGE - OLD) */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'legacy') && (
            <div className="bg-amber-50/50 rounded-3xl border-2 border-amber-300 p-7 shadow-xs space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-amber-200 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-amber-600 text-white text-xs font-black uppercase tracking-wider rounded-lg">
                      SharePoint Archive: SLT Storage - OLD
                    </span>
                    <span className="text-xs font-bold text-amber-900">
                      Author: Mohamed Riyas (A11) | Published: 5/24/2023
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-amber-950 flex items-center gap-2.5">
                    <History className="w-6 h-6 text-amber-700" />
                    <span>Legacy Storage Packages (Last Updated: 01/10/2021)</span>
                  </h3>
                  <p className="text-xs text-amber-900/80 font-medium">
                    Historical package plans for grandfathered customers who subscribed prior to the 2024/2025 Eazy Storage rebrand.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-2xl border border-amber-300 text-xs text-amber-900 font-bold shrink-0">
                  <span>Operator Login: </span>
                  <a
                    href="https://storage.slt.lk/operator/site/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-700 font-mono ml-1"
                  >
                    https://storage.slt.lk/operator/site/login
                  </a>
                </div>
              </div>

              {/* Legacy Package Table */}
              <div className="bg-white rounded-2xl border border-amber-200 overflow-hidden shadow-2xs">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="bg-amber-100 text-amber-950 font-black border-b border-amber-200">
                      <th className="p-3.5">Package</th>
                      <th className="p-3.5">Capacity</th>
                      <th className="p-3.5">Old Monthly Charge (Rs.)</th>
                      <th className="p-3.5">Current Equivalent (New Scheme)</th>
                      <th className="p-3.5 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {LEGACY_STORAGE_PACKAGES.map((row, idx) => (
                      <tr key={idx} className="hover:bg-amber-50/40">
                        <td className="p-3.5 font-bold text-slate-900">{row.pkg}</td>
                        <td className="p-3.5 font-mono font-bold text-cyan-800">{row.size}</td>
                        <td className="p-3.5 font-mono font-bold text-slate-900">
                          Rs. {row.oldRental}
                          {row.priorRental && (
                            <span className="text-slate-400 font-normal line-through ml-2">
                              (Prior: Rs. {row.priorRental})
                            </span>
                          )}
                        </td>
                        <td className="p-3.5 text-slate-600">
                          <span className="px-2 py-0.5 bg-cyan-50 text-cyan-800 rounded font-bold border border-cyan-200">
                            {row.currentEquivalent}
                          </span>
                        </td>
                        <td className="p-3.5 text-right">
                          <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-full font-bold text-[11px]">
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Legacy Migration & Handling Advisory */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-2xl border border-amber-200 space-y-2 text-xs">
                  <span className="font-bold text-amber-950 flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-amber-700" />
                    <span>Handling Grandfathered Legacy Customers:</span>
                  </span>
                  <ul className="text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Existing customers who activated prior to 2024 can continue on their legacy rental until they request a plan change.</li>
                    <li>If customer requests a quota increase, migrate them to the <strong>27 New Customized Packages</strong>.</li>
                    <li>Legacy 10 GB package (Rs. 50/=) is discontinued for new registrations; guide new users to the <strong>5 GB Always Free Trial</strong> or <strong>20 GB @ Rs. 140</strong>.</li>
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-amber-200 space-y-2 text-xs">
                  <span className="font-bold text-amber-950 flex items-center gap-1.5">
                    <Coins className="w-4 h-4 text-amber-700" />
                    <span>Staff Sales Commissions (PGW-BP-POS-02):</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Under corporate rebranding circular <strong>PGW-BP-POS-02</strong>, front-office officers and customer relations agents are eligible for sales commissions upon successfully registering broadband subscribers for Eazy Storage paid tiers.
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 5: HOW TO SUBSCRIBE & REGISTRATION WORKFLOW      */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'how-to') && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-emerald-100 rounded-xl">
                      <Users className="w-6 h-6 text-emerald-700" />
                    </div>
                    <span>How to Subscribe &amp; Register for Eazy Storage</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Step-by-step account activation for Postpaid SLT Broadband and Prepaid / Non-SLT users.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Method 1: Postpaid Broadband Customers */}
                <div className="bg-white rounded-3xl border-2 border-emerald-300 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                      Postpaid SLT BB Users
                    </span>
                    <span className="text-xs font-bold text-emerald-600">Add to Monthly Bill</span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900">
                    Existing SLT Broadband / 4G Customers
                  </h3>

                  <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside font-medium leading-relaxed">
                    <li>Visit official web portal: <strong className="text-[#005696]">https://storage.slt.lk</strong></li>
                    <li>Select <strong>&quot;Existing SLT/Mobitel Customer&quot;</strong> profile.</li>
                    <li>Authenticate using your existing Broadband / 4G portal credentials or telephone number (011-2XXXXXX).</li>
                    <li>Select desired storage capacity (e.g. 20GB, 50GB, 100GB).</li>
                    <li>Subscription fee is <strong>automatically added to your regular monthly SLT bill</strong>.</li>
                  </ul>

                  <a
                    href="https://storage.slt.lk/account/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-2xs transition-colors"
                  >
                    <span>Register on storage.slt.lk</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Method 2: Prepaid / Non-SLT Customers */}
                <div className="bg-white rounded-3xl border-2 border-blue-300 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
                      Prepaid &amp; Any Network
                    </span>
                    <span className="text-xs font-bold text-blue-600">Credit Card Recurring</span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900">
                    Prepaid / Non-SLT Personal Accounts
                  </h3>

                  <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside font-medium leading-relaxed">
                    <li>Visit <strong className="text-[#005696]">https://storage.slt.lk</strong> on any browser.</li>
                    <li>Complete the short registration form: Name, Email, Mobile Contact, NIC/Passport.</li>
                    <li>Create secure password. Enter Promo Code if available.</li>
                    <li>Pay monthly subscription fee securely via <strong>Visa / MasterCard credit or debit card</strong>.</li>
                    <li>Service activates immediately upon payment gateway authorization.</li>
                  </ul>

                  <a
                    href="https://storage.slt.lk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-2xs transition-colors"
                  >
                    <span>Open Eazy Storage Home</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 6: HOW TO UNSUBSCRIBE / CANCELLATION SOP         */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'unsubscribe') && (
            <div className="bg-white rounded-3xl border-2 border-rose-200 p-7 shadow-xs space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-rose-200 pb-4">
                <div>
                  <h3 className="text-2xl font-black text-rose-950 flex items-center gap-2.5">
                    <div className="p-2 bg-rose-100 rounded-xl">
                      <XCircle className="w-6 h-6 text-rose-700" />
                    </div>
                    <span>How to Unsubscribe from Eazy Storage (SOP)</span>
                  </h3>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Customer self-service unsubscription and front-office termination procedure.
                  </p>
                </div>
                <span className="px-3 py-1 bg-rose-100 text-rose-900 rounded-full font-bold text-xs border border-rose-200">
                  Unsubscription Guidelines
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Channel 1: Self-Service via Web Portal */}
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                  <h4 className="font-black text-base text-slate-900 flex items-center gap-2">
                    <Laptop className="w-4 h-4 text-cyan-700" />
                    <span>Customer Self-Service via Portal</span>
                  </h4>
                  <ol className="text-xs text-slate-600 space-y-2 list-decimal list-inside font-medium leading-relaxed">
                    <li>Customer logs in to <strong className="text-[#005696]">https://storage.slt.lk</strong> with registered email/password.</li>
                    <li>Navigate to <strong>Account Settings &rarr; Subscription / Billing</strong>.</li>
                    <li>Click <strong>&quot;Cancel Subscription&quot;</strong> or <strong>&quot;Downgrade to Free 5GB Tier&quot;</strong>.</li>
                    <li>For Postpaid users, recurring monthly billing on the SLT bill will cease from the next billing cycle.</li>
                    <li>For Credit Card users, recurring payment tokens will be deactivated in the payment gateway.</li>
                  </ol>
                </div>

                {/* Channel 2: Agent Assisted via Operator Portal */}
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                  <h4 className="font-black text-base text-slate-900 flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-emerald-700" />
                    <span>Contact Centre / Front-Office SOP</span>
                  </h4>
                  <ol className="text-xs text-slate-600 space-y-2 list-decimal list-inside font-medium leading-relaxed">
                    <li>Verify customer identity via NIC and Broadband telephone number.</li>
                    <li>Log in to Operator Portal: <strong className="text-cyan-800">https://storage.slt.lk/operator/site/login</strong>.</li>
                    <li>Search subscriber by Broadband account number or email.</li>
                    <li>Select active storage plan and execute termination/downgrade order.</li>
                    <li>Inform customer of the <strong>30-day grace period</strong> to download/backup their files before storage quota is reclaimed.</li>
                  </ol>
                </div>

              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 7: WEB & MOBILE APPLICATION SETUP                */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'apps') && (
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-7 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-purple-100 rounded-xl">
                      <Smartphone className="w-6 h-6 text-purple-700" />
                    </div>
                    <span>Multi-Device Access: Web Browser &amp; Mobile Apps</span>
                  </h3>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Continuous backup and file synchronization across Android, iOS, Windows, and MacOS.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Feature 1: Mobile App */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="p-3 bg-purple-600 text-white rounded-xl w-fit">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h4 className="font-black text-base text-slate-900">Mobile Applications</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Download <strong>Eazy Storage</strong> from Google Play Store, Huawei App Gallery, or Apple App Store. Enable automatic background backup for camera photos, videos, contacts, and call logs.
                  </p>
                </div>

                {/* Feature 2: Web & Desktop Portal */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="p-3 bg-blue-600 text-white rounded-xl w-fit">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <h4 className="font-black text-base text-slate-900">Web Portal &amp; Cloud Drive</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Log in to <strong className="text-[#005696]">https://storage.slt.lk</strong> from any computer browser. Drag and drop large files without size restrictions, preview media, and organize folders.
                  </p>
                </div>

                {/* Feature 3: Secure Sharing & Family */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="p-3 bg-emerald-600 text-white rounded-xl w-fit">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-black text-base text-slate-900">Secure Sharing &amp; Family Hub</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Share links with custom passwords and automatic expiration dates. Distribute your total storage quota among family members or team colleagues with independent privacy.
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 8: C-LOG TROUBLE TICKETS & SUPPORT TEMPLATES     */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'troubleshooting') && (
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-cyan-100 rounded-xl">
                      <FileText className="w-6 h-6 text-cyan-700" />
                    </div>
                    <span>C-Log Trouble Ticket &amp; Account Provisioning Templates</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Pre-formatted templates for front office officers handling cloud storage activations, quota upgrades, unsubscriptions, and sync issues.
                  </p>
                </div>
              </div>

              {/* Template 1: Quota Activation */}
              <div className="bg-slate-900 rounded-3xl border-2 border-slate-800 p-6 shadow-md space-y-3 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <Cloud className="w-5 h-5 text-cyan-400" />
                    <span className="font-mono text-sm font-bold text-cyan-300">
                      C-Log Service Order: Eazy Storage Quota Activation ({selectedStorageSize})
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(ttEazyStorageProvisioning, 'tt-prov')}
                    className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-xs rounded-xl font-bold flex items-center gap-2 transition-colors shadow-xs"
                  >
                    {copiedId === 'tt-prov' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedId === 'tt-prov' ? 'Copied Order!' : 'Copy Order Template'}</span>
                  </button>
                </div>
                <pre className="text-lime-300 font-mono text-xs leading-relaxed whitespace-pre-wrap p-2 bg-black/30 rounded-xl overflow-x-auto">
                  {ttEazyStorageProvisioning}
                </pre>
              </div>

              {/* Template 2: Technical Support */}
              <div className="bg-slate-900 rounded-3xl border-2 border-slate-800 p-6 shadow-md space-y-3 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <AlertCircle className="w-5 h-5 text-amber-400" />
                    <span className="font-mono text-sm font-bold text-amber-300">
                      C-Log Trouble Ticket: Sync Issue / Password Reset / App Error
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(ttEazyStorageSupport, 'tt-supp')}
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs rounded-xl font-bold flex items-center gap-2 transition-colors shadow-xs"
                  >
                    {copiedId === 'tt-supp' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedId === 'tt-supp' ? 'Copied TT!' : 'Copy TT Template'}</span>
                  </button>
                </div>
                <pre className="text-amber-200 font-mono text-xs leading-relaxed whitespace-pre-wrap p-2 bg-black/30 rounded-xl overflow-x-auto">
                  {ttEazyStorageSupport}
                </pre>
              </div>

              {/* Template 3: Unsubscription / Cancellation */}
              <div className="bg-slate-900 rounded-3xl border-2 border-slate-800 p-6 shadow-md space-y-3 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <XCircle className="w-5 h-5 text-rose-400" />
                    <span className="font-mono text-sm font-bold text-rose-300">
                      C-Log Cancellation: Eazy Storage Unsubscription &amp; Billing Removal
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(ttEazyStorageUnsubscribe, 'tt-unsub')}
                    className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs rounded-xl font-bold flex items-center gap-2 transition-colors shadow-xs"
                  >
                    {copiedId === 'tt-unsub' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedId === 'tt-unsub' ? 'Copied TT!' : 'Copy Cancellation TT'}</span>
                  </button>
                </div>
                <pre className="text-rose-200 font-mono text-xs leading-relaxed whitespace-pre-wrap p-2 bg-black/30 rounded-xl overflow-x-auto">
                  {ttEazyStorageUnsubscribe}
                </pre>
              </div>

            </div>
          )}

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between pt-6 border-t-2 border-slate-200">
            <Link
              href="/knowledge-hub/4g-lte/lanka-bell"
              className="text-sm font-bold text-slate-600 hover:text-slate-900 flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Lanka Bell Migration</span>
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
