package com.example.login.controller;

import com.example.login.dto.UserSignupRequest;
import com.example.login.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserSignUpController {
    @Autowired
    private UserService userService;
    @PostMapping("/api/signup")
    public ResponseEntity<String> signUp(@RequestBody UserSignupRequest signupRequest) {
        try{

            userService.signUp(signupRequest.getUsername(),signupRequest.getPassword());
            return ResponseEntity.status(HttpStatus.CREATED).body("User signed up successfully");
        }catch(IllegalArgumentException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
