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

  //return null;
}