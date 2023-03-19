document.addEventListener('DOMContentLoaded', () => {
  const channels = document.querySelectorAll('.channel');
  const chatHeader = document.querySelector('.chat-header');
  const messageInput = document.querySelector('.message-input');
  const chat = document.querySelector('.chat');

  channels.forEach(channel => {
    channel.addEventListener('click', () => {
      // Remove 'selected' class from other channels
      channels.forEach(ch => ch.classList.remove('selected'));

      // Add 'selected' class to the clicked channel
      channel.classList.add('selected');

      // Update chat header with the selected channel name
      chatHeader.textContent = channel.textContent;
    });
  });

  messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const messageText = event.target.value.trim();

      if (messageText) {
        // Create a new message element
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.innerHTML = `<span class="username">You:</span> ${messageText}`;

        // Append the new message to the chat
        chat.appendChild(newMessage);

        // Scroll the chat to the bottom
        chat.scrollTop = chat.scrollHeight;

        // Clear the input
        event.target.value = '';
      }
    }
  });
});
