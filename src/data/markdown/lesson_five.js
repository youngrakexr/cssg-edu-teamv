const lesson_five = `# Lesson 5: How To: Group Projects!

Welcome to the culmination of the previous 4 lessons: designing and coding your own project!

Navigating a group project isn't easy but it's how coding happens in the real world. Here are some key things this guide will address:
1. Picking a Project
2. Github Reviews + Management
3. Delegation

## Picking a Project

Brainstorm a list of ideas or any projects you all have dreamed of making. Once this is done, make a list divided into 2 columns (frontend & backend). Begin listing any features or code that will be necessary. Also feel free to write out the areas each member most enjoyed working or wishes to get better in. Here's an example of one of this spring's project idea breakdown:

### Frontend
- users authenticate with spotify
- display list of 5 - 10 songs on homepage (button to play the song)
- display playlists + liked songs with plus sign (might be more difficult)
- nice interface, pleasing to eyes
- each song has an "added by <username>"

### Backend
- store last user + their song uri + song artist + album + genre
- store each song in the database
- date of interaction
- name of the person

> - kendall: API was his favorite
> - danny: API / firebase was his favorite
> - raghu: API / firebase / state var + react was his favorite

## Github Reviews + Management
In order to work on a project that is divided amongst group members, each person must be familiar with how to upload and download code from Github. Always download any code before uploading your own changes.

### making a project repo
the code for your group project will be based on project 4's base code. here's how to set up your project repo:
- have one team member make a repo on github
- in the repo settings, click "Manage Access" and then click "Invite a collaborator"
- Add each teammates' github username 
- To accept the invite, each member must go to their email and click the link github forwards them

### downloading changes from github (always do this before uploading changes):
- git pull origin master

### uploading changes to github:
- git checkout -b <branch-name> (ex: git checkout -b api-methods)
- git add . or git add <file-name> (ex: git add src/list.js)
- git commit -m "<message explaining what you changed>" (ex: git commit -m "added a Note component")
- git push origin <branch-name> (ex: git push origin api-methods)

### making a pull request:
- go to the repo and click the green compare and make pull request button after uploading your changes
- add a description for what you changed in the box on the left
- click the **reviewers** title on the right and add the names of your teammates to check your code
- finally, click the green make a pull request button

## Delegation
Once you have listed out all the features you'd like in your app and categorized them by necessity, divide them evenly amongst your team members!
`;

export default lesson_five;
