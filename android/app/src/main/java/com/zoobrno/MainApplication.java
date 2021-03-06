package com.zoobrno;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.reactnativecomponent.splashscreen.RCTSplashScreenPackage;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.eguma.barcodescanner.BarcodeScannerPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

import com.reactnativecomponent.splashscreen.RCTSplashScreenPackage;    //import package

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RCTSplashScreenPackage(),
            new ReactNativePushNotificationPackage(),
            new RCTCameraPackage(),
            new BarcodeScannerPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
