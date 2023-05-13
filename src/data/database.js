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

