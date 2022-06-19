let llegadaColectivo;
console.log("Esperando el colectivo");
llegadaColectivo = prompt("¿Llegó el colectivo? Responder si o no");

while (llegadaColectivo === "no") {
  console.log("Esperando el colectivo");
  llegadaColectivo = prompt("¿Llegó el colectivo? Responder si o no");
}
console.log("Llego el colectivo");
