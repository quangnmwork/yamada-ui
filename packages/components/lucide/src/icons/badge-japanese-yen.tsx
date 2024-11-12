import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { BadgeJapaneseYen as OriginalBadgeJapaneseYen } from "lucide-react"

/**
 * `BadgeJapaneseYenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeJapaneseYenIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalBadgeJapaneseYen} {...props} />,
)

/**
 * `BadgeJapaneseYen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `BadgeJapaneseYenIcon` instead.
 */
export const BadgeJapaneseYen = BadgeJapaneseYenIcon
