//
//  GetData.m
//  IOS_ReactNative_communication
//
//  Created by TTN on 15/02/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "GetData.h"
@implementation GetData

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(replaceString:(NSString *)input callback:(RCTResponseSenderBlock)callback)
{
  callback(@[[input stringByReplacingOccurrencesOfString:@"First" withString:@"Second"]]);
}
@end