import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { InputGroupProps } from "@yamada-ui/input"
import { IconButton } from "@yamada-ui/button"
import {
  forwardRef,
  omitThemeProps,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { Input, InputGroup, InputRightElement } from "@yamada-ui/input"
import { Eye, EyeOff } from "@yamada-ui/lucide"
import { useControllableState } from "@yamada-ui/use-controllable-state"

interface PasswordInputOptions {
  /**
   * Determines whether the password input is visible by default.
   *
   * @default false
   */
  defaultVisible?: boolean
  /**
   * If `true`, all wrapped elements will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * The icons to be used for the visibility toggle.
   */
  visibilityIcon?: { off: React.ReactElement; on: React.ReactElement }
  /**
   * Determines the visibility of the password input.
   *
   * @default false
   */
  visible?: boolean
  /**
   * Callback function that is triggered when the visibility of the password input changes.
   */
  onVisibleChange?: (visible: boolean) => void
}

export interface PasswordInputProps
  extends HTMLUIProps,
    ThemeProps<"PasswordInput">,
    PasswordInputOptions {
  inputGroupProps?: InputGroupProps
}

/**
 * `PasswordInput` is a component that allows users to input passwords with a visibility toggle.
 *
 * @see Docs https://yamada-ui.com/components/forms/password-input
 */
export const PasswordInput = forwardRef<PasswordInputProps, "div">(
  (props, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("PasswordInput", props)
    const {
      defaultVisible,
      isDisabled,
      visibilityIcon = { off: <EyeOff />, on: <Eye /> },
      visible,
      inputGroupProps,
      onVisibleChange,
      ...rest
    } = omitThemeProps(mergedProps)

    const [isVisible, setIsVisible] = useControllableState({
      defaultValue: defaultVisible,
      value: visible,
      onChange: onVisibleChange,
    })

    const css: CSSUIObject = {
      ...styles.field,
    }

    return (
      <InputGroup {...inputGroupProps}>
        <Input
          ref={ref}
          type={isVisible ? "text" : "password"}
          isDisabled={isDisabled}
          _css={css}
          {...rest}
        />
        <InputRightElement
          isClickable={!isDisabled}
          onPointerDown={(e) => {
            if (isDisabled) return
            if (e.button !== 0) return
            e.preventDefault()
            setIsVisible(!isVisible)
          }}
        >
          <IconButton
            variant="ghost"
            aria-label="Toggle password visibility"
            h="calc(100% - $spaces.2)"
            icon={isVisible ? visibilityIcon.off : visibilityIcon.on}
            isDisabled={isDisabled}
            me="2"
          />
        </InputRightElement>
      </InputGroup>
    )
  },
)

PasswordInput.displayName = "PasswordInput"
PasswordInput.__ui__ = "PasswordInput"
