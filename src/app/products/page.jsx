import Navigation from '@/components/organisms/Navigation';
import Footer from '@/components/organisms/Footer';

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="relative bg-gradient-to-r from-indigo-900 via-custom to-blue-600 py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
                Produk & Layanan
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Solusi Lengkap untuk Kebutuhan Digital Anda
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <i className="fas fa-broadcast-tower text-2xl text-custom mr-3"></i>
                <h3 className="text-xl font-bold">Menara Telekomunikasi</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Penyediaan dan pengelolaan menara telekomunikasi strategis
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Jaringan 4G/LTE</li>
                <li>Desain & Konstruksi</li>
                <li>Pemeliharaan Berkala</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <i className="fas fa-network-wired text-2xl text-custom mr-3"></i>
                <h3 className="text-xl font-bold">Infrastruktur Jaringan</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Solusi jaringan terintegrasi untuk kebutuhan enterprise
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Jaringan Fiber Optik</li>
                <li>Wireless Backhaul</li>
                <li>MPLS & VPN</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <i className="fas fa-database text-2xl text-custom mr-3"></i>
                <h3 className="text-xl font-bold">Data Center</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Fasilitas Tier III dengan keamanan berlapis
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Colocation Server</li>
                <li>Disaster Recovery</li>
                <li>Cloud Hybrid</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a href="/contact" className="!rounded-button inline-block bg-custom text-white px-8 py-3 font-medium hover:bg-indigo-700">
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}