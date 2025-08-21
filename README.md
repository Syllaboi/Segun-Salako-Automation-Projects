<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0 auto; max-width: 800px; padding: 20px; background-color: #f9f9f9;">
    <h1 style="color: #2c3e50; text-align: center; border-bottom: 2px solid #3498db; padding-bottom: 10px;">Automate Email Attachments with Make.com: Gmail to Google Drive to Telegram Bot</h1>

![5852733358981893388](https://github.com/user-attachments/assets/d5efe036-3093-43d3-ada5-a79967e56462)


    
<p style="color: #34495e;">Are you tired of manually downloading email attachments and sharing them with your team? I've built an awesome automation using <strong style="color: #2980b9;">Make.com</strong> that streamlines this process! This system automatically fetches attachments from incoming Gmail emails, saves them to a specific Google Drive folder, and sends them to my Telegram bot. It’s a productivity booster that keeps everything organized and my team in the loop in real-time—saving me hours of tedious work!</p>

  <h2 style="color: #2980b9;">How It Works</h2>
    <p style="color: #34495e;">The workflow is elegantly simple yet powerful. Make.com monitors my Gmail inbox for new emails with attachments. An iterator then processes each attachment individually. Next, the files are uploaded to a designated Google Drive folder for easy access and secure storage. Finally, the attachments are forwarded to my Telegram bot, ensuring instant notifications. The attached image illustrates this seamless pipeline: <span style="background-color: #dff0d8; padding: 5px; border-radius: 3px;">Gmail → Iterator → Google Drive → Telegram Bot</span>.</p>

  <h2 style="color: #2980b9;">Tools and Setup</h2>
    <ul style="list-style-type: none; padding-left: 0;">
        <li style="background: #ecf0f1; margin: 10px 0; padding: 10px; border-left: 4px solid #3498db;"><strong style="color: #2980b9;">Make.com</strong>: The core platform, providing an intuitive interface to connect apps and design workflows.</li>
        <li style="background: #ecf0f1; margin: 10px 0; padding: 10px; border-left: 4px solid #3498db;"><strong style="color: #2980b9;">Gmail</strong>: Configured to detect new emails and extract attachments effortlessly.</li>
        <li style="background: #ecf0f1; margin: 10px 0; padding: 10px; border-left: 4px solid #3498db;"><strong style="color: #2980b9;">Google Drive</strong>: Utilized for reliable cloud storage, with a specific folder set as the destination.</li>
        <li style="background: #ecf0f1; margin: 10px 0; padding: 10px; border-left: 4px solid #3498db;"><strong style="color: #2980b9;">Telegram Bot</strong>: Integrated for real-time sharing, requiring a bot token obtained from BotFather on Telegram.</li>
    </ul>
    
![Doc actt](https://github.com/user-attachments/assets/6629deaf-fe24-464f-9f42-033cf7316bed)

  <h2 style="color: #2980b9;">Step-by-Step Guide</h2>
    <ol style="padding-left: 20px;">
        <li style="color: #34495e;"><strong style="color: #2980b9;">Sign Up</strong>: Create a Make.com account and initiate a new scenario.</li>
        <li style="color: #34495e;"><strong style="color: #2980b9;">Gmail Setup</strong>: Add the Gmail module, set it to watch for new emails, and filter for those with attachments.</li>
        <li style="color: #34495e;"><strong style="color: #2980b9;">Iterator</strong>: Insert an Iterator module to process multiple attachments if present.</li>
        <li style="color: #34495e;"><strong style="color: #2980b9;">Google Drive Integration</strong>: Connect the Google Drive module and specify the target folder for uploads.</li>
        <li style="color: #34495e;"><strong style="color: #2980b9;">Telegram Bot Configuration</strong>: Link the Telegram Bot module, input your bot token, and define the chat ID.</li>
        <li style="color: #34495e;"><strong style="color: #2980b9;">Test and Activate</strong>: Run a test to ensure smooth operation, then activate the scenario.</li>
    </ol>

  <p style="background-color: #dff0d8; padding: 10px; border-radius: 5px; color: #34495e;">This automation is a game-changer! Explore the full setup and code in this repository to implement it yourself. Let’s boost productivity together!</p>
</body>
</html>
