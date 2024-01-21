/* eslint-disable react/prop-types */

import TextScramble from "./TextScramble"

export default function Header() {

    const words = ['DEVELOPER /', 'DESIGNER /', 'CODER /', 'ENGINEER /', 'OCCASIONAL CHEF /'];
    
    return (
        <>
            <div className="header">
                <div className="header__details flex">
                    <h1 className="header__title">&lt;<TextScramble words={words} />&gt;</h1>
                    <h1 className="header__name">JOGO</h1>
                </div>
                <hr className="border" />
            </div>
        </>
    )
}