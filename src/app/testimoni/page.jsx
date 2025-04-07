import Navigation from '@/components/organisms/Navigation';
import Footer from '@/components/organisms/Footer';

export default function TestimoniPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="relative bg-gradient-to-r from-indigo-900 via-custom to-blue-600 py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
                Apa Kata Klien Kami
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Lihat pengalaman mitra yang telah bekerja sama dengan kami
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white py-16">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full" src="/user-placeholder.jpg" alt="User avatar" />
                    </div>
                    <div className="ml-4">
                      <div className="text-lg font-medium">Nama Klien</div>
                      <div className="text-sm text-gray-600">Direktur Perusahaan</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600">
                    "Pelayanan profesional dan solusi infrastruktur yang diberikan sangat membantu perkembangan bisnis kami."
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}