import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { CSSProperties } from 'vue/types/jsx'

import './Hint.scss'

// TODO(ignat): Refactor and split into 2 components - Hint and Notification.
@Component({ name: 'Hint' })
class Hint extends Vue {
  private static readonly DEFAULT_TIMEOUT: number = 5000 // 5 seconds

  @Prop({ type: String, required: false })
  readonly title: string | undefined

  @Prop({ type: String, required: false })
  readonly text: string | undefined

  @Prop({ type: String, required: false, default: (): Hint.Type => Hint.Type.NORMAL })
  readonly type: Hint.Type

  @Prop({ type: String, required: false, default: (): Hint.Position => Hint.Position.AUTO })
  readonly position: Hint.Position

  @Prop({ type: String, required: false })
  readonly activatorClass: string | undefined

  @Prop({ type: Number, required: false })
  readonly timeout: number | undefined

  private hasActivator = false
  private isVisible = false

  private get classNames (): string {
    const result = ['lp-hint', `lp-hint--${this.type}`]

    if (this.position !== Hint.Position.AUTO) {
      if (this.hasActivator) {
        result.push('lp-hint--has-activator')
      } else {
        result.push('lp-hint--has-close')
      }
      result.push(`lp-hint--${this.position}`)
    }

    return result.join(' ')
  }

  private get visibilityStyle (): Partial<CSSProperties> {
    return { visibility: this.isVisible ? 'visible' : 'hidden' }
  }

  public render (): VNode | null {
    this.hasActivator = !!(this.$slots && this.$slots.default)
    if (this.hasActivator) {
      return (
        <div
          class={['lp-hint-activator', this.activatorClass || ''].join(' ')}
          onMouseenter={this.toggleVisibility}
          onMouseleave={this.toggleVisibility}
        >
          {this.$slots && this.$slots.default}
          {this.renderHint()}
        </div>
      )
    } else {
      // There's no activator so the hint should be visible by default.
      this.isVisible = true
      if (this.timeout !== 0) {
        setTimeout(this.onClose.bind(this), this.timeout || Hint.DEFAULT_TIMEOUT)
      }

      return this.renderHint()
    }
  }

  private renderHint (): VNode | null {
    if (this.text) {
      return (
        <div class={this.classNames} style={this.visibilityStyle}>
          {this.renderTitle()}
          {this.renderText()}
          {this.renderCloseButton()}
        </div>
      )
    }

    return null
  }

  private renderTitle (): VNode | null {
    if (this.title) {
      return <div class="lp-hint-title">{this.title}</div>
    }

    return null
  }

  private renderText (): VNode | null {
    if (this.text) {
      return <div class="lp-hint-text">{this.text}</div>
    }

    return null
  }

  private renderCloseButton (): VNode | null {
    if (!this.hasActivator) {
      return (
        <button class="lp-hint-close" onClick={this.onClose}>
          &times;
        </button>
      )
    }

    return null
  }

  private toggleVisibility (e: MouseEvent): void {
    this.isVisible = e.type.toLowerCase().indexOf('enter') !== -1
  }

  public onClose (): void {
    this.$emit('close')
  }
}

namespace Hint {
  export enum Type {
    NORMAL = 'normal',
    WARNING = 'warning',
    ERROR = 'error'
  }

  export enum Position {
    AUTO = 'auto',
    BOTTOM = 'bottom',
    LEFT = 'left',
    RIGHT = 'right',
    TOP = 'top'
  }
}

export { Hint }
