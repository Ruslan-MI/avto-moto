import Header from "../../header/header";
import DetailedInfo from "./detailed-info/detailed-info";
import GeneralInfo from "./general-info/general-info";
import Slider from "./slider/slider";
import Footer from "../../footer/footer";

const VehiclePage = () => (
  <>
    <Header />
    <main className="main main--vehicle wrapper">
      <h1 className="main__heading">
        <span className=" visually-hidden">Информация об автомобиле «</span>
        <strong>Марпех 11</strong>
        <span className=" visually-hidden">»</span>
      </h1>
      <Slider />
      <GeneralInfo />
      <DetailedInfo />
    </main>
    <Footer />
  </>
);

export default VehiclePage;
