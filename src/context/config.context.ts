import { createContext } from 'react';
import { DefaultValues, defaultValues } from '../config';

export const ConfigContext = createContext<DefaultValues>(defaultValues);
