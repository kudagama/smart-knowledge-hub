"use client";

import React, { useState } from 'react';
import Link from 'next/link';
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
  Info
} from 'lucide-react';

const STANDARD_VOICE_PACKAGES = [
  {
    planCategory: '4G Voice Pal (Single Play)',
    name: 'Basic / Postpaid Voice Pal',
    rental: '310 / 499',
    onNetPeak: 'Rs. 1.70 / min',
    onNetLeisure: 'Rs. 1.00 / min',
    offNetPeak: 'Rs. 2.70 / min',
    offNetLeisure: 'Rs. 2.00 / min',
    freeMinutes: '100 On-Net Free Minutes (Residential)'
  },
  {
    planCategory: 'Double Play (Voice + BB)',
    name: 'Residential Double Play Voice',
    rental: 'Based on BB Plan',
    onNetPeak: 'Rs. 1.70 / min',
    onNetLeisure: 'Rs. 1.00 / min',
    offNetPeak: 'Rs. 2.70 / min',
    offNetLeisure: 'Rs. 2.00 / min',
    freeMinutes: 'Free VAS package bundle included'
  },
  {
    planCategory: 'Business / Corporate',
    name: 'Business Voice Pal / DP',
    rental: '499',
    onNetPeak: 'Rs. 1.70 (Up to 3 min) / Rs. 1.00 (>3 min)',
    onNetLeisure: 'Rs. 1.70 / Rs. 1.00',
    offNetPeak: 'Rs. 2.70 / min',
    offNetLeisure: 'Rs. 2.00 / min',
    freeMinutes: 'CLI, Call Waiting, Hunting, Conferencing'
  },
  {
    planCategory: 'Religious',
    name: 'Religious Package',
    rental: 'Concessionary rental',
    onNetPeak: 'Concession rates apply',
    onNetLeisure: 'Concession rates apply',
    offNetPeak: 'Concession rates apply',
    offNetLeisure: 'Concession rates apply',
    freeMinutes: 'Free incoming & restricted outgoing options'
  }
];

const UNLIMITED_VOICE_PACKAGES = [
  {
    plan: 'Unlimited Home Double Play Rs. 745',
    orderType: 'CREATE (New Customers) | MODIFY (Existing Migration)',
    subCategories: '• Domestic / Individual\n• SLT Staff Residential\n• Higher Education Residential',
    classification: '4G LTE Double Play',
    advantages: [
      'Unlimited calls to any network in Sri Lanka',
      'Crystal clear HD VoLTE call quality',
      'Postpaid package billing',
      'No unexpected high voice bills',
      'Keep existing copper/CDMA number',
      'No commitment period lock'
    ]
  },
  {
    plan: 'Unlimited Office Double Play Rs. 745',
    orderType: 'CREATE (New Customers) | MODIFY (Existing Migration)',
    subCategories: '• Business / Offices\n• Government Institutions\n• SME Customers',
    classification: '4G LTE Double Play',
    advantages: [
      'Unlimited calls to any network',
      'Fixed voice clarity over LTE',
      'Consolidated postpaid corporate billing',
      'Dedicated hunt group support'
    ]
  },
  {
    plan: 'Unlimited 4G Religious Double Play Rs. 745',
    orderType: 'CREATE (New Customers) | MODIFY (Existing Migration)',
    subCategories: '• Temples, Churches, Mosques & Kovils\n• Registered Religious Institutions',
    classification: '4G LTE Double Play',
    advantages: [
      'Unlimited any-net voice calls',
      'Concessionary base setup and billing waiver',
      'Reliable community communications'
    ]
  },
  {
    plan: 'Unlimited 4G Single Play Voice Pal Rs. 745',
    orderType: 'CREATE (New Customers) | MODIFY (Existing Migration)',
    subCategories: '• Individual Customers\n• Business / SME\n• Government & Religious',
    classification: '4G Voice Pal (Single Play)',
    advantages: [
      'Unlimited voice calling without mandatory BB data bundle',
      'Works with standard VoLTE desk phone unit',
      'Ideal for senior citizens & voice-centric premises'
    ]
  }
];

export default function LteVoicePackagesPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const ttVoLteUnlimited = `SERVICE: SLT 4G VoLTE (Fixed Voice)
PLAN: Unlimited Home Double Play Rs. 745
SERVICE ORDER TYPE: CREATE (New Customer) / MODIFY (Migration from Copper/CDMA)
CALL ALLOWANCE: Unlimited Calls to Any Local Network (On-net & Off-net)
NUMBER PRESERVATION: Geographical series (011-2XXXXXX / CityLink retained)
QUALITY: Voice over LTE (VoLTE) High-Definition Audio Codec
RENTAL: Rs. 745 / month (Postpaid)`;

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f4f7f9] overflow-y-auto select-none">
      
      {/* 1. TOP SHAREPOINT BAR */}
      <div className="bg-[#005a9c] text-white px-4 py-2 flex items-center justify-between text-xs shadow-xs shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/knowledge-hub" className="flex items-center gap-1.5 cursor-pointer hover:opacity-80">
            <Grid className="w-4 h-4 text-white" />
            <span className="font-bold tracking-tight text-sm">SharePoint</span>
          </Link>
          <span className="text-xs text-teal-200">| 4G VoLTE Voice Packages</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="hidden sm:inline text-cyan-100 font-medium">SLT-Mobitel Intranet</span>
          <div className="w-7 h-7 rounded-full bg-cyan-700 border border-cyan-400 flex items-center justify-center font-bold text-[11px] text-white">
            CR
          </div>
        </div>
      </div>

      {/* 2. BREADCRUMB */}
      <div className="bg-white border-b border-slate-200 px-6 py-2.5 flex items-center justify-between text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Link href="/knowledge-hub/4g-lte" className="text-[#005696] font-bold hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to 4G LTE Services
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/knowledge-hub" className="hover:underline">Knowledge Hub</Link>
          <span className="text-slate-300">/</span>
          <Link href="/knowledge-hub/4g-lte" className="hover:underline">4G LTE</Link>
          <span className="text-slate-300">/</span>
          <span className="font-bold text-teal-800">Voice Packages (VoLTE)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200 text-xs font-mono font-bold">
            Geo Series: 011-2XXXXXX
          </span>
        </div>
      </div>

      {/* 3. HERO BANNER */}
      <div className="relative bg-gradient-to-r from-teal-950 via-slate-900 to-indigo-950 text-white px-8 py-8 overflow-hidden border-b border-teal-800/40">
        <div className="max-w-6xl mx-auto space-y-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-teal-400/20 text-teal-300 border border-teal-300/30">
              VoLTE HD Voice
            </span>
            <span className="text-xs text-teal-200">Voice over LTE &amp; Concurrent Broadband</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-teal-500/20 border border-teal-400/40">
              <Phone className="w-6 h-6 text-teal-300" />
            </div>
            <span>LTE Voice Packages &amp; VoLTE Services</span>
          </h1>

          <p className="text-xs text-teal-100/90 max-w-3xl font-medium leading-relaxed">
            Standard call tariffs, Active &amp; Leisure time bands, geographical number allocation, and Unlimited Any-Net Voice plans (Rs. 745).
          </p>

          <div className="flex items-center gap-3 pt-1">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-teal-600 to-emerald-700 border border-teal-400 flex items-center justify-center font-bold text-xs text-white">
              CR
            </div>
            <div className="text-xs">
              <p className="font-bold text-white">Chathurani Rathnayake</p>
              <p className="text-[11px] text-teal-200/90">Senior Assistant Manager (Customer Relations) - A7</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-8 space-y-6">
        <div className="max-w-6xl mx-auto space-y-6">

          {/* Service Note Banner */}
          <div className="bg-white rounded-2xl border border-teal-200 p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                VoLTE Technological Advantage
              </span>
              <h3 className="text-base font-black text-slate-900">
                Voice over LTE (VoLTE) Concurrent Operation
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                Allows subscribers to make high-definition voice calls while concurrently maintaining full 4G broadband data streaming on the same connection without interruption.
              </p>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-slate-400 block uppercase">Number Allocation</span>
              <span className="px-3 py-1 rounded-lg bg-teal-600 text-white font-mono font-black text-xs inline-block mt-0.5">
                011-2XXXXXX Series
              </span>
            </div>
          </div>

          {/* Standard Voice Call Rates Table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs space-y-2 p-5">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
              Standard Voice Packages &amp; Call Charges Table
            </h3>

            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-black">
                    <th className="p-3">Plan Category</th>
                    <th className="p-3">Package Name</th>
                    <th className="p-3">Monthly Rental (Rs.)</th>
                    <th className="p-3">On-net (Peak / Active)</th>
                    <th className="p-3">On-net (Off-Peak / Leisure)</th>
                    <th className="p-3">Off-net (Peak / Active)</th>
                    <th className="p-3">Off-net (Off-Peak / Leisure)</th>
                    <th className="p-3">Free Minutes / Benefits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {STANDARD_VOICE_PACKAGES.map((v, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 font-bold text-slate-900">{v.planCategory}</td>
                      <td className="p-3 text-slate-700">{v.name}</td>
                      <td className="p-3 font-mono font-bold text-teal-800">{v.rental}</td>
                      <td className="p-3 font-mono text-slate-700">{v.onNetPeak}</td>
                      <td className="p-3 font-mono text-slate-700">{v.onNetLeisure}</td>
                      <td className="p-3 font-mono text-slate-700">{v.offNetPeak}</td>
                      <td className="p-3 font-mono text-slate-700">{v.offNetLeisure}</td>
                      <td className="p-3 text-slate-600 font-medium text-[11px]">{v.freeMinutes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Call Time Bands */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600" />
                <h4 className="font-black text-xs uppercase tracking-wider text-slate-900">Active Hours Time Band</h4>
              </div>
              <ul className="text-xs text-slate-600 space-y-1 pt-1">
                <li className="flex items-center justify-between p-2 rounded bg-slate-50">
                  <span className="font-bold text-slate-700">Monday to Friday:</span>
                  <span className="font-mono font-bold text-[#005696]">07:00 hrs to 19:00 hrs</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded bg-slate-50">
                  <span className="font-bold text-slate-700">Saturday:</span>
                  <span className="font-mono font-bold text-[#005696]">07:00 hrs to 14:00 hrs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                <h4 className="font-black text-xs uppercase tracking-wider text-slate-900">Leisure Hours Time Band</h4>
              </div>
              <ul className="text-xs text-slate-600 space-y-1 pt-1">
                <li className="flex items-center justify-between p-2 rounded bg-slate-50">
                  <span className="font-bold text-slate-700">Monday to Friday:</span>
                  <span className="font-mono font-bold text-emerald-700">00:00 to 07:00 &amp; 19:00 to 24:00</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded bg-slate-50">
                  <span className="font-bold text-slate-700">Saturday:</span>
                  <span className="font-mono font-bold text-emerald-700">14:00 to 24:00</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded bg-slate-50">
                  <span className="font-bold text-slate-700">Sunday &amp; Public Holidays:</span>
                  <span className="font-mono font-bold text-emerald-700">Full Day (24 Hours)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Unlimited Voice Packages Section */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Unlimited Voice Packages - 4G LTE (Rs. 745 Monthly Rental)</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Flat-rate unlimited calling to any fixed or mobile network in Sri Lanka.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs">
                Rs. 745 / mo (Postpaid)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {UNLIMITED_VOICE_PACKAGES.map((u, uIdx) => (
                <div key={uIdx} className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-teal-500 hover:shadow-md transition-all space-y-3">
                  <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-2">
                    <h4 className="font-black text-sm text-[#005696]">{u.plan}</h4>
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-[#005696] font-mono font-bold text-[9px]">
                      {u.classification}
                    </span>
                  </div>

                  <p className="text-[10px] text-slate-400 font-bold uppercase">{u.orderType}</p>

                  <div className="text-xs text-slate-700 space-y-1">
                    <span className="font-bold text-slate-800 block text-[11px]">Allowed Customer Sub-categories:</span>
                    <pre className="font-sans text-xs text-slate-600 whitespace-pre-wrap">{u.subCategories}</pre>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-1">
                    <span className="font-black text-[10px] text-slate-400 uppercase block mb-1">Key Advantages:</span>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {u.advantages.map((adv, aIdx) => (
                        <li key={aIdx} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trouble Ticket Template */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-sm space-y-3 text-white">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <span className="font-mono text-xs font-bold text-teal-300">
                Standard C-Log Service Order: 4G VoLTE Unlimited Voice (Rs. 745)
              </span>
              <button
                onClick={() => copyToClipboard(ttVoLteUnlimited, 'tt-voice')}
                className="px-3 py-1 bg-teal-600 hover:bg-teal-500 text-white text-xs rounded-lg font-bold flex items-center gap-1.5 transition-colors"
              >
                {copiedId === 'tt-voice' ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                <span>{copiedId === 'tt-voice' ? 'Copied Order!' : 'Copy Order'}</span>
              </button>
            </div>
            <pre className="text-lime-300 font-mono text-xs leading-relaxed whitespace-pre-wrap">
              {ttVoLteUnlimited}
            </pre>
          </div>

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between pt-2">
            <Link
              href="/knowledge-hub/4g-lte/cat-6"
              className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to CAT 6 Charges</span>
            </Link>

            <Link
              href="/knowledge-hub/4g-lte/broadband"
              className="px-4 py-2 rounded-xl bg-[#005696] hover:bg-[#004780] text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <span>Next: LTE Broadband Packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}

