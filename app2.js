const play = document.getElementById("pageLink")

play.onclick = (e) => {
    e.preventDefault();
    const namevalue1= document.getElementById("name").value;
    const namevalue2= document.getElementById("username").value;
    if (namevalue1.length > 0 && namevalue2.length > 0){

        var name = document.getElementById("name").value;
        localStorage.setItem("name", name);
        location.href ="2ndpage.html"

    } else {
        alert ("Please enter your Name and Username!");
    }
}