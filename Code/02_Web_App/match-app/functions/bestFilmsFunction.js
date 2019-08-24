const data = require('./data.json')

let distance = require('euclidean-distance')

const chosen = {
  'wokeness': 56,
  'romanticness': 12,
  'realism': 75,
  'darkness': 78,
  'complexity': 12,
  'abstractness': 23,
  'cinematography': 87,
  'suspense': 5,
  'humor': 8
}

function getIDs(chosenValues, data) {

  let distances = []

  data.forEach(e => {
    let obj = {}
    obj['id'] = e.id
    obj['distance'] = distance(Object.values(chosenValues), Object.values(e.characteristics))
    distances.push(obj)
  });

  let distancesSorted = distances.sort(function (a, b) {
    return a.distance - b.distance
  })
  let chosenIDs = [distancesSorted[0].id, distancesSorted[1].id, distancesSorted[2].id]

  return chosenIDs
}

console.log(getIDs(chosen, data))
