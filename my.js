
function testGS(){

    const url = "https://script.google.com/macros/s/AKfycbxpsO70QcKMV6T5UrMIigFujx42Ak1W8ScSvDPhQfzxslzcTejBTjYvy4Mexqx5XjOY/exec"

    fetch(url)
    .then(d => d.json())
    .then(d => {
        document.getElementById("app").textContent = d[0].status
    });
}

function addGS(){

    const url = "https://script.google.com/macros/s/AKfycbxpsO70QcKMV6T5UrMIigFujx42Ak1W8ScSvDPhQfzxslzcTejBTjYvy4Mexqx5XjOY/exec"

    fetch(url,{
        method: 'POST', //GET,POST,PUT,DELETE,ect.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache,reload,force-cache, only-if-cache
        credentials: 'omit',//include,*same-origin,omit
        headers: {
            'Content-type': 'application/json'
            //'Content-Type': 'application/x-www-from-urlencoded',
        },
        redirect: 'follow',// manual,*follow,error
        //referencePolicy: 'no-referrer',//no-referrer,*no-referrer-when-downgrade,orogin,
        body: JSON.stringify({name:"Makkie"})
    });

}

document.getElementById("btn").addEventListener("click",testGS);

document.getElementById("btn2").addEventListener("click",addGS);