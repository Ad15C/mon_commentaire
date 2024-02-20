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

//Function myFunction
function myFunction () {
    document.getElementById('form').reset();
};

//soumission du form
formulaire.addEventListener("submit", (event) => {
    event.preventDefault();
    
//On prend les valeurs
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const message = document.getElementById('message').value.trim(); 
    
//On vérifie si les champs sont vides
    if (!firstName|| !lastName|| !message ) {
    errorMessage.style.display = 'block';
    } else {
    errorMessage.style.display = 'none';
    newCommentH3.textContent = `${firstName} ${lastName}`;
    newCommentP.textContent = message;
    
// ajout le clone dans le dom
    commentList.appendChild(newComment);

//On réinitialise le formulaire   
    myFunction(); 
    }
});
