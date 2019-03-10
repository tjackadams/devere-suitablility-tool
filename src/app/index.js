import React, { Suspense } from "react";
import { ErrorBoundary, FallbackView } from "react-error-boundaries";

import "./index.css";

const AppKernel = Component => {
  return () => (
    <ErrorBoundary FallbackComponent={FallbackView}>
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppKernel;
