import TextScramble from "./TextScramble"

export default function Header() {

    const words = ['DEVELOPER /', 'DESIGNER /', 'ENGINEER /', 'OCCASIONAL CHEF /'];
    
    return (
        <>
            <div className="header">
                <h1 className="header__title">&lt;<TextScramble words={words} />&gt;</h1>
                <h1>JOGO</h1>
                <hr className="header__border" />
            </div>
        </>
    )
}