const type = document.getElementsByClassName("type")[0];    
const button = document.querySelector(".random");

button.addEventListener('click', (e) => {
    e.preventDefault()

    fetch("https://www.boredapi.com/api/activity")
        .then(response => response.json())
        .then(bored => {
        console.log(bored)
        type.innerHTML = bored["activity"];         
        
            

    })
    

}) 


