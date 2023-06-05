import { getDataBySubstrateId } from "../data/database.js";

export const handleButtonClick = (substrateId, handleDataUpdate) => {
  console.log(substrateId);
  getDataBySubstrateId(substrateId)
    .then((data) => {

      //check if "handleDataUpdate" is a valid function
      if (handleDataUpdate) {
        handleDataUpdate(data[0]); // Batch table function
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
