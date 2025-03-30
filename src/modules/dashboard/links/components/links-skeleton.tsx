import { Skeleton } from "@/core/components/ui/skeleton";

const LinksSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex justify-between">
        <Skeleton className="h-8 w-60 rounded-md" />
      </div>
      <div className="flex flex-col gap-6">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-md" />
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-5 w-48" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-9 w-20 rounded-md" />
                <Skeleton className="h-9 w-9 rounded-md" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LinksSkeleton;
