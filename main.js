document.getElementById('submit').addEventListener('click', function () {
  var userInputName = document.getElementById('name').value;
  var userInputMessage = document.getElementById('message').value;


  var newPostDiv = document.createElement('div');

  var newMessageP = document.createElement('p');
  var newMessageText = document.createTextNode(userInputMessage)
  newMessageP.appendChild(newMessageText);

  var newNameP = document.createElement('p');
  var newNameText = document.createTextNode(`Posted By ` + userInputName);
  newNameP.appendChild(newNameText);

  var newHr = document.createElement('hr');

  newPostDiv.append(newMessageP);
  newPostDiv.append(newNameP);
  newPostDiv.append(newHr);

  document.getElementsByClassName('posts')[0].append(newPostDiv);
});

