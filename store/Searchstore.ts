import { create } from 'zustand'



type Store = {
  searchText:string
}

type Actions = {
  setSearchText: (searchText: string) => void
  
}

export const useSearchStore = create<Store & Actions>()((set) => ({
    searchText:'',
    setSearchText:(searchText:string)=>set({
        searchText
    })
 

  
}))