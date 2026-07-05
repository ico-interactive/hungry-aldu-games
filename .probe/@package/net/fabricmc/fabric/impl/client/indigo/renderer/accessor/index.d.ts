import { $TerrainRenderContext } from "@package/net/fabricmc/fabric/impl/client/indigo/renderer/render";

declare module "@package/net/fabricmc/fabric/impl/client/indigo/renderer/accessor" {
    export class $AccessChunkRendererRegion {
    }
    export interface $AccessChunkRendererRegion {
        fabric_setRenderer(arg0: $TerrainRenderContext): void;
        fabric_getRenderer(): $TerrainRenderContext;
    }
}
