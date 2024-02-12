
let map = new Map();

map.set('In', "India");
map.set('pak', 'Pakistan');
map.set('Nep', 'Nepal');
map.set('afg', 'Afganistan');
map.set('In', "India");


// it return data in the form of array
// for (const iterator of map) {
//     console.log(iterator);

// }

for (const [key, value] of map) {
    console.log(`${key} is the sortcut of ${value}`);

}
// its automatically eliminate the duplicate values