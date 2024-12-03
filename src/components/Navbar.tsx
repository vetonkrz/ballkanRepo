import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-opacity-80 py-3 px-6 shadow-lg">
        {/* Logo Section */}
        <div className="text-2xl font-extrabold text-orange-500 hover:text-orange-400 transition duration-300">
          <Link href="/">alphAEcho/Ballkani</Link>
        </div>
        
        {/* Links Section */}
        <div className="flex gap-8">
          <Link
            className="text-white text-lg font-semibold no-underline hover:text-orange-400 transition duration-300"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-white text-lg font-semibold no-underline hover:text-orange-400 transition duration-300"
            href="/team"
          >
            Team
          </Link>
          <Link
            className="text-white text-lg font-semibold no-underline hover:text-orange-400 transition duration-300"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-white text-lg font-semibold no-underline hover:text-orange-400 transition duration-300"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
