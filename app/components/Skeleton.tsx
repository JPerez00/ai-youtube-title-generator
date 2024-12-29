// components/Skeleton.tsx
export default function Skeleton() {
    return (
      <div
        role="status"
        className="mx-auto mt-20 mb-20 w-full p-6 space-y-10 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700 transition-all"
      >
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex items-center justify-between pt-4">
            <div className="flex-1">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
          </div>
        ))}
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  