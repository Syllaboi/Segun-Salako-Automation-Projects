
<h1>From n8n Struggles to Google Apps Script Success: Building a Remote Job Alert System</h1>

*Published: June 21, 2025 | Author: Oluwasegun Salako*

This project chronicles my journey to create an automated remote job alert system. What started as a simple idea turned into a rewarding challenge, teaching me resilience, scripting skills, and the power of tailored solutions.

## The Initial Plan: n8n and a Simple Workflow

I aimed to fetch remote job postings hourly from the Remotive API, filter them by keywords like "automation" and "n8n," and send alerts to Telegram while logging details in a Google Sheet. I began with n8n, setting up an HTTP Request node, a Code node for filtering, and output nodes. However, issues arose: only one of 1,573 jobs processed, despite tweaking filters and connections. Hours of retries revealed n8n's complexity for this task.
![image](https://github.com/user-attachments/assets/649993b1-de06-42cc-986e-a71c447776c4)


## Pivoting to Google Apps Script: A Fresh Start

Frustrated, I turned to Google Apps Script, creating a "Job Alerts" Google Sheet and writing a custom script. Early hurdles included URL length errors and HTML tags in descriptions, but I learned to limit message lengths, strip tags, and handle authorizations. This shift gave me control and introduced me to JavaScript.

## Building the Solution

The final script fetches Remotive jobs, filters by keywords, sends Telegram alerts, and updates the Sheet with new postings. It runs hourly via a trigger. Here's the working code:

```javascript
function removeHtmlTags(text) {
  return text ? text.replace(/<[^>]*>/g, '').trim() : "";
}

function checkJobs() {
  var remotiveUrl = "https://remotive.com/api/remote-jobs";
  
  var response = UrlFetchApp.fetch(remotiveUrl);
  var remotiveData = JSON.parse(response.getContentText());
  var remotiveJobs = remotiveData.jobs;

  var keywords = ["automation", "data entry", "zapier", "workflow", "airtable", "notion", "n8n", "workflow automation"];
  var botToken = "8******vMSiHAx*****"; // Replace with your Telegram bot token
  var chatId = "644471057"; // Replace with your Telegram chat ID

  var sheet = SpreadsheetApp.getActiveSheet();
  var lastRow = sheet.getLastRow();
  var existingLinks = sheet.getRange("C2:C" + lastRow).getValues().flat();

  remotiveJobs.forEach(function(job) {
    var title = job.title ? job.title.toLowerCase() : "";
    var matches = keywords.some(keyword => title.includes(keyword.toLowerCase()));
    var link = job.url;

    if (matches && !existingLinks.includes(link)) {
      var maxLength = 1000;
      var description = job.description ? removeHtmlTags(job.description).substring(0, maxLength) : "No description";
      var message = `🎉 New Job Alert!\n` +
                    `Title: ${job.title}\n` +
                    `Company: ${job.company_name || "N/A"}\n` +
                    `Link: ${link}\n` +
                    `Description: ${description}\n` +
                    `Date: ${job.publication_date || "N/A"}\n` +
                    `Location: ${job.candidate_required_location || "Remote"}\n`;

      var telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
      UrlFetchApp.fetch(telegramUrl);

      sheet.appendRow([
        job.title,
        job.company_name || "N/A",
        link,
        removeHtmlTags(job.description),
        job.publication_date || "N/A",
        job.candidate_required_location || "Remote"
      ]);
    }
  });
}
```

- **Setup**: Create a Google Sheet named "Job Alerts" with headers: Job Title, Company, Link, Description, Publication Date, Preferred Location. Add the script via Extensions > Apps Script, save, and set an hourly trigger.
- **Credentials**: Replace `botToken` and `chatId` with your Telegram bot token (from BotFather) and chat ID.
![automation sheet](https://github.com/user-attachments/assets/f050d707-0fca-41c3-9065-3fedb85efc74)
![Telegram job](https://github.com/user-attachments/assets/a40d5b50-549c-44eb-87f2-f2afefcbb24c)

## Lessons Learned

- **Resilience**: Persistent debugging in n8n taught me when to pivot.
- **Scripting Skills**: JavaScript basics (loops, APIs) became accessible through Apps Script.
- **Simplicity**: A custom script outperformed n8n for my needs.
- **Potential Unlocked**: This project sparked interest in further coding exploration.

## Looking Ahead

I’m sticking with Remotive for now, but the script’s flexibility allows future additions like Remote OK’s API or broader keywords. Next steps might include email notifications or daily summaries. This journey has not only met my job search needs but also ignited a passion for automation.

## Acknowledgments

Thanks to the xAI community and tools like Grok for guidance. Challenges like this reveal hidden potential—embrace them!

*Happy job hunting! Feel free to fork this repo, contribute, or share your automation stories!*
