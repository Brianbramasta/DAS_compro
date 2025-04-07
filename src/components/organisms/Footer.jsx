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
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Dukungan</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="#" className="text-base text-gray-300 hover:text-white">Dokumentasi</Link></li>
              <li><Link href="#" className="text-base text-gray-300 hover:text-white">Bantuan</Link></li>
              <li><Link href="#" className="text-base text-gray-300 hover:text-white">Status Layanan</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Perusahaan</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/about" className="text-base text-gray-300 hover:text-white">Tentang Kami</Link></li>
              <li><Link href="#" className="text-base text-gray-300 hover:text-white">Karir</Link></li>
              <li><Link href="#" className="text-base text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link href="/kemitraan" className="text-base text-gray-300 hover:text-white">Kemitraan</Link></li>
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
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}