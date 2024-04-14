import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchToDos, del } from '../store/slices/toDoAsync'
import { useGetToDoQuery, useAddToDoMutation } from '../store/api/toDoApi'


export default function ToDos() {
  const dispatch = useDispatch()
  const {toDos, status, error} = useSelector((state)=> state.toDos)
  useEffect(()=>{
    dispatch(fetchToDos())
  }, [])
  //  const { data:toDos, isLoading, error } = useGetToDoQuery()

  
  return (
    <div>
      <h2>Список дел</h2>
      {status === 'loading' && <h2>Loading</h2>}
      {error && <p>{error}</p>}
      {/* {isLoading && <h2>loading...</h2>} */}
      {toDos.map((toDo)=><div key={toDo.id}>{toDo.title} 
      <button onClick={() => dispatch(del(toDo.id))}> Удалить</button>
      </div>)}
    </div>
  )
}
