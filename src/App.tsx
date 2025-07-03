import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  Users, 
  Award, 
  Clock, 
  CheckCircle, 
  Mail, 
  Phone, 
  Star,
  ArrowRight,
  Zap,
  Shield,
  Target,
  Globe,
  Instagram,
  BookOpen,
  ArrowLeft,
  Quote,
  MapPin
} from 'lucide-react';
import FloatingWhatsAppButton from './whatsapp';




function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [typedText, setTypedText] = useState('');
  const fullText = 'Premium Academic Writing Services';
  
  // Smooth scrolling setup
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.documentElement.style.scrollPaddingTop = '80px';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
      document.documentElement.style.scrollPaddingTop = '';
    };
  }, []);

  // Typing animation effect (run only once)
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const reviews = [
    {
      id: 1,
      name: "Priyanka Sharma",
      degree: "Masters in Business Administration",
      university: "University Canada West",
      rating: 5,
      review: "WORKAIDLY helped me a lot with all the assignments with exceptional quality. The content was thorough, the writing was excellent, and they delivered ahead of schedule. I couldn't have asked for better support during my MBA journey.",
      service: "Assignment Writing",
      date: "March 2025"
    },
    {
      id: 2,
      name: "Arjun Patel",
      degree: "MSc Data Analytics",
      university: "University Canada West",
      rating: 4.9,
      review: "For my capstone I needed an interactive Tableau dashboard that told a clear story from messy data. The WORKAIDLY team not only cleaned the dataset but also built a stunning dashboard with drill-downs and KPIs that wowed my instructors.",
      service: "Tableau and Data Visualization",
      date: "April 2025"
    },
    {
      id: 3,
      name: "Simran Gill",
      degree: "MSc in Cloud Computing",
      university: "University of Canada West",
      rating: 4.8,
      review: "My cloud-migration project felt overwhelming until I partnered with WORKAIDLY. They designed the entire AWS architecture diagram, cost-optimized the services, and wrote a rock-solid report that earned me top marks.",
      service: "Cloud Computing",
      date: "January 2024"
    },
    {
      id: 4,
      name: "Adeola Okafor",
      degree: "Master's in Business Administration in Fianance",
      university: "University of Canada West",
      rating: 4.7,
      review: "WORKAIDLY’s finance experts built an Excel with detailed Ratio Analysis for Finance Course. Their explanations of liquidity ratios and DCF assumptions were crystal-clear—exactly what I needed.",
      service: "Financial Analysis",
      date: "July 2024"
    },
    {
      id: 5,
      name: "Rohan Desai",
      degree: "MSc in Computer Science",
      university: "University of Canada West",
      rating: 5,
      review: "“The machine-learning notebook they delivered wasn’t just code—it included immaculate comments, hyper-parameter tuning, and a concise executive summary. The faculty said it was journal-ready!”",
      service: "Machine Learning project",
      date: "June 2025"
    },
    {
      id: 6,
      name: "Neelina Khan",
      degree: "Master's in Business Analytics in statistics",
      university: "Deakin University",
      rating: 4.6,
      review: "I turned to WORKAIDLY for help with a statistics assignment involving time-series forecasting. They broke down ARIMA vs. Prophet, ran diagnostics, and drew business insights I hadn’t even considered.",
      service: "Statistical Analysis",
      date: "May 2025"
    }
  ];

  const ReviewsPage = () => (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-sm fixed w-full z-50 border-b border-green-400/20 shadow-lg shadow-green-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/WorkAIDly.png" 
                alt="WorkAIDly Logo" 
                className="h-8 w-8 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                WORKAIDLY
              </span>
            </div>
            
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center space-x-2 text-green-400 hover:text-lime-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </header>

      {/* Reviews Hero Section */}
      <section className="pt-16 pb-16 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-transparent to-lime-400/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center py-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,197,94,0.5)] animate-pulse">
              Client Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how WORKAIDLY has helped students achieve academic excellence with our 
              <span className="text-green-400 font-semibold drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"> premium writing services</span>
            </p>
            <div className="flex items-center justify-center space-x-2 text-green-400">
              <Star className="h-6 w-6 fill-current drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
              <Star className="h-6 w-6 fill-current drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
              <Star className="h-6 w-6 fill-current drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
              <Star className="h-6 w-6 fill-current drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
              <Star className="h-6 w-6 fill-current drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
              <span className="ml-2 text-xl font-semibold">4.9 Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-transparent to-lime-400/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-900 p-6 rounded-xl border border-green-400/30 hover:border-green-400 transition-all duration-300 group hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-green-400/30 group-hover:text-green-400/50 transition-colors duration-300" />
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(Math.round(review.rating))].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-green-400 fill-current drop-shadow-[0_0_5px_rgba(34,197,94,0.8)]" />
                    ))}
                  </div>
                  <span className="ml-2 text-green-400 font-semibold">{review.rating}</span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{review.review}"
                </p>
                <div className="border-t border-green-400/20 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-green-400">{review.name}</h4>
                    <span className="text-sm text-gray-400">{review.date}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-1">{review.degree}</p>
                  <p className="text-sm text-gray-500 mb-2">{review.university}</p>
                  <div className="inline-block bg-green-400/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                    {review.service}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-400/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]">
              Our Track Record
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2 drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]">2000+</div>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2 drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]">97.3%</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2 drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]">15+</div>
              <p className="text-gray-300">Expert Writers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2 drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]">450+</div>
              <p className="text-gray-300">Happy Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-transparent to-lime-400/5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you achieve academic excellence with our premium writing services
          </p>
          <button
            onClick={() => setCurrentPage('home')}
            className="bg-gradient-to-r from-green-500 to-lime-400 hover:from-green-400 hover:to-lime-300 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)]"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-sm fixed w-full z-50 border-b border-green-400/20 shadow-lg shadow-green-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img 
                src="./WorkAIDly.png" 
                alt="WorkAIDly Logo" 
                className="h-8 w-8 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                WORKAIDLY
              </span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">Home</a>
              <a href="#services" className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">Services</a>
              <a href="#about" className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">About</a>
              <a href="#contact" className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">Contact</a>
            </nav>

            <button
              className="md:hidden text-green-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black border-t border-green-400/20">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-green-400 transition-all duration-300">Home</a>
                <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-green-400 transition-all duration-300">Services</a>
                <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-green-400 transition-all duration-300">About</a>
                <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-green-400 transition-all duration-300">Contact</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className=" pt-24 pb-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-transparent to-lime-400/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-green-400 drop-shadow-[0_0_30px_rgba(34,197,94,0.5)]">
              {typedText}
              <span className="inline-block w-0.5 h-8 bg-green-400 ml-1 animate-blink align-middle"></span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Expert writers delivering high-quality Reports, essays, and academic content with a 
              <span className="text-green-400 font-semibold drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"> neon edge</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-green-500 to-lime-400 hover:from-green-400 hover:to-lime-300 text-black px-10 py-5 w-56 h-16 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] flex items-center justify-center"
              >
                Get Started Today
              </button>
              <button 
                onClick={() => setCurrentPage('reviews')}
                className="border-2 border-green-400 hover:border-lime-300 text-green-400 hover:text-lime-300 px-10 py-5 w-56 h-16 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:bg-green-400/10 flex items-center justify-center"
              >
                Testimonials
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-400/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="text-center group transition-transform duration-700 ease-out hover:scale-105">
              <div className="bg-gradient-to-br from-green-500 to-lime-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                <Zap className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">Fast Delivery</h3>
              <p className="text-gray-400 text-lg">Quick turnaround times without compromising quality</p>
            </div>
            <div className="text-center group transition-transform duration-700 ease-out hover:scale-105">
              <div className="bg-gradient-to-br from-lime-500 to-green-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                <Shield className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">100% Original</h3>
              <p className="text-gray-400 text-lg">Plagiarism-free content with Turnitin reports</p>
            </div>
            <div className="text-center group transition-transform duration-700 ease-out hover:scale-105">
              <div className="bg-gradient-to-br from-green-400 to-lime-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                <Target className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">Expert Writers</h3>
              <p className="text-gray-400 text-lg">Qualified writers in various academic fields</p>
            </div>
            <div className="text-center group transition-transform duration-700 ease-out hover:scale-105">
              <div className="bg-gradient-to-br from-lime-400 to-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                <Globe className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">24/7 Support</h3>
              <p className="text-gray-400 text-lg">Round-the-clock customer service and assistance</p>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-16 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-transparent to-lime-400/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,197,94,0.5)] ">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive academic writing solutions for students at all levels
            </p>
          </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-xl border border-green-400/30 hover:border-green-400 transition-all duration-300 group hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-green-400 mr-3 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                <h3 className="text-xl font-semibold text-green-400">Assignment & Essays</h3>
              </div>
              <p className="text-gray-300 mb-4">
                We deliver well-researched, structured, and original assignments and essays across a wide range of academic subjects
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Subject-specific content</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Critical analysis and arguments</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Proper citations and formatting</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-green-400/30 hover:border-green-400 transition-all duration-300 group hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-green-400 mr-3 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                <h3 className="text-xl font-semibold text-green-400">Group Projects & Presentations</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Collaborative project support, from research and planning to design and presentation. Ideal for university coursework and team-based assignments
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Structured slides and visuals</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Group coordination assistance</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Speaker notes and practice tips</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-green-400/30 hover:border-green-400 transition-all duration-300 group hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-green-400 mr-3 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                <h3 className="text-xl font-semibold text-green-400">Coding & Cloud Computing</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Custom coding help across multiple languages and domains, from beginner assignments to advanced projects
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Clean, commented code</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />All type of Cloud Computing services</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Support for Multiple Programming languages</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-green-400/30 hover:border-green-400 transition-all duration-300 group hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-green-400 mr-3 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                <h3 className="text-xl font-semibold text-green-400">Data & Business Analysis</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Expert analysis for business, statistics, and data-related tasks using industry-standard tools and techniques
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Excel, Tableau, R, Python</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Statistical modeling & insights</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Business case studies and reports</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-green-400/30 hover:border-green-400 transition-all duration-300 group hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]">
              <div className="flex items-center mb-4">
                <Star className="h-8 w-8 text-green-400 mr-3 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                <h3 className="text-xl font-semibold text-green-400">Dissertations & Thesis Help</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Comprehensive academic writing services for dissertations and theses, covering every stage from topic selection to final editing
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Topic refinement & proposal writing</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Literature review, methodology, and data analysis</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Full writing, formatting, and references</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-green-400/30 hover:border-green-400 transition-all duration-300 group hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]">
              <div className="flex items-center mb-4">
                <ArrowRight className="h-8 w-8 text-green-400 mr-3 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                <h3 className="text-xl font-semibold text-green-400">Plagiarism & AI Reports</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Every project includes a plagiarism and AI detection reports
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />0 % Plagiarism</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />0 % AI</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />100 % Originality and Academic Integrity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-400/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                Why Choose WORKAIDLY?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                With over years of experience in academic writing, WORKAIDLY has helped thousands of students achieve their academic goals. Our team of expert writers holds advanced knowledge from prestigious universities worldwide, delivering work that 
                <span className="text-green-400 font-semibold"> glows with excellence</span>.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                  <span className="text-gray-300">Qualified writers for every task</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                  <span className="text-gray-300">98% customer satisfaction rate</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                  <span className="text-gray-300">24/7 customer support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                  <span className="text-gray-300">100% plagiarism-free guarantee</span>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-black p-6 rounded-xl border border-green-400/30 hover:border-green-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-green-500 to-lime-400 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                    <Users className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-400">Expert Team</h3>
                    <p className="text-gray-400">Qualified professionals in every field</p>
                  </div>
                </div>
              </div>
              <div className="bg-black p-6 rounded-xl border border-green-400/30 hover:border-green-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-lime-500 to-green-400 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                    <Clock className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-400">Timely Delivery</h3>
                    <p className="text-gray-400">Always on time, every time</p>
                  </div>
                </div>
              </div>
              <div className="bg-black p-6 rounded-xl border border-green-400/30 hover:border-green-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-green-400 to-lime-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                    <Award className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-400">Quality Assured</h3>
                    <p className="text-gray-400">Rigorous quality control process</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-transparent to-lime-400/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to start your project? Contact us today for a free consultation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-green-500 to-lime-400 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-400">Email Us</h3>
                  <a href="mailto:workaidly@gmail.com" className="text-gray-300 hover:text-green-400 transition-colors">workaidly@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-lime-500 to-green-400 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-400">What's App</h3>
                  <a href="https://wa.me/917307152989" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">+91 730-715-2989</a>
                </div>
              </div>
              <div className="flex items-center">
                <a href="https://instagram.com/workaidly" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="bg-gradient-to-r from-green-400 to-lime-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-transform duration-300 group-hover:scale-110">
                    <Instagram className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-400">Follow Us</h3>
                    <p className="text-gray-300">@workaidly</p>
                  </div>
                </a>
              </div>
              <div className="flex items-center">
                <img 
                src="./WorkAIDly - Copy.png" 
                  alt="WorkAIDly Logo" 
                  className="h-80 w-80 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                />
                </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-green-400/30 hover:border-green-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-green-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-black border border-green-400/30 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white transition-all duration-300 focus:shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-green-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-black border border-green-400/30 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white transition-all duration-300 focus:shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-green-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-black border border-green-400/30 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white transition-all duration-300 focus:shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                    placeholder="Project subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-green-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-black border border-green-400/30 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white transition-all duration-300 focus:shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-lime-400 hover:from-green-400 hover:to-lime-300 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-green-400/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/WorkAIDly.png" 
                  alt="WorkAIDly Logo" 
                  className="h-8 w-8 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                  WORKAIDLY
                </span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for academic success. Affordable, expert-backed assignment help tailored for students worldwide.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Assignment & Essays</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Group Projects & Presentations</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Coding & Programming</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Data & Business Analysis</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Dissertations & Thesis Help</a></li>

              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-green-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Meet Our Experts</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Quality Assurance</a></li>
                <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>workaidly@gmail.com</li>
                <li>+91-730-715-2989</li>
                </ul>
            </div>
          </div>
          <div className="border-t border-green-400/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 WORKAIDLY. All rights reserved. | 
              <span className="text-green-400"> Workaidly Academic Excellence</span> | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );




 return (
    <>
      {currentPage === 'reviews' ? <ReviewsPage /> : <HomePage />}
      <FloatingWhatsAppButton />
    </>
  );
}

export default App;
