package f5.inscribeme.repositories;

import f5.inscribeme.models.Events;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventsRepo extends JpaRepository<Events, Long> {



}
