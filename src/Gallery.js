import portfolios from "./data/images/portfolios.gif";
import todo from "./data/images/todo.gif";
import endpoints from "./data/images/endpoints.gif";
import notes from "./data/images/notes.gif";

const Gallery = () => {
  const portfolio_apps = [
    "Andrew Byerle",
    "Claire Helms",
    "Hayley Owens",
    "Elaine Dong",
    "Erin Byrd",
    "Meghan Sun",
    "Shriya Mandal",
    "Raghuvara Padma",
    "Danny O'Shaughnessy",
    "Kendall Howard",
    "Milen Patel",
    "William Mullen",
  ];
  const todo_apps = [
    "Andrew Byerle",
    "Hayley Owens",
    "Meghan Sun",
    "Shriya Mandal",
    "Raghuvara Padma",
    "Danny O'Shaughnessy",
    "Milen Patel",
    "Kendall Howard",
  ];
  const endpoint_apps = [
    "Raghuvara Padma",
    "Danny O'Shaughnessy",
    "Milen Patel",
    "Kendall Howard",
  ];
  const group_projects = [
    "Raghuvara Padma",
    "Danny O'Shaughnessy",
    "Kendall Howard",
    "Milen Patel",
  ];
  const note_apps = ["Kendall Howard"];

  return (
    <div className="home">
      <h1>Hall of Fame (Spring 2021)</h1>
      <div id="content" class="hof">
        <div id="portfolios">
          <h2>Portfolios</h2>
          <img src={portfolios} alt="portfolio gif" />
          <h4>Completed by:</h4>
          {portfolio_apps.map((person) => (
            <li>{person}</li>
          ))}
        </div>
        <div id="todo-apps">
          <h2>Todo Apps</h2>
          <img src={todo} alt="todo app gif" />
          <h4>Completed by:</h4>
          {todo_apps.map((person) => (
            <li>{person}</li>
          ))}
        </div>
        <div id="endpoint-apps">
          <h2>Endpoint Apps</h2>
          <img src={endpoints} alt="endpoint gif" />
          <h4>Completed by:</h4>
          {endpoint_apps.map((person) => (
            <li>{person}</li>
          ))}
        </div>
        <div id="note-apps">
          <h2>Note Apps</h2>
          <img src={notes} alt="note gif" />
          <h4>Completed by:</h4>
          {note_apps.map((person) => (
            <li>{person}</li>
          ))}
        </div>
        <div id="group-projects">
          <h2>Group Projects</h2>
          <h4>Completed by:</h4>
          {group_projects.map((person) => (
            <li>{person}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
