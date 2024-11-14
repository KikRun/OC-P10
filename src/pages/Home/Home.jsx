import "./Home.css"
import chatIcon from "../../assets/img/icon-chat.webp"
import moneyIcon from "../../assets/img/icon-money.webp"
import securityIcon from "../../assets/img/icon-security.webp"
import Values from "../../components/Values/Values"


export default function Home() {
    return (
        <main>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <Values
                    title={"You are our #1 priority"}
                    icon={chatIcon}
                    text={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."}
                />
                <Values
                    title={"More savings means higher rates"}
                    icon={moneyIcon}
                    text={"The more you save with us, the higher your interest rate will be!"}
                />
                <Values
                    title={"Security you can trust"}
                    icon={securityIcon}
                    text={"We use top of the line encryption to make sure your data and money is always safe."}
                />
            </section>
        </main>
    );
}

