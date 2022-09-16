import React from "react";
import img from "../../images/us.jpg";
import 'animate.css';

const AboutUs = () => {
  return (
    <div className="max-w-screen-xl mx-auto hero-content lg:flex-row flex-col">
      <div className="animate__animated animate__fadeInRightBig  animate__delay-5s">
        <img className="rounded-xl hidden lg:block" src={img} alt="" />
      </div>
      <div className="p-10">
        <h1 className="text-secondary text-center text-3xl font-semibold uppercase">
          Who We Are
        </h1>
        <p className="animate__animated animate__fadeInLeftBig  animate__delay-5s">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          quaerat ex sapiente harum beatae explicabo sint laborum cum aperiam
          nisi, impedit, necessitatibus ducimus temporibus molestias eaque
          exercitationem natus quis neque dolores eveniet, voluptas dolore!
          Laboriosam molestiae temporibus porro! Quaerat quae, animi fuga atque
          eligendi, odio voluptatum recusandae omnis, doloremque sed illum
          dolores praesentium? Maxime alias dolorem ex omnis laborum accusantium
          quam est, nemo nobis! Eos perferendis, nisi repellat facere molestias
          commodi totam eligendi ex. Quos quidem nihil voluptates! Et at
          similique quibusdam non iste odit tempora mollitia. Nobis unde,
          mollitia repudiandae quod asperiores expedita est, veritatis, qui
          aspernatur maxime at obcaecati nisi veniam sapiente itaque magni sit
          ipsa dolore enim dolorem laboriosam cum aliquam ipsum? Eos maiores
          consectetur optio blanditiis fuga non ducimus recusandae veritatis!
          Assumenda porro minus quas consequuntur!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
