import React from "react";

function BannerPage() {
  const image ="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  //const image = 'https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2139&q=80'
  return (
    <div
      className="flex flex-col justify-center items-center w-screen h-screen bg-cover bg-center py-20 max-w-full"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="mx-5 lg:mx-36">
        
        <h4 className="text-3xl text-slate-300">Fullstack development</h4>
        <h1 className="font-bold lg:text-9xl text-5xl my-6">Lucas Rodrigues </h1>
        <button className="bg-red-800 p-7 pl-14 rounded-bl-full border-r-4 border-cyan-400 hover:scale-105 active:scale-95">
          DESCARGAR CV
        </button>
      </div>
    </div>
  );
}

export default BannerPage;
