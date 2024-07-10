import {createTest} from "@storybook/react/experimental-playwright"
import { test as base, expect } from '@playwright/experimental-ct-react'

import stories from "./Top.stories.portable"
import { describe } from "node:test"
const test = createTest(base)

describe('Top', () => {
  test('Default', async ({ mount }) => {
    await mount(<stories.Base />)
  })
})

