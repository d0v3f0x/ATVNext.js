'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

export default function Home() {
  const router = useRouter();
  const [error, setError] = useState('');

  useEffect(() => {
      const token = Cookies.get('authToken');
      console.log('Token: ', token);

      if(token) 
        router.push('/default');
      else
        router.push('/login');

  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('loginuser');
    const password = formData.get('password');
    
    // Validação básica (substituir por API real)
    if (username === 'admin' && password === 'admin123') {
      setError('');

      const token = JSON.stringify({ login: username });
      Cookies.set('authToken', token, {
          expires: 7,
          sameSite: 'strict',
      });

      router.push('/default');
    } else {
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return null; // Se quiser renderizar formulário, precisa adicionar JSX aqui
}
