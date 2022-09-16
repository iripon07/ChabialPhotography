import React from "react";

const Member = ({ member }) => {
  const { img, name, title } = member;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-[150px]" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-primary">{name}</h2>
        <h2 className="card-title text-accent">{title}</h2>
      </div>
    </div>
  );
};

export default Member;
