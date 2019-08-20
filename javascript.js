var call = async function() {
    let api = `./note.php?list`;
    let response = await axios.get(api);
    console.log(response)

}

var newnote = document.getElementById("newnotebutton");
var newnoteform = document.getElementById('form-container');
newnote.addEventListener('click', function() {
    newnoteform.classList.toggle('hidden');
})

call();