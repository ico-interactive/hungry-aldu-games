import { $Consumer_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle, $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $Enum } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/layouts" {
    export class $GridLayout extends $AbstractLayout {
        columnSpacing(columnSpacing: number): $GridLayout;
        rowSpacing(columnSpacing: number): $GridLayout;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number): T;
        spacing(columnSpacing: number): $GridLayout;
        defaultCellSetting(): $LayoutSettings;
        createRowHelper(columns: number): $GridLayout$RowHelper;
        newCellSettings(): $LayoutSettings;
        width: number;
        height: number;
        constructor();
        constructor(x: number, y: number);
    }
    export class $EqualSpacingLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $GridLayout$RowHelper {
        addChild<T extends $LayoutElement>(child: T, occupiedColumns: number, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, occupiedColumns: number): T;
        addChild<T extends $LayoutElement>(child: T): T;
        defaultCellSetting(): $LayoutSettings;
        newCellSettings(): $LayoutSettings;
        getGrid(): $GridLayout;
        this$0: $GridLayout;
        constructor(columns: $GridLayout, arg1: number);
        get grid(): $GridLayout;
    }
    export class $AbstractLayout$AbstractChildWrapper {
    }
    export class $FrameLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $Layout {
    }
    export interface $Layout extends $LayoutElement {
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
        arrangeElements(): void;
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
    }
    export class $FrameLayout extends $AbstractLayout {
        newChildLayoutSettings(): $LayoutSettings;
        static alignInDimension(position: number, rectangleLength: number, childLength: number, setter: $Consumer_<number>, delta: number): void;
        setMinHeight(minHeight: number): $FrameLayout;
        setMinDimensions(minWidth: number, minHeight: number): $FrameLayout;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T): T;
        static centerInRectangle(child: $LayoutElement, rectangle: $ScreenRectangle_): void;
        static centerInRectangle(child: $LayoutElement, x: number, y: number, width: number, height: number): void;
        static alignInRectangle(child: $LayoutElement, x: number, y: number, width: number, height: number, deltaX: number, deltaY: number): void;
        static alignInRectangle(child: $LayoutElement, rectangle: $ScreenRectangle_, deltaX: number, deltaY: number): void;
        setMinWidth(minHeight: number): $FrameLayout;
        defaultChildLayoutSetting(): $LayoutSettings;
        width: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number);
        constructor(width: number, height: number);
        constructor();
        set minHeight(value: number);
        set minWidth(value: number);
    }
    export class $LinearLayout implements $Layout {
        getWidth(): number;
        getHeight(): number;
        arrangeElements(): void;
        addChild<T extends $LayoutElement>(child: T, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        getY(): number;
        getX(): number;
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
        setY(x: number): void;
        setX(x: number): void;
        static vertical(): $LinearLayout;
        static horizontal(): $LinearLayout;
        spacing(spacing: number): $LinearLayout;
        defaultCellSetting(): $LayoutSettings;
        newCellSettings(): $LayoutSettings;
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
        setPosition(x: number, y: number): void;
        getRectangle(): $ScreenRectangle;
        constructor(width: number, height: number, orientation: $LinearLayout$Orientation_);
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $AbstractLayout implements $Layout {
        getWidth(): number;
        getHeight(): number;
        getY(): number;
        getX(): number;
        setY(x: number): void;
        setX(x: number): void;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        arrangeElements(): void;
        setPosition(x: number, y: number): void;
        getRectangle(): $ScreenRectangle;
        width: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number);
        get rectangle(): $ScreenRectangle;
    }
    export class $LayoutElement {
    }
    export interface $LayoutElement {
        getWidth(): number;
        getHeight(): number;
        setPosition(x: number, y: number): void;
        getRectangle(): $ScreenRectangle;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        getY(): number;
        getX(): number;
        setY(x: number): void;
        setX(x: number): void;
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $LinearLayout$Orientation extends $Enum<$LinearLayout$Orientation> {
        static values(): $LinearLayout$Orientation[];
        static valueOf(arg0: string): $LinearLayout$Orientation;
        addChild<T extends $LayoutElement>(layout: $GridLayout, element: T, index: number, layoutSettings: $LayoutSettings): T;
        setSpacing(layout: $GridLayout, spacing: number): void;
        static VERTICAL: $LinearLayout$Orientation;
        static HORIZONTAL: $LinearLayout$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $LinearLayout$Orientation}.
     */
    export type $LinearLayout$Orientation_ = "horizontal" | "vertical";
    export class $LayoutSettings {
        static defaults(): $LayoutSettings;
    }
    export interface $LayoutSettings {
        copy(): $LayoutSettings;
        padding(padding: number): $LayoutSettings;
        padding(horizontalPadding: number, verticalPadding: number): $LayoutSettings;
        padding(paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number): $LayoutSettings;
        paddingTop(padding: number): $LayoutSettings;
        align(xAlignment: number, yAlignment: number): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        paddingBottom(padding: number): $LayoutSettings;
        paddingHorizontal(padding: number): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        alignVerticallyBottom(): $LayoutSettings;
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        paddingVertical(padding: number): $LayoutSettings;
        alignHorizontally(xAlignment: number): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignVerticallyTop(): $LayoutSettings;
        alignVertically(xAlignment: number): $LayoutSettings;
        paddingLeft(padding: number): $LayoutSettings;
        paddingRight(padding: number): $LayoutSettings;
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $SpacerElement implements $LayoutElement {
        static height(height: number): $SpacerElement;
        static width(height: number): $SpacerElement;
        getWidth(): number;
        getHeight(): number;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        getY(): number;
        getX(): number;
        setY(x: number): void;
        setX(x: number): void;
        setPosition(width: number, height: number): void;
        getRectangle(): $ScreenRectangle;
        constructor(width: number, height: number);
        constructor(x: number, y: number, width: number, height: number);
        get rectangle(): $ScreenRectangle;
    }
    export class $CommonLayouts {
        static labeledElement(font: $Font, element: $LayoutElement, label: $Component_, layoutSettings: $Consumer_<$LayoutSettings>): $Layout;
        static labeledElement(font: $Font, element: $LayoutElement, label: $Component_): $Layout;
    }
    export class $EqualSpacingLayout extends $AbstractLayout {
        newChildLayoutSettings(): $LayoutSettings;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettingsCreator: $Consumer_<$LayoutSettings>): T;
        defaultChildLayoutSetting(): $LayoutSettings;
        width: number;
        height: number;
        constructor(width: number, height: number, orientation: $EqualSpacingLayout$Orientation_);
        constructor(x: number, y: number, width: number, height: number, orientation: $EqualSpacingLayout$Orientation_);
    }
    export class $LayoutSettings$LayoutSettingsImpl implements $LayoutSettings {
        copy(): $LayoutSettings$LayoutSettingsImpl;
        padding(horizontalPadding: number, verticalPadding: number): $LayoutSettings$LayoutSettingsImpl;
        padding(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingHorizontal(padding: number): $LayoutSettings$LayoutSettingsImpl;
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        alignHorizontally(xAlignment: number): $LayoutSettings$LayoutSettingsImpl;
        alignVertically(xAlignment: number): $LayoutSettings$LayoutSettingsImpl;
        paddingLeft(padding: number): $LayoutSettings$LayoutSettingsImpl;
        alignVerticallyMiddle(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        alignVerticallyBottom(): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignVerticallyTop(): $LayoutSettings;
        padding(paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number): $LayoutSettings;
        paddingTop(paddingLeft: number): $LayoutSettings;
        align(xAlignment: number, yAlignment: number): $LayoutSettings;
        paddingBottom(paddingLeft: number): $LayoutSettings;
        paddingVertical(paddingLeft: number): $LayoutSettings;
        paddingRight(paddingLeft: number): $LayoutSettings;
        yAlignment: number;
        xAlignment: number;
        constructor();
        constructor(other: $LayoutSettings$LayoutSettingsImpl);
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $EqualSpacingLayout$Orientation extends $Enum<$EqualSpacingLayout$Orientation> {
        static values(): $EqualSpacingLayout$Orientation[];
        static valueOf(arg0: string): $EqualSpacingLayout$Orientation;
        getPrimaryPosition(element: $LayoutElement): number;
        getSecondaryLength(container: $EqualSpacingLayout$ChildContainer): number;
        getSecondaryLength(element: $LayoutElement): number;
        getPrimaryLength(element: $LayoutElement): number;
        getPrimaryLength(container: $EqualSpacingLayout$ChildContainer): number;
        setPrimaryPosition(container: $EqualSpacingLayout$ChildContainer, position: number): void;
        getSecondaryPosition(element: $LayoutElement): number;
        setSecondaryPosition(container: $EqualSpacingLayout$ChildContainer, position: number, length: number): void;
        static VERTICAL: $EqualSpacingLayout$Orientation;
        static HORIZONTAL: $EqualSpacingLayout$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $EqualSpacingLayout$Orientation}.
     */
    export type $EqualSpacingLayout$Orientation_ = "horizontal" | "vertical";
    export class $GridLayout$CellInhabitant extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $HeaderAndFooterLayout implements $Layout {
        getWidth(): number;
        getHeight(): number;
        addTitleHeader(message: $Component_, font: $Font): void;
        addToContents<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        addToContents<T extends $LayoutElement>(child: T): T;
        addToFooter<T extends $LayoutElement>(child: T): T;
        addToFooter<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        arrangeElements(): void;
        getY(): number;
        getX(): number;
        setHeaderHeight(footerHeight: number): void;
        addToHeader<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        addToHeader<T extends $LayoutElement>(child: T): T;
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
        setFooterHeight(footerHeight: number): void;
        getContentHeight(): number;
        setY(footerHeight: number): void;
        setX(footerHeight: number): void;
        getFooterHeight(): number;
        getHeaderHeight(): number;
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
        setPosition(x: number, y: number): void;
        getRectangle(): $ScreenRectangle;
        static DEFAULT_HEADER_AND_FOOTER_HEIGHT: number;
        constructor(screen: $Screen, headerHeight: number, footerHeight: number);
        constructor(screen: $Screen, height: number);
        constructor(screen: $Screen);
        get width(): number;
        get height(): number;
        get contentHeight(): number;
        get rectangle(): $ScreenRectangle;
    }
}
