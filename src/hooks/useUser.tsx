import { useEffect } from 'react';
import { useState, useRef } from 'react';
import { User, ReqResListado } from '../interfaces/reqRes';
import { reqResApi } from '../api/reqRes';

export const useUser = () => {

  const [users, setusers] = useState<User[]>([])

  const pageRef = useRef(1)

  useEffect(() => {
    loadUser()
  }, [])
 
  const loadUser = async () => {
    const resp = await reqResApi.get<ReqResListado>(`/users`, {
      params: {
        page: pageRef.current
      }
    })
   
    if(resp.data.data.length > 0) {
      setusers(resp.data.data)
    }else{

      alert('No hay registros')
    }
  }
  const prevPage = () => {
    if(pageRef.current > 1) {
      pageRef.current --
      loadUser()
    }
  }
  const nextPage = () => {
    pageRef.current ++
    loadUser()

  }
  return {
    users,
    prevPage,
    nextPage

  }
}
