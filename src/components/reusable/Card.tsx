import React from "react";

type CardProp = {
  children?: JSX.Element | string;
};
function Card({ children }: CardProp) {
  return <div className="card__box">{children}</div>;
}

export default Card;
