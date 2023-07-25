import { create } from "zustand";
import { MessageType } from '@/types';

interface MessageboxStore {
    isOpen: boolean;
    variant: MessageType,
    message: string,
    onOpen: (variant: MessageType, message: string) => void;
    onClose: () => void;
}

const useMessageBox = create<MessageboxStore>((set) => ({
    isOpen: false,
    variant: MessageType.information,
    message: '',
    onOpen: (variant: MessageType, message: string) => set({ isOpen: true, variant: variant, message: message }),
    onClose: () => set({ isOpen: false }),
}));

export default useMessageBox;
