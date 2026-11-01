import { NextRequest, NextResponse } from 'next/server';
import {
  TRIO_PACKAGES,
  TRIO_OPERATIONAL_SOPS,
  TRIO_FAQS,
  TRIO_COMPARISON_MATRIX,
  TRIO_AI_SYSTEM_CONTEXT,
  getTrioPackageById
} from '@/data/trioPackages';

/**
 * SLT-Mobitel Knowledge Hub - Trio Bundled Packages API
 * 
 * Specially architected for:
 * 1. AI Bot / LLM Agents (RAG ingestion, natural language retrieval, structured Q&A)
 * 2. Contact Center CRM & C-Log integration
 * 3. Frontend Knowledge Hub dynamic renders
 * 
 * Supported query params:
 * - format: 'json' (default) | 'rag' | 'markdown' | 'ai-prompt'
 * - package: 'shine' | 'vibe-plus' | 'vibe' | 'pet'
 * - section: 'all' | 'packages' | 'taxes' | 'sops' | 'faqs' | 'comparison'
 * - search: keyword search across packages, rules, and FAQs
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get('format') || 'json';
  const pkgParam = searchParams.get('package');
  const section = searchParams.get('section') || 'all';
  const search = searchParams.get('search')?.toLowerCase() || '';

  // 1. Return LLM System Prompt / RAG format if requested
  if (format === 'rag' || format === 'markdown' || format === 'ai-prompt') {
    return new NextResponse(TRIO_AI_SYSTEM_CONTEXT, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'X-AI-Engine': 'Gemini-RAG-Optimized',
        'X-Knowledge-Pillar': 'SLT-FTTH-TRIO'
      }
    });
  }

  // 2. Filter by specific package if requested
  if (pkgParam) {
    const pkg = getTrioPackageById(pkgParam);
    if (!pkg) {
      return NextResponse.json(
        {
          success: false,
          error: `Trio package '${pkgParam}' not found. Valid options: 'shine', 'vibe-plus', 'vibe', 'pet'.`
        },
        { status: 404 }
      );
    }
    return NextResponse.json({
      success: true,
      meta: {
        timestamp: new Date().toISOString(),
        query: { package: pkgParam }
      },
      package: pkg
    });
  }

  // 3. Search filter support for AI Bot function calling
  let packagesResult = TRIO_PACKAGES;
  let sopsResult = TRIO_OPERATIONAL_SOPS;
  let faqsResult = TRIO_FAQS;

  if (search) {
    packagesResult = packagesResult.filter(
      p =>
        p.name.toLowerCase().includes(search) ||
        p.tagline.toLowerCase().includes(search) ||
        p.highlights.some(h => h.toLowerCase().includes(search))
    );
    sopsResult = sopsResult.filter(
      s =>
        s.title.toLowerCase().includes(search) ||
        s.description.toLowerCase().includes(search) ||
        s.ruleCode.toLowerCase().includes(search)
    );
    faqsResult = faqsResult.filter(
      f =>
        f.question.toLowerCase().includes(search) ||
        f.answer.toLowerCase().includes(search)
    );
  }

  // 4. Section filtering
  const responseData: Record<string, any> = {
    success: true,
    telemetry: {
      domain: 'SLT_FIBRE_TRIO_BUNDLES',
      version: '2026.1',
      lastUpdated: '2026-11-01',
      ragEndpoint: '/api/knowledge-hub/trio?format=rag',
      curatedBy: 'Eroshana Rathnayake (Broadband & VAS Knowledge Hub)'
    }
  };

  if (section === 'all' || section === 'packages') {
    responseData.packages = packagesResult;
  }
  if (section === 'all' || section === 'taxes') {
    responseData.taxMatrix = packagesResult.map(p => ({
      packageId: p.id,
      packageName: p.name,
      basePriceWithoutTax: p.pricing.basePriceWithoutTaxLkr,
      priceWithTax: p.pricing.priceWithTaxLkr,
      effectiveTaxRate: `${p.pricing.effectiveTaxRatePercentage}%`,
      totalTaxAmount: p.pricing.totalTaxLkr,
      statutoryTaxBreakdown: p.pricing.taxBreakdown,
      serviceAllocations: p.pricing.serviceBreakdowns
    }));
  }
  if (section === 'all' || section === 'sops') {
    responseData.operationalSops = sopsResult;
  }
  if (section === 'all' || section === 'faqs') {
    responseData.faqs = faqsResult;
  }
  if (section === 'all' || section === 'comparison') {
    responseData.comparisonMatrix = TRIO_COMPARISON_MATRIX;
  }

  // Provide embedded AI context summary for easy LLM ingestion
  responseData.aiContextSummary = {
    title: 'SLT Trio Triple Play Bundles',
    commitmentPeriodMonths: 12,
    earlyTerminationFeeLkr: 1000,
    voiceLineRentalIncluded: true,
    supportedInfrastructure: ['SLT Optical Fibre (FTTH)', 'Megaline Copper (upon upgrade to FTTH)'],
    activationHotline: '1212 (Contact Centre)',
    notes: 'Telecommunication Levy (TL 15%) is legally applied only to Voice Line Rental and PEO TV, not Broadband data.'
  };

  return NextResponse.json(responseData, {
    status: 200,
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      'X-Knowledge-Hub-Entity': 'TrioPackages'
    }
  });
}

