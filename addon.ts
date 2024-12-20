import { defineAddon, Plugin, Property } from "./deps.ts";
import config from "./lost.config.ts";

/** Import your types */
import type { EditorInstance } from "@editor/instance.ts";
import type { EditorType } from "@editor/type.ts";

export default defineAddon(
    new Plugin<'world'>(config)
        .addProperty<EditorInstance, EditorType>('test', 'Make 1:1', {
            type: Property.Link,
            callbackType: 'for-each-instance',
            callback: (inst) => {
                inst.OnMakeOriginalSize();
            }
        })

        .addProperty<EditorInstance, EditorType>('test1', 'Edit image', {
            type: Property.Link,
            callbackType: 'once-for-type',
            callback: (type) => {
                type.GetObjectType().EditImage();
            }
        })
)