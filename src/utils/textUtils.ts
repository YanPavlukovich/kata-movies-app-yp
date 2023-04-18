import { truncate } from 'lodash';

export const truncateText = (text: string, maxLength: number): string => {
  return truncate(text, { length: maxLength, separator: ' ' });
};
