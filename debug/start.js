var lambda = require('../index.js');

var json = { Records:  [ { EventSource: 'aws:sns', EventVersion: '1.0', EventSubscriptionArn: 'arn:aws:sns:eu-west-1:Cloudwatch', Sns:  { Type: 'Notification', MessageId: '2a174fa5-e9cd-57cf-ab08-0216f222b1cf445', TopicArn: 'arn:aws:sns:eu-west-1:Cloudwatch', Subject: 'ALARM: "awsec2-i-000000-CPU-Utilization" in EU - Ireland', Message: '{"AlarmName":"awsec2-i-000000-CPU-Utilization","AlarmDescription":"Created from EC2 Console","AWSAccountId":"1234567890","NewStateValue":"ALARM","NewStateReason":"Threshold Crossed: 1 datapoint (7.33) was greater than or equal to the threshold (4.0).","StateChangeTime":"2015-04-23T15:32:33.623+0000","Region":"EU - Ireland","OldStateValue":"OK","Trigger":{"MetricName":"CPUUtilization","Namespace":"AWS/EC2","Statistic":"AVERAGE","Unit":"null","Dimensions":[{"name":"InstanceId","value":"i-000000"}],"Period":60,"EvaluationPeriods":1,"ComparisonOperator":"GreaterThanOrEqualToThreshold","Threshold":4.0}}', Timestamp: '2015-04-23T15:32:33.675Z', SignatureVersion: '1', Signature: 'pdiwz/mNSdZbKipMdQjmxUgfAmKz8HGLKV72eVUZZnGThNc7iN+tSjGHhygYnnkLaUlq4Ri79oA2kew5Ww2BKjOavYv1', SigningCertUrl: 'https://sns.eu-west-1.amazonaws.com/SimpleNotificationService.pem', UnsubscribeUrl: 'https://sns.eu-west-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:eu-west-1:Cloudwatch' } } ] };

var context = {
  done: function() {
    // no-op
  }
};

lambda.handler(json, context);
