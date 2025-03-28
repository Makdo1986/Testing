*** Variables ***
# Definition des capabilities pour l'APK calculator
${REMOTE_URL_CALCULATOR}           http://127.0.0.1:4723
${PLATFORM_NAME_CALCULATOR}        Android
${PLATFORM_VERSION_CALCULATOR}     15
${DEVICE_NAME_CALCULATOR}          emulator-5554
${APP_PACKAGE_CALCULATOR}          com.google.android.calculator
${APP_ACTIVITY_CALCULATOR}         com.android.calculator2.Calculator
${AUTOMATION_NAME_CALCULATOR}      UiAutomator2

# Definition des capabilities pour l'APK API Demo
${REMOTE_URL_API}           http://127.0.0.1:4723
${PLATFORM_NAME_API}            Android
${PLATFORM_VERSION_API}         16
${DEVICE_NAME_API}              emulator-5554
${APP_PACKAGE_API}              io.appium.android.apis
${APP_ACTIVITY_API}             .ApiDemos
${AUTOMATION_NAME_API}          UiAutomator2
