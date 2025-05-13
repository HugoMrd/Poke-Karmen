module.exports = {
    transformIgnorePatterns: [
      // Indiquez à Jest de transformer les modules node_modules qui utilisent ESM
      '/node_modules/(?!axios)/'
    ]
  };