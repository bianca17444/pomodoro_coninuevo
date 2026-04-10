/**
 * Convierte segundos totales en un formato de cadena MM:SS
 * @param {number} seconds
 * @returns {string} Ejemplo: "25:00"
 */
export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
};
