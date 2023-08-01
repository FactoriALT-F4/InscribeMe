package f5.inscribeme.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="profile_events")
@Data
public class ProfileEvents {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    public Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "profile_id")
    @JsonIgnore
    public Profile profileEve;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="events_id")
    @JsonIgnore
    public Events event;

}
