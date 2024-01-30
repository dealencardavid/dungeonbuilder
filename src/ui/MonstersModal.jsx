import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { RESULTS_PER_PAGE } from "../configs/config";

import { FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";

import ModalMonster from "./ModalMonster";

function MonstersModal({ isOpen, setIsOpen }) {
  const { encounterId } = useParams();
  const { monsters } = useSelector((state) => state.monsters);
  const [query, setQuery] = useState("");

  // Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const maxPages = Math.ceil(monsters.length / RESULTS_PER_PAGE);
  const lastMonsterIndex = currentPage * RESULTS_PER_PAGE;
  const firstMonsterIndex = lastMonsterIndex - RESULTS_PER_PAGE;

  function prevPage() {
    if (currentPage === 1) return;
    setCurrentPage((prevPage) => prevPage - 1);
  }
  function nextPage() {
    if (currentPage === maxPages) return;
    setCurrentPage((prevPage) => prevPage + 1);
  }

  // Filtering
  const filteredMonsters = monsters
    .filter((monster) =>
      monster.name.toLowerCase().includes(query.toLowerCase())
    )
    .slice(firstMonsterIndex, lastMonsterIndex);

  // Set page to 1 if query changes
  useEffect(
    function () {
      setCurrentPage(1);
    },
    [query]
  );

  // Clean up
  useEffect(
    function () {
      setQuery("");
      setCurrentPage(1);
    },
    [isOpen]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-6 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className=" bg-mainBlue-400 px-6 pt-8 pb-4 rounded-lg w-full max-w-lg border border-black cursor-default overflow-hidden relative"
          >
            <button
              className="absolute top-2 right-2 text-lg text-white transition-all duration-50 hover:text-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <FiX />
            </button>
            <div className="z-10 flex flex-col items-center gap-4">
              <input
                type="text"
                id="monsterName"
                className="w-full rounded-lg px-4 py-2 border border-black shadow-container focus:outline-none"
                placeholder="Monster"
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="w-full rounded-lg bg-white px-4 py-2 border border-black shadow-container flex flex-col divide-y-[0.5px] divide-dashed divide-black">
                <div className="grid grid-cols-[1fr_50px] mb-2">
                  <p>Name</p>
                  <p className="">Add</p>
                </div>
                {filteredMonsters.map((monster, index) => (
                  <ModalMonster
                    key={index}
                    name={monster.name}
                    monsterIndex={monster.index}
                    encounterId={encounterId}
                  />
                ))}
              </div>
              <div className="flex gap-1 items-center text-white">
                <button
                  className="transition-all duration-50 hover:text-gray-100"
                  onClick={prevPage}
                >
                  <FiArrowLeft />
                </button>
                <span className=" font-light">{currentPage}</span>
                <button
                  className="transition-all duration-50 hover:text-gray-100"
                  onClick={nextPage}
                >
                  <FiArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MonstersModal;
