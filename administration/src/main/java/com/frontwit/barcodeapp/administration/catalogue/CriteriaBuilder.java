package com.frontwit.barcodeapp.administration.catalogue;

import com.frontwit.barcodeapp.administration.catalogue.dto.OrderSearchCriteria;
import com.frontwit.barcodeapp.administration.infrastructure.db.CustomerEntity;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Set;
import java.util.stream.Collectors;

import static java.lang.Boolean.TRUE;
import static java.lang.String.format;
import static java.util.Objects.nonNull;
import static org.springframework.util.StringUtils.isEmpty;

@Service
@AllArgsConstructor
public class CriteriaBuilder {
    static final String COMPLETED_FIELD = "completed";
    static final String DEADLINE_FIELD = "deadline";
    static final String NAME_FIELD = "name";

    private final MongoTemplate mongoTemplate;

    Criteria build(OrderSearchCriteria searchCriteria) {
        final var result = new Criteria();
        name(searchCriteria, result);
        customer(searchCriteria, result);
        completed(searchCriteria, result);
        packed(searchCriteria, result);
        stage(searchCriteria, result);
        route(searchCriteria, result);
        lastProcessedOn(searchCriteria, result);
        orderedAt(searchCriteria, result);
        return result;
    }

    private void name(OrderSearchCriteria searchCriteria, Criteria result) {
        if (isNotEmpty(searchCriteria.getName())) {
            addRegex(NAME_FIELD, searchCriteria.getName(), result);
        }
    }

    private void customer(OrderSearchCriteria searchCriteria, Criteria result) {
        if (isNotEmpty(searchCriteria.getCustomer())) {
            Criteria criteria = new Criteria();
            addRegex(NAME_FIELD, searchCriteria.getCustomer(), criteria);
            Set<Long> ids = mongoTemplate.find(new Query(criteria), CustomerEntity.class).stream()
                    .map(CustomerEntity::getId)
                    .collect(Collectors.toSet());
            result.and("customerId").in(ids);
        }
    }

    private void completed(OrderSearchCriteria searchCriteria, Criteria result) {
        if (TRUE.equals(searchCriteria.getCompleted())) {
            result.and(COMPLETED_FIELD).is(true);
        } else {
            result.and(COMPLETED_FIELD).is(false);
        }
    }

    private void packed(OrderSearchCriteria searchCriteria, Criteria result) {
        if (TRUE.equals(searchCriteria.getPacked())) {
            result.and("packed").is(true);
        }
    }

    private void stage(OrderSearchCriteria searchCriteria, Criteria result) {
        if (nonNull(searchCriteria.getStage())) {
            result.and("stage").is(searchCriteria.getStage());
        }
    }

    private void route(OrderSearchCriteria searchCriteria, Criteria result) {
        if (isNotEmpty(searchCriteria.getRoute())) {
            addRegex("route", searchCriteria.getRoute(), result);
        }
    }

    private void lastProcessedOn(OrderSearchCriteria searchCriteria, Criteria result) {
        if (nonNull(searchCriteria.getProcessingDate())) {
            LocalDateTime startOfDay = searchCriteria.getProcessingDate().atStartOfDay();
            result.and("lastProcessedOn")
                    .gte(startOfDay)
                    .lt(startOfDay.plusDays(1));
        }
    }

    private void orderedAt(OrderSearchCriteria searchCriteria, Criteria result) {
        if (nonNull(searchCriteria.getOrderedAt())) {
            LocalDateTime startOfDay = searchCriteria.getOrderedAt().atStartOfDay();
            result.and("orderedAt")
                    .gte(startOfDay)
                    .lt(startOfDay.plusDays(1));
        }
    }

    private static void addRegex(String field, String value, Criteria result) {
        result.and(field).regex(format("%s", value), "i");
    }

    private static boolean isNotEmpty(String arg) {
        return !isEmpty(arg);
    }
}
