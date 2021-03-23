import { createContext } from 'react';
import { defaultValues } from '../config';

export const ConfigContext = createContext({
	lang: defaultValues.lang,
	dateFormat: defaultValues.dateFormat,
});
