package f5.inscribeme.models;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "events")
@NoArgsConstructor

public class Events {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long idevents;

    @Column(name = "name")
    public String name;

    @Column(name = "description", columnDefinition = "VARCHAR(3000)")
    public String description;

    @Column(name = "starting_date")
    public LocalDateTime startingDate;

    @Column(name = "end_date")
    public LocalDateTime enDate;

    @Column(name = "creation_date")
    private LocalDateTime creationDate;

   /* @Column(name="creation_date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm:ss")
    private LocalDateTime creationDate; */

    @Column(name = "ins_people")
    public Long insPeople;

    @Column(name = "max_people")
    public Long maxPeople;

    @Column(name = "imgUrl")
    public String imgUrl;

    @OneToMany(mappedBy = "event")
    private List<ProfileEvents> profileEvents;

    public Events(String name, String description, LocalDateTime startingDate, LocalDateTime endDate, LocalDateTime creationDate, long insPeople, long maxPeople, String imgUrl) {
        this.name = name;
        this.description = description;
        this.startingDate = startingDate;
        this.enDate = endDate;
        this.creationDate = creationDate;
        this.insPeople = insPeople;
        this.maxPeople = maxPeople;
        this.imgUrl = imgUrl;
    }

    public Long getIdevents() {
        return idevents;
    }

    public void setIdevents(Long idevents) {
        this.idevents = idevents;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getStartingDate() {
        return startingDate;
    }

    public void setStartingDate(LocalDateTime startingDate) {
        this.startingDate = startingDate;
    }

    public LocalDateTime getEnDate() {
        return enDate;
    }

    public void setEnDate(LocalDateTime enDate) {
        this.enDate = enDate;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public Long getInsPeople() {
        return insPeople;
    }

    public void setInsPeople(Long insPeople) {
        this.insPeople = insPeople;
    }

    public Long getMaxPeople() {
        return maxPeople;
    }

    public void setMaxPeople(Long maxPeople) {
        this.maxPeople = maxPeople;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public List<ProfileEvents> getProfileEvents() {
        return profileEvents;
    }

    public void setProfileEvents(List<ProfileEvents> profileEvents) {
        this.profileEvents = profileEvents;
    }
}