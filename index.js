//console.log(fetch('https://encryptedhttps://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRibFlYmTMyAhYMpyQKWhk5WOFtJ2JlGc_SYMBcUO2dC1-0Pznn-tbn3.gstatic.com/images?q=tbn:ANd9GcQuSibRrzurJuEqRT_Xz4P3NkNOLyteKt6sYQJI5hEeQdP88P2znoKqjntR-93CYeySK-wRWelwTImG1q0kPpLZ46hyGNsbTejsqFYVag')
    
   // .then(response => {
      //  console.log(response)
      //  return response.blob();
    //})


    //.then(blob  =>{
      //  console.log(blob)
       // document.querySelector('#myImage').src=URL.createObjectURL(blob)
    //})

   // .catch(error =>{
   //     cconsole.log(error)
   // })
//)


//id selector
const content=document.querySelector("#content")

//loading page
window.addEventListener("load", () =>{
    getUsers()
})

function getUsers(){
    let html=""

    fetch("https://bscs3a-crud-api.onrender.com/api/members" , {mode: "cors"})
    .then((response) =>{
        console.log(response)
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        data.forEach((element) =>{
            html += `<li>${element.first_name} ${element.last_name}</li>`
        })

        content.innerHTML = html
    })
    .catch((error) =>{
        console.log(error)
    })

}