import React, { useMemo } from "react";
import { format } from "date-fns";
import Link from "next/link";
import Table from "@/components/reusable/Table";
import { getAllFilms } from "@/src/api";

function OverviewTable() {
  const { data, error, isLoading } = getAllFilms();

  const array = data?.results.map((item, index) => ({
    filmTitle: <Link href={`/overview/${index + 1}`}>{item.title}</Link>,
    releaseDate: format(new Date(item.release_date), "dd/MM/yy"),
    director: item.director,
    producer: item.producer,
    episodeId: item.episode_id,
    character: item.characters[0],
  }));

  const columns = useMemo(
    () => [
      {
        Header: "Film Title",
        accessor: "filmTitle",
      },
      {
        Header: "Release Date",
        accessor: "releaseDate",
      },
      {
        Header: "Director",
        accessor: "director",
      },
      {
        Header: "Producer",
        accessor: "producer",
      },
      {
        Header: "Episode ID",
        accessor: "episodeId",
      },

      {
        Header: "Character",
        accessor: "character",
      },
    ],
    []
  );

  if (isLoading) return <div>Loading...</div>;

  if (error)
    return (
      <div className="text-red-600 text-lg font-semibold">
        An Error occured performing this action please refresh your page...
      </div>
    );

  return (
    <div>
      <Table data={array} columns={columns} />
    </div>
  );
}

export default OverviewTable;
