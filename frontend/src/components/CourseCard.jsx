// src/components/CourseCard.jsx
import { Link } from 'react-router-dom';

const CourseCard = ({ id, title, image, category, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-900 p-4 relative">
        {/* Course logo/image */}
        <img src={image} alt={title} className="h-20 w-20 mx-auto" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-center mb-2">{title}</h3>
        <Link to={`/courses/${id}`}>
          <button className="w-full py-2 bg-orange-500 text-white rounded hover:bg-orange-600 mt-4">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;