import {NativeModules, PermissionsAndroid} from 'react-native'

const permissionTypes = {
  location: PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  camera: PermissionsAndroid.PERMISSIONS.CAMERA,
  microphone: PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  contacts: PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
  event: PermissionsAndroid.PERMISSIONS.READ_CALENDAR,
  storage: PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  photo: PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  callPhone: PermissionsAndroid.PERMISSIONS.CALL_PHONE,
  readSms: PermissionsAndroid.PERMISSIONS.READ_SMS,
  receiveSms: PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
}

const { RNAndroidOpenSettings } = NativeModules

const generalSettings = () => RNAndroidOpenSettings.generalSettings()

const homeSettings = () => RNAndroidOpenSettings.homeSettings()

const appDetailsSettings = (permission) => {
  return new Promise((resolve, reject)=> {
    RNAndroidOpenSettings.appDetailsSettings(permissionTypes[permission])
        .then(() => {
          return resolve('authorized');
        })
        .catch(() => {
          return reject();
        })
  });
}

const wifiSettings = () => RNAndroidOpenSettings.wifiSettings()

const locationSourceSettings = () => RNAndroidOpenSettings.locationSourceSettings()

const wirelessSettings = () => RNAndroidOpenSettings.wirelessSettings()

const airplaneModeSettings = () => RNAndroidOpenSettings.airplaneModeSettings()

const apnSettings = () => RNAndroidOpenSettings.apnSettings()

const bluetoothSettings = () => RNAndroidOpenSettings.bluetoothSettings()

const dateSettings = () => RNAndroidOpenSettings.dateSettings()

const localeSettings = () => RNAndroidOpenSettings.localeSettings()

const inputMethodSettings = () => RNAndroidOpenSettings.inputMethodSettings()

const displaySettings = () => RNAndroidOpenSettings.displaySettings()

const securitySettings = () => RNAndroidOpenSettings.securitySettings()

const internalStorageSettings = () => RNAndroidOpenSettings.internalStorageSettings()

const memoryCardSettings = () => RNAndroidOpenSettings.memoryCardSettings()

const accessibilitySettings = () => RNAndroidOpenSettings.accessibilitySettings()

const applicationSettings = () => RNAndroidOpenSettings.applicationSettings()

const deviceInfoSettings = () => RNAndroidOpenSettings.deviceInfoSettings()

const appNotificationSettings = () => RNAndroidOpenSettings.appNotificationSettings()

module.exports = {
  generalSettings,
  homeSettings,
  appDetailsSettings,
  wifiSettings,
  locationSourceSettings,
  wirelessSettings,
  airplaneModeSettings,
  apnSettings,
  bluetoothSettings,
  dateSettings,
  localeSettings,
  inputMethodSettings,
  displaySettings,
  securitySettings,
  internalStorageSettings,
  memoryCardSettings,
  accessibilitySettings,
  applicationSettings,
  deviceInfoSettings,
  appNotificationSettings,
}
