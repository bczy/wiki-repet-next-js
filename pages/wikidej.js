import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function WikiDej() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1> Welcome to this wikiDej</h1>
		</div>
	);
}
