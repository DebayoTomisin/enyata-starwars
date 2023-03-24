import toast from "react-hot-toast";

export const successMessage = (msg: string | JSX.Element) => {
  toast.success(msg, { position: "top-right" });
};

export const errorMessage = (msg: string | JSX.Element) => {
  toast.error(msg, { position: "top-right" });
};
