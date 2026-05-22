import { Link } from "react-router-dom"; // Pastikan ini di-import
import PageHeader from "../components/PageHeader";
import productData from "../data/products.json"; // Pastikan path file JSON lu bener

export default function Products() {
  return (
    <div id="dashboard-container" className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <PageHeader title="Product" />
          <p className="text-sm text-gray-400 font-medium">Dashboard / Order List</p>
        </div>
        <button className="bg-[#22C55E] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-green-600 transition-all">
          + Add Product
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-400 text-[11px] uppercase font-bold border-b border-gray-100">
              <th className="p-4">ID</th>
              <th className="p-4">Nama Produk</th>
              <th className="p-4">Kode</th>
              <th className="p-4">Kategori</th>
              <th className="p-4">Brand</th>
              <th className="p-4 text-center">Harga</th>
              <th className="p-4 text-center">Stok</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {productData.map((item) => (
              <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="p-4 text-gray-400">{item.id}</td>
                
                {/* Kolom Nama Produk yang jadi Link */}
                <td className="p-4 font-semibold">
                  <Link 
                    to={`/products/${item.id}`} 
                    className="text-[#22C55E] hover:underline cursor-pointer"
                  >
                    {item.tittle}
                  </Link>
                </td>

                <td className="p-4 text-gray-400 text-xs font-mono">{item.code}</td>
                <td className="p-4 text-blue-500 font-medium">{item.category}</td>
                <td className="p-4 text-gray-500">{item.brand}</td>
                <td className="p-4 font-bold text-gray-700 text-center">
                  Rp {item.price.toLocaleString('id-ID')}
                </td>
                <td className="p-4 text-center">
                  <span className={`font-bold ${item.stock < 15 ? 'text-red-500' : 'text-green-500'}`}>
                    {item.stock}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}