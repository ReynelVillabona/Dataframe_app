import BATCHES from "./datos.js";

const indexedDB = window.indexedDB;

export function openDatabase() {
  return new Promise((resolve, reject) => {
    const conexion = indexedDB.open('PlantData', 1);

    conexion.onsuccess = () => {
      const db = conexion.result;
      console.log('Base de datos abierta', db);
      resolve(db);
    };

    conexion.onupgradeneeded = (event) => {
      const db = event.target.result;

      const objectStore = db.createObjectStore('plants', { keyPath: 'substrate_id' });

      BATCHES.forEach((batch) => {
        objectStore.add(batch);
      });
    };

    conexion.onerror = (error) => {
      console.log('Error al abrir la base de datos', error);
      reject(error);
    };
  });
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



export function addNewRow(data) {
  return new Promise((resolve, reject) => {
    openDatabase()
      .then((db) => {
        const transaction = db.transaction('plants', 'readwrite');
        const objectStore = transaction.objectStore('plants');

        const request = objectStore.add(data);

        request.onsuccess = () => {
          console.log('New row added successfully');
          resolve();
        };

        request.onerror = (error) => {
          console.log('Error adding new row', error);
          reject(error);
        };
      })
      .catch((error) => {
        console.log('Error opening database', error);
        reject(error);
      });
  });
}

export function deleteRow(key) {
  console.log('Key Type delete functionnn:', typeof key);
  console.log('Key Value delete function:', key);

  return new Promise((resolve, reject) => {
    openDatabase()
      .then((db) => {
        const transaction = db.transaction('plants', 'readwrite');
        const objectStore = transaction.objectStore('plants');

        const request = objectStore.delete(key);

        request.onsuccess = () => {
          console.log('Row deleted successfully');
          resolve();
        };

        request.onerror = (error) => {
          console.log('Error deleting row', error);
          reject(error);
        };
      })
      .catch((error) => {
        console.log('Error opening database', error);
        reject(error);
      });
  });
}

export function updatekey(key, newData) {
  return new Promise((resolve, reject) => {
    openDatabase()
      .then((db) => {
        const transaction = db.transaction('plants', 'readwrite');
        const objectStore = transaction.objectStore('plants');

        const request = objectStore.put(newData);

        request.onsuccess = () => {
          console.log('Registro actualizado correctamente');
          resolve();
        };

        request.onerror = (error) => {
          console.log('Error al actualizar el registro', error);
          reject(error);
        };
      })
      .catch((error) => {
        console.log('Error al abrir la base de datos', error);
        reject(error);
      });
  });
}




