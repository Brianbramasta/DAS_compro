import Navigation from '@/components/organisms/Navigation';
import Footer from '@/components/organisms/Footer';

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="relative bg-gradient-to-r from-indigo-900 via-custom to-blue-600 py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
                Galeri Proyek
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Karya Terbaik Kami dalam Membangun Infrastruktur Digital
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <button className="!rounded-button px-4 py-2 bg-custom text-white hover:bg-indigo-700">
              Semua Kategori
            </button>
            <button className="!rounded-button px-4 py-2 bg-gray-200 hover:bg-gray-300">
              Data Center
            </button>
            <button className="!rounded-button px-4 py-2 bg-gray-200 hover:bg-gray-300">
              Jaringan Fiber Optik
            </button>
            <button className="!rounded-button px-4 py-2 bg-gray-200 hover:bg-gray-300">
              Tower Telekomunikasi
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery items will be dynamically populated */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={`/projects/project-${item}.jpg`}
                  alt={`Project ${item}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-lg font-semibold text-white">Proyek Infrastruktur #{item}</h3>
                  <p className="text-gray-200 text-sm">Kategori: Data Center</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}