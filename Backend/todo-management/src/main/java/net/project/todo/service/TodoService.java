package net.project.todo.service;

import net.project.todo.dto.TodoDto;

import java.util.List;

public interface TodoService {
    TodoDto addTodo(TodoDto todoDto);

    TodoDto getTodo(long id);

    List<TodoDto> getAllTodos();

    TodoDto updateTodo(TodoDto todoDto);

    void deleteTodo(Long id);

    TodoDto completeTodo(Long id);

    TodoDto inCompleteTodo(Long id);

    String checkIfTaskTitleAlreadyPresent(String title);
}
