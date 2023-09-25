// pages/users/[id].js
import { useRouter } from 'next/router';
import fs from 'fs/promises';

export async function getStaticPaths() {
  const data = await fs.readFile('./users.json');
  const users = JSON.parse(data).users;
  
  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));
  
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = await fs.readFile('./users.json');
  const users = JSON.parse(data).users;
  
  const user = users.find((u) => u.id === parseInt(params.id, 10));
  
  return {
    props: {
      user,
    },
  };
}

export default function User({ user }) {
  if (!user) return <div>Пользователь не найден</div>;

  return (
    <div>
      <div className="navbar">
        
        <a href="/"className="nav-link">main</a>
      
      
        <a href="/users"className="nav-link">users</a>
      
    </div>
      <h1>Информация о пользователе:</h1>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Email: {user.email}</p>
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

