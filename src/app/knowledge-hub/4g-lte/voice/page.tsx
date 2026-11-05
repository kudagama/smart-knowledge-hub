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
  Home,
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
  Award
} from 'lucide-react';

const STANDARD_VOICE_PACKAGES = [
  {
    id: 'voice_pal_single',
    planCategory: '4G Voice Pal (Single Play)',
    name: 'Voice Pal Postpaid Residential',
    rental: '310 / 499',
    badge: 'Single Play Voice',
    badgeStyle: 'bg-teal-100 text-teal-900 border-teal-300',
    onNetPeak: 'Rs. 1.70 / min',
    onNetLeisure: 'Rs. 1.00 / min',
    offNetPeak: 'Rs. 2.70 / min',
    offNetLeisure: 'Rs. 2.00 / min',
    freeMinutes: '100 On-Net Free Minutes (Residential)',
    bestFor: 'Dedicated voice telephone without fixed internet bundle.'
  },
  {
    id: 'dp_voice',
    planCategory: 'Double Play (Voice + BB)',
    name: 'Residential Double Play Voice',
    rental: 'Included with BB',
    badge: 'Bundled with BB',
    badgeStyle: 'bg-blue-100 text-blue-900 border-blue-300',
    onNetPeak: 'Rs. 1.70 / min',
    onNetLeisure: 'Rs. 1.00 / min',
    offNetPeak: 'Rs. 2.70 / min',
    offNetLeisure: 'Rs. 2.00 / min',
    freeMinutes: 'Free VAS bundle (CLI, Call Waiting, Forwarding)',
    bestFor: 'Home subscribers pairing fixed broadband with fixed voice.'
  },
  {
    id: 'biz_voice',
    planCategory: 'Business / Corporate',
    name: 'Business Voice Pal / DP',
    rental: '499',
    badge: 'Business Plan',
    badgeStyle: 'bg-purple-100 text-purple-900 border-purple-300',
    onNetPeak: 'Rs. 1.70 (1-3 min) / Rs. 1.00 (>3 min)',
    onNetLeisure: 'Rs. 1.70 / Rs. 1.00',
    offNetPeak: 'Rs. 2.70 / min',
    offNetLeisure: 'Rs. 2.00 / min',
    freeMinutes: 'CLI, Hunting, 3-Party Conferencing, Absentee',
    bestFor: 'Offices, retail counters, and corporate PBX hunt groups.'
  },
  {
    id: 'religious_voice',
    planCategory: 'Religious Institute',
    name: 'Religious Package',
    rental: 'Concessionary',
    badge: 'Welfare Concession',
    badgeStyle: 'bg-amber-100 text-amber-900 border-amber-300',
    onNetPeak: 'Concession Rates',
    onNetLeisure: 'Concession Rates',
    offNetPeak: 'Concession Rates',
    offNetLeisure: 'Concession Rates',
    freeMinutes: 'Free incoming calls & restricted outgoing controls',
    bestFor: 'Temples, churches, mosques, and registered religious bodies.'
  }
];

const UNLIMITED_VOICE_PACKAGES = [
  {
    id: 'unlimited_home',
    plan: 'Unlimited Home Double Play Rs. 745',
    rental: '745',
    category: 'Double Play Residential',
    badge: 'Most Popular',
    badgeStyle: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    subCategories: 'Domestic / Individual | SLT Staff | Higher Education Residential',
    features: [
      'Unlimited Voice calls to ANY local network (On-net & Off-net)',
      'Concurrent HD VoLTE audio with full 4G broadband speed',
      'Geographical 011-2XXXXXX telephone number allocation',
      'No peak/off-peak minute restrictions'
    ]
  },
  {
    id: 'unlimited_office',
    plan: 'Unlimited Office Double Play Rs. 745',
    rental: '745',
    category: 'Double Play Business',
    badge: 'SME & Corporate',
    badgeStyle: 'bg-blue-100 text-blue-900 border-blue-300',
    subCategories: 'Business / Enterprise / SME / Legal / Medical Practices',
    features: [
      'Unlimited outgoing business calls to mobile and fixed lines island-wide',
      'Dedicated 7-digit geographical business identity',
      'Hunt Group and multi-extension routing compatible',
      'Predictable fixed monthly telephony expense'
    ]
  },
  {
    id: 'unlimited_religious',
    plan: 'Unlimited Religious Double Play Rs. 745',
    rental: '745',
    category: 'Religious Institute',
    badge: 'Religious Trust',
    badgeStyle: 'bg-amber-100 text-amber-900 border-amber-300',
    subCategories: 'Registered temples, churches, kovils, and mosques',
    features: [
      'Unlimited calls to all Sri Lankan networks',
      'Zero bill shock on welfare communications',
      'Crystal clear HD VoLTE voice clarity',
      'Concessionary administrative verification'
    ]
  },
  {
    id: 'unlimited_voice_pal',
    plan: 'Unlimited 4G Single Play Voice Pal Rs. 745',
    rental: '745',
    category: 'Single Play Voice',
    badge: 'No Internet Needed',
    badgeStyle: 'bg-teal-100 text-teal-900 border-teal-300',
    subCategories: 'Dedicated VoLTE Desk Phone without broadband package',
    features: [
      'Unlimited flat-rate calling for senior citizens & domestic phone users',
      'Works seamlessly on VoLTE fixed desk phones',
      'CityLink CDMA number retention option',
      'Zero broadband data commitment required'
    ]
  }
];

export default function LteVoicePackagesPage() {
  const [activeTab, setActiveTab] = useState<'unlimited' | 'standard'>('unlimited');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const ttUnlimitedHome = `SERVICE: SLT 4G VoLTE (Fixed Voice)
PLAN: Unlimited Home Double Play Rs. 745
SERVICE ORDER TYPE: CREATE (New Customer) / MODIFY (Migration from Copper/CDMA)
CALL ALLOWANCE: Unlimited Calls to Any Local Network (On-net & Off-net)
NUMBER PRESERVATION: Geographical series (011-2XXXXXX / CityLink retained)
QUALITY: Voice over LTE (VoLTE) High-Definition Audio Codec
RENTAL: Rs. 745 / month (Postpaid)
TARGET: VOICE-PROVISIONING / FRONT-OFFICE`;

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f1f5f9] overflow-y-auto select-none text-slate-800">
      
      {/* UNIFIED SHAREPOINT PORTAL HEADER & 9-TOPIC QUICK SWITCHER */}
      <LteSubpageHeader
        currentTopicId="voice"
        title="LTE Voice Packages & VoLTE Services"
        subtitle="High-definition Voice over LTE tariffs and flat-rate Unlimited Voice plans (Rs. 745/mo). Geographical number series allocation (011-2XXXXXX), concurrent high-speed broadband usage, and stepped rate comparisons."
        badge="VoLTE HD Telephony"
        badgeStyle="bg-teal-400/20 text-teal-300 border-teal-300/30"
        taxDate="Active Geo: 011-2XXXXXX"
        author="Chathurani Rathnayake"
        authorRole="Senior Assistant Manager (Customer Relations) - A7"
        icon={Phone}
        stats={[
          { label: 'Unlimited Any-Net', value: 'Rs. 745', sub: 'Flat Rate Monthly (Any Net)' },
          { label: 'Off-Peak Minute', value: 'Rs. 1.00', sub: 'SLT-to-SLT off-peak' },
          { label: 'Number Format', value: '011-2XXXXXX', sub: 'Standard Geo Landline' }
        ]}
      />

      {/* 4. NAVIGATION & TAB TOOLBAR */}
      <div className="bg-white border-b border-slate-300 px-6 py-3.5 sticky top-0 z-20 shadow-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3.5">
          
          {/* Main Switcher */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('unlimited')}
              className={`px-4 py-2 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 ${
                activeTab === 'unlimited'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Unlimited Voice Plans (Rs. 745)</span>
            </button>
            <button
              onClick={() => setActiveTab('standard')}
              className={`px-4 py-2 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 ${
                activeTab === 'standard'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <PhoneCall className="w-4 h-4" />
              <span>Standard Postpaid Plans &amp; Call Rates</span>
            </button>
          </div>

          {/* Toggle View Mode */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl shrink-0">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                viewMode === 'cards' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <span>Visual Cards</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                viewMode === 'table' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <span>Data Table</span>
            </button>
          </div>

        </div>
      </div>

      {/* 5. MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* ======================================================== */}
          {/* TAB 1: UNLIMITED VOICE PLANS (RS. 745)                   */}
          {/* ======================================================== */}
          {activeTab === 'unlimited' && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-teal-100 rounded-xl">
                      <Sparkles className="w-6 h-6 text-teal-700" />
                    </div>
                    <span>Unlimited Any-Net Voice Plans (Flat Rate Rs. 745/Month)</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Free unlimited voice calls to any local fixed or mobile network (SLT, Mobitel, Dialog, Airtel, Hutch).
                  </p>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-teal-50 text-teal-900 border border-teal-300 font-bold text-xs">
                  Zero Peak/Off-Peak Limits
                </span>
              </div>

              {viewMode === 'cards' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {UNLIMITED_VOICE_PACKAGES.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="bg-white rounded-3xl border-2 border-slate-200 hover:border-teal-500 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${pkg.badgeStyle}`}>
                            {pkg.badge}
                          </span>
                          <span className="text-xs font-bold text-slate-400">{pkg.category}</span>
                        </div>

                        <h3 className="font-black text-xl text-slate-900 group-hover:text-teal-800 transition-colors">
                          {pkg.plan}
                        </h3>

                        {/* Price Block */}
                        <div className="p-4 bg-teal-50/60 rounded-2xl border border-teal-100 flex items-baseline justify-between">
                          <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                              Monthly Rental
                            </span>
                            <div className="flex items-baseline gap-1 mt-0.5">
                              <span className="text-sm font-bold text-slate-500">Rs.</span>
                              <span className="text-3xl font-black text-teal-800">{pkg.rental}</span>
                              <span className="text-xs text-slate-500 font-medium">/ month</span>
                            </div>
                          </div>
                          <span className="px-3 py-1 bg-white rounded-xl border border-teal-200 text-teal-900 font-bold text-xs">
                            Postpaid
                          </span>
                        </div>

                        <div className="text-xs text-slate-500 font-medium bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          <strong>Target Subscribers:</strong> {pkg.subCategories}
                        </div>

                        <ul className="space-y-2 text-xs text-slate-700 font-medium pt-1">
                          {pkg.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-slate-400">Unlimited Any-Net</span>
                        <button
                          onClick={() => copyToClipboard(`SERVICE: 4G VoLTE Unlimited Voice\nPLAN: ${pkg.plan}\nMONTHLY RENTAL: Rs. ${pkg.rental}\nBENEFITS: Unlimited calls to Any Local Network`, pkg.id)}
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
                          <th className="p-4 w-1/3">Unlimited Plan Name</th>
                          <th className="p-4">Monthly Rental</th>
                          <th className="p-4">Sub-Categories / Target Profile</th>
                          <th className="p-4">Call Allowance &amp; Quality</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                        {UNLIMITED_VOICE_PACKAGES.map((pkg) => (
                          <tr key={pkg.id} className="hover:bg-teal-50/40 transition-colors">
                            <td className="p-4 font-bold text-slate-900">
                              <span className="block text-sm font-black">{pkg.plan}</span>
                              <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border inline-block mt-1 ${pkg.badgeStyle}`}>
                                {pkg.badge}
                              </span>
                            </td>
                            <td className="p-4 font-mono font-black text-lg text-teal-800">
                              Rs. {pkg.rental}
                            </td>
                            <td className="p-4 text-slate-600 leading-relaxed">
                              {pkg.subCategories}
                            </td>
                            <td className="p-4 text-slate-600 space-y-1">
                              <span className="font-bold text-emerald-700 block">Unlimited Calls to Any Local Network</span>
                              <span className="text-[11px] text-slate-500">HD VoLTE codec | Concurrent data</span>
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
          {/* TAB 2: STANDARD PLANS & CALL CHARGES                     */}
          {/* ======================================================== */}
          {activeTab === 'standard' && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-blue-100 rounded-xl">
                      <PhoneCall className="w-6 h-6 text-[#005696]" />
                    </div>
                    <span>Standard Voice Plans &amp; Minute Rates</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Metered calling rates for Residential, Business, and Voice Pal subscribers.
                  </p>
                </div>
              </div>

              {viewMode === 'cards' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {STANDARD_VOICE_PACKAGES.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="bg-white rounded-3xl border-2 border-slate-200 hover:border-[#005696] p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${pkg.badgeStyle}`}>
                            {pkg.badge}
                          </span>
                          <span className="text-xs font-bold text-slate-400">{pkg.planCategory}</span>
                        </div>

                        <h3 className="font-black text-xl text-slate-900 group-hover:text-[#005696] transition-colors">
                          {pkg.name}
                        </h3>

                        {/* Rental */}
                        <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-baseline justify-between">
                          <span className="text-xs text-slate-500 font-bold uppercase">Monthly Rental</span>
                          <span className="font-mono font-black text-lg text-slate-900">{pkg.rental}</span>
                        </div>

                        {/* Rate Grid */}
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 space-y-1">
                            <span className="font-bold text-[#005696] block uppercase text-[10px]">On-Net Rates</span>
                            <p className="text-slate-700">Peak: <strong>{pkg.onNetPeak}</strong></p>
                            <p className="text-slate-700">Leisure: <strong>{pkg.onNetLeisure}</strong></p>
                          </div>
                          <div className="p-3 bg-purple-50/70 rounded-xl border border-purple-100 space-y-1">
                            <span className="font-bold text-purple-900 block uppercase text-[10px]">Off-Net Rates</span>
                            <p className="text-slate-700">Peak: <strong>{pkg.offNetPeak}</strong></p>
                            <p className="text-slate-700">Leisure: <strong>{pkg.offNetLeisure}</strong></p>
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 font-medium">
                          <strong>Free Benefits:</strong> {pkg.freeMinutes}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-slate-400">Postpaid Stepped Rates</span>
                        <button
                          onClick={() => copyToClipboard(`PACKAGE: ${pkg.name}\nRENTAL: Rs. ${pkg.rental}\nON-NET: ${pkg.onNetPeak} / ${pkg.onNetLeisure}\nOFF-NET: ${pkg.offNetPeak} / ${pkg.offNetLeisure}\nFREE MINUTES: ${pkg.freeMinutes}`, pkg.id)}
                          className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#005696] font-bold text-xs flex items-center gap-1.5 transition-colors border border-slate-200"
                        >
                          {copiedId === pkg.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedId === pkg.id ? 'Copied Rates!' : 'Copy Rates'}</span>
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
                          <th className="p-3.5">Category / Name</th>
                          <th className="p-3.5">Monthly Rental (Rs.)</th>
                          <th className="p-3.5">On-Net Peak</th>
                          <th className="p-3.5">On-Net Leisure</th>
                          <th className="p-3.5">Off-Net Peak</th>
                          <th className="p-3.5">Off-Net Leisure</th>
                          <th className="p-3.5">Free Minutes / VAS</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                        {STANDARD_VOICE_PACKAGES.map((pkg) => (
                          <tr key={pkg.id} className="hover:bg-slate-50 transition-colors">
                            <td className="p-3.5 font-bold text-slate-900">
                              <span className="block text-sm">{pkg.name}</span>
                              <span className="text-[10px] text-slate-400">{pkg.planCategory}</span>
                            </td>
                            <td className="p-3.5 font-mono font-bold text-slate-800">{pkg.rental}</td>
                            <td className="p-3.5 font-mono text-emerald-700 font-bold">{pkg.onNetPeak}</td>
                            <td className="p-3.5 font-mono text-emerald-800">{pkg.onNetLeisure}</td>
                            <td className="p-3.5 font-mono text-slate-800 font-bold">{pkg.offNetPeak}</td>
                            <td className="p-3.5 font-mono text-slate-700">{pkg.offNetLeisure}</td>
                            <td className="p-3.5 text-slate-600">{pkg.freeMinutes}</td>
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
          {/* SECTION C: CALL TIME BANDS & TECHNICAL FEATURES          */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Call Time Bands */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-teal-800 font-black text-xs uppercase tracking-wider">
                <Clock className="w-5 h-5 text-teal-600" />
                <span>Call Time Bands Definition</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <span className="font-bold text-slate-700">Active / Peak Hours:</span>
                  <span className="font-mono font-bold text-slate-900">08:00 hrs – 18:00 hrs</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <span className="font-bold text-slate-700">Leisure / Off-Peak Hours:</span>
                  <span className="font-mono font-bold text-slate-900">18:00 hrs – 08:00 hrs &amp; Holidays</span>
                </div>
              </div>
            </div>

            {/* VoLTE Advantages */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#005696] font-black text-xs uppercase tracking-wider">
                <ShieldCheck className="w-5 h-5 text-[#005696]" />
                <span>VoLTE Telephony Features</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 font-medium leading-relaxed list-disc list-inside">
                <li>Voice over LTE (VoLTE) allows crystal-clear audio codecs without degrading broadband.</li>
                <li>Geographical telephone numbering series: <strong>011-2XXXXXX</strong> allocated based on area.</li>
                <li>Seamless migration from copper/CDMA while preserving the existing telephone number.</li>
              </ul>
            </div>

          </div>

          {/* ======================================================== */}
          {/* SECTION D: C-LOG TEMPLATE                                */}
          {/* ======================================================== */}
          <div className="bg-slate-900 rounded-3xl border-2 border-slate-800 p-6 shadow-md space-y-3 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-teal-400" />
                <span className="font-mono text-sm font-bold text-teal-300">
                  C-Log Service Order: Unlimited Home Double Play Activation (Rs. 745)
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(ttUnlimitedHome, 'tt-voice')}
                className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white text-xs rounded-xl font-bold flex items-center gap-2 transition-colors shadow-xs"
              >
                {copiedId === 'tt-voice' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                <span>{copiedId === 'tt-voice' ? 'Copied Template!' : 'Copy Order Template'}</span>
              </button>
            </div>
            <pre className="text-teal-200 font-mono text-xs leading-relaxed whitespace-pre-wrap p-2 bg-black/30 rounded-xl overflow-x-auto">
              {ttUnlimitedHome}
            </pre>
          </div>

          {/* Bottom Sequential Navigation */}
          <div className="flex items-center justify-between pt-6 border-t-2 border-slate-200">
            <Link
              href="/knowledge-hub/4g-lte/cat-6"
              className="text-sm font-bold text-slate-600 hover:text-slate-900 flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to CAT 6 Charges</span>
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
