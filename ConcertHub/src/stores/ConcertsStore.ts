import { defineStore } from 'pinia'
import axios from 'axios'

export const useHandleConcertStore = defineStore('favorite', {
  state: () => ({
    favorites: [] as any[],
    concerts: [] as any[],
  }),
  actions: {
    async getConcerts() {
      try {
        const res = await axios.get('http://localhost:3000/api/get-concert-list')
        this.concerts = res.data || []
      } catch (error) {
        console.error('Server down ili error')
        this.concerts = []
      }
    },
    async addToFavorite(concertData: any) {
      try {
        const res = await axios.post('http://localhost:3000/api/add-to-favourite', concertData)
        console.log('Poslani podaci pinia: ', res.data)
        this.favorites.push(concertData)
        return res.data
      } catch (error) {
        console.error('ID se nije poslao')
      }
    },
    async removeFavorite(concertID: any) {
      try {
        const res = await axios.delete('http://localhost:3000/api/remove-from-favourite', {
          data: {
            id: concertID,
          },
        })
        console.log('Poslani podaci: ', res.data)
        this.favorites = this.favorites.filter(c => c.id !== concertID)
        return res.data
      } catch (error) {
        console.error('Dogodila se greška prilikom brisanja')
      }
    },
    async getFavorites() {
      try {
        const res = await axios.get('http://localhost:3000/api/get-favourites')
        this.favorites = res.data || []
      } catch (error) {
        console.error('Server down ili error')
        this.favorites = []
      }
    },
  },
})
