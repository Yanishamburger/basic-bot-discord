const { readdirSync } = require('fs');

// Export a function that takes 'client' (the Discord bot instance) as an argument
module.exports = (client) => {
    let count = 0; // Counter to track how many events are loaded

    // Read all directories inside the './src/events/' folder
    const dirsEvents = readdirSync('./src/events/');

    // Loop through each directory (e.g., 'guild', 'message', etc.)
    for (const dirs of dirsEvents) {
        // Read all JavaScript files in the current directory
        const filesDirs = readdirSync(`./src/events/${dirs}/`).filter((f) => f.endsWith('.js'));

        // Loop through each event file
        for (const files of filesDirs) {
            // Dynamically import the event module
            const event = require(`../events/${dirs}/${files}`);

            // Check if a listener for this event is already registered
            if (client.listenerCount(event.name) > 0) {
                client.logger.warn(`[Events] Listener already exists for: ${event.name}`);
                continue; // Skip to the next event if a listener exists
            };

            // Register the event:
            // If the event module has 'once: true', listen only once
            if (event.once) {
                client.once(event.name, (...args) => event.run(client, ...args));
            }
            // Otherwise, listen every time the event is emitted
            else {
                client.on(event.name, (...args) => event.run(client, ...args));
            };

            // Increment the count of successfully loaded events
            count++;
        };
    };

    // Log the total number of loaded events
    console.log(`[Events] => ${count} loaded events`);
};