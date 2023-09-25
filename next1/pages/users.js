// pages/index.js
import Link from 'next/link';
import fs from 'fs/promises'; // Добавьте модуль для работы с файлами

export async function getStaticProps() {
  const data = await fs.readFile('./users.json'); // Считывание данных из JSON файла
  const users = JSON.parse(data).users;
  
  return {
    props: {
      users,
    },
  };
}

export default function Home({ users }) {
  return (
    <div>
      <div className="navbar">
        
        <a href="/"className="nav-link">main</a>
      
      
        <a href="/users"className="nav-link">users</a>
      
    </div>
      <h1>Список пользователей:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
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
}
