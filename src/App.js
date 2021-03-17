import ReactMarkdown from "react-markdown";
import { lesson_two } from "./data/markdown";

const App = () => {
  return (
    <div className="home">
      <div id="content">
        <ReactMarkdown source={lesson_two} />
      </div>
    </div>
  );
};

export default App;
