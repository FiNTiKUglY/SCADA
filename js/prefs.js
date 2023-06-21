function change_prefs() {
    let state = document.getElementById("state")
    if (state.value.startsWith(`н`)) {
        document.getElementById('pause-time').style.opacity = `40%`
        document.getElementById('work-time').style.opacity = `40%`
    }
}

change_prefs()