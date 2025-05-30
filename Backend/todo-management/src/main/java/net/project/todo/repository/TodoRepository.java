package net.project.todo.repository;

import net.project.todo.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {


        boolean existsByTitle(String title);


}
