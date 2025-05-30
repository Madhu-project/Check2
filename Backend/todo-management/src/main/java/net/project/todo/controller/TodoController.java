package net.project.todo.controller;

import lombok.AllArgsConstructor;
import net.project.todo.dto.TodoDto;
import net.project.todo.service.TodoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("api/todos")
public class TodoController {

    private TodoService todoService;
// build addTodo Rest apis
    // http://localhost:8080/api/todos/addTodo
@PostMapping("/addTodo")
    public ResponseEntity<TodoDto> addTodo(@RequestBody TodoDto todoDto){
        TodoDto savedTodo=todoService.addTodo(todoDto);
        return new ResponseEntity<>(savedTodo, HttpStatus.CREATED);
    }

    // http://localhost:8080/api/todos/getTodo
    @GetMapping("/getTodo")
    public ResponseEntity<TodoDto> getTodo(@RequestBody TodoDto todoDto){
    TodoDto getTodo= todoService.getTodo(todoDto.getId());
    return new ResponseEntity<>(getTodo,HttpStatus.OK);
    }

    // http://localhost:8080/api/todos/getAllTodoList
    @GetMapping("/getAllTodoList")
    public ResponseEntity<List<TodoDto>> getAllToDo(){
        List<TodoDto> allTodo= todoService.getAllTodos();
        // return new ResponseEntity<>(allTodo,HttpStatus.OK);
        return ResponseEntity.ok(allTodo);
    }

    // http://localhost:8080/api/todos/updateTodo
    @PutMapping("/updateTodo")
    public ResponseEntity<TodoDto> updateTodo(@RequestBody TodoDto todoDto){
        TodoDto updatedTodo=todoService.updateTodo(todoDto);
        return new ResponseEntity<>(updatedTodo, HttpStatus.OK);
    }

    // http://localhost:8080/api/todos/updateTodo
    @DeleteMapping("/deleteTodo")
    public ResponseEntity<String> deleteTodo(@RequestBody TodoDto todoDto){
        todoService.deleteTodo(todoDto.getId());
        return new ResponseEntity<>("Todo deleted successfully", HttpStatus.OK);
    }

    @PatchMapping("/markComplete")
    public ResponseEntity<TodoDto> completeTodo(@RequestBody TodoDto todoDto){
        TodoDto updateTodo=todoService.completeTodo(todoDto.getId());
        return new ResponseEntity<>(updateTodo, HttpStatus.OK);
    }

    @PatchMapping("/markIncomplete")
    public ResponseEntity<TodoDto> inCompleteTodo(@RequestBody TodoDto todoDto){
        TodoDto updateTodo=todoService.inCompleteTodo(todoDto.getId());
        return new ResponseEntity<>(updateTodo, HttpStatus.OK);
    }

    @PostMapping("/checkTitle")
    public ResponseEntity<Map<String, String>> checkIfTaskTitleAlreadyPresent(@RequestBody TodoDto todoDto) {
        String message = todoService.checkIfTaskTitleAlreadyPresent(todoDto.getTitle());
        Map<String, String> response = new HashMap<>();
        response.put("status", "success");
        response.put("statusMessage", message);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
