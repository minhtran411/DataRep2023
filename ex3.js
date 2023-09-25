//Exercise a

let strArray = [];

//Exercise b

const addTask = (newTask) => {
    strArray.push(newTask);
    console.log(`New task "${newTask}" has been inserted to the list.`)
    console.log(`Current tasks: ${strArray.length}`)
    console.log("-----------------------------")
}

addTask("Clean the house");
addTask("Research for school work");

//Exercise c

const listAllTask = () => {
    strArray.forEach((task, index) => console.log(`Task ${index+1}: ${task}`))
    console.log("-----------------------------")
}

listAllTask();
addTask("Cafe with friends");
listAllTask();

//Exercise d
const deleteTaskByTaskName = (deleteTask) => {
    //strArray.indexOf(deleteTask)>=0? strArray.splice(strArray.indexOf(deleteTask),1) : console.log("Sorry that task is not in the list.");
    if (strArray.indexOf(deleteTask) >= 0) {
        strArray.splice(strArray.indexOf(deleteTask),1)
        console.log(`We have just removed "${deleteTask} from your list."`)
        return strArray.length;
    } else {
        console.log("Sorry that task is not in the list.")
    }
}

console.log("Current tasks: "+deleteTaskByTaskName("Research for school work"));
listAllTask();