'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
      const token = Cookies.get('authToken');
      console.log('Token: ', token);

      if(token) 
        router.push('/default');
      else
        router.push('/login')

    },[router]
  );
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
   e.preventDefault();
   const formData = new FormData(e.target);
   const username = formData.get('loginuser');
   const password = formData.get('password');
   
   // Validação básica (substituir por API real)
   if (username === 'admin' && password === 'admin123') {
   // Sucesso - continuar com o código existente
   setError('');
   Cookies.set('authToken', token, { ... });
   router.push('/default');
   } else {
   setError('Credenciais inválidas. Tente novamente.');
   }
  };
  
  //return null;
}