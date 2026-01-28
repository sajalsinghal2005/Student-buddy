import { Suspense } from 'react';
import AppLayout from '@/components/app-layout';

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppLayout />
    </Suspense>
  );
}
