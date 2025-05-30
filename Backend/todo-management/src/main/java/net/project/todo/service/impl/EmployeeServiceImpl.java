package net.project.todo.service.impl;

import lombok.AllArgsConstructor;
import net.project.todo.dto.EmployeeDto;
import net.project.todo.entity.Employee;
import net.project.todo.exception.ResourceNotFoundException;
import net.project.todo.repository.EmployeeRepository;
import net.project.todo.service.EmployeeService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;
private ModelMapper modelMapper;



    @Override
    public List<EmployeeDto> getAllEmployeeList() {
        List<Employee> employees= employeeRepository.findAll();

         return employees.stream().map((employee)->modelMapper.map(employee,EmployeeDto.class)).collect(Collectors.toList());
         // throw new ResourceNotFoundException("You are not authorized to view users list . please contact admin team");
    }


}
