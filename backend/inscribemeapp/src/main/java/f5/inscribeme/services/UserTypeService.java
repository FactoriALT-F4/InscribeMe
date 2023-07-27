package f5.inscribeme.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import f5.inscribeme.models.UserType;
import f5.inscribeme.repositories.UserTypeRepo;

@Service
public class UserTypeService {
    
    @Autowired
    UserTypeRepo repo;

    public List<UserType> getUserTypes(){
        return repo.findAll();
    }

    public UserType getUserTypeById(Long id){
        Optional<UserType> opt = repo.findById(id);
        if(opt.isPresent()){
            return opt.get();
        }else{
            return null;
        }
    }



}