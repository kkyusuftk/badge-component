import Vue, { VNode } from 'vue';
import './ColorPreview.scss';
declare class ColorPreview extends Vue {
    readonly color: string;
    readonly height: number;
    readonly width: number;
    render(): VNode;
}
export { ColorPreview };
