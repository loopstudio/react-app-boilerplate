export interface AppLocaleType {
  locale: string;
  messages: object;
}

export interface ErrorType {
  message: string;
}

export interface ErrorPropsType {
  hasError: boolean;
  error: ErrorType;
}

export interface Languages {
  en: AppLocaleType;
  es: AppLocaleType;
}

export interface objType {
  addEventListener(type: 'type1', listener: (ev: 1) => any): void;
  removeEventListener(type: 'type1', listener: (ev: 1) => any): void;
}
