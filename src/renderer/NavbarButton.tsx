interface Props {
    iconId: string;
    iconLabel: string;
}

export default function NavbarButton(props: Props) {
    return (
        <button className="group bg-zinc-700 hover:bg-zinc-600 text-white font-bold rounded-md flex items-center justify-center aspect-square hover:aspect-auto hover:px-2 transition-all space-x-2 overflow-hidden">
            <i className={"fas fa-" + props.iconId}></i>
            <span className="hidden group-hover:block">{props.iconLabel}</span>
        </button>
    );
}
