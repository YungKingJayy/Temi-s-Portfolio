"use client";

import { Suspense } from "react";
import AppLoader from "./AppLoader";

export default function AppLoaderWrapper() {
  return (
    <Suspense
      fallback={
        <div className="fixed top-0 left-0 h-[3px] bg-secondary z-[9999] w-[20%]" />
      }
    >
      <AppLoader />
    </Suspense>
  );
}
