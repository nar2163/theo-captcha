# Theo CAPTCHA ReadMe & CAPTCHA Tech Doc

Included in this document are instructions how to install and run the application as well as a general tech document on CAPTCHA.

## Prerequisites

In order to run this program, you will need to have the following tools pre-installed on your system:

- Node.js - PostgreSQL
- npm

## Installation

1. Clone the repository: `git clone https://github.com/username/repositoryname.git`
2. Navigate to the project directory: `cd theo-captcha`
3. Install the required dependencies: `npm install`

## Running the Application in a Dev environment

Once the dependencies have been installed, you can run the application with the following command from the `server` directory:

`npm run dev`

This will launch the development server and the front end server running concurrently starting the application.

## What are CAPTCHAs and why are they important?

CAPTCHAs _(or Completely Automated Public Turing tests to tell Computers and Humans Apart)_ are automated tests used to verify the identity of a user during online communications. They provide a layer of security to protect from bots or other malicious actors trying to gain unwanted access to a website or online service. CAPTCHAs also help to reduce spam and automated access to websites, making them an essential part of any secure web development environment.

Google CAPTCHAs are made secure by using advanced algorithms that make it difficult for automated bots to interpret and complete them. Some good examples of CAPTCHA tests include using distorted images, matching a set of words or phrases, using interactive games, a simple math problem, tracking mouse movement, audio CAPTCHAs and even 3D images.

The key to a secured CAPTCHA is on the backend. Google's API for CAPTCHA generates a score to identify a user by looking at a number of different factors. First, it exams how users interact with the CAPTCHA, such as how long it takes for them to complete it, or whether they have made any mistakes. It also looks at their cookie and IP address in order to compare them against a database of known bots and malicious users. Based on all this information, it assigns a score that determines if the user is a human or a bot.

## How they work and how to use them:

- Mouse movement: the system collects your mouse movements (speed and direction) which gets used in the verification, generally a bot has fast, direct and linear mouse movement while a human is slower, more jittery and less accurate.

- Other text and test based CAPTCHAs work on the backend by establishing a set of criteria that a user must meet in order to gain access. After a user completes the challenge, on the backend, an algorithm verifies the CAPTCHA response and validates the user’s identity.

- **BONUS** Honeypot: creates a field that is hidden from human users but visible to bots, like using CSS: `# honeypot { display: none; }`. If the field is filled out by a bot, it is blocked from accessing the protected information. It can be used in tandem with CAPTCHAs to further deter automated bots, as bots would have to answer a CAPTCHA before being able to detect the Honeypot field.

## Recommendations for production level authentication and next steps:

To serve CAPTCHAs from Google’s official guide, you need to configure reCAPTCHA v2 API to receive a site key and a secret key. Then, you need to integrate this API into your website, so users can validate themselves upon entering your website. Finally, you need to use the secret key in your backend to validate the response and confirm whether the user is a human or a robot.
