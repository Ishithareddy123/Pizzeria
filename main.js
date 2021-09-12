menu_list_array = ["Veg Margherita Pizza","Chees Pizza","Chicken Tandoori pizza","Olive Drizzle Pizza","Paprika spice pizza"]
function getmenu(){
var htmldata;
 htmldata="<ol class='menulist'>";
 menu_list_array.sort();
 for(var i=0;i<menu_list_array.length;i++){
 htmldata=htmldata+"<li>"+menu_list_array[i]+"</li>";
//Complete the code
}

htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML=htmldata;
}
function add_item(){
var htmldata="";

//Complete the code
menu_list_array.sort();
for( var i=0;i<menu_list_array.length;i++){


htmldata="<section class='card'>";
//htmldata=htmldata+"<li>"+menu_list_array[i]+"</li>"
    htmldata=htmldata+"<div class='card'>"
    +"<img src='pizzaImg.png'>"
    +menu_list_array[i]+"</div>"; 

htmldata=htmldata+"</section>";
console.log(htmldata);
}
document.getElementById("display_addedmenu").innerHTML=htmldata;
}
function add_top(){
//Complete the code
var item=document.getElementById("add_item").value;
menu_list_array.push(item);

menu_list_array.sort();
}
