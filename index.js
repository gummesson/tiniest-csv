/**
 * Exports
 */

module.exports = csv

/**
 * Parse a CSV string into a two-dimensional
 * array.
 *
 * @param {String} input
 * @param {String} [delimiter]
 * @return {Array}
 */

function csv(input, delimiter) {
  if (!input) return null
  delimiter = delimiter || ','

  var lines = input.split(/\r?\n/)
    .filter(Boolean)

  var rows = lines.map(function(row) {
    return row.split(delimiter)
  })

  return rows
}
