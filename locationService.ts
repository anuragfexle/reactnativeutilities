// locationService.ts
import { Alert, PermissionsAndroid, Platform } from "react-native";
import Geolocation from 'react-native-geolocation-service';
import DeviceInfo from "react-native-device-info";

const requestLocationPermission = async () => {
  let retrunType: boolean = false;
  if (Platform.OS === "android") {
    try {
      const result = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ]);

      let deviceVersion = DeviceInfo.getSystemVersion();
      if (parseInt(deviceVersion) >= 13) {
        retrunType = true;
      } else {
        if (
          result["android.permission.ACCESS_FINE_LOCATION"] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          result["android.permission.ACCESS_COARSE_LOCATION"] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          retrunType = true;
        } else {
          retrunType = false;
        }
      }
    } catch (err) {
      console.log("err", err);
      retrunType = false;
    }

    return retrunType;
  } else {
    return true;
  }
};

export const getCoordinates = async () => {
  const hasPermission = await requestLocationPermission();
  if (!hasPermission) {
    return { error: 'PERMISSION_DENIED' };
  }

  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(" position.coords == .", position.coords)
        resolve({ coords: position.coords });
      },
      (error) => {
        let errorMessage = '';
        switch (error.code) {
          case 1:
            errorMessage = 'PERMISSION_DENIED';
            break;
          case 2:
            errorMessage = 'POSITION_UNAVAILABLE';
            break;
          case 3:
            errorMessage = 'TIMEOUT';
            break;
          default:
            errorMessage = 'UNKNOWN_ERROR';
            break;
        }
        reject({ error: errorMessage });
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  });

};
