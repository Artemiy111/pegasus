import { type H3Event } from 'h3'
import { UnsecuredJWT } from 'jose'
import { UserDto } from '../db/schema'

export const maybeAuthed = (event: H3Event) => {
  try {
    const token = getCookie(event, 'token')
    if (!token) return null
    const decoded = UnsecuredJWT.decode(token)
    if (!decoded.payload) return null
    const user = decoded.payload.user as UserDto
    return user
  } catch (_e) { return null }
}