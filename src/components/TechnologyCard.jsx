import { Star, Plus } from "lucide-react";

const TechnologyCard = ({ technology, addToStack, isAdded }) => {
  return (
    <div
  className={`border rounded-lg p-4 bg-white transition-all duration-300 ${
    isAdded
      ? "border-pink-500 bg-pink-50"
      : "border-gray-200 hover:border-blue-400"
  }`}
>

      {/* Logo and category */}
      <div className="flex justify-between items-center mb-4">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-10 h-10"
        />
 
         <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          {technology.badge}
        </span> 
      </div>

      {/* Name */}
      <h3 className="text-lg font-semibold mb-2">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-4">
        {technology.description}
      </p>

      {/* Difficulty and rating */}
      <div className="flex justify-between items-center text-sm mb-4">
         <span className="text-gray-600">
          {technology.category}
        </span>
        <span className="text-gray-600">
          {technology.difficulty}
        </span>

        <span className="flex items-center gap-1 text-yellow-500">
          <Star size={15} />
          {technology.rating}
        </span>
      </div>

      {/* Add button */}
      <button
        onClick={() => addToStack(technology)}
        disabled={isAdded}
        className="w-full flex justify-center items-center gap-2 bg-black  text-white py-2 rounded-md hover:bg-blue-400 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-300"
      >
       
        {isAdded ? "Added to stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;