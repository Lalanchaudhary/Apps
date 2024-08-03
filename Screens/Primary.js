import React from 'react';
import { View, Button, Platform } from 'react-native';
import SendDirectSms from 'react-native-send-direct-sms';
const SendSMSExample = () => {
const handleSendSMS = () => {
const phoneNumber = '8235570955'; // Replace with recipient's phone number
const message = 'Hello from React Native!'; // Replace with your message
SendDirectSms.sendDirectSms(phoneNumber, message, (completed,
cancelled) => {
if (completed) console.log('SMS sent successfully');
else if (cancelled) console.log('SMS sending cancelled');
}); };
return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<Button title="Send SMS" onPress={handleSendSMS} />
</View>
);};
export default SendSMSExample;