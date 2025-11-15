/* eslint-disable */
// Маппинг React типов на Preact для устранения варнингов
/// <reference types="preact" />

import * as Preact from "preact";
import { JSX } from "preact";

// Глобальное пространство имен React
declare global {
    namespace React {
        type ReactNode = Preact.ComponentChildren;
        type ReactElement = Preact.VNode<any>;
        type ComponentType<P = {}> = Preact.ComponentType<P>;
        type FC<P = {}> = Preact.FunctionComponent<P>;
        type Component<P = {}, S = {}> = Preact.Component<P, S>;
        type PropsWithChildren<P = unknown> = P & { children?: Preact.ComponentChildren };
        type CSSProperties = JSX.CSSProperties;
        type HTMLAttributes<T> = JSX.HTMLAttributes<T>;
        type SVGAttributes<T> = JSX.SVGAttributes<T>;
    }
}

// Маппинг модулей react и react-dom
declare module "react" {
    const React: typeof Preact;
    export = React;
    export as namespace React;
    export * from "preact/compat";
    
    namespace React {
        type ReactNode = Preact.ComponentChildren;
        type ReactElement = Preact.VNode<any>;
        type ComponentType<P = {}> = Preact.ComponentType<P>;
        type FC<P = {}> = Preact.FunctionComponent<P>;
        type Component<P = {}, S = {}> = Preact.Component<P, S>;
    }
}

declare module "react-dom" {
    import * as ReactDOM from "preact/compat";
    export = ReactDOM;
    export as namespace ReactDOM;
    export * from "preact/compat";
}

// Переопределяем JSX.Element на Preact.VNode для совместимости
declare global {
    namespace JSX {
        interface Element extends Preact.VNode<any> {}
        interface ElementClass extends Preact.Component<any, any> {}
        interface IntrinsicElements extends Preact.JSX.IntrinsicElements {}
    }
}

// Переопределяем типы для styled-components
declare module "styled-components" {
    import * as SC from "styled-components";
    export * from "styled-components";
    
    // Переопределяем StyledComponentPropsWithAs чтобы принимать Preact элементы
    export interface StyledComponentPropsWithAs<
        C extends string | React.ComponentType<any>,
        T extends object,
        O extends object = {},
        A extends keyof any = never
    > {
        as?: C | undefined;
        $as?: C | undefined;
        children?: Preact.ComponentChildren;
        [key: string]: any;
    }
    
    // Переопределяем возвращаемый тип styled компонентов
    export interface StyledComponent<
        C extends string | React.ComponentType<any>,
        T extends object,
        O extends object = {},
        A extends keyof any = never
    > extends React.ComponentType<StyledComponentPropsWithAs<C, T, O, A>> {
        withComponent<NewC extends string | React.ComponentType<any>>(
            component: NewC
        ): StyledComponent<NewC, T, O, A>;
    }
}

// Глобальное переопределение Element для совместимости
// Это позволяет использовать Preact VNode там, где ожидается Element
declare global {
    // Переопределяем глобальный Element через интерфейс
    interface Element extends Preact.VNode<any> {}
}
