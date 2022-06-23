alert("curriculo jkkkkkkk");

function getTextos() {
  let url = "/textos";

  let xhttp = new XMLHttpRequest();
  xhttp.open("get", url, false);
  xhttp.send();

  let data = JSON.parse(xhttp.responseText)

  data.forEach(row => {
    $("#textos")[0].innerHTML += `
        <h2 class="titulos">${row.text}</h2>
        <spam>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi perspiciatis dolorum ex maxime quidem similique dolor earum saepe vero voluptate molestias officia quibusdam ullam hic, et suscipit aut fugiat autem!</p>
        </spam>
    `
    
  });
}
