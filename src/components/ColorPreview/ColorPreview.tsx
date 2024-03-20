import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'

import './ColorPreview.scss'

@Component({ name: 'ColorPreview' })
class ColorPreview extends Vue {
  @Prop({ type: String, required: true })
  readonly color: string

  @Prop({ type: Number, required: false, default: 32 })
  readonly height: number

  @Prop({ type: Number, required: false, default: 32 })
  readonly width: number

  render (): VNode {
    return (
      <div
        class="lp-color-preview"
        style={{
          boxShadow: `inset 0 0 0 1000px ${this.color}`,
          height: `${this.height}px`,
          width: `${this.width}px`,
        }}
      />
    )
  }
}

export { ColorPreview }
