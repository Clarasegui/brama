import '../styles/ep.css';
import Logo from '../components/logo';
import Navbar from '../components/navbar';

function Ep() {
    return (
        <div className="ep_container">
            <header>
                <Logo className="ep_logo" />
                <Navbar className="ep_navbar" />
            </header>
            <div className="ep_content_container">
                <div className="ep_content_left">
                    <p>Puisant son infuence tant dans le
                        krautrock que le rock psychédélique ou
                        la noise, cet EP est résolument inscrit
                        dans un folklore imaginaire bien à eux.
                        Vielle à roue, guitare et batterie
                        transfigurées dans une poésie orageuse
                        occitane et un hypno-rock solaire, cette
                        première sortie du groupe est un DIY
                        pétaradant saturé d’électricité.
                        Glaner : recueillir les épis qui ont
                        échappé aux moissons ; ici se trouve
                        l’énergie de ce premier opus, glanée
                        au milieu d’un rock mondialisé et de
                        traditions populaires locales.</p>
                </div>
                <div className="ep_content_middle"></div>
                <div className="ep_content_right"></div>
            </div>
        </div>

    );
}

export default Ep;