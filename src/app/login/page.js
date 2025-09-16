'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie'; // npm i js-cookie

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState(''); // Estado para exibir erro
  const [remember, setRemember] = useState(false); // Estado para "Lembrar usuário"

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('loginuser');
    const password = formData.get('password');

    // 🔹 Validação de credenciais
    if (username === 'admin' && password === 'admin123') {
      setError('');
      const token = JSON.stringify({ login: username });

      // 🔹 Se "lembrar" for marcado, expira em 7 dias. Senão, expira ao fechar navegador
      Cookies.set('authToken', token, {
        expires: remember ? 7 : undefined,
        secure: true,
        sameSite: 'strict'
      });

      console.log("Login bem-sucedido:", token);
      router.push('/default');
    } else {
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="loginuser" className="sr-only">Usuário</label>
              <input
                id="loginuser"
                name="loginuser"
                type="text"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 
                placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
                focus:z-10 sm:text-sm"
                placeholder="Usuário"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Senha</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 
                  text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Senha"
              />
            </div>
          </div>

          {/* 🔹 Checkbox "Lembrar usuário" */}
          <div className="flex items-center">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
              Lembrar usuário
            </label>
          </div>

          {/* 🔹 Mensagem de erro */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium 
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                focus:ring-indigo-500"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
