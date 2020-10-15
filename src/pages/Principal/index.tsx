import React from "react";
import {Link} from "react-router-dom";

import { Container } from "./styles";
import bgI from "../../assets/bg_image.jpg";

import { FaCocktail } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { MdContacts } from "react-icons/md";

const PrincipalPages: React.FC = () => {
  return (
    <Container style={{ backgroundImage: `url(${bgI})` }}>
      <ul>
        <li>
          <Link to="/nossa_carta">
          <FaCocktail />
          Nossa Carta</Link>
        </li>
        <li>
        <Link to="/drink_semana">
          <FaAddressCard />
          Drink da Semana</Link>
        </li>
        <li>
          <MdContacts />
          Contato
        </li>
      </ul>
    </Container>
  );
};

export default PrincipalPages;
