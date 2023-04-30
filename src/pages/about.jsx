import '../styles/about.css';
import Logo from '../components/logo';
import Navbar from '../components/navbar';

function About() {
    return (
        <div className="about_container">
            <header>
                <Logo className="about_logo" />
                <Navbar className="about_navbar" />
            </header>
            <div className="about_content_container">
                <div className="about_content_center">
                    <p>En s’engageant tête baissée dans les contre allées
                        du Massif Central, Brama a choisi l’exigence
                        impitoyable du trio pour exprimer pleinement
                        la transe d’un rock psychédélique farouche et
                        authentique, celui qui rince la tête et fait décoller
                        très loin, une claque vertigineuse qui remet
                        immédiatement les idées en place.
                        Guitare et batterie en état d’hypnose, vielle à roue
                        transfgurée passée à la pédale, bourdon taraudeur
                        et chants en occitan lumineux, Brama fait valser
                        les clichés, en allant puiser au plus profond de
                        la tradition populaire de quoi modeler le plus
                        contemporain des discours. Expérimental et libre
                        comme l’air, le jeune trio s’empare à bras le corps
                        d’un folklore solaire et rayonnant, où l’on danse avec
                        force sueur et moult rage, pour redessiner les
                        traits d’une poésie orageuse, un DIY pétaradant et
                        polyphonique aux accents noise et au doux parfum
                        de drone.
                        Mais si la chose musicale est fascinante, câble tendu
                        à l’extrême entre le corps ancestral d’une vielle
                        toute-puissante et un guitare/batterie furibond,
                        c’est le chant, arraché de ce maelström sonore,
                        qui finit d’élever cette construction inédite à des
                        hauteurs rarement entrevues ici-bas. De concert, le
                        groupe tout entier ondule, vire de bord et se plie aux
                        exigences d’une matière sans cesse en mouvement,
                        loin des codes du binaire et du tout-venant.</p>
                </div>
                <div className="about_content_right">
                    <div className="about_content_contacts">
                        <p className="about_info">CONTACTS :</p>
                        <p className="about_info">Tourneur : Yvan Soyouz</p>
                        <p className="about_info">yvan@soyouzmusic.com</p>
                    </div>
                    <div className="about_content_credits">
                        <p className="about_info">CRÉDITS :</p>
                        <p className="about_info">Brama : Paolo Gauthier,</p>
                        <p className="about_info">Simon Guy,</p>
                        <p className="about_info">Baptiste Lherbeil</p>
                        <p className="about_info">Identité visuelle :</p>
                        <p className="about_info">Flore Chemin</p>
                        <p className="about_info">Création graphique :</p>
                        <p className="about_info">Célia Richie</p>
                        <p className="about_info">Photo :</p>
                        <p className="about_info">Sylvestre NoniqueDesvergnes</p>
                        <p className="about_info">Typo :</p>
                        <p className="about_info">Velvetyne Type Foundry,
                            Basteleur</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;