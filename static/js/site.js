
var jsFunctions = {};

jsFunctions.setCurrentTournoisCommune = (communeId) => {
    DotNet.invokeMethodAsync("IvoirBballNet", "SetCurrentTournoisCommune", communeId).then(() => {
        console.log('Current commune set to ' + communeId)
    }).catch(ex => console.log(ex))
}

jsFunctions.callOpenEditCommuneTournois = (dotnNetObjRef, communeId) => {
    dotnNetObjRef.invokeMethodAsync("SetCurrentTournoisCommune", communeId)
    var el = document.getElementById("sideNav")
    el.style.width = "80%";
    el.style.position = "fixed";
}

jsFunctions.callCloseEditCommuneTournois = (dotNetObjRef) => {
    dotNetObjRef.invokeMethodAsync("ClearCurrentTournoisCommune", null)
    document.getElementById("sideNav").style.width = "0";
}

function openCommuneTeamsNav(communeId) {
   
    jsFunctions.setCurrentTournoisCommune(communeId)
}

function closeCommuneTeamsNav() {
    document.getElementById("sideNav").style.width = "0";
}

function openNav() {
    var el = document.getElementById("sideNav")
    el.style.width = "80%";
    el.style.position = "fixed";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

