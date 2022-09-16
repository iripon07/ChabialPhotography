import React from "react";
import bg from "../../images/bg.jpg";
import girl from "../../images/girl.jpg";

const Reviews = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="p-14">
        <h1 className="text-center text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-accent to-primary uppercase pb-10">
          Client's Reviews
        </h1>
        <div className="max-w-screen-xl mx-auto">
          <p className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus nam saepe laborum qui in laudantium nulla a placeat
            reiciendis corrupti. Dolorum, adipisci magnam. Cupiditate numquam
            iusto minima aliquid soluta, nostrum nesciunt eius ipsum doloribus
            nihil enim sed laudantium distinctio optio quam perferendis corrupti
            alias explicabo, repudiandae reiciendis omnis ea aspernatur
            veritatis veniam? Nobis cumque reprehenderit facilis quisquam,
            dignissimos numquam. Aut qui autem magnam quis, impedit quasi
            dolorum alias incidunt delectus temporibus voluptatum quaerat
            consequuntur error eos nesciunt aliquam consectetur, laudantium
            commodi consequatur. Qui similique nemo aliquid nulla perspiciatis,
            commodi facere odit fugiat deserunt doloribus laborum nam voluptate,
            quos, obcaecati tenetur.
          </p>
          <div className="flex items-center py-6">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={girl} alt="" />
              </div>
            </div>
            <h1 className="text-primary text-2xl pl-6 uppercase">
              -Serena William
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
