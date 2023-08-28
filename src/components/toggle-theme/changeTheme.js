export const changeTheme = (isDark = false) => {
  const root= document.querySelector(':root')
  isDark ?
    root.setAttribute('dark-theme','')
    :
    root.removeAttribute('dark-theme')

}