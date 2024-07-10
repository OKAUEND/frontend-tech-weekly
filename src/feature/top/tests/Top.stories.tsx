
import { Meta,StoryObj } from "@storybook/react"
import { Top } from "../Top"

type Story = StoryObj<typeof Top>

const meta :Meta<typeof Top> = {
    title: "Top",
    component: Top,
}

export default meta

export const Base:Story = {}
