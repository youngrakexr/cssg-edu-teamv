const lesson_two = `# Lesson 2: Build a To Do App

Welcome to week 2! The goals for you are as follows:

- build a simple to do app ([here is the finished product](https://cssg-edu-team.github.io/todo-app/))
- start learning about components and props
- figure out how to use a CSS framework (Bootstrap)
- begin learning about React Hooks (useState) & event handling


- [Presentation Link](https://drive.google.com/file/d/1F05H71cQuH0P7jS7y_fZV6YfoSnCmZHr/view?usp=sharing)

## Setting up your repo

1. Navigate to [this link](https://github.com/cssg-edu-team/todo-app) to access the todo app's repo and click the **fork** button in the top right corner.
2. Choose your personal github account as the destination for the repo.
3. Once done, click the **code** tab button and then click the green **code** button. Make sure the https option is selected and click the clipboard icon to copy the repository link.
4. Open visual studio code (or any code editor you have), click **View** in the top menu bar, then click **Command Palette**. In the pop up, search for **Git: Clone** and paste the link to the repo that you copied. Press enter on your keyboard and choose a location on your computer to store the repository locally. Once you're done, open the repo in a new window!

## Setting up the app

1. Inside the repo, click **View** in the top menu bar again, but this time select **terminal** (or you can press COMMAND + j)
2. VERY IMPORTANT: enter the following command and paste your copied url at the end: **git remote add myrepo _url_**. For example, I would enter: **git remote add myrepo https://github.com/chiazo/todo-app**
3. run the following command: **npm install**
4. next, open the **package.json** file. Change the line saying **homepage** & replace **cssg-edu-team** with your github username. For example, mine would look like this: "homepage": "http://chiazo.github.io/todo-app" because **chiazo** is my github username! :)
5. follow the commented instructions in the code!

## Background Info + Resources
### Functional Components
React is all about functions inside of functions. For this todo app, we have two functional components.
1. **App** -> this will contain the input field to add tasks & is essentially our home page
2. **Task** -> this will contain information about each individual task & will be contained within our App component

A common theme you will see is that some of our functions and data will be defined in the parent component (App) and passed down to the child component (Task). Most importantly, this will allow you to handle data at the top level, in one spot instead of inside each separate child class.

In our case, you will define two functions in the App class:
1. **handleInput**: takes in an **event** parameter & saves event.target.value as currTask
2. **addTask**: takes in no parameters and adds the task typed in to the existing array of tasks

Find more info [here](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)!

### Props & Event Handling
Because components are essentially functions, you can pass them parameters. These parameters are known as **props**.
Every prop you pass will be stored in object of **prop**erties, that you can access inside the class itself. Here's an example:

**<Task name="Clean my room"/>** corresponds to
 **const Task = ({ name }) => {}**

When you add the curly braces around parameters, you can instantly treat the object properties as variables. In this case I could easily write this inside the Task class:
**console.log(name)** which would print **Clean my room** in Chrome's console.

You can pass direct values, variables or functions as props. In the case of variables or functions, you'd pass them like so, using curly braces:
**<Task name={my_name}/>** 

A special prop for elements like **<Button>** is _**onClick**_. Any function passed to  _**onClick**_ will run every time a button is clicked, which is helpful for us! ex: **<Button onClick={() => {console.log("HI")}}>Click Me</Button>** will print *HI* everytime you click this button.

### CSS Frameworks (Boostrap)
So while doing your own CSS from scratch is fun, it can be tedious. Luckily CSS frameworks are prebuilt, stylish components that you can insert into your code directly.

We'll be using [Boostrap React](https://react-bootstrap.github.io/components/alerts/) components. Follow the examples in the code to import different elements; you'll notice that instead of normal html like **<button></button>**
you'll be capitalizing the name of these elements like so: **<Button></Button>**.

### React Hooks
Last but not least, we're on to a key part of handling data in React, [hooks](https://reactjs.org/docs/hooks-intro.html). We'll start off with the most basic hook, **useState**.
React stores local information in it's _state_. This allows it to keep track of data that may change so it can update only the parts of your app related to this info, instead of updating the entire page.

If I wanted to keep track of a string called **name**, the convention is as follows:
**const [name, setName] = useState("")**. This creates a variable called **name** and a function that can update this value called **setName**. On the right of the equal sign, the value passed to useState is an empty string, which becomes **name**'s default value. This default value could be anything: **null**, a string, an object or even an array.

If I wanted to update name, I would insert this line of code somewhere in my App: **setName("chiazo")**. If I wanted to display name's value on my page, I could do this:
**return (<div>{name}</div>)**. As you can see, inside our return function, we wrap variables with curly braces!

## Deploy your Todo App!

1. enter **git status** in your terminal to see any changes you made.
2. enter **git add .**
3. now enter **git commit -m** and in the blank space leave a brief message explaining what you changed in quotation marks.
4. now we're going to upload our changes to github. enter the command **git push myrepo master**.
5. The final step!!! Run the command **npm run deploy**. This will publish your website to github pages. Check it out using the following link: https://[your-github-username].github.io/todo-app

# What's next?

In the following week, make the todo app your own! At minimum, you should be able to click the Add button and see a new task be added to the list. Look at the Bootstrap documentation to figure out how to add elements like Buttons!

If you want a challenge:

- Add the ability to delete a task (using a delete button)
- Add the ability to edit a task (using an edit button)
- Implement two other elements from Bootstrap (ex: Cards, Alerts, etc)`;

export default lesson_two;
