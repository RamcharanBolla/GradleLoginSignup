package com.example.login.dto;

import lombok.Data;

@Data
public class UserLoginRequest {

    private String username;
    private String password;



    // Constructors
    // Getters and setters
    public String getUsername(){
        return this.username;
    }
    public String getPassword(){
        return this.password;
    }

    public void setUsername(String username){
        this.username = username;
    }
    public void setPassword(String password){
        this.password = password;
    }
}


