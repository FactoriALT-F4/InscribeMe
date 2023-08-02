package f5.inscribeme.services;

import java.util.*;

import f5.inscribeme.models.Profile;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import f5.inscribeme.models.User;
import f5.inscribeme.models.UserType;
import f5.inscribeme.repositories.UserRepo;

@Service
public class UserService {
    
    @Autowired
    UserRepo repo;
    @Autowired
    UserTypeService utService;
    @Autowired
    ProfileService profileService;

    public List<User> getAllUsers(){
        return repo.findAll();
    }
    public User getUserById(Long id){
        Optional<User> opt = repo.findById(id);
        if(opt.isPresent()){
            return opt.get();
        }else{
            return null;
        }
    }

    public User addUser(User user) {
        try {
            BCryptPasswordEncoder pwEncoder = new BCryptPasswordEncoder();
            String encodedPw = pwEncoder.encode(user.getPassword());
            user.setPassword(encodedPw);

            this.assignDefaultUserType(user);

            return repo.save(user);
        } catch (Throwable throwable) {

            throwable.printStackTrace();
            return null;
        }
    }

    public void assignDefaultUserType(User user) throws Throwable{
        UserType defaultType = utService.show(1L);
        Set<UserType> userTypes = new HashSet<>();
        userTypes.add(defaultType);

        user.setUserTypes(userTypes); //Esto lo agregue yo
    }

    public User updateUser(User user){
        return repo.save(user);
    }
    public void deleteUser(User user){
        repo.delete(user);
    }


    @PostConstruct
    public void insertInitialUsers() {
        BCryptPasswordEncoder pwEncoder = new BCryptPasswordEncoder();

        Profile profileAdmin = new Profile();
        profileAdmin.setName("Admin");
        profileAdmin.setLastname("Inscribeme");
        profileService.addProfile(profileAdmin);

        Profile profileUser = new Profile();
        profileUser.setName("User");
        profileUser.setLastname("Inscribeme");
        profileService.addProfile(profileUser);

        User userAdmin = new User();
        userAdmin.setMail("admin@inscribeme.com");
        userAdmin.setPassword(pwEncoder.encode("password1"));
        userAdmin.setProfile(profileAdmin);
        addUser(userAdmin);

        User userUser = new User();
        userUser.setMail("user@inscribeme.com");
        userUser.setPassword(pwEncoder.encode("password2"));
        userUser.setProfile(profileUser);
        addUser(userUser);
    }
}
