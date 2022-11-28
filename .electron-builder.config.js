const isCI = !!process.env.CI;
const macOsArch = process.env.MACOS_ELECTRON_ARCH
const buildDebPackage = isCI || !!process.env.LINUX_BUILD_DEB
const packageJSON = require('./package.json');
const linuxTargets = ["AppImage", "tar.xz"];

if (buildDebPackage) {
  linuxTargets.push('deb')
}
/**
 * @type {import("electron-builder").Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  appId: "com.metadao.app",
  directories: {
    output: 'build',
    buildResources: 'buildResources',
  },
  files: [
    '.next/**',
    'scripts/**'
  ],
  publish: {
    provider: "github",
    vPrefixedTagName: true,
    releaseType: "draft"
  },
  buildVersion: packageJSON.version,
  artifactName:
    "${productName}-${platform}_${arch}-v${buildVersion}.${ext}",
  extraResources: [
    {
      from: "../../build/backend",
      to: "backend",
      filter: ["**/*"]
    }
  ],
  dmg: {
    sign: false
  },
  nsis: {
    license: "../../LICENSE.md",
    createDesktopShortcut: false
  },
  mac: {
    target: [
      {
        target: "default",
        arch: macOsArch ? [macOsArch] : [
          'x64',
          'arm64'
        ]
      }
    ],
    category: "public.app-category.finance",
    icon: "public/images/logo.png",
    ...(isCI || process.env.CERTIFICATE_OSX_APPLICATION
      ? {
        identity: "MakerDAO",
        hardenedRuntime: true,
        gatekeeperAssess: false,
        entitlements: "signing/entitlements.mac.plist",
        entitlementsInherit: "signing/entitlements.mac.plist"
      }
      : {
        identity: false
      })
  },
  win: {
    target: ["nsis"],
    icon: "public/images/logo.png"
  },
  linux: {
    target: linuxTargets,
    icon: "public/images/logo.png",
    category: "Finance"
  },
  ...(isCI ? { afterSign: "scripts/notarize.js" } : {})
};

module.exports = config;