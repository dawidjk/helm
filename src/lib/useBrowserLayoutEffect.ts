import {useEffect, useLayoutEffect} from 'react';

/** Keep static rendering inert while finishing client restoration before paint. */
export const useBrowserLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;
