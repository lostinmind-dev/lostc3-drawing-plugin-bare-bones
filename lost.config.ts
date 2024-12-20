import { defineConfig } from "./deps.ts";

export default defineConfig<'plugin', 'world'>({
    type: 'plugin',
    pluginType: 'world',
    // deprecated?: boolean;
    // minConstructVersion?: string;
    // canBeBundled?: boolean;
    objectName: 'LostPlugin',

    addonId: 'LostPluginId',
    category: 'general',
    addonName: 'Lost plugin for Construct 3',
    addonDescription: 'My awesome addon was made with Lost',
    version: '1.0.0.0',
    author: 'lostinmind.',
    docsUrl: 'https://myaddon.com/docs',
    helpUrl: 'https://myaddon.com/help/en',
    websiteUrl: 'https://myaddon.com',

    isResizable: true,
    isRotatable: true,
    // is3D?: boolean;
    isTiled: false,
    supportsZElevation: true,
    supportsColor: true,
    supportsEffects: true,
    mustPreDraw: true,
    // commonACEs: [
    //     'angle', 'appereance', 'position',
    //     'scene_graph', 'size', 'z_order'
    // ]
});