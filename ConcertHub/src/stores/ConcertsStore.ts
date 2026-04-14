import { defineStore } from 'pinia'
import axios from 'axios'

export const useFetchConcertsStore = defineStore('fetchConcerts', () => {
  const getConcerts = axios.get('http://localhost:3000/api/get-concert-list')

  return { getConcerts }
})

export const useAddToFavoriteStore = defineStore('favorite', {
  state: () => ({
    favorites: [],
    addedToFavoriteState: false,
  }),
  getters: {
    addedToFavorite(state: any) {
      return state.addedToFavoriteState
    },
  },
  actions: {
    async addToFavorite(concertData: any) {
      try {
        const res = await axios.post('http://localhost:3000/api/add-to-favourite', concertData)
        console.log('Poslani podaci pinia: ', res.data)
        this.addedToFavoriteState = true
        return res.data
      } catch (error) {
        console.error('ID se nije poslao')
      }
    },
  },
})
