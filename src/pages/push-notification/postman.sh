curl --location --request POST 'https://fcm.googleapis.com/fcm/send' \
--header 'Authorization: key=AAAA5f5KiY4:APA91bG2Sn73ltbG5kKaE-YYYZwmDtgAOXWuL_WFxp-eZ2SRxYAv_WZItzCl2PjFXYiuQdaOR3AYn-YgfbCIHWHkqoHN7ciweT4kOyC3psIWEcSO0OeJWjA4ZSQerJywXMFyrZH1fa0i' \
--header 'Content-Type: application/json' \
--data-raw '{
"to":"fi_sAYdsS4KaezlpXeknuq:APA91bGB6KR0rnAY2K31WLFCzHlE1P4nj86jaiQgTrKwZvR9nXai5WG3LVH0mlkwYpVzL6p_u6aruzzi5BN5y9xtcGERYoTBtZkE4ogJMnm8BUKHwWPRD3Z19QKTE9-pp53LGPRGSBJD",
 "notification" : {
  "sound" : "default",
  "body" :  "test body",
  "title" : "test title",
  "content_available" : true,
  "priority" : "high",
 },
 "data" : {
  "sound" : "default",
  "body" :  "test body",
  "title" : "test title",
  "content_available" : true,
  "priority" : "high",
 }
}'