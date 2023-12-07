import { atom } from 'recoil';

const initialStateSizes = {
    sizes: { w: 0, h: 0 },
    isMobile: false
};

const initialScrollState = {
    top: 0,
    left: 0,
}

const initialContainerScrollProgress = {
    progress: 0
}

export const SizesState = atom({
    key: 'SizesState',
    default: initialStateSizes
});

export const ScrollState = atom({
    key: 'ScrollState',
    default: initialScrollState
});

export const ScrollDirectionState = atom({
    key: 'ScrollDirectionState',
    default: ''
})

export const ContainerScrollProgressState = atom({
    key: 'ContainerScrollProgressState',
    default: initialContainerScrollProgress
})

