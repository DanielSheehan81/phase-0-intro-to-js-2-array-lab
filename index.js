// Write your solution here!
const cats=["Milo","Otis","Garfield"];
function destructivelyAppendCat(Ralph){
    cats.push("Ralph");
}
function destructivelyPrependCat(Bob){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(Bob){
    cats.pop(3);
}
function destructivelyRemoveFirstCat(Ralph){
    cats.shift(0);
}
function appendCat(Broom){
    const appendCat = [...cats, 'Broom'];
    return appendCat
}
function prependCat(Arnold){
    const prependCat = ['Arnold', ...cats];
    return prependCat
}
function removeLastCat(){
    const removeLastCat = [...cats.slice(0, cats.length - 1)];
    return removeLastCat
}
function removeFirstCat(){
    const removeFirstCat = [...cats.slice(1)];
    return removeFirstCat
}