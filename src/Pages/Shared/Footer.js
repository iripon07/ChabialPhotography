import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center py-10">
      <p>
        <small>Copyright ©{year} All rights are reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
