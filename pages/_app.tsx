import "../styles/globals.css";
import "../styles/tailwind.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "@/src/context/store";

const inter = Inter({ weight: "400", subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <div className={inter.className}>
        <Toaster />
        <Component {...pageProps} />
      </div>
    </AppProvider>
  );
}

export default MyApp;
