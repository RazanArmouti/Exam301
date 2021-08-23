
'use strict';

const submitForm = document.getElementById('userForm');

let txtTask;
let txtdate;
let txturgency;
let elementsArr = localStorage.elementsArr? JSON.parse(localStorage.elementsArr) : [];

let taskListObj;

let tableList = document.getElementById('tableList');

function taskList(taskParm, dateParm, urgencyParm, doneParm) {
  this.task = taskParm;
  this.tdate = dateParm;
  this.urgency = urgencyParm;
  this.done = doneParm;
  taskList.tasksArr.push(this);
}
taskList.tasksArr = [];
// taskList.prototype.getDone = function () {
//   this.done = 'X';

// };

taskList.prototype.listRender = function () {

  let trelement=document.createElement('tr');
  tableList.appendChild(trelement);


  let td1element=document.createElement('td');

  td1element.textContent=elementsArr[elementsArr.length-1][0];
  trelement.appendChild(td1element);

  let td2element=document.createElement('td');
  td2element.textContent=elementsArr[elementsArr.length-1][1];
  trelement.appendChild(td2element);

  let td3element=document.createElement('td');
  td3element.textContent=elementsArr[elementsArr.length-1][2];
  trelement.appendChild(td3element);

  let td4element=document.createElement('td');
  td4element.textContent=elementsArr[elementsArr.length-1][3];
  trelement.appendChild(td4element);

};
// taskList.prototype.clearAll = function () {

// };
// taskList.prototype.removeTask = function () {

// };

function storeDataLS() {
  // console.log(txtTask, txtdate, txturgency);
  // elementsArr = [txtTask, txtdate, txturgency, 'X'];
  // localStorage.data=JSON.stringify(elementsArr);
  elementsArr.push([txtTask, txtdate, txturgency, 'X']);


  localStorage.setItem('taskslist', JSON.stringify(elementsArr));


}


function getDataLS(){
  if (localStorage.getItem('taskslist')) {

    elementsArr=JSON.parse(localStorage.getItem('taskslist'));

    // for(let i=0; i<elementsArr.length;i++)
    // {

    taskListObj = new taskList(elementsArr[elementsArr.length-1][0], elementsArr[elementsArr.length-1][1], elementsArr[elementsArr.length-1][2], elementsArr[elementsArr.length-1][3]);
    //}

  }
  else {
    taskListObj = new taskList(txtTask, txtdate, txturgency, 'X');


  }

  taskListObj.listRender();
}
function getall() {

  elementsArr=JSON.parse(localStorage.getItem('taskslist'));
  if(elementsArr.length){
 
    for(let i=0; i<elementsArr.length;i++)
    {

      let trelement=document.createElement('tr');
      tableList.appendChild(trelement);
      let td1element=document.createElement('td');
      td1element.textContent=elementsArr[i][0];
      trelement.appendChild(td1element);

      let td2element=document.createElement('td');
      td2element.textContent=elementsArr[i][1];
      trelement.appendChild(td2element);

      let td3element=document.createElement('td');
      td3element.textContent=elementsArr[i][2];
      trelement.appendChild(td3element);

      let td4element=document.createElement('td');
      td4element.textContent=elementsArr[i][3];
      trelement.appendChild(td4element);
    }
  }
  

}

function clearall(){
  while ( taskList.tasksArr.length) {
    taskList.tasksArr.pop();
  }
  while (elementsArr.length) {
    elementsArr.pop();
  }
  localStorage.removeItem('taskslist');

}
// function removeTaskLS() {

// }


getall();


submitForm.addEventListener('submit', SubmitHandlerforTask);
function SubmitHandlerforTask(event) {
  event.preventDefault();
  // console.log('inside');
  txtTask = event.target.task.value;
  txtdate = event.target.tdate.value;
  txturgency = event.target.urgencyList.value;
  // txturgency = event.target.urgency.value;

  // console.log(txtTask, txtdate, txturgency);
  storeDataLS();
  getDataLS();
  submitForm.reset();
}





