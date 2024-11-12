import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { MessageCircleDashed as OriginalMessageCircleDashed } from "lucide-react"

/**
 * `MessageCircleDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleDashedIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalMessageCircleDashed} {...props} />
  ),
)

/**
 * `MessageCircleDashed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `MessageCircleDashedIcon` instead.
 */
export const MessageCircleDashed = MessageCircleDashedIcon
