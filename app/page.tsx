import Image from "next/image";
import SluggerForm from "./components/slugger-form";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Slugger Tool</h1>
      <SluggerForm />
    </div>
  );
}
