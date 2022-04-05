/*
 * @Author: Ma Jade
 * @Date: 2022-04-05 12:02:39
 * @LastEditTime: 2022-04-05 12:02:40
 * @LastEditors: Ma Jade
 * @FilePath: \jira\src\models\interface.ts
 */
export interface User {
    id: string,
    name: string,
    personId: string,
    organization: string,
    created: string,
    token: string
  }

export interface Project {
    id: string,
    name: string,
    personId: string,
    pin: boolean,
    organization: string
  }