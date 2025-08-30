// IMPORTANT: Create your own API keys!
// 1. Get Gemini API key: https://makersuite.google.com/app/apikey
// 2. Never commit API keys to GitHub

// Option 1: Use environment variable (for local development)
// Set GEMINI_KEY in your environment

// Option 2: Use prompt (for production)
// Users will enter their own key when using the app

// Option 3: Use a backend server
// Store keys securely on server, proxy API calls

const CONFIG = {
    // Replace with your own key or use prompt
    GEMINI_KEY: 'YOUR_API_KEY_HERE',
    
    // eBay credentials (if needed)
    EBAY_APP_ID: 'YOUR_EBAY_APP_ID',
    
    // Google credentials (if needed)
    GOOGLE_CLIENT_ID: 'YOUR_GOOGLE_CLIENT_ID'
};

// DO NOT commit this file with real keys!