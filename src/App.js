import ReactMarkdown from "react-markdown";
import { lesson_one } from "./data/markdown";

const App = () => {
  return (
    <div className="home">
      <div id="content">
        <ReactMarkdown source={lesson_one} />
      </div>
    </div>
  );
};

export default App;
