export const checkPath = (path: string, pathname: string): boolean => {
  const pathnameWithoutSleshes = path.replace(/\//g, '')
  if (
    pathname.includes(pathnameWithoutSleshes) &&
    pathnameWithoutSleshes !== ''
  )
    return true
  else if (pathnameWithoutSleshes == '' && pathname === '/') return true
  return false
}
