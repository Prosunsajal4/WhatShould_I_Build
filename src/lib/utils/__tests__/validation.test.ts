import {
  isValidEmail,
  isValidPassword,
  isValidUrl,
  sanitizeInput,
} from '@/lib/utils/validation'

describe('Validation Utils', () => {
  describe('isValidEmail', () => {
    it('should validate correct email addresses', () => {
      expect(isValidEmail('user@example.com')).toBe(true)
      expect(isValidEmail('test.user+tag@example.co.uk')).toBe(true)
    })

    it('should reject invalid email addresses', () => {
      expect(isValidEmail('invalid.email')).toBe(false)
      expect(isValidEmail('user@')).toBe(false)
      expect(isValidEmail('@example.com')).toBe(false)
    })
  })

  describe('isValidPassword', () => {
    it('should validate strong passwords', () => {
      expect(isValidPassword('SecurePass123')).toBe(true)
      expect(isValidPassword('MyPassword2024')).toBe(true)
    })

    it('should reject weak passwords', () => {
      expect(isValidPassword('short')).toBe(false) // Too short
      expect(isValidPassword('nouppercase123')).toBe(false) // No uppercase
      expect(isValidPassword('NOLOWERCASE123')).toBe(false) // No lowercase
      expect(isValidPassword('NoNumbers')).toBe(false) // No numbers
    })
  })

  describe('isValidUrl', () => {
    it('should validate correct URLs', () => {
      expect(isValidUrl('https://example.com')).toBe(true)
      expect(isValidUrl('http://localhost:3000')).toBe(true)
    })

    it('should reject invalid URLs', () => {
      expect(isValidUrl('not a url')).toBe(false)
      expect(isValidUrl('example.com')).toBe(false)
    })
  })

  describe('sanitizeInput', () => {
    it('should escape HTML characters', () => {
      expect(sanitizeInput('<script>alert("xss")</script>')).toBe(
        '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
      )
    })

    it('should trim whitespace', () => {
      expect(sanitizeInput('  hello  ')).toBe('hello')
    })
  })
})
