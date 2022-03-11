const down = document.getElementById("downButton")
const up = document.getElementById("upButton")

for(let i = 0; i < document.querySelectorAll(".iframeOption").length; i++){
    document.querySelectorAll(".iframeOption")[i].addEventListener("click", video)
}

function video(e){
    const iframe = document.createElement("iframe");
    iframe.className = "playing"
    iframe.mute = true;
    iframe.autoplay = true;
    document.getElementById("iframe").innerHTML = '';
    nav("kip")


    const video = e.target.id;
    switch(video){
        case "option1":
            iframe.src = "https://www.youtube.com/embed/uCxr7cff0pw?autoplay=1&controls=0";
            document.getElementById("iframe").appendChild(iframe);
            document.getElementById("iframe").innerHTML += '<h3 class="titel" id="titel">Een dikke Kawasaki robot</h3>';
            document.getElementById("iframe").innerHTML += '<p class="titel" id="text">Wat een prachtige video</p>';
            document.getElementById("titel").style.display = "block";
            for(let i = 0; i < document.querySelectorAll(".iframeOption").length; i++){
                document.querySelectorAll(".iframeOption")[i].style.backgroundColor = "white";
            }
            document.getElementById("option1").style.backgroundColor = "darkGray"

        break;
        case "option2":
            iframe.src = "https://www.youtube.com/embed/CoA-m5iHG9s?autoplay=1&controls=0";
            document.getElementById("iframe").appendChild(iframe);
            document.getElementById("iframe").innerHTML += '<h3 class="titel" id="titel">Achtbaan robot</h3>';
            document.getElementById("iframe").innerHTML += '<p class="titel" id="text">U zult beven en huiveren.</p>';
            document.getElementById("titel").style.display = "block";
            for(let i = 0; i < document.querySelectorAll(".iframeOption").length; i++){
                document.querySelectorAll(".iframeOption")[i].style.backgroundColor = "white";
            }
            document.getElementById("option2").style.backgroundColor = "darkGray"

        break;
        case "option3":
            iframe.src = "https://www.youtube.com/embed/FvPIV4WJBqY?autoplay=1&controls=0";
            document.getElementById("iframe").appendChild(iframe);
            document.getElementById("iframe").innerHTML += '<h3 class="titel" id="titel">Wat een arme pallet</h3>';
            document.getElementById("iframe").innerHTML += '<p class="titel" id="text">Nog nooit eerder vertoond</p>';
            document.getElementById("titel").style.display = "block";
            for(let i = 0; i < document.querySelectorAll(".iframeOption").length; i++){
                document.querySelectorAll(".iframeOption")[i].style.backgroundColor = "white";
            }
            document.getElementById("option3").style.backgroundColor = "darkGray"

        break;
    }
}

down.addEventListener("click", nav)
up.addEventListener("click", nav)

function nav(e){
    if(e == "kip"){
            down.style.display = "none"
            up.style.display = "block"
            for(let i = 0; i < document.querySelectorAll(".iframeOption").length; i++){
                document.querySelectorAll(".iframeOption")[i].style.display = "none"
            }
    } else{
        const button = e.target.id;
        switch(button){
            case "upButton":
                up.style.display = "none"
                down.style.display = "block"
                for(let i = 0; i < document.querySelectorAll(".iframeOption").length; i++){
                    document.querySelectorAll(".iframeOption")[i].style.display = "block"
                }
                break;
    
            case "downButton":
                down.style.display = "none"
                up.style.display = "block"
                for(let i = 0; i < document.querySelectorAll(".iframeOption").length; i++){
                    document.querySelectorAll(".iframeOption")[i].style.display = "none"
                }
                break;

        }
}

}

down.addEventListener("click", nav)
up.addEventListener("click", nav)

function nav(e){
    if(e == "kip"){
            down.style.display = "none"
            up.style.display = "block"
            for(let i = 0; i < document.querySelectorAll(".iframeOption").length; i++){
                document.querySelectorAll(".iframeOption")[i].style.display = "none"
            }
    } else{
        const button = e.target.id;
        switch(button){
            case "upButton":
                up.style.display = "none"
                down.style.display = "block"
                for(let i = 0; i < document.querySelectorAll(".iframeOption").length; i++){
                    document.querySelectorAll(".iframeOption")[i].style.display = "inline-flex"
                }
                break;
    
            case "downButton":
                down.style.display = "none"
                up.style.display = "block"
                for(let i = 0; i < document.querySelectorAll(".iframeOption").length; i++){
                    document.querySelectorAll(".iframeOption")[i].style.display = "none"
                }
                break;

        }
    }
    
}