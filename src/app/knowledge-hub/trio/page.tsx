"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Grid,
  Search,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Wifi,
  Tv,
  Phone,
  Layers,
  Check,
  Copy,
  Info,
  ShieldCheck,
  AlertTriangle,
  FileText,
  DollarSign,
  Percent,
  Calculator,
  HelpCircle,
  Bot,
  Terminal,
  ExternalLink,
  Code,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  TrendingUp,
  Download,
  Share2,
  X
} from 'lucide-react';
import {
  TRIO_PACKAGES,
  TRIO_OPERATIONAL_SOPS,
  TRIO_FAQS,
  TRIO_COMPARISON_MATRIX,
  TRIO_AI_SYSTEM_CONTEXT,
  TrioPackage,
  formatLKR
} from '@/data/trioPackages';

export default function TrioBundledPackagesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTier, setSelectedTier] = useState<string>('ALL');
  const [showWithTax, setShowWithTax] = useState<boolean>(true);
  const [expandedPackageId, setExpandedPackageId] = useState<string | null>('trio-shine');
  const [activeTab, setActiveTab] = useState<'packages' | 'compare' | 'taxes' | 'sops' | 'faqs'>('packages');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showAiModal, setShowAiModal] = useState<boolean>(false);
  const [aiModalTab, setAiModalTab] = useState<'markdown' | 'json'>('markdown');
  const [activeFaqId, setActiveFaqId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Filter packages based on tier and search
  const filteredPackages = useMemo(() => {
    return TRIO_PACKAGES.filter((pkg) => {
      const q = searchQuery.toLowerCase();
      const isSearchingPet = q.includes('pet');

      let matchesTier = false;
      if (selectedTier === 'ALL' || selectedTier === 'ACTIVE') {
        matchesTier = !pkg.isDiscontinued || isSearchingPet;
      } else if (selectedTier === 'DISCONTINUED') {
        matchesTier = pkg.isDiscontinued === true;
      } else {
        matchesTier = pkg.code === selectedTier;
      }

      const matchesSearch =
        !q ||
        pkg.name.toLowerCase().includes(q) ||
        pkg.code.toLowerCase().includes(q) ||
        pkg.tagline.toLowerCase().includes(q) ||
        pkg.highlights.some(h => h.toLowerCase().includes(q)) ||
        pkg.broadband.anytimeQuotaGb.toString().includes(q) ||
        pkg.peoTv.channelCount.toString().includes(q);

      return matchesTier && matchesSearch;
    });
  }, [selectedTier, searchQuery]);

  // Filter FAQs based on search
  const filteredFaqs = useMemo(() => {
    if (!searchQuery) return TRIO_FAQS;
    const q = searchQuery.toLowerCase();
    return TRIO_FAQS.filter(
      f =>
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q) ||
        f.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Filter SOPs based on search
  const filteredSops = useMemo(() => {
    if (!searchQuery) return TRIO_OPERATIONAL_SOPS;
    const q = searchQuery.toLowerCase();
    return TRIO_OPERATIONAL_SOPS.filter(
      s =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.ruleCode.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // JSON-LD structured data for search engines and AI Bot web crawlers
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "SLT-Mobitel Fibre Trio Bundled Packages (Triple Play)",
    "description": "Unified 3-in-1 FTTH home subscription bundling GPON Broadband, PEO TV HD IPTV, and Voice Landline telephone service.",
    "numberOfItems": TRIO_PACKAGES.length,
    "itemListElement": TRIO_PACKAGES.map((pkg, idx) => ({
      "@type": "Product",
      "position": idx + 1,
      "name": pkg.name,
      "description": pkg.tagline,
      "offers": {
        "@type": "Offer",
        "price": pkg.pricing.priceWithTaxLkr,
        "priceCurrency": "LKR",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Sri Lanka Telecom PLC (SLT-Mobitel)"
        }
      }
    }))
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f8fafc] text-slate-800 overflow-y-auto">
      
      {/* Schema.org Microdata for AI Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* 1. TOP SHAREPOINT / INTRANET BAR */}
      <header className="bg-[#003B66] text-white px-4 py-2 flex items-center justify-between text-xs shadow-md shrink-0 sticky top-0 z-40 border-b border-cyan-800">
        <div className="flex items-center gap-3">
          <Link
            href="/knowledge-hub"
            className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Grid className="w-4 h-4 text-cyan-300" />
            <span className="font-bold tracking-tight text-sm">Knowledge Hub</span>
          </Link>
          <span className="text-cyan-300">/</span>
          <span className="font-semibold text-white tracking-wide flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            Trio Triple Play
          </span>
        </div>

        {/* Search Input in Topbar */}
        <div className="relative w-64 md:w-96 hidden sm:block">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Shine, Vibe, Quotas, Taxes, SOPs..."
            className="w-full bg-slate-900/60 text-white placeholder-slate-300 text-xs pl-8 pr-7 py-1.5 rounded-md border border-cyan-700/60 focus:outline-none focus:ring-1 focus:ring-cyan-300 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* AI Bot Quick Access & Profile */}
        <div className="flex items-center gap-3 text-xs">
          <button
            onClick={() => setShowAiModal(true)}
            className="px-2.5 py-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded text-[11px] flex items-center gap-1 shadow-sm transition-transform active:scale-95"
            title="Open AI Bot Integration Context & API JSON"
          >
            <Bot className="w-3.5 h-3.5" />
            <span>AI Bot API</span>
          </button>
          <div className="flex items-center gap-1.5 pl-2 border-l border-cyan-800">
            <span className="hidden md:inline text-cyan-200 text-[11px]">Eroshana R.</span>
            <div className="w-7 h-7 rounded-full bg-cyan-700 border border-cyan-400 flex items-center justify-center font-bold text-[11px] text-white">
              ER
            </div>
          </div>
        </div>
      </header>

      {/* 2. BREADCRUMBS & DOMAIN STATUS BAR */}
      <div className="bg-white border-b border-slate-200 px-6 py-2.5 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2 shrink-0">
        <div className="flex items-center gap-2">
          <Link
            href="/knowledge-hub"
            className="text-[#005696] font-semibold hover:underline flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Hub Home
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/knowledge-hub/ftth" className="hover:underline text-slate-600">
            SLT Fibre
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-bold text-[#005696]">Trio Bundled Packages</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            TRCSL Approved Tariffs (2026.1)
          </span>
          <span className="text-slate-400">|</span>
          <a
            href="/api/knowledge-hub/trio?format=json"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-700 hover:text-cyan-900 font-semibold flex items-center gap-1 text-[11px] hover:underline"
          >
            <ExternalLink className="w-3 h-3" />
            JSON Endpoint
          </a>
        </div>
      </div>

      {/* 3. HERO BANNER WITH AI BOT INTEGRATION HIGHLIGHT */}
      <div className="relative bg-gradient-to-r from-[#002244] via-[#003B66] to-[#0A5C99] text-white px-6 md:px-10 py-8 overflow-hidden shadow-sm">
        {/* Abstract Background Design Elements */}
        <div className="absolute -right-16 -top-24 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="absolute right-1/3 -bottom-24 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 shadow-sm flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-slate-950" />
              Triple Play 3-in-1
            </span>
            <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-cyan-900/60 text-cyan-200 border border-cyan-600/40">
              Broadband + PEO TV + Free Voice Line
            </span>
            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              1 Single Consolidated Bill
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
                SLT-Mobitel Trio Bundled Packages
              </h1>
              <p className="text-sm md:text-base text-cyan-100/90 leading-relaxed">
                Seamlessly unify High-Speed GPON Optical Fibre Broadband, PEO TV High-Definition IPTV,
                and Voice Landline Telephone service with zero line rental, complimentary OTT platform access,
                and dedicated customer care.
              </p>
              <div className="text-xs text-cyan-200/80 flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
                <span><strong>Author:</strong> Eroshana Rathnayake (Broadband &amp; VAS Hub)</span>
                <span>•</span>
                <span><strong>Infrastructure:</strong> SLT Fibre (FTTH) &amp; Megaline Upgrades</span>
                <span>•</span>
                <span><strong>Commitment:</strong> 12 Months Minimum</span>
              </div>
            </div>

            {/* AI Agent Quick Integration Card */}
            <div className="bg-slate-900/80 backdrop-blur-md border border-cyan-500/40 p-4 rounded-xl shadow-lg flex flex-col justify-between shrink-0 lg:w-80 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-white leading-tight">AI Bot Architecture</h2>
                    <p className="text-[10px] text-cyan-300">RAG Ingestion &amp; API Ready</p>
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <p className="text-[11px] text-slate-300 leading-normal">
                Structured schema with exact tax calculations, SOP rules, and natural language prompts ready for bot retrieval.
              </p>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => setShowAiModal(true)}
                  className="flex-1 py-1.5 px-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>Inspect API</span>
                </button>
                <button
                  onClick={() => copyToClipboard(TRIO_AI_SYSTEM_CONTEXT, 'ai-quick-copy')}
                  className="py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-cyan-200 border border-cyan-700 rounded-md text-xs font-medium flex items-center gap-1 transition-colors"
                  title="Copy Prompt Context to Clipboard"
                >
                  {copiedId === 'ai-quick-copy' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>Prompt</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. MAIN CONTENT CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-8 space-y-8 w-full flex-1">
        
        {/* Navigation Tabs & Tax Toggle Bar */}
        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Main Navigation Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {[
              { id: 'packages', label: 'All Packages (4)', icon: Layers },
              { id: 'compare', label: 'Feature Comparison', icon: TrendingUp },
              { id: 'taxes', label: 'Itemized Tax Matrix', icon: Calculator },
              { id: 'sops', label: 'Call Center 1212 SOPs', icon: ShieldCheck },
              { id: 'faqs', label: 'Agent Community Q&A', icon: HelpCircle }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#005696] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-300' : 'text-slate-500'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Tax Toggle Switch */}
          <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 shrink-0">
            <span className="text-xs font-medium text-slate-500">Price Display:</span>
            <div className="inline-flex p-1 bg-slate-100 rounded-lg border border-slate-200">
              <button
                onClick={() => setShowWithTax(false)}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                  !showWithTax
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Without Tax
              </button>
              <button
                onClick={() => setShowWithTax(true)}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-all flex items-center gap-1 ${
                  showWithTax
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <span>With Tax</span>
                <span className="text-[10px] px-1 py-0.2 bg-emerald-800 rounded font-normal text-emerald-100">
                  Total
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: INTERACTIVE PACKAGES GRID VIEW */}
        {/* ========================================================================= */}
        {activeTab === 'packages' && (
          <section className="space-y-6">
            
            {/* Tier Filters & Quick Stats */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-500">Filter Portfolio:</span>
                {[
                  { id: 'ACTIVE', label: 'Active Packages (3)' },
                  { id: 'SHINE', label: 'Trio Shine' },
                  { id: 'VIBE_PLUS', label: 'Trio Vibe+' },
                  { id: 'VIBE', label: 'Trio Vibe' },
                  { id: 'DISCONTINUED', label: 'Discontinued (Trio Pet)' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setSelectedTier(tier.id)}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                      selectedTier === tier.id || (selectedTier === 'ALL' && tier.id === 'ACTIVE')
                        ? 'bg-[#003B66] text-white shadow-xs'
                        : tier.id === 'DISCONTINUED'
                        ? 'bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>

              <div className="text-xs text-slate-500 font-medium">
                Showing <strong className="text-slate-800">{filteredPackages.length}</strong> Packages (3 Active Commercial Offers)
              </div>
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map((pkg) => {
                const isExpanded = expandedPackageId === pkg.id;
                const isShine = pkg.code === 'SHINE';
                const isVibePlus = pkg.code === 'VIBE_PLUS';
                const isVibe = pkg.code === 'VIBE';
                const isPet = pkg.code === 'PET';

                return (
                  <motion.div
                    key={pkg.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`bg-white rounded-2xl border transition-all flex flex-col justify-between relative shadow-sm hover:shadow-md ${
                      isShine
                        ? 'border-sky-300 ring-2 ring-sky-500/20'
                        : isVibePlus
                        ? 'border-emerald-300'
                        : isVibe
                        ? 'border-amber-300'
                        : 'border-slate-300'
                    }`}
                  >
                    {/* Top Tier Badge */}
                    <div className="p-5 pb-3 space-y-3">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${pkg.accentColor.pill}`}
                        >
                          {pkg.badge}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400">
                          12 Mo. Commit
                        </span>
                      </div>

                      <div>
                        <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center justify-between">
                          <span>{pkg.name}</span>
                          {isShine && <Sparkles className="w-5 h-5 text-sky-500" />}
                          {pkg.isDiscontinued && (
                            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-rose-100 text-rose-700 border border-rose-300">
                              Discontinued
                            </span>
                          )}
                        </h2>
                        {pkg.isDiscontinued && (
                          <div className="mt-1.5 px-2.5 py-1 rounded bg-rose-50 border border-rose-200 text-rose-800 text-[11px] font-bold flex items-center gap-1.5">
                            <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                            <span>Cannot be sold to new customers (Discontinued)</span>
                          </div>
                        )}

                      </div>

                      {/* Pricing Block */}
                      <div className="pt-3 border-t border-slate-100 space-y-1">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                            {showWithTax
                              ? formatLKR(pkg.pricing.priceWithTaxLkr)
                              : formatLKR(pkg.pricing.basePriceWithoutTaxLkr)}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">/month</span>
                        </div>

                        {/* Tax Subtext and Effective Rate */}
                        <div className="flex items-center justify-between text-[11px]">
                          {showWithTax ? (
                            <span className="text-emerald-700 font-semibold flex items-center gap-1">
                              <ShieldCheck className="w-3.5 h-3.5" />
                              Effective Tax: {pkg.pricing.effectiveTaxRatePercentage}% (+{formatLKR(pkg.pricing.totalTaxLkr)})
                            </span>
                          ) : (
                            <span className="text-slate-500">
                              Excl. Taxes (Effective Rate: {pkg.pricing.effectiveTaxRatePercentage}%)
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Core Specs Pillar Grid */}
                      <div className="pt-4 space-y-2.5">
                        
                        {/* 1. Broadband Quota */}
                        <div className="flex items-start gap-2.5 text-xs">
                          <div className="p-1.5 rounded-md bg-blue-50 text-[#005696] shrink-0 mt-0.5">
                            <Wifi className="w-3.5 h-3.5" />
                          </div>
                          <div className="leading-tight">
                            <div className="font-bold text-slate-800">
                              {pkg.broadband.anytimeQuotaGb} GB Anytime Data
                            </div>
                            <div className="text-[11px] text-slate-500">
                              {pkg.broadband.freeNightTime ? (
                                <span className="text-emerald-700 font-medium">
                                  + Free Night Data (00:00 - 07:00)
                                </span>
                              ) : (
                                'Standard Anytime Allocation'
                              )}
                            </div>
                          </div>
                        </div>

                        {/* 2. PEO TV Channels */}
                        <div className="flex items-start gap-2.5 text-xs">
                          <div className="p-1.5 rounded-md bg-purple-50 text-purple-700 shrink-0 mt-0.5">
                            <Tv className="w-3.5 h-3.5" />
                          </div>
                          <div className="leading-tight">
                            <div className="font-bold text-slate-800">
                              {pkg.peoTv.channelCount} PEO TV Channels
                            </div>
                            <div className="text-[11px] text-slate-500">
                              {pkg.peoTv.packageTier} • HD STB Included
                            </div>
                          </div>
                        </div>

                        {/* 3. Voice Line Rental */}
                        <div className="flex items-start gap-2.5 text-xs">
                          <div className="p-1.5 rounded-md bg-emerald-50 text-emerald-700 shrink-0 mt-0.5">
                            <Phone className="w-3.5 h-3.5" />
                          </div>
                          <div className="leading-tight">
                            <div className="font-bold text-slate-800">
                              Free Voice Line Rental
                            </div>
                            <div className="text-[11px] text-slate-500">
                              {pkg.voice.sltToSltMinutes}
                            </div>
                          </div>
                        </div>

                        {/* 4. Free OTT Platform Perks */}
                        <div className="flex items-start gap-2.5 text-xs">
                          <div className="p-1.5 rounded-md bg-amber-50 text-amber-700 shrink-0 mt-0.5">
                            <Sparkles className="w-3.5 h-3.5" />
                          </div>
                          <div className="leading-tight">
                            <div className="font-bold text-slate-800">
                              Free OTT App Access
                            </div>
                            <div className="text-[11px] text-slate-500">
                              {pkg.peoTv.freeOttBonus.join(' • ')}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expandable Itemized Tax Breakdown Accordion */}
                    <div className="p-5 pt-2 border-t border-slate-100 bg-slate-50/70 rounded-b-2xl space-y-3">
                      <button
                        onClick={() => setExpandedPackageId(isExpanded ? null : pkg.id)}
                        className="w-full py-1.5 px-2 rounded-md text-[11px] font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-200/60 flex items-center justify-between transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5">
                          <Calculator className="w-3 h-3 text-slate-500" />
                          {isExpanded ? 'Hide Tax Breakdown' : 'View Itemized Taxes'}
                        </span>
                        <ChevronRight
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isExpanded ? 'rotate-90' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-2 text-[11px] text-slate-600 overflow-hidden pt-1"
                          >
                            <div className="bg-white p-2.5 rounded-lg border border-slate-200 space-y-1.5">
                              <div className="font-bold text-slate-800 text-[11px] border-b border-slate-100 pb-1">
                                Tax Rates Applied:
                              </div>
                              <div className="flex justify-between">
                                <span>CESS (2.04%):</span>
                                <span className="font-mono font-semibold">{formatLKR(pkg.pricing.taxBreakdown.cess.amountLkr)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>TL (15% on Voice &amp; TV):</span>
                                <span className="font-mono font-semibold">{formatLKR(pkg.pricing.taxBreakdown.tl.amountLkr)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>SSCL (2.56%):</span>
                                <span className="font-mono font-semibold">{formatLKR(pkg.pricing.taxBreakdown.sscl.amountLkr)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>VAT (18.00%):</span>
                                <span className="font-mono font-semibold">{formatLKR(pkg.pricing.taxBreakdown.vat.amountLkr)}</span>
                              </div>
                              <div className="flex justify-between pt-1 border-t border-slate-100 font-bold text-slate-900">
                                <span>Total Tax:</span>
                                <span className="font-mono text-emerald-700">{formatLKR(pkg.pricing.totalTaxLkr)}</span>
                              </div>
                            </div>

                            <p className="text-[10px] text-slate-400 italic">
                              *Broadband data is legally exempt from Telecommunication Levy (TL 15%).
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Quick Action Button */}
                      <button
                        onClick={() => {
                          const ticketSnippet = `SERVICE: SLT FTTH Trio Bundle\nPACKAGE: ${pkg.name} (${pkg.code})\nMONTHLY RENTAL: ${formatLKR(pkg.pricing.priceWithTaxLkr)} (With Tax)\nQUOTA: ${pkg.broadband.anytimeQuotaGb} GB Anytime Data + Night Bonus\nPEO TV: ${pkg.peoTv.channelCount} Channels\nVOICE: Unlimited SLT-to-SLT calls\nCOMMITMENT: 12 Months (Early termination fee Rs. 1000 + taxes)`;
                          copyToClipboard(ticketSnippet, `copy-${pkg.id}`);
                        }}
                        className="w-full py-2 px-3 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs active:scale-98"
                      >
                        {copiedId === `copy-${pkg.id}` ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-500" />
                            <span>Copy Plan Details for C-Log</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Informational Notice Banner */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-amber-900 text-xs">
              <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="font-bold text-amber-950">Important Subscription Notice</h3>
                <p>
                  Trio packages are provisioned exclusively on <strong>SLT Fibre (FTTH)</strong> infrastructure. Existing Megaline Copper customers can apply for Trio upon submitting an FTTH Optical Migration order. Minimum service commitment is <strong>12 months</strong>, and a standard early termination fee of Rs. 1,000/- + applicable statutory taxes is enforced if terminated or downgraded prematurely.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: SIDE-BY-SIDE FEATURE COMPARISON MATRIX */}
        {/* ========================================================================= */}
        {activeTab === 'compare' && (
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-6 border-b border-slate-200 bg-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#005696]" />
                  Trio Packages Technical Comparison
                </h2>
                <p className="text-xs text-slate-500">
                  Detailed side-by-side spec comparison across Internet, PEO TV, Voice, Pricing, and Policy rules.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const csvContent = TRIO_COMPARISON_MATRIX.map(
                      r => `"${r.featureName}","${r.shine}","${r.vibePlus}","${r.vibe}","${r.pet}"`
                    ).join('\n');
                    copyToClipboard(csvContent, 'copy-compare-csv');
                  }}
                  className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedId === 'copy-compare-csv' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                  )}
                  <span>Copy Matrix as CSV</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100/80 text-slate-700 border-b border-slate-200">
                    <th className="py-3.5 px-4 font-bold w-1/4">Feature / Specification</th>
                    <th className="py-3.5 px-4 font-extrabold text-sky-800 bg-sky-50/60 border-l border-slate-200 w-3/16">
                      Trio Shine
                    </th>
                    <th className="py-3.5 px-4 font-extrabold text-emerald-800 bg-emerald-50/60 border-l border-slate-200 w-3/16">
                      Trio Vibe Plus
                    </th>
                    <th className="py-3.5 px-4 font-extrabold text-amber-800 bg-amber-50/60 border-l border-slate-200 w-3/16">
                      Trio Vibe
                    </th>
                    <th className="py-3.5 px-4 font-extrabold text-cyan-900 bg-cyan-50/60 border-l border-slate-200 w-3/16">
                      Trio Pet (Discontinued)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {TRIO_COMPARISON_MATRIX.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white hover:bg-slate-50/80' : 'bg-slate-50/40 hover:bg-slate-50/80'}
                    >
                      <td className="py-3 px-4 font-semibold text-slate-800 flex items-center justify-between">
                        <span>{row.featureName}</span>
                        {row.tooltip && (
                          <span className="text-[10px] text-slate-400 hidden lg:inline ml-2 font-normal">
                            ({row.tooltip})
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 font-medium text-slate-900 border-l border-slate-100 bg-sky-50/20">
                        {row.shine}
                      </td>
                      <td className="py-3 px-4 font-medium text-slate-900 border-l border-slate-100 bg-emerald-50/20">
                        {row.vibePlus}
                      </td>
                      <td className="py-3 px-4 font-medium text-slate-900 border-l border-slate-100 bg-amber-50/20">
                        {row.vibe}
                      </td>
                      <td className="py-3 px-4 font-medium text-slate-900 border-l border-slate-100 bg-cyan-50/20">
                        {row.pet}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: ITEMIZED TAX MATRIX (MIRRORING EXCEL TRIO TAXES-V2-ADJUST) */}
        {/* ========================================================================= */}
        {activeTab === 'taxes' && (
          <section className="space-y-6">
            
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-emerald-600" />
                    Official Telecommunication Tax Breakdown Matrix
                  </h2>
                  <p className="text-xs text-slate-500">
                    Source: <span className="font-mono font-medium text-slate-700">Trio Taxes-V2-Adjust.xlsx</span> (Curated for Customer Care &amp; Billing Audits)
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-blue-50 text-[#005696] border border-blue-200 rounded-md text-xs font-bold">
                    Statutory Taxes: CESS 2.04% | TL 15% | SSCL 2.56% | VAT 18%
                  </span>
                </div>
              </div>

              {/* Explanatory Note on Differential Tax Rates */}
              <div className="p-3.5 bg-blue-50/60 border border-blue-200 rounded-xl text-xs text-blue-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-[#005696]" />
                  Why do different Trio packages have different effective tax rates?
                </div>
                <p className="text-[11px] leading-relaxed text-blue-800">
                  In Sri Lanka, <strong>Broadband Internet data is exempt from the 15% Telecommunication Levy (TL)</strong>, whereas Voice Line Rental and PEO TV services are legally subject to the 15% TL. Since each Trio package has different price proportions allocated to Broadband vs Voice/TV, the blended effective tax rate varies from <strong>28.74%</strong> (Trio Shine) up to <strong>36.13%</strong> (Trio Pet (Discontinued)).
                </p>
              </div>

              {/* The 4 Individual Package Tables from Excel */}
              <div className="space-y-6 pt-2">
                {TRIO_PACKAGES.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs"
                  >
                    {/* Header of Package Tax Card */}
                    <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${pkg.accentColor.pill}`}>
                          {pkg.code}
                        </span>
                        <h3 className="font-bold text-sm text-slate-900">{pkg.name}</h3>
                      </div>
                      <div className="flex items-center gap-3 text-xs">
                        <span>Base: <strong className="font-mono">{formatLKR(pkg.pricing.basePriceWithoutTaxLkr)}</strong></span>
                        <span className="text-slate-300">|</span>
                        <span>Effective Tax: <strong className="font-mono text-emerald-700">{pkg.pricing.effectiveTaxRatePercentage}%</strong></span>
                        <span className="text-slate-300">|</span>
                        <span>Total: <strong className="font-mono text-slate-900 text-sm">{formatLKR(pkg.pricing.priceWithTaxLkr)}</strong></span>
                      </div>
                    </div>

                    {/* Table Grid */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left">
                        <thead>
                          <tr className="bg-slate-100 text-slate-600 border-b border-slate-200 font-bold">
                            <th className="py-2.5 px-3">Component</th>
                            <th className="py-2.5 px-3">Without Tax</th>
                            <th className="py-2.5 px-3">% of Bundle</th>
                            <th className="py-2.5 px-3">CESS (2.04%)</th>
                            <th className="py-2.5 px-3">TL (15% on Voice/TV)</th>
                            <th className="py-2.5 px-3">SSCL (2.56%)</th>
                            <th className="py-2.5 px-3">VAT (18%)</th>
                            <th className="py-2.5 px-3">Total Taxes</th>
                            <th className="py-2.5 px-3 text-right">Price With Tax</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-mono">
                          {pkg.pricing.serviceBreakdowns.map((item, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/60 font-sans">
                              <td className="py-2 px-3 font-semibold text-slate-800">{item.displayName}</td>
                              <td className="py-2 px-3 font-mono">{formatLKR(item.basePriceLkr)}</td>
                              <td className="py-2 px-3 font-mono text-slate-500">{item.percentageOfBundle}%</td>
                              <td className="py-2 px-3 font-mono">{formatLKR(item.cess)}</td>
                              <td className="py-2 px-3 font-mono">
                                {item.tl > 0 ? formatLKR(item.tl) : <span className="text-slate-400 font-sans">0.00 (Exempt)</span>}
                              </td>
                              <td className="py-2 px-3 font-mono">{formatLKR(item.sscl)}</td>
                              <td className="py-2 px-3 font-mono">{formatLKR(item.vat)}</td>
                              <td className="py-2 px-3 font-mono text-slate-700">{formatLKR(item.totalTaxLkr)}</td>
                              <td className="py-2 px-3 font-mono font-bold text-slate-900 text-right">{formatLKR(item.priceWithTaxLkr)}</td>
                            </tr>
                          ))}
                          {/* Totals Row */}
                          <tr className="bg-slate-50 font-bold text-slate-900 border-t-2 border-slate-200">
                            <td className="py-2.5 px-3 font-sans">Total Bundle Price</td>
                            <td className="py-2.5 px-3 font-mono">{formatLKR(pkg.pricing.basePriceWithoutTaxLkr)}</td>
                            <td className="py-2.5 px-3 font-mono">100.00%</td>
                            <td className="py-2.5 px-3 font-mono">{formatLKR(pkg.pricing.taxBreakdown.cess.amountLkr)}</td>
                            <td className="py-2.5 px-3 font-mono">{formatLKR(pkg.pricing.taxBreakdown.tl.amountLkr)}</td>
                            <td className="py-2.5 px-3 font-mono">{formatLKR(pkg.pricing.taxBreakdown.sscl.amountLkr)}</td>
                            <td className="py-2.5 px-3 font-mono">{formatLKR(pkg.pricing.taxBreakdown.vat.amountLkr)}</td>
                            <td className="py-2.5 px-3 font-mono text-emerald-800">{formatLKR(pkg.pricing.totalTaxLkr)}</td>
                            <td className="py-2.5 px-3 font-mono text-right text-emerald-800 text-sm font-extrabold">
                              {formatLKR(pkg.pricing.priceWithTaxLkr)}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: CALL CENTER 1212 OPERATIONAL SOPS & CHURN PREVENTION */}
        {/* ========================================================================= */}
        {activeTab === 'sops' && (
          <section className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
              <div className="border-b border-slate-100 pb-3 flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#005696]" />
                    Official Trio Standard Operating Procedures (SOPs)
                  </h2>
                  <p className="text-xs text-slate-500">
                    Mandatory triage and service request rules for Contact Centre (1212), Teleshops, and RTOM officers.
                  </p>
                </div>
                <span className="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-full text-xs font-bold">
                  Rule Matrix: 2026.1 Validated
                </span>
              </div>

              {/* SOP List */}
              <div className="space-y-4 pt-2">
                {filteredSops.map((sop) => (
                  <div
                    key={sop.id}
                    className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-blue-100 text-[#003B66] font-bold">
                          {sop.ruleCode}
                        </span>
                        <h3 className="font-bold text-sm text-slate-900">{sop.title}</h3>
                      </div>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
                        Channel: {sop.channel}
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed">
                      {sop.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <span className="font-bold text-slate-900 block mb-1">Eligibility Criteria:</span>
                        <span className="text-slate-600">{sop.eligibility}</span>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <span className="font-bold text-slate-900 block mb-1">Action Required by Officer:</span>
                        <span className="text-slate-600">{sop.actionRequired}</span>
                      </div>
                    </div>

                    {sop.earlyTerminationPolicy && (
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-900 flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        <div>
                          <strong>Early Termination Policy:</strong> {sop.earlyTerminationPolicy}
                        </div>
                      </div>
                    )}

                    {sop.ttTemplate && (
                      <div className="pt-2">
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                          <span className="font-mono font-bold">Trouble Ticket / Service Request Template:</span>
                          <button
                            onClick={() => copyToClipboard(sop.ttTemplate!, `sop-${sop.id}`)}
                            className="text-cyan-700 hover:text-cyan-900 font-bold flex items-center gap-1 cursor-pointer"
                          >
                            {copiedId === `sop-${sop.id}` ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy Template</span>
                              </>
                            )}
                          </button>
                        </div>
                        <pre className="p-3 bg-slate-900 text-cyan-200 rounded-lg text-[11px] font-mono whitespace-pre-wrap overflow-x-auto">
                          {sop.ttTemplate}
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: AGENT COMMUNITY FAQS & TECHNICAL FORUM */}
        {/* ========================================================================= */}
        {activeTab === 'faqs' && (
          <section className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
              <div className="border-b border-slate-100 pb-3 flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-purple-600" />
                    Agent Community Q&amp;A &amp; Knowledge Thread
                  </h2>
                  <p className="text-xs text-slate-500">
                    Real-world scenarios, queries, and verified answers from SLT Broadband &amp; VAS Hub discussions.
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-500">
                  {filteredFaqs.length} Discussion Topics
                </span>
              </div>

              {/* FAQ Accordion List */}
              <div className="space-y-3 pt-2">
                {filteredFaqs.map((faq) => {
                  const isOpen = activeFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="border border-slate-200 rounded-xl overflow-hidden bg-white transition-all shadow-xs"
                    >
                      <button
                        onClick={() => setActiveFaqId(isOpen ? null : faq.id)}
                        className="w-full text-left p-4 hover:bg-slate-50 flex items-start justify-between gap-3 cursor-pointer"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                              {faq.category}
                            </span>
                            {faq.verified && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified Resolution
                              </span>
                            )}
                          </div>
                          <h3 className="font-bold text-sm text-slate-900 leading-snug">
                            {faq.question}
                          </h3>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 mt-1 ${
                            isOpen ? 'rotate-90 text-[#005696]' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="px-4 pb-4 pt-1 bg-slate-50/60 border-t border-slate-100 text-xs text-slate-700 space-y-3"
                          >
                            <p className="leading-relaxed bg-white p-3 rounded-lg border border-slate-200">
                              {faq.answer}
                            </p>
                            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                              <span className="flex items-center gap-1">
                                <strong>Answered by:</strong> {faq.author} ({faq.role})
                              </span>
                              <span>Date: {faq.date}</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* 5. AI BOT INTEGRATION & RAG PROMPT MODAL */}
      <AnimatePresence>
        {showAiModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-cyan-500/50 rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>AI Bot Integration &amp; RAG Architecture</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                        v2026.1
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      Machine-readable context payloads for Gemini, OpenAI, RAG, and custom LLM agents.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowAiModal(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Format Switcher */}
              <div className="px-6 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAiModalTab('markdown')}
                    className={`px-3 py-1 rounded-md font-bold transition-colors ${
                      aiModalTab === 'markdown'
                        ? 'bg-cyan-600 text-white'
                        : 'text-slate-400 hover:text-white bg-slate-800'
                    }`}
                  >
                    LLM RAG Markdown Prompt
                  </button>
                  <button
                    onClick={() => setAiModalTab('json')}
                    className={`px-3 py-1 rounded-md font-bold transition-colors ${
                      aiModalTab === 'json'
                        ? 'bg-cyan-600 text-white'
                        : 'text-slate-400 hover:text-white bg-slate-800'
                    }`}
                  >
                    REST API JSON Payload
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="/api/knowledge-hub/trio?format=json"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-[11px] hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Open Live Route
                  </a>
                  <button
                    onClick={() => {
                      const payload =
                        aiModalTab === 'markdown'
                          ? TRIO_AI_SYSTEM_CONTEXT
                          : JSON.stringify({ packages: TRIO_PACKAGES, sops: TRIO_OPERATIONAL_SOPS }, null, 2);
                      copyToClipboard(payload, 'modal-copy');
                    }}
                    className="py-1 px-3 bg-slate-800 hover:bg-slate-700 text-cyan-200 border border-cyan-700 rounded text-xs font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    {copiedId === 'modal-copy' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Payload</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Modal Body / Pre Code Area */}
              <div className="p-6 overflow-y-auto flex-1 font-mono text-xs">
                {aiModalTab === 'markdown' ? (
                  <pre className="text-cyan-100/90 whitespace-pre-wrap leading-relaxed select-text">
                    {TRIO_AI_SYSTEM_CONTEXT}
                  </pre>
                ) : (
                  <pre className="text-emerald-300/90 whitespace-pre-wrap leading-relaxed select-text">
                    {JSON.stringify(
                      {
                        endpoint: '/api/knowledge-hub/trio',
                        domain: 'SLT_FIBRE_TRIO_BUNDLES',
                        timestamp: new Date().toISOString(),
                        packages: TRIO_PACKAGES,
                        sops: TRIO_OPERATIONAL_SOPS,
                        faqs: TRIO_FAQS
                      },
                      null,
                      2
                    )}
                  </pre>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>RAG Retrieval Key: <code className="text-cyan-300">RULE_TRIO_ACTIVATION_MIGRATION</code></span>
                <button
                  onClick={() => setShowAiModal(false)}
                  className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-md font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 6. PAGE FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-6 px-6 text-center text-xs text-slate-500 mt-auto">
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="flex flex-wrap items-center justify-center gap-4 font-semibold text-slate-700">
            <Link href="/knowledge-hub" className="hover:text-[#005696]">Knowledge Hub Home</Link>
            <span>•</span>
            <Link href="/knowledge-hub/ftth" className="hover:text-[#005696]">SLT Fibre FTTH</Link>
            <span>•</span>
            <Link href="/knowledge-hub/faq/ftth" className="hover:text-[#005696]">Interactive SOPs</Link>
            <span>•</span>
            <Link href="/api/knowledge-hub/trio" className="hover:text-[#005696]">API RAG Endpoint</Link>
          </div>
          <p className="text-[11px] text-slate-400">
            © 2026 Sri Lanka Telecom PLC. Confidential Intranet Knowledge Base for Contact Centre, Teleshop &amp; Enterprise Support.
          </p>
        </div>
      </footer>
    </div>
  );
}

