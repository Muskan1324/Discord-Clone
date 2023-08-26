const form = document.querySelector("form")
const chatMessages = document.querySelector(".chat__messages")
const input = document.querySelector(".sendMessage")

const audio = new Audio();
audio.src = "music/ting.mp3";

form.addEventListener("submit", sendMessage)

function sendMessage(e) {
    e.preventDefault()

 if(input.value !== "") {

        audio.play();
        var messageDiv = document.createElement("div")
        messageDiv.className = "message"

        var avatar = document.createElement("img")
        avatar.src = "assets/user4.jpg"

        var messageInfo = document.createElement("div")
        messageInfo.className = "message__info"

        var userInfo = document.createElement("h4")
        userInfo.innerHTML = "Muskan"
         
        var span = document.createElement("button");
        span.innerHTML = "&times;";
        span.addEventListener("click",function(){
            let parent = this.parentNode.parentNode;
            let child = this.parentNode;
            parent.removeChild(child);

    })
        var messageTimestamp = document.createElement("span")
        messageTimestamp.className = "message__timestamp"

        const date = new Date()
        const year = date.getFullYear()
        const month = date.getMonth() +1;
        const day = date.getDate();

        messageTimestamp.innerHTML = day + "/" + "0" +month+ "/" + year

        const message = document.createElement("p")
        message.innerHTML = input.value
        input.value = ""

        userInfo.appendChild(messageTimestamp)
        messageInfo.appendChild(userInfo)
        messageInfo.appendChild(message)

        messageDiv.appendChild(avatar)
        messageDiv.appendChild(messageInfo)
        messageDiv.appendChild(span);

        chatMessages.appendChild(messageDiv)
        chatMessages.scrollBy(0, 10000)
    }
}