/**
 * helpers/fileHelper.js
 * ─────────────────────────────────────────
 * Utility functions for reading and writing
 * JSON data files safely.
 * ─────────────────────────────────────────
 */

const fs = require('fs');

/**
 * Read and parse a JSON file.
 * Returns an empty array if file is missing or corrupt.
 *
 * @param {string} filePath - Absolute path to the JSON file
 * @returns {Array} Parsed array from file
 */
const readJSON = (filePath) => {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error(`[fileHelper] Error reading ${filePath}:`, err.message);
    return [];
  }
};

/**
 * Write data to a JSON file (pretty-printed).
 * Returns true on success, false on failure.
 *
 * @param {string} filePath - Absolute path to the JSON file
 * @param {Array}  data     - Array data to write
 * @returns {boolean}
 */
const writeJSON = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error(`[fileHelper] Error writing ${filePath}:`, err.message);
    return false;
  }
};

module.exports = { readJSON, writeJSON };
