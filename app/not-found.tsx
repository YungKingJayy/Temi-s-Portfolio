import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-6xl md:text-8xl font-bold mb-6">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Page Not Found
      </h2>
      <p className="text-lg mb-8 max-w-md mx-auto text-gray-600">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
