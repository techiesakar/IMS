import { Skeleton } from "@mui/material";
import React from "react";

const BrandTableSkeleton = () => {
  return (
    <>
      {Array.from({ length: 6 }, (_, i) => i + 1).map((id) => {
        return (
          <tr>
            <td className="px-6 py-4">
              <Skeleton width={24} height={24} variant="rounded" />
            </td>
            <td className="px-6 py-4 ">
              <Skeleton width={24} height={24} variant="circular" />
            </td>

            <td className="px-6 py-4">
              <Skeleton width={40} height={40} variant="circular" />
            </td>
            <td className="px-6 py-4">
              <Skeleton width={240} height={24} variant="rounded" />
            </td>
            <td className="px-6 py-4">
              <div className="flex gap-2 items-center text-base">
                <Skeleton width={24} height={24} variant="circular" />
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default BrandTableSkeleton;
