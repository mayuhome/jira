import { FormEvent } from 'react'
import React from 'react';
/*
 * @Author: Ma Jade
 * @Date: 2022-04-05 10:14:22
 * @LastEditTime: 2022-04-05 11:51:59
 * @LastEditors: Ma Jade
 * @FilePath: \jira\src\screens\login\index.tsx
 */const apiUrl = process.env.REACT_APP_API_URL;
export const LoginScreen = () => {
    const login = (param: {username: string, password: string}) => {
        fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(param)
        }).then(
            async (res) => {
                console.log('login');
                
                if(res.ok){
                    await res.json()
                }
            }
        )
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
        login({username, password});
    }
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">用户名</label>
            <input type="text" id={'username'}/>
            </div>
            <div><label htmlFor="password">密码</label>
            <input type="password" id={'password'}/></div>
            <button type='submit'>登录</button>
    </form>
}