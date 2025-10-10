# 🚀 Self-Hosted n8n Automation Server (Docker + PostgreSQL + Caddy)

![n8n](https://n8n.io/static/media/n8n-logo.7e06bfa6.svg)

## 🌟 Overview
This project documents my journey setting up a **fully self-hosted n8n instance** — an open-source automation platform — from scratch, using **Docker Compose**, **PostgreSQL**, and **Caddy** for SSL and reverse proxy management.

The goal was to create a **secure, always-on, and scalable automation environment** to power advanced workflows integrating APIs, Google Cloud, Notion, Airtable, and other tools I use daily.

---

## 🧩 Tech Stack

| Component | Purpose |
|------------|----------|
| **n8n (latest)** | Workflow automation platform |
| **PostgreSQL** | Persistent data storage for workflows, credentials, and executions |
| **Caddy** | HTTPS reverse proxy with automatic SSL |
| **Docker Compose** | Simplified container orchestration |
| **Hostname (Your Domain)** | Dynamic domain for remote access |
| **Ubuntu VM (Google Cloud)** | Self-hosted environment |

---

## ⚙️ Project Setup Highlights

### 🔸 1. Dockerized Infrastructure
All services are defined in a single `docker-compose.yml` file for easy deployment:


```yaml
services:
  n8n:
    image: n8nio/n8n:latest
    ports:
      - "5678:5678"
    environment:
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=n8n-postgres
      - DB_POSTGRESDB_PORT=5432
      - DB_POSTGRESDB_USER=postgres
      - DB_POSTGRESDB_PASSWORD=${POSTGRES_PASSWORD}
      - DB_POSTGRESDB_DATABASE=n8n
      - N8N_ENCRYPTION_KEY=${N8N_ENCRYPTION_KEY}
      - WEBHOOK_URL=https://yourdomain.com/
    volumes:
      - ./.n8n:/home/node/.n8n
    depends_on:
      - n8n-postgres

  n8n-postgres:
    image: postgres:15
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
      - POSTGRES_DB=n8n
    volumes:
      - n8n-db-data:/var/lib/postgresql/data

volumes:
  n8n-db-data:
````

---

## 🧱 Detailed Setup Process

Here’s a complete walkthrough of how I built and configured the system from scratch.

### 🪜 Step 1 — Provision the Server

* Created a **Google Cloud Ubuntu VM instance**
* Set static external IP
* Updated system packages:

  ```bash
  sudo apt update && sudo apt upgrade -y
  ```

---

### 🪜 Step 2 — Install Docker & Docker Compose

```bash
sudo apt install -y docker.io docker-compose
sudo systemctl enable docker
sudo usermod -aG docker $USER
```

Then logged out and back in to apply Docker permissions.

---

### 🪜 Step 3 — Setup Project Directory

```bash
mkdir ~/n8n-stack && cd ~/n8n-stack
touch docker-compose.yml
```

Added the configuration shown above, defining both `n8n` and `postgres` containers.

---

### 🪜 Step 4 — Create Environment Variables

Created a `.env` file for sensitive credentials:

```bash
POSTGRES_PASSWORD=your_secure_password
N8N_ENCRYPTION_KEY=ARxJicO***examplet2cCkEjxe6
```

---

### 🪜 Step 5 — Run n8n and PostgreSQL

Started containers:

```bash
docker compose up -d
```

Then verified:

```bash
docker ps
```

✅ n8n available at **[http://localhost:5678](http://localhost:5678)**

---

### 🪜 Step 6 — Configure Caddy for HTTPS + Domain Access

Caddy automatically manages SSL certificates and proxies requests to the n8n container.

**Caddyfile:**

```caddyfile
yourdomain.com {
    reverse_proxy 127.0.0.1:5678
}
```

Restarted Caddy:

```bash
docker restart caddy
```

✅ n8n now accessible at:
**[https://yourdomain.com](https://yourdomain.com)**

---

### 🪜 Step 7 — Migrate to PostgreSQL (for Workflow & Credential Persistence)

* Exported existing SQLite data (if any)
* Set PostgreSQL as the default backend
* Verified successful migration via:

  ```bash
  docker exec -it n8n-postgres psql -U postgres -d n8n -c "\dt"
  ```

✅ All workflows, executions, and credentials now persist in PostgreSQL.

---

### 🪜 Step 8 — Enable Backups (Zero-Data-Loss Strategy)

Added a backup script:

```bash
#!/bin/bash
docker exec -t n8n-postgres pg_dump -U postgres n8n > ~/backups/n8n_backup_$(date +%F).sql
```

And scheduled it with `crontab -e`:

```
0 2 * * * /home/sgnzoe_life/backups/n8n_backup.sh
```

---

### 🪜 Step 9 — Testing & Validation

* Verified SSL via browser (Caddy auto-renew works ✅)
* Tested webhooks, credentials, and workflows
* Imported automation templates for Google Sheets, Airtable, and Gemini integrations

---

## 🧠 Key Lessons Learned

* ✅ How to deploy and manage multi-container services using **Docker Compose**
* 🔐 How to preserve n8n credentials via **PostgreSQL backend**
* 🌐 How to configure **Caddy** for automatic HTTPS and reverse proxying
* 🔄 How to safely **update and back up** n8n without data loss
* ⚙️ How to use **environment variables** for secure automation management

---

## 🧰 Future Plans

* Add **n8n webhook monitoring dashboard**
* Automate **daily PostgreSQL backups** with cron
* Integrate **Postiz** for automatic content scheduling
* Build **public workflow templates** for clients

---

## 👨🏽‍💻 Author

**Oluwasegun Salako**
AI & No-Code Automation Specialist
📍 Abuja, Nigeria
🔗 [LinkedIn](https://www.linkedin.com/in/segunexploresdata/) | [Email](mailto:sgnzoe.life@gmail.com)

---

### 💡 If you found this useful

Give this repo a ⭐ and feel free to fork or connect!

---

> “Automation is the bridge between ideas and execution. Building systems that run themselves is the true definition of freedom.”
> — *Oluwasegun Salako*

```

