<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
               @change="$emit('change',$event.target.value)"
               @input="$emit('input',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               @blur="$emit('blur',$event.target.value)">
        <template v-if="error">
            <icon class="icon-error" name="error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script lang='js'>
  import Icon from './icon';

  export default {
    components: {Icon},
    name: 'MoInput',
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  };
</script>

<style lang='scss' scoped>
    @import "var";
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;

        > :not(:last-child) {
            margin-right: 0.5em;
        }

        > input {
            height:32px;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;

            &:hover {
                border-color: $border-color-hover;
            }

            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }

            &[disabled], &[readonly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }

        &.error {
            > input {
                border-color: $error-color;

                &:focus {
                    box-shadow: inset 0 1px 3px $error-color;
                    outline: none;
                }
            }
        }

        .icon-error {
            fill: $error-color;
        }

        .errorMessage {
            color: $error-color;
        }
    }
</style>