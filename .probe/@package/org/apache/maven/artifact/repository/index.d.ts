import { $Proxy } from "@package/org/apache/maven/repository";
import { $ArtifactRepositoryLayout } from "@package/org/apache/maven/artifact/repository/layout";
import { $Date, $List_, $List } from "@package/java/util";
import { $Artifact } from "@package/org/apache/maven/artifact";
import { $ArtifactMetadata } from "@package/org/apache/maven/artifact/metadata";
export * as layout from "@package/org/apache/maven/artifact/repository/layout";

declare module "@package/org/apache/maven/artifact/repository" {
    export class $ArtifactRepositoryPolicy {
        isEnabled(): boolean;
        merge(arg0: $ArtifactRepositoryPolicy): void;
        setEnabled(arg0: boolean): void;
        setUpdatePolicy(arg0: string): void;
        getUpdatePolicy(): string;
        checkOutOfDate(arg0: $Date): boolean;
        setChecksumPolicy(arg0: string): void;
        getChecksumPolicy(): string;
        static CHECKSUM_POLICY_IGNORE: string;
        static UPDATE_POLICY_DAILY: string;
        static CHECKSUM_POLICY_FAIL: string;
        static UPDATE_POLICY_NEVER: string;
        static CHECKSUM_POLICY_WARN: string;
        static UPDATE_POLICY_INTERVAL: string;
        static UPDATE_POLICY_ALWAYS: string;
        constructor(arg0: boolean, arg1: string, arg2: string);
        constructor(arg0: $ArtifactRepositoryPolicy);
        constructor();
    }
    export class $Authentication {
        setUsername(arg0: string): void;
        setPassword(arg0: string): void;
        getUsername(): string;
        getPassword(): string;
        getPrivateKey(): string;
        setPassphrase(arg0: string): void;
        setPrivateKey(arg0: string): void;
        getPassphrase(): string;
        constructor(arg0: string, arg1: string);
    }
    export class $ArtifactRepository {
    }
    export interface $ArtifactRepository {
        getKey(): string;
        find(arg0: $Artifact): $Artifact;
        getId(): string;
        getProtocol(): string;
        getUrl(): string;
        getProxy(): $Proxy;
        setProxy(arg0: $Proxy): void;
        setId(arg0: string): void;
        getLayout(): $ArtifactRepositoryLayout;
        getSnapshots(): $ArtifactRepositoryPolicy;
        getReleases(): $ArtifactRepositoryPolicy;
        setLayout(arg0: $ArtifactRepositoryLayout): void;
        isBlocked(): boolean;
        setBlocked(arg0: boolean): void;
        pathOf(arg0: $Artifact): string;
        getBasedir(): string;
        setUrl(arg0: string): void;
        /**
         * @deprecated
         */
        isBlacklisted(): boolean;
        getAuthentication(): $Authentication;
        /**
         * @deprecated
         */
        setBlacklisted(arg0: boolean): void;
        findVersions(arg0: $Artifact): $List<string>;
        /**
         * @deprecated
         */
        isUniqueVersion(): boolean;
        isProjectAware(): boolean;
        setAuthentication(arg0: $Authentication): void;
        pathOfRemoteRepositoryMetadata(arg0: $ArtifactMetadata): string;
        pathOfLocalRepositoryMetadata(arg0: $ArtifactMetadata, arg1: $ArtifactRepository): string;
        getMirroredRepositories(): $List<$ArtifactRepository>;
        setMirroredRepositories(arg0: $List_<$ArtifactRepository>): void;
        setReleaseUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        setSnapshotUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        get key(): string;
        get protocol(): string;
        get snapshots(): $ArtifactRepositoryPolicy;
        get releases(): $ArtifactRepositoryPolicy;
        get basedir(): string;
        get uniqueVersion(): boolean;
        get projectAware(): boolean;
        set releaseUpdatePolicy(value: $ArtifactRepositoryPolicy);
        set snapshotUpdatePolicy(value: $ArtifactRepositoryPolicy);
    }
}
