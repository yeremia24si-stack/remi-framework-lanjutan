import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  /* Inisialisasi DataForm sesuai instruksi dosen */
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  /* Inisialisasi Handle perubahan nilai input form sesuai instruksi dosen */
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  /* Logic Search & Filter (Tetap pakai logic sebelumnya, cuma variabelnya ambil dari dataForm) */
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = (frameworkData || []).filter((framework) => {
    const matchesSearch =
      (framework.name || "").toLowerCase().includes(_searchTerm) ||
      (framework.description || "").toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag 
      ? (framework.tags || []).includes(dataForm.selectedTag) 
      : true;

    return matchesSearch && matchesTag;
  });

  const allTags = [
    ...new Set((frameworkData || []).flatMap((framework) => framework.tags || [])),
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans text-neutral-900">
      <div className="max-w-7xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-neutral-950 mb-3">
            Explore Frameworks
          </h1>
          <p className="text-lg text-neutral-500 font-normal">
            Modern tools for modern developers.
          </p>
        </header>

        <div className="flex flex-col gap-4 mb-12">
          {/* Input Search dengan penambahan properti name dan handleChange */}
          <input
            type="text"
            name="searchTerm"
            value={dataForm.searchTerm}
            placeholder="Search framework..."
            className="w-full h-14 px-5 rounded-xl border border-neutral-200 bg-white shadow-sm focus:border-neutral-400 focus:ring-0 outline-none transition text-lg"
            onChange={handleChange}
          />

          {/* Select Tag dengan penambahan properti name dan handleChange */}
          <select
            name="selectedTag"
            value={dataForm.selectedTag}
            className="w-full h-14 px-5 rounded-xl border border-neutral-200 bg-white shadow-sm appearance-none focus:border-neutral-400 focus:ring-0 outline-none cursor-pointer text-lg text-neutral-800"
            onChange={handleChange}
          >
            <option value="">Framework</option>
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFrameworks.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-[32px] border border-neutral-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-5">
                  <h2 className="text-3xl font-bold tracking-tight text-neutral-950">
                    {item.name}
                  </h2>
                  <span className="text-xs font-mono text-neutral-300 pt-1">
                    EST.
                  </span>
                </div>
                
                <p className="text-neutral-600 text-base leading-relaxed mb-8 font-normal">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2.5 mb-12">
                  {(item.tags || []).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium transition hover:bg-indigo-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-neutral-100 pt-6 mt-auto">
                <div className="text-sm">
                  <div className="text-neutral-400 font-normal text-xs">Developed By</div>
                  <div className="font-semibold text-neutral-800 text-base">
                    {item.details?.developer || "Unknown"}
                  </div>
                </div>
                <a 
                  href={item.details?.officialWebsite || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-neutral-950 text-white px-7 py-3 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-neutral-800 transition"
                >
                  Visit →
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredFrameworks.length === 0 && (
          <div className="text-center py-24 text-neutral-400 border-2 border-dashed border-neutral-200 rounded-3xl mt-12">
            <p className="text-xl font-medium">No frameworks found for "{dataForm.searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
}