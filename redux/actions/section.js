import { section } from '../const'

//homepage
export const nextSectionHomePage = () => ({
  type: section.NEXT_SECTION_HOMEPAGE
})
export const prevSectionHomePage = () => ({
  type: section.PREV_SECTION_HOMEPAGE
})

export const moveToSectionHomePage = sectionNum => ({
  type: section.MOVE_TO_SECTION_HOMEPAGE,
  sectionNum
})

//homepage section1
export const nextSlideHomePageSection1 = () => ({
  type: section.NEXT_SLIDE_HOMEPAGE_SECTION1
})
export const prevSlideHomePageSection1 = () => ({
  type: section.PREV_SLIDE_HOMEPAGE_SECTION1
})
export const moveToSlideHomePageSection1 = slideNum => ({
  type: section.MOVE_TO_SLIDE_HOMEPAGE_SECTION1,
  slideNum
})

//contact us
export const nextSectionContactUs = () => ({
  type: section.NEXT_SECTION_CONTACTUS
})
export const prevSectionContactUs = () => ({
  type: section.PREV_SECTION_CONTACTUS
})
export const moveToSectionContactUs = sectionNum => ({
  type: section.MOVE_TO_SECTION_CONTACTUS,
  sectionNum
})
