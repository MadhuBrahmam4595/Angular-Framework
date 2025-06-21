package com.jwt_auth.config;

import com.jwt_auth.repo.AppUsersRepo;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.*;
import java.util.Collections;

@Configuration
public class AppUserDetailsServiceConfig {

    @Bean
    public UserDetailsService userDetailsService(AppUsersRepo appUsersRepo) {
        return username -> appUsersRepo.findByUsername(username)
                .map(user -> new org.springframework.security.core.userdetails.User(
                        user.getUsername(), user.getPassword(), Collections.emptyList()))
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}

