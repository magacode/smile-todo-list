import { MODAL_OPEN, MODAL_CLOSE } from '../constants';

const modalOpen = () => {
    return {
        type: MODAL_OPEN,
    }
}

const modalClose = () => {
    return {
        type: MODAL_CLOSE,
    }
}

export {
    modalOpen,
    modalClose,
}