import { NextRequest } from 'next/server';
import { getFourGSection } from '@/lib/fourGApi';

export function GET(request: NextRequest) {
  return getFourGSection('prepaid', request.nextUrl.searchParams.get('search')?.toLowerCase().trim() ?? '');
}
