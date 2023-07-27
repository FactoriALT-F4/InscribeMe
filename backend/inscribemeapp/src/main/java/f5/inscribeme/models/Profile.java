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

}
