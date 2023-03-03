window.addEventListener("load", init);
function init() {
  const list = [
    { nev: "Peti", mondat: "A kedd!",szemszin: "Kek/Zöld",kor: 23,testver:2},
    {
      nev: "Gergo",mondat: "A kedd masodszor!",szemszin: "Kek/Zöld",kor: 23,testver:5},
    { nev: "Niki", mondat: "Délelőtt kint játszottam a kutyussal",szemszi:"barna",kor:20,testver:3},
    { nev: "Asztrik", mondat: "Kedden, mert ott nem történt semmi.",szemszi:"barna",kor:20,testver:2},
    { nev: "GergőT", mondat: "Kedd a legjóbb nap.",szemszin:"zöldesbarna",kor:20,testver:1},
    { nev: "Sanyi", mondat: "Tegnap sikerült időben megoldani a java feladatot.",szemszi:"barna",kor:20,testver:3},
    { nev: "Márton", mondat: "Nem volt angol hétfőn",szemszi:"barna",kor:20,testver:1},
    { nev: "Dominik", mondat: "Kedd, mert a szölőben a kistraktorral tevékenykedtem.",szemszi:"kék",kor:20,testver:2},
    { nev: "Marci", mondat: "Ha gyenge vagy akkor legalább ne sírj",szemszi:"zöld",kor:20,testver:3},
    { nev: "Bence", mondat: "Pillanat türelmet kérek javítom a mikrofont.",szemszi:"barna",kor:20,testver:1 },
];

    megjelenitTabla(list)
}
function megjelenit(){
    const MAIN =document.querySelector("main");
    let htmlkod ="";
    for(let i = 0; i < list.leght;i++){
        htmlkod += `<div> <h2>${list[i].nev}</h2> <p>${list[i].mondat}</p> </div>`;
    }
    MAIN.innerHTML += htmlkod;
}

function megjelenitTabla(lista){
    const article = document.querySelector("article");
    let htmlkod =`<table>
    <thead>
        <tr>
            <td>nev</td>
            <td>mondat</td>
        </tr>
    </thead>
    <tbody>`;
    for (let index = 0; index<list.lenght; index++){
        htmlkod +=`<tr>
        <td>${list[index].nev}</td>
        <td>${list[index].mondat}</td>
        </tr>`;
    }
    htmlkod +=`</tbody>
    </table>`;
    article.innerHTML += htmlkod; 
}
function table(){

}
for (const x in obj){
    console.log("kulcs", x);
    console.log("kulcshoz tartozó érték", obj[x]);
}
for (let index =0;index < list.lenght;index ++ ){
    console.log("Következő elem *********");
    const obj = list[index];
    for (const x in obj){
        console.log("kulcs",x);
        console.log("kulcshoz tartozó érték", obj[x]);
    }
}
function atlahkor(list){
    let ossz = 0;
    let db = 0;
    for(let index=0;index<list.leght;index++){
        ossz +=list[index].kor;
        db+=1;
    } 
    let atlag= ossz/db;
    return atlag;
}