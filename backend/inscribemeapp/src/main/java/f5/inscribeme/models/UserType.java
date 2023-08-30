package f5.inscribeme.models;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="permissions")
@Data
public class UserType {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id_userType;

    @Column(name="type")
    public String type;

    @ManyToMany(mappedBy = "userTypes")
    public List<User> users;


}
