import { Skeleton } from "../ui/skeleton";

const UsersSkeleton = () => {
  return (
    <div className="space-y-6">

      {/* Page Heading */}
      <div className="space-y-2">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-4 w-full max-w-md" />
      </div>

      {/* Search Bar */}
      <Skeleton className="h-10 w-full max-w-sm" />

      {/* Table Skeleton */}
      <div className="space-y-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-5 items-center gap-4"
          >
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-16" />
          </div>
        ))}
      </div>

    </div>
  );
};

export default UsersSkeleton;