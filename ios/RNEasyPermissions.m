
#import "RNEasyPermissions.h"

@implementation RNEasyPermissions

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(Show:(nonnull NSDictionary *)props onDone:(RCTResponseSenderBlock)onDone onCancel:(RCTResponseSenderBlock)onCancel) {

    dispatch_async(dispatch_get_main_queue(), ^{
        NSArray *permissions = [props objectForKey: @"permissions"];

        id<UIApplicationDelegate> app = [[UIApplication sharedApplication] delegate];
        UINavigationController *rootViewController = ((UINavigationController*) app.window.rootViewController);

        [SPPermissionBridge showFrom:rootViewController type: @"Dialog" permissions: permissions];
    });
}

@end
  
