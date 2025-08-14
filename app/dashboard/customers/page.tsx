import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import CustomersTable from '@/app/ui/customers/table';
import Search from '@/app/ui/search';

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  return (
    <div className='w-full'>
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 md:mt-8">
        <Search placeholder="Search customers..." />
      </div>
      <div className="mt-6 flow-root">
        <Suspense fallback={<CustomersTableSkeleton />}>
          <CustomersTable query={query} />
        </Suspense>
      </div>
    </div>
  );
} 
