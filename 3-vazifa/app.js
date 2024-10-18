let name=prompt("Ismingizni kiriting")
let year=prompt("YYYY-MM-DD HH:mm:ss");

let name2=prompt("Do'stingzini ismini kiriting");
let year2=prompt("YYYY-MM-DD HH:mm:ss");


let Ibirthday=new Date(year)
let friendbirthday=new Date(year2)   


const date=new Date();

let Iyear=Ibirthday.getFullYear();
let Imonth=Ibirthday.getMonth()+1;
let Iday=Ibirthday.getDate();
let Ihours=Ibirthday.getHours();
let Iminutes=Ibirthday.getMinutes();
let Iseconds=Ibirthday.getSeconds();


console.log(`${name}`+" "+Iyear+"yil", Imonth+"oy", Iday+"kun", Ihours+"soat", Iminutes+"minut",Iseconds+"secund");






let friendyear=friendbirthday.getFullYear();
let friendmonth=friendbirthday.getMonth()+1;
let friendday=friendbirthday.getDate();
let friendhours=friendbirthday.getHours();
let friendminutes=friendbirthday.getMinutes();
let friendseconds=friendbirthday.getSeconds()

console.log(`${name2}`+" "+friendyear+"yil",friendmonth+"oy",friendday+"kun",friendhours+"soat",friendminutes+"minut",friendseconds+"sekund");


let diffyear=Math.abs(Iyear-friendyear);
let diffmonth=Math.abs(Imonth-friendmonth);
let diffday=Math.abs(Iday-friendday);
let diffhours=Math.abs(Ihours-friendhours);
let diffminutes=Math.abs(Iminutes-friendminutes);
let diffseconds=Math.abs(Iseconds-friendseconds);
alert(`${name.toUpperCase()}`+" va "+`${name2.toUpperCase()}`+" orasidagi farq " +"\n" +diffyear+" yil "+"\n" +diffmonth+" oy "+"\n" +diffday+" kun "+"\n" +diffhours+" soat "+"\n" +diffminutes+" minut "+"\n" +diffseconds+" second")

