let repeatHello = (callback) => {
  setInterval(callback, 1000);
};

let printHello = () => {
  console.log("Hello");
};

repeatHello(printHello);

/* Si usa un arrow funtion per una sintassi piu fulita, per indentare meglio  e per rendere il codice piu facile da leggere */
