import { UnsecuredJWT } from 'jose'
import { type UserDto } from '~~/server/db/schema'

export const useUser = () => {
  const token = useCookie('token')

  const decode = () => {
    if (!token.value) return null
    try {
      const decoded = UnsecuredJWT.decode(token.value).payload
      const user = decoded.user as UserDto
      console.log(user)
      return user
    } catch (_e) {
      return null
    }
  }

  const user = ref<UserDto | null>(decode())

  return {
    user
  }
}