import React from 'react'
import { create } from 'zustand'

type useLoginModalProps = {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}

// Hooks handling the state of login modal 
export const useLoginModal = create<useLoginModalProps>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))