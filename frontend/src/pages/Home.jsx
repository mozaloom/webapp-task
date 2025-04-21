// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import heroImage from '../assets/hero-person.png'; // You'll need to add this image

const Home = () => {
  // Sample course data - in a real app, this would come from an API
  const featuredCourses = [
    { id: 1, title: 'Angular JS', image: '/path/to/angular.png', category: 'Web Development' },
    { id: 2, title: 'React JS', image: '/path/to/react.png', category: 'Web Development' },
    { id: 3, title: 'Vue JS', image: '/path/to/vue.png', category: 'Web Development' },
    { id: 4, title: 'Python', image: '/path/to/python.png', category: 'Programming' },
  ];

  // Sample stats
  const stats = [
    { label: 'HAPPY CLIENTS', value: '100+' },
    { label: 'COURSES', value: '50+' },
    { label: 'EXPERT TRAINERS', value: '20+' },
    { label: 'SUCCESS RATE', value: '70%' }
  ];

  // Sample mentors
  const mentors = [
    { name: 'Example Name', role: 'Instructor', image: '/path/to/mentor1.png' },
    { name: 'Example Name', role: 'Instructor', image: '/path/to/mentor2.png' },
    { name: 'Example Name', role: 'Instructor', image: '/path/to/mentor3.png' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Skill Your Way <br />
              <span className="text-blue-900">Up To Success</span> <br />
              With Us
            </h1>
            <p className="text-gray-600 mb-6">
              World's First AI Based Online Learning Platform
            </p>
            <Link to="/courses">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600">
                Explore Courses
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img src={heroImage} alt="Student learning" className="max-h-96" />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Skill Development <span className="text-orange-500">Schemes For All</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="text-center p-4">
            <div className="bg-orange-100 p-4 rounded-full inline-block mb-4">
              <img src="/path/to/icon1.png" alt="Icon" className="h-10 w-10" />
            </div>
            <h3 className="font-bold mb-2">AI Based Learning</h3>
          </div>
          
          <div className="text-center p-4">
            <div className="bg-orange-100 p-4 rounded-full inline-block mb-4">
              <img src="/path/to/icon2.png" alt="Icon" className="h-10 w-10" />
            </div>
            <h3 className="font-bold mb-2">Interactive Sessions</h3>
          </div>
          
          <div className="text-center p-4">
            <div className="bg-orange-100 p-4 rounded-full inline-block mb-4">
              <img src="/path/to/icon3.png" alt="Icon" className="h-10 w-10" />
            </div>
            <h3 className="font-bold mb-2">Corporate Training</h3>
          </div>
          
          <div className="text-center p-4">
            <div className="bg-orange-100 p-4 rounded-full inline-block mb-4">
              <img src="/path/to/icon4.png" alt="Icon" className="h-10 w-10" />
            </div>
            <h3 className="font-bold mb-2">100% Job Guarantee</h3>
          </div>
          
          <div className="text-center p-4">
            <div className="bg-orange-100 p-4 rounded-full inline-block mb-4">
              <img src="/path/to/icon5.png" alt="Icon" className="h-10 w-10" />
            </div>
            <h3 className="font-bold mb-2">24/7 Student Support</h3>
          </div>
        </div>
      </section>
      
      {/* Popular Courses Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-2">Popular Courses</h2>
          <p className="text-center text-gray-600 mb-12">Discover our most popular learning paths</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map(course => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                image={course.image}
                category={course.category}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/courses">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600">
                View All Courses
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">{stat.value}</div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Mentors Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Professional <span className="text-orange-500">Mentors & Trainers</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="text-center">
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-lg">{mentor.name}</h3>
                <p className="text-gray-600">{mentor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our <span className="text-orange-500">Testimonials</span>
        </h2>
        
        {/* Testimonial cards would go here */}
        <div className="flex justify-center space-x-4 mt-8">
          <button className="w-3 h-3 rounded-full bg-orange-500"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300"></button>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-orange-500">Partnerships</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            {/* Partner logos would go here */}
            <div className="grayscale hover:grayscale-0 transition">
              <img src="/path/to/partner1.png" alt="Partner" className="h-16" />
            </div>
            <div className="grayscale hover:grayscale-0 transition">
              <img src="/path/to/partner2.png" alt="Partner" className="h-16" />
            </div>
            <div className="grayscale hover:grayscale-0 transition">
              <img src="/path/to/partner3.png" alt="Partner" className="h-16" />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;