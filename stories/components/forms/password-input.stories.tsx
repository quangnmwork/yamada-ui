import type { Meta, StoryFn } from "@storybook/react"
import { PasswordInput } from "@yamada-ui/react"
import { useState } from "react"

type Story = StoryFn<typeof PasswordInput>

const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
  title: "Components / Forms / PasswordInput",
}

export default meta

export const basic: Story = () => {
  return <PasswordInput />
}

export const isDisabled: Story = () => {
  return <PasswordInput isDisabled />
}

export const withSize: Story = () => {
  return (
    <>
      <PasswordInput size="xs" />
      <PasswordInput size="sm" />
      <PasswordInput size="md" />
      <PasswordInput size="lg" />
      <PasswordInput size="xl" />
    </>
  )
}

export const withControlledVisibility: Story = () => {
  const [visible, setVisible] = useState(true)

  return <PasswordInput visible={visible} onVisibleChange={setVisible} />
}
