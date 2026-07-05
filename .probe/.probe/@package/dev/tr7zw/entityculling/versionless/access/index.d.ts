
declare module "@package/dev/tr7zw/entityculling/versionless/access" {
    export class $Cullable {
    }
    export interface $Cullable {
        isOutOfCamera(): boolean;
        setOutOfCamera(arg0: boolean): void;
        isForcedVisible(): boolean;
        setTimeout(): void;
        setCulled(arg0: boolean): void;
        isCulled(): boolean;
        get forcedVisible(): boolean;
    }
}
