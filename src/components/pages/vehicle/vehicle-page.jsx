import {
  useState,
} from "react";

import Header from "../../header/header";
import DetailedInfo from "./detailed-info/detailed-info";
import GeneralInfo from "./general-info/general-info";
import Slider from "./slider/slider";
import Footer from "../../footer/footer";
import Modal from "./modal/modal";

import {
  getMockReviews,
} from "../../../mocks";


const VehiclePage = () => {
  const [
    state,
    setState,
  ] = useState({
    isModalOpen: false,
    reviews: getMockReviews(),
  });

  const onModalToggle = () => {
    setState((state) => ({
      ...state,
      isModalOpen: !state.isModalOpen,
    }));
  };

  const onReviewAdd = (review) => {
    setState((state) => ({
      ...state,
      reviews: [
        review,
        ...state.reviews,
      ],
    }));
  };

  return (
    <div className="page">
      <Header />
      <main className="page__main main main--vehicle wrapper">
        <h1 className="main__heading">
          <span className=" visually-hidden">Информация об автомобиле «</span>
          <strong>Марпех 11</strong>
          <span className=" visually-hidden">»</span>
        </h1>
        <Slider />
        <GeneralInfo />
        <DetailedInfo reviews={state.reviews} onModalToggle={onModalToggle} />
      </main>
      <Footer />
      {state.isModalOpen && <Modal onModalToggle={onModalToggle} onOverlayClick={onModalToggle}
        onEscKeydown={onModalToggle} onReviewAdd={onReviewAdd} />}
    </div>
  );
};

export default VehiclePage;
