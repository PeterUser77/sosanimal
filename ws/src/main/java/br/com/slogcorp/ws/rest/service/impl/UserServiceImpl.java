package br.com.slogcorp.ws.rest.service.impl;

import br.com.slogcorp.ws.rest.exception.UserException;
import br.com.slogcorp.ws.rest.model.User;
import br.com.slogcorp.ws.rest.repository.UserRepository;
import br.com.slogcorp.ws.rest.service.AdressService;
import br.com.slogcorp.ws.rest.service.UserService;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Optional;

import static br.com.slogcorp.ws.rest.util.DocumentUtils.isValidCPF;
import static br.com.slogcorp.ws.rest.util.EmailUtils.isValidEmailAddress;

@Service
public class UserServiceImpl implements UserService {

    private AdressService adressService;
    private UserRepository userRepository;

    public UserServiceImpl(AdressService adressService,
                           UserRepository userRepository) {
        this.adressService = adressService;
        this.userRepository = userRepository;
    }

    @Override
    public void create(User user) {
        isValidUser(user);
        user.setAdress(adressService.findOrSave(user.getAdress()));
        user.setPassword(getEncryptoPassword(user.getPassword()));
        userRepository.save(user);
    }

    private void isValidUser(User user) {

        if (!isValidCPF(user.getDocument().toString())) {
            throw new UserException("CPF Inválido!");
        }
        if (!isValidEmailAddress(user.getEmail())) {
            throw new UserException("E-mail inválido!");
        }
        if(!emailExists(user.getEmail())){
            throw new UserException("Este e-mail já esta sendo utilizado por outra conta.");
        }
    }

    private boolean emailExists(String email){
        Optional<User> userTemp = userRepository.findByEmail(email);
        return userTemp.isPresent();
    }

    @Override
    public Optional<User> findByEmailAndPassword(String email, String password) {
        return userRepository.findByEmailAndPassword(email, getEncryptoPassword(password));
    }

    private String getEncryptoPassword(String password) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            md.update(password.getBytes());
            byte[] hashMd5 = md.digest();
            return stringHexa(hashMd5);
        } catch (NoSuchAlgorithmException ex) {
            ex.getMessage();
        }
        return password;
    }

    private String stringHexa(byte[] bytes) {
        StringBuilder s = new StringBuilder();
        for (byte aByte : bytes) {
            int parteAlta = ((aByte >> 4) & 0xf) << 4;
            int parteBaixa = aByte & 0xf;
            if (parteAlta == 0) s.append('0');
            s.append(Integer.toHexString(parteAlta | parteBaixa));
        }
        return s.toString();
    }
}
