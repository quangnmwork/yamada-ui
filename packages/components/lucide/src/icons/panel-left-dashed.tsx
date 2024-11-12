import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { PanelLeftDashed as OriginalPanelLeftDashed } from "lucide-react"

/**
 * `PanelLeftDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelLeftDashedIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalPanelLeftDashed} {...props} />,
)

/**
 * `PanelLeftDashed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `PanelLeftDashedIcon` instead.
 */
export const PanelLeftDashed = PanelLeftDashedIcon
