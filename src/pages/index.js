import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md fixed w-full z-50">
        <div className="text-2xl font-bold text-blue-600">VidyaviharApp</div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <a href="#features" className="hover:text-blue-500">
              Features
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="hover:text-blue-500">
              How It Works
            </a>
          </li>
          <li>
            <a href="#benefits" className="hover:text-blue-500">
              Benefits
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-blue-500">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#cta" className="hover:text-blue-500">
              Join Now
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10 pt-32">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">Welcome to VidyaviharApp</h1>
          <p className="text-xl mb-8">
            Your Learning, Your Way. Anytime, Anywhere.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/hero-image.svg"
            alt="Learning Illustration"
            className="w-96"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-2xl font-semibold mb-4">Live Classes</h3>
              <p>
                Attend live interactive sessions with top educators and clear
                your doubts instantly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-2xl font-semibold mb-4">
                Personalized Dashboard
              </h3>
              <p>
                Track your progress, upcoming classes, and assessments all in
                one place.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-2xl font-semibold mb-4">Practice & Test</h3>
              <p>
                Unlimited practice sets and regular mock tests to boost your
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row gap-10 justify-center">
            <div className="flex-1">
              <h4 className="text-2xl font-semibold mb-2">Sign Up</h4>
              <p>Create your free account to get started with VidyaviharApp.</p>
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-semibold mb-2">Choose Courses</h4>
              <p>
                Pick subjects and courses you want to excel in and enroll
                instantly.
              </p>
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-semibold mb-2">Learn & Succeed</h4>
              <p>
                Attend classes, take tests, and achieve your learning goals
                seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose VidyaviharApp?
          </h2>
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li>Affordable learning programs for everyone.</li>
            <li>Access to India's top educators and mentors.</li>
            <li>Flexible scheduling to suit your lifestyle.</li>
            <li>Learn at your own pace with recorded classes.</li>
            <li>Instant doubt solving through chat support.</li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-100 p-6 rounded-xl">
              <p className="italic">
                "VidyaviharApp completely changed the way I study! Live classes
                are super interactive and effective."
              </p>
              <h4 className="mt-4 font-semibold">- Ananya Singh</h4>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl">
              <p className="italic">
                "Thanks to VidyaviharApp, I cracked my entrance exam with flying
                colors. Highly recommend!"
              </p>
              <h4 className="mt-4 font-semibold">- Rahul Sharma</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="cta"
        className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center"
      >
        <h2 className="text-4xl font-bold mb-6">
          Ready to Begin Your Learning Journey?
        </h2>
        <p className="text-xl mb-8">
          Sign up today and unlock unlimited learning opportunities.
        </p>
        <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100">
          Join Now
        </button>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-800 text-white text-center">
        <p>
          &copy; {new Date().getFullYear()} VidyaviharApp. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
