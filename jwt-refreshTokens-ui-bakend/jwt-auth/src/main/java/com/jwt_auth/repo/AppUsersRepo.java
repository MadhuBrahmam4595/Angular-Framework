package com.jwt_auth.repo;

import com.jwt_auth.entity.AppUsers;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AppUsersRepo extends JpaRepository<AppUsers, Long> {
    Optional<AppUsers> findByUsername(String username);
}
