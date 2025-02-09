package com.uhbooba.financeservice.service.kafka;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.uhbooba.financeservice.dto.kafka.NotificationMessageResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class KafkaProducerService {

    private final KafkaTemplate<String, String> kafkaTemplate;

    public void sendNotification(
        String topic,
        NotificationMessageResponse data
    ) {
        ObjectMapper mapper = new ObjectMapper();
        String jsonInString = "";

        try {
            jsonInString = mapper.writeValueAsString(data);
        } catch(JsonProcessingException e) {
            throw new RuntimeException(e);
        }

        kafkaTemplate.send(topic, jsonInString);
    }

}
