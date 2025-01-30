import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import NewsPage from "./components/pages/NewsPage";
import ProductsPage from "./components/pages/ProductsPage";
import ProfilePage from "./components/pages/ProfilePage";
import AboutUsPage from "./components/pages/AboutUsPage";

export default function Routing() {
  const PUBLIC_PAGES = [
    {
      link: "/",
      page: <HomePage />,
      id: 1,
    },
    {
      link: "/about-us",
      page: <AboutUsPage />,
      id: 2,
    },
    {
      link: "/news",
      page: <NewsPage />,
      id: 3,
    },
    {
      link: "/products",
      page: <ProductsPage />,
      id: 4,
    },
    {
      link: "/profile",
      page: <ProfilePage />,
      id: 5,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {PUBLIC_PAGES.map((page) => (
          <Route path={page.link} element={page.page} key={page.id} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
