import { Link } from "react-router-dom";

const Lessons = () => {
  const lesson_map = [
    {
      path: "/lesson-one",
      name: "Lesson 1: Deploy Your Own React Site + Learn Git",
    },
    {
      path: "/lesson-two",
      name: "Lesson 2: Build a To Do App",
    },
    {
      path: "/lesson-three",
      name: "Lesson 3: Start Fetching Data Asynchronously",
    },
  ];

  return (
    <div className="home">
      <div id="content">
        {lesson_map.map(({ path, name }) => (
          <Link to={path}>
            <li>{name}</li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Lessons;
