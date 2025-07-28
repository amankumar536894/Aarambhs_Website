import { lazy, Suspense } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingSpinner from "./components/Website/LoadingSpinner/LoadingSpinner";
import AdminLoggin from "./pages/Admin/AdminLoggin/AdminLoggin";

// Lazy load all route components
const Homepage = lazy(() => import("./pages/Website/Home/Homepage"));
const VenuesPage = lazy(() => import("./pages/Website/VenuesPage/VenuesPage"));
const AllVenusPage = lazy(() => import("./pages/Website/AllVenusPage/AllVenusPage"));
const LogginPage = lazy(() => import("./pages/Website/LogginPage/LogginPage"));
const AdminDashboard = lazy(() => import("./pages/Admin/AdminDashboard/AdminDashboard"));
const AdminVendors = lazy(() => import("./pages/Admin/AdminVendors/AdminVendors"));
const AdminVenues = lazy(() => import("./pages/Admin/AdminVenues/AdminVenues"));
const AdminUsers = lazy(() => import("./pages/Admin/AdminUsers/AdminUsers"));
const AdminTeam = lazy(() => import("./pages/Admin/AdminTeam/AdminTeam"));
const AdminCity = lazy(() => import("./pages/Admin/AdminCity/AdminCity"));
const VendorLoggin = lazy(() => import("./pages/Website/VendorLoggin/VendorLoggin"));
const VendorSignup = lazy(() => import("./pages/Website/VendorSignup/VendorSignup"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<LoadingSpinner/>}>
          <Homepage />
        </Suspense>
      ),
    },
    {
      path: "/venues/:name/:id",
      element: (
        <Suspense fallback={<LoadingSpinner/>}>
          <VenuesPage/>
        </Suspense>
      ),
    },
    {
      path: "/venues",
      element: (
        <Suspense fallback={<LoadingSpinner/>}>
          <AllVenusPage/>
        </Suspense>
      ),
    },
    {
      path: "/user/loggin",
      element: (
        <Suspense fallback={<LoadingSpinner/>}>
          <LogginPage/>
        </Suspense>
      ),
    },
    {
      path: "/vendor/loggin",
      element: (
        <Suspense fallback={<LoadingSpinner/>}>
          <VendorLoggin/>
        </Suspense>
      ),
    },
    {
      path: "/vendor/signup",
      element: (
        <Suspense fallback={<LoadingSpinner/>}>
          <VendorSignup/>
        </Suspense>
      ),
    },
    {
      path: "/admin",
      element: (
        <Suspense fallback={<LoadingSpinner/>}>
          <AdminLoggin/>
        </Suspense>
      ),
    },
    {
      path: "/admin/dashboard",
      element: (
        <Suspense fallback={<LoadingSpinner/>}>
          <AdminDashboard/>
        </Suspense>
      ),
    },
    {
      path: "/admin/dashboard/vendors",
      element: (
        <Suspense fallback={<LoadingSpinner/>}>
          <AdminVendors/>
        </Suspense>
      ),
    },
    {
      path: "/admin/dashboard/venues",
      element: (
        <Suspense fallback={<LoadingSpinner/>}>
          <AdminVenues/>
        </Suspense>
      ),
    },
    {
      path: "/admin/dashboard/users",
      element: (
        <Suspense fallback={<LoadingSpinner/>}>
          <AdminUsers/>
        </Suspense>
      ),
    },
    {
      path: "/admin/dashboard/team",
      element: (
        <Suspense fallback={<LoadingSpinner/>}>
          <AdminTeam/>
        </Suspense>
      ),
    },
    {
      path: "/admin/dashboard/city",
      element: (
        <Suspense fallback={<LoadingSpinner/>}>
          <AdminCity/>
        </Suspense>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;