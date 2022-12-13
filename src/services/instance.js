import axios from "axios";

const instance = axios.create({
    baseURL:process.env.REACT_APP_BASE_URL

});

export const getAllTodos = (responce) => instance.get(`/tasks/${process.env.REACT_APP_userId}`,{
    params:{
        filterBy: responce.status,
        order: responce.sortTypeSelected,
        pp: responce.todosPerPage,
        page: responce.currentPage
    }
});

export const postTask = (ref) => instance.post(`task/${process.env.REACT_APP_userId}`,
{
    name: ref.current.value,
    done: false,
    createdAt: new Date(),
    updatedAt: new Date(),
});

export const deleteTodo = (task) => instance.delete(`task/${process.env.REACT_APP_userId}/${task.uuid}`);

export const editPatchTodo = (task, inputValue) => instance.patch(`task/${process.env.REACT_APP_userId}/${task.uuid}`,
{
    name:inputValue.current.value,
    done: task.done,
    createdAt: task.createdAt,
    updatedAt: new Date()
})

export const statusPatchTodo = (task) => instance.patch(`task/${process.env.REACT_APP_userId}/${task.uuid}`,{
    done: !task.done
})