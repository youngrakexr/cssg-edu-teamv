import ReactMarkdown from "react-markdown";

const Lesson = ({ lesson }) => {
  return (
    <div className="home">
      <div id="content">
        <ReactMarkdown source={lesson} />
      </div>
    </div>
  );
};

export default Lesson;
