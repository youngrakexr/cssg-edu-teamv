import ReactMarkdown from "react-markdown";
import { lesson_four } from "./data/markdown";

const App = () => {
  return (
    <div className="home">
      <div id="content">
        <ReactMarkdown source={lesson_four} />
      </div>
    </div>
  );
};

export default App;
