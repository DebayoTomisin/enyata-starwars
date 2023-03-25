import React, { useMemo } from "react";
import { format } from "date-fns";
import Link from "next/link";
import Table from "@/components/reusable/Table";
import { getAllPersons } from "@/src/api";

function PeopleComponent() {
  const { data, error, isLoading } = getAllPersons();

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Birth year",
        accessor: "birthyear",
      },
      {
        Header: "Gender",
        accessor: "gender",
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
    name: <Link href={`/people/${index + 1}`}>{item.name}</Link>,
    birthyear: item.birth_year,
    gender: item.gender,
    haircolor: item.hair_color,
    height: `${item.height}CM`,
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
      <h1 className="page__title">People</h1>
      <div>
        <Table columns={columns} data={array} />
      </div>
    </div>
  );
}

export default PeopleComponent;
