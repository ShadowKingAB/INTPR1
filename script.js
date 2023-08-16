const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();

    if (message !== '') {
        const userMessageElement = createMessageElement('user', message);
        chatMessages.appendChild(userMessageElement);

        setTimeout(() => {
            const systemMessageElement = createMessageElement('system', 'No participants to reply you');
            chatMessages.appendChild(systemMessageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);

        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});

function createMessageElement(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.textContent = text;

    messageElement.appendChild(messageContent);
    return messageElement;
}

