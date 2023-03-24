import React, { useMemo } from "react";
import Table from "@/components/reusable/Table";
import { getAllFilms } from "@/src/api";

function OverviewTable() {
  const result = getAllFilms();

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

  return (
    <div>
      <Table data={[]} columns={columns} />
    </div>
  );
}

export default OverviewTable;
