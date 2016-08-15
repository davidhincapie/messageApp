var messageInput = document.getElementById("new-message"); //1
var addButton = document.getElementsByTagName("button")[0]; //2
var sentMessageHolder = document.getElementById("sent-message");//3

var createNewMessage = function(messageString) { //12
  var listItem = document.createElement("li"); //13
  var label = document.createElement("label");
  var deleteButton = document.createElement("button");
  
  deleteButton.innerText = "Delete";//18
  deleteButton.className = "delete";
 
  label.innerText = messageString; //19 
 
  listItem.appendChild(label);//16
  listItem.appendChild(deleteButton);
 
  return listItem; //14
}

//send message
var addMessage = function() { //4
  console.log("send a message.."); //9
  var listItem = createNewMessage(messageInput.value); //15
  sentMessageHolder.appendChild(listItem); //17
  messageInput.value = ""; //20
}

//delete an existing message
var deleteMessage = function() { //5
  console.log("delete a message.."); //11
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
}

var bindMessageEvents = function(taskMessage){ //8
   console.log("Bind message events");  
   var deleteButton = taskMessage.querySelector("button.delete");

  deleteButton.onclick = deleteMessage;//10  
}

addButton.onclick = addMessage; //6

for(var i = 0; i < sentMessageHolder.children.length; i++) { //7
  bindMessageEvents(sentMessageHolder.children[i]);
}

