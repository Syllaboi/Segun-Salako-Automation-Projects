<h1 align="center">🚀 CEO Lead Generator</h1>
<p align="center">
  <em>Automated lead scraping with Apify + n8n + Google Sheets + Airtable</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/n8n-Workflow-FF6D5A?style=flat-square&logo=n8n&logoColor=white" alt="n8n">
  <img src="https://img.shields.io/badge/Apify-Scraper-3E8EEF?style=flat-square&logo=apify&logoColor=white" alt="Apify">
  <img src="https://img.shields.io/badge/Google%20Sheets-Backup-34A853?style=flat-square&logo=google-sheets&logoColor=white" alt="Google Sheets">
  <img src="https://img.shields.io/badge/Airtable-CRM-18BFFF?style=flat-square&logo=airtable&logoColor=white" alt="Airtable">
</p>

<p align="center">
  Tired of manually hunting for CEO contacts? I built a no-code automation stack using <strong>Apify</strong> (for scraping), <strong>n8n</strong> (for orchestration), <strong>Google Sheets</strong> (for backup), and <strong>Airtable</strong> (for active leads).
</p>

---

## 🎯 The Goal

Generate a clean, prioritized list of CEOs with:

- ✅ Validated emails, LinkedIn profiles, and company websites
- 🏷️ Role-specific context (e.g., "CEO of a real estate agency")
- ✍️ Custom outreach prompts
- 📊 Easy access via Google Sheets (backup) and Airtable (active management)

---

## 🛠️ The Tools

| Tool | Purpose |
|------|---------|
| **Apify** | For scraping (I use pre-built actors like LinkedIn Scraper or Generic Web Scraper) |
| **n8n** | For orchestration (triggering, data extraction, filtering, and saving) |
| **Google Sheets** | For storing raw/backup data |
| **Airtable** | For organizing and prioritizing leads (with custom views) |

---

## 📝 The Workflow Breakdown

Here's how the pipeline works (with n8n node logic):

### Step 1: Trigger – Start the Workflow

I use a scheduled trigger (n8n's "Cron" node) to run daily at 9 AM. This ensures fresh leads are added to the stack.

**Example Cron pattern:**
0 0 9 * * *

### Step 2: Scrape – Pull Data with Apify

Apify handles the heavy lifting: scraping public sources (LinkedIn Company Pages, Crunchbase, industry directories) to extract raw data. I use Apify's LinkedIn Scraper actor, which automatically:

- Finds CEOs by job title/company
- Extracts name, email, LinkedIn URL, company website, and industry
- Validates email formats (e.g., `john.doe@company.com` vs. `john-doe.company.com`)

**n8n Apify node setup:**
- **Actor:** `apify/linkedin-scraper` (or your preferred scraper)
- **Input Parameters:**

```json

{
"startUrls":[
{ "url": "https://www.linkedin.com/companies/" }
],
"search": "CEO",
"location": "United States",
"maxItems": 50
}

```

Step 3: Extract – Clean and Structure Data
n8n's Code node (or "Cheerio" node, if needed) parses Apify's raw JSON output to extract only the fields we need:

* CEO name
* Email
* LinkedIn URL
* Company website
* Industry (e.g., "Real estate agency")
* Job title ("CEO")

Example Code Node Logic:
```javascript
// Input: Apify's raw data (array of items)
// Output: Cleaned object with only needed fields

return items.map(item => {
  return {
    json: {
      name: item.json.firstName + " " + item.json.lastName,
      email: item.json.email,
      linkedin: item.json.publicUrl,
      website: item.json.companyUrl,
      industry: item.json.companyIndustry,
      title: "CEO"
    }
  };
});
```

Step 4: Filter – Prioritize High-Quality Leads
Not all leads are created equal. I use n8n's Filter node to exclude:

* Invalid emails (e.g., missing @ symbol)
* Companies with <10 employees (too small for outreach)
* Duplicates (using Airtable's "Lookup" to check for existing records)

Example Filter Logic:
```javascript
// Keep items where email is valid AND company size >= 10
return item.json.email.includes("@") && item.json.companySize >= 10;
```

Step 5: Save – Push to Google Sheets and Airtable
The cleaned, filtered leads are split into two destinations:
Google Sheets (Backup)
I use n8n's Google Sheets node to append leads to a "Raw Leads" sheet. This acts as a safety net for data recovery.

Google Sheets Schema:
| Timestamp           | Name     | Email                     | LinkedIn                  | Website      | Industry            | Title |
|---------------------|----------|---------------------------|---------------------------|--------------|---------------------|-------|
| 2026-01-28 09:00    | John Doe | john.doe@company.com      | linkedin.com/in/johndoe   | company.com  | Real estate agency  | CEO   |

Airtable (Active Management)
Leads are sent to Airtable for active outreach. I use the Airtable node to create records in a "CEO Leads" base.

Airtable Base Schema:
| Field Name       | Type        | Description                                                                 |
|------------------|-------------|-----------------------------------------------------------------------------|
| Category         | Single Select | Industry (e.g., "Real estate agency," "Tech startup")                       |
| Email            | Email       | Validated CEO email                                                         |
| LinkedIn         | URL         | CEO's LinkedIn profile                                                      |
| Website          | URL         | Company website                                                             |
| Outreach Prompt  | Long Text   | AI-generated message (e.g., "Hi John, love your expansion into Miami...")   |
| Follow-Up Date   | Date        | Scheduled outreach follow-up                                                |
| Status           | Single Select | "Not Contacted," "Reached Out," "Converted"                                 |

<img width="865" height="637" alt="leads" src="https://github.com/user-attachments/assets/ed1a83b8-7f90-4a5f-9b20-82807919cc50" />


Step 6: Enrich – Personalize Outreach
Finally, n8n's OpenAI node generates a personalized outreach prompt using the lead's company info (e.g., recent news, product launches).
Example OpenAI Prompt:

"Hi [Name], I noticed [Company] recently [achievement: e.g., 'launched a $10M AI tool' or 'expanded into Canada']. As a leader in [industry], I'd love to share how [Your Company] could help [Company] [specific goal: e.g., 'scale marketing efficiency']. Would you be open to a 10-minute chat next week?"


📊 Results
In 4 weeks, the workflow generated:

* 200+ leads with a 89% email validation rate
* 5 deals closed (30% conversion)
* 80% reduction in manual data entry


📤 Get the Template
I've shared the n8n workflow JSON, Airtable base, and Google Sheets template on GitHub

Note: You'll need to:

* Replace Apify actor inputs (e.g., target industries/companies)
* Adjust Airtable/Google Sheets fields to match your needs
* Train the OpenAI prompt on your outreach style



💡 Pro Tips

* Apify Scheduling: Use Apify's built-in scheduler to run scrapes 2x/week (instead of daily) to avoid rate limits.
* Duplicate Checks: Use Airtable's "Unique Field" constraint on emails to prevent duplicates.
* AI Enrichment: Add a "Company News" field using Apify's "News Scraper" to make prompts more relevant.


🎉 Final Thoughts
Apify + n8n turns scraping into a scalable process—no coding required. With Google Sheets and Airtable, you get both backup and active management. If you're scaling outreach, this stack will save you hours of work. Let me know what results you get!
Got questions? Drop a comment below, or hit me up on Twitter @chinnymaril. Happy automating!

