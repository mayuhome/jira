/*
 * @Author: Ma Jade
 * @Date: 2022-04-05 11:58:23
 * @LastEditTime: 2022-04-05 12:10:54
 * @LastEditors: Ma Jade
 * @FilePath: \jira\src\auth-provider.ts
 */

import { User } from './models/interface';
const apiUrl = process.env.REACT_APP_API_URL;
const localStorageKey = '__auth_provicer_token__';
export const getToken = () => window.localStorage.getItem(localStorageKey);
export const handleUserResponse = ({user}:{user: User}) => {
    window.localStorage.setItem(localStorageKey, user.token||'');
    return user;
}

export const login = (data: {username: string, password: string}) => {
    fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(data)
    }).then(
        async (res) => {
         
            if(res.ok){
                return handleUserResponse(await res.json())
            }
        }
    )}

export const register = (data: {username: string, password: string}) => {
    fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(data)
    }).then(
        async (res) => {
            if(res.ok){
                return handleUserResponse(await res.json())
            }
        })
}

export const logout = () => {
    window.localStorage.removeItem(localStorageKey);
}