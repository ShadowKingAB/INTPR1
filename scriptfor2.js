        const user1Chat = document.getElementById('user1Chat');
        const user1Message = document.getElementById('user1Message');
        const user1Send = document.getElementById('user1Send');

        const user2Chat = document.getElementById('user2Chat');
        const user2Message = document.getElementById('user2Message');
        const user2Send = document.getElementById('user2Send');

        const peers = {};

        user1Send.addEventListener('click', () => sendMessage(user1Message, user1Chat, 2));
        user2Send.addEventListener('click', () => sendMessage(user2Message, user2Chat, 1));


        function sendMessage(messageInput, chatWindow, targetUser) {
            const message = messageInput.value;
            if (message.trim() === '') return;

            chatWindow.value += `You: ${message}\n`;
            messageInput.value = '';

            const targetChatWindow = document.getElementById(`user${targetUser}Chat`);
            targetChatWindow.value += `friend: ${message}\n`;
        }
 