import footerStyles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={footerStyles.container}>
            <h2 className={footerStyles.title}>The Orpheus Show</h2>
            <ul className={footerStyles.social}>
                <li>
                    <a href="https://github.com/Orpheuspod" target="_blank">
                        <img src="/github.svg" className={footerStyles.socialItem} />
                    </a>
                </li>
            </ul>
            <h3>This Website/Podcast is Lisenced in Apache-2.0, and is not affilated with Hack Club or endorsed by Hack Club.</h3>
            <h4>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" target="_blank">Dave Gandy</a> from <a href="https://www.flaticon.com/">Flaticon</a></h4>
            
        </div>
    )
}

export default Footer
