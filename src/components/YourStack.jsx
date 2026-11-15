import { X, Trash2 } from "lucide-react";

const YourStack = ({ stack, removeFromStack, removeAll }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">

      <h2 className="text-lg font-semibold mb-1">
        Your Stack
      </h2>

      <p className="text-sm text-gray-500 mb-4">
        {stack.length} technologies selected
      </p>

      {stack.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-6">
          Your stack is empty.
          <br />
          Add some technologies!
        </p>
      ) : (
        <div className="space-y-3">

          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between border-b pb-3"
            >
              <div className="flex items-center gap-2">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-7 h-7"
                />

                <span className="text-sm font-medium">
                  {technology.name}
                </span>
              </div>

              <button
                onClick={() => removeFromStack(technology.id)}
                className="text-gray-400 hover:text-red-500"
              >
                <X size={17} />
              </button>
            </div>
          ))}

        </div>
      )}

      {stack.length > 0 && (
        <button
          onClick={removeAll}
          className="w-full mt-4 flex justify-center items-center gap-2 bg-red-50 text-red-500 py-2 rounded-md hover:bg-red-100"
        >
          <Trash2 size={16} />
          Remove All
        </button>
      )}

    </div>
  );
};

export default YourStack;