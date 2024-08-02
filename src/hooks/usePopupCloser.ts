import { useEffect, useState } from "react";

type cortej = [boolean, React.Dispatch<React.SetStateAction<boolean>>]

export const usePopupCloser = (elemRef: React.MutableRefObject<undefined>): cortej => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const popUpHandler = (event: Event) => {
          if(!event.composedPath().includes(elemRef.current)) {
            setIsOpen(false);
          }
        }
    
        document.body.addEventListener("click", popUpHandler)
    
        return () => {
          document.body.removeEventListener("click", popUpHandler);
        }
      }, []);

      return [isOpen, setIsOpen];
}