import BATCHES from "./datos.js";

const indexedDB = window.indexedDB;
let db;

export function openDatabase() {

  const conexion = indexedDB.open('PlantData', 1);

  conexion.onsuccess = () => {
    db = conexion.result;
    console.log("Base de datos abierta", db);
  };

  conexion.onupgradeneeded = (event) => {
      const db = event.target.result;

      const objectStore = db.createObjectStore("plants", { keyPath: "substrate_id" });

      BATCHES.forEach((batch) => {
        objectStore.add(batch);
      });
    };

  conexion.onerror = (error) => {
    console.log("Error al abrir la base de datos", error);
  };
}



export function getDataBySubstrateId(selectedSubstrateIdList) {
  return new Promise((resolve, reject) => {
    const conexion = indexedDB.open('PlantData', 1);

    conexion.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction("plants", "readonly");
      const objectStore = transaction.objectStore("plants");
      const dataPromises = [];

      const selectedSubstrateIds = Array.isArray(selectedSubstrateIdList)
        ? selectedSubstrateIdList
        : [selectedSubstrateIdList];

      selectedSubstrateIds.forEach((selectedSubstrateId) => {
        const request = objectStore.get(selectedSubstrateId);
        dataPromises.push(
          new Promise((resolveData, rejectData) => {
            request.onsuccess = () => {
              const data = request.result;
              console.log(`Data for substrate_id ${selectedSubstrateId}:`, data);
              resolveData(data);
            };

            request.onerror = (error) => {
              rejectData(error);
            };
          })
        );
      });

      Promise.all(dataPromises)
        .then((dataList) => {
          resolve(dataList);
        })
        .catch((error) => {
          reject(error);
        });
    };

    conexion.onerror = (error) => {
      reject(error);
    };
  });
}




export function printKeys() {
  return new Promise((resolve, reject) => {
    const conexion = indexedDB.open('PlantData', 1);

    conexion.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction("plants", "readonly");
      const objectStore = transaction.objectStore("plants");
      const request = objectStore.getAllKeys();

      request.onsuccess = () => {
        const keys = request.result;
        console.log("Keys:", keys);
        resolve(keys);
      };

      request.onerror = (error) => {
        console.log("Error al obtener las claves", error);
        reject(error);
      };
    };

    conexion.onerror = (error) => {
      console.log("Error al abrir la base de datos", error);
      reject(error);
    };
  });
}



