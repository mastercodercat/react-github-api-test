import React, { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "components/Header";
import Loader from "components/Loader";
import ErrorBoundary from "components/ErrorBoundary";

import Routes from "Routes";

import "Vendor.ts";

const App = () => {
  return (
    <HelmetProvider>
      <Header />
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <ErrorBoundary>
            <Routes />
          </ErrorBoundary>
        </BrowserRouter>
      </Suspense>
      <ToastContainer />
    </HelmetProvider>
  );
};

export default App;
