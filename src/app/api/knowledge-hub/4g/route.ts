import { NextRequest, NextResponse } from 'next/server';
import {
  MAIN_PACKAGES, DATA_ADDONS, PREPAID_CONNECTION_CHARGES, RELOAD_VALIDITY_MATRIX,
  NEW_HBB_ANYTIME_PACKAGES, VOLUME_BASED_PACKAGES, LEGACY_ANYTIME_PACKAGES,
  UNLIMITED_RESIDENTIAL_PACKAGES, UNLIMITED_SME_PACKAGES,
  UNLIMITED_VOICE_PACKAGES, STANDARD_VOICE_PACKAGES_MATRIX
} from '@/data/fourGLteCatalog';

type Row = Record<string, unknown>;

function amount(value: unknown): number | null {
  if (typeof value === 'number') return Number.isFinite(value) ? value : null;
  if (typeof value !== 'string') return null;
  const cleaned = value.replace(/,/g, '').replace(/Rs\.?\s*/gi, '').trim();
  return /^\d+(?:\.\d+)?$/.test(cleaned) ? Number(cleaned) : null;
}

function normalize(row: Row, type: 'prepaid' | 'postpaid', category: string) {
  const name = String(row.name ?? row.pkg ?? row.type ?? 'Unnamed plan');
  const status = String(row.status ?? (category === 'legacy-anytime' ? 'Discontinued' : 'Not specified'));
  const price = amount(row.price ?? row.rental);
  const priceWithTax = amount(row.rentalWithTax ?? row.withTax);
  const priceWithoutTax = amount(row.rentalWithoutTax ?? row.withoutTax ?? row.rental);
  const dataQuota = row.volume ?? row.total ?? row.dataOffering ?? row.data ?? row.fup ?? null;
  return {
    id: String(row.id ?? `${type}-${category}-${name.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`),
    name, type, category, status,
    priceLkr: type === 'prepaid' ? price : (priceWithTax ?? price),
    priceWithTaxLkr: priceWithTax,
    priceWithoutTaxLkr: priceWithoutTax,
    taxIncluded: type === 'postpaid' && priceWithTax !== null ? true : null,
    dataQuota, quota: dataQuota,
    validity: row.validity ?? (type === 'postpaid' ? 'Monthly' : null),
    recurrence: row.recurrence ?? null,
    speed: row.speed ?? null,
    description: row.notes ?? row.desc ?? row.remarks ?? row.description ?? null,
    commitment: row.commitment ?? null,
    sourcePage: type === 'prepaid'
      ? 'https://smart-knowledge-hub-sandy.vercel.app/knowledge-hub/4g-lte/prepaid'
      : category === 'voice'
        ? 'https://smart-knowledge-hub-sandy.vercel.app/knowledge-hub/4g-lte/voice'
        : 'https://smart-knowledge-hub-sandy.vercel.app/knowledge-hub/4g-lte/broadband'
  };
}

const prepaid = [
  ...MAIN_PACKAGES.map(row => normalize(row, 'prepaid', 'main')),
  ...DATA_ADDONS.map(row => normalize(row, 'prepaid', 'data-addon'))
];
const postpaid = [
  ...NEW_HBB_ANYTIME_PACKAGES.map(row => normalize(row, 'postpaid', 'hbb-anytime')),
  ...VOLUME_BASED_PACKAGES.map(row => normalize(row, 'postpaid', 'volume-based')),
  ...LEGACY_ANYTIME_PACKAGES.map(row => normalize(row, 'postpaid', 'legacy-anytime')),
  ...UNLIMITED_RESIDENTIAL_PACKAGES.map(row => normalize(row, 'postpaid', 'unlimited-residential')),
  ...UNLIMITED_SME_PACKAGES.map(row => normalize(row, 'postpaid', 'unlimited-sme')),
  ...UNLIMITED_VOICE_PACKAGES.map(row => normalize(row, 'postpaid', 'voice')),
  ...STANDARD_VOICE_PACKAGES_MATRIX.map(row => normalize(row, 'postpaid', 'voice'))
];

export function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const section = params.get('section')?.toLowerCase() ?? 'all';
  const search = params.get('search')?.toLowerCase().trim() ?? '';
  const valid = ['all','prepaid','postpaid','connection','validity'];
  if (!valid.includes(section)) {
    return NextResponse.json({success:false,error:'Invalid section',validSections:valid},{status:400});
  }
  const filter = (items: typeof prepaid) =>
    search ? items.filter(item => [item.name,item.category,item.description,item.dataQuota].some(v => String(v ?? '').toLowerCase().includes(search))) : items;
  const result: Record<string,unknown> = {
    success: true,
    meta: {
      source: 'Smart Knowledge Hub 4G LTE page catalog',
      note: 'Rates mirror repository content. Verify current tariffs before quoting customers.',
      generatedAt: new Date().toISOString()
    }
  };
  if (section === 'all' || section === 'prepaid') result.prepaid = filter(prepaid);
  if (section === 'all' || section === 'postpaid') result.postpaid = filter(postpaid);
  if (section === 'all' || section === 'connection') result.connectionCharges = PREPAID_CONNECTION_CHARGES;
  if (section === 'all' || section === 'validity') result.reloadValidity = RELOAD_VALIDITY_MATRIX;
  return NextResponse.json(result, {headers:{'Cache-Control':'public, s-maxage=300, stale-while-revalidate=3600'}});
}
