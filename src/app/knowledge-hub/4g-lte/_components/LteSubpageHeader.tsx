"use client";

import React from 'react';
import Link from 'next/link';
import {
  Grid,
  ChevronDown,
  ArrowLeft,
  Users,
  Layers,
  LucideIcon
} from 'lucide-react';

export interface LteTopicNav {
  id: string;
  label: string;
  href: string;
}

export const LTE_QUICK_NAV_ITEMS: LteTopicNav[] = [
  { id: 'cat-4', label: 'CAT 4 Charges', href: '/knowledge-hub/4g-lte/cat-4' },
  { id: 'cat-6', label: 'CAT 6 Charges', href: '/knowledge-hub/4g-lte/cat-6' },
  { id: 'voice', label: 'Voice (VoLTE)', href: '/knowledge-hub/4g-lte/voice' },
  { id: 'broadband', label: 'BB Packages', href: '/knowledge-hub/4g-lte/broadband' },
  { id: 'old-charges', label: 'Old Call Charges', href: '/knowledge-hub/4g-lte/old-charges' },
  { id: 'prepaid', label: '4G LTE Prepaid', href: '/knowledge-hub/4g-lte/prepaid' },
  { id: 'other-charges', label: 'Other Charges', href: '/knowledge-hub/4g-lte/other-charges' },
  { id: 'lanka-bell', label: 'Lanka Bell to 4G', href: '/knowledge-hub/4g-lte/lanka-bell' },
  { id: 'storage', label: 'SLT Storage', href: '/knowledge-hub/4g-lte/storage' },
];

interface LteSubpageHeaderProps {
  currentTopicId: 'cat-4' | 'cat-6' | 'voice' | 'broadband' | 'old-charges' | 'prepaid' | 'other-charges' | 'lanka-bell' | 'storage';
  title: string;
  subtitle: string;
  badge: string;
  badgeStyle?: string;
  taxDate?: string;
  author?: string;
  authorRole?: string;
  icon?: LucideIcon;
  stats?: Array<{
    label: string;
    value: string;
    sub?: string;
  }>;
}

export default function LteSubpageHeader({
  currentTopicId,
  title,
  subtitle,
  badge,
  badgeStyle = 'bg-cyan-400/20 text-cyan-300 border-cyan-300/30',
  taxDate = 'Tax Revision: 01/08/2024',
  author = 'Chathurani Rathnayake',
  authorRole = 'Senior Assistant Manager (Customer Relations) - A7',
  icon: IconComponent,
  stats
}: LteSubpageHeaderProps) {
  return (
    <div className="flex flex-col shrink-0">
      
      {/* 1. TOP SHAREPOINT INTRA BAR */}
      <div className="bg-[#005a9c] text-white px-4 py-2 flex items-center justify-between text-xs shadow-xs shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/knowledge-hub" className="flex items-center gap-1.5 cursor-pointer hover:opacity-80">
            <Grid className="w-4 h-4 text-white" />
            <span className="font-bold tracking-tight text-sm">SharePoint</span>
          </Link>
          <span className="text-xs text-cyan-200">| 4G LTE Fixed Wireless Portal</span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span className="hidden sm:inline text-cyan-100 font-medium">SLT-Mobitel Intranet</span>
          <div className="w-7 h-7 rounded-full bg-cyan-700 border border-cyan-400 flex items-center justify-center font-bold text-[11px] text-white shadow-xs">
            CR
          </div>
        </div>
      </div>

      {/* 2. SLT MOBITEL BANNER & MENU NAVIGATION */}
      <div className="bg-white border-b border-slate-200 px-6 py-2.5 flex items-center justify-between shadow-2xs shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-black text-xl text-[#005696] tracking-tighter">SLT</span>
              <span className="font-black text-xl text-[#22b14c] tracking-tighter">MOBITEL</span>
            </div>
            <span className="text-[9px] text-[#005696] font-semibold -mt-1 tracking-wider uppercase">The Connection</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-700">
          <Link href="/knowledge-hub" className="text-slate-700 hover:text-[#005696] hover:underline">Home</Link>
          <span className="flex items-center gap-1 cursor-pointer hover:text-[#005696]">Groups <ChevronDown className="w-3 h-3 text-slate-400" /></span>
          <span className="flex items-center gap-1 cursor-pointer hover:text-[#005696]">eApplications <ChevronDown className="w-3 h-3 text-slate-400" /></span>
          <span className="flex items-center gap-1 cursor-pointer hover:text-[#005696]">General <ChevronDown className="w-3 h-3 text-slate-400" /></span>
          <Link href="/knowledge-hub/faq" className="text-[#005696] font-bold hover:underline flex items-center gap-1">
            Knowledge Base <ChevronDown className="w-3 h-3 text-[#005696]" />
          </Link>
        </div>
      </div>

      {/* 3. BREADCRUMB SUB-HEADER */}
      <div className="bg-white border-b border-slate-200 px-6 py-2 flex items-center justify-between text-xs text-slate-600">
        <div className="flex items-center gap-2 flex-wrap">
          <Link href="/knowledge-hub/4g-lte" className="text-[#005696] font-bold hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" /> Back to 4G LTE Hub
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/knowledge-hub" className="hover:underline">Knowledge Hub</Link>
          <span className="text-slate-300">/</span>
          <Link href="/knowledge-hub/4g-lte" className="hover:underline">4G LTE</Link>
          <span className="text-slate-300">/</span>
          <span className="font-bold text-[#005696]">{title}</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-slate-500">
          <span>Private group</span>
          <span className="flex items-center gap-1"><Users className="w-3 h-3" /> 1 member</span>
          <span className="cursor-pointer font-bold">•••</span>
        </div>
      </div>

      {/* 4. HERO BANNER (Midnight Navy Theme Matching 4G Hub) */}
      <div className="relative bg-gradient-to-r from-[#03152e] via-[#082a52] to-[#011429] text-white px-6 md:px-8 py-7 overflow-hidden border-b border-blue-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${badgeStyle}`}>
                {badge}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-cyan-200 border border-white/10">
                {taxDate}
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white drop-shadow-md flex items-center gap-2.5">
              {IconComponent && <IconComponent className="w-7 h-7 text-cyan-300 shrink-0" />}
              <span>{title}</span>
            </h1>

            <p className="text-xs md:text-sm text-cyan-100/90 font-medium leading-relaxed">
              {subtitle}
            </p>

            {/* Author Metadata */}
            <div className="flex items-center gap-3 pt-1">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-700 border border-cyan-400 flex items-center justify-center font-bold text-xs text-white shadow-sm">
                CR
              </div>
              <div className="text-xs">
                <p className="font-bold text-white">{author}</p>
                <p className="text-[11px] text-cyan-200/90">{authorRole}</p>
              </div>
            </div>
          </div>

          {/* Quick Highlight Cards (If Provided) */}
          {stats && stats.length > 0 && (
            <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3.5 text-center min-w-[130px] space-y-1 shadow-xs"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-200 block">
                    {stat.label}
                  </span>
                  <p className="text-xl md:text-2xl font-black text-white">{stat.value}</p>
                  {stat.sub && <p className="text-[10px] text-cyan-100/80 font-medium">{stat.sub}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 5. QUICK TOPIC JUMP RIBBON (The 9 SharePoint Navigation Buttons) */}
      <div className="bg-white border-b border-slate-200 px-6 py-2.5 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
          <Link
            href="/knowledge-hub/4g-lte"
            className="px-3 py-1.5 rounded-lg font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 whitespace-nowrap flex items-center gap-1 shrink-0 transition-colors"
          >
            <Layers className="w-3.5 h-3.5 text-[#005696]" />
            <span>4G Hub</span>
          </Link>
          <span className="text-slate-300">|</span>
          {LTE_QUICK_NAV_ITEMS.map((topic) => {
            const isActive = topic.id === currentTopicId;
            return (
              <Link
                key={topic.id}
                href={topic.href}
                className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition-all shrink-0 ${
                  isActive
                    ? 'bg-[#005696] text-white shadow-xs ring-2 ring-[#005696]/20'
                    : 'bg-blue-50/70 hover:bg-blue-100/90 text-[#005696] border border-blue-200/60'
                }`}
              >
                {topic.label}
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  );
}

