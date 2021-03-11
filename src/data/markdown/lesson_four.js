const lesson_four = `# Lesson 4: Introducing Firebase!

Welcome to week 4 (and your final individual project)! The goals for you are as follows:

- build a note app using firebase ([here is an example](https://cssg-edu-team.github.io/note-app/))
- understanding NoSQL database structure
- continue handling user input & user authentification
- continue using a CSS framework (Bootstrap)
- continue learning about React Hooks (useEffect) & asyncronous calls

**Sat, March 6th Recap:**

- [Presentation Link](https://docs.google.com/presentation/d/1BlVYOZhm7wXBKru7Tgmf9DQzM3zuPzBh8rTCKvQ7uj8/edit?usp=sharing)
- [Recorded zoom video](https://unc.zoom.us/rec/share/G6YzeLfex1oJtT_aCDl9Ys1oLK499P06BmoVb_NedHk_XGdX7wAlMEJwXAdMYeTC.wAjsW9a5G3f3MfUQ) (Passcode: gtuD#2rT) 


## Setting up your repo

1. Navigate to [this link](https://github.com/cssg-edu-team/note-app) to access the note app's repo and click the **fork** button in the top right corner.
2. Choose your personal github account as the destination for the repo.
3. Once done, click the **code** tab button and then click the green **code** button. Make sure the https option is selected and click the clipboard icon to copy the repository link.
4. Open visual studio code (or any code editor you have), click **View** in the top menu bar, then click **Command Palette**. In the pop up, search for **Git: Clone** and paste the link to the repo that you copied. Press enter on your keyboard and choose a location on your computer to store the repository locally. Once you're done, open the repo in a new window!

## Setting up the app

1. Inside the repo, click **View** in the top menu bar again, but this time select **terminal** (or you can press COMMAND + j)
2. VERY IMPORTANT: enter the following command and paste your copied url at the end: **git remote add myrepo _url_**. For example, I would enter: **git remote add myrepo https://github.com/chiazo/note-app**
3. run the following command: **npm install --save firebase**
4. run the following command: **npm install**
5. next, open the **package.json** file. Change the line saying **homepage** & replace **cssg-edu-team** with your github username. For example, mine would look like this: "homepage": "http://chiazo.github.io/note-app" because **chiazo** is my github username! :)
6. follow the commented instructions in the code!

## Setting up Firebase

1. Go to the [Firebase Console](https://console.firebase.google.com/u/0/) in your browser & make sure you remember the Google account you use to host your database.
    - Click **Add project** in the top left.
    - Enter **note-app** as your project name.
    - Turn off "Enable Google Analytics for this project"
    - Click **Continue** when your project is ready.
    - Click the settings gear (Project Settings) in the top left of the website.
    - Scroll down to the "Your Apps" header.
    - Click the icon that looks like this: **</>**
2. Set up your webapp!
    - Enter an app name ("Note App" is fine)
    - Ignore **Also set up Firebase Hosting for this app**
    - Click **Register App**
    - Press **Next** to skip the Add Firebase SDK step.
    - Keep clicking until you hit **Continue to console.**
    - Return back to VSCode.
3. In Firebase Console, click **Authentication** on the left panel.
    - Click **Sign-in method** and enable **Email/Password**
    - Click **Users** and then click **Add User**
    - Enter an email & password that you'll use to add notes (and disable editing notes for everyone viewing your app)
4. In Firebase Console, click **Realtime Database** on the left panel.
    - Click **"Create Database"**
    - Click **Rules** and change read and write to the following:
        {".read": true,
        ".write": "auth != null" }
    - Click "Publish Changes"
5. In Firebase Console, click **Project Settings** on the left panel.
    - Scroll down to the "Your Apps" header.
    - Under "Firebase SDK snippet", click the **config** button
    - Keep this window open so you can copy and paste the values from the **firebaseConfig** object into our local project
6. In VSCode, add a **.env** file inside of **note-app** (**VERY IMPORTANT!** make sure it's not inside of any other folder, it should be on the same level as **.gitignore & package.json**)
    -  Following this template, paste the following text in your **.env** file and fill out the secret values from the **firebaseConfig** object (without quotes around any of the values):
   
    **REACT_APP_API_KEY=<insert key>**  
   **REACT_APP_AUTH_DOMAIN=<insert auth domain>**    
   **REACT_APP_DB_URL=<insert db url>**    
   **REACT_APP_PROJECT_ID=<insert project id>**   
   **REACT_APP_STORAGE_BUCKET=<insert storage bucket>**    
   **REACT_APP_MESSAGING_SENDER_ID=<insert sender id>**    
   **REACT_APP_APP_ID=<insert app id>**    

   - this **.env** is already added to the **.gitignore** file so it will never be uploaded to github (which prevents these secret values from being exposed)
    
   ### You're done setting up Firebase!

## Background Info + Resources

### Firebase Database Structure

Firebase is a NoSQL database. In this specific case, this means it will act like a series of nested objects! The most important concepts and methods you need to know are the following:

- .ref(<db-name>): this returns a reference to a particular table in your database!
- .on("value", fxn): this method allows you to access certain values in the database & do something with these values using a function passed as a parameter.

## Deploy your Note App!

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
