const lesson_four = `# Lesson 4: Introducing Firebase!

Welcome to week 4! The goals for you are as follows:

- build a note app using firebase ([here is an example](https://cssg-edu-team.github.io/note-app/))
- understanding NoSQL database structure
- continue handling user input
- continue using a CSS framework (Bootstrap)
- continue learning about React Hooks (useEffect) & asyncronous calls

## Setting up your repo

1. Navigate to [this link](https://github.com/cssg-edu-team/note-app) to access the note app's repo and click the **fork** button in the top right corner.
2. Choose your personal github account as the destination for the repo.
3. Once done, click the **code** tab button and then click the green **code** button. Make sure the https option is selected and click the clipboard icon to copy the repository link.
4. Open visual studio code (or any code editor you have), click **View** in the top menu bar, then click **Command Palette**. In the pop up, search for **Git: Clone** and paste the link to the repo that you copied. Press enter on your keyboard and choose a location on your computer to store the repository locally. Once you're done, open the repo in a new window!

## Setting up the app

1. Inside the repo, click **View** in the top menu bar again, but this time select **terminal** (or you can press COMMAND + j)
2. VERY IMPORTANT: enter the following command and paste your copied url at the end: **git remote add myrepo _url_**. For example, I would enter: **git remote add myrepo https://github.com/chiazo/note-app**
3. run the following command: **npm install**
4. next, open the **package.json** file. Change the line saying **homepage** & replace **cssg-edu-team** with your github username. For example, mine would look like this: "homepage": "http://chiazo.github.io/note-app" because **chiazo** is my github username! :)
5. follow the commented instructions in the code!

## Setting up Firebase

1. run the following command: **npm install -g firebase-tools**
2. run this command next: **firebase login**. From here, choose a Google account you have / create one where will host our database. Remember which account you chose!

## Background Info + Resources

### Firebase CLI

### Firebase Database Structure


## Deploy your Note App!

So this time, we will actually be deploying to both Firebase and Github Pages! :) 

1. enter **git status** in your terminal to see any changes you made.
2. enter **git add .**
3. now enter **git commit -m** and in the blank space leave a brief message explaining what you changed in quotation marks.
4. now we're going to upload our changes to github. enter the command **git push myrepo master**.
5. The final step!!! Run the command **npm run deploy**. This will publish your website to github pages. Check it out using the following link: https://[your-github-username].github.io/note-app

# What's next?

In the following week, make the note app your own! At minimum, you should be able to add and edit notes. 

If you want a challenge:

- Allow the user to delete notes
- Keep track of and display the date + time each note was created using [MomentJs](https://momentjs.com/)
- Advanced: allow the grouping of notes by category
`;

export default lesson_four;
