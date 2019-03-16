import React, { Suspense } from "react";
import { ErrorBoundary, FallbackView } from "react-error-boundaries";
import { BrowserRouter as Router } from "react-router-dom";

import { PageLoader } from "../components/Spinners";

const AppKernel = Component => {
  return () => (
    <ErrorBoundary FallbackComponent={FallbackView}>
      <Suspense fallback={<PageLoader />}>
        <Router>
          <Component />
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppKernel;
