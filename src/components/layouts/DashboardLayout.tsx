import React from "react";
import Image from "next/image";
import Header from "./Header";
import Routes from "./Routes";

function DashboardLayout({ children }) {
  return (
    <div className="dashboard__layout">
      <div className="sidebar">
        <Image src="/assets/logo.svg" alt="logo" width={107} height={46} />

        <Routes />
      </div>

      <div className="body">
        <Header />
        <div className="children">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
