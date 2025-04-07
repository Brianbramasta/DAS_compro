import Navigation from '@/components/organisms/Navigation';
import Footer from '@/components/organisms/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="relative bg-gradient-to-r from-indigo-900 via-custom to-blue-600 py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
                PT Delta Art Star
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Partner Terpercaya dalam Solusi Infrastruktur Digital
              </p>
              <div className="mt-10 sm:flex sm:justify-center">
                <a href="/contact" className="!rounded-button w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-custom hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service cards will be added here */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}