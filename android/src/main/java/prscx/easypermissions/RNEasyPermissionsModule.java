
package prscx.easypermissions;

import androidx.annotation.NonNull;
import android.Manifest;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;

import pub.devrel.easypermissions.AfterPermissionGranted;
import pub.devrel.easypermissions.EasyPermissions;

public class RNEasyPermissionsModule extends ReactContextBaseJavaModule {
  private static final int RC_SMS_PERM = 122;

  private final ReactApplicationContext reactContext;

  public RNEasyPermissionsModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNEasyPermissions";
  }

  @ReactMethod
  public void Show(final ReadableMap props, final Callback onDone, final Callback onCancel) {
    ReadableArray permissions = props.getArray("permissions");

    String[] requestedPermissions = permissions.toArrayList().toArray(new String[permissions.size()]);

    EasyPermissions.requestPermissions(this.reactContext.getCurrentActivity(), "This app needs access to your sms to read all your great messages.",
            RNEasyPermissionsModule.RC_SMS_PERM, requestedPermissions);
  }
}