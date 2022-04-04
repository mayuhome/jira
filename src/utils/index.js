/*
 * @Author: Ma Jade
 * @Date: 2022-04-04 18:15:47
 * @LastEditTime: 2022-04-04 18:17:34
 * @LastEditors: Ma Jade
 * @FilePath: \jira\src\utils\index.js
 */
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