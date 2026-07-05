export * as legacy from "@package/org/apache/maven/repository/legacy";

declare module "@package/org/apache/maven/repository" {
    export class $Proxy {
        getProtocol(): string;
        getHost(): string;
        getPort(): number;
        setProtocol(arg0: string): void;
        setPassword(arg0: string): void;
        getPassword(): string;
        getUserName(): string;
        setHost(arg0: string): void;
        setPort(arg0: number): void;
        setUserName(arg0: string): void;
        getNtlmDomain(): string;
        getNtlmHost(): string;
        getNonProxyHosts(): string;
        setNonProxyHosts(arg0: string): void;
        setNtlmDomain(arg0: string): void;
        setNtlmHost(arg0: string): void;
        static PROXY_HTTP: string;
        static PROXY_SOCKS4: string;
        static PROXY_SOCKS5: string;
        constructor();
    }
}
