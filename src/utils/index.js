/*
 * @Author: Ma Jade
 * @Date: 2022-04-04 18:15:47
 * @LastEditTime: 2022-04-04 18:50:27
 * @LastEditors: Ma Jade
 * @FilePath: \jira\src\utils\index.js
 */
import { useEffect, useState } from 'react';

export const isFalsy = value => value === 0 ? false:!!value;

export const cleanObject = (obj) => {
    const rel = { ...obj };
    Object.keys(obj).forEach(key => {
        const value = obj[key];
        if(!value){
            delete rel[key];
        }
    })
    return rel;
}

export const useMount = (callback) => {
    useEffect(() => {
        callback()
    }, []);
}

// const debounce = (func, delay) =>{
//     let timeout;
//     return (...param) => {
//         if(timeout){
//             clearTimeout(timeout);
//         }
//         timeout = setTimeout(function(){
//             func(...param);
//         }, delay);
//     }
// }

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebounceValue] = useState(value);

    useEffect(() => {
      const timeout = setTimeout(() => setDebounceValue(value), delay);
    
      return () => clearTimeout(timeout)
    }, [value, delay]);

    return debouncedValue;
    
}