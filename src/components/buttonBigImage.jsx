import { useEffect } from 'react'
import { useModalStore } from '../services/store'

export function ButtonImage({ name, img }) {
  const openImageModal = useModalStore(state => state.openImageModal)

  return (
    <div 
    style={{ 
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0
    }}
    onClick={() => openImageModal(img, name)}>
    </div>
  )
}
