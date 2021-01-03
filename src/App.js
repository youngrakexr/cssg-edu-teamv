// import { Header, Footer } from "./components";
import ReactMarkdown from "react-markdown";
import { lesson_one } from "./data/markdown";

const App = () => {
  return (
    <div className="home">
      {/* <Header /> */}

      <div id="content">
        <ReactMarkdown source={lesson_one} />
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
