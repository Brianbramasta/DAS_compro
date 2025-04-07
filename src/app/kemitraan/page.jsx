import Navigation from '@/components/organisms/Navigation';
import Footer from '@/components/organisms/Footer';

export default function KemitraanPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="relative bg-gradient-to-r from-indigo-900 via-custom to-blue-600 py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
                Program Kemitraan
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Bergabung menjadi mitra kami dan kembangkan bisnis Anda bersama kami
              </p>
              <div className="mt-10 sm:flex sm:justify-center">
                <a href="#" className="!rounded-button bg-white px-8 py-3 text-base font-medium text-custom hover:bg-indigo-50 md:py-4 md:px-10">
                  Daftar Menjadi Mitra
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-16">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Keuntungan Bermitra</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Pelatihan & Sertifikasi</h3>
                <p className="text-gray-600">Akses ke program pelatihan eksklusif dan sertifikasi industri</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Dukungan Teknis 24/7</h3>
                <p className="text-gray-600">Tim ahli kami siap membantu kapan saja</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Bagi Hasil Menguntungkan</h3>
                <p className="text-gray-600">Skema kemitraan dengan pembagian revenue yang kompetitif</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}