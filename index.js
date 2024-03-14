const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Leo) {
    cats.push(Leo);
}

function destructivelyPrependCat(Chloe) {
    cats.unshift(Chloe);
}

function destructivelyRemoveLastCat(Garfield) {
    cats.pop(Garfield);
}

function destructivelyRemoveFirstCat(Milo) {
    cats.shift(Milo);
}

function appendCat(Cuttie) {
   return[...cats, Cuttie];
}

function prependCat(Minksy) {
    return [Minksy, ...cats];
}

function removeLastCat() {
    return cats.slice(0, cats.length -1);
}

function removeFirstCat() {
    return cats.slice(1);
}