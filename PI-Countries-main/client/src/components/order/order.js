export const ordAlf = (a, b) => {
  if (a.nombre < b.nombre) return -1;
  if (a.nombre > b.nombre) return +1;
  return 0;
};
export const ordPobl = (a, b) => {
  return a.poblacion - b.poblacion;
};
