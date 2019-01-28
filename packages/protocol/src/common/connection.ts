export interface SendableConnection {
	send(data: Buffer | Uint8Array): void;
}

export interface ReadWriteConnection extends SendableConnection {
	onMessage(cb: (data: Uint8Array | Buffer) => void): void;
	onClose(cb: () => void): void;
	close(): void;
}

export enum OperatingSystem {
	Windows,
	Linux,
	Mac,
}

export interface InitData {
	readonly os: OperatingSystem;
	readonly dataDirectory: string;
	readonly workingDirectory: string;
	readonly homeDirectory: string;
	readonly tmpDirectory: string;
	readonly shell: string;
}

export interface ISharedProcessData {
	readonly socketPath: string;
	readonly logPath: string;
}