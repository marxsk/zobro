# zobro
ZoBro

Installation guide for iPhone:
  * You will need computer with MacOS X
  * Install XCode from AppStore

Installation guide for Android:
  * Install [Android Studio](https://developer.android.com/studio/install.html)
  * Set ENV variable ANDROID_HOME to SDK (e.g. ~/Library/Android/sdk)
  * Add "$ANDROID_HOME/platform-tools" to PATH variable so 'adb' binary is accessible
  * Android Simulator has to be executed separately:
    * run $ANDROID_HOME/tools/android
    * select 'Tools / Manage AVDs' from menu
    * create and run simulator for given phone

Common part:
  * npm install
  * react-native run-ios or react-native run-android

Known issues:
  * Currently, it is required to run iOS simulator from XCode and then run react-native run-ios
