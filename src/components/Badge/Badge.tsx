import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'

import './Badge.scss'

@Component({ name: 'Badge' })
class Badge extends Vue {
  @Prop({ type: [String, Number], required: false })
  readonly text: string | number

  @Prop({ type: String, required: false, default: () => Badge.Color.PRIMARY })
  readonly color: Badge.Color

  @Prop({ type: Boolean, required: false })
  readonly letterSpacing: boolean

  render (): VNode {
    return (
      <span class={`lp-badge ${this.color} ${this.letterSpacing ? 'lp-letter-spacing' : ''}`}>
        {this.$slots.default ?? this.text}
      </span>
    )
  }
}

namespace Badge {
  export enum Color {
    PRIMARY = 'primary',
    PRIMARY_LIGHT = 'primary-light',
    GREY = 'grey',
    GREY_LIGHT = 'grey-light',
    GREY_DARK = 'grey-dark',
    BLACK = 'black',
    BLACK_LIGHT = 'black-light',
    GREEN = 'green',
    GREEN_LIGHT = 'green-light',
    RED = 'red',
    RED_LIGHT = 'red-light',
    PINK = 'pink',
    PINK_LIGHT = 'pink-light',
    PLUM = 'plum',
    PLUM_LIGHT = 'plum-light',
    ORANGE = 'orange',
    ORANGE_LIGHT = 'orange-light',
    CYAN = 'cyan',
    CYAN_LIGHT = 'cyan-light',
    YELLOW = 'yellow',
    YELLOW_LIGHT = 'yellow-light'
  }
}

export { Badge }
