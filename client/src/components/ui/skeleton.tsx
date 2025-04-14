import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gradient-to-r from-muted/60 via-muted/70 to-muted/60 bg-[length:400%_100%]",
        className
      )}
      {...props}
    />
  );
}

export function SkeletonImage({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gradient-to-r from-muted/60 via-primary/10 to-muted/60 bg-[length:200%_100%]",
        className
      )}
      {...props}
    />
  );
}

export function SkeletonText({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "h-4 w-full animate-pulse rounded-md bg-gradient-to-r from-muted/60 via-muted/80 to-muted/60 bg-[length:400%_100%]",
        className
      )}
      {...props}
    />
  );
}