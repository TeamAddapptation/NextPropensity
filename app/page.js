import Image from "next/image";
import styles from "./page.module.css";
import Campaigns from "./campaigns/campaignList/page";

export default function Home() {
	return (
		<main className={styles.main}>
			<Campaigns />
		</main>
	);
}
