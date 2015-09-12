/**
 * Dependencies
 */

var fs = require('fs')
var test = require('tape')
var csv = require('../')

/**
 * Tests
 */

test('csv()', function(assert) {
  assert.deepEqual(csv(), [])
  assert.end()
})

test('csv(input)', function(assert) {
  var input = fs.readFileSync('test/fixtures/index.csv', 'utf8')

  var output = [
    ['key', 'value'],
    ['one', 'two'],
    ['three', 'four'],
    ['five', 'six']
  ]

  assert.deepEqual(csv(input), output)
  assert.end()
})

test('csv(input, delimiter)', function(assert) {
  var input = fs.readFileSync('test/fixtures/index.tsv', 'utf8')

  var output = [
    ['key', 'value'],
    ['one', 'two'],
    ['three', 'four'],
    ['five', 'six']
  ]

  assert.deepEqual(csv(input, /\t/), output)
  assert.end()
})
