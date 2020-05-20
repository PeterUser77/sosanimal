package br.com.slogcorp.ws.rest.service.impl;

import br.com.slogcorp.ws.rest.dto.ProfileUserDTO;
import br.com.slogcorp.ws.rest.exception.UserException;
import br.com.slogcorp.ws.rest.model.User;
import br.com.slogcorp.ws.rest.repository.UserRepository;
import br.com.slogcorp.ws.rest.service.AddressService;
import br.com.slogcorp.ws.rest.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Optional;

import static br.com.slogcorp.ws.rest.util.DocumentUtils.isValidCPF;
import static br.com.slogcorp.ws.rest.util.EmailUtils.isValidEmailAddress;

@Service
public class UserServiceImpl implements UserService {

    private final AddressService addressService;
    private final UserRepository userRepository;

    public UserServiceImpl(final AddressService addressService,
                           final UserRepository userRepository) {
        this.addressService = addressService;
        this.userRepository = userRepository;
    }

    @Override
    public void create(User user) throws UserException{
        validateUser(user);
        user.setAddress(addressService.save(user.getAddress()));
        user.setPassword(user.getPassword());
        userRepository.save(user);
    }

    @Override
    public void updateTokenByCdUser(String token, Integer cdUser) {
        userRepository.updateTokenByCdUser(token, cdUser);
    }

    private void validateUser(User user) throws UserException{

        if (!isValidCPF(user.getDocument())) {
            throw new UserException("CPF Inválido!");
        }
        if (!isValidEmailAddress(user.getEmail())) {
            throw new UserException("E-mail inválido!");
        }
        if(emailExists(user.getEmail())){
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

    @Override
    public ResponseEntity<ProfileUserDTO> findByCdUser(Integer cdUser) {
        Optional<User> user = userRepository.findById(cdUser);
        return ResponseEntity.ok(ProfileUserDTO.builder()
                .firstName(user.get().getFirstName())
                .lastName(user.get().getLastName())
                .birthDate(user.get().getBirthDate())
                .email(user.get().getEmail())
                .phone(user.get().getPhone())
                .document(user.get().getDocument())
                .cep(user.get().getAddress().getCep())
                .state(user.get().getAddress().getState())
                .city(user.get().getAddress().getCity())
                .publicPlace(user.get().getAddress().getPublicPlace())
                .neighborhood(user.get().getAddress().getNeighborhood())
                .complement(user.get().getAddress().getComplement())
                .number(user.get().getAddress().getNumber()).build());
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
