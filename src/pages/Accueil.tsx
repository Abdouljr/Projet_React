import { Apropos } from "../composants/Apropos";
import { ReseauxSociaux } from "../composants/ReseauxSociaux";
import { VideoYoutube } from "../composants/videoYoutube";

export const Accueil = () => {
    return (
        <main>
            <Apropos></Apropos>
            <VideoYoutube id="yHoI0n2VxMU"></VideoYoutube>
            <ReseauxSociaux></ReseauxSociaux>            
        </main>
    );
}