export interface Props {
    porcentagePix: number;
    valueMax: number
}

export interface Pix {
    porcentagePix: number;
    valueMax: number
}


const loader = ({ porcentagePix, valueMax }: Props): Pix => { return { porcentagePix, valueMax } }

export default loader