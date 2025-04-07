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
              <div className="relative group">
                <button className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Produk dan Servis 
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-16 hidden group-hover:block w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                  <Link href="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tower</Link>
                  <Link href="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Infrastruktur Jaringan</Link>
                  <Link href="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Data Center</Link>
                </div>
              </div>
              <Link href="/laman-berita" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Laman Berita
              </Link>
              <Link href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Solusi
              </Link>
              <Link href="/kemitraan" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Kemitraan
              </Link>
              <Link href="/testimoni" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Testimoni
              </Link>
              <Link href="/contact" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Kontak
              </Link>
          </div>
          <div className="hidden sm:flex sm:items-center space-x-4">
            <div className="relative group">
              <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M3 12h18M3 19h18" />
                </svg>
                Bahasa
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50 hidden group-hover:block">
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Indonesia</Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">中文</Link>
              </div>
            </div>
            <button className="!rounded-button bg-custom px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
}