// @flow

export type SelectOptionValueProp = string | number | null;

export type SelectOptionProp = {
    displayText: string,
    hasWarning?: boolean,
    id?: string | number,
    isExternalUser?: boolean,
    value: SelectOptionValueProp,
};
