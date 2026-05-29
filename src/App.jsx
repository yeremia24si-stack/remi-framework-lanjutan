import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import "./assets/tailwind.css";
// import ProductDetail from "./pages/ProductsDetail";

// import Dashboard from "./pages/Dashboard";
// import Orders from "./pages/Orders";
// import Customers from "./pages/Customer";
// import ErrorPage from "./components/ErrorPage";
// import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";

const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Orders = React.lazy(() => import("./pages/Orders"))
const Customers = React.lazy(() => import("./pages/Customer"))
const Products = React.lazy(() => import("./pages/Products"))
const ProductDetail = React.lazy(() => import("./pages/ProductsDetail"))
const ErrorPage = React.lazy(() => import("./components/ErrorPage"))
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))
const Components = React.lazy(() => import("./pages/Components"))

// Halaman error
const Error400 = () => <ErrorPage code="400" description="Bad Request" />;
const Error401 = () => <ErrorPage code="401" description="Unauthorized" />;
const Error403 = () => <ErrorPage code="403" description="Forbidden" />;
const NotFound = () => <ErrorPage code="404" description="Page Not Found" />;

function App() {

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} /> 
            <Route path="/components" element={<Components />} />
            <Route path="/error-400" element={<Error400 />} />
            <Route path="/error-401" element={<Error401 />} />
            <Route path="/error-403" element={<Error403 />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
          </Route>
      </Routes>
      </Suspense>
  );
}

export default App;