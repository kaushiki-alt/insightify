import { Skeleton } from "../ui/skeleton";

const UserDetailsSkeleton = () => {
  return (
    <div className="space-y-8">

      {/* DETAILS SECTION */}
      <section className="space-y-4">

        <Skeleton className="h-6 w-40" />

        <div className="grid md:grid-cols-[2fr_1fr] gap-6 items-start">

          {/* LEFT BIG CARD */}
          <div className="space-y-4 border rounded-lg p-6">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="flex justify-between">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-40" />
              </div>
            ))}
          </div>

          {/* RIGHT STACK */}
          <div className="flex flex-col gap-6">

            {/* ADDRESS CARD */}
            <div className="border rounded-lg p-6 space-y-4">
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-4 w-full" />
            </div>

            {/* BANK CARD */}
            <div className="border rounded-lg p-6 space-y-4">
              <Skeleton className="h-5 w-28" />

              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex justify-between">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-36" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ACCOUNT OVERVIEW */}
      <section className="space-y-4">

        <Skeleton className="h-6 w-48" />

        <div className="grid grid-cols-3 gap-6">

          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="border rounded-lg p-4 space-y-3">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-6 w-28" />
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default UserDetailsSkeleton;