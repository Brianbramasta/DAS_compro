import Navigation from '@/components/organisms/Navigation';
import Footer from '@/components/organisms/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="relative bg-gradient-to-r from-indigo-900 via-custom to-blue-600 py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
                Tentang Kami
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Membangun Masa Depan Digital Indonesia
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-center mb-8">Profil Perusahaan</h2>
            <p className="text-gray-600 text-lg">
              PT Delta Art Star merupakan perusahaan penyedia solusi infrastruktur digital terkemuka di Indonesia yang telah beroperasi sejak 2010. Kami mengkhususkan diri dalam pembangunan dan pengelolaan infrastruktur teknologi informasi kelas enterprise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-custom mb-4">Visi</h3>
              <p className="text-gray-600">
                Menjadi partner terdepan dalam transformasi digital di Indonesia melalui inovasi teknologi yang handal dan berkelanjutan.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-custom mb-4">Misi</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Menyediakan infrastruktur TI yang skalabel dan aman</li>
                <li>Memberikan solusi end-to-end untuk transformasi digital</li>
                <li>Membangun ekosistem teknologi yang berkelanjutan</li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Struktur Organisasi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Team members would be added here */}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}