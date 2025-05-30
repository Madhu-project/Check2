package net.project.todo.exception;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;
import java.util.*;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleResourceNotFound(ResourceNotFoundException ex, WebRequest request) {
        ErrorResponse error = new ErrorResponse(
                LocalDateTime.now(),
                ex.getMessage(),
                "USERS_01",  // custom error code
                request.getDescription(false).replace("uri=", "")
        );
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(TaskAlreadyExistsException.class)
    public ResponseEntity<ErrorResponse> handleTaskExists(TaskAlreadyExistsException ex, WebRequest request) {
        ErrorResponse error = new ErrorResponse(
                LocalDateTime.now(),
                "Task Title already Exists",
                "ERR_409_TASK_EXISTS", // custom error code
                request.getDescription(false).replace("uri=", "")
        );
        return new ResponseEntity<>(error, HttpStatus.CONFLICT);
    }


//    @ExceptionHandler(ResourceNotFoundException.class)
//    public ResponseEntity<?> handleResourceNotFound(ResourceNotFoundException ex, WebRequest request) {
//        Map<String, Object> errorDetails = new LinkedHashMap<>();
//        errorDetails.put("timestamp", LocalDateTime.now());
//        errorDetails.put("status", HttpStatus.NOT_FOUND.value());
//        errorDetails.put("error", "Not Found");
//        errorDetails.put("message", ex.getMessage());
//        errorDetails.put("path", request.getDescription(false).replace("uri=", ""));
//        return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
//    }
//
//    @ExceptionHandler(TaskAlreadyExistsException.class)
//    public ResponseEntity<Map<String, String>> handleGeneralException(Exception ex) {
//        Map<String, String> response = new HashMap<>();
//        response.put("status", "failure");
//        response.put("statusMessage", "Task Title already Exists");
//        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
//    }

}
