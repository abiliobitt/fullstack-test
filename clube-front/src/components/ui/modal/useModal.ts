import { useState } from 'react'

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [title, setTitle] = useState('Modal');

  function toggle (title: string): void {
    setTitle(title);
    setIsShowing(!isShowing);
  }

  function hide () {
    setIsShowing(false);
  }

  return {
    isShowing,
    title,
    toggle,
    hide
  }
}

export default useModal