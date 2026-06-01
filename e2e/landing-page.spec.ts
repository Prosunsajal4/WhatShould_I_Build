import { test, expect } from '@playwright/test'

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display hero section', async ({ page }) => {
    const heading = page.locator('h1')
    await expect(heading).toContainText('Never Run Out of Project Ideas Again')
  })

  test('should have navigation links', async ({ page }) => {
    const featureLink = page.locator('a', { hasText: 'Features' })
    const pricingLink = page.locator('a', { hasText: 'Pricing' })

    await expect(featureLink).toBeVisible()
    await expect(pricingLink).toBeVisible()
  })

  test('should have call-to-action buttons', async ({ page }) => {
    const getStartedButton = page.locator('button', { hasText: 'Get Started Free' })
    const learnMoreButton = page.locator('button', { hasText: 'Learn More' })

    await expect(getStartedButton).toBeVisible()
    await expect(learnMoreButton).toBeVisible()
  })

  test('should display feature cards', async ({ page }) => {
    const featureCards = page.locator('[role="article"]')
    await expect(featureCards).toHaveCount(3)
  })

  test('should navigate to features page', async ({ page }) => {
    const featureLink = page.locator('a', { hasText: 'Features' })
    await featureLink.click()

    await expect(page).toHaveURL('/features')
    const heading = page.locator('h1')
    await expect(heading).toContainText('Powerful Features')
  })

  test('should navigate to pricing page', async ({ page }) => {
    const pricingLink = page.locator('a', { hasText: 'Pricing' })
    await pricingLink.click()

    await expect(page).toHaveURL('/pricing')
    const heading = page.locator('h1')
    await expect(heading).toContainText('Simple, Transparent Pricing')
  })
})

test.describe('Authentication Pages', () => {
  test('should navigate to login page', async ({ page }) => {
    await page.goto('/')
    const loginButton = page.locator('a, button', { hasText: 'Sign In' }).first()
    await loginButton.click()

    await expect(page).toHaveURL('/login')
  })

  test('should navigate to signup page', async ({ page }) => {
    await page.goto('/login')
    const signupLink = page.locator('a', { hasText: 'create one' })
    await signupLink.click()

    await expect(page).toHaveURL('/signup')
  })
})
