/*
 * @Author: Ma Jade
 * @Date: 2022-04-04 17:20:07
 * @LastEditTime: 2022-04-04 18:32:41
 * @LastEditors: Ma Jade
 * @FilePath: \jira\src\screens\project-list\search-panel.jsx
 */

import { User } from '../../models/interface';

  interface SearchPanelProps {
    users: User[],
    param: {
      name: string,
      personId: string
    },
    // setParam: (param: SearchPanelProps['param']) => void;
    setParam: (param: any) => void;
  }

export const SearchPanel = ({users, param, setParam}:SearchPanelProps) => {





    return <form>
        <div>
            <input type="text" value={param.name} onChange={evt => setParam({
                ...param,
                name: evt.target.value
            })} />
            <select value={param.personId} onChange={evt => setParam({
                ...param,
                personId: evt.target.value
            })}>
                <option value={''}>负责人</option>
                {
                    users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                }
            </select>
        </div>
    </form>
}