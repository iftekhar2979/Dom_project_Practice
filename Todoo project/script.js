showTask()
const inputText = document.getElementById('addtaskinput')
const button = document.getElementById('addtaskbtn')
button.addEventListener('click', () => {
    let inputValue = inputText.value
    let webTask = localStorage.getItem('localTask') //local storage e get item use kore kono item ke local storage theke browser newa hoi r ekhane 'localTask'== variable er moto jeta get data and set data te eki vabe eki name e use kora lagbe.. ta nahole get data and set data te issue or bug dekha dibe ...tik moto show kore na
    if (inputValue.trim() != 0) { /*trim() use kore  kono value size tikh rakha jai*/
        if (webTask == null) {
            taskObj = []

        } else {
            taskObj = JSON.parse(webTask) //webtask ti ke taskObj name variable e niye json ke object e transform kora hoi
        }
        taskObj.push(inputValue)
        inputText.value=''
        localStorage.setItem('localTask', JSON.stringify(taskObj)); //local storage e set item use kore kono item ke set kora hoi 
        //*** local storage e set item korar somoi  browser er json file ke string e convert korte hoi jar karone 'json.stringify(jeta ke string e transform korbw sei variable)' use kora hoi
    }

    showTask()
    // inputValue=''
})

function showTask() {
    let webTask = localStorage.getItem('localTask')
    if (webTask == null) {
        taskObj = []

    } else {
        taskObj = JSON.parse(webTask)
    }
    let html = '';
    let addedTaskList = document.getElementById('addedtasklist')
    taskObj.forEach((item, index) => {  /*forEach funtion e 3 ti parameter use kora jai ta holo 
        currentItem(required) - বর্তমান অ্যারে উপাদানের মান। 
        index(optional) - বর্তমান উপাদানের সূচক নম্বর। 
        array(optional) - অ্যারে অবজেক্ট যার সাথে বর্তমান উপাদান রয়েছে।*/
        html +=
            `<tr>
            <th scope='row'>${index}</th>
            <td>${item}</td>
            <td><button type='button' onclick='editTask(${index})' class='text-primary'><i class='fa fa-edit'></i>Edit</button></td>
            <td><button type='button'onclick='deleteTask(${index})' class='text-danger'><i class='fa fa-trash'></i>Delete</button></td>
        </tr>`
    })
    addedTaskList.innerHTML = html;
    
}

// edit task
function editTask(index){
    let saveIndex=document.getElementById('saveindex')
    let addtaskbutton=document.getElementById('addtaskbtn')
    let savetaskbutton=document.getElementById('savetaskbtn')
    let webTask=localStorage.getItem('localTask')
    let taskObj=JSON.parse(webTask)
    saveIndex.value=index
    inputText.value=taskObj[index];
    addtaskbutton.style.display='none'
    savetaskbutton.style.display='block'
}

// savetask
let savetaskbutton=document.getElementById('savetaskbtn')
savetaskbutton.addEventListener('click',function(){
    // let webTask=localStorage.getItem('localTask')
    let webTask=localStorage.getItem('localTask')
    let taskObj=JSON.parse(webTask)
    let saveIndex=document.getElementById('saveindex').value;
    taskObj[saveIndex]=inputText.value
    localStorage.setItem('localTask',JSON.stringify(taskObj))
    savetaskbutton.style.display='none'
    let addtaskbutton=document.getElementById('addtaskbtn')
    addtaskbutton.style.display='block'
    
    inputText.value=''
    showTask()
})

// deleting task
function deleteTask(index){
    let webTask=localStorage.getItem('localTask')
    let taskObj=JSON.parse(webTask)
    taskObj.splice(index,1); //splice method er maddome kono array er main element theke kono item bad dewa hoi etar parameter hisabe thake ... splice(koto number index , koita index remove hobe , index add korbe)
    localStorage.setItem('localTask',JSON.stringify(taskObj))
showTask()

}

// deleting all
let delteAll=document.getElementById('deleteallbtn')
delteAll.addEventListener('click',()=>{
    let savetaskbutton=document.getElementById('savetaskbtn')
    let addtaskbutton=document.getElementById('addtaskbtn')

    let webTask=localStorage.getItem('localTask')
    let taskObj=JSON.parse(webTask)
    if (webTask == null) {
        taskObj = []

    } else {
        taskObj = JSON.parse(webTask)
        taskObj=[]
    }
    savetaskbutton.style.display='none'
    addtaskbutton.style.display='block'
    localStorage.setItem('localTask',JSON.stringify(taskObj))
    showTask()

})

// search list
let searchTextBox=document.getElementById('searchtextbox')
searchTextBox.addEventListener('input',function(){
    let trList=document.querySelectorAll('tr')
    Array.from(trList).forEach((item)=>{  //array.form(variable name) === ei method use kore kono variable ke array te transformation kora jai
let searchText=item.getElementsByTagName('td')[0].innerText;
let searchTextValue=searchTextBox.value
let re= new RegExp(searchTextValue,'gi') //search korar jonne reglular exprasion use kora laghe
//regExp er modde gi ta holo একটি স্ট্রিং অবজেক্ট ব্যবহার করে একটি স্ট্রিং-এ রেগুলার এক্সপ্রেশনের সমস্ত ঘটনার জন্য কেস সংবেদনশীল অনুসন্ধান করতে "gi" .
if(searchText.match(re)){
    item.style.display='table-row'
}else{
    item.style.display='none'
}
    })
})