import React from "react";

function HolyGrail() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4 flex justify-center font-black">
        Header
      </header>

      {/* Middle section */}
      <div className="flex flex-1 ">
        {/* Navigation */}
        <nav className="bg-red-700 w-64 p-4 text-white flex justify-center font-black items-center">
          Navigation
        </nav>

        {/* Main */}
        <main className="bg-green-700 flex-1 p-4 text-white flex justify-center font-black items-center ">
          Main
        </main>

        {/* Sidebar */}
        <aside className=" bg-blue-700 w-64 p-4 text-white flex justify-center font-black items-center">
          Sidebar
        </aside>
      </div>

      {/* Footer */}
      <footer className=" flex justify-center bg-gray-900 text-white p-4 flex justify-center font-black ">
        Footer
      </footer>
    </div>
  );
}

export default HolyGrail;
