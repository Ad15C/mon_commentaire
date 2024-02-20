//On prend les éléments du DOM
    const errorMessage = document.querySelector("#error-message");
    const formulaire = document.querySelector("form");
    
//Plus particulièrement les div de commentaires
    const commentList = document.querySelector("#comment-list");
    const sampleComment = document.querySelector("#comment-list > div:nth-child(2)");

//On va effectuer un clone
    const newComment = sampleComment.cloneNode(true);
    const newCommentH3 = newComment.querySelector(".font-medium, .text-gray-900");
    const newCommentP = newComment.querySelector(".prose, .prose-sm, .mt-4, .max-w-none, .text-gray-500");
  

//Fonction ClearForm
function clearForm () {
   document.getElementById('first-name').value = '';
   document.getElementById ('last-name').value ='';
   document.getElementById('message').value = '';
};

//soumission du form
formulaire.addEventListener("submit", (event) => {
    event.preventDefault();
        
//On prend les valeurs
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const message = document.getElementById('message').value.trim(); 
    
//On vérifie si les champs sont vides
    if (!firstName || !lastName || !message ) {
//s'ils sont vides
    errorMessage.style.display = 'block';    
    console.log("un ou plusieurs champs ne sont pas correctement remplis");
    } else {
        const copie = newComment (
            newCommentH3,
            newCommentP,
        );
    
    commentList.appendChild(newComment);

    clearForm();
    errorMessage.style.display = 'none';
    console.log("tous les champs sont correctement remplis");
    }
});
    

    