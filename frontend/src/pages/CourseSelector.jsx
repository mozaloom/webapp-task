// src/pages/CourseSelector.jsx
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CourseSelector = () => {
  const [step, setStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({
    goal: '',
    experience: '',
    timeCommitment: '',
    preferredStyle: ''
  });

  const handleOptionSelect = (category, value) => {
    setSelectedOptions({
      ...selectedOptions,
      [category]: value
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Process the selections and recommend courses
    console.log('Final selections:', selectedOptions);
    // In a real app, you would make an API call and redirect to results
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">
          Choose Your <span className="text-orange-500">Perfect</span> Course
        </h1>
        <p className="text-gray-600 mb-12">Answer a few questions to find the right course for you</p>
        
        <div className="max-w-3xl mx-auto">
          {/* Progress bar */}
          <div className="mb-12">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-900 bg-blue-100">
                    Step {step} of 4
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-900">
                    {Math.round((step / 4) * 100)}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                <div
                  style={{ width: `${(step / 4) * 100}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
                ></div>
              </div>
            </div>
          </div>
          
          {step === 1 && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-6">What's your main goal?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  className={`p-4 border rounded-lg text-left ${
                    selectedOptions.goal === 'career-change'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-300 hover:border-orange-300'
                  }`}
                  onClick={() => handleOptionSelect('goal', 'career-change')}
                >
                  <h3 className="font-bold mb-2">Career Change</h3>
                  <p className="text-sm text-gray-600">I want to switch to a new field</p>
                </button>
                
                <button
                  className={`p-4 border rounded-lg text-left ${
                    selectedOptions.goal === 'skill-improvement'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-300 hover:border-orange-300'
                  }`}
                  onClick={() => handleOptionSelect('goal', 'skill-improvement')}
                >
                  <h3 className="font-bold mb-2">Skill Improvement</h3>
                  <p className="text-sm text-gray-600">I want to advance in my current career</p>
                </button>
                
                <button
                  className={`p-4 border rounded-lg text-left ${
                    selectedOptions.goal === 'personal-interest'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-300 hover:border-orange-300'
                  }`}
                  onClick={() => handleOptionSelect('goal', 'personal-interest')}
                >
                  <h3 className="font-bold mb-2">Personal Interest</h3>
                  <p className="text-sm text-gray-600">I'm learning for fun or curiosity</p>
                </button>
                
                <button
                  className={`p-4 border rounded-lg text-left ${
                    selectedOptions.goal === 'specific-project'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-300 hover:border-orange-300'
                  }`}
                  onClick={() => handleOptionSelect('goal', 'specific-project')}
                >
                  <h3 className="font-bold mb-2">Specific Project</h3>
                  <p className="text-sm text-gray-600">I need to learn for a specific task</p>
                </button>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button
                  className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  disabled={!selectedOptions.goal}
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-6">What's your experience level?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  className={`p-4 border rounded-lg text-center ${
                    selectedOptions.experience === 'beginner'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-300 hover:border-orange-300'
                  }`}
                  onClick={() => handleOptionSelect('experience', 'beginner')}
                >
                  <h3 className="font-bold mb-2">Beginner</h3>
                  <p className="text-sm text-gray-600">Just starting out</p>
                </button>
                
                <button
                  className={`p-4 border rounded-lg text-center ${
                    selectedOptions.experience === 'intermediate'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-300 hover:border-orange-300'
                  }`}
                  onClick={() => handleOptionSelect('experience', 'intermediate')}
                >
                  <h3 className="font-bold mb-2">Intermediate</h3>
                  <p className="text-sm text-gray-600">Some experience</p>
                </button>
                
                <button
                  className={`p-4 border rounded-lg text-center ${
                    selectedOptions.experience === 'advanced'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-300 hover:border-orange-300'
                  }`}
                  onClick={() => handleOptionSelect('experience', 'advanced')}
                >
                  <h3 className="font-bold mb-2">Advanced</h3>
                  <p className="text-sm text-gray-600">Experienced professional</p>
                </button>
              </div>
              
              <div className="mt-8 flex justify-between">
                <button
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
                <button
                  className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  disabled={!selectedOptions.experience}
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-6">How much time can you commit weekly?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  className={`p-4 border rounded-lg text-center ${
                    selectedOptions.timeCommitment === 'minimal'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-300 hover:border-orange-300'
                  }`}
                  onClick={() => handleOptionSelect('timeCommitment', 'minimal')}
                >
                  <h3 className="font-bold mb-2">Minimal</h3>
                  <p className="text-sm text-gray-600">1-3 hours per week</p>
                </button>
                
                <button
                  className={`p-4 border rounded-lg text-center ${
                    selectedOptions.timeCommitment === 'moderate'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-300 hover:border-orange-300'
                  }`}
                  onClick={() => handleOptionSelect('timeCommitment', 'moderate')}
                >
                  <h3 className="font-bold mb-2">Moderate</h3>
                  <p className="text-sm text-gray-600">4-7 hours per week</p>
                </button>
                
                <button
                  className={`p-4 border rounded-lg text-center ${
                    selectedOptions.timeCommitment === 'intensive'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-300 hover:border-orange-300'
                  }`}
                  onClick={() => handleOptionSelect('timeCommitment', 'intensive')}
                >
                  <h3 className="font-bold mb-2">Intensive</h3>
                  <p className="text-sm text-gray-600">8+ hours per week</p>
                </button>
              </div>
              
              <div className="mt-8 flex justify-between">
                <button
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
                <button
                  className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  disabled={!selectedOptions.timeCommitment}
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </div>
          )}
          
          {step === 4 && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-6">What learning style do you prefer?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  className={`p-4 border rounded-lg text-left ${
                    selectedOptions.preferredStyle === 'video'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-300 hover:border-orange-300'
                  }`}
                  onClick={() => handleOptionSelect('preferredStyle', 'video')}
                >
                  <h3 className="font-bold mb-2">Video Lectures</h3>
                  <p className="text-sm text-gray-600">Learn by watching detailed explanations</p>
                </button>
                
                <button
                  className={`p-4 border rounded-lg text-left ${
                    selectedOptions.preferredStyle === 'interactive'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-300 hover:border-orange-300'
                  }`}
                  onClick={() => handleOptionSelect('preferredStyle', 'interactive')}
                >
                  <h3 className="font-bold mb-2">Interactive Exercises</h3>
                  <p className="text-sm text-gray-600">Learn by doing hands-on activities</p>
                </button>
                
                <button
                  className={`p-4 border rounded-lg text-left ${
                    selectedOptions.preferredStyle === 'reading'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-300 hover:border-orange-300'
                  }`}
                  onClick={() => handleOptionSelect('preferredStyle', 'reading')}
                >
                  <h3 className="font-bold mb-2">Reading Materials</h3>
                  <p className="text-sm text-gray-600">Learn through comprehensive documentation</p>
                </button>
                
                <button
                  className={`p-4 border rounded-lg text-left ${
                    selectedOptions.preferredStyle === 'project'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-300 hover:border-orange-300'
                  }`}
                  onClick={() => handleOptionSelect('preferredStyle', 'project')}
                >
                  <h3 className="font-bold mb-2">Project-Based</h3>
                  <p className="text-sm text-gray-600">Learn by building real-world projects</p>
                </button>
              </div>
              
              <div className="mt-8 flex justify-between">
                <button
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
                <button
                  className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  disabled={!selectedOptions.preferredStyle}
                  onClick={handleSubmit}
                >
                  Find My Courses
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CourseSelector;
