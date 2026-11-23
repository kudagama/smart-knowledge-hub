import Link from 'next/link';
import {
  NEW_HBB_ANYTIME_PACKAGES, VOLUME_BASED_PACKAGES, LEGACY_ANYTIME_PACKAGES,
  UNLIMITED_RESIDENTIAL_PACKAGES, UNLIMITED_SME_PACKAGES
} from '@/data/fourGLteCatalog';

type Plan = {
  id?: string;
  name: string;
  volume?: string;
  total?: string;
  speed?: string;
  dataOffering?: string;
  rental?: string;
  rentalWithTax?: string;
  rentalWithoutTax?: string;
  badge?: string;
  desc?: string;
  remarks?: string;
  fup?: string;
};

const groups: {title: string; subtitle: string; status?: 'legacy'; plans: Plan[]}[] = [
  {title:'HBB Anytime Packages',subtitle:'Postpaid monthly broadband packages', plans:NEW_HBB_ANYTIME_PACKAGES},
  {title:'Unlimited Residential',subtitle:'Speed-based LTE broadband packages',plans:UNLIMITED_RESIDENTIAL_PACKAGES},
  {title:'Unlimited SME',subtitle:'Business broadband packages with usage policies',plans:UNLIMITED_SME_PACKAGES},
  {title:'Volume-Based Packages',subtitle:'Peak and off-peak allowances',plans:VOLUME_BASED_PACKAGES},
  {title:'Legacy Anytime Packages',subtitle:'Discontinued / historical rates only — not for new sales',status:'legacy',plans:LEGACY_ANYTIME_PACKAGES}
];

export default function LtePostpaidPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <header className="bg-gradient-to-r from-indigo-950 via-blue-900 to-sky-900 px-5 py-10 text-white">
        <div className="mx-auto max-w-6xl">
          <Link href="/knowledge-hub/4g-lte" className="text-sm font-semibold text-sky-200 hover:underline">← 4G LTE Service Hub</Link>
          <p className="mt-5 text-xs font-bold uppercase tracking-widest text-blue-200">4G LTE · Postpaid</p>
          <h1 className="mt-2 text-3xl font-black">4G LTE Postpaid Packages</h1>
          <p className="mt-3 max-w-3xl text-sm text-sky-100">Monthly broadband rentals, data allowances and unlimited plans from the Knowledge Hub tariff catalog. Check current tariffs before quoting customers.</p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <Link href="/knowledge-hub/4g-lte/prepaid" className="rounded-xl border border-white/30 px-4 py-2 hover:bg-white/10">View Prepaid instead</Link>
            <Link href="/knowledge-hub/4g-lte/broadband" className="rounded-xl border border-white/30 px-4 py-2 hover:bg-white/10">Broadband operational procedures</Link>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-6xl space-y-9 px-5 py-8">
        {groups.map(group => (
          <section key={group.title} className="space-y-4">
            <div>
              <h2 className="text-xl font-extrabold">{group.title}</h2>
              <p className="text-sm text-slate-600">{group.subtitle}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.plans.map((plan,i) => (
                <article key={plan.id ?? `${group.title}-${i}`} className={`rounded-2xl border bg-white p-5 shadow-sm ${group.status === 'legacy' ? 'border-amber-300' : 'border-slate-200'}`}>
                  {group.status === 'legacy' && <span className="mb-2 inline-block rounded-full bg-amber-100 px-2 py-1 text-xs font-bold text-amber-900">Discontinued — reference only</span>}
                  <h3 className="text-base font-black text-slate-900">{plan.name}</h3>
                  <div className="mt-4 text-2xl font-black text-blue-800">
                    {plan.rentalWithTax ? `Rs. ${plan.rentalWithTax}` : plan.rental ? `Rs. ${plan.rental}` : 'Price not listed'}
                  </div>
                  <p className="text-xs text-slate-500">{plan.rentalWithTax ? 'Monthly, including tax' : 'Source rental; tax inclusion not specified'}</p>
                  {plan.rentalWithoutTax && <p className="mt-2 text-xs text-slate-600">Before tax: Rs. {plan.rentalWithoutTax}</p>}
                  {plan.rental && !plan.rentalWithoutTax && <p className="mt-2 text-xs text-slate-600">Base rental: Rs. {plan.rental}</p>}
                  {(plan.volume || plan.total || plan.dataOffering) && <p className="mt-3 rounded-xl bg-blue-50 px-3 py-2 text-sm font-bold text-blue-900">Data: {plan.volume ?? plan.total ?? plan.dataOffering}</p>}
                  {plan.speed && <p className="mt-2 text-sm text-slate-700">Speed: {plan.speed}</p>}
                  {(plan.desc || plan.remarks || plan.fup) && <p className="mt-3 text-sm leading-relaxed text-slate-600">{plan.desc ?? plan.remarks ?? plan.fup}</p>}
                </article>
              ))}
            </div>
          </section>
        ))}
        <p className="border-t border-slate-200 pt-6 text-xs text-slate-600">Knowledge Hub reference tables; historical packages are included for support only. Rates may require revalidation.</p>
      </div>
    </main>
  );
}
