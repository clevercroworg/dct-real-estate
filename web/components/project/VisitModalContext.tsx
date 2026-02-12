"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface VisitModalContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const VisitModalContext = createContext<VisitModalContextType | undefined>(undefined);

export function VisitModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <VisitModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </VisitModalContext.Provider>
    );
}

export function useVisitModal() {
    const context = useContext(VisitModalContext);
    if (context === undefined) {
        throw new Error('useVisitModal must be used within a VisitModalProvider');
    }
    return context;
}
