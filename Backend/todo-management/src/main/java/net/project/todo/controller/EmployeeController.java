
package net.project.todo.controller;

import lombok.AllArgsConstructor;
import net.project.todo.dto.EmployeeDto;
import net.project.todo.dto.TodoDto;
import net.project.todo.entity.Employee;
import net.project.todo.repository.EmployeeRepository;
import net.project.todo.service.EmployeeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")

public class EmployeeController {


    private EmployeeService employeeService;


// below is correct one with out any delay
//    @GetMapping("/getAllUsersList")
//    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
//        List<EmployeeDto> data= employeeService.getAllEmployeeList();
//        // return new ResponseEntity<>(allTodo,HttpStatus.OK);
//        return ResponseEntity.ok(data);
//    }

    // below is modified for frontend having delay
    @GetMapping("/getAllUsersList")
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
        try {
            Thread.sleep(5000); // Delay for 3 seconds (3000 milliseconds)
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt(); // restore the interrupt status
            throw new RuntimeException("Thread interrupted", e);
        }

        List<EmployeeDto> data = employeeService.getAllEmployeeList();
        return ResponseEntity.ok(data);
    }


}
