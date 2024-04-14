import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../store/slices/authAsync'

export default function Registration({ onRegistration }) {
    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')

    const btnSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser({ login, pass }))
            .then((res) => {
                if (res.payload) {
                    onRegistration()
                } else {
                  setError('Неправильный логин или пароль!')
                  setTimeout(()=>setError(''), 2000)
                }
            })
        setLogin('')
        setPass('')
    }

    return (
        <div>
            <h2>Войдите в систему</h2>
            {error && <p style={{color:'red'}}>{error}</p>}
            <form onSubmit={btnSubmit}>
                <label>
                    <input type='text' value={login} name='login' placeholder='Логин' onChange={(e) => setLogin(e.target.value)} />
                </label>
                <label>
                    <input type='password' value={pass} name='pass' placeholder='Пароль' onChange={(e) => setPass(e.target.value)} />
                </label>
                <button type='submit'>LogIn</button>
            </form>
        </div>
    )
}
