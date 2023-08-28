package f5.inscribeme.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import f5.inscribeme.models.User;
import f5.inscribeme.services.UserService;

@RestController
@RequestMapping("/register")
public class RegisterController {

    UserService service;

    public RegisterController(UserService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<User> addUser(@RequestBody User user) throws Throwable {

        User savedUser = service.addUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }

}
