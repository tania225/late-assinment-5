import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";


const TechnologySection = () => {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);

  // Fetch JSON data
  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => setTechnologies(data))
      .catch((error) => console.log(error));
  }, []);

  // Add technology
  const addToStack = (technology) => {
    setStack([...stack, technology]);
  };

  // Remove one technology
  const removeFromStack = (id) => {
    const updatedStack = stack.filter(
      (technology) => technology.id !== id
    );

    setStack(updatedStack);
  };

  // Remove all technologies
  const removeAll = () => {
    setStack([]);
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-2xl font-bold mb-8">
          Explore the Technologies
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Technology cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

            {technologies.map((technology) => {
              const isAdded = stack.some(
                (item) => item.id === technology.id
              );

              return (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  addToStack={addToStack}
                  isAdded={isAdded}
                />
              );
            })}

          </div>

          {/* Your Stack */}
          <div>
            <YourStack
              stack={stack}
              removeFromStack={removeFromStack}
              removeAll={removeAll}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnologySection;