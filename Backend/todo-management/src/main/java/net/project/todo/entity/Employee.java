package net.project.todo.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employeelist")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employeeId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String emailId;

    @Column(nullable = false)
    private String companyName;

    @Column(nullable = false)
    private String employeeLocation;
}
