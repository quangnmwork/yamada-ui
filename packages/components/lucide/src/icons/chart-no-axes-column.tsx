import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ChartNoAxesColumn as OriginalChartNoAxesColumn } from "lucide-react"

/**
 * `ChartNoAxesColumnIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartNoAxesColumnIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalChartNoAxesColumn} {...props} />,
)

/**
 * `ChartNoAxesColumn` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ChartNoAxesColumnIcon` instead.
 */
export const ChartNoAxesColumn = ChartNoAxesColumnIcon
