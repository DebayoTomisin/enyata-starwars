import { useStore } from "@/src/context/store";

export function useLogin(value: string) {
  const store = useStore();

  store.setEmail(value);
}
