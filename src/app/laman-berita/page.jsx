import Navigation from '@/components/organisms/Navigation';
import Footer from '@/components/organisms/Footer';

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="relative bg-gradient-to-r from-indigo-900 via-custom to-blue-600 py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
                Berita Terkini
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Update terbaru seputar perkembangan teknologi dan kerjasama kami
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white py-16">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <article key={item} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src="/news-placeholder.jpg" alt="News cover" />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-custom">
                        Kategori Berita
                      </p>
                      <a href="#" className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">Judul Berita Contoh {item}</p>
                        <p className="mt-3 text-base text-gray-500">
                          Deskripsi singkat berita yang memberikan gambaran umum tentang isi artikel lengkapnya.
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="ml-3">
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime="2024-03-15">15 Maret 2024</time>
                          <span aria-hidden="true">·</span>
                          <span>5 min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}