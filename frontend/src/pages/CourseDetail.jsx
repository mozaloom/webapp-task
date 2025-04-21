// src/pages/CourseDetail.jsx
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CourseDetail = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch course data from an API using the id
  // For now, we'll use a static example
  const course = {
    id: id,
    title: 'Angular JS - Level 2 Course',
    description: 'Master AngularJS with this comprehensive advanced course',
    image: '/path/to/angular.png',
    duration: '6 weeks',
    lessons: 24,
    level: 'Advanced',
    price: '$99.99',
    instructor: 'John Doe',
    rating: 4.8,
    students: 2500,
    overview: 'This AngularJS course will take your skills to the next level. You\'ll learn advanced concepts like state management, performance optimization, and how to build complex applications.',
    topics: [
      'Advanced Component Architecture',
      'State Management with NgRx',
      'Performance Optimization',
      'Testing Angular Applications',
      'Building Complex Forms',
      'Custom Directives'
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="mb-8">{course.description}</p>
          
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <span className="text-orange-400">⭐</span>
              <span>{course.rating} (500+ reviews)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>👨‍🎓</span>
              <span>{course.students}+ students</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>⏱️</span>
              <span>Last updated 04/2025</span>
            </div>
          </div>
          
          <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md">
            Enroll Now
          </button>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Course Overview</h2>
              <p className="text-gray-700">{course.overview}</p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.topics.map((topic, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-green-500">✓</span>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Course Content</h2>
              
              <div className="border rounded-md divide-y">
                <div className="p-4 bg-gray-50 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">Module 1: Introduction</h3>
                    <p className="text-sm text-gray-600">3 lessons • 45 minutes</p>
                  </div>
                  <button className="text-blue-900">+</button>
                </div>
                
                <div className="p-4 bg-gray-50 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">Module 2: Advanced Components</h3>
                    <p className="text-sm text-gray-600">5 lessons • 1 hour 20 minutes</p>
                  </div>
                  <button className="text-blue-900">+</button>
                </div>
                
                <div className="p-4 bg-gray-50 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">Module 3: State Management</h3>
                    <p className="text-sm text-gray-600">4 lessons • 1 hour</p>
                  </div>
                  <button className="text-blue-900">+</button>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-6">Instructor</h2>
              <div className="flex items-center space-x-4">
                <img 
                  src="/path/to/instructor.jpg" 
                  alt={course.instructor} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">{course.instructor}</h3>
                  <p className="text-gray-600">Angular Expert & Senior Developer</p>
                </div>
              </div>
            </section>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-8">
              <div className="p-6">
                <div className="text-3xl font-bold mb-4 text-blue-900">{course.price}</div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-800">⏱️</span>
                    <span>Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-800">📚</span>
                    <span>{course.lessons} lessons</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-800">🎯</span>
                    <span>Level: {course.level}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-800">🔄</span>
                    <span>Lifetime access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-800">📱</span>
                    <span>Access on mobile and TV</span>
                  </div>
                </div>
                
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md mb-4">
                  Enroll Now
                </button>
                
                <button className="w-full bg-white border border-blue-900 text-blue-900 py-3 rounded-md">
                  Try For Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;