package com.example.login.utils;

import com.example.login.dto.UserLoginRequest;
import com.example.login.model.User;

public class UserMapper {
    public static User mapUserLoginRequestToUser(UserLoginRequest userLoginRequest) {
        User user = new User();
        user.setUsername(userLoginRequest.getUsername());
        user.setPassword(userLoginRequest.getPassword());
        return user;
    }
}

