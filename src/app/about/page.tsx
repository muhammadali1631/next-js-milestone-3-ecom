
export default function page() {
  return (
    <>
        
      <div className="bg-gray-50 min-h-screen">
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
          </div>
        </header>

        <main className="container mx-auto px-4 py-10">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to our e-commerce platform! We are dedicated to bringing you the best shopping experience with a wide variety of products, seamless navigation, and top-notch customer service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to revolutionize online shopping by making it simple, reliable, and enjoyable. We aim to connect people with the products they love, while ensuring a secure and efficient shopping experience.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us</h2>
            <ul className="list-disc pl-5 text-gray-600 leading-relaxed">
              <li>Wide selection of high-quality products</li>
              <li>User-friendly website and navigation</li>
              <li>Secure payment options</li>
              <li>Fast and reliable shipping</li>
              <li>Exceptional customer service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              Have questions or need assistance? Feel free to reach out to us through our contact page. We’re here to help!
            </p>
          </section>
        </main>

    
      </div>
    </>
  );
}
