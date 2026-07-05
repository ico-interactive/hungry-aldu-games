import { $InputStream } from "@package/java/io";
import { $BiConsumer_ } from "@package/java/util/function";
import { $Component, $FormattedText } from "@package/net/minecraft/network/chat";
import { $List_, $Map, $List } from "@package/java/util";
import { $FormattedCharSequence } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/locale" {
    export class $Language {
        /**
         * Return the StringTranslate singleton instance
         */
        static getInstance(): $Language;
        getOrDefault(id: string): string;
        getOrDefault(key: string, defaultValue: string): string;
        has(id: string): boolean;
        isDefaultRightToLeft(): boolean;
        getComponent(arg0: string): $Component;
        getVisualOrder(text: $List_<$FormattedText>): $List<$FormattedCharSequence>;
        getVisualOrder(text: $FormattedText): $FormattedCharSequence;
        static loadFromJson(stream: $InputStream, output: $BiConsumer_<string, string>): void;
        static loadFromJson(arg0: $InputStream, arg1: $BiConsumer_<string, string>, arg2: $BiConsumer_<string, $Component>): void;
        getLanguageData(): $Map<string, string>;
        static inject(instance: $Language): void;
        static DEFAULT: string;
        constructor();
        static get instance(): $Language;
        get defaultRightToLeft(): boolean;
        get languageData(): $Map<string, string>;
    }
}
