$(document).ready(function() {
  const serverIcons = $('.server-icon');
  const chatHeader = $('.chat-header');
  const messageInput = $('.message-input');
  const chat = $('.chat');
  const sidebar = $('.sidebar');

  function updateChannels(serverIndex) {
      // Clear the existing channels
      $('.channel').remove();

      let newChannels;

      if (serverIndex === 0) {
          newChannels = [
              { name: 'general', displayName: '# general' },
              { name: 'random', displayName: '# random' },
              { name: 'off-topic', displayName: '# off-topic' },
          ];
      } else if (serverIndex === 1) {
          newChannels = [
              { name: 'twitter', displayName: 'Twitter' },
              { name: 'linkedin', displayName: 'LinkedIn' },
              { name: 'github', displayName: 'GitHub' },
          ];
      } else if (serverIndex === 2) {
          newChannels = [
              { name: 'example1', displayName: 'Example 1' },
              { name: 'example2', displayName: 'Example 2' },
              { name: 'example3', displayName: 'Example 3' },
          ];
      }

      newChannels.forEach(channel => {
          const newChannel = $('<div></div>')
              .addClass('channel')
              .text(channel.displayName)
              .data('channelName', channel.name)
              .on('click', function() {
                  $('.channel').removeClass('selected');
                  $(this).addClass('selected');
                  chatHeader.text($(this).text());
              });
          sidebar.append(newChannel);
      });
  }

  serverIcons.on('click', function() {
      serverIcons.removeClass('selected');
      $(this).addClass('selected');

      const serverIndex = serverIcons.index(this);
      updateChannels(serverIndex);
  });

  messageInput.on('keydown', function(event) {
      if (event.key === 'Enter') {
          event.preventDefault();
          const messageText = $(this).val().trim();

          if (messageText) {
              const newMessage = $('<div></div>')
                  .addClass('message')
                  .html(`<span class="username">You:</span> ${messageText}`);
              chat.append(newMessage);
              chat.scrollTop(chat.prop('scrollHeight'));
              $(this).val('');
          }
      }
  });

  // Initialize channels for the first server
  updateChannels(0);
});
