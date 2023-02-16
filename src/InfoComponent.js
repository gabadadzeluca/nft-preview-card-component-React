import styles from "./info.module.css"


export default function InfoComponent(){
    return(
        <div className="info-div">
            <h2>Equilibrium #3429</h2>
            <p>Our Equilibrium collection promotes balance and calm.</p>
            <div className={styles.inline}>
                <p className={styles.count}>
                    0.041 ETH
                </p>
                <p className={styles.time}>
                    3 days left
                </p>
            </div>
        </div>
    )
}