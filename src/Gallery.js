const Gallery = () => {
  const portfolios = [];
  const todo_apps = [];
  const endpoint_apps = [];

  return (
    <div className="home">
      <h1>Hall of Fame (Spring 2021)</h1>
      <div id="content">
        <div id="portfolios">
          <h2>Portfolios</h2>
        </div>
        <div id="todo-apps">
          <h2>Todo Apps</h2>
        </div>
        <div id="endpoint-apps">
          <h2>Endpoint Apps</h2>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
