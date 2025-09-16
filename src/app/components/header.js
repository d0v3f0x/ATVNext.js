'use client';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useTheme } from '../../../context/ThemeContext'; // 🔹 importar contexto

export default function Header() {
  const router = useRouter();
  const { isDark, toggleTheme } = useTheme(); // 🔹 destructuring

  const handleLogout = () => {
    Cookies.remove('authToken');
    router.push('/login');
  };

  return (
    <header className={`p-4 ${isDark ? 'bg-gray-800 text-white' : 'bg-blue-600 text-white'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold cursor-pointer" onClick={() => router.push('/default')}>
          Meu App
        </h1>
        <nav>
          <button onClick={() => router.push('/default')} className="mr-4 hover:underline">
            Home
          </button>
          <button onClick={handleLogout} className="mr-4 hover:underline">
            Sair
          </button>
          <button onClick={toggleTheme} className="hover:underline">
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </div>
    </header>
  );
}
