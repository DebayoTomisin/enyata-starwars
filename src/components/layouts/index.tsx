import React, { useState, useEffect } from "react";
import DashboardLayout from "./DashboardLayout";
import MobileLayout from "./MobileLayout";
import useScreenSize from "@/hooks/useScreensize";

type layoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: layoutProps) {
  const [mounted, setMounted] = useState(false);
  const { width } = useScreenSize();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative">
      {mounted &&
        (width >= 1024 ? (
          <DashboardLayout>{children}</DashboardLayout>
        ) : (
          <MobileLayout>{children}</MobileLayout>
        ))}
    </div>
  );
}

export default Layout;
