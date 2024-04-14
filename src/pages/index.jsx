import Porta from "@/components/Porta";
<<<<<<< HEAD
import PortaModel from "../model/porta"
import { useState } from "react";


export default function Home() {
  const [ p1, setP1 ] = useState(new PortaModel(1))

  return (
    <div style={{display: "flex"}}>
      <Porta porta={p1} />
=======


export default function Home() {
  return (
    <div>
      <Porta />
>>>>>>> 1cdd1421345e6ddab64d6debf45a376909bafb97
    </div>
  );
}
