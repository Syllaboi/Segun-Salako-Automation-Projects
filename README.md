#Run n8n Locally on Android Using UserLAnd

This guide shows you how to install and run [n8n](https://n8n.io) ” a powerful workflow automation tool ” directly on your Android phone using the UserLAnd app and Ubuntu. No PC or emulator required.

---

##Requirements

- Android device (64-bit ARM“ most modern phones)
- [UserLAnd app](https://play.google.com/store/apps/details?id=tech.ula)
- At least 2GB of free storage
- Stable internet connection

---

1¸ Step-by-Step Installation

### 1. Install Ubuntu via UserLAnd

1. Open the **UserLAnd** app
2. Create a session:
   - Distribution: `Ubuntu`
   - Username: `userland`
   - Choose password (used for `sudo`)
3. Start session â†’ terminal window opens

---

### 2. Install System Dependencies

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git make gcc g++ python3 build-essential unzip
```

---

###  3. Install Node.js via NVM

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Activate NVM:

```bash
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"
```

---

### 4. Install Latest LTS Node.js + npm

```bash
nvm install --lts
nvm use --lts
```

Confirm versions:

```bash
node -v
npm -v
```

---

### 5. Install n8n

```bash
npm install -g n8n
```

Ignore warnings like `deprecated`, they're safe.

---

### 6. Run n8n

```bash
n8n
```

You'll see:

```
n8n ready on 0.0.0.0, port 5678
Editor is now accessible via:
http://localhost:5678/
```

---

### 7. Open n8n in Browser

1. Open Chrome or Firefox on Android
2. Visit: `http://localhost:5678`
3. Register a local account
4. Start building workflows!

---

## Optional Configs

### Enable Basic Auth

```bash
export N8N_BASIC_AUTH_ACTIVE=true
export N8N_BASIC_AUTH_USER=admin
export N8N_BASIC_AUTH_PASSWORD=yourpassword
n8n
```

### Auto-load nvm on startup

Add this to `~/.bashrc`:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

Then:

```bash
source ~/.bashrc
```

---

## Restarting Later

```bash
nvm use --lts
n8n
```

Then go to `http://localhost:5678`.

---

## âœ… Summary

| Task | Status |
|------|--------|
| Ubuntu (UserLAnd) | … Installed |
| Node.js + npm | … Working |
| n8n | … Installed |
| Access via browser | http://localhost:5678 |

---

## Author

Created by [Oluwasegun Salako](https://github.com/segunexploresdata)  
Connect on [LinkedIn](https://linkedin.com/in/segunexploresdata)
