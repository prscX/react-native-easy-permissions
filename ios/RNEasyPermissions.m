
#import "RNEasyPermissions.h"

@implementation RNEasyPermissions

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

RCTResponseSenderBlock _onDonePermissions = nil;

- (void)didHideWithPermissions:(NSArray<NSNumber *> *)ids {
    if (_onDonePermissions == nil) return;

    _onDonePermissions(@[]);
}

RCT_EXPORT_METHOD(Show:(nonnull NSDictionary *)props onDone:(RCTResponseSenderBlock)onDone) {

    dispatch_async(dispatch_get_main_queue(), ^{
        NSArray *permissions = [props objectForKey: @"permissions"];

        _onDonePermissions = onDone;

        id<UIApplicationDelegate> app = [[UIApplication sharedApplication] delegate];
        UINavigationController *rootViewController = ((UINavigationController*) app.window.rootViewController);

        [SPPermissionBridge showFrom:rootViewController delegate: self type: @"Dialog" permissions: permissions];
    });
}

@end
  
