package f5.inscribeme.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import f5.inscribeme.models.SecurityUser;
import f5.inscribeme.repositories.UserRepo;

@Service
public class JpaUserDetailsService implements UserDetailsService {

    UserRepo repo;

    public JpaUserDetailsService(UserRepo repo){
        this.repo = repo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repo.findByMail(username).map(SecurityUser::new).orElseThrow(()-> new UsernameNotFoundException("User not found"+ username));
    }
    
}
