import { createContext } from 'react';
import { defaultValues } from '../config';
import { DefaultTimelineProps } from '../interfaces';

export const ConfigContext = createContext<DefaultTimelineProps>(defaultValues);
