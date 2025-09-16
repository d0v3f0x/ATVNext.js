'use client';

import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

import Header from '../components/header';
import Footer from '../components/footer';
import Principal from '../components/principal';
import Parametro, { Texto1, Texto2, Texto3 } from '../components/parametro';
import { ThemeProvider, useTheme } from '../../../context/ThemeContext';

function DefaultContent() {
  const router = useRouter();
  const { isDark, toggleTheme } = useTheme();

  const handleLogout = () => {
    Cookies.remove('authToken');
    router.push('/login');
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <Header />

      <main className="flex-grow p-6 space-y-8">
        {/* 🔹 Seção de alternar tema */}
        <div className="flex justify-end">
          <button 
            onClick={toggleTheme}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Alternar Tema ({isDark ? 'Escuro' : 'Claro'})
          </button>
        </div>

        {/* 🔹 Seção 1: Conteúdo Principal */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Seção Principal</h2>
          <Principal />
        </section>

        {/* 🔹 Seção 2: Exemplos de Parâmetro */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Exemplos de Parâmetro</h2>
          <Parametro items={['Novo item A', 'Novo item B', 'Novo item C']} />
          <Texto1 />
          <Texto2 />
          <Texto3 cor="red" tipo="bold">
            Texto 3 com destaque vermelho
          </Texto3>
        </section>

        {/* 🔹 Seção 3: Ações */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Ações</h2>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 
                       focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Sair
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function Default() {
  return (
    <ThemeProvider>
      <DefaultContent />
    </ThemeProvider>
  );
}
