import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { AlarmClockCheck as OriginalAlarmClockCheck } from "lucide-react"

/**
 * `AlarmClockCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlarmClockCheckIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalAlarmClockCheck} {...props} />,
)

/**
 * `AlarmClockCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlarmClockCheckIcon` instead.
 */
export const AlarmClockCheck = AlarmClockCheckIcon
