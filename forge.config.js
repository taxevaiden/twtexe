import { FusesPlugin } from "@electron-forge/plugin-fuses";
import { FuseV1Options, FuseVersion } from "@electron/fuses";

export default {
    packagerConfig: {
        asar: true,
    },
    rebuildConfig: {},
    makers: [
        {
            name: "@electron-forge/maker-squirrel",
            config: {}, // Default config for Windows
        },
        {
            name: "@electron-forge/maker-zip",
            platforms: ["darwin"], // Optional ZIP for macOS
        },
        {
            name: "@electron-forge/maker-deb",
            config: {}, // For Linux (Debian-based)
        },
        {
            name: "@electron-forge/maker-rpm",
            config: {}, // For Linux (Red Hat-based)
        },
    ],
    plugins: [
        {
            name: "@electron-forge/plugin-auto-unpack-natives",
            config: {}, // Unpack native modules automatically
        },
        {
            name: "@electron-forge/plugin-fuses",
            config: {
                version: FuseVersion.V1,
                setFuses: {
                    [FuseV1Options.RunAsNode]: false,
                    [FuseV1Options.EnableCookieEncryption]: true,
                    [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
                    [FuseV1Options.EnableNodeCliInspectArguments]: false,
                    [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
                    [FuseV1Options.OnlyLoadAppFromAsar]: true,
                },
            },
        },
    ],
};
