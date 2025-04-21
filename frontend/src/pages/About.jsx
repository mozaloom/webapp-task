// src/pages/About.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Story</h1>
          <p className="max-w-2xl mx-auto">
            Founded in 2020, EZY SKILLS has transformed the online learning landscape with cutting-edge technology and a commitment to accessible education.
          </p>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Our <span className="text-orange-500">Mission</span>
            </h2>
            <p className="text-gray-700 mb-6">
              At EZY SKILLS, our mission is to democratize education by providing affordable, high-quality learning resources to individuals worldwide. We believe that everyone deserves access to skills that can transform their careers and lives.
            </p>
            <p className="text-gray-700">
              Through our innovative AI-based learning platform, we're committed to creating personalized educational experiences that adapt to each learner's unique needs, pace, and goals.
            </p>
          </div>
          <div className="flex justify-center">
            <img src="/api/placeholder/500/350" alt="Our Mission" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-orange-500">Core Values</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-orange-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <span className="text-orange-500 text-xl">★</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Excellence</h3>
              <p className="text-gray-600">
                We're committed to providing exceptional quality in our courses, mentorship, and student support.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-orange-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <span className="text-orange-500 text-xl">♾️</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously push boundaries by integrating cutting-edge technology with effective teaching methodologies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-orange-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <span className="text-orange-500 text-xl">👥</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Inclusivity</h3>
              <p className="text-gray-600">
                We design our platform and courses to be accessible to diverse learners from all backgrounds.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Meet Our <span className="text-orange-500">Leadership Team</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img 
              src="/api/placeholder/200/200" 
              alt="CEO" 
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-bold text-lg">Rahul Sharma</h3>
            <p className="text-gray-600 mb-2">Founder & CEO</p>
            <p className="text-gray-700 text-sm">
              Former Google engineer with a passion for educational technology.
            </p>
          </div>
          
          <div className="text-center">
            <img 
              src="/api/placeholder/200/200" 
              alt="COO" 
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-bold text-lg">Priya Patel</h3>
            <p className="text-gray-600 mb-2">Chief Learning Officer</p>
            <p className="text-gray-700 text-sm">
              PhD in Education with 15+ years experience in curriculum development.
            </p>
          </div>
          
          <div className="text-center">
            <img 
              src="/api/placeholder/200/200" 
              alt="CTO" 
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-bold text-lg">Aditya Gupta</h3>
            <p className="text-gray-600 mb-2">Chief Technology Officer</p>
            <p className="text-gray-700 text-sm">
              AI specialist with experience at leading tech companies.
            </p>
          </div>
        </div>
      </section>
      
      {/* Journey Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-orange-500">Journey</span>
          </h2>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
                  2020
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <h3 className="font-bold text-xl mb-2">Founded in Hyderabad</h3>
                <p className="text-gray-700">
                  EZY SKILLS was established with a vision to revolutionize online education in India.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
                  2022
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <h3 className="font-bold text-xl mb-2">Launched AI Learning Platform</h3>
                <p className="text-gray-700">
                  Released our proprietary AI-based learning system that adapts to individual student needs.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
                  2024
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <h3 className="font-bold text-xl mb-2">Expanded Nationwide</h3>
                <p className="text-gray-700">
                  Opened offices in Bangalore, Mumbai, and Delhi, with over 50,000 students enrolled in our programs.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
                  2025
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <h3 className="font-bold text-xl mb-2">Global Expansion</h3>
                <p className="text-gray-700">
                  Currently expanding our platform to international markets with courses in multiple languages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Join Our <span className="text-orange-500">Journey</span>
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Be part of our growing community of learners and transform your career with industry-relevant skills.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600">
            Explore Courses
          </button>
          <button className="px-8 py-3 border border-blue-900 text-blue-900 rounded-md hover:bg-blue-50">
            Contact Us
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;