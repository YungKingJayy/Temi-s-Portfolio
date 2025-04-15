// New projects page
export default function ProjectsPage() {
  return (
    <section className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
      <p className="text-lg text-center mb-12 text-gray-600 dark:text-gray-300">
        Here are some of the projects I’ve worked on. More details coming soon!
      </p>
      {/* Example project cards, replace with dynamic content as needed */}
      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white dark:bg-neutral-900 rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-2">Project One</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A short description of the project goes here.
          </p>
          <a href="#" className="text-secondary font-medium hover:underline">
            View Details
          </a>
        </div>
        <div className="bg-white dark:bg-neutral-900 rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-2">Project Two</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A short description of the project goes here.
          </p>
          <a href="#" className="text-secondary font-medium hover:underline">
            View Details
          </a>
        </div>
      </div>
    </section>
  );
}
