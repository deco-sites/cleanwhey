export interface Props {
    /**
     * @description 15% = 0.15
     */
    porcentagePix: number;
    valueMax: number
}

export interface Pix {
    porcentagePix: number;
    valueMax: number
}


const loader = ({ porcentagePix, valueMax }: Props): Pix => { return { porcentagePix, valueMax } }

export default loader