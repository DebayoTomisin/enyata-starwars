import React from "react";

type buttonProps = {
  value?: string | JSX.Element;
  type?: "button" | "submit";
  onClick?: any;
  className?: string;
  disabled?: boolean;
  background?: string;
  loading?: boolean;
};

function Button({ value, loading, onClick, className, type }: buttonProps) {
  return (
    <button type={type} className={["button", className].join(" ")}>
      {!loading ? `${value}` : "Loading..."}
    </button>
  );
}

export default Button;
