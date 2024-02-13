//On prend les éléments du DOM
    const errorMessage = document.querySelector("#error-message");
    const formulaire = document.querySelector("form");
//Plus particulièrement les div de commentaires
    const commentList = document.querySelector("#comment-list");
    const sampleComment = document.querySelector("#comment-list > div:nth-child(2)");

//On va effectuer un clone
    sampleComment = (firstname, lastname, message) => {
    const sampleComment = comment.cloneNode(true);
    const h3 = commentClone.querySelector(".font-medium, .text-gray-900");
    h3.textContent = `${firstname} ${lastname}`;
    const p = commentClone.querySelector(".prose, .prose-sm, .mt-4, .max-w-none, .text-gray-500");
    p.textContent = message;
    return sampleComment;
};

//Fonction ClearForm
function clearForm () {
   document.getElementById('first-name').value = '';
   document.getElementById ('last-name').value ='';
   document.getElementById('message').value = '';
}

//soumission du form
form.addEventListener("submit", (event) => {
    event.preventDefault();
//On prend les valeurs
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const message = document.getElementById('message').value; 
//On vérifie si les champs sont vides
    if (firstName === '' || lastName === '' || message === '') {
//s'ils sont vides
    console.log("un ou plusieurs champs ne sont pas correctement remplis");
    errorMessage.style.display = 'block';
    } else {
//Si les champs sont remplis
    console.log("tous les champs sont correctement remplis");
    errorMessage.style.display = 'none';
// ajout le clone dans le dom
    commentList.appendChild(sampleComment);
    clearForm();
    }
});
    

    