import { cn } from "@/lib/utils";
import { Skeleton, SkeletonImage, SkeletonText } from "@/components/ui/skeleton";
import { HTMLAttributes } from "react";

interface SkeletonLoaderProps extends HTMLAttributes<HTMLDivElement> {
  type?: "card" | "article" | "news" | "profile" | "header" | "section";
  count?: number;
  className?: string;
}

export default function SkeletonLoader({
  type = "card",
  count = 1,
  className,
  ...props
}: SkeletonLoaderProps) {
  // Determine which skeleton to render based on type
  const renderSkeleton = () => {
    switch (type) {
      case "card":
        return <CardSkeleton />;
      case "article":
        return <ArticleSkeleton />;
      case "news":
        return <NewsSkeleton />;
      case "profile":
        return <ProfileSkeleton />;
      case "header":
        return <HeaderSkeleton />;
      case "section":
        return <SectionSkeleton />;
      default:
        return <CardSkeleton />;
    }
  };

  // Render multiple skeletons if count > 1
  return (
    <div className={cn("grid gap-4", className)} {...props}>
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="skeleton-container">
            {renderSkeleton()}
          </div>
        ))}
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="flex flex-col space-y-3 rounded-lg border p-4">
      <SkeletonImage className="h-48 w-full rounded-md skeleton-image" />
      <div className="space-y-2 pt-2">
        <SkeletonText className="h-6 w-3/4" />
        <SkeletonText className="h-4 w-full" />
        <SkeletonText className="h-4 w-full" />
        <div className="flex items-center justify-between pt-4">
          <SkeletonText className="h-4 w-28" />
          <SkeletonText className="h-4 w-10" />
        </div>
      </div>
    </div>
  );
}

function ArticleSkeleton() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <SkeletonText className="h-8 w-3/4" />
        <SkeletonText className="h-4 w-1/2" />
      </div>
      <SkeletonImage className="h-64 w-full rounded-md skeleton-image" />
      <div className="space-y-2">
        <SkeletonText className="h-4 w-full" />
        <SkeletonText className="h-4 w-full" />
        <SkeletonText className="h-4 w-full" />
        <SkeletonText className="h-4 w-3/4" />
      </div>
      <div className="space-y-2">
        <SkeletonText className="h-4 w-full" />
        <SkeletonText className="h-4 w-full" />
        <SkeletonText className="h-4 w-2/3" />
      </div>
    </div>
  );
}

function NewsSkeleton() {
  return (
    <div className="flex flex-col md:flex-row gap-4 rounded-lg border p-4">
      <SkeletonImage className="h-48 md:w-1/3 w-full rounded-md skeleton-image" />
      <div className="space-y-3 md:w-2/3 w-full">
        <div className="flex items-center gap-2">
          <SkeletonText className="h-5 w-24" />
          <SkeletonText className="h-5 w-20" />
        </div>
        <SkeletonText className="h-7 w-5/6" />
        <SkeletonText className="h-4 w-full" />
        <SkeletonText className="h-4 w-full" />
        <SkeletonText className="h-4 w-3/4" />
        <div className="flex justify-between items-center mt-4">
          <SkeletonText className="h-4 w-24" />
          <SkeletonText className="h-4 w-20" />
        </div>
      </div>
    </div>
  );
}

function ProfileSkeleton() {
  return (
    <div className="flex flex-col items-center space-y-4 p-6 rounded-lg border">
      <SkeletonImage className="h-24 w-24 rounded-full skeleton-image" />
      <SkeletonText className="h-6 w-48" />
      <SkeletonText className="h-4 w-64" />
      <div className="flex gap-4 w-full justify-center pt-4">
        <SkeletonText className="h-8 w-24" />
        <SkeletonText className="h-8 w-24" />
      </div>
    </div>
  );
}

function HeaderSkeleton() {
  return (
    <div className="flex items-center justify-between p-4 border-b w-full">
      <div className="flex items-center gap-4">
        <SkeletonImage className="h-10 w-10 rounded skeleton-image" />
        <SkeletonText className="h-6 w-32" />
      </div>
      <div className="flex gap-2">
        <SkeletonText className="h-8 w-16 rounded-md" />
        <SkeletonText className="h-8 w-16 rounded-md" />
        <SkeletonText className="h-8 w-16 rounded-md" />
      </div>
    </div>
  );
}

function SectionSkeleton() {
  return (
    <div className="space-y-6 py-6">
      <div className="text-center space-y-2">
        <SkeletonText className="h-8 w-64 mx-auto" />
        <SkeletonText className="h-4 w-96 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {Array(3).fill(null).map((_, i) => (
          <div key={i} className="flex flex-col space-y-3 p-4 border rounded-lg">
            <SkeletonImage className="h-36 w-full rounded-md skeleton-image" />
            <SkeletonText className="h-6 w-3/4" />
            <SkeletonText className="h-4 w-full" />
            <SkeletonText className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    </div>
  );
}