let repeatHello = (callback) => {
  let id = setInterval(callback, 1000);
  setTimeout(() => clearInterval(id), 5000);
};

let printHello = () => {
  console.log("Hello");
};

repeatHello(printHello);

/* Si usa un arrow funtion per una sintassi piu fulita, per indentare meglio  e per rendere il codice piu facile da leggere */