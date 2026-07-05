import { $ScreenMouseEvents$AfterMouseClick, $ScreenKeyboardEvents$BeforeKeyPress, $ScreenMouseEvents$BeforeMouseClick, $ScreenMouseEvents$AfterMouseRelease, $ScreenEvents$BeforeRender, $ScreenKeyboardEvents$AfterKeyRelease, $ScreenMouseEvents$AllowMouseScroll, $ScreenMouseEvents$AfterMouseScroll, $ScreenKeyboardEvents$AllowKeyPress, $ScreenEvents$Remove, $ScreenEvents$BeforeTick, $ScreenKeyboardEvents$BeforeKeyRelease, $ScreenMouseEvents$AllowMouseRelease, $ScreenMouseEvents$AllowMouseClick, $ScreenMouseEvents$BeforeMouseRelease, $ScreenKeyboardEvents$AllowKeyRelease, $ScreenMouseEvents$BeforeMouseScroll, $ScreenEvents$AfterRender, $ScreenEvents$AfterTick, $ScreenKeyboardEvents$AfterKeyPress } from "@package/net/fabricmc/fabric/api/client/screen/v1";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $List } from "@package/java/util";
import { $Event } from "@package/net/fabricmc/fabric/api/event";

declare module "@package/net/fabricmc/fabric/impl/client/screen" {
    export class $ScreenExtensions {
        static getExtensions(arg0: $Screen): $ScreenExtensions;
    }
    export interface $ScreenExtensions {
        fabric_getButtons(): $List<$AbstractWidget>;
        fabric_getRemoveEvent(): $Event<$ScreenEvents$Remove>;
        fabric_getAfterTickEvent(): $Event<$ScreenEvents$AfterTick>;
        fabric_getBeforeTickEvent(): $Event<$ScreenEvents$BeforeTick>;
        fabric_getAfterRenderEvent(): $Event<$ScreenEvents$AfterRender>;
        fabric_getAfterMouseScrollEvent(): $Event<$ScreenMouseEvents$AfterMouseScroll>;
        fabric_getAfterKeyReleaseEvent(): $Event<$ScreenKeyboardEvents$AfterKeyRelease>;
        fabric_getBeforeMouseClickEvent(): $Event<$ScreenMouseEvents$BeforeMouseClick>;
        fabric_getAfterMouseReleaseEvent(): $Event<$ScreenMouseEvents$AfterMouseRelease>;
        fabric_getBeforeKeyPressEvent(): $Event<$ScreenKeyboardEvents$BeforeKeyPress>;
        fabric_getAllowMouseScrollEvent(): $Event<$ScreenMouseEvents$AllowMouseScroll>;
        fabric_getAllowMouseClickEvent(): $Event<$ScreenMouseEvents$AllowMouseClick>;
        fabric_getAllowKeyPressEvent(): $Event<$ScreenKeyboardEvents$AllowKeyPress>;
        fabric_getAfterMouseClickEvent(): $Event<$ScreenMouseEvents$AfterMouseClick>;
        fabric_getBeforeMouseReleaseEvent(): $Event<$ScreenMouseEvents$BeforeMouseRelease>;
        fabric_getBeforeKeyReleaseEvent(): $Event<$ScreenKeyboardEvents$BeforeKeyRelease>;
        fabric_getBeforeMouseScrollEvent(): $Event<$ScreenMouseEvents$BeforeMouseScroll>;
        fabric_getAfterKeyPressEvent(): $Event<$ScreenKeyboardEvents$AfterKeyPress>;
        fabric_getAllowKeyReleaseEvent(): $Event<$ScreenKeyboardEvents$AllowKeyRelease>;
        fabric_getAllowMouseReleaseEvent(): $Event<$ScreenMouseEvents$AllowMouseRelease>;
        fabric_getBeforeRenderEvent(): $Event<$ScreenEvents$BeforeRender>;
    }
}
