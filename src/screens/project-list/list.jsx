/*
 * @Author: Ma Jade
 * @Date: 2022-04-04 17:19:26
 * @LastEditTime: 2022-04-04 18:10:02
 * @LastEditors: Ma Jade
 * @FilePath: \jira\src\screens\project-list\list.jsx
 */

export const List = ({users,list}) => {
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