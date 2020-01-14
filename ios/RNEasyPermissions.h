
#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif

#import "SPPermissions/SPPermissions-Swift.h"

@interface RNEasyPermissions : NSObject <RCTBridgeModule, SPPermissionsDelegate>

@end
  
