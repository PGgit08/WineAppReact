module.exports = function(api) {
  api.cache(false);
//   console.log(process.env.BABEL_DISABLE_CACHE);
  return {
    presets: ['module:metro-react-native-babel-preset'],
  };
};
// module.exports = {
//     presets: ['module:metro-react-native-babel-preset'],
// };