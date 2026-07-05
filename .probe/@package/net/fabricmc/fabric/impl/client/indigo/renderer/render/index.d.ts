import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Function_, $Consumer } from "@package/java/util/function";
import { $RenderChunkRegion } from "@package/net/minecraft/client/renderer/chunk";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ItemDisplayContext } from "@package/net/minecraft/world/item";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $TriState_, $TriState } from "@package/net/fabricmc/fabric/api/util";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BufferBuilder, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $RenderContext } from "@package/net/fabricmc/fabric/api/renderer/v1/render";
import { $Mesh } from "@package/net/fabricmc/fabric/api/renderer/v1/mesh";
import { $ThreadLocal } from "@package/java/lang";

declare module "@package/net/fabricmc/fabric/impl/client/indigo/renderer/render" {
    export class $AbstractBlockRenderContext extends $AbstractRenderContext {
    }
    export class $AbstractRenderContext implements $RenderContext {
        getModelData(): $ModelData;
        getRenderType(): $RenderType;
        itemTransformationMode(): $ItemDisplayContext;
        usesAmbientOcclusion(): $TriState;
        setUsesAmbientOcclusion(arg0: $TriState_): void;
        /**
         * @deprecated
         */
        meshConsumer(): $Consumer<$Mesh>;
        pushModelData(arg0: $ModelData): void;
        popModelData(): void;
        /**
         * @deprecated
         */
        fallbackConsumer(): $Consumer<$BakedModel>;
        isFaceCulled(arg0: $Direction_): boolean;
        hasTransform(): boolean;
        get modelData(): $ModelData;
        get renderType(): $RenderType;
    }
    export class $TerrainRenderContext extends $AbstractBlockRenderContext {
        prepare(arg0: $RenderChunkRegion, arg1: $Function_<$RenderType, $BufferBuilder>): void;
        release(): void;
        tessellateBlock(arg0: $BlockState_, arg1: $BlockPos_, arg2: $BakedModel, arg3: $PoseStack, arg4: $ModelData, arg5: $RenderType): void;
        static POOL: $ThreadLocal<$TerrainRenderContext>;
        constructor();
    }
}
