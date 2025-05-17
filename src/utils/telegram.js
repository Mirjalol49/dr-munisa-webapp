/**
 * Utility functions for sending messages to Telegram
 */

/**
 * Sends a message to a Telegram chat via a bot
 * @param {string} botToken - The Telegram bot token
 * @param {string} chatId - The Telegram chat ID to send the message to
 * @param {string} message - The message to send
 * @returns {Promise} - A promise that resolves with the response from the Telegram API
 */
export const sendTelegramMessage = async (botToken, chatId, message) => {
  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    const data = await response.json();
    
    if (!data.ok) {
      throw new Error(`Telegram API error: ${data.description}`);
    }
    
    return data;
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    throw error;
  }
};

/**
 * Formats user form data into a readable message for Telegram
 * @param {Object} formData - The form data object
 * @returns {string} - Formatted message
 */
export const formatTelegramMessage = (formData) => {
  return `
<b>🔔 Yangi konsultatsiya so'rovi!</b>

<b>Ism:</b> ${formData.name}
<b>Telefon:</b> ${formData.phoneNumber}
<b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ')}
`;
};
