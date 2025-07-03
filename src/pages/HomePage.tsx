import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Users, Share2, Shield, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up">
                Digital Business Cards for Modern Professionals
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
                Create, customize, and share your digital business card in minutes. Make a lasting impression with interactive, eco-friendly cards.
              </p>
              <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
                <Link to="/register">
                  <Button variant="secondary" size="lg" rightIcon={<ArrowRight size={20} />}>
                    Get Started for Free
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
              <div className="relative animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="absolute -top-4 -right-4 w-72 h-96 bg-secondary-500 rounded-xl transform rotate-6"></div>
                <div className="absolute -bottom-4 -left-4 w-72 h-96 bg-accent-500 rounded-xl transform -rotate-6"></div>
                <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl w-72 h-96">
                  <div className="h-24 bg-primary-600 px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-16 w-16 rounded-full bg-white"></div>
                      <div className="ml-4">
                        <div className="h-6 w-32 bg-white/30 rounded"></div>
                        <div className="h-4 w-24 bg-white/20 rounded mt-2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-primary-100"></div>
                        <div className="h-4 w-48 bg-gray-200 rounded ml-3"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-primary-100"></div>
                        <div className="h-4 w-40 bg-gray-200 rounded ml-3"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-primary-100"></div>
                        <div className="h-4 w-44 bg-gray-200 rounded ml-3"></div>
                      </div>
                    </div>
                    <div className="mt-8 flex justify-center">
                      <div className="h-32 w-32 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose CardConnect</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              The complete platform for creating and managing digital business cards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Stunning Templates</h3>
              <p className="text-gray-600">
                Choose from a library of professional templates designed to impress.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-secondary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Management</h3>
              <p className="text-gray-600">
                Easily manage cards for your entire team with admin controls.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="h-6 w-6 text-accent-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Sharing</h3>
              <p className="text-gray-600">
                Share your card via QR code, NFC, or direct link with anyone.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Security</h3>
              <p className="text-gray-600">
                Your business information is protected with enterprise-grade security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that works for you or your team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Free</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">$0</span>
                  <span className="ml-1 text-xl text-gray-500">/month</span>
                </div>
                <p className="mt-4 text-gray-600">Perfect for individuals getting started with digital business cards.</p>
              </div>
              <div className="px-6 pt-2 pb-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2 text-gray-600">1 digital business card</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2 text-gray-600">Basic templates</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2 text-gray-600">QR code sharing</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/register">
                    <Button variant="outline" fullWidth>
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-primary-500 relative">
              <div className="absolute top-0 right-0">
                <div className="bg-primary-500 text-white px-4 py-1 text-sm font-medium">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Professional</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">$12</span>
                  <span className="ml-1 text-xl text-gray-500">/month</span>
                </div>
                <p className="mt-4 text-gray-600">For professionals who need more cards and features.</p>
              </div>
              <div className="px-6 pt-2 pb-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2 text-gray-600">Up to 5 digital business cards</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2 text-gray-600">All premium templates</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2 text-gray-600">NFC capabilities</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2 text-gray-600">Advanced analytics</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/register">
                    <Button variant="primary" fullWidth>
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Business Plan */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Business</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">$29</span>
                  <span className="ml-1 text-xl text-gray-500">/month</span>
                </div>
                <p className="mt-4 text-gray-600">For teams that need to manage multiple members and cards.</p>
              </div>
              <div className="px-6 pt-2 pb-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2 text-gray-600">Unlimited business cards</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2 text-gray-600">Team management</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2 text-gray-600">Brand customization</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2 text-gray-600">Priority support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/register">
                    <Button variant="outline" fullWidth>
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your networking?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who have already made the switch to digital business cards.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register">
              <Button variant="secondary" size="lg">
                Create Your Card Now
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                See Live Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <CreditCard className="h-8 w-8 text-white" />
                <span className="ml-2 text-xl font-bold text-white">CardConnect</span>
              </div>
              <p className="mt-4 text-sm">
                The modern way to share your contact information professionally.
              </p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Products</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Digital Business Cards</a></li>
                <li><a href="#" className="hover:text-white">Team Management</a></li>
                <li><a href="#" className="hover:text-white">Enterprise Solutions</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Tutorials</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 CardConnect. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;