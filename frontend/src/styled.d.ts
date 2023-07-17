import 'styled-components';

import { ITheme } from 'src/interfaces/styled';

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends ITheme { }
}

declare module "react" {
    interface DOMAttributes<T> {
        css?: CSSProp;
    }
}