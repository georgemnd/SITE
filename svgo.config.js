module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // keep <symbol> content and IDs intact
          removeHiddenElems: false,
          cleanupIDs: false,
          removeUselessDefs: false
        }
      }
    }
  ]
};