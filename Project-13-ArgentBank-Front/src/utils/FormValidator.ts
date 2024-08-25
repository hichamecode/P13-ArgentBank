

class FormValidator {

      static validateEmail(email: string): boolean {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
            return emailRegex.test(email)
      }
      
      static validatePassword(password: string): boolean {
            return password.length >= 6
      }
      
      static validateName(name: string): boolean {
            return name.length >= 3
      }
      
      static validatePhone(phone: string): boolean {
            const phoneRegex = /^\d{10}$/
            return phoneRegex.test(phone)
      }
      
      static validateUsername(username: string): boolean {
            return username.length >= 3
      }

}

export default FormValidator