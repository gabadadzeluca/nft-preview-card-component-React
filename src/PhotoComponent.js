import styles from "./photo.module.css";
import icon from "./images/icon-view.svg";


export default function PhotoComponent(){
    return (
        <div className={styles.photo}>
            <div className={styles.view}>
                <img src={icon} alt="" />
            </div>
        </div>
        
    )
}