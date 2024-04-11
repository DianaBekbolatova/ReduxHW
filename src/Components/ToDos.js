import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchToDos } from '../store/slices/toDoAsync'


export default function ToDos() {
  const dispatch = useDispatch()
  const {toDos} = useSelector((state)=> state.toDos)
  useEffect(()=>{
    dispatch(fetchToDos())
  }, [])

  
  return (
    <div>
      {toDos.map((toDo)=><div key={toDo.id}>{toDo.title}</div>)}
    </div>
  )
}
