let nodeList = document.getElementsByTagName('li');

for(let i = 0; i < nodeList.length; i++) {
    let button = document.createElement('button');
    let buttonAlarm = document.createElement('button');
    let btnText = document.createElement('i');
    let btnAlarmText = document.createElement('i');

    button.className = 'close btn btn-outline-danger btn-sm mt-3';
    buttonAlarm.className = 'alarm btn btn-outline-success btn-sm mt-3 ms-3';
    btnText.classList.add('fas', 'fa-trash-alt')
    btnAlarmText.classList.add('fas', 'fa-check')
    button.appendChild(btnText);
    buttonAlarm.appendChild(btnAlarmText);

    nodeList[i].append(button, buttonAlarm);
}

let close = document.getElementsByClassName('close');

for(let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.classList.add('d-none');
    }
}

let alarm = document.getElementsByClassName('alarm');

for(let i = 0; i < alarm.length; i++) {
    alarm[i].onclick = function() {
        let div = this.parentElement;
        div.classList.add('border-success');
    }
}

const submitBtn = document.querySelector('.btn-success');

submitBtn.addEventListener('click', ()=> {
    let newList = document.createElement('li');
    let taskInputValue = document.getElementById('taskName').value;
    let taskInputDate = document.getElementById('taskDate').value;
    let inputHolder = document.createElement('div');
    newList.appendChild(inputHolder);
    inputHolder.classList.add('row');
    let col_md_6 = document.createElement('div');
    let colmd6 = document.createElement('div');
    let taskName = document.createTextNode(taskInputValue)
    let taskDate = document.createTextNode(taskInputDate)

    col_md_6.classList.add('col-md-6');
    colmd6.classList.add('col-md-6', 'text-end');

    inputHolder.append(col_md_6, colmd6);
    col_md_6.appendChild(taskName);
    colmd6.appendChild(taskDate);

    if(taskInputValue == '' || taskInputDate == '') {
        alert('Please add a task and a date');
    } else {
        newList.classList.add('shadow', 'bg-light', 'p-2', 'rounded', 'border', 'border-primary', 'mt-3');
        document.querySelector('.list-unstyled').appendChild(newList);
    }

    document.querySelector('#taskName').value = '';

    let button = document.createElement('button');
    let buttonAlarm = document.createElement('button');
    let btnText = document.createElement('i');
    let btnAlarmText = document.createElement('i');

    button.className = 'close btn btn-outline-danger btn-sm mt-3';
    buttonAlarm.className = 'alarm btn btn-outline-success btn-sm mt-3 ms-3';
    btnText.classList.add('fas', 'fa-trash-alt')
    btnAlarmText.classList.add('fas', 'fa-check')
    button.appendChild(btnText);
    buttonAlarm.appendChild(btnAlarmText);
    newList.append(button, buttonAlarm);

    for(let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let confirmAtion = window.confirm('Are you sure you want to delete this task ?');
            confirmAtion;

            if(confirmAtion) {
                let div = this.parentElement;
                div.classList.add('d-none');
            } else {
                false;
            }
        }
    }

    for(let i = 0; i < alarm.length; i++) {
        alarm[i].onclick = function() {
            let div = this.parentElement;
            div.classList.add('border-success', 'border-3');
            alert('Congratulations, you have completed your task!!');
        }
    }
})
