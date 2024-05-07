package com.example.login.service;

// UserService.java

import com.example.login.model.User;
import com.example.login.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    public User login(String username, String password) {
        return userRepository.findByUsernameAndPassword(username, password);

    }

    public void signUp(String username, String password){
        if(userRepository.existsByUsername(username)){
            throw new IllegalArgumentException("Username already exists...");
        }
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);

        userRepository.save(user);
    }
}

