import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { CarFrontIcon, ChartBarStackedIcon } from "@yamada-ui/lucide"
import {
  Button,
  FormControl,
  Input,
  PasswordInput,
  VStack,
} from "@yamada-ui/react"
import { useState } from "react"
import { useForm } from "react-hook-form"

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

export const isInvalid: Story = () => {
  return (
    <FormControl
      errorMessage="Password is required."
      isInvalid
      label="Password"
    >
      <PasswordInput />
    </FormControl>
  )
}

export const isDefaultVisible: Story = () => {
  return <PasswordInput defaultValue="123456" defaultVisible />
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

  return (
    <>
      <p>Password visibility: {visible ? "show" : "hide"}</p>
      <PasswordInput visible={visible} onVisibleChange={setVisible} />
    </>
  )
}

export const withCustomVisibilityIcon: Story = () => {
  return (
    <PasswordInput
      visibilityIcon={{ off: <CarFrontIcon />, on: <ChartBarStackedIcon /> }}
    />
  )
}

export const withReactHookForm: Story = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<{ password: string; username: string }>()

  const onSubmit: SubmitHandler<{ password: string; username: string }> = (
    data,
  ) => console.log("submit:", data)

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        errorMessage={errors.username?.message}
        isInvalid={!!errors.username}
        label="Username"
      >
        <Input
          {...register("username", {
            required: { message: "Username is required.", value: true },
          })}
        />
      </FormControl>
      <FormControl
        errorMessage={errors.password?.message}
        isInvalid={!!errors.password}
        label="Password"
      >
        <PasswordInput
          {...register("password", {
            required: { message: "Password is required.", value: true },
          })}
        />
      </FormControl>

      <Button type="submit">Submit</Button>
    </VStack>
  )
}
