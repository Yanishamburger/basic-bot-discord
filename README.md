# Discord Bot Project

A powerful, modular Discord bot built with [discord.js](https://discord.js.org/).

---

## 📂 Project Structure

```
src/
├── bot.js                # Main bot startup script
├── commands/             # Slash command modules
│   ├── fun/
│   └── utility/
├── events/               # Event handlers (e.g., ready, messageCreate)
│   ├── guild/
│   └── message/
├── interactions/         # Interaction handlers (buttons, select menus)
│   ├── buttons/
│   └── selects/
└── loaders/              # Loaders for commands, events, and interactions
config.js                 # Configuration file (token, prefix, etc.)
start.js                  # Error handlers and startup
```

---

## 🚀 Features

- ✅ Modular command system with category support
- ✅ Dynamic event and interaction loading
- ✅ Persistent interactions (buttons, selects)
- ✅ Clear error handling and logging
- ✅ Easy scalability and customization

---

## 🛠️ Setup Instructions

### 1️⃣ Prerequisites
- Node.js (v16.9.0 or higher recommended)
- Discord bot token from the [Discord Developer Portal](https://discord.com/developers/applications)

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/your-bot-repo.git
cd your-bot-repo
```

### 3️⃣ Install Dependencies
```bash
npm install
```

### 4️⃣ Configure the Bot
Edit `config.js` or use a `.env` file:
```js
module.exports = {
    TOKEN: 'YOUR_DISCORD_BOT_TOKEN',
    PREFIX: '/',
    COLOR: '#5865F2',
};
```
Or in `.env`:
```
TOKEN=YOUR_DISCORD_BOT_TOKEN
```

### 5️⃣ Start the Bot
```bash
node start.js
```

---

## 📚 Usage

- **Commands**: `/ping`, `/help`, etc.
- **Buttons & Selects**: Handled in `src/interactions/`
- **Events**: Auto-loaded from `src/events/`

---

## 📌 Notes

- Interactions remain functional after bot restarts.
- Logging system using `client.logger`.
- Easily extendable with new commands, events, and interactions.

---

## 🌟 Future Plans

- 📈 Database integration
- 🔒 Enhanced permission checks
- 🌍 Multi-language support

---

## 🤝 Contributions

Feel free to fork the repo and submit pull requests!

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

### 🎉 Happy Coding!
