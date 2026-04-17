import frameworkData from "./framework.json";

function FrameworkList() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header Section */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Tech <span className="text-blue-600">Frameworks</span> Explorer
        </h1>
        <p className="mt-2 text-gray-500">Daftar teknologi modern untuk pengembangan masa depan.</p>
      </header>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {frameworkData.map((item) => (
          <div 
            key={item.id} 
            className="group relative bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
          >
            {/* Dekorasi Aksen */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h2>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 bg-gray-50 px-2 py-1 rounded">
                  {item.details.releaseYear}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium text-gray-700 mr-2">Developer:</span>
                  {item.details.developer}
                </div>
                <a 
                  href={item.details.officialWebsite} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-blue-500 hover:text-blue-700 transition-colors"
                >
                  Official Website
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Tags Section */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50">
              {item.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-blue-50 text-blue-600 text-[10px] font-bold uppercase px-3 py-1 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrameworkList;