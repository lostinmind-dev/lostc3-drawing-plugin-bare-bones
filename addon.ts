import { defineAddon, Plugin, Property } from "./deps.ts";
import type { EditorInstance } from "@Editor/Instance.ts";
import type { EditorType } from "@Editor/Type.ts";
import config from "./lost.config.ts";


export default defineAddon(
    new Plugin<EditorInstance, EditorType>(config)
        .addProperty('test', 'Make 1:1', {
            type: Property.Link,
            callbackType: 'for-each-instance',
            callback: (inst) => {
                inst.OnMakeOriginalSize();
            }
        })

        .addProperty('test1', 'Edit image', {
            type: Property.Link,
            callbackType: 'once-for-type',
            callback: (type) => {
                type.GetObjectType().EditImage();
            }
        })
)