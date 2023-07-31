package f5.inscribeme.models;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "events")
@Data
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long idevents;

    @Column(name = "name")
    public String name;

    @Column(name = "description")
    public String description;

    @Column(name = "starting_date")
    public Date startingDate;

    @Column(name = "end_date")
    public Date enDate;

    @Column(name="creation_date", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp creationDate;

    @Column(name = "max_people")
    public Long maxPeople;

    @Column(name = "imgUrl")
    public String imgUrl;

    @OneToMany(mappedBy="event")
    public List<ProfileEvents> profileEvent;
    

}
