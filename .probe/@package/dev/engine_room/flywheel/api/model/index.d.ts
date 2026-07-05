import { $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $Material } from "@package/dev/engine_room/flywheel/api/material";
import { $MutableVertexList } from "@package/dev/engine_room/flywheel/api/vertex";
import { $Vector4fc } from "@package/org/joml";

declare module "@package/dev/engine_room/flywheel/api/model" {
    export class $Model$ConfiguredMesh extends $Record {
        mesh(): $Mesh;
        material(): $Material;
        constructor(material: $Material, mesh: $Mesh);
    }
    /**
     * Values that may be interpreted as {@link $Model$ConfiguredMesh}.
     */
    export type $Model$ConfiguredMesh_ = { mesh?: $Mesh, material?: $Material,  } | [mesh?: $Mesh, material?: $Material, ];
    export class $IndexSequence {
    }
    export interface $IndexSequence {
        fill(arg0: number, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $IndexSequence}.
     */
    export type $IndexSequence_ = ((arg0: number, arg1: number) => void);
    export class $Mesh {
    }
    export interface $Mesh {
        write(arg0: $MutableVertexList): void;
        boundingSphere(): $Vector4fc;
        indexCount(): number;
        vertexCount(): number;
        indexSequence(): $IndexSequence;
    }
    export class $Model {
    }
    export interface $Model {
        meshes(): $List<$Model$ConfiguredMesh>;
        boundingSphere(): $Vector4fc;
    }
}
