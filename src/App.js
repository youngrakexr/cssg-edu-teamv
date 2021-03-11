import ReactMarkdown from "react-markdown";
import { lesson_five } from "./data/markdown";

const App = () => {
  return (
    <div className="home">
      <div id="content">
        <ReactMarkdown source={lesson_five} />
      </div>
    </div>
  );
};

export default App;
