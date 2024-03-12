
import styles from '../../styles/Developers.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
    //inside this fetching the data its an async function runs at build time
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props : {developers: data}
    }
}

//when we have file name as index it creates a root path to the file.
//therefore when we want to open test file w ehad to write localhost 3000/nextFolder/test
//but for index inside nextFolder just localhost 3000/nextFolder/
const Developers = ({ developers }) => {
    return (
        <div>
            <h1> All Developers </h1>
            {developers.map(developer => (
                <Link href={'/nextFolder/' + developer.id} key={developer.id}>
                    <a className={styles.single}>
                       <h3>{developer.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}
 
export default Developers;