import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import ProductsPage from "./pages/ProductsPage";
import ProfilePage from "./pages/ProfilePage";
import AboutUsPage from "./pages/AboutUsPage";
import FAQPage from "./pages/FAQPage";
import SignInPage from "./pages/SignInPage";
import LogInPage from "./pages/LogInPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Routing() {
  const PUBLIC_PAGES = [
    { link: "/", page: <HomePage />, id: 1 },
    { link: "/about-us", page: <AboutUsPage />, id: 2 },
    { link: "/news", page: <NewsPage />, id: 3 },
    { link: "/products", page: <ProductsPage />, id: 4 },
    { link: "/profile", page: <ProfilePage />, id: 5 },
    { link: "/faq", page: <FAQPage />, id: 6 },
    { link: "/sign", page: <SignInPage />, id: 7, hideHeaderFooter: true },
    { link: "/login", page: <LogInPage />, id: 8, hideHeaderFooter: true },
  ];

  return (
    <Routes>
      {PUBLIC_PAGES.map((page) => (
        <Route
          path={page.link}
          element={
            page.hideHeaderFooter ? (
              page.page
            ) : (
              <>
                <Header />
                {page.page}
                <Footer />
              </>
            )
          }
          key={page.id}
        />
      ))}
    </Routes>
  );
}
