import Heroimg from'../assets/banner-stack.png';

const Hero = () => {
  return (
  <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Heading & Buttons */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-500 max-w-xl">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-linear-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium text-sm px-6 py-3 rounded-full shadow-lg shadow-purple-500/20 transition-all active:scale-95">
              Explore Technologies
            </button>
            <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium text-sm px-6 py-3 rounded-full transition-all">
              Learn More
            </button>
          </div>
        </div>
        {/* hero img */}
         <div>
                <img 
                src={Heroimg}
                alt="banner" 
                 />
              </div>

 </div>
    </section>
  );
};

export default Hero;