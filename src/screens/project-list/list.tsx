import { User } from './search-panel'

/*
 * @Author: Ma Jade
 * @Date: 2022-04-04 17:19:26
 * @LastEditTime: 2022-04-04 18:10:02
 * @LastEditors: Ma Jade
 * @FilePath: \jira\src\screens\project-list\list.jsx
 */
interface Project {
    id: string,
    name: string,
    personId: string,
    pin: boolean,
    organization: string
  }
  interface ListProps {
    list: Project[],
    users: User[]
  }
export const List = ({users,list}:ListProps) => {
    return <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(project => 
                    <tr key={project.id}>
                        <td>{project.name}</td>
                        <td>{users.find(user => user.id ===project.personId)?.name || '未知'}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
}