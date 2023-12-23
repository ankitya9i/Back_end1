
import express from 'express';
import { Todo } from '../Models/Todo.js';
import { isauth } from '../Middlewares/auth.js';
import { getall,newtodo,compltetodo,deletetodo,updatetodo} from '../Controllers/todo.js';
//import { getallusers } from '../Controllers/users.js';

const todorouter= express.Router();

todorouter.get('/todo/getall',getall);
todorouter.post('/todo/new',isauth,newtodo);
todorouter.post('/todo/complete/:id',compltetodo);
todorouter.post('/todo/delete/:id',deletetodo);
todorouter.post('/todo/update/:id',updatetodo);


export default todorouter;


