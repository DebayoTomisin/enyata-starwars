import React from "react";
import Image from "next/image";

type authlayoutTypes = {
  children: React.ReactNode;
};

function AuthLayout({ children }: authlayoutTypes) {
  return (
    <div className="auth__layout">
      <div className="left__side">
        <Image
          src="/assets/authLogo.svg"
          alt="star wars logo"
          width={385}
          height={167}
        />
      </div>
      <div className="right__side">{children}</div>
    </div>
  );
}

export default AuthLayout;
