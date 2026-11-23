import { NextRequest } from 'next/server';
import { getFourGSection } from '@/lib/fourGApi';

export function GET(request: NextRequest) {
  return getFourGSection('postpaid', request.nextUrl.searchParams.get('search')?.toLowerCase().trim() ?? '');
}
