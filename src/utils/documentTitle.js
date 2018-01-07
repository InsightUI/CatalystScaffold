export const CHANGE_TITLE = '@@CHANGE_TITLE'

export const getTitle = () => {
  return document.title
}

const updateTitle = (newTitle) => document.title = newTitle

export const titleReducer = (state = getTitle(), action) => {
  if (action.type === CHANGE_TITLE) {
    updateTitle(action.title)
    return getTitle()
  }
  return state
}

export const updateTitleAction = (title) => ({
  type: CHANGE_TITLE,
  title
})
