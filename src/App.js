import React from "react";
import BatchTable from "./components/BatchTable.js";
import BATCHES from "./data/datos.js"




function table_render()  {
  return (
    <div>
      <BatchTable batches={BATCHES} />
    </div>
  );
}

export default table_render;
