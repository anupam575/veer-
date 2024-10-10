let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang = 'hi-IN'
    window.speechSynthesis.speak(text_speak)

}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir,how can i help you!")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir,how can i help you!")
    }else{
        speak("good Evening sir ,how can i help you!")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition= window.speechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript= event.results[currentIndex][0].transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
})
function takeCommand(message){
    if(message.includes("hello")) {
        speak("hello sir, what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am tripathi assistant, created by anupam sir")
    }else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://www.instagram.com/")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://www.facebook.com/")
    }
    else if(message.includes("open google translate")){
        speak("opening google translate...")
        window.open("https://translate.google.com/?sl=en&tl=hi&op=translate")
    }
    
    else if(message.includes("open amazon")){
        speak("opening amazon...")
        window.open("https://www.amazon.in/s?k=huawei+mobile&crid=2HLPES96KEPQF&sprefix=huaewi%2Caps%2C241&ref=nb_sb_ss_pltr-data-refreshed_1_6")
    }
    else if(message.includes("flipkart")){
        speak("opening flipkart...")
        window.open("https://www.flipkart.com/")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp...")
        window.open("https://web.whatsapp.com/")
    }
    else if(message.includes("open javascript")){
        speak("opening javascript...")
        window.open("https://www.tutorialspoint.com/javascript/javascript_inheritance.htm")
    }else{
        speak(`this is what i found on internet regarding ${message}`)
        
        window.open(`https://www.google.com/search?q=${message}`)
        
    }
}

    
       
    



    
    
    

