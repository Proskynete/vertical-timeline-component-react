import { createContext } from 'react';
import { defaultValues } from '../config';
import { DefaultValues } from '../interfaces';

export const ConfigContext = createContext<DefaultValues>(defaultValues);
