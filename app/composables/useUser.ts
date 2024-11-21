import { UnsecuredJWT } from 'jose'
import { type UserDto } from '~~/server/db/schema'


const decode = () => {
  const token = useCookie('token')

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

export const useUser = () => {
  const user = useState<UserDto | null>('user', () => decode())

  return {
    user
  }
}