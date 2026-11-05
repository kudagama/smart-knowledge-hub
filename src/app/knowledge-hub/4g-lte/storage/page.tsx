"use client";

import React, { useState } from 'react';
import Link from 'next/link';
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
  Laptop
} from 'lucide-react';

// Existing Popular Storage Packages
const EXISTING_STORAGE_PACKAGES = [
  { size: '20 GB', rental: '350', perGb: 'Rs. 17.50 / GB', bestFor: 'Casual phone photo backup & contacts sync' },
  { size: '50 GB', rental: '500', perGb: 'Rs. 10.00 / GB', bestFor: 'Active smartphone user photos, documents & videos' },
  { size: '100 GB', rental: '850', perGb: 'Rs. 8.50 / GB', bestFor: 'Family sharing & work documents archive' },
  { size: '200 GB', rental: '1,700', perGb: 'Rs. 8.50 / GB', bestFor: 'Content creators, 4K video clips & PC backup' },
  { size: '500 GB', rental: '3,100', perGb: 'Rs. 6.20 / GB', bestFor: 'Small office / remote team collaboration hub' },
  { size: '1,000 GB (1 TB)', rental: '5,600', perGb: 'Rs. 5.60 / GB', bestFor: 'Enterprise terabyte archive & media vault' }
];

// 27 New Customized Package Tiers (Multi-tier breakdown)
const NEW_TIERS_ROW1 = [
  { size: '20 GB', rental: '350' },
  { size: '30 GB', rental: '450' },
  { size: '40 GB', rental: '550' },
  { size: '50 GB', rental: '650' },
  { size: '60 GB', rental: '750' },
  { size: '70 GB', rental: '850' },
  { size: '80 GB', rental: '950' },
  { size: '90 GB', rental: '1,050' },
  { size: '100 GB', rental: '1,150' }
];

const NEW_TIERS_ROW2 = [
  { size: '110 GB', rental: '1,250' },
  { size: '120 GB', rental: '1,350' },
  { size: '130 GB', rental: '1,450' },
  { size: '140 GB', rental: '1,550' },
  { size: '150 GB', rental: '1,650' },
  { size: '160 GB', rental: '1,750' },
  { size: '170 GB', rental: '1,850' },
  { size: '180 GB', rental: '1,950' },
  { size: '190 GB', rental: '2,050' }
];

const NEW_TIERS_ROW3 = [
  { size: '200 GB', rental: '2,150' },
  { size: '300 GB', rental: '3,150' },
  { size: '400 GB', rental: '4,150' },
  { size: '500 GB', rental: '5,150' },
  { size: '600 GB', rental: '6,150' },
  { size: '700 GB', rental: '7,150' },
  { size: '800 GB', rental: '8,150' },
  { size: '900 GB', rental: '9,150' },
  { size: '1,000 GB (1TB)', rental: '10,150' }
];

const NEW_TIERS_ROW4 = [
  { size: '1.5 TB', rental: '15,250' },
  { size: '2 TB', rental: '20,350' },
  { size: '3 TB', rental: '30,550' },
  { size: '4 TB', rental: '40,750' },
  { size: '5 TB', rental: '50,950' },
  { size: '6 TB', rental: '61,150' },
  { size: '7 TB', rental: '71,350' },
  { size: '8 TB', rental: '81,550' },
  { size: '10 TB', rental: '101,950' }
];

export default function SltStoragePage() {
  const [activeTab, setActiveTab] = useState<'all' | 'packages' | 'how-to' | 'apps' | 'billing' | 'troubleshooting'>('all');
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
          <span className="text-cyan-100 font-semibold text-sm">SLT Eazy Storage (Personal Cloud Manual)</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="hidden md:inline bg-cyan-900/60 border border-cyan-400/40 px-3 py-1 rounded-full text-cyan-200 font-medium">
            SLT-Mobitel Intranet
          </span>
          <div className="w-8 h-8 rounded-full bg-cyan-600 border-2 border-cyan-300 flex items-center justify-center font-black text-xs text-white shadow-sm">
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
          <span className="font-bold text-cyan-900 bg-cyan-50 px-2.5 py-0.5 rounded-md border border-cyan-200">
            SLT Storage (Eazy Storage)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-mono font-bold flex items-center gap-1.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            DATA FREE for SLT Broadband
          </span>
          <span className="px-3 py-1 rounded-lg bg-blue-100 text-blue-900 border border-blue-300 text-xs font-mono font-bold">
            Registration: 100% FREE
          </span>
        </div>
      </div>

      {/* 3. HERO BANNER */}
      <div className="relative bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 text-white px-8 py-9 overflow-hidden border-b-4 border-cyan-500 shadow-lg">
        <div className="max-w-6xl mx-auto space-y-4 relative z-10">
          
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-cyan-400 text-cyan-950 shadow-sm flex items-center gap-1.5">
              <Cloud className="w-3.5 h-3.5" />
              Personal Cloud &amp; File Sync
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-cyan-200 backdrop-blur-xs">
              Reviewed by Chathurani Rathnayake (SAM CR - A7)
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
              Zero Internet Quota Deduction
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-cyan-500/20 border-2 border-cyan-400/50 shadow-inner">
                <HardDrive className="w-8 h-8 text-cyan-300" />
              </div>
              <span>SLT Eazy Storage – Cloud Storage &amp; Backup Guide</span>
            </h1>

            <p className="text-base md:text-lg text-cyan-100/90 max-w-4xl font-medium leading-relaxed">
              Secure, private personal cloud storage allowing SLT subscribers to back up, sync, and share files, photos, videos, contacts, and call logs across mobile apps and web browsers — with <strong>zero broadband quota consumption</strong> for SLT customers.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="pt-3 grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 block">Registration Fee</span>
              <p className="text-2xl font-black text-white">100% FREE <span className="text-xs font-normal text-slate-300">(No Activation Cost)</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block">Data-Free Offer</span>
              <p className="text-2xl font-black text-white">0 MB Used <span className="text-xs font-normal text-slate-300">(From SLT BB Quota)</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block">Plan Options</span>
              <p className="text-2xl font-black text-white">27 Tiers <span className="text-xs font-normal text-slate-300">(20GB to 10 TB)</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-300 block">Bill Integration</span>
              <p className="text-2xl font-black text-white">Add to Bill <span className="text-xs font-normal text-slate-300">(Postpaid Feature)</span></p>
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
              <HardDrive className="w-4 h-4" />
              <span>Packages (27 Tiers)</span>
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
              onClick={() => setActiveTab('billing')}
              className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'billing'
                  ? 'bg-cyan-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>Payment Modes</span>
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
              href="https://storage.slt.lk/account/admin/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-cyan-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
            >
              <span>Admin Operation Portal</span>
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
                <span className="text-xs font-black uppercase tracking-wider text-cyan-800 bg-cyan-100 px-3 py-1 rounded-full">
                  What is Eazy Storage?
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Private Cloud Storage, File Syncing &amp; Family Sharing
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Designed for personal and business subscribers to safely store photos, videos, contacts, messages, and work files. Fully accessible via web browser, Windows client, and mobile apps (Play Store, App Gallery, App Store).
                </p>
              </div>

              {/* 5 Key Highlights */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 space-y-2 text-xs text-emerald-950 font-bold shrink-0">
                <span className="text-emerald-900 font-black block uppercase tracking-wider">Key Highlights:</span>
                <ul className="space-y-1.5 font-medium text-slate-700">
                  <li className="flex items-center gap-1.5 text-emerald-900 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>DATA FREE</strong> for all SLT Broadband customers</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>27 Customized package tiers up to 10 TB</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Password-protected sharing with link expiration</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Automatic background sync for phone media</span>
                  </li>
                  <li className="flex items-center gap-1.5 text-blue-900 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Registration Charge: <strong>100% FREE</strong></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Official PDF User Manuals Download Strip */}
            <div className="space-y-2.5">
              <span className="text-xs font-black uppercase tracking-wider text-slate-400 block">
                Official Operation Manuals &amp; User Guides:
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
                  onClick={(e) => { e.preventDefault(); alert("Opening Eazy Storage Product Guidelines [PDF] from SharePoint..."); }}
                  className="p-3 bg-slate-50 hover:bg-cyan-50 rounded-2xl border border-slate-200 hover:border-cyan-300 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-blue-700" />
                    <span className="text-xs font-bold text-slate-800 group-hover:text-blue-900">Product Guidelines</span>
                  </div>
                  <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700" />
                </a>

                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); alert("Opening Eazy Storage Family Sharing User Manual [PDF] from SharePoint..."); }}
                  className="p-3 bg-slate-50 hover:bg-cyan-50 rounded-2xl border border-slate-200 hover:border-cyan-300 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Users className="w-4 h-4 text-purple-700" />
                    <span className="text-xs font-bold text-slate-800 group-hover:text-purple-900">Family Sharing Guide</span>
                  </div>
                  <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-700" />
                </a>

                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); alert("Opening Eazy Storage Files Syncing User Manual [PDF] from SharePoint..."); }}
                  className="p-3 bg-slate-50 hover:bg-cyan-50 rounded-2xl border border-slate-200 hover:border-cyan-300 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <FolderUp className="w-4 h-4 text-emerald-700" />
                    <span className="text-xs font-bold text-slate-800 group-hover:text-emerald-900">File Syncing Manual</span>
                  </div>
                  <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700" />
                </a>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* SECTION 2: POPULAR EXISTING PACKAGES (CARDS)             */}
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
                    Most frequently subscribed monthly storage plans for individual subscribers and household backup.
                  </p>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-cyan-50 text-cyan-900 border border-cyan-300 font-bold text-xs">
                  Zero Data Usage on SLT BB
                </span>
              </div>

              {/* Existing 6 Popular Packages Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {EXISTING_STORAGE_PACKAGES.map((pkg, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl border-2 border-slate-200 hover:border-cyan-400 p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-cyan-100 text-cyan-900 border border-cyan-200">
                          Personal Cloud
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-400">
                          {pkg.perGb}
                        </span>
                      </div>

                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Storage Capacity</span>
                        <h3 className="text-3xl font-black text-[#005696]">{pkg.size}</h3>
                      </div>

                      <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 flex items-baseline justify-between">
                        <span className="text-xs font-bold text-cyan-900 uppercase tracking-wider">Monthly Rental</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xs font-bold text-cyan-700">Rs.</span>
                          <span className="text-3xl font-black text-cyan-900">{pkg.rental}</span>
                          <span className="text-xs font-medium text-slate-500">/ mo</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        {pkg.bestFor}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400">Add to SLT Bill</span>
                      <button
                        onClick={() => {
                          setSelectedStorageSize(pkg.size);
                          copyToClipboard(`EAZY STORAGE: ${pkg.size} - Rs. ${pkg.rental}/mo`, `pkg-${idx}`);
                        }}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-cyan-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
                      >
                        {copiedId === `pkg-${idx}` ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedId === `pkg-${idx}` ? 'Copied' : 'Select'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 3: 27 NEW CUSTOMIZED PACKAGE TIERS MATRIX        */}
          {/* ======================================================== */}
          {(activeTab === 'all' || activeTab === 'packages') && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-blue-100 rounded-xl">
                      <Layers className="w-6 h-6 text-blue-700" />
                    </div>
                    <span>27 New Customized Package Tiers (Granular Capacity Matrix)</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Customers can choose exact quotas in 10GB steps (20GB – 190GB), 100GB steps (200GB – 1TB), and enterprise terabytes (1.5TB – 10TB).
                  </p>
                </div>
              </div>

              {/* 27 Tiers Matrix Table */}
              <div className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-xs space-y-4 p-6">
                
                {/* Band 1: 20 GB to 100 GB */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-xs uppercase tracking-wider text-cyan-900 bg-cyan-100 px-3 py-1 rounded-md">
                      Tier Band 1: 20 GB – 100 GB (10 GB Increments)
                    </h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-center text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          {NEW_TIERS_ROW1.map((t, idx) => (
                            <th key={idx} className="p-3 border-r border-slate-800 last:border-0">{t.size}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-cyan-50/50 font-bold text-slate-800">
                          {NEW_TIERS_ROW1.map((t, idx) => (
                            <td key={idx} className="p-3 border-r border-slate-200 last:border-0 font-mono text-cyan-900 text-sm">
                              Rs. {t.rental}
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Band 2: 110 GB to 190 GB */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-xs uppercase tracking-wider text-blue-900 bg-blue-100 px-3 py-1 rounded-md">
                      Tier Band 2: 110 GB – 190 GB (10 GB Increments)
                    </h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-center text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          {NEW_TIERS_ROW2.map((t, idx) => (
                            <th key={idx} className="p-3 border-r border-slate-800 last:border-0">{t.size}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-blue-50/50 font-bold text-slate-800">
                          {NEW_TIERS_ROW2.map((t, idx) => (
                            <td key={idx} className="p-3 border-r border-slate-200 last:border-0 font-mono text-blue-900 text-sm">
                              Rs. {t.rental}
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Band 3: 200 GB to 1,000 GB (1 TB) */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-xs uppercase tracking-wider text-purple-900 bg-purple-100 px-3 py-1 rounded-md">
                      Tier Band 3: 200 GB – 1,000 GB (100 GB Increments)
                    </h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-center text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          {NEW_TIERS_ROW3.map((t, idx) => (
                            <th key={idx} className="p-3 border-r border-slate-800 last:border-0">{t.size}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-purple-50/50 font-bold text-slate-800">
                          {NEW_TIERS_ROW3.map((t, idx) => (
                            <td key={idx} className="p-3 border-r border-slate-200 last:border-0 font-mono text-purple-900 text-sm">
                              Rs. {t.rental}
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Band 4: Enterprise Terabytes (1.5 TB to 10 TB) */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-xs uppercase tracking-wider text-emerald-900 bg-emerald-100 px-3 py-1 rounded-md">
                      Tier Band 4: Enterprise Terabytes (1.5 TB – 10 TB)
                    </h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-center text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          {NEW_TIERS_ROW4.map((t, idx) => (
                            <th key={idx} className="p-3 border-r border-slate-800 last:border-0">{t.size}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-emerald-50/50 font-bold text-slate-800">
                          {NEW_TIERS_ROW4.map((t, idx) => (
                            <td key={idx} className="p-3 border-r border-slate-200 last:border-0 font-mono text-emerald-900 text-sm">
                              Rs. {t.rental}
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
          {/* SECTION 4: HOW TO SUBSCRIBE & REGISTRATION WORKFLOW      */}
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
                    <span className="text-xs font-bold text-emerald-600">Fast-Track Setup</span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900">
                    Existing SLT Broadband / 4G Customers
                  </h3>

                  <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside font-medium leading-relaxed">
                    <li>Visit official web portal: <strong className="text-[#005696]">https://storage.slt.lk</strong></li>
                    <li>Select <strong>"Existing SLT/Mobitel Customer"</strong> profile.</li>
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
          {/* SECTION 5: WEB & MOBILE APPLICATION SETUP                */}
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
          {/* SECTION 6: C-LOG TROUBLE TICKETS & SUPPORT TEMPLATES     */}
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
                    Pre-formatted templates for front office officers handling cloud storage activations, quota upgrades, and sync issues.
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

