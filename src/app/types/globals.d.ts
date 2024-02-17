declare module "*.module.css";
declare module "*.module.scss";

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module "*.svg" {
    import {SVGProps} from "react";
    const content: React.FC<SVGProps<SVGSVGElement>>;
    export default content;
}

declare const __IS_DEV__: boolean;