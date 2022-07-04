import React from "react";

function useLocalStorage(itemName, initialValue){ //custon react hook 

    const[item, setItem] = React.useState(initialValue);
    const[loading, setLoading] = React.useState(true);
    const[error, setError] = React.useState(false);
  
    React.useEffect(() => {    
      setTimeout(() => { // el codigo se ejecuta luego de 1 seg.
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
        
          if(!localStorageItem){//si esta vacio
            localStorage.setItem(itemName, JSON.stringify(initialValue));    
            parsedItem = initialValue;
        
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
    
          setItem(parsedItem);
          setLoading(false);
  
        } catch(error){
          setError(error);
        }
  
      }, 5000); 
    });
  
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
  
      } catch(error){
        setError(error);
      }
    };
  
    return { // si devolvemos mas de 2 elementos. Ya no devolvemos un array de 2 posiciones [] sino un objeto{}
      item,
      saveItem,
      loading,
      error,
    };  
  
  }

  export {useLocalStorage};