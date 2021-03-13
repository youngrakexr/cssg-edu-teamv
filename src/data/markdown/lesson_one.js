const lesson_one = `# Lesson 1: Deploy Your Own React Site + Learn Git

Welcome to your first week on the CSSG education team! We're super excited to have you here :)
The goals for you this week are as follows:

- set up your own website on github pages using react
- get comfortable with git
- play around with customizing your site (font, css, info, etc)

## Setting up your repo

Requirements:

- npm
- [node.js](https://nodejs.org/en/)
- [git](https://git-scm.com/)
- [visual studio code](https://code.visualstudio.com/) or any code editor your comfortable with

For those of you who didn't know, github allows you to host a website and all your projects for free. For example, [my personal site](https://chiazo.github.io) is completely handled through Github & runs on [Jekyll](https://jekyllrb.com/). Our goal here is for you to fork this repo and deploy it on your own github.

1. Create a github account & log in!
2. Navigate to [this link](https://github.com/cssg-edu-team/cssg-edu-team.github.io/tree/dc179689a6d5b93517963f1fc5a92b4743665c31) to access this site's repo and click the **fork** button in the top right corner. Forking is a way of copying a github repo while still being able to receive any updates made to it.
3. Choose your personal github account as the destination for the repo.
4. You will be redirected to the new repo on your account. Click the **settings** tab button and rename the repository name as follows: **[insert-your-github-username].github.io**. For example, my repository name will become: **chiazo.github.io** because **chiazo** is my username on github!
5. Once done, click the **code** tab button and then click the green **code** button. Make sure the https option is selected and click the clipboard icon to copy the repository link.
6. Open visual studio code (or any code editor you have), click **View** in the top menu bar, then click **Command Palette**. In the pop up, search for **Git: Clone** and paste the link to the repo that you copied. Press enter on your keyboard and choose a location on your computer to store the repository locally. Once you're done, open the repo in a new window!
7. If your github isn't connected to visual studio code, click **View** in the top menu bar, then click **Command Palette**. In the pop up, search for **Github Pull Requests: Sign in to Github** and follow the instructions.

## Setting up the app

1. Inside the repo, click **View** in the top menu bar again, but this time select **terminal** (or you can press COMMAND + j)
2. VERY IMPORTANT: enter the following command and paste your copied url at the end: **git remote add myrepo _url_**. For example, I would enter: **git remote add myrepo https://github.com/chiazo/chiazo.github.io.git**
3. run the following command: **npm install**
4. next, open the **package.json** file. This is a super important file for web developers. Here is where you'll define some basics about the app and also see all the commands you can run in the **scripts** section. But first, change the line saying **homepage** & replace **cssg-edu-team** with your github username. For example, mine would look like this: "homepage": "http://chiazo.github.io/" because (again) **chiazo** is my github username! :)
5. from there, you can also change the line saying "name" to be something other than **cssg-edu-team**. Once you're done, open your terminal so we can begin checking out some git commands!!!
6. To see live changes to the app, run **npm run start** in the terminal!

## Git Basics + Deploying!

Here are a couple git commands I use all the time & that you'll soon be familiar with:

- git pull origin master
- git status
- git add .
- git commit -m "[insert message here]"
- git log
- git checkout -b [insert_branch_name]

Git is basically a tool to see any changes you made, make copies of your work so you can go back if you make a mistake, and save changes you made on your computer so they're online and safe. For now, our goal is to save the changes you made (to your package.json file) and upload it to github.

1. enter in **git status** in your terminal to see any new changes you made.
2. enter either **git add .** (this will add every single change you've made to the "stage" so it can be ready to be uploaded) or type **git add package.json** to specifically add this 1 file to the stage
3. now enter **git commit -m** and in the blank space leave a brief message explaining what you changed in quotation marks. Here's an example: git commit -m "renamed app in package.json file"
4. now we're going to upload our changes to github. enter the command **git push myrepo master**. This is saying _upload my locally saved files from the **master** branch to the online repo nicknamed **myrepo**_. If you'll remember from above, we nicknamed our repo **myrepo**! Always use this command to upload your changes (writing only git push will probably be denied)
5. Run the command **npm run deploy**. This will publish your website to github pages. Check it out using the following link: https://[your-github-username].github.io
6. The final step!!! Go to your repo's settings, scroll down to nearly the bottom and under the Github Pages header, change source to **gh-pages**. Save! 

# What's next?

In the following week, make the website you're own! Change the css + add information about you and come to optional office hours to learn more about the app's setup.

Your tasks:

- Edit at least 2 files and upload those changes to github (tell us about you!)
- Find 2 personal sites with super cool designs (in your opinion) from software engineers / designers / people in the tech world. We'll be using this as inspo to learn about CSS in the future! Use [https://www.bestfolios.com/](https://www.bestfolios.com/) as a starting place!
`;

export default lesson_one;
