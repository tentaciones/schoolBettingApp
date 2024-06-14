import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Table from "@/components/Table";
import Latest from "@/components/Latest";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const betButton=<button className="bg-[#D00000] text-white px-7 py-2 rounded-md">Bet</button>
const data = [
  {
    time: '02/25 12:00 PM',
    match: 'Vitoria vs Goianiense GO',
    odds: '1.80',
    predictions: 'Home Win',
    bet: betButton
  },
  {
    time: '02/25 12:00 PM',
    match: 'Man u  vs Man city',
    odds: '1.80',
    predictions: 'Home WinA',
    bet: betButton
  },

  {
    time: '02/25 12:00 PM',
    match: 'Vitoria vs Goianiense GO',
    odds: '1.80',
    predictions: 'Home Win',
    bet: betButton
  },
  {
    time: '02/25 12:00 PM',
    match: 'Man u  vs Man city',
    odds: '1.80',
    predictions: 'Home WinA',
    bet: betButton
  },

];

const columns = [
  { Header: 'Time', accessor: 'time' },
  { Header: 'Match', accessor: 'match' },
  { Header: 'Odds', accessor: 'odds' },
  { Header: 'Predictions', accessor: 'predictions' },
  { Header: 'Bet', accessor: "bet" }
];

export default function Home() {
  const [showPlaceBet, setShowBet]=useState(false)

  return (
    <main
      className={``}
    > 
<Navbar/>
{showPlaceBet?(      <div className="w-screen flex items-center justify-center h-[calc(100vh-160px)] "><Modal setShowBet={setShowBet}/></div>):(
  <div className=" h-[calc(100vh-80px)]  overflow-y-scroll bg-white">
<Hero setShowBet={setShowBet}/>
<p className="text-5xl font-bold text-center mt-20 text-black">Do You Have What It Takes To Win?</p>
<Table columns={columns} data={data} />
<Latest/>
<Footer/>

</div>
)}


  </main>
  );
}
