import { useState, useEffect } from "react";

const TechnologySection = () => {

  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchTechnologies = async () => {

      try {
        const response = await fetch("/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to fetch technologies");
        }

        const data = await response.json();

        setTechnologies(data);

      } catch (error) {
        setError(error.message);

      } finally {
        setLoading(false);
      }
    };

    fetchTechnologies();

  }, []);

  if (loading) {
    return <p className="py-10 text-center">Loading technologies...</p>;
  }

  if (error) {
    return <p className="py-10 text-center text-red-500">{error}</p>;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore the Technologies
        </h2>

        <p className="mt-2 text-gray-500">
          Pick technologies to build your ideal development stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {technologies.map((technology) => (

          <div key={technology.id} className="rounded-xl border p-5">

            <img
              src={technology.icon}
              alt={technology.name}
              className="mb-4 h-10 w-10 object-contain"
            />

            <h3 className="text-lg font-bold">
              {technology.name}
            </h3>

            <p className="my-3 text-sm text-gray-500">
              {technology.description}
            </p>

            <div className="flex justify-between text-xs text-gray-500">
              <span>{technology.category}</span>
              <span>{technology.difficulty}</span>
            </div>

            <p className="mt-3 text-sm">
              ⭐ {technology.rating}
            </p>

            <span className="mt-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600">
              {technology.badge}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
};

export default TechnologySection;