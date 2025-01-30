import { Layout } from "antd";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";

export default function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Routing />
      <Footer>Footer</Footer>
    </Layout>
  );
}
