import icon from '../../assets/icon.svg';

export default function Home() {
    return (
        <>
        <main className="pt-[34px]">
            <span>:Home Component:</span>
            
            <div className="self-center">
                <img width="200" alt="icon" src={icon} />
            </div>
        </main>
        </>
    );
}