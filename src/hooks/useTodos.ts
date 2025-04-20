import {
    useQuery,
    useMutation,
    useQueryClient,
  } from '@tanstack/react-query'
  import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/lib/api'
  import { Todo } from '@/types/todo'
  
  export const useTodos = () => {
    const queryClient = useQueryClient()
  
    const query = useQuery<Todo[]>({
      queryKey: ['todos'],
      queryFn: fetchTodos,
    })
  
    const addTodo = useMutation({
      mutationFn: createTodo,
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
    })
  
    const editTodo = useMutation({
      mutationFn: updateTodo,
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
    })
  
    const removeTodo = useMutation({
      mutationFn: deleteTodo,
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
    })
  
    return {
      ...query,
      addTodo,
      editTodo,
      removeTodo,
    }
  }