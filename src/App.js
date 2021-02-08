import ReactMarkdown from "react-markdown";
import { lesson_one, lesson_two, lesson_three } from "./data/markdown";

const App = () => {
  return (
    <div className="home">
      <div id="content">
        <ReactMarkdown source={lesson_three} />
        <hr />
        <ReactMarkdown source={lesson_two} />
        <hr />
        <ReactMarkdown source={lesson_one} />
      </div>
    </div>
  );
};

export default App;
