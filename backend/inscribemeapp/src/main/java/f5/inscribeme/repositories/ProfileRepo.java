package f5.inscribeme.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import f5.inscribeme.models.Profile;

public interface ProfileRepo extends JpaRepository<Profile, Long> {

}
