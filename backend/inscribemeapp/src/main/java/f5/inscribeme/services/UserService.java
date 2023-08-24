package f5.inscribeme.services;

import java.util.*;

// import f5.inscribeme.models.Profile;
// import jakarta.annotation.PostConstruct;
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

    public List<User> getAllUsers() {
        return repo.findAll();
    }

    public User getUserById(Long id) {
        Optional<User> opt = repo.findById(id);
        if (opt.isPresent()) {
            return opt.get();
        } else {
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

    public void assignDefaultUserType(User user) throws Throwable {
        UserType defaultType = utService.show(2L);
        Set<UserType> userTypes = new HashSet<>();
        userTypes.add(defaultType);

        user.setUserTypes(userTypes);
    }

    public User updateUser(User user) {
        return repo.save(user);
    }

    public void deleteUser(User user) {
        repo.delete(user);
    }
}
