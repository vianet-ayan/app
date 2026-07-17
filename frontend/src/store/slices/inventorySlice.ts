import { createSlice } from '@reduxjs/toolkit'

interface InventoryState {
  items: any[]
}

const initialState: InventoryState = {
  items: [],
}

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {},
})

export default inventorySlice.reducer
