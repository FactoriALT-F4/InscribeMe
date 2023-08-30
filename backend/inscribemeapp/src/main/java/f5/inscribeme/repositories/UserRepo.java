package f5.inscribeme.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import f5.inscribeme.models.User;
import java.util.Optional;


public interface UserRepo extends JpaRepository<User, Long>{
    
    Optional<User> findByMail(String mail);

}
