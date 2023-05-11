import React from 'react'
import { create } from 'zustand'

type useRegisterModalProps = {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}

// Hooks handling the state of signup modal 
export const useRegisterModal = create<useRegisterModalProps>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))