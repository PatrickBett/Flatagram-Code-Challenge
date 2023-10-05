const h2 = document.getElementById("card-title")
const image=document.getElementById("card-image")


function displayData(){
    fetch(" http://localhost:3000/images")
    .then(res=>res.json())
    .then(
     data=>{
        const fisrtObj=(data[0])
        const title=fisrtObj.title
        let likes=fisrtObj.likes
        const img=fisrtObj.image
        const id=fisrtObj.id

        h2.innerHTML="",
        h2.textContent=title
        image.innerHTML="",
        image.src=img
        

        const likeButton=document.getElementById("like-button")
        likeButton.addEventListener("click",likeFuct)

        function likeFuct(){
            likes ++ //increment by one
            //console.log(likes)
            let likeCount=document.getElementById("like-count")
            likeCount.innerHTML="",
            likeCount.textContent= likes +" likes" }   
        
            

        const postBtn = document.querySelector("button.comment-button")
        
       
        function postFunc(event){
            event.preventDefault()
            const inputComment = document.getElementById("comment").value
            console.log(inputComment)
            console.log("success")
            const newli = document.createElement("li")
            newli.textContent=inputComment
            const ul = document.getElementById("comments-list")
            ul.appendChild(newli)
         }  
        postBtn.addEventListener("click",postFunc) }
    

    )
}



displayData();
//displayComments();



































 // data=>{
    //     //console.log(data)
    //     const comments=data
    //    // console.log(comments)
    //     comments.forEach((comment)=>{
    //         const content=comment.content
    //         console.log(content)   
    //         const lis =document.querySelectorAll('li')
    //         //console.log(lis)
    //         lis.forEach((li)=>{
    //             li.innerHTML="";
    //             li.textContent=content})         
         
    //     }) 
             
    // }