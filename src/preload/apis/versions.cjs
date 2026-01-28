/**
 * API que expone versiones del entorno
 */
module.exports = {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
};
