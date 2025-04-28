export default function ComingSoon() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <div className="text-center animate-pulse">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Website Coming Soon</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">We're building something amazing for you. Stay tuned!</p>
          {/* <div className="flex space-x-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl shadow-lg transition">
              Notify Me
            </button>
            <button className="bg-transparent border border-indigo-600 hover:bg-indigo-600 hover:text-white text-indigo-400 font-semibold py-2 px-4 rounded-xl transition">
              Learn More
            </button>
          </div> */}
        </div>
  
        <div className="absolute bottom-4 text-sm text-gray-500">
          &copy; 2025 varshans. All rights reserved.
        </div>
      </div>
    );
  }