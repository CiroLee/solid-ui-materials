/* eslint-disable no-unused-vars */
import type { AttributifyAttributes } from '@unocss/preset-attributify';

declare module 'solid-js' {
  namespace JSX {
    interface HTMLAttributes<T> extends AttributifyAttributes {
      relative?: boolean;
      disabled?: string;
      hover?: string;
    }
  }
}
