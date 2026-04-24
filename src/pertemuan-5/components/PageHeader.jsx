export default function PageHeader({ title, breadcrumbs = [], actionLabel, onAction }) {
    return (
        <div id="pageheader-container" className="flex justify-between items-center mb-6">
            {/* Sisi Kiri */}
            <div id="pageheader-left" className="flex flex-col">
                <h1 id="pageheader-title" className="font-poppins text-3xl font-bold text-gray-800">
                    {title}
                </h1>
                <div id="pageheader-breadcrumb" className="flex items-center space-x-1 text-sm text-gray-400 mt-1">
                    {breadcrumbs.map((crumb, index) => (
                        <span key={index} className="flex items-center">
                            {index > 0 && <span className="mx-1">/</span>}
                            <span className={index === breadcrumbs.length - 1 ? "text-gray-600 font-medium" : "hover:text-hijau cursor-pointer"}>
                                {crumb}
                            </span>
                        </span>
                    ))}
                </div>
            </div>

            {/* Sisi Kanan — Action Button (opsional) */}
            {actionLabel && (
                <div id="pageheader-right">
                    <button
                        onClick={onAction}
                        className="bg-hijau text-white px-5 py-2 rounded-xl font-semibold hover:bg-green-600 transition shadow-md"
                    >
                        {actionLabel}
                    </button>
                </div>
            )}
        </div>
    );
}