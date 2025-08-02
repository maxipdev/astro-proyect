import { useModalStore } from '../services/store.js'
import '../services/modalImage.css'

export function BigImage () {
    const { imageModal, selectedImg, selectedName, closeImageModal } = useModalStore()

    if (!imageModal) return null

    return (
        <div className="contenedor-imagen-modal">
            <div className="imagen-modal">
                <div className="close-modal" onClick={()=> closeImageModal()}>X</div>
                <img 
                src={`https://bswmbazkzzilbxoodxmr.supabase.co/storage/v1/object/public/products/public/${selectedImg}`}
                alt={selectedName}
                loading="lazy"
                />
            </div>
        </div>
    )
}