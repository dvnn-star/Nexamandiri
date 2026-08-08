import { computed } from 'vue'
import { useI18n } from '#imports'
import { content as contentId } from '~/data/id'
import { content as contentEn } from '~/data/en'

export const useCompanyData = () => {
  const { locale } = useI18n()
  
  const content = computed(() => {
    return locale.value === 'en' ? contentEn : contentId
  })

  return { content }
}
