package com.uhbooba.financeservice.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.uhbooba.financeservice.dto.UserHeaderInfo;
import com.uhbooba.financeservice.dto.finapi.response.UserAccountResponse;
import com.uhbooba.financeservice.entity.UserAccount;
import com.uhbooba.financeservice.exception.UserAccountNotFoundException;
import com.uhbooba.financeservice.mapper.UserAccountMapper;
import com.uhbooba.financeservice.repository.UserAccountRepository;
import com.uhbooba.financeservice.service.finapi.FinApiUserAccountService;
import com.uhbooba.financeservice.util.JsonToDtoConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserAccountService {

    private final UserAccountRepository userAccountRepository;

    private final FinApiUserAccountService finApiUserAccountService;
    private final JsonToDtoConverter jsonToDtoConverter;

    private final UserAccountMapper userAccountMapper;

    @Transactional
    public UserAccount checkOrCreateUserAccount(UserHeaderInfo userHeaderInfo) {
        Integer userId = userHeaderInfo.userId();
        UserAccount existedUserAccount = getUserAccountByUserId(userId);
        if(existedUserAccount != null) { // 이미 존재한다면 바로 끝
            return existedUserAccount;
        }

        JsonNode userAccount = finApiUserAccountService.getOrCreateUserAccount(userId)
                                                       .block();
        UserAccountResponse response = jsonToDtoConverter.convertToObject(userAccount,
                                                                          UserAccountResponse.class);

        response.setRealUserId(userId);
        UserAccount entity = userAccountMapper.toEntity(response);
        // 이름 넣기
        entity.setUsername(userHeaderInfo.name());
        return userAccountRepository.save(entity);
    }

    @Transactional(readOnly = true)
    public UserAccount getUserAccountByUserId(Integer userId) {
        return userAccountRepository.findByUserId(userId);
    }

    public UserAccount getUserAccountByUserIdWithException(Integer userId) {
        UserAccount userAccount = userAccountRepository.findByUserId(userId);
        if(userAccount == null) {
            throw new UserAccountNotFoundException();
        }
        return userAccount;
    }

}
