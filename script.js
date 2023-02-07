console.dir(document);
//kiirjuk a wed szajt URl
//console.log(document.URL);
console.log(document.head)

let items = document.getElementsByClassName("item");
console.log(items);


//items[2].textContent="valami mas";
//items[2].style.backgroundColor="grey";

for(let i = 0; i <items.length; i++) {
    if(i % 2 == 1) {
        items[i].style.backgroundColor="lightgray";
    }
}