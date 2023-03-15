menu
Build Actions for Google Assistant using Actions Builder (Level 1)

Overview
Set up
Start a conversation
Create your Action's conversation
Implement fulfillment
Congratulations!
5. Implement fulfillment
Currently, your Action's responses are static; when a scene containing a prompt is activated, your Action sends the same prompt each time. In this section, you implement fulfillment that contains the logic to construct a dynamic conversational response.

Key terms:

Fulfillment: The code that contains the logic for your Action. A webhook triggers calls to your fulfillment based on events that occur within your Actions.
Your fulfillment identifies whether the user is a returning user or a new user and modifies the greeting message of the Action for returning users. The greeting message is shortened for returning users and acknowledges the user's return: "A wondrous greeting, adventurer! Welcome back to the mythical land of Gryffinberg!"

For this codelab, use the Cloud Functions editor in the Actions console to edit and deploy your fulfillment code.

Key terms:

Cloud Functions editor: A built-in editor in the Actions console, which you can use to edit and deploy your fulfillment code using Cloud Functions for Firebase.
Your Action can trigger webhooks that notify your fulfillment of an event that occurs during an invocation or specific parts of a scene's execution. When a webhook is triggered, your Action sends a request with a JSON payload to your fulfillment along with the name of the handler to use to process the event. This handler carries out some logic and returns a corresponding JSON response.

Build your fulfillment
You can now modify your fulfillment in the inline editor to generate different prompts for returning users and new users when they invoke your Action.

To add this logic to your fulfillment, follow these steps:

Click Develop in the navigation bar.
Click the Webhook tab in the navigation bar.
Select the Inline Cloud Functions checkbox.
Click Confirm. Boilerplate code is automatically added for the index.js and package.json files.
d4702f1de6404285.png

Replace the contents of index.js with the following code:
index.js

const { conversation } = require('@assistant/conversation');
const functions = require('firebase-functions');

const app = conversation({debug: true});

app.handle('greeting', conv => {
 let message = 'A wondrous greeting, adventurer! Welcome back to the mythical land of Gryffinberg!';
 if (!conv.user.lastSeenTime) {
   message = 'Welcome to the mythical land of  Gryffinberg! Based on your clothes, you are not from around these lands. It looks like you\'re on your way to an epic journey.';
 }
 conv.add(message);
});


exports.ActionsOnGoogleFulfillment = functions.https.onRequest(app);