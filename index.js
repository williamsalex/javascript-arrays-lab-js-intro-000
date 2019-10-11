var kittens = ["Milo","Otis","Garfield"] //define your array here

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKiten() {
  kittens.shift()
}

function appendKitten(name) {
  new_array = kittens
  new_array.push(name)
  return new_array
}

