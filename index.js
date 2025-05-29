// Load environment variables from .env file
require('dotenv').config();

// Start the bot logic by executing bot.js
require('./src/bot.js');

// Handle unhandled promise rejections globally
process.on('unhandledRejection', (error) => {
    console.error('🚨 Unhandled Rejection/Catch:', error);
});

// Handle uncaught exceptions globally (synchronous errors not caught by try/catch)
process.on('uncaughtException', (error) => {
    console.error('🚨 Uncaught Exception/Catch:', error);
});

// Handle uncaught exceptions at the monitor level (runs before 'uncaughtException')
process.on('uncaughtExceptionMonitor', (error) => {
    console.error('🚨 Uncaught Exception/Catch (MONITOR):', error);
});
