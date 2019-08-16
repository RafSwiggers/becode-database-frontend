document.addEventListener("load", async function() {
            let api = `C:\Documents\becode_projects\becode-graph-api\api.php?list`;
            let response = await axios.get(api);
            console.log(response);