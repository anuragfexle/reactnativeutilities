/** @AsyncStorage no need to import this AsyncStorage everywhere in the project, just put this file and use the functinos */
import AsyncStorage from '@react-native-async-storage/async-storage';

/** @storeData - call this function to store single string in key-value pair. */
export const storeData = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error: any) {
        console.error('AsyncStorage storeData error: ' + error.message);
    }
};

/** @getData - call this function to retrieve the single-value string by its key. */
export const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (error: any) {
        console.error('AsyncStorage getData error: ' + error.message);
    }
};

/** @storeJSONData - call this function to store the array or and object using the key-value pair. */
export const storeJSONData = async (key: string, value: any) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (error: any) {
        console.error('AsyncStorage storeJSONData error: ' + error.message);
    }
};

/** @getJSONData - call this function to retrieve the JSON value (Array or Object) by its key. */
export const getJSONData = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error: any) {
        console.error('AsyncStorage getJSONData error: ' + error.message);
    }
};

/** @clearStore - clear the single store by passing its key. */
export const clearStore = async (key: string) => {
    try {
        await AsyncStorage.setItem(key, "");
    } catch (error: any) {
        console.error('AsyncStorage clearStore error: ' + error.message);
    }
};
