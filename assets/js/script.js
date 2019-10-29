function password(){
  //Variables qui permet de répurérer l'ID et la valeur
  let firstPassword = document.getElementById('password').value;
  let lastPassword = document.getElementById('confirmPassword').value;
  /*Condition "si" pour dire que si les mots de passe sont différents
  afficher les bordure en rouge*/
  if(lastPassword != firstPassword){
    document.getElementById('password').style.border = 'solid red'}
    /*Condition "sinon" pour dire que si les mots de passe sont identique
    afficher les bordure en vert*/
    else {
      document.getElementById('confirmPassword').style.border = 'solid green';
    }
  }
  // Appel de la fonction lors du clique
  document.querySelector('button').onclick = password;
