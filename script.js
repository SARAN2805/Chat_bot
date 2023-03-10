const form = document.getElementById('chatbot-form');
const input = document.getElementById('chatbot-input');
const body = document.getElementById('chatbot-body');
const select = document.getElementById('chatbot-select');
const options = ["Item Mismatched","Product defect"]

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userMessage = input.value;
  input.value = '';
  addMessage(userMessage, 'user');
  getBotResponse(userMessage);
});

function addMessage(message, messageType) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message');
  messageElement.classList.add(messageType + '-message');
  messageElement.innerHTML = '<p>' + message + '</p>';
  body.appendChild(messageElement);
  body.scrollTop = body.scrollHeight;
}

function getBotResponse(userMessage) {
  let botMessage;
  if (userMessage.includes('hello')) {
    botMessage = 'How can I help you';
  } 
  else if (userMessage.includes('return a product')) {
    botMessage= 'Enter product id ';
  }
  else if(userMessage.includes('12345')){
    botMessage = "Item Mismatched or product defect";
  }
  else if(userMessage.includes("Item Mismatched")){
    botMessage = 'Are you sure to return or exchange'
  }
  else if(userMessage.includes("product defect")){
    botMessage = 'Are you sure to return '
  }
  else if (userMessage.includes('yes')) {
    botMessage = 'Return request recieved Successfully';
  }
  else if(userMessage.includes('no')){
    botMessage = 'Return request canceled';
  }
  addMessage(botMessage, 'bot');
}