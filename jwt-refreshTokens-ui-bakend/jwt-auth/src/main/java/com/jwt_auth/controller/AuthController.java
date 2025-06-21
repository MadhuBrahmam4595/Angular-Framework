package com.jwt_auth.controller;

import com.jwt_auth.jwt.JwtService;
import com.jwt_auth.model.AuthRequest;
import com.jwt_auth.model.AuthResponse;
import com.jwt_auth.model.TokenRequest;
import com.jwt_auth.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final UserDetailsService userDetailsService;
    
    @PostMapping("register")
    public ResponseEntity<AuthResponse> register(@RequestBody AuthRequest authRequest){
        return ResponseEntity.ok(authService.register(authRequest));
    }

    @PostMapping("login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest authRequest){

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
        );
        UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getUsername());
        String token = jwtService.generateToken(userDetails);
        String refreshToken = jwtService.generateRefreshToken(userDetails);

        return ResponseEntity.ok(new AuthResponse(token, refreshToken));
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> getRefreshToken(@RequestBody TokenRequest tokenRequest){
        String refeshToken = tokenRequest.getRefeshToken();
        System.out.println("calling refresh token");
        try{
            String username = jwtService.extractUsername(refeshToken);
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);

            if(!jwtService.isValidToken(refeshToken, userDetails)){
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String token = jwtService.generateToken(userDetails);
            return ResponseEntity.ok(new AuthResponse(token, refeshToken));
        }catch (Exception exception){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

}
