import React, { Suspense } from "react";
import { ErrorBoundary, FallbackView } from "react-error-boundaries";

import { PageLoader } from "../components/Spinners";

import "./index.css";

const AppKernel = Component => {
  return () => (
    <ErrorBoundary FallbackComponent={FallbackView}>
      <Suspense fallback={<PageLoader />}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppKernel;
