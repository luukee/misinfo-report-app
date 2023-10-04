// Export a function that takes an 'api' parameter
module.exports = function(api) {
  // Enable caching for Babel configuration, which improves build performance
  api.cache(true);

  // Return an object that specifies Babel presets
  return {
    // Use the 'babel-preset-expo' preset
    presets: ['babel-preset-expo'],
  };
};
