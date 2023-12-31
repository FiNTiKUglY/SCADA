let remaining_time = parseInt(document.getElementById("rem-time").innerHTML) * 60

function turn_on() {
    let state = document.getElementById("state")
    state.firstElementChild.innerHTML = "Работа"
    check_state()
}

function wait() {
    let state = document.getElementById("state")
    state.firstElementChild.innerHTML = "Ожидание"
    check_state()
}

function turn_off() {
    let state = document.getElementById("state")
    state.firstElementChild.innerHTML = "Стоп"
    check_state()
}

function change_water_error() {
    let error = document.getElementById("water-error")
    if (error.style.display == "none") {
        error.style.display = "block"
    }
    else {
        error.style.display = "none"
    }
}

function change_doze_error() {
    let error = document.getElementById("doze-error")
    if (error.style.display == "none") {
        error.style.display = "block"
    }
    else {
        error.style.display = "none"
    }
}

function check_state() {
    let state = document.getElementById("state")
    console.log(state.firstElementChild.innerHTML);
    if (state.firstElementChild.innerHTML == "Работа") {
        state.style.backgroundColor = "#47ff6f";
        if (parseInt(state.lastElementChild.innerHTML) == -1) {
            state.lastElementChild.innerHTML = `непрерывная`
        }
    }
    else if (state.firstElementChild.innerHTML == "Ожидание") {
        state.style.backgroundColor = "#faef52";
    }
    else {
        state.style.backgroundColor = "#ff6161";
        state.lastElementChild.style.display = "none"
    }
}

function update_time() {
    let time = document.getElementById("time").firstElementChild
    let date = document.getElementById("time").lastElementChild
    let curr_date = new Date()

    let dd = curr_date.getDate()
    dd < 10 ? dd = '0' + dd : dd

    let mm = curr_date.getMonth() + 1
    mm < 10 ? mm = '0' + mm : mm

    let yy = curr_date.getFullYear()
    yy < 10 ? yy = '0' + yy : yy

    let hh = curr_date.getHours()
    hh < 10 ? hh = '0' + hh : hh

    let mn = curr_date.getMinutes()
    mn < 10 ? mn = '0' + mn : mn
    
    time.innerHTML = `${hh}:${mn}`
    date.innerHTML = `${dd}.${mm}.${yy}`
    remaining_time -= 1
    if (remaining_time < 1) {
        location.reload()
    }
    document.getElementById("rem-time").innerHTML = `${Math.ceil(remaining_time / 60)} мин`
}

function check_level() {
    let level = parseInt(document.getElementById("level").innerHTML)
    console.log(level)
    document.getElementById("fill-water").style.height = `${level}%`
}

document.getElementById("button-on").addEventListener("click", turn_on)
document.getElementById("button-wait").addEventListener("click", wait)
document.getElementById("button-off").addEventListener("click", turn_off)
document.getElementById("button-water").addEventListener("click", change_water_error)
document.getElementById("button-doze").addEventListener("click", change_doze_error)



update_time()
setInterval(update_time, 1000);
check_state()
check_level()