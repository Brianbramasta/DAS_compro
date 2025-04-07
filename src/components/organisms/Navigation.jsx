import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/about" className="border-custom text-custom inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Tentang Kami
              </Link>
              {/* Other navigation links */}
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center space-x-4">
            <button className="!rounded-button bg-custom px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}