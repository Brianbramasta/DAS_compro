import Navigation from '@/components/organisms/Navigation';
import Footer from '@/components/organisms/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Hubungi Kami</h1>
            <p className="mt-4 text-lg text-gray-600">
              Silakan isi formulir berikut atau hubungi kami langsung
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-custom focus:ring-custom" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-custom focus:ring-custom" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nomor Telepon</label>
                    <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-custom focus:ring-custom" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Pesan</label>
                  <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-custom focus:ring-custom" />
                </div>

                <button
                  type="submit"
                  className="w-full !rounded-button bg-custom py-3 px-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-custom focus:ring-offset-2"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Kantor Pusat</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Jl. Sudirman No. 123</p>
                    <p>Jakarta Selatan, DKI Jakarta</p>
                    <p>Indonesia 12950</p>
                    <p>Telp: +62 21 1234 5678</p>
                    <p>Email: info@company.com</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Jam Operasional</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Senin - Jumat: 08:00 - 17:00 WIB</p>
                    <p>Sabtu: 08:00 - 12:00 WIB</p>
                    <p>Minggu &amp; Hari Libur: Tutup</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                    <textarea rows="4" className="w-full px-4 py-2 border rounded-md"></textarea>
                  </div>
                  <button type="submit" className="!rounded-button bg-custom px-6 py-3 text-white hover:bg-indigo-700">
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}