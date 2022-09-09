import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExerciseBodyPart,
  fetchBodyPart,
} from "../../api/exercisesApi/exerciseApi";

import { MdUmbrella, MdArrowCircleDown } from "react-icons/md";
import LazySpinner from "../LazySpinner/LazySpinner";

import "./Menu.css";

interface Props {
  handleBodyPart: (val: string) => void;
}

const Menu = (props: Props) => {
  const { handleBodyPart } = props;
  const [active, setActive] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const { data: bodyPart, isLoading } = useQuery<ExerciseBodyPart[]>(
    ["body-part"],
    fetchBodyPart
  );

  return (
    <AnimatePresence>
      <div className="menu-container">
        <div className="menu-container--md">
          <h2>Exercises By Target Body</h2>
          <ul className="menu-list">
            {isLoading ? (
              <LazySpinner
                show={true}
                delay={400}
                size={15}
                color={"#441d32"}
              />
            ) : (
              bodyPart?.map((part, indx) => (
                <li
                  key={indx}
                  className={active === indx ? "menu-list__item--active" : ""}
                  onClick={() => {
                    setActive(indx);
                    handleBodyPart(part);
                  }}
                >
                  <MdUmbrella className="menu-icon" />
                  {part}
                </li>
              ))
            )}
          </ul>
        </div>

        <div className="menu-container--sm">
          <h2>
            Exercises By Target Body
            <span
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <MdArrowCircleDown className="drop-down__icon" />
            </span>
          </h2>

          {showMenu && (
            <motion.ul
              initial={{ x: "-150%" }}
              animate={{ x: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              className="menu-list"
            >
              {isLoading ? (
                <LazySpinner
                  show={true}
                  delay={400}
                  size={15}
                  color={"#441d32"}
                />
              ) : (
                bodyPart?.map((part, indx) => (
                  <li
                    key={indx}
                    className={active === indx ? "menu-list__item--active" : ""}
                    onClick={() => {
                      setActive(indx);
                      setShowMenu(!showMenu);
                      handleBodyPart(part);
                    }}
                  >
                    <MdUmbrella className="menu-icon" />
                    {part}
                  </li>
                ))
              )}
            </motion.ul>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Menu;
