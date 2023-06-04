import { getDataBySubstrateId } from "../data/database.js";

export const handleButtonClick = (substrateId, handleDataUpdate) => {
  console.log(substrateId);
  getDataBySubstrateId(substrateId)
    .then((data) => {
      if (handleDataUpdate) {
        handleDataUpdate(data[0]); // función en BatchTable
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
