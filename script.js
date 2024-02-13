function validateForm (){
    // On sélectionne les différents éléments
      const form = document.querySelector('#form');
      const firstName = document.getElementById('first-name').value.trim();
      const lastName = document.getElementById('last-name').value.trim();
      const message = document.getElementById('message').value.trim();
      const errorMessage = document.querySelector('#error-message');
    
      //On vérifie que les champs ne sont pas vides
      if (!firstName === '' || !lastName === '' || !message ==='') {
        //si c'est incorrect
        console.log('un ou plusieurs champs sont vides/incorrects');
        errorMessage.showError = 'block';
      } else {
        //si c'est correct
        console.log('tous les champs sont correctement remplis');
        errorMessage.showError = 'none';
        addComment();
        clearForm();
      }
    };
    
    //Fonction addComment
    function addComment () {
    
      //On sélectionne les éléments du DOM à cloner
        const commentList = document.querySelector('#comment-list');
    
        //plus précisément le message
        const commentElement = document.querySelector('#comment-list > div:nth-child(2)');
    
        //on va cloner cette div
        const cloneCommentElement = commentElement.cloneNode(true);
        
        //on précise les valeurs de cloneComment
        const commentName = cloneComment.querySelector('.font-medium, .text-gray-900');
        const commentText = cloneComment.querySelector('.prose, .prose-sm, .mt-4, .text-gray-500');
    
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        
        commentName.textContent = firstName + ' ' + lastName;
    
        const myMessage = document.getElementById('message').value;
    
        commentText.querySelector('p').textContent = myMessage;
    
        //on l'ajoute au DOM
        commentList.appendChild("commentElement");
    
      }
    
      //Fonction ClearForm
        function clearForm () {
          document.getElementById('first-name').value = '';
          document.getElementById ('last-name').value ='';
          document.getElementById('message').value = '';
        }
     
    