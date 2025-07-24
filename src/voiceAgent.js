const say = require('say');

// --- Voice AI Call Simulation ---
function callRecruiter(name, message) {
  console.log(`📞 Calling recruiter: ${name}...`);
  
  say.speak(`Hello ${name}, ${message}`, 'Alex', 1.0, (err) => {
    if (err) {
      return console.error('❌ Voice error:', err);
    }
    console.log('✅ Message delivered!');
  });
}

// Example use
const recruiterName = 'Sarah';
const aiMessage = 'This is Recruitr AI calling to introduce a top DevOps engineer for hire. I will send their profile now.';

callRecruiter(recruiterName, aiMessage);
