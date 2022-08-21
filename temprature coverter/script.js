let celin=document.getElementById("celin");
let fahin=document.getElementById("fahin");

celin.addEventListener('input' ,function(){
    let c= this.value;
    let f = (c*(9/5))+32;
    if(!Number.isInteger(f)){
      f=f.toFixed(4)
    }
    fahin.value=f
  })
  fahin.addEventListener('input',function(){
    let f= this.value;
    let c = ((f-32)*5/9);
    if(!Number.isInteger(c)){
      c=c.toFixed(4)
    }
    celin.value=c
})
