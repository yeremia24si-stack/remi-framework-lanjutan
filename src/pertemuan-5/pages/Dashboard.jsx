import PageHeader from "../components/PageHeader";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

// Stat Card Component
function StatCard({ icon, value, label, bgColor }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-5 flex-1">
            <div className={`${bgColor} p-4 rounded-full text-white text-2xl`}>
                {icon}
            </div>
            <div>
                <p className="font-poppins text-2xl font-bold text-gray-800">{value}</p>
                <p className="text-gray-400 text-sm mt-1">{label}</p>
            </div>
        </div>
    );
}

// 📋 IMPROVISASI 2: Tabel Recent Orders
const recentOrders = [
    { id: "#ORD-001", customer: "Budi Santoso",   item: "Nasi Goreng",    qty: 2, status: "Delivered", total: "Rp.48.000" },
    { id: "#ORD-002", customer: "Siti Rahayu",    item: "Mie Ayam",       qty: 1, status: "Pending",   total: "Rp.22.000" },
    { id: "#ORD-003", customer: "Andi Pratama",   item: "Ayam Bakar",     qty: 3, status: "Cancelled", total: "Rp.90.000" },
    { id: "#ORD-004", customer: "Dewi Kartika",   item: "Es Teh Manis",   qty: 4, status: "Delivered", total: "Rp.20.000" },
    { id: "#ORD-005", customer: "Reza Firmansyah","item": "Soto Ayam",    qty: 1, status: "Pending",   total: "Rp.25.000" },
];

const statusStyle = {
    Delivered: "bg-green-100 text-hijau",
    Pending:   "bg-yellow-100 text-yellow-600",
    Cancelled: "bg-red-100 text-red-500",
};

export default function Dashboard() {
    return (
        <div id="dashboard-container" className="p-4">
            <PageHeader
                title="Dashboard"
                breadcrumbs={["Home", "Home Detail", "Home Very Detail"]}
            />

            {/* Stat Cards */}
            <div id="dashboard-grid" className="flex flex-row gap-4 mb-8">
                <StatCard
                    icon={<FaShoppingCart />}
                    value="75"
                    label="Total Orders"
                    bgColor="bg-hijau"
                />
                <StatCard
                    icon={<FaTruck />}
                    value="175"
                    label="Total Delivered"
                    bgColor="bg-biru"
                />
                <StatCard
                    icon={<FaBan />}
                    value="40"
                    label="Total Canceled"
                    bgColor="bg-merah"
                />
                <StatCard
                    icon={<FaDollarSign />}
                    value="Rp.128"
                    label="Total Revenue"
                    bgColor="bg-kuning"
                />
            </div>

            {/* 📋 IMPROVISASI 2: Tabel Recent Orders */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-poppins font-bold text-gray-700 text-lg">Recent Orders</h2>
                    <button className="text-hijau text-sm font-semibold hover:underline">See All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead>
                            <tr className="text-gray-400 border-b border-gray-100">
                                <th className="pb-3 font-semibold">Order ID</th>
                                <th className="pb-3 font-semibold">Customer</th>
                                <th className="pb-3 font-semibold">Item</th>
                                <th className="pb-3 font-semibold">Qty</th>
                                <th className="pb-3 font-semibold">Status</th>
                                <th className="pb-3 font-semibold">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((order) => (
                                <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                                    <td className="py-3 font-medium text-gray-700">{order.id}</td>
                                    <td className="py-3 text-gray-600">{order.customer}</td>
                                    <td className="py-3 text-gray-600">{order.item}</td>
                                    <td className="py-3 text-gray-600">{order.qty}</td>
                                    <td className="py-3">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyle[order.status]}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="py-3 font-semibold text-gray-700">{order.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}