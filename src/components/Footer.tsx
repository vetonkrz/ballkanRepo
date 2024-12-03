// app/components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p>We are dedicated to providing the best service. Our goal is to meet our customer's needs at every step.</p>
          </div>
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="list-none p-0">
              <li className="mb-1"><a href="/about" className="text-white hover:underline">About</a></li>
              <li className="mb-1"><a href="/services" className="text-white hover:underline">Services</a></li>
              <li className="mb-1"><a href="/contact" className="text-white hover:underline">Contact</a></li>
              <li className="mb-1"><a href="/privacy" className="text-white hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>Email: info@alphaecho.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2024 alphAEcho. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  