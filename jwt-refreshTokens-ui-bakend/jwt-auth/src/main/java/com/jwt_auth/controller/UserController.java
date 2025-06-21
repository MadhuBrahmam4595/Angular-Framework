package com.jwt_auth.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @GetMapping("/profile")
    public ResponseEntity<Map<String, String>> getProfile() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "This is a privated profile");
        return ResponseEntity.ok(response);
    }

}
