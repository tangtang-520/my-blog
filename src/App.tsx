import "./App.css";
import { PageHead } from "./layout/head";
import { Footer } from "./layout/footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <PageHead></PageHead>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
