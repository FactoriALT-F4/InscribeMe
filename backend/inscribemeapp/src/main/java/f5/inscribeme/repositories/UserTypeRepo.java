package f5.inscribeme.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import f5.inscribeme.models.UserType;

public interface UserTypeRepo extends JpaRepository<UserType, Long>{
    
}
