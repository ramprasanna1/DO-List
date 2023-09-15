const input = document.getElementById("inputbox")
const list = document.getElementById("listcontainer")




function addtask(){
    if (input.value === ''){
        alert('Please enter a task')
    }
    else{
        let li =document.createElement('li');
        li .innerHTML = input.value;
        list.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    input.value = '';
    save();
}




list.addEventListener('click', function(e){
    if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove()
        save()
    }


    else if(e.target && e.target.tagName === 'LI'){
        e.target.classList.toggle('check')
        save()
    }
});



function save(){
    localStorage.setItem("data",list.innerHTML);
}
function show(){
    list.innerHTML= localStorage.getItem('data')
}
show()