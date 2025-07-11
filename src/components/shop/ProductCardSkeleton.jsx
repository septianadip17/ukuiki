export default function ProductCardSkeleton() {
  return (
    <div className="animate-pulse w-72 md:w-auto flex flex-col overflow-hidden rounded-2xl bg-white shadow">
      <div className="h-60 w-full bg-gray-200" />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="h-4 w-2/3 bg-gray-300 rounded" />
        <div className="h-3 w-full bg-gray-200 rounded" />
        <div className="h-3 w-3/4 bg-gray-200 rounded" />
        <div className="mt-auto h-8 w-1/2 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}
