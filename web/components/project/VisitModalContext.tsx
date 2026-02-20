"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface VisitModalContextType {
    isOpen: boolean;
    projectName: string | null;
    openModal: (project?: string) => void;
    closeModal: () => void;
}

const VisitModalContext = createContext<VisitModalContextType | undefined>(undefined);

export function VisitModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [projectName, setProjectName] = useState<string | null>(null);

    const openModal = (project?: string) => {
        if (project) {
            setProjectName(project);
        } else {
            setProjectName(null);
        }
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setTimeout(() => setProjectName(null), 300); // Clear after animation
    };

    return (
        <VisitModalContext.Provider value={{ isOpen, projectName, openModal, closeModal }}>
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
