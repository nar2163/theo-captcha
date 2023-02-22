# Theo CAPTCHA ReadMe & CAPTCHA Tech Doc

This is a Node.js/React basic fullstack application that demonstrates the basic implementation of various CAPTCHAs with an accompanying technical document outlining these implementations as well as the importance of securing your authorizations with CAPTCHA technology.

Link to basic video walkthru: [Theo CAPTCHA Walkthru](https://youtu.be/H_ztvF3SoDk)

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

CAPTCHAs are automated tests used to verify the identity of a user, provide a layer of security to protect from bots trying to gain access to a website. Google CAPTCHAs are made secure by using algorithms that make it difficult for bots to interpret and solve them. Some good examples of CAPTCHA tests include using distorted images, matching a set of words or phrases, but CAPTCHAs can even be interactive games, or solving a simple math problem.

The key to a secured CAPTCHA is on the backend. Google's API for CAPTCHA generates a score to identify a user by looking at a number of different factors. First, it exams how users interact with the CAPTCHA, such as how long it takes for them to complete it, or whether they have made any mistakes. It also looks at their cookie and IP address in order to compare them against a database of known bots. Based on a heuristic interpretation of that information, the API assigns a score that determines whether or not the user is human.

## Vulnerability to browser automation tools like Selenium

Open source software tools like Selenium use automated testing to perform CAPTCHA solving. These tools enable the user to automate interactions with the webpage and break the CAPTCHA image into small parts that can be analyzed and solved using algorithms. It can also employ Optical Character Recognition (OCR) to identify the challenge text and then make an educated guess as to its meaning. Other ways of combating this beyond the CAPTCHA include IP whitelisting and two-factor identification.

## How they work and how to use them:

- Mouse movement: the system collects your mouse movements (speed and direction) which gets used in the verification, generally a bot has fast, direct and linear mouse movement while a human is slower, and less accurate.

- Other text and test based CAPTCHAs work on the backend by establishing a set of criteria that a user must meet in order to gain access. After a user completes the challenge, on the backend, an algorithm verifies the CAPTCHA response and validates the user’s identity.

- **BONUS** Honeypot: creates a field that is hidden from human users but visible to bots, like using CSS: `# honeypot { display: none; }`. If the field is filled out by a bot, it is blocked from accessing the protected information. It can be used in tandem with CAPTCHAs to further deter automated bots, as bots would have to answer a CAPTCHA before being able to detect the Honeypot field.

## Recommendations for production level authentication and next steps:

To serve CAPTCHAs from Google’s official guide, you need to configure reCAPTCHA v2 API to receive a site key and a secret key. Then, you need to integrate this API into your website, so users can validate themselves upon entering your website. Finally, you need to use the secret key in your backend to validate the response and confirm whether the user is a human or a robot.
