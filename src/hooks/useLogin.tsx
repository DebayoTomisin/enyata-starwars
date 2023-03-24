import { useStore } from "@/src/context/store";
import Router from "next/router";
import Cookies from "js-cookie";

export function handleLogin(value: string) {
  const store = useStore();
  Cookies.set("email", value);

  store.setEmail(value);
  Router.push("/");
}
