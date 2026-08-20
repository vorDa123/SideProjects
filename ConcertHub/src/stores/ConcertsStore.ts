import { defineStore } from 'pinia'
import api from '@/api'

export const useHandleConcertStore = defineStore('favorite', {
  state: () => ({
    favorites: [] as any[],
    concerts: [] as any[],
    attended: [] as any[],
  }),
  actions: {
    async getConcerts() {
      console.log("Trenutni API URL koji Vite vidi:", import.meta.env.API_URL)
      try {
        const res = await api.get('/api/get-concert-list')
        this.concerts = res.data || []
      } catch (error) {
        console.error('Server down ili error')
        this.concerts = []
      }
    },
    async addToFavorite(concertData: any) {
      try {
        const res = await api.post('/api/add-to-favourite', concertData)
        this.favorites.push(concertData)
        return res.data
      } catch (error) {
        console.error('ID se nije poslao')
      }
    },
    async addToAttended(concertData: any) {
      try {
        const res = await api.post('/api/add-to-attended', concertData)
        this.attended.push(concertData)
        return res.data
      } catch (error) {
        console.error('ID se nije poslao')
      }
    },
    async removeFavorite(concertID: any) {
      try {
        const res = await api.delete('/api/remove-from-favourite', {
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
    async removeAttended(concertID: any) {
      try {
        const res = await api.delete('/api/remove-from-attended', {
          data: {
            id: concertID,
          },
        })
        console.log('Poslani podaci: ', res.data)
        this.attended = this.attended.filter(c => c.id !== concertID)
        return res.data
      } catch (error) {
        console.error('Dogodila se greška prilikom brisanja')
      }
    },
    async getFavorites() {
      try {
        const res = await api.get('/api/get-favourites')
        this.favorites = res.data || []
      } catch (error) {
        console.error('Server down ili error')
        this.favorites = []
      }
    },
     async getAttended() {
      try {
        const res = await api.get('/api/get-attended')
        this.attended = res.data || []
      } catch (error) {
        console.error('Server down ili error')
        this.attended = []
      }
    },
  },
})
