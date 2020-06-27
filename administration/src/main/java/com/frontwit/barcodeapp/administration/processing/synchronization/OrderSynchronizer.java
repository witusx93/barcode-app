package com.frontwit.barcodeapp.administration.processing.synchronization;

import com.frontwit.barcodeapp.administration.processing.front.model.FrontNotFound;
import com.frontwit.barcodeapp.administration.processing.front.model.FrontRepository;
import com.frontwit.barcodeapp.administration.processing.order.model.OrderRepository;
import com.frontwit.barcodeapp.administration.processing.shared.CustomerId;
import com.frontwit.barcodeapp.administration.processing.shared.OrderId;
import com.frontwit.barcodeapp.administration.processing.shared.events.DomainEvents;
import com.frontwit.barcodeapp.administration.statistics.domain.OrderPlaced;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.event.EventListener;

import java.time.Instant;

import static java.lang.String.format;

@AllArgsConstructor
public class OrderSynchronizer {
    private static final Logger LOGGER = LoggerFactory.getLogger(OrderSynchronizer.class);

    private SourceRepository sourceRepository;
    private FrontRepository frontRepository;
    private OrderRepository orderRepository;
    private OrderMapper orderMapper;
    private DomainEvents domainEvents;
    private SynchronizationRepository synchronizationRepository;

    @EventListener
    public void synchronize(FrontNotFound event) {
        if (orderRepository.isNotSynchronized(event.getOrderId())) {
            sourceRepository.findBy(event.getOrderId())
                    .ifPresentOrElse(
                            order -> {
                                var dictionary = sourceRepository.getDictionary();
                                var result = saveOrderWithFronts(order, dictionary);
                                var meters = MetersCalculator.calculate(result.getFronts());
                                domainEvents.publish(
                                        new FrontSynchronized(event.getBarcode(), event.getStage(), event.getDateTime()),
                                        new OrderPlaced(new CustomerId(order.getCustomerId()), meters, Instant.now(), result.getInfo().getType())
                                );
                            },
                            () -> LOGGER.warn("Order not found {}", event.getOrderId()));
        }
    }

    public long synchronize() {
        var lastSyncDate = synchronizationRepository.getLastSynchronizationDate();
        var dictionary = sourceRepository.getDictionary();
        long count = sourceRepository.findByDateBetween(lastSyncDate)
                .stream()
                .filter(sourceOrder -> orderRepository.isNotSynchronized(new OrderId(sourceOrder.getId())))
                .peek(sourceOrder -> saveOrderWithFronts(sourceOrder, dictionary))
                .count();
        synchronizationRepository.updateSyncDate();
        LOGGER.debug(format("Synchronized {date= %s, orders=%s}", lastSyncDate, count));
        return count;
    }

    private TargetOrder saveOrderWithFronts(SourceOrder sourceOrder, Dictionary dictionary) {
        var targetOrder = orderMapper.map(sourceOrder, dictionary);
        orderRepository.save(targetOrder);
        frontRepository.save(targetOrder.getFronts());
        LOGGER.info("OrderSynchronized {id={}, customer={}, frontsNr={}}", targetOrder.getOrderId().getId(), targetOrder.getCustomerId(), targetOrder.getFronts().size());
        return targetOrder;
    }
}
