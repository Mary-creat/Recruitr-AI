// Load environment variables from .env file
require('dotenv').config();

// Import and start the voice agent
const { runVoiceAgent } = require('./src/voiceAgent');

runVoiceAgent(); // 🧠 This tells the AI voice agent to start working
const say = require('say');

// Recruitr.AI Voice Agent
function callRecruiter(name, message) {
  console.log(`📞 Calling recruiter: ${name}...`);

  // Speak the message using system voice
  say.speak(`Hello ${name}, ${message}`, 'Alex', 1.0, (err) => {
    if (err) {
      return console.error('❌ Error using voice:', err);
    }
    console.log('✅ Message delivered!');
  });
}

// Example usage
const recruiterName = 'Sarah';
const aiMessage = 'This is Recruitr.AI calling to introduce an amazing DevOps and OT professional available for contracts. Let me send more info.';

callRecruiter(recruiterName, aiMessage);

