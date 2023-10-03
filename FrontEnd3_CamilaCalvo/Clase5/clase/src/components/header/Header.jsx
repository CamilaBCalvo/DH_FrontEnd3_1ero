import styles from './Header.module.css'

const Header = () => {
    console.log('header', styles)
    return(
        <header>
            <h1 className={styles.h1}>My App</h1>
            <img src="/sburb.svg" width="50px" height="50px" alt="Sburb"></img>
        </header>
    )
}
export default Header