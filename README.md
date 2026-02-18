# Light & Living: AI-Powered Semantic Search Engine

**Role:** Full-Stack Architect (Vibe Coder)  
**Timeline:** 48 Hours  
**Stack:** `React`, `TypeScript`, `Supabase`, `Google Gemini`, `n8n`

---

### 🚀 TL;DR
I built a **production-grade e-commerce catalog** for a premium lighting brand that transcends keyword matching.  
Users search by *vibe* (e.g., *"moody lighting for a reading nook"*), and the system leverages **vector embeddings** to understand intent and return relevant products instantly.  
Additionally, the sales pipeline is fully automated — generating branded PDF quotes via `n8n` webhooks in seconds.

---
<img width="1564" height="721" alt="page2" src="https://github.com/user-attachments/assets/2b97d939-4ee2-42da-b027-01d314f85ba9" />


### ⚡ The Challenge
The client had a dataset of **650+ premium products** but no searchable or performant solution.

**Problem A**  
Traditional SQL search failed on vague, intent-driven terms like *"cozy"* or *"modern"*.

**Problem B**  
The sales team spent **~20 minutes per quote** manually compiling PDFs for clients.

**Problem C**  
They required a *"Zero-Lag"* experience to showcase **5,000+ potential SKUs** without performance degradation.

---

### 🛠️ The Solution (The "Vibe Coding" Approach)
Instead of a multi-week build, I used **AI-assisted development** to deliver a scalable, production-ready system in **48 hours**.

#### 1. Vector Search Engine *(The Brain)*
- Integrated **Google Gemini Embedding API** with `Supabase` (`pgvector` extension).
- Every product description is converted into a **768-dimensional vector**.
- User queries are embedded in **real-time**.
- **Result:** Search understands *context*, not just keyword matches.
<img width="1580" height="792" alt="supa product" src="https://github.com/user-attachments/assets/96dc4e05-c38b-4a8b-91d9-33f4303b4020" />

#### 2. The "Infinite" UI *(The Face)*
Built with `React` + `Vite` + `Tailwind CSS`:
- Implemented **virtualization (windowing)** to render massive product lists at **60 fps**.
- Designed a **Glassmorphism** UI with **dark mode** for a premium, brand-aligned aesthetic.
<img width="415" height="583" alt="email quote" src="https://github.com/user-attachments/assets/a8d5fa4e-fc94-4bac-9352-4c5d1f00e98b" />

#### 3. Automated Sales Pipeline *(The Hands)*
- Connected the frontend to `n8n` via a **secure webhook**.
- **Trigger:** User clicks *"Share Quote"*.
- **Action:**  
  `n8n` fetches selected items → generates a **branded PDF** (with images, totals, and styling) → emails it to the client.
- **Result:** **100 % automated** sales follow-up — no manual steps.
<img width="1344" height="619" alt="Screenshot 2026-02-13 225408" src="https://github.com/user-attachments/assets/95f30c24-aca9-42c7-8162-f55aa25a8a7a" />

---

### 📊 The Results
| Metric       | Outcome                              |
|--------------|--------------------------------------|
| **Speed**    | Search results in **< 100 ms**       |
| **Scale**    | Architecture validated for **50,000+ items** |
| **Efficiency**| Quote generation time reduced from **20 mins → 3 seconds** |

---

> *I don’t just write code — I orchestrate intelligent systems. This project proves that with the right AI stack, enterprise-grade software can go from concept to production in days — not months.*
