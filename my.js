let depozit=document.getElementById("dep")
depozit.oninput=calculateDepozit

let time=document.getElementById ("time")
    time.onchange=calculateDepozit

let stavka=document.getElementById ("stavka")
    stavka.oninput=calculateDepozit

function calculateDepozit(){
    console.log (dep.value)
    let sum1=dep.value
    let bylo=document.getElementById("sum1")
    bylo.innerHTML=sum1
    let stanet=document.getElementById("sum2")
    let sum2=Math.round(sum1*(1+stavka.value*0.01)**(time.value/12))
    stanet.innerHTML=sum2
    document.getElementById("before").style.height=(sum2/sum1)*120+"px"
    
}
const posts=document.querySelector(".post-container")
//const title=document.querySelector(".post-container h3")
//const body = document.querySelector(".post-container span")
const bt=document.querySelector ("button")
 bt.onclick= ppp

 function ppp(){
fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response =>{
        console.log(response)
        return response.json()})
      .then(data => {
        for (d of data)
        addPost(d.title,d.body)})
      .catch((error=>{
        console.log(error.message)
      }))
    }

      /************************************/
      function addPost(t,b){
        const title = document.createElement ('h3')
        const body = document.createElement ('span')
        const postItem=document.createElement('p')
        title.innerHTML=t
        body.innerHTML=b
        postItem.append(title,body)
        posts.append(postItem)
      }