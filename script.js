const menu = document.getElementById('menu');
const content = document.getElementById('content');
menu.addEventListener('click', function(e) {
  e.stopPropagation();
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function() {
  content.style.display = 'none';
});

window.addEventListener('onclick', function(e) {
    if (!menu.contains(e.target)) {
        content.style.display = 'none';
    }
}
);  

const m=document.getElementById('nb').addEventListener('click',()=>{
alert('submitted')
})

car={
    name:"jeep",
    model:"tesla",
    color:"red"

}
console.log(car.name)

me=new(car)
console.log(typeof(me))