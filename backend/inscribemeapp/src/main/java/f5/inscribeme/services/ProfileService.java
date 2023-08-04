package f5.inscribeme.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import f5.inscribeme.models.Profile;
import f5.inscribeme.repositories.ProfileRepo;

@Service
public class ProfileService {

    @Autowired
    ProfileRepo repo;

    public Profile addProfile(Profile profile) {
        return repo.save(profile);
    }
}