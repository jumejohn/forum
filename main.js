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

  var newUpBtn = document.createElement('button');
  newUpBtn.setAttribute('class', "btn btn-primary");
  var upBtnText = document.createTextNode('Upvote');
  newUpBtn.appendChild(upBtnText);
  
  var newDownBtn = document.createElement('button');
  newDownBtn.setAttribute('class', "btn btn-primary");
  var downBtnText = document.createTextNode('Downvote');
  newDownBtn.appendChild(downBtnText);
  
  var newHr = document.createElement('hr');

  newPostDiv.append(newMessageP);
  newPostDiv.append(newNameP);
  newPostDiv.append(newUpBtn);
  newPostDiv.append(newDownBtn);
  newPostDiv.append(newHr);

  document.getElementsByClassName('posts')[0].append(newPostDiv);
});

