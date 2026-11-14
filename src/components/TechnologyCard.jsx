import { Star, Plus } from "lucide-react";

const TechnologyCard = ({ technology, addToStack, isAdded }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white">

      {/* Logo and category */}
      <div className="flex justify-between items-center mb-4">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-10 h-10"
        />

        <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          {technology.category}
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
        className="w-full flex justify-center items-center gap-2 border border-blue-500 text-blue-600 py-2 rounded-md hover:bg-blue-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-300"
      >
        <Plus size={16} />
        {isAdded ? "Added" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;