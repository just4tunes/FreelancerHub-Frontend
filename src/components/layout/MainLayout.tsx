import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";


function MainLayout() {
 
  return (
    <>
      <div
        id="tradingview-widget-container"
        className="tradingview-widget-container z-10 relative"
      ></div>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout