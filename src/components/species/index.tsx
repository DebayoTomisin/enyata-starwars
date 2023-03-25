import React, { useMemo } from "react";
import { format } from "date-fns";
import Link from "next/link";
import Table from "@/components/reusable/Table";
import { getAllSpecies } from "@/src/api";

function SpeciesComponent() {
  const { data, error, isLoading } = getAllSpecies();

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Classification",
        accessor: "classification",
      },
      {
        Header: "Eye Colors",
        accessor: "eyeColors",
      },
      {
        Header: "Hair Color",
        accessor: "haircolor",
      },
      {
        Header: "Height",
        accessor: "height",
      },

      {
        Header: "Created",
        accessor: "created",
      },
    ],
    []
  );

  const array = data?.results.map((item, index) => ({
    name: <Link href={`/species/${index + 1}`}>{item.name}</Link>,
    classification: item.classification,
    eyeColors: item.eye_colors,
    haircolor: item.hair_colors,
    height: `${item.average_height}CM`,
    created: format(new Date(item.created), "dd/MM/yy"),
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
      <h1 className="page__title">Species</h1>
      <div>
        <Table columns={columns} data={array} />
      </div>
    </div>
  );
}

export default SpeciesComponent;
