import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import ProductCard from "../components/ProductCard";
import Table from "../components/Table";
import Footer from "../components/Footer";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";

const tableHeaders = ["No", "Nama Produk", "Kategori", "Harga", "Status", "Aksi"];

const products = [
  { id: 1, name: "Laptop Asus", category: "Elektronik", price: "Rp 8.000.000", status: "Aktif" },
  { id: 2, name: "Sepatu Sport", category: "Fashion", price: "Rp 450.000", status: "Pending" },
  { id: 3, name: "Jam Tangan", category: "Aksesoris", price: "Rp 799.000", status: "Selesai" },
];

export default function Components() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="Components" />

      <Container>

        {/* ===== 1. BASIC COMPONENT ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-1 text-gray-800">1. Basic Component</h2>
          <p className="text-gray-500 text-sm mb-6">Button, Badge, Avatar</p>

          {/* Button */}
          <div className="bg-white rounded-xl border border-gray-200 shadow p-6 mb-4">
            <h3 className="font-semibold text-gray-700 mb-4">Button</h3>
            <div className="flex flex-wrap gap-3">
              <Button type="primary">Primary</Button>
              <Button type="secondary">Secondary</Button>
              <Button type="success">Simpan</Button>
              <Button type="danger">Hapus</Button>
              <Button type="warning">Warning</Button>
            </div>
          </div>

          {/* Badge */}
          <div className="bg-white rounded-xl border border-gray-200 shadow p-6 mb-4">
            <h3 className="font-semibold text-gray-700 mb-4">Badge</h3>
            <div className="flex flex-wrap gap-3">
              <Badge type="primary">Primary</Badge>
              <Badge type="secondary">Secondary</Badge>
              <Badge type="success">Aktif</Badge>
              <Badge type="danger">Nonaktif</Badge>
              <Badge type="warning">Pending</Badge>
            </div>
          </div>

          {/* Avatar */}
          <div className="bg-white rounded-xl border border-gray-200 shadow p-6">
            <h3 className="font-semibold text-gray-700 mb-4">Avatar</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <Avatar name="Budi" />
              <Avatar name="Siti" />
              <Avatar name="Ahmad" />
              <Avatar name="Rina" />
              <Avatar name="Hendra" />
            </div>
          </div>
        </section>

        {/* ===== 2. LAYOUT COMPONENT ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-1 text-gray-800">2. Layout Component</h2>
          <p className="text-gray-500 text-sm mb-6">Container, Footer</p>

          <div className="bg-white rounded-xl border border-gray-200 shadow p-6">
            <h3 className="font-semibold text-gray-700 mb-4">Container</h3>
            <Container className="bg-gray-100 rounded-lg">
              <h1 className="text-xl font-bold mb-2">Daftar Produk</h1>
              <p className="text-gray-600">Berikut adalah daftar produk terbaru.</p>
            </Container>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow p-6 mt-4">
            <h3 className="font-semibold text-gray-700 mb-4">Footer Preview</h3>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <Footer />
            </div>
          </div>
        </section>

        {/* ===== 3. DATA DISPLAY COMPONENT ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-1 text-gray-800">3. Data Display Component</h2>
          <p className="text-gray-500 text-sm mb-6">Card, ProductCard, Table</p>

          {/* Card */}
          <div className="bg-white rounded-xl border border-gray-200 shadow p-6 mb-4">
            <h3 className="font-semibold text-gray-700 mb-4">Card</h3>
            <div className="max-w-sm">
              <Card>
                <h2 className="text-xl font-bold">Judul Card</h2>
                <p className="text-gray-600 mt-1">Ini adalah isi dari card.</p>
              </Card>
            </div>
          </div>

          {/* ProductCard */}
          <div className="bg-white rounded-xl border border-gray-200 shadow p-6 mb-4">
            <h3 className="font-semibold text-gray-700 mb-4">ProductCard</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ProductCard
                image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
                title="Sepatu Sport"
                category="Fashion"
                price="Rp 450.000"
                description="Sepatu sport modern dengan desain nyaman dan ringan untuk aktivitas sehari-hari."
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
                title="Smartphone"
                category="Elektronik"
                price="Rp 4.500.000"
                description="Smartphone dengan performa cepat, kamera jernih, dan baterai tahan lama."
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
                title="Jam Tangan"
                category="Aksesoris"
                price="Rp 799.000"
                description="Jam tangan elegan dengan desain minimalis cocok untuk segala kesempatan."
              />
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl border border-gray-200 shadow p-6">
            <h3 className="font-semibold text-gray-700 mb-4">Table</h3>
            <Table headers={tableHeaders}>
              {products.map((product, index) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-3 text-sm">{index + 1}</td>
                  <td className="border px-4 py-3 text-sm font-medium">{product.name}</td>
                  <td className="border px-4 py-3 text-sm">{product.category}</td>
                  <td className="border px-4 py-3 text-sm">{product.price}</td>
                  <td className="border px-4 py-3 text-sm">
                    <Badge
                      type={
                        product.status === "Aktif"
                          ? "success"
                          : product.status === "Pending"
                          ? "warning"
                          : "secondary"
                      }
                    >
                      {product.status}
                    </Badge>
                  </td>
                  <td className="border px-4 py-3 text-sm">
                    <div className="flex gap-2">
                      <Button type="primary">Detail</Button>
                      <Button type="danger">Hapus</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </Table>
          </div>
        </section>

        {/* ===== 4. FORM COMPONENT ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-1 text-gray-800">4. Form Component</h2>
          <p className="text-gray-500 text-sm mb-6">InputField, TextArea, SelectField</p>
          <div className="bg-white rounded-xl border border-gray-200 shadow p-6">
            <p className="text-gray-500 text-sm italic">
              Form components (InputField, TextArea, SelectField) akan dibahas di pertemuan
              berikutnya.
            </p>
          </div>
        </section>

        {/* ===== 5. FEEDBACK COMPONENT ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-1 text-gray-800">5. Feedback Component</h2>
          <p className="text-gray-500 text-sm mb-6">Alert, Modal, Loading</p>
          <div className="bg-white rounded-xl border border-gray-200 shadow p-6">
            <p className="text-gray-500 text-sm italic">
              Feedback components (Alert, Modal, Loading) akan dibahas di pertemuan berikutnya.
            </p>
          </div>
        </section>

        {/* ===== 6. SECTION COMPONENT ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-1 text-gray-800">6. Section Component</h2>
          <p className="text-gray-500 text-sm mb-6">HeroSection, FeatureSection, ProductSection</p>
          <div className="bg-white rounded-xl border border-gray-200 shadow p-6">
            <p className="text-gray-500 text-sm italic">
              Section components (HeroSection, FeatureSection, ProductSection) akan dibahas di
              pertemuan berikutnya.
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}