package f5.inscribeme.services;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

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

    public User addUser(User user) throws Throwable{
        BCryptPasswordEncoder pwEncoder = new BCryptPasswordEncoder();
        String encodedPw = pwEncoder.encode(user.getPassword());
        user.setPassword(encodedPw);

        this.assignDefaultUserType(user);
        
        return repo.save(user);
    }

    public void assignDefaultUserType(User user) throws Throwable{
        UserType defaultType = utService.show(1L);
        Set<UserType> userTypes = new HashSet<>();
        userTypes.add(defaultType);
    }

    public User updateUser(User user){
        return repo.save(user);
    }
    public void deleteUser(User user){
        repo.delete(user);
    }

}
