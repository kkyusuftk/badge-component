import Vue, { VNode } from 'vue';
import './Hint.scss';
declare class Hint extends Vue {
    private static readonly DEFAULT_TIMEOUT;
    readonly title: string | undefined;
    readonly text: string | undefined;
    readonly type: Hint.Type;
    readonly position: Hint.Position;
    readonly activatorClass: string | undefined;
    readonly timeout: number | undefined;
    private hasActivator;
    private isVisible;
    private get classNames();
    private get visibilityStyle();
    render(): VNode | null;
    private renderHint;
    private renderTitle;
    private renderText;
    private renderCloseButton;
    private toggleVisibility;
    onClose(): void;
}
declare namespace Hint {
    enum Type {
        NORMAL = "normal",
        WARNING = "warning",
        ERROR = "error"
    }
    enum Position {
        AUTO = "auto",
        BOTTOM = "bottom",
        LEFT = "left",
        RIGHT = "right",
        TOP = "top"
    }
}
export { Hint };
