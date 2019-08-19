var call = async function() {
    let api = `./note.php?list`;
    let response = await axios.get(api);
    console.log(response)

}

call();