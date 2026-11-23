import { NextRequest } from 'next/server';
import { getFourGSection } from '@/lib/fourGApi';

export function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  return getFourGSection(params.get('section')?.toLowerCase() ?? 'all', params.get('search')?.toLowerCase().trim() ?? '');
}
