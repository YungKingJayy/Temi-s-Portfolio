export default function ProjectDetailLoading() {
  return (
    <section className="max-w-2xl mx-auto py-20 px-4">
      <div className="animate-pulse">
        {/* Title skeleton */}
        <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-lg mb-6"></div>

        {/* Image skeleton */}
        <div className="w-full h-[340px] bg-gray-200 dark:bg-gray-700 rounded-xl mb-6"></div>

        {/* Description skeleton - multiple lines */}
        <div className="space-y-3 mb-6">
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
        </div>

        {/* Tags skeleton */}
        <div className="flex gap-2 mb-6">
          {[1, 2, 3].map((tag) => (
            <div
              key={tag}
              className="h-7 w-20 bg-gray-200 dark:bg-gray-700 rounded-full"
            ></div>
          ))}
        </div>

        {/* Link buttons skeleton */}
        <div className="flex gap-4 mt-6">
          <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    </section>
  );
}
