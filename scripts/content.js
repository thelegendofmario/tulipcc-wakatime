function waitForCanvas() {
    if (!window.location.href.includes("tulip.computer/run")) {
        return
    }
    let save = document.querySelectorAll("textinput") 
    if (save) {
        console.log("yes. there is a button.")
    }

    // console.log("hello.")
    if (document.querySelector(".cm-s-lucario.CodeMirror")) {
        a = document.querySelector(".cm-s-lucario.CodeMirror")
        console.log(a)
        a.addEventListener("input",
            handleInput
        );
        return true;
    }
    window.setTimeout(waitForCanvas, 500);
}
const core = new WakaCore();
function handleInput() {
    if (!window.location.href.includes("tulip.computer/run")) {
        console.log("lol")
        return
    }
    console.log("this works?")
    let url = window.location.href;
    let heatbeat = core.buildHeartbeat(url);
    console.log(heatbeat);
    try{
        chrome.storage.local.get("heartbeats").then((item) => {
            if (!item.heartbeats) {
                item.heartbeats = []
            }
            item.heartbeats.push(heatbeat)
            chrome.storage.local.set({ heartbeats: item.heartbeats })
          });
    }catch(e){
        alert("A error has occured! Usally this is because you have not refreshed your page after installing the extension. Please refresh the page and try again.")
    }

}

waitForCanvas()
