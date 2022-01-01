import styles from "../styles/container.module.css"
import Counter from "./Counter"
import Image from "next/image"
import { FaDollarSign, FaGithub, FaKeyboard } from 'react-icons/fa'
import ShortcutsModal from './ShortcutsModal'
import SlpModal from "./SlpModal";
import {useState} from "react";

export default function Container(){
    const [brl, setBrl] = useState()
    const [usd, setUsd] = useState()
    const [brlAxs, setBrlAxs] = useState()
    const [usdAxs, setUsdAxs] = useState()

    const [shortcutsShow, setShortcutsShow] = useState(false)
    const [slpShow, setSlpShow] = useState(false)

    async function getPrices(){
        try{
            const slpRes = await fetch("https://api.coingecko.com/api/v3/coins/smooth-love-potion")
            const slpData = await slpRes.json()
            setBrl(slpData.market_data.current_price.brl)
            setUsd(slpData.market_data.current_price.usd)

            const axsRes = await fetch("https://api.coingecko.com/api/v3/coins/axie-infinity")
            const axsData = await axsRes.json()
            setBrlAxs(axsData.market_data.current_price.brl)
            setUsdAxs(axsData.market_data.current_price.usd)
        }
        catch(error){
            console.error("Request to Coin Gecko API failed. Please try again later.")
        }
    }

    async function handleSlp(){
        await getPrices()
        setSlpShow(true)
    }

    return(
        <div className={styles.container}>
            <header className={styles.title}>
                Energy Counter
                <button className={styles.help} onClick={() => setShortcutsShow(true)}>
                    <FaKeyboard />
                </button>

                <button className={styles.help} onClick={handleSlp}>
                    <FaDollarSign />
                </button>
            </header>

            <main className={styles.content}>
                <Image src="/images/axie.png" alt="Beast Axie" width={136} height={110}/>
                <Counter />
            </main>

            <footer className={styles.footer}>
                Created by
                <a href="https://github.com/abid-lohan" target="_blank" rel="noreferrer">
                    Abid Lohan <FaGithub className={styles.github}/>
                </a>
            </footer>

            <ShortcutsModal show={shortcutsShow} onHide={() => setShortcutsShow(false)} />
            <SlpModal brl={brl} usd={usd} brlAxs={brlAxs} usdAxs={usdAxs} show={slpShow} onHide={() => setSlpShow(false)}/>
        </div>
    )
}