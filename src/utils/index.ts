/*
 * @Author: Ma Jade
 * @Date: 2022-04-04 18:15:47
 * @LastEditTime: 2022-04-05 00:17:57
 * @LastEditors: Ma Jade
 * @FilePath: \jira\src\utils\index.ts
 */
import { useEffect, useState } from 'react';

export const isFalsy = (value: unknown) => value === 0 ? false:!!value;

export const cleanObject = (obj:any) => {
    const rel = { ...obj };
    Object.keys(obj).forEach(key => {
        const value = obj[key];
        if(!value){
            delete rel[key];
        }
    })
    return rel;
}

export const useMount = (callback: ()=>void) => {
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

export const useDebounce = <V>(value:V, delay?:number) => {
    const [debouncedValue, setDebounceValue] = useState(value);

    useEffect(() => {
      const timeout = setTimeout(() => setDebounceValue(value), delay);
    
      return () => clearTimeout(timeout)
    }, [value, delay]);

    return debouncedValue;
    
}