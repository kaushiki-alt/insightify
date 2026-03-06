import { Skeleton } from "../ui/skeleton";

const DashboardSkeleton = () => {
  return (
    <div className="space-y-8">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="border rounded-lg p-4 space-y-3">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-6 w-28" />
          </div>
        ))}
      </div>

      <div className="border rounded-lg p-6 space-y-4">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-60 w-full" />
      </div>

    </div>
  );
};

export default DashboardSkeleton;