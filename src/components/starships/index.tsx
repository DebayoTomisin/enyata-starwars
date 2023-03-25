import React, { useMemo } from "react";
import Link from "next/link";
import Table from "@/components/reusable/Table";
import { getAllStarShips } from "@/src/api";

function Starships() {
  const { data, error, isLoading } = getAllStarShips();
  
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Model",
        accessor: "model",
      },
      {
        Header: "Class",
        accessor: "class",
      },
      {
        Header: "Passenger",
        accessor: "passenger",
      },
      {
        Header: "Length",
        accessor: "length",
      },

      {
        Header: "Character",
        accessor: "character",
      },
    ],
    []
  );

  const array = data?.results.map((item, index) => ({
    name: <Link href={`/starships/${index + 2}`}>{item.name}</Link>,
    model: item.model,
    class: item.starship_class,
    passenger: item.passengers,
    length: `${item.length} Meters`,
    character: item.films[0],
  }));

  if (isLoading) return <div>Loading...</div>;

  if (error)
    return (
      <div className="text-red-600 text-lg font-semibold">
        An Error occured performing this action please refresh your page...
      </div>
    );

  return (
    <div>
      <h1 className="page__title">Starships</h1>
      <div>
        <Table columns={columns} data={array} />
      </div>
    </div>
  );
}

export default Starships;
