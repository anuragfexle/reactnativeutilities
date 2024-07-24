import React from 'react';
import {Alert, Linking, Platform, Share, View} from 'react-native';

const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
}

const isEmpty = (returnBoolean, val) => {
    if (returnBoolean) {
        return (val === undefined || val === null || val.length <= 0 || val == 'null') ? true : false;
    } else {
        return (val === undefined || val === null || val.length <= 0 || val == 'null') ? 'Not available' : (isNaN(val) ? capitalizeName(val) : val);
    }
};

const isEmptyValue = (val) => {
    return (val === undefined || val === null || val.length <= 0 || val == 'null') ? 'Not available' : (isNaN(val) ? capitalizeName(val) : val);
};

const capitalize = (str) => {
    return str && ( str?.charAt(0).toUpperCase() + str?.slice(1).toLowerCase() );
};

const getFileExtension = (filename) => {
    return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined;
};

const getFileName = (str) => {
    return (/[.]/.exec(str)) ? /[^/]+$/.exec(str)[0] : undefined;
};

const isOnlyIntegers = (str) => {
    return (/^[0-9]+$/).test(str);
}

const emailValidation = (email) => {
    console.log(email);
    if (email !== null) {
        const emailTrimmed = email.trim();
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(emailTrimmed.toLocaleLowerCase());
    } else {
        return false;
    }
};

const formatMobile = (text) => {
    let cleaned = ('' + text).replace(/\D/g, '');
    let match = cleaned.match(/^(91|)?(\d{5})(\d{5})$/);
    if (match) {
        let intlCode = (match[1] ? '+91 ' : ''),
            number = [intlCode,  match[2], " ", match[3]].join('');
        return number;
    }
    return text;
};

const capitalizeName = (name) => {
    if (name != undefined && !name.includes('@'))
        return name.replace(/\b(\w)/g, s => s.toUpperCase());
    else
        return name;
};

const callNumber = phone => {
    console.log('callNumber ----> ', phone);
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
        phoneNumber = `telprompt:${phone}`;
    }
    else {
        phoneNumber = `tel:${phone}`;
    }
    Linking.canOpenURL(phoneNumber)
        .then(supported => {
            if (!supported) {
                Alert.alert('Phone number is not available');
            } else {
                return Linking.openURL(phoneNumber);
            }
        })
        .catch(err => console.log(err));
};


export {
    isEmptyObject,
    isEmpty,
    isEmptyValue,
    getFileExtension,
    emailValidation,
    getFileName,
    capitalize,
    capitalizeName,
    callNumber,
    isOnlyIntegers
}
