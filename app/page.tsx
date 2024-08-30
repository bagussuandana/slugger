import Image from "next/image";
import SluggerForm from "./components/slugger-form";

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="flex flex-col">
                <div className="w-full justify-start items-center flex gap-2">
                    <Image
                        src="/logo.svg"
                        alt="Sluggers Logo"
                        width={30}
                        height={30}
                        priority
                    />
                    <h1>Sluggers</h1>
                </div>
                <SluggerForm />
            </div>
        </div>
    );
}
