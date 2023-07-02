import NavbarButton from "./NavbarButton";

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 right-0 h-[34px] bg-zinc-800 flex justify-between pl-[73px]" id="navbar">
            <div className="flex justify-center space-x-4 h-[34px] p-1">
                {
                    [{iconId: 'play', iconLabel: 'Test'}, {iconId: 'download', iconLabel: 'Export'}, {iconId: 'share', iconLabel: 'Share'}].map((button, index) => (
                        <NavbarButton key={index} iconId={button.iconId} iconLabel={button.iconLabel} />
                    ))
                }
            </div>

            <div className="bg-rose-700">
                <i className="fa-solid fa-play"></i>
            </div>
            <div className="bg-lime-600">
                <i className="fa-solid fa-play"></i>
            </div>
        </div>
    );
}