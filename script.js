//Validation du formulaire
function validateForm () {
//On prend les valeurs des éléments
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const message = document.getElementById('message').value;
    const errorMessage = document.getElementById('error-message');
//On vérifie si les champs sont vides
    if (firstName === '' || lastName === '' || message === '') {
//s'ils sont vides
      errorMessage.style.display = 'block';
    } else {
//Si les champs sont remplis
      errorMessage.style.display = 'none';
      addComment();
      clearForm();
    }
}
    
//Fonction addComment
function addComment () {
//On sélectionne les éléments du DOM à cloner
    const commentList = document.querySelector('#comment-list');
    const cloneComment = document.querySelector('#comment-list .flex-1.py-10').cloneNode(true);
//On prend les valeurs
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const message = document.getElementById('message').value;

    const commentName = cloneComment.querySelector('.font-bold.text-gray-900');
    const commentText = cloneComment.querySelector('.prose.prose-sm');
//Détails du contenu des éléments
    commentName.textContent = firstName + ' ' + lastName;
    commentText.querySelector('p').textContent = message;
//On l'ajoute au DOM
    commentList.appendChild(cloneComment);
}
    
//Fonction ClearForm
function clearForm () {
    document.getElementById('first-name').value = '';
    document.getElementById ('last-name').value ='';
   document.getElementById('message').value = '';
}
    