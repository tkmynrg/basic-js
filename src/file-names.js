const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  const usedNames = {};

  for (const name of names) {
    if (!usedNames[name]) {
      result.push(name);
      usedNames[name] = 1;
    } else {
      let newName = `${name}(${usedNames[name]})`;
      while (usedNames[newName]) {
        usedNames[name]++;
        newName = `${name}(${usedNames[name]})`;
      }
      result.push(newName);
      usedNames[newName] = 1;
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
