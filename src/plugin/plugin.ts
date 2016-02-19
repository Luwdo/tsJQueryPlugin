export class Plugin {
    constructor(public element: HTMLElement, public options ?: PluginOptions) {
        console.log('plugin called');
    }
}

export interface PluginOptions {
     color?: string;
     height?: number;
}