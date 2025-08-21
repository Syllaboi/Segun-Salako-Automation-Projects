# Automate PDF Analysis and Summarization with Make.com

Are you drowning in a sea of PDFs—contracts, invoices, receipts, and more? I've crafted an incredible automation using **Make.com** that transforms document management! This PDF Analyzer/Summarizer processes any document, extracts key details, and summarizes the content into an organized format. The results are logged seamlessly into Google Sheets, with the flexibility to send summaries via email, Slack, or Telegram/WhatsApp bots. Say goodbye to manual data entry and hello to efficiency!

![5852733358981893399](https://github.com/user-attachments/assets/c095b5a6-5c7d-4d2e-9863-97f8bde313cb)


## How It Works
The workflow kicks off by monitoring a Google Drive folder for new PDF files. Once detected, the **PDF.co** module converts the PDF into a processable format. Next, **OCROnKit** extracts text and data with precision. The extracted content is then analyzed by **Google Gemini AI**, which generates a concise, structured summary. This summary is routed via **OpenRouter** to ensure compatibility, then logged into Google Sheets for easy tracking. Optionally, the summary can be dispatched to your preferred channel—email, Slack, or a Telegram/WhatsApp bot—keeping your team updated in real-time. The attached image showcases this powerful pipeline!

## Tools and Setup
- **Make.com**: The orchestration platform for building this automation.
- **Google Drive**: Watches for new PDF uploads.
- **PDF.co**: Converts PDFs for analysis.
- **OCROnKit**: Extracts text from scanned documents.
- **Google Gemini AI**: Summarizes content intelligently.
- **OpenRouter**: Ensures smooth data routing.
- **Google Sheets**: Logs summarized data.
- **Email/Slack/Telegram/WhatsApp**: Optional notification channels.

![5852733358981893402](https://github.com/user-attachments/assets/2cfc11b9-ca33-4243-8a26-c62d02051312)


## Step-by-Step Process
1. **Setup Google Drive**: Configure a folder to monitor new PDFs.
2. **Integrate PDF.co**: Add the module to convert PDFs.
3. **Add OCROnKit**: Extract text from the converted files.
4. **Configure Gemini AI**: Set up to analyze and summarize content.
5. **Route with OpenRouter**: Ensure data flows correctly.
6. **Log to Google Sheets**: Map fields to log summaries.
7. **Enable Notifications**: Connect email, Slack, or bot services.
8. **Test and Run**: Verify the workflow and activate.

This automation is a game-changer for document handling! Explore the setup in this repository and supercharge your workflow today!
