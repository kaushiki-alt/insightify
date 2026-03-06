"use client";

import { Button } from "@/components/ui/button";

type ErrorStateProps = {
  message?: string;
  reset?: () => void;
};

export default function ErrorState({
  message = "Something went wrong.",
  reset,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">

      <h2 className="text-xl font-semibold">
        Oops! Something went wrong
      </h2>

      <p className="text-muted-foreground max-w-md">
        {message}
      </p>

      {reset && (
        <Button onClick={reset}>
          Try again
        </Button>
      )}

    </div>
  );
}