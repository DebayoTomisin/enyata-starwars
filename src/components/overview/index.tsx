import React from "react";
import Stats from "./Stats";
import OverviewTable from "./OverviewTable";

function Overview() {
  return (
    <div>
      <Stats />
      <div className="mt-12">
        <h1 className="page__title">Film</h1>
        <OverviewTable />
      </div>
    </div>
  );
}

export default Overview;
