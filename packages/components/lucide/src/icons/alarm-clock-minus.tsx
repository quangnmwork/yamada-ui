import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { AlarmClockMinus as OriginalAlarmClockMinus } from "lucide-react"

/**
 * `AlarmClockMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlarmClockMinusIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalAlarmClockMinus} {...props} />,
)

/**
 * `AlarmClockMinus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlarmClockMinusIcon` instead.
 */
export const AlarmClockMinus = AlarmClockMinusIcon
