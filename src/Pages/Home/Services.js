import React from "react";
import img1 from "../../images/services/1.jpg";
import img2 from "../../images/services/2.jpg";
import img3 from "../../images/services/3.jpg";
import Service from "./Service";
import 'animate.css';

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Super Service",
      description:
        "1 Top Photographer Event Duration: 4 Hours Number of Pictures: Unlimited (All post processed) Specially Edited Photos: 100 copies",
      img: img1,
    },
    {
      _id: 2,
      name: "Standard Service",
      description:
        "1 Top Photographer + 1 Top Associate Photographer. Event Duration: 4 Hours Number of Photos: Unlimited (All post processed) Specially Edited Photos: 100 copies",
      img: img2,
    },
    {
      _id: 3,
      name: "Elegant Service",
      description:
        "Core Photographer + 1 Top Photographer + 1 Top Associate photographer.2 Hour  Exclusive session from Core Photographer DW  Team  Shooting  Duration : 5 Hours  Portrait Session by Core PhotographerNumber of Pictures: Unlimited (All post processed) Specially Edited Photos: 100 copies Print:12L Matte : 1 copy4R Matte : 125 copies",
      img: img3,
    },
  ];

  return (
    <div className="my-20 max-w-screen-xl mx-auto">
      <div className="mx-10">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-primary animate__animated animate__fadeInRight animate__delay-5s">
            Our Services
          </h1>
          <h2 className="text-accent font-semibold text-2xl">
            Service We Provide
          </h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 animate__animated  animate__zoomIn animate__delay-5s">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
