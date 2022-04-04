/*
 * @Author: Ma Jade
 * @Date: 2022-04-04 17:17:09
 * @LastEditTime: 2022-04-04 18:18:43
 * @LastEditors: Ma Jade
 * @FilePath: \jira\src\screens\project-list\index.jsx
 */
import { List } from './list'
import { SearchPanel } from './search-panel'
import { useEffect, useState } from 'react';
import { cleanObject } from '../../utils';
import * as qs from 'qs';

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {

    const [users, setUsers] = useState([]);

    const [param, setParam] = useState({
        name: '',
        personId: ''
    });

    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async res => {
            if(res.ok){
                setList(await res.json())
            }
        })
    }, [param]);

    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async res => {
            if(res.ok){
                setUsers(await res.json())
            }
        })
    }, [])

    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}/>
        <List users={users} list={list}/>
    </div>
}