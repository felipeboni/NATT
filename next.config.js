// const withNextJsObfuscator = require("nextjs-obfuscator")(
//   {
//     compact: false,
//     controlFlowFlattening: false,
//     controlFlowFlatteningThreshold: 0.25,
//     deadCodeInjection: false,
//     deadCodeInjectionThreshold: 0.4,
//     debugProtection: true,
//     debugProtectionInterval: 2000,
//     disableConsoleOutput: true,
//     domainLock: ["https://candycash.online"],
//     domainLockRedirectUrl: "about:blank",
//     forceTransformStrings: [],
//     identifierNamesCache: null,
//     identifierNamesGenerator: "hexadecimal",
//     identifiersDictionary: [],
//     identifiersPrefix: "",
//     ignoreImports: false,
//     inputFileName: "",
//     log: false,
//     numbersToExpressions: false,
//     optionsPreset: "default",
//     renameGlobals: false,
//     renameProperties: false,
//     renamePropertiesMode: "safe",
//     reservedNames: [],
//     reservedStrings: [],
//     seed: 0,
//     selfDefending: false,
//     simplify: false,
//     sourceMap: false,
//     sourceMapBaseUrl: "",
//     sourceMapFileName: "",
//     sourceMapMode: "separate",
//     sourceMapSourcesMode: "sources-content",
//     splitStrings: false,
//     splitStringsChunkLength: 10,
//     stringArray: false,
//     stringArrayCallsTransform: false,
//     stringArrayCallsTransformThreshold: 0.5,
//     stringArrayEncoding: [],
//     stringArrayIndexesType: ["hexadecimal-number"],
//     stringArrayIndexShift: false,
//     stringArrayRotate: false,
//     stringArrayShuffle: false,
//     stringArrayWrappersCount: 1,
//     stringArrayWrappersChainedCalls: false,
//     stringArrayWrappersParametersMaxCount: 2,
//     stringArrayWrappersType: "variable",
//     stringArrayThreshold: 0.75,
//     target: "browser",
//     transformObjectKeys: false,
//     unicodeEscapeSequence: false,
//   },
//   {
//     enabled: "detect",
//     obfuscateFiles: {
//       buildManifest: false,
//       ssgManifest: false,
//       webpack: false,
//     },
//     log: false,
//   }
// );

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

// /** @type {import('next').NextConfig} */
// const nextConfig = withNextJsObfuscator({
//   reactStrictMode: false,
// });

module.exports = nextConfig;
