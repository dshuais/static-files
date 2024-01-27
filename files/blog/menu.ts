
type Social = {
  icon: string,
  link: string,
}

type Note = {
  title: string,
  content: string,
  avatar: string,
  updateTime: string,
  social?: Social[]
}

export const notes = (): Note[] => ([
  { title: 'Note 1', content: 'This is note 1', avatar: 'https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/dshuais', updateTime: '2024-01-27 18:00' }
])
