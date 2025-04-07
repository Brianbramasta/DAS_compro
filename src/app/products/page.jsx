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
                <i className="fas fa-server text-2xl text-custom mr-3"></i>
                <h3 className="text-xl font-bold">Data Center Solutions</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Layanan colocation dan managed hosting dengan uptime 99.99%
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>24/7 Monitoring</li>
                <li>Redundant Power Supply</li>
                <li>Dukungan Teknis Profesional</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <i className="fas fa-cloud text-2xl text-custom mr-3"></i>
                <h3 className="text-xl font-bold">Cloud Services</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Infrastruktur cloud publik, privat, dan hybrid yang skalabel
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Auto-scaling</li>
                <li>Backup Otomatis</li>
                <li>Multi-layer Security</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <i className="fas fa-shield-alt text-2xl text-custom mr-3"></i>
                <h3 className="text-xl font-bold">Keamanan Jaringan</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Proteksi lengkap untuk infrastruktur digital Anda
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Firewall Management</li>
                <li>DDoS Protection</li>
                <li>Security Audit</li>
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