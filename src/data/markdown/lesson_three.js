const lesson_three = `# Lesson 3: Start Fetching Data Asynchronously

Welcome to week 3! The goals for you are as follows:

- build a simple app utilizing an endpoint ([here is an example](https://cssg-edu-team.github.io/endpoint-app/))
- start learning about http via Axios
- continue handling user input
- continue using a CSS framework (Bootstrap)
- continue learning about React Hooks (useEffect) & asynchronous calls
- get practice working with other people

- [Presentation Link](https://docs.google.com/presentation/d/1weIZ8i2Twn4Sr7L8FsYXE216a5y8Tyj72aoF3aJxhXA/edit?usp=sharing)

## Setting up your repo

1. Navigate to [this link](https://github.com/cssg-edu-team/endpoint-app) to access the endpoint app's repo and click the **fork** button in the top right corner.
2. Choose your personal github account as the destination for the repo.
3. Once done, click the **code** tab button and then click the green **code** button. Make sure the https option is selected and click the clipboard icon to copy the repository link.
4. Open visual studio code (or any code editor you have), click **View** in the top menu bar, then click **Command Palette**. In the pop up, search for **Git: Clone** and paste the link to the repo that you copied. Press enter on your keyboard and choose a location on your computer to store the repository locally. Once you're done, open the repo in a new window!

## Setting up the app

1. Inside the repo, click **View** in the top menu bar again, but this time select **terminal** (or you can press COMMAND + j)
2. VERY IMPORTANT: enter the following command and paste your copied url at the end: **git remote add myrepo _url_**. For example, I would enter: **git remote add myrepo https://github.com/chiazo/endpoint-app**
3. run the following command: **npm install**
4. next, open the **package.json** file. Change the line saying **homepage** & replace **cssg-edu-team** with your github username. For example, mine would look like this: "homepage": "http://chiazo.github.io/endpoint-app" because **chiazo** is my github username! :)
5. follow the commented instructions in the code!

## Background Info + Resources

### Axios & Data Fetching

We are now moving on to some very real world applications: how do we grab and handle data from the internet or (later on) a database? Essentially, we use **endpoints**, which are urls pointing to data we can grab. Look at endpoints as the center of data transfers: we can get data from them and also send data their way! For now, we will focus on the former.

In this case, Axios is a module that facilitates this process. We can use its **get()** method, passing in an endpoint string and any other necessary arguments to easily fetch data. For example: **axios.get("https://www.google.com")** would try to grab any info stored on the Google homepage, which would just be html. As you can imagine, being able to use any URL on the internet as an endpoint could create some security risks. However, not all endpoints are created equal! You might need a specially generated API key to access certain data on the internet, or pass specific Headers / Arguments to get the right type of information back. For now, we're going to handle free APIs without a need for an API Key. To learn more about APIs, check [this out](https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/).

Any function that calls axios will need to be declared as asynchronous. For now, think of this as JavaScript saying: "hmm, I have no idea how long it will take to do what this function wants, so I'm going to pause a bit to make sure it's done before I continue on to the next line of code." This is a major oversimplification of what's happening and if you want to go into more depth on Promises, async functions and threads, check out [this tutorial](https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff).

As a result, 2 things need to happen to make fetching data work:

1. declare your function with the **async** keyword
2. add a **then(fxn)** and **catch(fxn)** block [each block takes a _function_ as an argument]

- we can declare a function as async in 2 ways: **async function fxn_name()** or **const fxn_name = async () => {}**
- we need the **then()** block so that JavaScript knows what to do if axios successfully grabs the data and the **catch()** block so it knows what to do if an error occurs (for example: you don't have the right credentials, the url is invalid, the API is broken).

Thus a proper call to axios in our async function might look like this:
**axios.get(\`url\`).then((response) => {console.log(response.data)}).catch((e) => console.log(e))**.
This will print the data stored in our response if it succeeds or print the error if it fails.

### Ternary Expressions & Template Literals

Now that we're fetching data and might have different possible data ending up on our page, we want to make our code & React elements as flexible as possible. As such, we'll be making use of the following tools:

1. **Ternary Expressions**: a simplified if / else statement — (boolean ? ifTrue : ifFalse)
2. **Template Literals**: using backticks instead of double quotes to insert  a variable inside of a string — \`hi $\{chiazo}\`

Here's an example of both.

- **Ternary Expressions**: Assume we have a state variable **name**, with a default value of _null_. While the data is being fetched, we want to make sure our page has something to display. We can use a ternary to add conditional react elements:
  **{ name ? <div>{name}</div> : <h3>No name available.</h3>}** This code checks if name is not null; if so, it displays its value in a div tag. Otherwise, it adds a header saying no name is available.
- **Template literal**: Assume we have an endpoint that takes in a parameter called **count**. In our app, we want to make our function that calls axios have a parameter so that we can change how many results we fetch (aka the count). If the endpoint style is like so: _https://www.google.com/count=[COUNT]_, we could make a **url** variable like so with backticks: **const url=\`https://www.google.com/count=$\{input}\`**. In this scenario, **input** is the parameter passed into our function that allows the url to easily change, without needing separate url variables.

### React Hooks (useEffect)

Last but not least, we're on to a key part of handling async data calls in React, [useEffect](https://reactjs.org/docs/hooks-intro.html). Last week we saw the basic hook, **useState**.

If we are fetching data that changes the way the page looks in anyway, we want to use both **useEffect** and **useState**. In this case, **useEffect** will update the page if any changes occur to our state variables. This won't work if you define a regular variable such as **let num = 10**. Always make a state variable for data that is being fetched and rendered onto your page!

If I wanted to keep track of a string called **name**, the convention is as follows:
**const [name, setName] = useState(null)**.

Now if I wanted to fetch a name from an endpoint using an async function called **getName**, I would want to call it inside of **useEffect** like so:

**useEffect(() => { if(!name) { getName(setName) }}, [name])**

A couple things are happening here:

- useEffect takes in a function and an optional second parameter (an array containing any state variable it's monitoring). If you don't pass in a 2nd argument or pass in an empty array, useEffect will run every time the page is rendered (which can be costly)
- the passed in function is checking if the **name** state variable is null
- if so, it calls the async function, getName & passes it the setName function
- it's nice to pass the setName function so you can directly update the **name** variable when the axios call succeeds (this would occur in the **then()** block)
- useEffect is monitoring the **name** state variable, so it can call the inner function any time **name** changes

## Deploy your Endpoint App!

1. enter **git status** in your terminal to see any changes you made.
2. enter **git add .**
3. now enter **git commit -m** and in the blank space leave a brief message explaining what you changed in quotation marks.
4. now we're going to upload our changes to github. enter the command **git push myrepo master**.
5. The final step!!! Run the command **npm run deploy**. This will publish your website to github pages. Check it out using the following link: https://[your-github-username].github.io/endpoint-app

# What's next?

In the following week, make the endpoint app your own! At minimum, you should grab data from an endpoint (using the Avatar endpoint is not allowed!) and map that data onto a page in react. Look at the Bootstrap documentation to figure out how to add elements so you can handle user input! Here is a [website](https://apilist.fun/) you can [browse](https://github.com/public-apis/public-apis) for some free APIS.

If you want a challenge:

- Add the ability for a user to input an endpoint parameter (so the page updates with the info they desire) w/ Bootstrap
  - ex: Allow a user to specify the number of characters fetched
- Display both images and text, using Bootstrap Grid

## Github Reviews + Management
For this project, you have the option to work in a group or with a partner! In order to work on a project that is divided amongst group members, each person must be familiar with how to upload and download code from Github. Always download any code before uploading your own changes.

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
`;

export default lesson_three;
