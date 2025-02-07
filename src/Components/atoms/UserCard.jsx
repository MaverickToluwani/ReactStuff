import styles from "../../styles/usercard.module.css"

export default function UserCard({ userName,
    userAge, userDescription}){
    return (
    <div clasName={styles.userCard}>
        <div className={styles.userInfo}>
            <p>Name</p>
            <p>{userName}</p>
        </div>
        <div className={styles.userInfo}>
            <p>Age</p>
            <p>{userAge}</p>
        </div>
        <div className={styles.userInfo}>
            <p>Description</p>
            <p>{userDescription}</p>
        </div>
    </div>)
}