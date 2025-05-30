package net.project.todo.service.impl;

import lombok.AllArgsConstructor;
import net.project.todo.dto.TodoDto;
import net.project.todo.entity.Todo;
import net.project.todo.exception.ResourceNotFoundException;
import net.project.todo.exception.TaskAlreadyExistsException;
import net.project.todo.repository.TodoRepository;
import net.project.todo.service.TodoService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class todoServiceImpl implements TodoService{
    private TodoRepository todoRepository;
private ModelMapper modelMapper;

    @Override
    public TodoDto addTodo(TodoDto todoDto) {
        Todo todo=modelMapper.map(todoDto,Todo.class);
        Todo savedEntity=todoRepository.save(todo);
        TodoDto savedToDoDto=modelMapper.map(savedEntity,TodoDto.class);
        return savedToDoDto;
    }

    @Override
    public TodoDto getTodo(long id) {
       Todo todo= todoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Todo is not found with id: "+id));
        return modelMapper.map(todo,TodoDto.class);
    }

    @Override
    public List<TodoDto> getAllTodos() {
        List<Todo> allTodo= todoRepository.findAll();
        return allTodo.stream().map((todo)->modelMapper.map(todo,TodoDto.class)).collect(Collectors.toList());
    }

    @Override
    public TodoDto updateTodo(TodoDto todoDto) {
        Todo todo= todoRepository.findById(todoDto.getId()).orElseThrow(()->new ResourceNotFoundException("Todo is not found with id: "+todoDto.getId()));

        todo.setTitle(todoDto.getTitle());
        todo.setDescription(todoDto.getDescription());
        todo.setCompleted(todoDto.isCompleted());

        Todo savedEntity=todoRepository.save(todo);
        TodoDto savedToDoDto=modelMapper.map(savedEntity,TodoDto.class);
        return savedToDoDto;
    }

    @Override
    public void deleteTodo(Long id) {
        Todo todo=todoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Todo is not found with id: "+id));
        todoRepository.deleteById(id);

    }

    @Override
    public TodoDto completeTodo(Long id) {
        Todo todo=todoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Todo is not found with id: "+id));
        todo.setCompleted(Boolean.TRUE);
        Todo updatedTodo=todoRepository.save(todo);
        return modelMapper.map(updatedTodo,TodoDto.class);
    }

    @Override
    public TodoDto inCompleteTodo(Long id) {
        Todo todo=todoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Todo is not found with id: "+id));
        todo.setCompleted(Boolean.FALSE);
        Todo updatedTodo=todoRepository.save(todo);
        return modelMapper.map(updatedTodo,TodoDto.class);
    }

    public String checkIfTaskTitleAlreadyPresent(String title) {
        if (todoRepository.existsByTitle(title)) {
            throw new TaskAlreadyExistsException("This task is already present");
        }
        return "This is a new title";
    }
}
