const Footer = () => {
  return (
    <footer className="bg-blue-50 text-gray-800 py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left: Logo and Info */}
        <div>
          <h3 className="text-lg font-serif text-gray-700 mb-4">
            — BOOK VÆRELSE
          </h3>
          <div className="flex items-center mb-4">
            <img
              src="/logo.png"
              alt="Small Luxury Hotels"
              className="w-16 h-16 mr-4"
            />
            <div>
              <p className="text-sm text-gray-700 font-medium">EN DEL AF</p>
              <p className="text-sm text-gray-700">
                SMALL LUXURY HOTELS OF THE WORLD
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-600">
            Bemærk alle brugte billeder af hotellet er rendering.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-serif text-gray-700 mb-4">
            PARK LANE CPH
          </h3>
          <p className="text-sm mb-2">+ 45 7788 2900</p>
          <p className="text-sm mb-2">
            <a href="mailto:reservations@parklanecph.dk" className="underline">
              reservations@parklanecph.dk
            </a>
          </p>
          <p className="text-sm">Strandvejen 203, 2900 Hellerup</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook text-gray-700 text-xl"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram text-gray-700 text-xl"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin text-gray-700 text-xl"></i>
            </a>
          </div>
        </div>

        {/* Info Links */}
        <div>
          <h3 className="text-lg font-serif text-gray-700 mb-4">INFO</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-gray-700 hover:underline">
                Om hotellet
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-700 hover:underline">
                Kontakt
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-700 hover:underline">
                Værelser
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-serif text-gray-700 mb-4">
            TILMELD DIG VORES NYHEDSBREV
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            Få besked om vores enestående faciliteter og uforglemmelige
            øjeblikke.
          </p>
          <form>
            <input
              type="text"
              placeholder="Navn"
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            />
            <div className="flex items-center mb-4">
              <input type="checkbox" id="privacy" className="mr-2" />
              <label htmlFor="privacy" className="text-xs text-gray-600">
                Jeg accepterer{" "}
                <a href="#" className="underline">
                  privatlivspolitikken
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gray-700 text-white font-medium rounded hover:bg-gray-900 transition"
            >
              SEND
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-600">
        © 2024 – Alle rettigheder forbeholdes af Park Lane CPH
        <div className="mt-2">
          <a href="#" className="underline mr-4">
            Cookies
          </a>
          <a href="#" className="underline">
            Privatlivspolitik
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
