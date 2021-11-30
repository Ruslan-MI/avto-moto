import React, {
  useState,
} from "react";
import {
  nanoid,
} from "nanoid";

import Header from "../../header/header";
import DetailedInfo from "./detailed-info/detailed-info";
import GeneralInfo from "./general-info/general-info";
import Slider from "./slider/slider";
import Footer from "../../footer/footer";
import Modal from "./modal/modal";

import {
  getMockReviews,
  getMockSlides,
} from "../../../mocks";

const VehiclePage = () => {
  const [
    state,
    setState,
  ] = useState({
    isModalOpen: false,
    reviews: getMockReviews(),
    slides: getMockSlides(),
  });

  const onModalToggle = () => {
    setState((prevState) => ({
      ...prevState,
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  const onReviewAdd = (review) => {
    setState((prevState) => ({
      ...prevState,
      reviews: [
        {
          ...review,
          id: nanoid(),
        },
        ...prevState.reviews,
      ],
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  return (
    <>
      <Header />
      <main className="page__main main main--vehicle-page wrapper">
        <h1 className="main__heading visually-hidden">Информация об автомобиле</h1>
        <Slider slides={state.slides} />
        <GeneralInfo />
        <DetailedInfo reviews={state.reviews} onModalOpen={onModalToggle} />
      </main>
      <Footer />
      {state.isModalOpen && <Modal onModalClose={onModalToggle} onReviewAdd={onReviewAdd} />}
    </>
  );
};

export default VehiclePage;
