import React from "react";
import Card from "@/components/reusable/Card";

import {
  getAllFilms,
  getAllPersons,
  getAllSpecies,
  getAllStarShips,
} from "@/src/api";

function Stats() {
  const films = getAllFilms();
  const people = getAllPersons();
  const species = getAllSpecies();
  const starships = getAllStarShips();

  return (
    <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3 2xl:w-4/5">
      <Card>
        <>
          <div className="card__header">
            <span className="card__text">Films</span>
            <div className="lightgreen__background"></div>
          </div>

          <div className="flex flex-col">
            <span className="card__text">{films.data?.count}</span>
            <span className="card__footer">2 more than yesterday</span>
          </div>
        </>
      </Card>

      <Card>
        <>
          <div className="card__header">
            <span className="card__text">Starship</span>
            <div className="lightblue__background" />
          </div>

          <div className="flex flex-col">
            <span className="card__text">{starships.data?.count}</span>
            <span className="card__footer">20 more than yesterday</span>
          </div>
        </>
      </Card>

      <Card>
        <>
          <div className="card__header">
            <span className="card__text">People</span>
            <div className="lightpink__background" />
          </div>

          <div className="flex flex-col">
            <span className="card__text">{people.data?.count}</span>
            <span className="card__footer">20 more than yesterday</span>
          </div>
        </>
      </Card>

      <Card>
        <>
          <div className="card__header">
            <span className="card__text">Species</span>
            <div className="lightyellow__background" />
          </div>

          <div className="flex flex-col">
            <span className="card__text">{species.data?.count}</span>
            <span className="card__footer">20 more than yesterday</span>
          </div>
        </>
      </Card>
    </div>
  );
}

export default Stats;
