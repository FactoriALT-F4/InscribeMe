package f5.inscribeme.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import f5.inscribeme.models.User;
import f5.inscribeme.repositories.UserRepo;

@Service
public class UserService {
    
    @Autowired
    UserRepo repo;

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

    public User addUser(User user){
        return repo.save(user);
    }

    public User updateUser(User user){
        return repo.save(user);
    }
    public void deleteUser(User user){
        repo.delete(user);
    }

}
