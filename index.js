import{saveTask, getTasks, onGetTasks, deleteTask, getTask, updateTask} from './firebase.js'
const taskForm = document.getElementById('task-form');
const tasksContainer =document.getElementById('tasks-container');
let editStatus = false;
let id= '';
window.addEventListener('DOMContentLoaded', async (e) =>{

    onGetTasks((querySnapshot)=>{
        tasksContainer.innerHTML="";
        querySnapshot.forEach(doc => {

            const task = doc.data();
            tasksContainer.innerHTML +=`
                <div class="card card-body mt-2 border-primary">
                    <h3 class="h3">${task.title}</h3>
                    <p>${task.description}</p>
                    <div>
                        <button class="btn btn-primary btn-eliminar" data-id="${doc.id}">Eliminar</button>
                        <button class="btn btn-secundary btn-edit" data-id="${doc.id}">Editar</button>
                    </div>
                </div>
            `;
        });
        const btnEliminar = tasksContainer.querySelectorAll('.btn-eliminar');
        btnEliminar.forEach(btn=>{
            btn.addEventListener('click', async ({target:{dataset}})=>{
                deleteTask(dataset.id)
            });
        });
        const btnEdit = tasksContainer.querySelectorAll('.btn-edit');
        btnEdit.forEach( (btn) =>{
            btn.addEventListener('click', async(e) =>{
                const doc= await getTask(e.target.dataset.id);
                const task = doc.data();
                taskForm['task-title'].value = task.title;
                taskForm['task-description'].value = task.description;
                editStatus = true
                id= doc.id;
                taskForm['btn-task-save'].innerText='Update'
            })

        })

        });

    });
//const taskForm= document.getElementById('task-form')
taskForm.addEventListener('submit',(e)=>{
    //con este comando se cancela el refrescar la pagina por defecto
    e.preventDefault()
    const title= taskForm['task-title'];
    const description = taskForm['task-description'];
    if (!editStatus){
        saveTask(title.value, description.value);
    } else{
        updateTask(id, {title: title.value , description:description.value });
        editStatus= false;

    }
    taskForm.reset();
});