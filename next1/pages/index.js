const Home = () => {
  return (
    <div>
      <div className="navbar">
        
          <a href="/"className="nav-link">main</a>
        
        
          <a href="/users"className="nav-link">users</a>
        
      </div>
      <h1>main page</h1>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }

          .nav-link {
            margin-right: 10px;
            color: white;
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
