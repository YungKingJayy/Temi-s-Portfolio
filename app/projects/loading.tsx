export default function ProjectsLoading() {
  return (
    <section className="max-w-3xl mx-auto py-20 px-4">
      <div className="animate-pulse">
        <div className="h-10 w-48 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-8"></div>
        <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-12"></div>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Project card skeletons */}
          {[1, 2].map((item) => (
            <div
              key={item}
              className="bg-white dark:bg-neutral-900 rounded-xl shadow p-6"
            >
              <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
              <div className="h-7 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
              <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
              <div className="h-9 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
