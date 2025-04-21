// src/pages/Courses.jsx
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Sample course data - in a real app, this would come from an API
  const courses = [
    { id: 1, title: 'Angular JS', image: '/path/to/angular.png', category: 'Web Development' },
    { id: 2, title: 'React JS', image: '/path/to/react.png', category: 'Web Development' },
    { id: 3, title: 'Vue JS', image: '/path/to/vue.png', category: 'Web Development' },
    { id: 4, title: 'Python', image: '/path/to/python.png', category: 'Programming' },
    { id: 5, title: 'Node.js', image: '/path/to/node.png', category: 'Backend' },
    { id: 6, title: 'MongoDB', image: '/path/to/mongodb.png', category: 'Database' },
    { id: 7, title: 'AWS', image: '/path/to/aws.png', category: 'Cloud' },
    { id: 8, title: 'Docker', image: '/path/to/docker.png', category: 'DevOps' },
    { id: 9, title: 'Kubernetes', image: '/path/to/kubernetes.png', category: 'DevOps' },
    { id: 10, title: 'Java', image: '/path/to/java.png', category: 'Programming' },
    { id: 11, title: 'Spring Boot', image: '/path/to/spring.png', category: 'Backend' },
    { id: 12, title: 'TensorFlow', image: '/path/to/tensorflow.png', category: 'Machine Learning' },
    { id: 13, title: 'Flutter', image: '/path/to/flutter.png', category: 'Mobile Development' },
    { id: 14, title: 'SwiftUI', image: '/path/to/swift.png', category: 'Mobile Development' },
    { id: 15, title: 'Kotlin', image: '/path/to/kotlin.png', category: 'Mobile Development' },
    { id: 16, title: 'Data Science', image: '/path/to/datascience.png', category: 'Data' },
  ];

  // Get unique categories from courses
  const categories = ['All', ...new Set(courses.map(course => course.category))];

  // Filter courses based on active category
  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold mb-6">Courses</h1>
          
          {/* Category filters */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-4 pb-2">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-md transition ${
                    activeCategory === category
                      ? 'bg-blue-900 text-white'
                      : 'bg-white text-blue-900 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Courses grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCourses.map(course => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                image={course.image}
                category={course.category}
              />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-900 text-white">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-blue-900 hover:bg-gray-100">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-blue-900 hover:bg-gray-100">
                3
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-blue-900 hover:bg-gray-100">
                ...
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-blue-900 hover:bg-gray-100">
                10
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Courses;