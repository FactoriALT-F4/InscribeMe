package f5.inscribeme.models;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="user_profile")
@Data
public class Profile {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long idprofile;

    @Column(name="name")
    public String name;
    @Column(name="lastname")
    public String lastname;

    @OneToOne(mappedBy = "profile")
    public User user;

    @OneToMany(mappedBy = "profileEve")
    public List<ProfileEvents> profileEvents;

    public Long getIdprofile() {
        return idprofile;
    }

    public void setIdprofile(Long idprofile) {
        this.idprofile = idprofile;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<ProfileEvents> getProfileEvents() {
        return profileEvents;
    }

    public void setProfileEvents(List<ProfileEvents> profileEvents) {
        this.profileEvents = profileEvents;
    }
}
