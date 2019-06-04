import React, { Suspense } from "react";
import { ErrorBoundary, FallbackView } from "react-error-boundaries";
import { BrowserRouter as Router } from "react-router-dom";
import { FluentCustomizations } from "@uifabric/fluent-theme";
import { Customizer, mergeStyles } from "office-ui-fabric-react";

import { PageLoader } from "../components/Spinners";

// Inject some global styles
mergeStyles({
  selectors: {
    ":global(body), :global(html), :global(#root)": {
      margin: 0,
      padding: 0,
      height: "100vh"
    }
  }
});

const AppKernel = Component => {
  return () => (
    <Customizer {...FluentCustomizations}>
      <ErrorBoundary FallbackComponent={FallbackView}>
        <Suspense fallback={<PageLoader />}>
          <Router>
            <Component />
          </Router>
        </Suspense>
      </ErrorBoundary>
    </Customizer>
  );
};

export default AppKernel;
