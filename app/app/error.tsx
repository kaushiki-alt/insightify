"use client";

import ErrorState from "@/components/ErrorPage";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <ErrorState
      message={error.message}
      reset={reset}
    />
  );
}