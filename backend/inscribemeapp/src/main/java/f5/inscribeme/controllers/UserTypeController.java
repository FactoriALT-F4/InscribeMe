package f5.inscribeme.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import f5.inscribeme.models.UserType;
import f5.inscribeme.services.UserTypeService;

@RestController
@RequestMapping("/permissions")
public class UserTypeController {
    
    @Autowired
    UserTypeService service;

    @GetMapping
    public List<UserType> getAllUserTypes(){
        return service.getUserTypes();
    }

    @GetMapping("/{id}")
    public UserType getUserTypeById(@PathVariable Long id){
        return service.getUserTypeById(id);
    }


}
