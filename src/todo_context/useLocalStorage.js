import React, { useState, useEffect } from 'react';

//Aqui crearemos una configuracion personalizada de Hooks
function useLocalStorage(itemName, initialValue) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        // Traemos nuestros TODOs almacenados
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          // Si existen TODOs en el localStorage los regresamos como nuestros todos
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    try {
      // Manejamos la tarea dentro de un try/catch por si ocurre algún error
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newItem);
    } catch (error) {
      // En caso de algún error lo guardamos en el estado
      setError(error);
    }
  };

  // Para tener un mejor control de los datos retornados, podemos regresarlos dentro de un objeto
  return {
    item,
    saveItem,
    loading,
    error,
  };
}
export { useLocalStorage };
