void setup() {
  // put your setup code here, to run once:
Serial.begin(9600);
//Serial.println(',');

}

void loop() {
  // put your main code here, to run repeatedly:
  int adc = analogRead(A0);
  Serial.println(adc);
 //Serial.println(',');
  delay(200);
}
