import { Skeleton } from "@mui/material";

const SingleBrandSkeleton = () => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <h1 className="text-left font-semibold text-2xl">
          <Skeleton animation="wave" variant="text" width={210} height={26} />
        </h1>
        <div>
          <Skeleton
            animation="wave"
            variant="circular"
            width={60}
            height={60}
          />
        </div>

        <div className="grid grid-cols-12 gap-8">
          <h1 className="text-left font-semibold text-xl col-span-12">
            <Skeleton animation="wave" variant="text" width={210} height={26} />
          </h1>
          {Array.from({ length: 6 }, (_, i) => i + 1).map((id) => {
            return (
              <div
                key={id}
                className="max-w-sm col-span-2 bg-white border border-gray-200 rounded-lg shadow "
              >
                <Skeleton
                  animation="wave"
                  variant="rounded"
                  width="auto"
                  height={236}
                />

                <div className="p-5">
                  <Skeleton
                    animation="wave"
                    variant="text"
                    width={210}
                    height={26}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleBrandSkeleton;
