package com.jwt_auth.service;

import com.jwt_auth.entity.AppUsers;
import com.jwt_auth.jwt.JwtService;
import com.jwt_auth.model.AuthRequest;
import com.jwt_auth.model.AuthResponse;
import com.jwt_auth.repo.AppUsersRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final PasswordEncoder passwordEncoder;
    private final AppUsersRepo appUsersRepo;
    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    public AuthResponse register(AuthRequest authRequest){
        AppUsers user = new AppUsers();
        user.setUsername(authRequest.getUsername());
        user.setPassword(passwordEncoder.encode(authRequest.getPassword()));
        appUsersRepo.save(user);

        String token = jwtService.generateToken(userDetailsService.loadUserByUsername(user.getUsername()));
        String refeshToken = jwtService.generateRefreshToken(userDetailsService.loadUserByUsername(user.getUsername()));
        return new AuthResponse(token, refeshToken);
    }
}
