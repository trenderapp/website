import axios from "axios";
import { apibaseurl } from "./constante";
import { formatDate } from "./dayjs";

export const PATTERN_NAME = /[a-z ,.'-]+/;
export const PATTERN_DOB = /\d{1,2}\/\d{1,2}\/\d{4}/;
export const PATTERN_EMAIL = /\S+@\S+\.\S+/;
export const PATTERN_PASSWORD = /[a-z0-9]{8,}/;
export const PATTERN_PHONE = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
export const PATTERN_SMS_CODE = /\d{4}/;
export const PATTERN_CARD_NUMBER = /\d{4} \d{4} \d{4} \d{4}/;
export const PATTERN_CARD_EXPIRE_DATE = /\d{2}\/\d{2}/;
export const PATTERN_CARD_CVV = /\d{3}/;
export const PATTERN_FULLNAME = /^$|^[a-zA-ZčČćĆđĐšŠžŽ-]+ [a-zA-ZčČćĆđĐšŠžŽ-]+$/;

export const classNames = (styles: Array<string | undefined>) => styles.join(" ")

export const convertFirstCharacterToUppercase = (stringToConvert: string) => {
  var firstCharacter = stringToConvert.substring(0, 1);
  var restString = stringToConvert.substring(1);

  return firstCharacter.toUpperCase() + restString;
}

export const messageFormatDate = (date: Date | string) => new formatDate(date);

export const subscriptionCurrencyArray = [
  {
    symbol: "€",
    name: "eur"
  },
  {
    symbol: "$",
    name: "usd"
  }
]

/**
 * 
 * @param {Array} arr 
 * @param {Number} toIndex 
 * @param {Number} fromIndex 
 * @returns 
 */
export const changeElementPlaceArray = (arr: Array<any>, toIndex: number, fromIndex: number) => {

  const element = arr.splice(fromIndex, 1)[0];

  arr.splice(toIndex, 0, element);
  
  return arr;
}

export const axiosInstance = axios.create({
  baseURL: apibaseurl,
  validateStatus: s => s < 501,
});

export const cguLink = (language: string) => {
  let lang = "https://cdn.trenderapp.com/assets/legal/T&S.pdf"
  if(language === "fr") lang = "https://cdn2.trenderapp.com/assets/legal/CGU.pdf"
  return lang;
}

export const cgvLink = (language: string) => {
  let lang = "https://cdn.trenderapp.com/assets/legal/TOS.pdf"
  if(language === "fr") lang = "https://cdn2.trenderapp.com/assets/legal/CGV.pdf"
  return lang;
}

/**
 * 
 * @param {String} url 
 * @returns {Array<String>}
 */
export const parseURL = (url: string) => {
    if(!url) return false;

    let link = [""];
    if(url.startsWith("https://www.trenderapp.com")) link = url.split("https://www.trenderapp.com");
    else if(url.startsWith("https://trenderapp.com")) link = url.split("https://trenderapp.com");
    else if(url.startsWith("http://www.trenderapp.com")) link = url.split("http://www.trenderapp.com");
    else if(url.startsWith("http://trenderapp.com")) link = url.split("http://trenderapp.com");
    
    return link.slice(1);
}

export const NameValidator = (value: string) => {
  return RegExpValidator(PATTERN_NAME, value);
};

export const DOBValidator = (value: string) => {
  return RegExpValidator(PATTERN_DOB, value);
};

export const EmailValidator = (value: string) => {
  return RegExpValidator(PATTERN_EMAIL, value);
};

export const PasswordValidator = (value: string) => {
  return RegExpValidator(PATTERN_PASSWORD, value);
};

export const PhoneNumberValidator = (value: string) => {
  return RegExpValidator(PATTERN_PHONE, value);
};

export const SMSCodeValidator = (value: string) => {
  return RegExpValidator(PATTERN_SMS_CODE, value);
};

export const CardNumberValidator = (value: string) => {
  return RegExpValidator(PATTERN_CARD_NUMBER, value);
};

export const ExpirationDateValidator = (value: string) => {
  return RegExpValidator(PATTERN_CARD_EXPIRE_DATE, value);
};

export const CvvValidator = (value: string) => {
  return RegExpValidator(PATTERN_CARD_CVV, value);
};

export const CardholderNameValidator = (value: string) => {
  return RegExpValidator(PATTERN_FULLNAME, value);
};

export const StringValidator = (value: string) => {
  return !!value && value.length > 0;
};

const RegExpValidator = (regexp: RegExp, value: string) => {
  return regexp.test(value);
};
