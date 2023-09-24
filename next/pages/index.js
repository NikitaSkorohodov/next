import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className="navbar">
        <Link href="/" passHref>
          <a className="nav-link">main</a>
        </Link>
        <Link href="/users" passHref>
          <a className="nav-link">users</a>
        </Link>
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
            color: white; /* Установите белый цвет текста */
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
