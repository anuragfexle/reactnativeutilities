# reactnative_utilities | javascript_utilities | typescript_utilities

```AsyncStorage.tsx```

This library provides generic React Native functions for working with AsyncStorage. Instead of importing and managing AsyncStorage directly in each file and handling keys manually, you can use the functions provided in this module for a more streamlined approach.

**The module includes functions for:**
1. Storing Data: Save data in AsyncStorage.
2. Retrieving Data: Retrieve data as a string or JSON.
3. Clearing Data: Clear all data from AsyncStorage.

By using these functions, you can simplify your code and maintain consistency across your application.

***

```DateTimeUtility.js```

This library provides a set of generic JavaScript functions for handling complex date and time operations. Instead of writing custom code for each date or time task, you can use these functions for common date and time manipulations.

Available functions include:

```
getDate: Get the current date.
getTime: Get the current time.
getDateTime: Get the current date and time.
getMonthName: Get the name of the current month.
getMonthYear: Get the current month and year.
getUtcString: Get the current date and time in UTC format.
getUTCTime: Get the current time in UTC.
getUTCDate: Get the current date in UTC.
getTimeIn24HourFormat: Get the current time in 24-hour format.
getDifferenceInDays: Calculate the difference in days between two dates.
getDifferenceInHours: Calculate the difference in hours between two dates.
getDifferenceInMinutes: Calculate the difference in minutes between two dates.
getDifferenceInSeconds: Calculate the difference in seconds between two dates.
convertUTCDateToLocalDate: Convert a UTC date to the local date.
formatDate: Format a date into a specified string format.
getLocalString: Get the current date and time as a local string.
```


These functions simplify working with dates and times, making it easier to perform complex date and time operations in your JavaScript projects.

***

```Marquee.tsx```

A React Native component for creating scrolling marquee text using the Animated library. The component allows you to customize the spacing between the start and end of the text and control the scrolling speed.

Example usage:

```<Marquee spacing={100} speed={0.5} />```

**spacing: Controls the distance between the end of the text and the start of the text as it repeats.**

**speed: Adjusts how quickly the text scrolls.**


***


```Utils.js```

This library offers a set of generic JavaScript and React Native functions for a variety of common tasks. Instead of writing repetitive code, you can simply call these pre-built functions to handle validation, time durations, integer operations, regex tasks, and more.

Available Functions:
```
isEmptyObject: Checks if an object is empty.
isEmpty: Determines if a value is empty.
isEmptyValue: Checks if a value is considered empty or not.
getFileExtension: Extracts the file extension from a filename.
emailValidation: Validates email addresses.
getFileName: Retrieves the file name from a file path.
capitalize: Capitalizes the first letter of a string.
capitalizeName: Capitalizes the first letter of each part of a name.
callNumber: Initiates a phone call to a specified number.
isOnlyIntegers: Checks if a value contains only integer values.
timeDuration: Formats or calculates time durations.
```

Usage
Copy this file in your project.

```import { isEmptyObject, emailValidation, capitalize } from 'path-to-your-file';

// Example usage
const isEmpty = isEmptyObject({}); // true
const emailIsValid = emailValidation('example@example.com'); // true or false
const capitalizedText = capitalize('hello world'); // 'Hello world'
```
***

some common files and functions used in almost every project of Javascript / Typescript / React JS / React Native / Node / Angular / Vue / Next or any javascript. 


