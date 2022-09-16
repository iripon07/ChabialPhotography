import React from "react";
import img1 from "../../images/members/1 (1).jpg";
import img2 from "../../images/members/1 (2).jpg";
import img3 from "../../images/members/1 (3).jpg";
import img4 from "../../images/members/1 (4).jpg";
import img5 from "../../images/members/1 (5).jpg";
import Member from "./Member";

const Members = () => {
  const members = [
    {
      _id: 1,
      name: "John Dalton",
      title: "Ceo & Core Photographer",
      img: img1,
    },
    {
      _id: 2,
      name: "John Dalton",
      title: "Core Photographer",
      img: img2,
    },
    {
      _id: 3,
      name: "John Dalton",
      title: "Senior Photographer",
      img: img3,
    },
    {
      _id: 4,
      name: "John Dalton",
      title: "Senior Photographer",
      img: img4,
    },
    {
      _id: 5,
      name: "John Dalton",
      title: "Junior Photographer",
      img: img5,
    },
    {
      _id: 6,
      name: "John Dalton",
      title: "Junior Photographer",
      img: img1,
    },
    {
      _id: 7,
      name: "John Dalton",
      title: "Junior Photographer",
      img: img5,
    },
    {
      _id: 8,
      name: "John Dalton",
      title: "Junior Photographer",
      img: img1,
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="mx-10">
        <h1 className="text-center text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-accent to-primary uppercase my-10">
          Our Professional Team
        </h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-6">
          {members.map((member) => (
            <Member key={member._id} member={member}></Member>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
