package com.frontwit.barcode.reader;

import com.frontwit.barcode.reader.application.ProcessBarcodeCommand;
import com.frontwit.barcode.reader.barcode.CommandGateway;
import com.frontwit.barcode.reader.infrastructure.listener.BarcodeListener;
import org.jnativehook.keyboard.NativeKeyEvent;
import org.junit.Before;
import org.junit.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.MockitoAnnotations;

import static org.hamcrest.Matchers.is;
import static org.jnativehook.keyboard.NativeKeyEvent.VC_1;
import static org.jnativehook.keyboard.NativeKeyEvent.VC_ENTER;
import static org.junit.Assert.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class KeyboardListenerTest {

    private BarcodeListener sut;
    private CommandGateway mockedCommandGateway;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        mockedCommandGateway = mock(CommandGateway.class);
        sut = new BarcodeListener(mockedCommandGateway);
    }

    @Test
    public void shouldAddNumbersAndFireEventOnEnter() {
        //  given
        NativeKeyEvent event1 = createNativeKeyEvent(VC_1);
        NativeKeyEvent event2 = createNativeKeyEvent(VC_1);
        NativeKeyEvent event3 = createNativeKeyEvent(VC_ENTER);
        //  when
        sut.nativeKeyPressed(event1);
        sut.nativeKeyPressed(event2);
        sut.nativeKeyPressed(event3);
        //  then
        ArgumentCaptor<ProcessBarcodeCommand> argument = ArgumentCaptor.forClass(ProcessBarcodeCommand.class);
        verify(mockedCommandGateway, times(1)).fire(argument.capture());
        ProcessBarcodeCommand command = argument.getValue();
        assertThat(command.getReaderId().toString(), is(NativeKeyEvent.getKeyText(VC_1)));
        assertThat(command.getBarcode().toString(), is(NativeKeyEvent.getKeyText(VC_1)));
    }

    @Test
    public void shouldNotFireEventWhenNoEnter() {
        //  given
        NativeKeyEvent event1 = createNativeKeyEvent(VC_1);
        NativeKeyEvent event2 = createNativeKeyEvent(VC_1);
        //  when
        sut.nativeKeyPressed(event1);
        sut.nativeKeyPressed(event2);
        //  then
        verify(mockedCommandGateway, times(0)).fire(any());
    }

    private NativeKeyEvent createNativeKeyEvent(int keyCode) {
        return new NativeKeyEvent(0, 0, 0, keyCode, '0', 0);
    }

}
