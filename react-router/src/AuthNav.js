import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
// import LazyAbout from "./Components/About";
import NavBar from "./Components/Navbar";
import OrderSummary from "./Components/order-summary";
import { NoMatch } from "./Components/NoMatch";
import { Products } from "./Components/Products";
import { FeaturedProducts } from "./Components/FeaturedProducts";
import { NewProducts } from "./Components/NewProducts";
import { Users } from "./Components/Users";
import { UserDetails } from "./Components/UserDetails";
import { Profile } from "./Components/Profile";
import { Authprovider } from "./Components/auth";
import { Login } from "./Components/Login";
import { RequireAuth } from "./Components/RequireAuth";
const LazyAbout = React.lazy(() => import("./Components/About"));

const AuthNav = () => {
  return (
    <>
      <Authprovider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <React.Suspense fallback={"Loading..."}>
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />}></Route>
          </Route>
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Authprovider>
    </>
  );
};

export default AuthNav;
