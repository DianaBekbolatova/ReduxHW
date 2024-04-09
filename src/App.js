import './App.css';
import React, { useEffect } from 'react';
import {useSelector,useDispatch} from  'react-redux'
import {add, filter, del, setBooks} from './store/slices/bookSlice'
import {buy} from './store/slices/korzina'
import { useState } from 'react';

function App() {
  const {books, booksForBuy} = useSelector((state)=>({
    books:  state.books.books,
    booksForBuy: state.korzina.booksForBuy
  }))
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)
  const [modalKorz, setModalKorz] = useState(false)
  const [newBook, setNewBook] = useState('')

  useEffect(()=>{
    const allBooks = localStorage.getItem('books')
    if(allBooks){
      dispatch(setBooks(JSON.parse(allBooks)))
    }
   }, [dispatch])

  useEffect(()=>{
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  const newBookAdd = ()=>{
    dispatch(add({id: books.length + 1, name: newBook}))
    setModal(false)
  }

  const addToKorz = (book) => {
     dispatch(buy(book))
  }

 
  return (
    <div className='body'>
      <button onClick={()=> dispatch(filter())}>Фильтровать</button>
      <div>
      {books.map((book)=>(
       <div key={book.id}>{book.name}
        <button onClick={()=> dispatch(del(book.id))}>Удалить</button>
        <button onClick={()=>addToKorz(book)}>Купить</button>
       </div>
         ))}
         <div>

         </div>
      </div>
      <button onClick={()=>setModal(!modal)}>Добавить новую книгу</button>
      {modal && (<div className='modal-book'>
          <input placeholder='введите книгу' value={newBook} onChange={(event) =>setNewBook(event.target.value)}></input>
          <button onClick={newBookAdd}>Добавить</button>
      </div>)}

      <button onClick={() => setModalKorz(!modalKorz)}>Корзина</button>
      {modalKorz && (
        <div className='korzina-cont'>
          <h2>В корзине имеются: {booksForBuy.length}</h2>
            <div>
               {booksForBuy.map((booksBuy)=>
                <p key={booksBuy.id}>{booksBuy}</p>
               )}
            </div>
        </div>
      )}

    </div>
  );
}

export default App;
