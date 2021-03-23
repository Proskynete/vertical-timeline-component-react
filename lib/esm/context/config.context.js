import { createContext } from 'react';
import { defaultValues } from '../config';
export var ConfigContext = createContext({
    lang: defaultValues.lang,
    dateFormat: defaultValues.dateFormat,
});
