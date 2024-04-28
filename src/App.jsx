import React, { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary'; // Import ErrorBoundary from 'react-error-boundary'
import fallbackRender from './components/ErrorBoundary';
import Spinner from './components/Spinner'; // Import Spinner component directly

const Random = lazy(() => import('./components/Random'));
const Tag = lazy(() => import('./components/Tag'));

export default function App() {
  return (
    <div className="w-full h-screen relative flex flex-col background overflow-x-hidden item-center">
      <h1 className="bg-white absolute rounded-lg w-11/12 text-center font-lightbold mt-[40px] mx-auto ml-14 mr-28 text-3xl">Random GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[110px]">
        <ErrorBoundary FallbackComponent={fallbackRender} onReset={() => {}}>
          <Suspense fallback={<Spinner />}>
            <Random />
            <Tag />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}
