import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Layanan</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="#" className="text-base text-gray-300 hover:text-white">Layanan Digital</Link></li>
              <li><Link href="#" className="text-base text-gray-300 hover:text-white">Pusat Data</Link></li>
              <li><Link href="#" className="text-base text-gray-300 hover:text-white">Interkoneksi</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Perusahaan</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/about" className="text-base text-gray-300 hover:text-white">Tentang Kami</Link></li>
              <li><Link href="#" className="text-base text-gray-300 hover:text-white">Karir</Link></li>
              <li><Link href="#" className="text-base text-gray-300 hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="#" className="text-base text-gray-300 hover:text-white">Kebijakan Privasi</Link></li>
              <li><Link href="#" className="text-base text-gray-300 hover:text-white">Syarat Penggunaan</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-4">
              <img className="h-8 w-auto" src="/logo.png" alt="Company Logo" />
              <span className="text-gray-300 text-sm">© {new Date().getFullYear()} PT Delta Art Star</span>
            </div>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Add other social icons similarly */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}