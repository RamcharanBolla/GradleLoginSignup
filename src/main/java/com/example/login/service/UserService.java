package com.example.login.service;

import com.example.login.model.User;

public interface UserService {
    User login(String username, String password);
    void signUp(String username, String password);
}
