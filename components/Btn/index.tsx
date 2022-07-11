import Link from "next/link"

type Props = {
    link: string
    text: string
}

const Btn = (props: Props) => {
    return (
        <Link href={props.link}>
            <button className="bg-violet-600 text-white text-2xl p-4 mt-5 rounded-xl hover:bg-violet-400 max-w-min">
                {props.text}
            </button>
        </Link>

    )
}

export default Btn