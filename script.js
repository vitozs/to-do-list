
let tasks = []

function criarTask(){
    let texto = document.getElementById('text-area');
    let task = document.createElement('div');
    let task_txt = document.createTextNode(texto.value)
    let btn = document.createElement('button');
    let btn_i = document.createElement('i');

    if(texto.value != ''){
        
        task.appendChild(task_txt)
        task.appendChild(btn)
        btn.appendChild(btn_i)

        btn.id = 'btn'
        btn_i.className = 'bi bi-x-lg'
        task.className = 'task'
        task.id = 'task'

        document.getElementById('tasks').appendChild(task)
       
    
        tasks.push(texto.value);
    
        texto.value = '';


        btn.addEventListener('click', function(){
            task.style.transform = `translateX(-100px)`
            task.style.opacity = `0`
            
            task.addEventListener('transitionend', () => {
                task.remove();
            });
            
        })


        

    }


}

let input = document.getElementById("text-area");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add").click();
  }
});

