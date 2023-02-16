import styles from './author.module.css';
import img from './images/image-avatar.png';

export default function AuthorComponent(){
    return(
        <div className={styles.authorDiv}>
            <img src={img} alt="" className={styles.profilePic}/>
            <div className={styles.author}>
                <span>Creation of</span>
                <span className={styles.name}>Jules Wyvern</span>
            </div>
        </div>
    )
}