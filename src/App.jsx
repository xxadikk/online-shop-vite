import { Layout } from "antd";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Layout className="app">
        <Header />
        <Routing />
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}
