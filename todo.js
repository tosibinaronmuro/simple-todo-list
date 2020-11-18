let add=document.getElementById("buttonn");
let itemlist=document.getElementsByClassName('items');
let filter=document.getElementById('input')



add.addEventListener('submit', goat);

 
function goat(e){
    e.preventDefault();
    
    // get input value
    let input=document.getElementById('input').value ;

    // create a new elemet
    let li=document.createElement('li');
     
    // give the element a class name
    li.className='list-group-item';
     
    
    // add input value to new list
     
     

    li.appendChild(document.createTextNode( input));

    let deletee=document.createElement('button');
    deletee.className='btn btn-danger float-right btn btn-sm delete';
    deletee.appendChild(document.createTextNode('delete'));
    li.appendChild(deletee)

    // complete button
    let complete=document.createElement('button')
    complete.className='btn btn-success float-left btn btn-sm done'
    complete.appendChild(document.createTextNode('complete'));
    li.appendChild(complete);
     
    let time=document.createElement('button');
    time.className='btn btn-info float-right btn btn-sm ';
    time.appendChild(document.createTextNode(  moment().calendar()));
    li.appendChild(time)
    

    // media
    function normm(){
        complete.textContent='+';
        deletee.textContent='x';
        time.style.display='none';
    }
    function lol(){
        complete.textContent='complete';
        deletee.textContent='delete';
         time.style.display='block'
    }
    function myFunction(x) {
        if (x.matches) { // If media query matches
        normm();
        } else {
          lol();
          
        }
      }
      
      var x = window.matchMedia("(max-width: 500px)")
      myFunction(x)
      x.addListener(myFunction)
    
    
    // li.style.textAlign='center'
    // supposed to add the new list to the UL 

    
    itemlist[0].appendChild(li);
}
 
 itemlist[0].addEventListener('click', deleteee)
function deleteee(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li=e.target.parentElement;
            li.style.display='none';
        }
    }

}
itemlist[0].addEventListener('click', completee)
function completee(e){
    if(e.target.classList.contains('done')){
        if(confirm('are you sure?')){
            var li=e.target.parentElement;
            li.style.backgroundColor='#98fb98'
        }
    }

}
let small=document.getElementById('done');
let smalll=document.getElementById('del');
  let tick=document.createElement('n')
// tick.appendChild(document.createTextNode(<path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>));

// function lllll(){
//     small.textContent='complete';
//     smalll.textContent="delete" ;
// }
//  function normal(){
//     small;
//     smalll ;
//  }
// function myFunction(x) {
//     if (x.matches) { // If media query matches
//     normal();
//     } else {
//       lllll();
      
//     }
//   }
  
//   var x = window.matchMedia("(max-width: 500px)")
//   myFunction(x)
//   x.addListener(myFunction)

 


 
