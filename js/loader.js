// removes the loader from the dom after 3 sec 

window.addEventListener('load', (e) => {
   setTimeout(remove, 3000)
});
const remove = () => {
    document.getElementById("loader").remove()
    document.getElementById("hidden").style.display = "block"
}