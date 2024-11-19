import { type H3Event } from 'h3'
import { UnsecuredJWT } from 'jose'
import { UserDto } from '../db/schema'

export const assertAuthed = (event: H3Event) => {
  try {
    const token = getCookie(event, 'token')
    if (!token) throw createError({
      statusCode: 401,
      message: 'Необходимо авторизоваться',
    })
    const decoded = UnsecuredJWT.decode(token)
    if (!decoded.payload) throw createError({
      statusCode: 401,
      message: 'Неверный токен',
    })
    const user = decoded.payload.user as UserDto
    return { user }
  } catch (_e) {
    throw createError({
      statusCode: 401,
      message: 'Необходимо авторизоваться',
    })
  }
}