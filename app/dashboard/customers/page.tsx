import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { RevenueChartSkeleton } from '@/app/ui/skeletons';

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Customers
      </h1>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
      </div>
    </main>
  );
} 