/*
 * @Author: Ma Jade
 * @Date: 2022-04-03 23:44:14
 * @LastEditTime: 2022-04-05 10:17:33
 * @LastEditors: Ma Jade
 * @FilePath: \jira\src\App.tsx
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProjectListScreen } from './screens/project-list';
import { LoginScreen } from './screens/login';


function App() {
  return (
    <div className="App">
      <LoginScreen/>
      {/* <ProjectListScreen/> */}
    </div>
  );
}

export default App;
