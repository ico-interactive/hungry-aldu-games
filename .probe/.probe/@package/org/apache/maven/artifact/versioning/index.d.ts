import { $List_, $List } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $Artifact } from "@package/org/apache/maven/artifact";

declare module "@package/org/apache/maven/artifact/versioning" {
    export class $ArtifactVersion {
    }
    export interface $ArtifactVersion extends $Comparable<$ArtifactVersion> {
        getMinorVersion(): number;
        getMajorVersion(): number;
        parseVersion(arg0: string): void;
        getBuildNumber(): number;
        getQualifier(): string;
        getIncrementalVersion(): number;
        get minorVersion(): number;
        get majorVersion(): number;
        get buildNumber(): number;
        get qualifier(): string;
        get incrementalVersion(): number;
    }
    export class $VersionRange {
        static createFromVersion(arg0: string): $VersionRange;
        getSelectedVersion(arg0: $Artifact): $ArtifactVersion;
        matchVersion(arg0: $List_<$ArtifactVersion>): $ArtifactVersion;
        containsVersion(arg0: $ArtifactVersion): boolean;
        hasRestrictions(): boolean;
        getRestrictions(): $List<$Restriction>;
        getRecommendedVersion(): $ArtifactVersion;
        static createFromVersionSpec(arg0: string): $VersionRange;
        isSelectedVersionKnown(arg0: $Artifact): boolean;
        restrict(arg0: $VersionRange): $VersionRange;
        /**
         * @deprecated
         */
        cloneOf(): $VersionRange;
        get restrictions(): $List<$Restriction>;
        get recommendedVersion(): $ArtifactVersion;
    }
    export class $Restriction {
        getUpperBound(): $ArtifactVersion;
        getLowerBound(): $ArtifactVersion;
        containsVersion(arg0: $ArtifactVersion): boolean;
        isLowerBoundInclusive(): boolean;
        isUpperBoundInclusive(): boolean;
        static EVERYTHING: $Restriction;
        constructor(arg0: $ArtifactVersion, arg1: boolean, arg2: $ArtifactVersion, arg3: boolean);
        get upperBound(): $ArtifactVersion;
        get lowerBound(): $ArtifactVersion;
        get lowerBoundInclusive(): boolean;
        get upperBoundInclusive(): boolean;
    }
}
