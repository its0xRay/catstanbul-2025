import { MapPin } from 'lucide-react';
import { CountdownTimer } from './components/CountdownTimer';
import { Agenda } from './components/Agenda';
import { FAQs } from './components/FAQs';
import { XLogo } from './components/XLogo';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        {/* Banner Image */}
        <div className="max-w-4xl mx-auto mb-12">
          <img
            src="https://pbs.twimg.com/media/GdXG6qBW8AAJ2BH?format=png&name=900x900"
            alt="Istanbul Cityscape"
            className="rounded-2xl shadow-2xl w-full"
          />
        </div>

        {/* Countdown Timer */}
        <CountdownTimer />
      </div>

      {/* Agenda Section */}
      <section className="py-12 px-4">
        <Agenda />
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center">
        <h2 className="text-4xl font-bold mb-6">Guests</h2>
        <p className="text-xl mb-16">Announcements Soon!</p>
        <a
          href="https://x.com/JupiterExchange/status/1861622817554604076"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
        >
          Need travel subsidy? Apply here
        </a>
        <br />
        <a
          href="https://x.com/JupiterExchange"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 mt-4"
        >
          <XLogo />
          <span className="ml-2">Follow Jupiter for updates!</span>
        </a>
      </section>

      {/* FAQs Section */}
      <section className="py-12 px-4">
        <FAQs />
      </section>

      {/* Footer */}
      <footer className="text-center py-8">
        <a
          href="https://x.com/its0xRay"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-colors duration-300"
        >
          Made with ❤︎ by @its0xRay
        </a>
      </footer>
    </div>
  );
}

export default App;