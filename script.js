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
console.log(document.getElementsByTagName("h2"));
console.log(document.querySelector("#elso a"));
let elsoLink=document.querySelector("#elso p");
 elsoLink.style.color="red";

 console.log(document.querySelectorAll(".item"));

 let list=document.querySelectorAll(".item");

 list[1].style.backgroundColor="green";