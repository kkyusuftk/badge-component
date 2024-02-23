import Vue, { VNode } from 'vue';
import './Badge.scss';
declare class Badge extends Vue {
    readonly text: string | number;
    readonly color: Badge.Color;
    readonly letterSpacing: boolean;
    render(): VNode;
}
declare namespace Badge {
    enum Color {
        PRIMARY = "primary",
        PRIMARY_LIGHT = "primary-light",
        GREY = "grey",
        GREY_LIGHT = "grey-light",
        GREY_DARK = "grey-dark",
        BLACK = "black",
        BLACK_LIGHT = "black-light",
        GREEN = "green",
        GREEN_LIGHT = "green-light",
        RED = "red",
        RED_LIGHT = "red-light",
        PINK = "pink",
        PINK_LIGHT = "pink-light",
        PLUM = "plum",
        PLUM_LIGHT = "plum-light",
        ORANGE = "orange",
        ORANGE_LIGHT = "orange-light",
        CYAN = "cyan",
        CYAN_LIGHT = "cyan-light",
        YELLOW = "yellow",
        YELLOW_LIGHT = "yellow-light"
    }
}
export { Badge };
