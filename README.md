# Basic Discord Bot

A modular and scalable Discord bot built with [discord.js](https://discord.js.org/), featuring dynamic command, event, and interaction loading.

---

## 📂 Project Structure

```
src/
├── bot.js                # Main bot startup logic
├── commands/             # Slash command modules
│   └── information/
│       └── ping.js
├── events/               # Event handlers
│   └── exemple/
│       └── ready.js
│       └── interactionCreate.js
├── interactions/         # Interaction handlers
│   ├── button/
│   │   └── exemple-boutons.js
│   └── menus/
│       └── exemple-menus.js
├── loaders/              # Loaders for commands, events, and interactions
│   ├── loadCommands.js
│   ├── loadEvents.js
│   └── loadInteractions.js
index.js                  # Entry point
```
Additional files:
- `.env` – Stores sensitive information (e.g., TOKEN)
- `config.js` – Optional static configuration (empty or minimal)
- `start.bat` – Batch file to start the bot
- `README.md` – Project documentation

---

## 🚀 Features

- ✅ Modular slash command system
- ✅ Dynamic event loading
- ✅ Persistent interactions (buttons, menus)
- ✅ Clean project structure
- ✅ Environment variable support via `.env`

---

## 🛠️ Setup Instructions

### 1️⃣ Prerequisites
- Node.js (v16.9.0 or higher recommended)
- Discord bot token from the [Discord Developer Portal](https://discord.com/developers/applications)

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/Yanishamburger/basic-discord-bot.git
cd .\basic-bot-discord\
```

### 3️⃣ Install Dependencies
```bash
npm install
```

### 4️⃣ Configure the Bot
Create a `.env` file in the root directory with the following content:
```
TOKEN=YOUR_DISCORD_BOT_TOKEN
```

### 5️⃣ Start the Bot
```bash
node .
```
Or use the `start.bat` script (Windows only):
```
start.bat
```

---

## 📚 Usage

- **Commands**: Slash commands like `/ping` in `src/commands/information/ping.js`
- **Events**: Handlers like `ready` in `src/events/exemple/ready.js`
- **Interactions**: Buttons and select menus in `src/interactions/`

---

## 📌 Notes

- Commands, events, and interactions are auto-loaded from their respective directories.
- Use `.env` to manage sensitive information securely (like your bot token).
- Extendable structure for adding more commands, events, and interactions.

---

## 🤝 Contributions

Feel free to fork the project and submit pull requests.

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

### 🎉 Happy Coding !
