/*
 * @Author: Ma Jade
 * @Date: 2022-04-05 10:24:28
 * @LastEditTime: 2022-04-05 10:51:37
 * @LastEditors: Ma Jade
 * @FilePath: \jira\__json_server_mock__\middleware.js
 */
module.exports = (req, res, next) => {
    if(req.method === 'POST' && req.path === '/login'){
        console.log('target:', req.body);
        if(req.body.username === 'jack' && req.body.password === '123456'){
            return res.status(200).json({
                user:{
                    token: '123'
                }
            })
        }else{
            return res.status(400).json({msg: '账号或者密码错误!'})
        }
    };
    next();
}