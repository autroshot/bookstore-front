import { useCallback } from 'react';

export default function useAlert() {
    const showAlert = useCallback((message: string) => {
        alert(message);
    }, []);

    return showAlert;
}
