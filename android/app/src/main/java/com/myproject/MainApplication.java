package com.myproject;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import org.lovebing.reactnative.baidumap.BaiduMapPackage;
import com.theweflex.react.WeChatPackage;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;  // <--- Import Package

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new RCTCameraPackage(),
                new BaiduMapPackage(getApplicationContext()),
                new WeChatPackage(),
                new ReactNativePushNotificationPackage() // <---- Add the Package
            );
        }
    };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
